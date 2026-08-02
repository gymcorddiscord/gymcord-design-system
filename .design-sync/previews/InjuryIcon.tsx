import { InjuryIcon } from 'gymcord-design-system'

export function ShortTerm() {
  return (
    <div style={{ background: 'var(--bg-1)', padding: 24, borderRadius: 12, color: 'var(--danger)', display: 'inline-flex' }}>
      <InjuryIcon size={32} />
    </div>
  )
}

export function LongTerm() {
  return (
    <div style={{ background: 'var(--bg-1)', padding: 24, borderRadius: 12, color: 'var(--injury-long-term)', display: 'inline-flex' }}>
      <InjuryIcon size={32} />
    </div>
  )
}
