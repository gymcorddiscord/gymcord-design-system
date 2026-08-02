import { RankTierBadge } from 'gymcord-design-system'

export function AllTiers() {
  return (
    <div style={{ background: 'var(--bg-1)', padding: 20, borderRadius: 12, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
      <RankTierBadge tier="bronze" />
      <RankTierBadge tier="silver" />
      <RankTierBadge tier="gold" />
      <RankTierBadge tier="prismatic" />
    </div>
  )
}
