import { PauseCircleIcon } from 'gymcord-design-system'

export function Default() {
  return (
    <div style={{ background: 'var(--bg-1)', padding: 24, borderRadius: 12, color: 'var(--danger)', display: 'inline-flex' }}>
      <PauseCircleIcon size={32} />
    </div>
  )
}
