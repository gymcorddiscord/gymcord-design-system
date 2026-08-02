import { LeagueSwitcher } from 'gymcord-design-system'

const backdrop = { background: 'var(--bg-1)', padding: 20, borderRadius: 12, display: 'inline-block' }

export function Default() {
  return (
    <div style={backdrop}>
      <LeagueSwitcher teamName="Precision Flyers" leagueName="Elite Squad League" />
    </div>
  )
}
