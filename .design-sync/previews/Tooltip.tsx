import { Tooltip, Button } from 'gymcord-design-system'

export function Visible() {
  return (
    <div style={{ background: 'var(--bg-1)', padding: 60, borderRadius: 12 }}>
      <Tooltip content="Draft opens Saturday at 7pm ET" defaultVisible>
        <Button variant="secondary">Draft time</Button>
      </Tooltip>
    </div>
  )
}
