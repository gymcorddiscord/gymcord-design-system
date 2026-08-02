export interface CalendarEvent {
  title: string
  description?: string
  location?: string
  start: Date
  end: Date
}

function toUtcStamp(date: Date): string {
  return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'
}

export function buildGoogleCalendarUrl(event: CalendarEvent): string {
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: event.title,
    dates: `${toUtcStamp(event.start)}/${toUtcStamp(event.end)}`,
    details: event.description ?? '',
    location: event.location ?? ''
  })
  return `https://calendar.google.com/calendar/render?${params.toString()}`
}

export function buildOutlookCalendarUrl(event: CalendarEvent): string {
  const params = new URLSearchParams({
    path: '/calendar/action/compose',
    rru: 'addevent',
    subject: event.title,
    body: event.description ?? '',
    location: event.location ?? '',
    startdt: event.start.toISOString(),
    enddt: event.end.toISOString()
  })
  return `https://outlook.office.com/calendar/0/deeplink/compose?${params.toString()}`
}

export function buildIcsDataUrl(event: CalendarEvent): string {
  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Gymcord//Design System//EN',
    'BEGIN:VEVENT',
    `UID:${Date.now()}@gymcord`,
    `DTSTAMP:${toUtcStamp(new Date(event.start))}`,
    `DTSTART:${toUtcStamp(event.start)}`,
    `DTEND:${toUtcStamp(event.end)}`,
    `SUMMARY:${event.title}`,
    event.description ? `DESCRIPTION:${event.description}` : '',
    event.location ? `LOCATION:${event.location}` : '',
    'END:VEVENT',
    'END:VCALENDAR'
  ].filter(Boolean)
  return `data:text/calendar;charset=utf-8,${encodeURIComponent(lines.join('\r\n'))}`
}
