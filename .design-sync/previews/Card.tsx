import { Card, Heading, Text } from 'gymcord-design-system'

export function Flat() {
  return (
    <Card elevation="flat" style={{ width: 240 }}>
      <Heading level={3}>Flat</Heading>
      <Text size="body" tone="secondary">Border only, no shadow.</Text>
    </Card>
  )
}

export function Raised() {
  return (
    <Card elevation="raised" style={{ width: 240 }}>
      <Heading level={3}>Elite Squad League</Heading>
      <Text size="body" tone="secondary">10 teams · Standard scoring</Text>
    </Card>
  )
}

export function Interactive() {
  return (
    <Card elevation="raised" interactive style={{ width: 240 }}>
      <Heading level={3}>Precision Flyers</Heading>
      <Text size="body" tone="secondary">Rank #2 · 412.85 pts</Text>
    </Card>
  )
}
