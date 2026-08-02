import { useId, useState } from 'react'

export interface TextFieldProps {
  label: string
  value: string
  onChange?: (value: string) => void
  type?: 'text' | 'email' | 'password' | 'number'
  placeholder?: string
  helperText?: string
  error?: string
  disabled?: boolean
  /** Renders a multi-line `<textarea>` instead of a single-line `<input>` (e.g. a feedback message). */
  multiline?: boolean
  rows?: number
}

/**
 * Gymcord's text field — a Material-style filled input with a floating label,
 * replacing the plain bordered `<input>` + static `<label>` pattern used across
 * the web app's forms (login, register, create/join league). `multiline` swaps
 * to a textarea for longer free-text (e.g. the feedback dialog's message box).
 */
export function TextField({ label, value, onChange, type = 'text', placeholder, helperText, error, disabled, multiline, rows = 4 }: TextFieldProps) {
  const id = useId()
  const [focused, setFocused] = useState(false)
  const floated = focused || value.length > 0

  return (
    <div className={`gds-textfield${error ? ' gds-textfield--error' : ''}${disabled ? ' gds-textfield--disabled' : ''}`}>
      <div className={`gds-textfield__box${focused ? ' gds-textfield__box--focused' : ''}${multiline ? ' gds-textfield__box--multiline' : ''}`}>
        <label htmlFor={id} className={`gds-textfield__label${floated ? ' gds-textfield__label--floated' : ''}`}>
          {label}
        </label>
        {multiline ? (
          <textarea
            id={id}
            className="gds-textfield__input gds-textfield__input--multiline"
            value={value}
            disabled={disabled}
            rows={rows}
            placeholder={focused ? placeholder : undefined}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            onChange={(e) => onChange?.(e.target.value)}
          />
        ) : (
          <input
            id={id}
            type={type}
            className="gds-textfield__input"
            value={value}
            disabled={disabled}
            placeholder={focused ? placeholder : undefined}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            onChange={(e) => onChange?.(e.target.value)}
          />
        )}
      </div>
      {error ? <p className="gds-textfield__helper gds-textfield__helper--error">{error}</p> : helperText ? <p className="gds-textfield__helper">{helperText}</p> : null}
    </div>
  )
}
