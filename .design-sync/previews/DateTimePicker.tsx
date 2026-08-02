import { useState } from 'react'
import { DateTimePicker } from 'gymcord-design-system'

export function Closed() {
  const [value, setValue] = useState(new Date(2026, 7, 15, 19, 30))
  return (
    <div style={{ background: 'var(--bg-1)', padding: 24, borderRadius: 12 }}>
      <DateTimePicker label="Draft time" value={value} onChange={setValue} />
    </div>
  )
}

export function Open() {
  const [value, setValue] = useState(new Date(2026, 7, 15, 19, 30))
  return (
    <div style={{ background: 'var(--bg-1)', padding: 24, borderRadius: 12, minHeight: 420 }}>
      <DateTimePicker label="Draft time" value={value} onChange={setValue} defaultOpen />
    </div>
  )
}
