import { DoubleWeekBadge } from 'gymcord-design-system'

const backdrop = { background: 'var(--bg-1)', padding: 20, borderRadius: 12, display: 'inline-flex', gap: 16, alignItems: 'center', color: 'var(--text-primary)', fontFamily: 'var(--font-family)', fontSize: 14 }

export function Default() {
  return (
    <div style={backdrop}>
      <DoubleWeekBadge /> Double meet week
    </div>
  )
}
