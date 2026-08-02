import { useState } from 'react'
import { Dropdown } from 'gymcord-design-system'

const APPARATUS_OPTIONS = [
  { value: 'vt', label: 'Vault' },
  { value: 'ub', label: 'Uneven Bars' },
  { value: 'bb', label: 'Balance Beam' },
  { value: 'fx', label: 'Floor' },
  { value: 'aa', label: 'All-Around' }
]

export function Closed() {
  const [value, setValue] = useState('vt')
  return (
    <div style={{ background: 'var(--bg-1)', padding: 40, borderRadius: 12 }}>
      <Dropdown options={APPARATUS_OPTIONS} value={value} onChange={setValue} />
    </div>
  )
}

export function Open() {
  const [value, setValue] = useState('bb')
  return (
    <div style={{ background: 'var(--bg-1)', padding: 40, borderRadius: 12, minHeight: 260 }}>
      <Dropdown options={APPARATUS_OPTIONS} value={value} onChange={setValue} defaultOpen />
    </div>
  )
}
