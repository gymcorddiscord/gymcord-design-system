import { HomeIcon, AwayIcon } from '../../icons/Icons'

export interface HomeAwayBadgeProps {
  type: 'home' | 'away'
}

/** Marks whether a gymnast's next meet is home or away. */
export function HomeAwayBadge({ type }: HomeAwayBadgeProps) {
  return (
    <span className="gds-badge gds-badge--home-away" title={type === 'home' ? 'Home meet' : 'Away meet'}>
      {type === 'home' ? <HomeIcon size={16} /> : <AwayIcon size={16} />}
    </span>
  )
}
