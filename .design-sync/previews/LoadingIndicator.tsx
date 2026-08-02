import { LoadingIndicator } from 'gymcord-design-system'

const backdrop = { background: 'var(--bg-1)', padding: 20, borderRadius: 12, display: 'inline-flex', gap: 24, alignItems: 'center' }

export function Large() {
  return (
    <div style={backdrop}>
      <LoadingIndicator phrase="Chalking up" size="lg" />
    </div>
  )
}

export function Small() {
  return (
    <div style={backdrop}>
      <LoadingIndicator phrase="Sticking the landing" size="sm" />
    </div>
  )
}
