import { Text } from 'gymcord-design-system'

const backdrop = { background: 'var(--bg-1)', padding: 20, borderRadius: 12, display: 'flex', flexDirection: 'column' as const, gap: 8 }

export function BodyPrimary() {
  return (
    <div style={backdrop}>
      <Text size="body" tone="primary">Body text in the primary tone — the default reading color.</Text>
    </div>
  )
}

export function CaptionSecondary() {
  return (
    <div style={backdrop}>
      <Text size="caption" tone="secondary">Caption text in the secondary tone — for meta copy like team names.</Text>
    </div>
  )
}
