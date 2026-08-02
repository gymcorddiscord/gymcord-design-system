export interface FooterProps {
  /** e.g. "v0.1.1" — every Gymcord site footer shows a version number, bumped on each push. */
  version: string
  termsUrl?: string
}

/** The standard Gymcord site footer: credit line, version, and a Terms & Privacy link. */
export function Footer({ version, termsUrl = 'https://gymcorddiscord.github.io/gymcord-home/terms.html' }: FooterProps) {
  return (
    <footer className="gds-footer">
      Made with &lt;3 by Gymcord &middot; {version} &middot;{' '}
      <a href={termsUrl} target="_blank" rel="noopener noreferrer">
        Terms &amp; Privacy
      </a>
    </footer>
  )
}
