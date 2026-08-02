import type { ButtonHTMLAttributes } from 'react'
import { DiscordIcon } from '../../icons/Icons'

export interface SignInWithDiscordButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string
}

/**
 * Gymcord Fantasy signs in via Discord OAuth — this button uses Discord's own brand
 * color (#5865F2, "blurple"), the same way a "Sign in with Google" button keeps
 * Google's colors: the account being connected must stay recognizable, not blend
 * into Gymcord's own teal/purple brand.
 */
export function SignInWithDiscordButton({ label = 'Sign in with Discord', className, ...rest }: SignInWithDiscordButtonProps) {
  const classes = ['gds-discord-button', className].filter(Boolean).join(' ')
  return (
    <button type="button" className={classes} {...rest}>
      <DiscordIcon size={20} />
      {label}
    </button>
  )
}
