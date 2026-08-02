import { useEffect, useState } from 'react'
import { randomLoadingPhrase } from './loadingPhrases'

export interface LoadingIndicatorProps {
  /** Pins a specific phrase (e.g. for a second, simultaneous indicator) instead of cycling randomly. */
  phrase?: string
  size?: 'sm' | 'lg'
}

/** Gymcord's gymnastics-themed loading state — a spinner plus a phrase from the shared set, cycling to a new random phrase every 2s unless `phrase` is pinned. */
export function LoadingIndicator({ phrase, size = 'lg' }: LoadingIndicatorProps) {
  const [current, setCurrent] = useState(() => phrase ?? randomLoadingPhrase())

  useEffect(() => {
    if (phrase) {
      setCurrent(phrase)
      return
    }
    setCurrent(randomLoadingPhrase())
    const id = setInterval(() => {
      setCurrent((prev) => randomLoadingPhrase(prev))
    }, 2000)
    return () => clearInterval(id)
  }, [phrase])

  return (
    <div className={`gds-loading gds-loading--${size}`}>
      <span className="gds-loading__spinner" aria-hidden="true" />
      <span className="gds-loading__text">{current}</span>
    </div>
  )
}
