import { useState } from 'react'
import { AthleteTable } from 'gymcord-design-system'
import { HomeAwayBadge, InjuryBadge, DoubleWeekBadge } from 'gymcord-design-system'

const COLUMNS = [
  { key: 'VT', caption: '0/10' },
  { key: 'UB', caption: '0/10' },
  { key: 'BB', caption: '0/10' },
  { key: 'FX', caption: '0/10' }
]

const ROWS = [
  {
    id: 'bryant',
    name: 'Haleigh Bryant',
    team: 'LSU',
    badges: <HomeAwayBadge type="home" />,
    scores: { VT: 9.938, UB: 9.887, BB: 9.838, FX: 9.787 }
  },
  {
    id: 'finnegan',
    name: 'Aleah Finnegan',
    team: 'LSU',
    badges: (
      <>
        <HomeAwayBadge type="home" />
        <DoubleWeekBadge />
      </>
    ),
    scores: { VT: 9.9, UB: 9.85, BB: 9.8, FX: 9.75 }
  },
  {
    id: 'harris',
    name: 'Selena Harris',
    team: 'UCLA',
    badges: (
      <>
        <HomeAwayBadge type="away" />
        <InjuryBadge severity="short-term" />
      </>
    ),
    scores: { VT: 9.919, UB: 9.869, BB: null, FX: 9.769 }
  }
]

export function Default() {
  const [selected, setSelected] = useState({})
  return (
    <div style={{ background: 'var(--bg-1)', borderRadius: 14, border: '1px solid var(--border-subtle)', overflow: 'hidden' }}>
      <AthleteTable
        columns={COLUMNS}
        rows={ROWS}
        selected={selected}
        onToggle={(id, col, checked) => setSelected((prev) => ({ ...prev, [id]: { ...prev[id], [col]: checked } }))}
      />
    </div>
  )
}
