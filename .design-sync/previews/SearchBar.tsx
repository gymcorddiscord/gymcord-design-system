import { useState } from 'react'
import { SearchBar } from 'gymcord-design-system'

const backdrop = { background: 'var(--bg-1)', padding: 20, borderRadius: 12, width: 260 }

export function Empty() {
  const [value, setValue] = useState('')
  return (
    <div style={backdrop}>
      <SearchBar value={value} onChange={setValue} placeholder="Search by name…" />
    </div>
  )
}

export function WithText() {
  const [value, setValue] = useState('Bryant')
  return (
    <div style={backdrop}>
      <SearchBar value={value} onChange={setValue} placeholder="Search by name…" />
    </div>
  )
}
