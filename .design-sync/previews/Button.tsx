import { Button } from 'gymcord-design-system'
import { PeopleIcon } from 'gymcord-design-system'

export function Primary() {
  return <Button variant="primary">Save Lineup</Button>
}

export function Secondary() {
  return <Button variant="secondary">Import Last Week</Button>
}

export function Tertiary() {
  return <Button variant="tertiary">Clear All</Button>
}

export function WithIcon() {
  return (
    <Button variant="secondary" icon={<PeopleIcon size={16} />}>
      Invite Teammates
    </Button>
  )
}
