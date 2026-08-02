import { Logo } from './Logo'
import { LeagueSwitcher } from './LeagueSwitcher'
import { WeekNavigator } from './WeekNavigator'
import { SegmentedToggle, type SegmentedToggleOption } from '../SegmentedToggle/SegmentedToggle'
import { PeopleIcon, TrophyIcon, SwapIcon, AnalyticsIcon } from '../../icons/Icons'

export type AppHeaderTab = 'lineups' | 'leaderboard' | 'trades' | 'analytics'

const DEFAULT_TABS: SegmentedToggleOption<AppHeaderTab>[] = [
  { value: 'lineups', label: 'Lineups', icon: <PeopleIcon size={16} /> },
  { value: 'leaderboard', label: 'Leaderboard', icon: <TrophyIcon size={16} /> },
  { value: 'trades', label: 'Trades', icon: <SwapIcon size={16} /> },
  { value: 'analytics', label: 'Analytics', icon: <AnalyticsIcon size={16} /> }
]

export interface AppHeaderProps {
  teamName: string
  leagueName: string
  weekLabel: string
  weekStatusLabel?: string
  activeTab: AppHeaderTab
  onTabChange?: (tab: AppHeaderTab) => void
  onLeagueSwitch?: () => void
  onPrevWeek?: () => void
  onNextWeek?: () => void
  prevWeekDisabled?: boolean
  nextWeekDisabled?: boolean
}

/**
 * The Gymcord Fantasy app shell header: logo, league switcher, week navigator,
 * and the primary section navigation as a segmented control with large click targets.
 */
export function AppHeader({
  teamName,
  leagueName,
  weekLabel,
  weekStatusLabel,
  activeTab,
  onTabChange,
  onLeagueSwitch,
  onPrevWeek,
  onNextWeek,
  prevWeekDisabled,
  nextWeekDisabled
}: AppHeaderProps) {
  return (
    <header className="gds-app-header">
      <Logo />
      <LeagueSwitcher teamName={teamName} leagueName={leagueName} onClick={onLeagueSwitch} />
      <WeekNavigator
        weekLabel={weekLabel}
        statusLabel={weekStatusLabel}
        onPrev={onPrevWeek}
        onNext={onNextWeek}
        prevDisabled={prevWeekDisabled}
        nextDisabled={nextWeekDisabled}
      />
      <div className="gds-app-header__tabs">
        <SegmentedToggle options={DEFAULT_TABS} value={activeTab} onChange={onTabChange} size="lg" />
      </div>
    </header>
  )
}
