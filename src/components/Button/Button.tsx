import type { ButtonHTMLAttributes, ReactNode } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. `primary` is a solid pill — never gradient-filled, per Gymcord's pill-button rendering fix. */
  variant?: 'primary' | 'secondary' | 'tertiary'
  /** Icon rendered before the label. */
  icon?: ReactNode
  children?: ReactNode
}

/** Gymcord Fantasy's standard button. Primary is a solid brand-teal pill; never apply a gradient fill to a large pill button. */
export function Button({ variant = 'primary', icon, children, className, ...rest }: ButtonProps) {
  const classes = ['gds-button', `gds-button--${variant}`, className].filter(Boolean).join(' ')
  return (
    <button className={classes} {...rest}>
      {icon ? <span className="gds-button__icon">{icon}</span> : null}
      {children}
    </button>
  )
}
