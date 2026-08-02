import { DisciplineTag } from 'gymcord-design-system'

export function AllDisciplines() {
  return (
    <div style={{ background: 'var(--bg-1)', padding: 20, borderRadius: 12, display: 'flex', gap: 10 }}>
      <DisciplineTag discipline="VT" />
      <DisciplineTag discipline="UB" />
      <DisciplineTag discipline="BB" />
      <DisciplineTag discipline="FX" />
      <DisciplineTag discipline="AA" />
    </div>
  )
}
