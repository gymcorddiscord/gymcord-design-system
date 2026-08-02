import { ChevronDownIcon, PlaneIcon } from '../../icons/Icons'

export interface LeagueSwitcherProps {
  teamName: string
  leagueName: string
  onClick?: () => void
}

/** Dropdown control for switching the active team/league, shown in the app header. */
export function LeagueSwitcher({ teamName, leagueName, onClick }: LeagueSwitcherProps) {
  return (
    <button className="gds-league-switcher" onClick={onClick}>
      <span className="gds-league-switcher__badge">
        <PlaneIcon size={18} />
      </span>
      <span className="gds-league-switcher__text">
        <span className="gds-league-switcher__team">{teamName}</span>
        <span className="gds-league-switcher__league">{leagueName}</span>
      </span>
      <ChevronDownIcon size={16} className="gds-league-switcher__chevron" />
    </button>
  )
}
