import { useEffect, useRef, useState } from 'react'
import { CalendarIcon, ChevronDownIcon } from '../../icons/Icons'
import { buildGoogleCalendarUrl, buildOutlookCalendarUrl, buildIcsDataUrl, type CalendarEvent } from './calendarLinks'

export type { CalendarEvent }

export interface AddToCalendarButtonProps {
  event: CalendarEvent
  /** Mounts the menu already open — useful for demos; it still closes normally afterward. */
  defaultOpen?: boolean
}

/**
 * Gymcord's "Add to Calendar" button — a native menu of real Google Calendar,
 * Outlook, and downloadable-.ics links, replacing the external `add-to-calendar-button`
 * CDN web component the meet calendar previously depended on.
 */
export function AddToCalendarButton({ event, defaultOpen }: AddToCalendarButtonProps) {
  const [open, setOpen] = useState(Boolean(defaultOpen))
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

  return (
    <div className="gds-dropdown" ref={rootRef}>
      <button type="button" className="gds-dropdown__trigger" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
        <CalendarIcon size={16} className="gds-dropdown__icon" />
        <span className="gds-dropdown__label">Add to Calendar</span>
        <ChevronDownIcon size={16} className={`gds-dropdown__chevron${open ? ' gds-dropdown__chevron--open' : ''}`} />
      </button>
      {open ? (
        <div className="gds-dropdown__menu" role="menu">
          <a className="gds-dropdown__item" href={buildGoogleCalendarUrl(event)} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
            Google Calendar
          </a>
          <a className="gds-dropdown__item" href={buildOutlookCalendarUrl(event)} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
            Outlook
          </a>
          <a className="gds-dropdown__item" href={buildIcsDataUrl(event)} download={`${event.title}.ics`} onClick={() => setOpen(false)}>
            Apple / Other (.ics)
          </a>
        </div>
      ) : null}
    </div>
  )
}
