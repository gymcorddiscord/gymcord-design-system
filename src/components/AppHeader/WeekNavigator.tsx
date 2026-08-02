import { ChevronLeftIcon, ChevronRightIcon } from '../../icons/Icons'

export interface WeekNavigatorProps {
  weekLabel: string
  /** Small status caption under the week label, e.g. "CURRENT" or "FINAL". */
  statusLabel?: string
  onPrev?: () => void
  onNext?: () => void
  prevDisabled?: boolean
  nextDisabled?: boolean
  /** Hides both arrows entirely — for labels that aren't a navigable week (e.g. "Preseason"). */
  hideArrows?: boolean
}

/** Prev/next control for stepping through weeks, centered in the app header. */
export function WeekNavigator({ weekLabel, statusLabel, onPrev, onNext, prevDisabled, nextDisabled, hideArrows }: WeekNavigatorProps) {
  return (
    <div className="gds-week-nav">
      {hideArrows ? null : (
        <button className="gds-week-nav__arrow" onClick={onPrev} disabled={prevDisabled} aria-label="Previous week">
          <ChevronLeftIcon size={18} />
        </button>
      )}
      <div className="gds-week-nav__label">
        <span className="gds-week-nav__week">{weekLabel}</span>
        {statusLabel ? <span className="gds-week-nav__status">{statusLabel}</span> : null}
      </div>
      {hideArrows ? null : (
        <button className="gds-week-nav__arrow" onClick={onNext} disabled={nextDisabled} aria-label="Next week">
          <ChevronRightIcon size={18} />
        </button>
      )}
    </div>
  )
}
