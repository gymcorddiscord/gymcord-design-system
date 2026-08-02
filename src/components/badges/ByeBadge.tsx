import { PauseIcon } from '../../icons/Icons'

/** Marks a gymnast's bye week (not competing). */
export function ByeBadge() {
  return (
    <span className="gds-badge gds-badge--bye" title="Bye week">
      <PauseIcon size={14} />
    </span>
  )
}
