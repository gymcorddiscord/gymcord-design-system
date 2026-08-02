import { HomeAwayBadge } from 'gymcord-design-system'

const backdrop = { background: 'var(--bg-1)', padding: 20, borderRadius: 12, display: 'inline-flex', gap: 16, alignItems: 'center', color: 'var(--text-primary)', fontFamily: 'var(--font-family)', fontSize: 14 }

export function Home() {
  return (
    <div style={backdrop}>
      <HomeAwayBadge type="home" /> Home meet
    </div>
  )
}

export function Away() {
  return (
    <div style={backdrop}>
      <HomeAwayBadge type="away" /> Away meet
    </div>
  )
}
