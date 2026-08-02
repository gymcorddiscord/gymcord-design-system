import { useRef, useState, type ReactNode } from 'react'

export interface TooltipProps {
  content: ReactNode
  children: ReactNode
  side?: 'top' | 'bottom' | 'left' | 'right'
  /** Mounts the tooltip already visible — useful for demos; hover/focus still control it normally afterward. */
  defaultVisible?: boolean
}

/**
 * Gymcord's rollover tooltip — a small dark label that appears near a trigger on
 * hover or keyboard focus, after a short delay (Material's convention), and follows
 * on mouse-leave/blur. Wrap any single element as the trigger.
 */
export function Tooltip({ content, children, side = 'top', defaultVisible }: TooltipProps) {
  const [visible, setVisible] = useState(Boolean(defaultVisible))
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>()

  function show() {
    timeoutRef.current = setTimeout(() => setVisible(true), 400)
  }
  function hide() {
    clearTimeout(timeoutRef.current)
    setVisible(false)
  }

  return (
    <span className="gds-tooltip-wrapper" onMouseEnter={show} onMouseLeave={hide} onFocus={show} onBlur={hide}>
      {children}
      {visible ? (
        <span className={`gds-tooltip gds-tooltip--${side}`} role="tooltip">
          {content}
        </span>
      ) : null}
    </span>
  )
}
