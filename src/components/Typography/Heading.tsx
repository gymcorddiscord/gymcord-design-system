import type { ReactNode } from 'react'

export interface HeadingProps {
  /** Which heading level to render (both the tag and the visual size/weight). */
  level: 1 | 2 | 3
  children?: ReactNode
}

/** Gymcord's heading treatments — H1/H2/H3, all set in M PLUS 1p at a fixed weight/size per level. */
export function Heading({ level, children }: HeadingProps) {
  const Tag = (`h${level}` as const)
  return <Tag className={`gds-heading gds-heading--h${level}`}>{children}</Tag>
}
