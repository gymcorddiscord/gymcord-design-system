import { useId, type ReactNode } from 'react'
import { CheckIcon } from '../../icons/Icons'

export interface CheckboxProps {
  checked: boolean
  onChange?: (checked: boolean) => void
  label?: ReactNode
  disabled?: boolean
}

/**
 * Gymcord's checkbox — a filled teal square with a checkmark when checked, replacing
 * the bare native checkbox previously used for step-completion and score-selection UI.
 * Large click target: the whole label row toggles, not just the box.
 */
export function Checkbox({ checked, onChange, label, disabled }: CheckboxProps) {
  const id = useId()
  return (
    <label htmlFor={id} className={`gds-checkbox${disabled ? ' gds-checkbox--disabled' : ''}`}>
      <input
        id={id}
        type="checkbox"
        className="gds-checkbox__input"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.checked)}
      />
      <span className={`gds-checkbox__box${checked ? ' gds-checkbox__box--checked' : ''}`}>
        {checked ? <CheckIcon size={14} /> : null}
      </span>
      {label ? <span className="gds-checkbox__label">{label}</span> : null}
    </label>
  )
}
