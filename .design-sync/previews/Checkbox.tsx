import { useState } from 'react'
import { Checkbox } from 'gymcord-design-system'

const backdrop = { background: 'var(--bg-1)', padding: 20, borderRadius: 12, display: 'flex', flexDirection: 'column' as const, gap: 8 }

export function Unchecked() {
  const [checked, setChecked] = useState(false)
  return (
    <div style={backdrop}>
      <Checkbox checked={checked} onChange={setChecked} label="I agree to the league rules" />
    </div>
  )
}

export function Checked() {
  const [checked, setChecked] = useState(true)
  return (
    <div style={backdrop}>
      <Checkbox checked={checked} onChange={setChecked} label="I agree to the league rules" />
    </div>
  )
}
