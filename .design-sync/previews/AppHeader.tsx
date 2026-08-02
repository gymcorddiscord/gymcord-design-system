import { useState } from 'react'
import { AppHeader } from 'gymcord-design-system'

export function Default() {
  const [tab, setTab] = useState('lineups')
  return (
    <AppHeader
      teamName="Precision Flyers"
      leagueName="Elite Squad League"
      weekLabel="Week 3"
      weekStatusLabel="CURRENT"
      activeTab={tab}
      onTabChange={setTab}
    />
  )
}
