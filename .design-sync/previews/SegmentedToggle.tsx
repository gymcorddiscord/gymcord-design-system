import { useState } from 'react'
import { SegmentedToggle } from 'gymcord-design-system'
import { PeopleIcon, TrophyIcon, SwapIcon, AnalyticsIcon } from 'gymcord-design-system'

export function NavigationTabs() {
  const [value, setValue] = useState('lineups')
  return (
    <SegmentedToggle
      size="lg"
      value={value}
      onChange={setValue}
      options={[
        { value: 'lineups', label: 'Lineups', icon: <PeopleIcon size={16} /> },
        { value: 'leaderboard', label: 'Leaderboard', icon: <TrophyIcon size={16} /> },
        { value: 'trades', label: 'Trades', icon: <SwapIcon size={16} /> },
        { value: 'analytics', label: 'Analytics', icon: <AnalyticsIcon size={16} /> }
      ]}
    />
  )
}

export function MetricToggle() {
  const [value, setValue] = useState('avg')
  return (
    <SegmentedToggle
      size="sm"
      value={value}
      onChange={setValue}
      options={[
        { value: 'avg', label: 'Avg' },
        { value: 'high', label: 'High' },
        { value: 'last', label: 'Last' }
      ]}
    />
  )
}
