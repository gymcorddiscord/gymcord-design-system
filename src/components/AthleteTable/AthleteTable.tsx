import type { ReactNode } from 'react'
import { ScoreCell } from './ScoreCell'
import type { Discipline } from '../badges/DisciplineTag'

export interface AthleteTableColumn {
  key: Discipline
  /** The "used / cap" caption under the column header, e.g. "0/10". */
  caption: string
}

export interface AthleteTableRow {
  id: string
  name: string
  team: string
  /** Inline status badges (home/away, injury, bye, double-week) shown next to the name. */
  badges?: ReactNode
  /** Score per column key, or `null` when not yet scored. */
  scores: Partial<Record<string, number | null>>
}

export interface AthleteTableProps {
  columns: AthleteTableColumn[]
  rows: AthleteTableRow[]
  /** `selected[rowId][columnKey]` — whether that score is checked into the lineup. */
  selected?: Record<string, Record<string, boolean>>
  onToggle?: (rowId: string, columnKey: string, checked: boolean) => void
}

/** The weekly lineup table — one row per gymnast, one selectable score column per apparatus. */
export function AthleteTable({ columns, rows, selected, onToggle }: AthleteTableProps) {
  return (
    <table className="gds-athlete-table">
      <thead>
        <tr>
          <th className="gds-athlete-table__name-header">Athlete Name</th>
          {columns.map((col) => (
            <th key={col.key} className="gds-athlete-table__col-header">
              <span className="gds-athlete-table__col-key">{col.key}</span>
              <span className="gds-athlete-table__col-caption">{col.caption}</span>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.id}>
            <td className="gds-athlete-table__name-cell">
              <div className="gds-athlete-table__name-row">
                <span className="gds-athlete-table__name">{row.name}</span>
                {row.badges}
              </div>
              <span className="gds-athlete-table__team">{row.team}</span>
            </td>
            {columns.map((col) => (
              <td key={col.key}>
                <ScoreCell
                  value={row.scores[col.key] ?? null}
                  checked={selected?.[row.id]?.[col.key]}
                  onCheckedChange={(checked) => onToggle?.(row.id, col.key, checked)}
                />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
