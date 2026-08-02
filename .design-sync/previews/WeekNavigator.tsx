import { WeekNavigator } from 'gymcord-design-system'

const backdrop = { background: 'var(--bg-1)', padding: 20, borderRadius: 12, display: 'inline-block' }

export function Current() {
  return (
    <div style={backdrop}>
      <WeekNavigator weekLabel="Week 3" statusLabel="CURRENT" />
    </div>
  )
}

export function AtStart() {
  return (
    <div style={backdrop}>
      <WeekNavigator weekLabel="Week 1" statusLabel="CURRENT" prevDisabled />
    </div>
  )
}
