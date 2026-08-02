import { ChatIcon } from 'gymcord-design-system'

export function Default() {
  return (
    <div style={{ background: 'var(--brand-secondary)', padding: 24, borderRadius: 12, color: 'var(--text-primary)', display: 'inline-flex' }}>
      <ChatIcon size={32} />
    </div>
  )
}
