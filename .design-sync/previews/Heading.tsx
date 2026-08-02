import { Heading } from 'gymcord-design-system'

const backdrop = { background: 'var(--bg-1)', padding: 20, borderRadius: 12, display: 'flex', flexDirection: 'column' as const, gap: 8 }

export function AllLevels() {
  return (
    <div style={backdrop}>
      <Heading level={1}>Heading 1</Heading>
      <Heading level={2}>Heading 2</Heading>
      <Heading level={3}>Heading 3</Heading>
    </div>
  )
}
