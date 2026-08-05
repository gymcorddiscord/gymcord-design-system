import { useEffect, useRef, useState, type ReactNode } from 'react'
import { ChevronDownIcon } from '../../icons/Icons'

export interface LeagueOption {
  id: string
  teamName: string
  leagueName: string
  /** Distinguishes each league at a glance in the trigger and menu (e.g. a themed Phosphor icon). */
  icon: ReactNode
}

export interface LeagueSwitcherProps {
  leagues: LeagueOption[]
  /** `null` when the player isn't currently viewing any one league (e.g. the dashboard) — the trigger reads "Select a league" instead of a team's name/icon. */
  activeLeagueId: string | null
  onChange?: (id: string) => void
  /** Mounts the menu already open — useful for demos; it still closes normally afterward. */
  defaultOpen?: boolean
}

/**
 * Switches between every league/team the player is in — the trigger shows the active
 * league's icon and name, opening a menu of every other league (each with its own icon)
 * to switch to. Closes on outside click, Escape, or selection. With `activeLeagueId={null}`,
 * the trigger reads "Select a league" and no menu item is pre-selected.
 */
export function LeagueSwitcher({ leagues, activeLeagueId, onChange, defaultOpen }: LeagueSwitcherProps) {
  const [open, setOpen] = useState(Boolean(defaultOpen))
  const rootRef = useRef<HTMLDivElement>(null)
  const active = activeLeagueId == null ? null : (leagues.find((l) => l.id === activeLeagueId) ?? leagues[0])

  useEffect(() => {
    if (!open) return
    function onDocClick(e: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false)
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onDocClick)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('mousedown', onDocClick)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  return (
    <div className="gds-league-switcher-root" ref={rootRef}>
      <button type="button" className="gds-league-switcher" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
        {active ? (
          <>
            <span className="gds-league-switcher__badge">{active.icon}</span>
            <span className="gds-league-switcher__text">
              <span className="gds-league-switcher__team">{active.teamName}</span>
              <span className="gds-league-switcher__league">{active.leagueName}</span>
            </span>
          </>
        ) : (
          <span className="gds-league-switcher__text">
            <span className="gds-league-switcher__team">Select a league</span>
          </span>
        )}
        <ChevronDownIcon size={16} className="gds-league-switcher__chevron" />
      </button>
      {open ? (
        <div className="gds-dropdown__menu gds-league-switcher__menu" role="menu">
          {leagues.map((l) => (
            <button
              key={l.id}
              type="button"
              role="menuitem"
              className={`gds-dropdown__item gds-league-switcher__item${l.id === activeLeagueId ? ' gds-dropdown__item--selected' : ''}`}
              onClick={() => {
                onChange?.(l.id)
                setOpen(false)
              }}
            >
              <span className="gds-league-switcher__item-icon">{l.icon}</span>
              <span className="gds-league-switcher__item-text">
                <span className="gds-league-switcher__item-team">{l.teamName}</span>
                <span className="gds-league-switcher__item-league">{l.leagueName}</span>
              </span>
            </button>
          ))}
        </div>
      ) : null}
    </div>
  )
}
