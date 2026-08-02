/** The standard Gymcord Fantasy loading-state phrase set, reused site-wide. */
export const LOADING_PHRASES = [
  'Warming up',
  'Throwing timers',
  'Podium training',
  'Chalking up',
  'Saluting the judges',
  'Sticking the landing',
  'Spotting the vault',
  'Gripping up',
  'Checking the springboard'
] as const

/** Picks a random phrase, optionally excluding one — for two simultaneous indicators that shouldn't repeat. */
export function randomLoadingPhrase(exclude?: string): string {
  const pool = exclude ? LOADING_PHRASES.filter((p) => p !== exclude) : LOADING_PHRASES
  return pool[Math.floor(Math.random() * pool.length)]
}
