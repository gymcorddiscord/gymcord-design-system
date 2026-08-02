import { FeedbackButton } from 'gymcord-design-system'

export function Default() {
  return (
    <div style={{ background: 'var(--bg-0)', height: 220, borderRadius: 12, position: 'relative' }}>
      <FeedbackButton currentPath="/lineups" onSubmit={async () => {}} />
    </div>
  )
}
