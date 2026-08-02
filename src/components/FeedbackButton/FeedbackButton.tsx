import { useState, type FormEvent } from 'react'

export interface FeedbackButtonProps {
  /** The current route/path, auto-captured and shown to the user rather than asked for. */
  currentPath: string
  onSubmit: (currentPath: string, message: string) => Promise<void>
}

/**
 * Floating feedback/bug-report button, meant to be rendered once at the app shell level so it
 * persists across every route. Auto-captures `currentPath` instead of asking where the user was.
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

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
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
      <button type="button" className="gds-feedback-fab" onClick={() => setOpen(true)} aria-label="Report feedback or a bug">
        Feedback
      </button>

      {open && (
        <div className="gds-feedback-backdrop" onClick={close}>
          <div className="gds-feedback-modal" role="dialog" aria-modal="true" aria-label="Send feedback" onClick={(e) => e.stopPropagation()}>
            {status === 'sent' ? (
              <>
                <h3>Thanks!</h3>
                <p>
                  Your feedback was logged from <code>{currentPath}</code>.
                </p>
                <button type="button" className="gds-button gds-button--primary" onClick={close}>
                  Close
                </button>
              </>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3>Report feedback or a bug</h3>
                <p className="gds-feedback-modal__note">
                  Logged from <code>{currentPath}</code>
                </p>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="What happened? What did you expect instead?"
                  rows={5}
                  maxLength={2000}
                  autoFocus
                />
                {status === 'error' && <p className="gds-feedback-modal__error">Something went wrong sending that. Try again.</p>}
                <div className="gds-feedback-modal__actions">
                  <button type="button" className="gds-button gds-button--tertiary" onClick={close}>
                    Cancel
                  </button>
                  <button type="submit" className="gds-button gds-button--primary" disabled={status === 'sending' || !message.trim()}>
                    {status === 'sending' ? 'Sending…' : 'Send'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  )
}
