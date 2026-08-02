import { AddToCalendarButton } from 'gymcord-design-system'

const event = {
  title: 'Precision Flyers Draft',
  description: 'Gymcord Fantasy live draft',
  location: 'Discord — Gymcord',
  start: new Date(2026, 7, 15, 19, 30),
  end: new Date(2026, 7, 15, 20, 30)
}

export function Closed() {
  return (
    <div style={{ background: 'var(--bg-1)', padding: 24, borderRadius: 12 }}>
      <AddToCalendarButton event={event} />
    </div>
  )
}

export function Open() {
  return (
    <div style={{ background: 'var(--bg-1)', padding: 24, borderRadius: 12, minHeight: 200 }}>
      <AddToCalendarButton event={event} defaultOpen />
    </div>
  )
}
