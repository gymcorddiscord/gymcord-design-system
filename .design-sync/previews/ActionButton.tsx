import { ActionButton, PlusIcon } from 'gymcord-design-system'

export function Large() {
  return (
    <div style={{ background: 'var(--bg-1)', padding: 24, borderRadius: 12, display: 'inline-flex' }}>
      <ActionButton icon={<PlusIcon size={24} />} aria-label="Add gymnast" size="lg" />
    </div>
  )
}

export function Small() {
  return (
    <div style={{ background: 'var(--bg-1)', padding: 24, borderRadius: 12, display: 'inline-flex' }}>
      <ActionButton icon={<PlusIcon size={18} />} aria-label="Add gymnast" size="sm" />
    </div>
  )
}
