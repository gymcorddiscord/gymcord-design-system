import { SearchIcon } from 'gymcord-design-system'

export function Default() {
  return (
    <div style={{ background: 'var(--bg-2)', padding: 24, borderRadius: 12, color: 'var(--text-tertiary)', display: 'inline-flex' }}>
      <SearchIcon size={32} />
    </div>
  )
}
