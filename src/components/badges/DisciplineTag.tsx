export type Discipline = 'VT' | 'UB' | 'BB' | 'FX' | 'AA'

export interface DisciplineTagProps {
  discipline: Discipline
}

const LABELS: Record<Discipline, string> = {
  VT: 'Vault',
  UB: 'Uneven Bars',
  BB: 'Balance Beam',
  FX: 'Floor',
  AA: 'All-Around'
}

/** Colored apparatus tag (VT/UB/BB/FX/AA), each mapped to a distinct spectrum color. */
export function DisciplineTag({ discipline }: DisciplineTagProps) {
  return (
    <span className={`gds-discipline-tag gds-discipline-tag--${discipline.toLowerCase()}`} title={LABELS[discipline]}>
      {discipline}
    </span>
  )
}
