import { useState } from 'react'
import { LeagueSwitcher, StarIcon, GoatIcon, UnicornIcon } from 'gymcord-design-system'

const backdrop = { background: 'var(--bg-1)', padding: 20, borderRadius: 12, display: 'inline-block' }

const LEAGUES = [
  { id: 'elite-squad', teamName: 'Precision Flyers', leagueName: 'Elite Squad League', icon: <StarIcon size={18} /> },
  { id: 'goat-league', teamName: 'Chalk Legends', leagueName: 'GOAT League', icon: <GoatIcon size={18} /> },
  { id: 'unicorn-cup', teamName: 'Magic Unicorns', leagueName: 'Unicorn Cup', icon: <UnicornIcon size={18} /> }
]

export function Default() {
  const [league, setLeague] = useState('elite-squad')
  return (
    <div style={backdrop}>
      <LeagueSwitcher leagues={LEAGUES} activeLeagueId={league} onChange={setLeague} />
    </div>
  )
}

export function Open() {
  const [league, setLeague] = useState('elite-squad')
  return (
    <div style={{ ...backdrop, minHeight: 220 }}>
      <LeagueSwitcher leagues={LEAGUES} activeLeagueId={league} onChange={setLeague} defaultOpen />
    </div>
  )
}
