import { useEffect, useRef, useState } from 'react'
import { Logo } from './Logo'
import { LeagueSwitcher, type LeagueOption } from './LeagueSwitcher'
import { WeekNavigator } from './WeekNavigator'
import { SegmentedToggle, type SegmentedToggleOption } from '../SegmentedToggle/SegmentedToggle'
import { ThemeToggle } from '../ThemeToggle/ThemeToggle'
import { PeopleIcon, TrophyIcon, SwapIcon, AnalyticsIcon, UserCircleIcon, ClipboardTextIcon } from '../../icons/Icons'

export type AppHeaderTab = 'lineups' | 'leaderboard' | 'trades' | 'analytics' | 'draft' | 'gymnasts'
export type { LeagueOption }

const SEASON_TABS: SegmentedToggleOption<AppHeaderTab>[] = [
  { value: 'lineups', label: 'Lineups', icon: <PeopleIcon size={16} /> },
  { value: 'leaderboard', label: 'Leaderboard', icon: <TrophyIcon size={16} /> },
  { value: 'trades', label: 'Trades', icon: <SwapIcon size={16} /> },
  { value: 'analytics', label: 'Analytics', icon: <AnalyticsIcon size={16} /> }
]

const PRESEASON_TABS: SegmentedToggleOption<AppHeaderTab>[] = [
  { value: 'draft', label: 'Draft', icon: <ClipboardTextIcon size={16} /> },
  { value: 'gymnasts', label: 'Gymnasts', icon: <PeopleIcon size={16} /> }
]

export interface AppHeaderProps {
  /** Href the logo/wordmark links to (e.g. "#/home"). Omit to render the logo as inert (non-interactive). */
  logoHref?: string
  /** Every league/team the player is in — the header's `LeagueSwitcher` lets them switch. Not used in `phase="standard"`. */
  leagues?: LeagueOption[]
  activeLeagueId?: string
  onLeagueChange?: (id: string) => void
  /** Ignored during preseason — the week navigator shows "Preseason" instead. */
  weekLabel?: string
  weekStatusLabel?: string
  activeTab?: AppHeaderTab
  onTabChange?: (tab: AppHeaderTab) => void
  onPrevWeek?: () => void
  onNextWeek?: () => void
  prevWeekDisabled?: boolean
  nextWeekDisabled?: boolean
  /** `preseason` swaps the week navigator to a non-advancing "Preseason" label and the nav
   * tabs to Draft/Gymnasts — before there are weeks or lineups to show. `standard` is a bare
   * header (logo + theme toggle only) for pages with no league/week/tab context. Default `season`. */
  phase?: 'season' | 'preseason' | 'standard'
  /** Omit to hide the light/dark toggle (e.g. a host page that doesn't support theming yet). */
  theme?: 'light' | 'dark'
  onThemeToggle?: (theme: 'light' | 'dark') => void
  /** Fired when the signed-in user picks "Log out" from the account menu (opened by clicking the account icon). */
  onLogOut?: () => void
  /** Mounts the account menu already open — useful for demos; it still closes normally afterward. */
  accountMenuDefaultOpen?: boolean
}

/**
 * The Gymcord Fantasy app shell header: logo, league switcher, week navigator, the
 * primary section navigation as a segmented control, and — top-right — the light/dark
 * toggle followed by the account menu (click the account icon to log out). Set
 * `phase="preseason"` before the season has weeks or lineups to show (draft period):
 * the week navigator reads "Preseason" and cannot advance, and the tabs switch to
 * Draft/Gymnasts. Set `phase="standard"` for a bare logo + theme-toggle header on pages
 * with no league/week/tab context.
 */
export function AppHeader({
  logoHref,
  leagues,
  activeLeagueId,
  onLeagueChange,
  weekLabel,
  weekStatusLabel,
  activeTab = 'lineups',
  onTabChange,
  onPrevWeek,
  onNextWeek,
  prevWeekDisabled,
  nextWeekDisabled,
  phase = 'season',
  theme,
  onThemeToggle,
  onLogOut,
  accountMenuDefaultOpen
}: AppHeaderProps) {
  const isPreseason = phase === 'preseason'
  const isStandard = phase === 'standard'
  const logo = logoHref ? (
    <a href={logoHref} className="gds-app-header__logo-link">
      <Logo />
    </a>
  ) : (
    <Logo />
  )
  const [accountMenuOpen, setAccountMenuOpen] = useState(Boolean(accountMenuDefaultOpen))
  const accountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!accountMenuOpen) return
    function onDocClick(e: MouseEvent) {
      if (accountRef.current && !accountRef.current.contains(e.target as Node)) setAccountMenuOpen(false)
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setAccountMenuOpen(false)
    }
    document.addEventListener('mousedown', onDocClick)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('mousedown', onDocClick)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [accountMenuOpen])

  if (isStandard) {
    return (
      <header className="gds-app-header">
        <div className="gds-app-header__row gds-app-header--standard">
          {logo}
          {theme ? <ThemeToggle theme={theme} onToggle={onThemeToggle} /> : null}
        </div>
      </header>
    )
  }

  return (
    <header className="gds-app-header">
      <div className="gds-app-header__row">
        {logo}
        {leagues && leagues.length > 0 && activeLeagueId ? (
          <LeagueSwitcher leagues={leagues} activeLeagueId={activeLeagueId} onChange={onLeagueChange} />
        ) : null}
        <WeekNavigator
          weekLabel={isPreseason ? 'Preseason' : (weekLabel ?? '')}
          statusLabel={isPreseason ? undefined : weekStatusLabel}
          onPrev={onPrevWeek}
          onNext={onNextWeek}
          prevDisabled={prevWeekDisabled}
          nextDisabled={isPreseason ? true : nextWeekDisabled}
          hideArrows={isPreseason}
        />
        <div className="gds-app-header__tabs">
          <SegmentedToggle options={isPreseason ? PRESEASON_TABS : SEASON_TABS} value={activeTab} onChange={onTabChange} size="lg" />
        </div>
        <div className="gds-app-header__actions">
          {theme ? <ThemeToggle theme={theme} onToggle={onThemeToggle} /> : null}
          <div className="gds-dropdown" ref={accountRef}>
            <button
              type="button"
              className="gds-app-header__account"
              aria-label="Account"
              aria-expanded={accountMenuOpen}
              onClick={() => setAccountMenuOpen((o) => !o)}
            >
              <UserCircleIcon size={26} />
            </button>
            {accountMenuOpen ? (
              <div className="gds-dropdown__menu gds-app-header__account-menu" role="menu">
                <button
                  type="button"
                  role="menuitem"
                  className="gds-dropdown__item"
                  onClick={() => {
                    setAccountMenuOpen(false)
                    onLogOut?.()
                  }}
                >
                  Log out
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </header>
  )
}
