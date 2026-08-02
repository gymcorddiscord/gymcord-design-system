export interface FooterLink {
  label: string
  href: string
  /** Opens in a new tab with rel="noopener noreferrer" — set false for in-app routes. Defaults to true. */
  external?: boolean
}

export interface FooterProps {
  /** e.g. "v0.1.1" — every Gymcord site footer shows a version number, bumped on each push. */
  version: string
  termsUrl?: string
  /** Extra links appended after Terms & Privacy (e.g. a site's own Credits page). */
  links?: FooterLink[]
}

/** The standard Gymcord site footer: credit line, version, Terms & Privacy, and any site-specific links. */
export function Footer({ version, termsUrl = 'https://gymcorddiscord.github.io/gymcord-home/terms.html', links = [] }: FooterProps) {
  return (
    <footer className="gds-footer">
      Made with &lt;3 by Gymcord &middot; {version} &middot;{' '}
      <a href={termsUrl} target="_blank" rel="noopener noreferrer">
        Terms &amp; Privacy
      </a>
      {links.map((link) => (
        <span key={link.href}>
          {' '}
          &middot;{' '}
          {link.external === false ? (
            <a href={link.href}>{link.label}</a>
          ) : (
            <a href={link.href} target="_blank" rel="noopener noreferrer">
              {link.label}
            </a>
          )}
        </span>
      ))}
    </footer>
  )
}
