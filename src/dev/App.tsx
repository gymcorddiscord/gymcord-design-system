import { useState } from 'react'
import { AppHeader, type AppHeaderTab } from '../components/AppHeader/AppHeader'
import { SegmentedToggle } from '../components/SegmentedToggle/SegmentedToggle'
import { Button } from '../components/Button/Button'
import { AthleteTable, type AthleteTableRow } from '../components/AthleteTable/AthleteTable'
import { HomeAwayBadge } from '../components/badges/HomeAwayBadge'
import { InjuryBadge } from '../components/badges/InjuryBadge'
import { ByeBadge } from '../components/badges/ByeBadge'
import { DoubleWeekBadge } from '../components/badges/DoubleWeekBadge'
import { Footer } from '../components/Footer/Footer'
import { FeedbackButton } from '../components/FeedbackButton/FeedbackButton'
import { RankTierBadge } from '../components/badges/RankTierBadge'
import { DisciplineTag } from '../components/badges/DisciplineTag'
import { LoadingIndicator } from '../components/LoadingIndicator/LoadingIndicator'

const COLUMNS = [
  { key: 'VT', caption: '0/10' },
  { key: 'UB', caption: '0/10' },
  { key: 'BB', caption: '0/10' },
  { key: 'FX', caption: '0/10' }
] as const

const ROWS: AthleteTableRow[] = [
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
    id: 'dunne',
    name: 'Olivia Dunne',
    team: 'LSU',
    badges: <HomeAwayBadge type="home" />,
    scores: { VT: null, UB: 9.8, BB: null, FX: 9.7 }
  },
  {
    id: 'brooks',
    name: 'Sierra Brooks',
    team: 'Michigan',
    badges: <HomeAwayBadge type="away" />,
    scores: { VT: 9.906, UB: 9.856, BB: 9.806, FX: 9.756 }
  },
  {
    id: 'chiles',
    name: 'Jordan Chiles',
    team: 'UCLA',
    badges: <HomeAwayBadge type="away" />,
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
    scores: { VT: 9.919, UB: 9.869, BB: 9.819, FX: 9.769 }
  },
  {
    id: 'thomas',
    name: 'Trinity Thomas',
    team: 'Florida',
    badges: (
      <>
        <HomeAwayBadge type="away" />
        <InjuryBadge severity="short-term" />
      </>
    ),
    scores: { VT: 9.925, UB: 9.875, BB: null, FX: 9.775 }
  },
  {
    id: 'campbell',
    name: 'Chae Campbell',
    team: 'UCLA',
    badges: <HomeAwayBadge type="away" />,
    scores: { VT: 9.9, UB: null, BB: null, FX: 9.75 }
  },
  {
    id: 'worley',
    name: 'Raena Worley',
    team: 'Kentucky',
    badges: <ByeBadge />,
    scores: { VT: null, UB: 9.831, BB: null, FX: 9.731 }
  }
]

export function App() {
  const [activeTab, setActiveTab] = useState<AppHeaderTab>('lineups')
  const [metric, setMetric] = useState<'avg' | 'high' | 'last'>('avg')
  const [selected, setSelected] = useState<Record<string, Record<string, boolean>>>({})

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-0)' }}>
      <AppHeader
        teamName="Precision Flyers"
        leagueName="Elite Squad League"
        weekLabel="Week 3"
        weekStatusLabel="CURRENT"
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      <div style={{ padding: '24px 32px' }}>
        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 16, marginBottom: 24 }}>
          <span style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-family)', fontWeight: 700, fontSize: 13 }}>
            Show:
          </span>
          <SegmentedToggle
            size="sm"
            value={metric}
            onChange={setMetric}
            options={[
              { value: 'avg', label: 'Avg' },
              { value: 'high', label: 'High' },
              { value: 'last', label: 'Last' }
            ]}
          />
          <Button variant="secondary">Import Last Week</Button>
          <Button variant="secondary">Clear All</Button>
        </div>

        <div style={{ background: 'var(--bg-1)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-subtle)', overflow: 'hidden' }}>
          <AthleteTable columns={[...COLUMNS]} rows={ROWS} selected={selected} onToggle={(id, col, checked) => {
            setSelected((prev) => ({ ...prev, [id]: { ...prev[id], [col]: checked } }))
          }} />
        </div>
      </div>

      <div style={{ padding: '0 32px 32px', display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
        <RankTierBadge tier="bronze" />
        <RankTierBadge tier="silver" />
        <RankTierBadge tier="gold" />
        <RankTierBadge tier="prismatic" />
        <DisciplineTag discipline="VT" />
        <DisciplineTag discipline="UB" />
        <DisciplineTag discipline="BB" />
        <DisciplineTag discipline="FX" />
        <DisciplineTag discipline="AA" />
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="tertiary">Tertiary</Button>
        <LoadingIndicator phrase="Chalking up" />
      </div>

      <Footer version="v0.1.1" />
      <FeedbackButton currentPath="/lineups" onSubmit={async () => {}} />
    </div>
  )
}
