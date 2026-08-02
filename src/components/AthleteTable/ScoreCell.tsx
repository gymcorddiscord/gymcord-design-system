export interface ScoreCellProps {
  /** The score value, or `null` when the gymnast has no score yet for this apparatus. */
  value: number | null
  checked?: boolean
  onCheckedChange?: (checked: boolean) => void
  disabled?: boolean
}

/** A single selectable score in the lineup table — large checkbox click target + the score value. */
export function ScoreCell({ value, checked, onCheckedChange, disabled }: ScoreCellProps) {
  return (
    <label className={`gds-score-cell${disabled ? ' gds-score-cell--disabled' : ''}`}>
      <input
        type="checkbox"
        className="gds-score-cell__checkbox"
        checked={checked ?? false}
        disabled={disabled || value === null}
        onChange={(e) => onCheckedChange?.(e.target.checked)}
      />
      <span className="gds-score-cell__value">{value === null ? '—' : value.toFixed(3)}</span>
    </label>
  )
}
