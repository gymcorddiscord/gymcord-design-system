import { useState } from 'react'
import { ThemeToggle } from 'gymcord-design-system'

export function Dark() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')
  return (
    <div style={{ background: 'var(--bg-1)', padding: 24, borderRadius: 12, display: 'inline-flex' }}>
      <ThemeToggle theme={theme} onToggle={setTheme} />
    </div>
  )
}

export function Light() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  return (
    <div style={{ background: 'var(--bg-1)', padding: 24, borderRadius: 12, display: 'inline-flex' }}>
      <ThemeToggle theme={theme} onToggle={setTheme} />
    </div>
  )
}
