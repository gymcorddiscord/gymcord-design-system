import { GYMCORD_LOGO_96 } from '../../assets/gymcordLogo'

export interface LogoProps {
  /** Defaults to "Gymcord Fantasy". */
  wordmark?: string
}

/** The real Gymcord logo mark + wordmark. Always use the official Gymcord logo image, never a placeholder. */
export function Logo({ wordmark = 'Gymcord Fantasy' }: LogoProps) {
  return (
    <div className="gds-logo">
      <img className="gds-logo__mark" src={GYMCORD_LOGO_96} alt="Gymcord" />
      <span className="gds-logo__wordmark">{wordmark}</span>
    </div>
  )
}
