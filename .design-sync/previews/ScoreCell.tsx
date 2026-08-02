import { useState } from 'react'
import { ScoreCell } from 'gymcord-design-system'

const backdrop = { background: 'var(--bg-1)', padding: 20, borderRadius: 12, display: 'inline-flex', gap: 24 }

export function Scored() {
  const [checked, setChecked] = useState(false)
  return (
    <div style={backdrop}>
      <ScoreCell value={9.875} checked={checked} onCheckedChange={setChecked} />
    </div>
  )
}

export function Empty() {
  return (
    <div style={backdrop}>
      <ScoreCell value={null} />
    </div>
  )
}
