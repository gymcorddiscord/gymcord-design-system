import { useState } from 'react'
import { ChatIcon } from '../../icons/Icons'
import { Tooltip } from '../Tooltip/Tooltip'
import { Dialog } from '../Dialog/Dialog'
import { TextField } from '../TextField/TextField'
import { Button } from '../Button/Button'

export interface FeedbackButtonProps {
  /** The current route/path, auto-captured and shown to the user rather than asked for. */
  currentPath: string
  onSubmit: (currentPath: string, message: string) => Promise<void>
}

/**
 * Floating feedback/bug-report button, meant to be rendered once at the app shell level so it
 * persists across every route. Auto-captures `currentPath` instead of asking where the user was.
 * Built on the generic `Dialog` + `TextField` primitives.
 */
export function FeedbackButton({ currentPath, onSubmit }: FeedbackButtonProps) {
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  function close() {
    setOpen(false)
    setMessage('')
    setStatus('idle')
  }

  async function handleSubmit() {
    if (!message.trim()) return
    setStatus('sending')
    try {
      await onSubmit(currentPath, message.trim())
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <Tooltip content="Report a bug or suggest an improvement" side="left">
        <button type="button" className="gds-feedback-fab" onClick={() => setOpen(true)} aria-label="Report feedback or a bug">
          <ChatIcon size={20} />
        </button>
      </Tooltip>

      <Dialog
        open={open}
        onClose={close}
        title={status === 'sent' ? 'Thanks!' : 'Report feedback or a bug'}
        actions={
          status === 'sent' ? (
            <Button variant="primary" onClick={close}>
              Close
            </Button>
          ) : (
            <>
              <Button variant="tertiary" onClick={close}>
                Cancel
              </Button>
              <Button variant="primary" onClick={handleSubmit} disabled={status === 'sending' || !message.trim()}>
                {status === 'sending' ? 'Sending…' : 'Send'}
              </Button>
            </>
          )
        }
      >
        {status === 'sent' ? (
          <p className="gds-feedback-modal__note">
            Your feedback was logged from <code>{currentPath}</code>.
          </p>
        ) : (
          <>
            <p className="gds-feedback-modal__note">
              Logged from <code>{currentPath}</code>
            </p>
            <TextField
              label="What happened?"
              value={message}
              onChange={setMessage}
              multiline
              rows={5}
              placeholder="What happened? What did you expect instead?"
            />
            {status === 'error' && <p className="gds-feedback-modal__error">Something went wrong sending that. Try again.</p>}
          </>
        )}
      </Dialog>
    </>
  )
}
