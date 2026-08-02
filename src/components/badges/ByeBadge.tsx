import { PauseCircleIcon } from '../../icons/Icons'

/** Marks a gymnast's bye week (not competing). */
export function ByeBadge() {
  return (
    <span className="gds-badge gds-badge--bye" title="Bye week">
      <PauseCircleIcon size={20} />
    </span>
  )
}
