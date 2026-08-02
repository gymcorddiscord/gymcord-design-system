import type { ReactNode } from 'react'

export interface TextProps {
  /** `body` is the default reading size; `caption` is for secondary/meta copy (team names, timestamps, helper text). */
  size?: 'body' | 'caption'
  /** `secondary`/`tertiary` reuse the same muted text colors used throughout the system (e.g. team name under a gymnast's name). */
  tone?: 'primary' | 'secondary' | 'tertiary'
  children?: ReactNode
}

/** Gymcord's body copy treatment — body/caption size, with the standard text-color tones. */
export function Text({ size = 'body', tone = 'primary', children }: TextProps) {
  return <p className={`gds-text gds-text--${size} gds-text--${tone}`}>{children}</p>
}
