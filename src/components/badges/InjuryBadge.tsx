import { InjuryIcon } from '../../icons/Icons'

export interface InjuryBadgeProps {
  /** Orange = short-term injury. Red is reserved exclusively for long-term injury — never used elsewhere in the system. */
  severity: 'short-term' | 'long-term'
}

/** Medical-briefcase injury indicator, shown inline next to an injured gymnast's name. */
export function InjuryBadge({ severity }: InjuryBadgeProps) {
  const isLongTerm = severity === 'long-term'
  return (
    <span
      className={`gds-badge gds-badge--injury${isLongTerm ? ' gds-badge--injury-long' : ' gds-badge--injury-short'}`}
      title={isLongTerm ? 'Long-term injury' : 'Short-term injury'}
    >
      <InjuryIcon size={16} />
    </span>
  )
}
