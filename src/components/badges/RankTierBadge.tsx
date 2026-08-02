export type RankTier = 'bronze' | 'silver' | 'gold' | 'prismatic'

export interface RankTierBadgeProps {
  tier: RankTier
  label?: string
}

/** A gymnast or team's rank tier — bronze, silver, gold, or the top prismatic (full-spectrum gradient) tier. */
export function RankTierBadge({ tier, label }: RankTierBadgeProps) {
  return (
    <span className={`gds-rank-tier gds-rank-tier--${tier}`}>
      <span className="gds-rank-tier__dot" aria-hidden="true" />
      {label ?? tier[0].toUpperCase() + tier.slice(1)}
    </span>
  )
}
