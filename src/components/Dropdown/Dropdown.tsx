import { useEffect, useRef, useState, type ReactNode } from 'react'
import { ChevronDownIcon } from '../../icons/Icons'

export interface DropdownOption<T extends string> {
  value: T
  label: string
  icon?: ReactNode
}

export interface DropdownProps<T extends string> {
  options: DropdownOption<T>[]
  value: T
  onChange?: (value: T) => void
  placeholder?: string
  /** Mounts the menu already open — useful for demos; the menu still closes normally afterward. */
  defaultOpen?: boolean
}

/**
 * Gymcord's dropdown menu — a trigger button that opens a panel of large-click-target
 * options below it. Closes on outside click, Escape, or selecting an option.
 */
export function Dropdown<T extends string>({ options, value, onChange, placeholder, defaultOpen }: DropdownProps<T>) {
  const [open, setOpen] = useState(Boolean(defaultOpen))
  const rootRef = useRef<HTMLDivElement>(null)
  const selected = options.find((o) => o.value === value)

  useEffect(() => {
    if (!open) return
    function onDocClick(e: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false)
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onDocClick)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('mousedown', onDocClick)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  return (
    <div className="gds-dropdown" ref={rootRef}>
      <button type="button" className="gds-dropdown__trigger" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
        {selected?.icon ? <span className="gds-dropdown__icon">{selected.icon}</span> : null}
        <span className="gds-dropdown__label">{selected?.label ?? placeholder ?? 'Select…'}</span>
        <ChevronDownIcon size={16} className={`gds-dropdown__chevron${open ? ' gds-dropdown__chevron--open' : ''}`} />
      </button>
      {open ? (
        <div className="gds-dropdown__menu" role="listbox">
          {options.map((opt) => (
            <button
              key={opt.value}
              type="button"
              role="option"
              aria-selected={opt.value === value}
              className={`gds-dropdown__item${opt.value === value ? ' gds-dropdown__item--selected' : ''}`}
              onClick={() => {
                onChange?.(opt.value)
                setOpen(false)
              }}
            >
              {opt.icon ? <span className="gds-dropdown__icon">{opt.icon}</span> : null}
              {opt.label}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  )
}
