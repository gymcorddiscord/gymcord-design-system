import { useState } from 'react'
import { LoggedOutHeader } from 'gymcord-design-system'

export function Default() {
  const [theme, setTheme] = useState('dark')
  return <LoggedOutHeader theme={theme} onThemeToggle={setTheme} onLogIn={() => {}} onSignUp={() => {}} />
}
