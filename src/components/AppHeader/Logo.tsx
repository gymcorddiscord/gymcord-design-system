export interface LogoProps {
  /** Defaults to "Gymcord Fantasy". */
  wordmark?: string
}

/** The Gymcord Fantasy logo mark (prismatic gradient badge) + wordmark. */
export function Logo({ wordmark = 'Gymcord Fantasy' }: LogoProps) {
  return (
    <div className="gds-logo">
      <span className="gds-logo__mark" aria-hidden="true" />
      <span className="gds-logo__wordmark">{wordmark}</span>
    </div>
  )
}
