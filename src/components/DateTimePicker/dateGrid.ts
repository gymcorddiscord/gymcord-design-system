export interface CalendarDay {
  date: Date
  inCurrentMonth: boolean
}

/** Builds a 42-cell (6-week) calendar grid for the month containing `viewDate`. */
export function buildMonthGrid(viewDate: Date): CalendarDay[] {
  const year = viewDate.getFullYear()
  const month = viewDate.getMonth()
  const firstOfMonth = new Date(year, month, 1)
  const startOffset = firstOfMonth.getDay()
  const gridStart = new Date(year, month, 1 - startOffset)

  const days: CalendarDay[] = []
  for (let i = 0; i < 42; i++) {
    const date = new Date(gridStart.getFullYear(), gridStart.getMonth(), gridStart.getDate() + i)
    days.push({ date, inCurrentMonth: date.getMonth() === month })
  }
  return days
}

export function isSameDay(a: Date, b: Date): boolean {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate()
}

export const WEEKDAY_LABELS = ['S', 'M', 'T', 'W', 'T', 'F', 'S']
export const MONTH_LABELS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
]

export function formatDate(date: Date): string {
  return `${MONTH_LABELS[date.getMonth()].slice(0, 3)} ${date.getDate()}, ${date.getFullYear()}`
}

export function formatTime(date: Date): string {
  const hours24 = date.getHours()
  const hours12 = hours24 % 12 === 0 ? 12 : hours24 % 12
  const minutes = String(date.getMinutes()).padStart(2, '0')
  return `${hours12}:${minutes} ${hours24 < 12 ? 'AM' : 'PM'}`
}
