import { UserCircleIcon } from 'gymcord-design-system'

export function Default() {
  return (
    <div style={{ background: 'var(--bg-2)', padding: 24, borderRadius: '50%', color: 'var(--text-secondary)', display: 'inline-flex' }}>
      <UserCircleIcon size={32} />
    </div>
  )
}
