import { MoonIcon, SunIcon } from '../../icons/Icons'

export interface ThemeToggleProps {
  theme: 'light' | 'dark'
  onToggle?: (theme: 'light' | 'dark') => void
}

/**
 * Gymcord's light/dark toggle — the same 44x44 rounded-square button used in every
 * Gymcord site's header (previously a 🌙/☀️ emoji; now Phosphor's Moon/Sun icons).
 * The theme value and its persistence (localStorage key, OS-preference fallback)
 * are the host page's concern — this component is just the control.
 */
export function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  return (
    <button
      type="button"
      className="gds-theme-toggle"
      aria-label="Toggle light/dark mode"
      onClick={() => onToggle?.(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? <MoonIcon size={20} /> : <SunIcon size={20} />}
    </button>
  )
}
