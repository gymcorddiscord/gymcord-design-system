import { useEffect, type ReactNode } from 'react'

export interface DialogProps {
  open: boolean
  onClose?: () => void
  title?: string
  children?: ReactNode
  /** Footer slot — typically Cancel/Submit buttons, right-aligned. */
  actions?: ReactNode
}

/**
 * Gymcord's dialog — a centered modal panel on a dimmed backdrop, closing on
 * backdrop click or Escape. Generic content + title + actions slots; the feedback
 * flow's "report a bug" box is built from this rather than one-off modal markup.
 */
export function Dialog({ open, onClose, title, children, actions }: DialogProps) {
  useEffect(() => {
    if (!open) return
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose?.()
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="gds-dialog-backdrop" onClick={onClose}>
      <div className="gds-dialog" role="dialog" aria-modal="true" aria-label={title} onClick={(e) => e.stopPropagation()}>
        {title ? <h3 className="gds-dialog__title">{title}</h3> : null}
        <div className="gds-dialog__body">{children}</div>
        {actions ? <div className="gds-dialog__actions">{actions}</div> : null}
      </div>
    </div>
  )
}
