import { useState } from 'react'
import { AppHeader, StarIcon, GoatIcon, UnicornIcon } from 'gymcord-design-system'

const LEAGUES = [
  { id: 'elite-squad', teamName: 'Precision Flyers', leagueName: 'Elite Squad League', icon: <StarIcon size={18} /> },
  { id: 'goat-league', teamName: 'Chalk Legends', leagueName: 'GOAT League', icon: <GoatIcon size={18} /> },
  { id: 'unicorn-cup', teamName: 'Magic Unicorns', leagueName: 'Unicorn Cup', icon: <UnicornIcon size={18} /> }
]

export function Default() {
  const [league, setLeague] = useState('elite-squad')
  const [tab, setTab] = useState('lineups')
  const [theme, setTheme] = useState('dark')
  return (
    <AppHeader
      leagues={LEAGUES}
      activeLeagueId={league}
      onLeagueChange={setLeague}
      weekLabel="Week 3"
      weekStatusLabel="CURRENT"
      activeTab={tab}
      onTabChange={setTab}
      theme={theme}
      onThemeToggle={setTheme}
      onLogOut={() => {}}
    />
  )
}

export function Preseason() {
  const [league, setLeague] = useState('elite-squad')
  const [tab, setTab] = useState('draft')
  const [theme, setTheme] = useState('dark')
  return (
    <AppHeader
      leagues={LEAGUES}
      activeLeagueId={league}
      onLeagueChange={setLeague}
      phase="preseason"
      activeTab={tab}
      onTabChange={setTab}
      theme={theme}
      onThemeToggle={setTheme}
      onLogOut={() => {}}
    />
  )
}

export function Standard() {
  const [theme, setTheme] = useState('dark')
  return <AppHeader phase="standard" theme={theme} onThemeToggle={setTheme} />
}
