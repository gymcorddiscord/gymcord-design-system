import { useState } from 'react'
import { AppHeader, type AppHeaderTab } from '../components/AppHeader/AppHeader'
import { LoggedOutHeader } from '../components/LoggedOutHeader/LoggedOutHeader'
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
import { Heading } from '../components/Typography/Heading'
import { Text } from '../components/Typography/Text'
import { DisciplineTag } from '../components/badges/DisciplineTag'
import { LoadingIndicator } from '../components/LoadingIndicator/LoadingIndicator'
import { Dropdown } from '../components/Dropdown/Dropdown'
import { Checkbox } from '../components/Checkbox/Checkbox'
import { TextField } from '../components/TextField/TextField'
import { SearchBar } from '../components/SearchBar/SearchBar'
import { ActionButton } from '../components/ActionButton/ActionButton'
import { Card } from '../components/Card/Card'
import { Tooltip } from '../components/Tooltip/Tooltip'
import { DateTimePicker } from '../components/DateTimePicker/DateTimePicker'
import { AddToCalendarButton } from '../components/AddToCalendarButton/AddToCalendarButton'
import { SignInWithDiscordButton } from '../components/SignInWithDiscordButton/SignInWithDiscordButton'
import { ThemeToggle } from '../components/ThemeToggle/ThemeToggle'
import { PlusIcon, StarIcon, GoatIcon, UnicornIcon, FlowerIcon, BooksIcon, PaletteIcon, SunIcon, MedalIcon, TrophyIcon, ButterflyIcon } from '../icons/Icons'
import type { LeagueOption } from '../components/AppHeader/LeagueSwitcher'

const LEAGUES: LeagueOption[] = [
  { id: 'elite-squad', teamName: 'Precision Flyers', leagueName: 'Elite Squad League', icon: <StarIcon size={18} /> },
  { id: 'goat-league', teamName: 'Chalk Legends', leagueName: 'GOAT League', icon: <GoatIcon size={18} /> },
  { id: 'unicorn-cup', teamName: 'Magic Unicorns', leagueName: 'Unicorn Cup', icon: <UnicornIcon size={18} /> },
  { id: 'garden-league', teamName: 'Bloom Squad', leagueName: 'Garden League', icon: <FlowerIcon size={18} /> },
  { id: 'book-club', teamName: 'The Bookworms', leagueName: 'Scholars League', icon: <BooksIcon size={18} /> },
  { id: 'art-league', teamName: 'Palette Pals', leagueName: 'Artists League', icon: <PaletteIcon size={18} /> },
  { id: 'sunshine-league', teamName: 'Sun Chasers', leagueName: 'Sunshine League', icon: <SunIcon size={18} /> },
  { id: 'medal-league', teamName: 'Podium Club', leagueName: 'Medal League', icon: <MedalIcon size={18} /> },
  { id: 'champions-league', teamName: 'Top Contenders', leagueName: 'Champions League', icon: <TrophyIcon size={18} /> },
  { id: 'butterfly-league', teamName: 'Wing Squad', leagueName: 'Butterfly League', icon: <ButterflyIcon size={18} /> }
]

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
  const [apparatus, setApparatus] = useState('vt')
  const [agreed, setAgreed] = useState(true)
  const [teamName, setTeamName] = useState('')
  const [search, setSearch] = useState('')
  const [draftDate, setDraftDate] = useState(new Date(2026, 7, 15, 19, 30))
  const [devTheme, setDevTheme] = useState<'light' | 'dark'>('dark')
  const [preseasonTab, setPreseasonTab] = useState<AppHeaderTab>('draft')
  const [activeLeagueId, setActiveLeagueId] = useState('elite-squad')

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-0)' }}>
      <AppHeader
        leagues={LEAGUES}
        activeLeagueId={activeLeagueId}
        onLeagueChange={setActiveLeagueId}
        weekLabel="Week 3"
        weekStatusLabel="CURRENT"
        activeTab={activeTab}
        onTabChange={setActiveTab}
        theme={devTheme}
        onThemeToggle={setDevTheme}
        onLogOut={() => {}}
      />

      <div style={{ padding: '24px 32px 0' }}>
        <Text size="caption" tone="tertiary">Preseason variant:</Text>
      </div>
      <AppHeader
        leagues={LEAGUES}
        activeLeagueId={activeLeagueId}
        onLeagueChange={setActiveLeagueId}
        phase="preseason"
        activeTab={preseasonTab}
        onTabChange={setPreseasonTab}
        theme={devTheme}
        onThemeToggle={setDevTheme}
        onLogOut={() => {}}
      />

      <div style={{ padding: '24px 32px 0' }}>
        <Text size="caption" tone="tertiary">Standard variant:</Text>
      </div>
      <AppHeader phase="standard" theme={devTheme} onThemeToggle={setDevTheme} />

      <div style={{ padding: '24px 32px 0' }}>
        <Text size="caption" tone="tertiary">Logged-out variant:</Text>
      </div>
      <LoggedOutHeader theme={devTheme} onThemeToggle={setDevTheme} onLogIn={() => {}} onSignUp={() => {}} />

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

        <div style={{ marginTop: 32, background: 'var(--bg-1)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-subtle)', padding: 24, display: 'flex', flexDirection: 'column', gap: 10 }}>
          <Heading level={1}>Heading 1</Heading>
          <Heading level={2}>Heading 2</Heading>
          <Heading level={3}>Heading 3</Heading>
          <Text size="body" tone="primary">Body text — M PLUS 1p, primary tone.</Text>
          <Text size="caption" tone="secondary">Caption text — secondary tone.</Text>
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
        <Dropdown
          value={apparatus}
          onChange={setApparatus}
          options={[
            { value: 'vt', label: 'Vault' },
            { value: 'ub', label: 'Uneven Bars' },
            { value: 'bb', label: 'Balance Beam' },
            { value: 'fx', label: 'Floor' },
            { value: 'aa', label: 'All-Around' }
          ]}
        />
      </div>

      <div style={{ padding: '0 32px 32px', display: 'flex', flexWrap: 'wrap', gap: 20, alignItems: 'flex-start' }}>
        <Card elevation="raised" interactive style={{ width: 260 }}>
          <Heading level={3}>Elite Squad League</Heading>
          <Text size="body" tone="secondary">10 teams · Standard scoring</Text>
        </Card>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <Checkbox checked={agreed} onChange={setAgreed} label="I agree to the league rules" />
          <TextField label="Team name" value={teamName} onChange={setTeamName} helperText="Shown on the leaderboard" />
        </div>

        <SearchBar value={search} onChange={setSearch} placeholder="Search by name…" />

        <ActionButton icon={<PlusIcon size={22} />} aria-label="Add gymnast" />

        <Tooltip content="Draft opens Saturday at 7pm ET">
          <Button variant="secondary">Hover me</Button>
        </Tooltip>

        <DateTimePicker label="Draft time" value={draftDate} onChange={setDraftDate} />

        <AddToCalendarButton
          event={{
            title: 'Precision Flyers Draft',
            description: 'Gymcord Fantasy live draft',
            location: 'Discord — Gymcord',
            start: draftDate,
            end: new Date(draftDate.getTime() + 60 * 60 * 1000)
          }}
        />

        <SignInWithDiscordButton />

        <ThemeToggle theme={devTheme} onToggle={setDevTheme} />
      </div>

      <Footer version="v0.1.1" />
      <FeedbackButton currentPath="/lineups" onSubmit={async () => {}} />
    </div>
  )
}
