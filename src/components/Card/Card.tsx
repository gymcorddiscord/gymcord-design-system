import type { CSSProperties, MouseEventHandler, ReactNode } from 'react'

export interface CardProps {
  children?: ReactNode
  /** `flat` (border only), `raised` (default shadow), `elevated` (deeper shadow) — Material's elevation tiers. */
  elevation?: 'flat' | 'raised' | 'elevated'
  /** Adds hover/press affordance for clickable cards (e.g. a league card). */
  interactive?: boolean
  onClick?: MouseEventHandler<HTMLDivElement>
  style?: CSSProperties
}

/**
 * Gymcord's card container — the same rounded bordered box used across the web app
 * (league cards, gymnast cards), with Material-style elevation tiers and an optional
 * interactive hover-lift for clickable cards.
 */
export function Card({ children, elevation = 'raised', interactive, onClick, style }: CardProps) {
  const classes = ['gds-card', `gds-card--${elevation}`, interactive ? 'gds-card--interactive' : ''].filter(Boolean).join(' ')
  return (
    <div className={classes} style={style} onClick={onClick} role={interactive ? 'button' : undefined} tabIndex={interactive ? 0 : undefined}>
      {children}
    </div>
  )
}
