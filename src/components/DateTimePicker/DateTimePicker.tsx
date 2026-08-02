import { useEffect, useRef, useState } from 'react'
import { CalendarIcon, ChevronLeftIcon, ChevronRightIcon, ChevronUpIcon, ChevronDownIcon } from '../../icons/Icons'
import { SegmentedToggle } from '../SegmentedToggle/SegmentedToggle'
import { buildMonthGrid, isSameDay, formatDate, formatTime, WEEKDAY_LABELS, MONTH_LABELS } from './dateGrid'

export interface DateTimePickerProps {
  value: Date
  onChange?: (date: Date) => void
  /** `date` hides the time row for date-only fields (e.g. a birthdate); default includes time. */
  mode?: 'date' | 'datetime'
  label?: string
  /** Mounts the panel already open — useful for demos; it still closes normally afterward. */
  defaultOpen?: boolean
}

/**
 * Gymcord's date/time picker — a Material-style calendar-grid month view plus a
 * stepper time row, replacing the unstyled native `input[type="date"]` the web app
 * had CSS prepared for but never built a control around.
 */
export function DateTimePicker({ value, onChange, mode = 'datetime', label = 'Date', defaultOpen }: DateTimePickerProps) {
  const [open, setOpen] = useState(Boolean(defaultOpen))
  const [viewDate, setViewDate] = useState(() => new Date(value.getFullYear(), value.getMonth(), 1))
  const rootRef = useRef<HTMLDivElement>(null)

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

  const days = buildMonthGrid(viewDate)
  const today = new Date()

  function selectDay(date: Date) {
    const next = new Date(date)
    next.setHours(value.getHours(), value.getMinutes(), 0, 0)
    onChange?.(next)
    if (mode === 'date') setOpen(false)
  }

  function stepHour(delta: number) {
    const next = new Date(value)
    next.setHours((value.getHours() + delta + 24) % 24)
    onChange?.(next)
  }

  function stepMinute(delta: number) {
    const next = new Date(value)
    next.setMinutes((value.getMinutes() + delta + 60) % 60)
    onChange?.(next)
  }

  function setMeridiem(meridiem: 'am' | 'pm') {
    const hours24 = value.getHours()
    const isPM = hours24 >= 12
    if ((meridiem === 'pm') !== isPM) {
      const next = new Date(value)
      next.setHours(isPM ? hours24 - 12 : hours24 + 12)
      onChange?.(next)
    }
  }

  const hour12 = value.getHours() % 12 === 0 ? 12 : value.getHours() % 12

  return (
    <div className="gds-datetimepicker" ref={rootRef}>
      <span className="gds-datetimepicker__label">{label}</span>
      <button type="button" className="gds-datetimepicker__trigger" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
        <CalendarIcon size={16} className="gds-datetimepicker__icon" />
        <span className="gds-datetimepicker__value">
          {formatDate(value)}
          {mode === 'datetime' ? ` · ${formatTime(value)}` : ''}
        </span>
      </button>
      {open ? (
        <div className="gds-datetimepicker__panel">
          <div className="gds-datetimepicker__monthnav">
            <button type="button" className="gds-datetimepicker__navbtn" aria-label="Previous month" onClick={() => setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1))}>
              <ChevronLeftIcon size={16} />
            </button>
            <span className="gds-datetimepicker__monthlabel">
              {MONTH_LABELS[viewDate.getMonth()]} {viewDate.getFullYear()}
            </span>
            <button type="button" className="gds-datetimepicker__navbtn" aria-label="Next month" onClick={() => setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1))}>
              <ChevronRightIcon size={16} />
            </button>
          </div>

          <div className="gds-datetimepicker__weekdays">
            {WEEKDAY_LABELS.map((d, i) => (
              <span key={i}>{d}</span>
            ))}
          </div>

          <div className="gds-datetimepicker__grid">
            {days.map((day, i) => {
              const selected = isSameDay(day.date, value)
              const isToday = isSameDay(day.date, today)
              return (
                <button
                  key={i}
                  type="button"
                  className={[
                    'gds-datetimepicker__day',
                    day.inCurrentMonth ? '' : 'gds-datetimepicker__day--outside',
                    selected ? 'gds-datetimepicker__day--selected' : '',
                    isToday && !selected ? 'gds-datetimepicker__day--today' : ''
                  ].filter(Boolean).join(' ')}
                  onClick={() => selectDay(day.date)}
                >
                  {day.date.getDate()}
                </button>
              )
            })}
          </div>

          {mode === 'datetime' ? (
            <div className="gds-datetimepicker__time">
              <div className="gds-datetimepicker__stepper">
                <button type="button" aria-label="Increase hour" onClick={() => stepHour(1)}>
                  <ChevronUpIcon size={14} />
                </button>
                <span>{String(hour12).padStart(2, '0')}</span>
                <button type="button" aria-label="Decrease hour" onClick={() => stepHour(-1)}>
                  <ChevronDownIcon size={14} />
                </button>
              </div>
              <span className="gds-datetimepicker__colon">:</span>
              <div className="gds-datetimepicker__stepper">
                <button type="button" aria-label="Increase minute" onClick={() => stepMinute(5)}>
                  <ChevronUpIcon size={14} />
                </button>
                <span>{String(value.getMinutes()).padStart(2, '0')}</span>
                <button type="button" aria-label="Decrease minute" onClick={() => stepMinute(-5)}>
                  <ChevronDownIcon size={14} />
                </button>
              </div>
              <SegmentedToggle
                size="sm"
                value={value.getHours() >= 12 ? 'pm' : 'am'}
                onChange={setMeridiem}
                options={[
                  { value: 'am', label: 'AM' },
                  { value: 'pm', label: 'PM' }
                ]}
              />
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  )
}
