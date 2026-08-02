import { useState } from 'react'
import { Dialog, TextField, Button } from 'gymcord-design-system'

export function Open() {
  const [message, setMessage] = useState('')
  return (
    <div style={{ minHeight: 360 }}>
      <Dialog
        open
        title="Report feedback or a bug"
        actions={
          <>
            <Button variant="tertiary">Cancel</Button>
            <Button variant="primary">Send</Button>
          </>
        }
      >
        <p style={{ color: 'var(--text-secondary)', fontSize: 13, margin: 0 }}>Logged from /lineups</p>
        <TextField
          label="What happened?"
          value={message}
          onChange={setMessage}
          multiline
          rows={5}
          placeholder="What happened? What did you expect instead?"
        />
      </Dialog>
    </div>
  )
}
