import { InjuryBadge } from 'gymcord-design-system'

const backdrop = { background: 'var(--bg-1)', padding: 20, borderRadius: 12, display: 'inline-flex', gap: 16, alignItems: 'center', color: 'var(--text-primary)', fontFamily: 'var(--font-family)', fontSize: 14 }

export function ShortTerm() {
  return (
    <div style={backdrop}>
      <InjuryBadge severity="short-term" /> Day-to-day
    </div>
  )
}

export function LongTerm() {
  return (
    <div style={backdrop}>
      <InjuryBadge severity="long-term" /> Out for season
    </div>
  )
}
