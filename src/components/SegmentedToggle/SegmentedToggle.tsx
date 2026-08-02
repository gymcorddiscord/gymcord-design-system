import type { ReactNode } from 'react'

export interface SegmentedToggleOption<T extends string> {
  value: T
  label: string
  icon?: ReactNode
}

export interface SegmentedToggleProps<T extends string> {
  options: SegmentedToggleOption<T>[]
  value: T
  onChange?: (value: T) => void
  /** `lg` is used for primary navigation (icon + label); `sm` for compact metric toggles. */
  size?: 'sm' | 'lg'
}

/**
 * Gymcord Fantasy's pill-shaped segmented control — the standard toggle for navigation
 * tabs (Lineups/Leaderboard/Trades/Analytics) and compact metric switches (Avg/High/Last).
 * Large click targets throughout; the active segment gets a solid brand-teal fill.
 */
export function SegmentedToggle<T extends string>({ options, value, onChange, size = 'lg' }: SegmentedToggleProps<T>) {
  return (
    <div className={`gds-segmented gds-segmented--${size}`} role="tablist">
      {options.map((opt) => {
        const active = opt.value === value
        return (
          <button
            key={opt.value}
            role="tab"
            aria-selected={active}
            className={`gds-segmented__item${active ? ' gds-segmented__item--active' : ''}`}
            onClick={() => onChange?.(opt.value)}
          >
            {opt.icon ? <span className="gds-segmented__icon">{opt.icon}</span> : null}
            {opt.label}
          </button>
        )
      })}
    </div>
  )
}
