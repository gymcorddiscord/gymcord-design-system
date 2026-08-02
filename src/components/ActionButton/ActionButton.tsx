import type { ButtonHTMLAttributes, ReactNode } from 'react'

export interface ActionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode
  /** `lg` (56px) is the standard size; `sm` (40px) for compact/secondary placements. */
  size?: 'lg' | 'sm'
  /** Accessible label — required since the button is icon-only. */
  'aria-label': string
}

/**
 * Gymcord's floating action button — a circular, elevated, icon-only button for a
 * screen's single primary action (e.g. "+ Add gymnast", "+ New league"). Material's
 * FAB pattern, adapted to Gymcord's solid-teal brand fill.
 */
export function ActionButton({ icon, size = 'lg', className, ...rest }: ActionButtonProps) {
  const classes = ['gds-action-button', `gds-action-button--${size}`, className].filter(Boolean).join(' ')
  return (
    <button type="button" className={classes} {...rest}>
      {icon}
    </button>
  )
}
