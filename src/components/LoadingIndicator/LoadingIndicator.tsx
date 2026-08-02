import { useMemo } from 'react'
import { randomLoadingPhrase } from './loadingPhrases'

export interface LoadingIndicatorProps {
  /** Pins a specific phrase (e.g. for a second, simultaneous indicator) instead of picking one at random. */
  phrase?: string
  size?: 'sm' | 'lg'
}

/** Gymcord's gymnastics-themed loading state — a spinner plus a random phrase from the shared set. */
export function LoadingIndicator({ phrase, size = 'lg' }: LoadingIndicatorProps) {
  const chosen = useMemo(() => phrase ?? randomLoadingPhrase(), [phrase])
  return (
    <div className={`gds-loading gds-loading--${size}`}>
      <span className="gds-loading__spinner" aria-hidden="true" />
      <span className="gds-loading__text">{chosen}…</span>
    </div>
  )
}
