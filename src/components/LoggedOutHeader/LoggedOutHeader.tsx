import { Logo } from '../AppHeader/Logo'
import { ThemeToggle } from '../ThemeToggle/ThemeToggle'
import { Button } from '../Button/Button'

export interface LoggedOutHeaderProps {
  theme?: 'light' | 'dark'
  onThemeToggle?: (theme: 'light' | 'dark') => void
  onLogIn?: () => void
  onSignUp?: () => void
}

/**
 * The Gymcord Fantasy header shown to a signed-out visitor — logo, light/dark toggle,
 * and Log in / Sign Up, in place of the league switcher, week navigator, and nav tabs
 * that require an authenticated account.
 */
export function LoggedOutHeader({ theme, onThemeToggle, onLogIn, onSignUp }: LoggedOutHeaderProps) {
  return (
    <header className="gds-app-header">
      <div className="gds-app-header__row">
        <Logo />
        <div className="gds-app-header__actions gds-logged-out-header__actions">
          {theme ? <ThemeToggle theme={theme} onToggle={onThemeToggle} /> : null}
          <Button variant="secondary" onClick={onLogIn}>
            Log in
          </Button>
          <Button variant="primary" onClick={onSignUp}>
            Sign Up
          </Button>
        </div>
      </div>
    </header>
  )
}
