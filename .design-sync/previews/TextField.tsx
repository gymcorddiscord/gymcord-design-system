import { useState } from 'react'
import { TextField } from 'gymcord-design-system'

const backdrop = { background: 'var(--bg-1)', padding: 24, borderRadius: 12, width: 260 }

export function Empty() {
  const [value, setValue] = useState('')
  return (
    <div style={backdrop}>
      <TextField label="Team name" value={value} onChange={setValue} helperText="Shown on the leaderboard" />
    </div>
  )
}

export function Filled() {
  const [value, setValue] = useState('Precision Flyers')
  return (
    <div style={backdrop}>
      <TextField label="Team name" value={value} onChange={setValue} />
    </div>
  )
}

export function ErrorState() {
  const [value, setValue] = useState('')
  return (
    <div style={backdrop}>
      <TextField label="Team name" value={value} onChange={setValue} error="Team name is required" />
    </div>
  )
}
