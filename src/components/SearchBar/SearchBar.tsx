import { SearchIcon, CloseIcon } from '../../icons/Icons'

export interface SearchBarProps {
  value: string
  onChange?: (value: string) => void
  placeholder?: string
}

/**
 * Gymcord's search bar — a pill input with a search icon and a clear button once
 * text is entered, replacing the plain "Search by name…" text input used on the
 * Gymnasts page filter bar.
 */
export function SearchBar({ value, onChange, placeholder = 'Search…' }: SearchBarProps) {
  return (
    <div className="gds-searchbar">
      <SearchIcon size={18} className="gds-searchbar__icon" />
      <input
        type="text"
        className="gds-searchbar__input"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange?.(e.target.value)}
      />
      {value.length > 0 ? (
        <button type="button" className="gds-searchbar__clear" aria-label="Clear search" onClick={() => onChange?.('')}>
          <CloseIcon size={14} />
        </button>
      ) : null}
    </div>
  )
}
