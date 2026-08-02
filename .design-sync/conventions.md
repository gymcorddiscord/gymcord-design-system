## Gymcord Design System — conventions

This is a **dark-theme-only** system for Gymcord Fantasy, a fantasy NCAA women's gymnastics app. There is no light mode and no theme provider — components read design tokens directly from CSS custom properties, so nothing needs to be wrapped in a provider. But every component assumes it sits on a dark surface (`var(--bg-0)` or `var(--bg-1)`): text, borders, and icon strokes are colored for a dark background and will look wrong or invisible on white. **Always give the outermost element of a build a dark background** — e.g. `<div style={{ background: 'var(--bg-0)', minHeight: '100vh' }}>` — before placing components inside it.

### Styling idiom: CSS custom properties, not utility classes

Components ship their own scoped CSS and read colors/spacing from tokens defined in `styles.css` (bound copy: `tokens/tokens.css`). When you need to style your own layout glue (page backgrounds, spacing between components), use these tokens via `var(--token-name)` — never hardcode hex values or invent new class names.

**Surfaces** (near-black, cool violet undertone — darkest to lightest): `--bg-0`, `--bg-1`, `--bg-2`, `--bg-3`
**Text**: `--text-primary`, `--text-secondary`, `--text-tertiary`
**Borders**: `--border-subtle`, `--border-default`
**Brand**: `--brand-primary` (teal, the primary accent — active tabs, primary buttons), `--brand-primary-hover`, `--brand-secondary` (purple — secondary accents, the feedback FAB), `--brand-secondary-hover`
**Spectrum** (discipline tags, data viz, prismatic gradients): `--spectrum-orange`, `--spectrum-yellow`, `--spectrum-green`, `--spectrum-teal`, `--spectrum-blue`, `--spectrum-violet`, and `--spectrum-gradient` (the full-spectrum gradient used by the prismatic rank tier)
**Semantic**: `--success` (green), `--warning` (yellow), `--danger` (orange), `--info` (blue). **`--injury-long-term` (red) is reserved exclusively for long-term injury status — never use red for anything else (errors, warnings, deletes, etc. all use `--danger` orange instead).**
**Rank tiers**: `--tier-bronze`, `--tier-silver`, `--tier-gold`, `--tier-prismatic`
**Radius**: `--radius-sm`, `--radius-md`, `--radius-lg`, `--radius-pill` (use `--radius-pill` for primary CTA buttons and nav segments — always a **solid** fill, never a gradient, on large pill-shaped buttons; a gradient fill on a fully-rounded large pill produces a visible rendering artifact at the edge)
**Font**: `--font-family` resolves to M PLUS 1p (loaded via a remote Google Fonts `@import` already in `styles.css` — no local font files to manage)
**Type scale**: `--font-size-h1` (32px), `--font-size-h2` (24px), `--font-size-h3` (18px), `--font-size-body` (14px), `--font-size-caption` (12px) — use the `Heading` component (`level={1|2|3}`) and `Text` component (`size="body"|"caption"`, `tone="primary"|"secondary"|"tertiary"`) rather than raw `<h1>`/`<p>` tags, so text always matches this scale.

### Logo

`Logo` renders the real Gymcord brand mark (a gymnast silhouette over a prismatic gradient) — never substitute a generated or placeholder mark. It's a self-contained component (the image is inlined); just drop `<Logo />` in, optionally overriding `wordmark`.

### Dropdown

`Dropdown` is the standard select/menu control — a trigger button (selected label + chevron) that opens a panel of large-click-target options below it, closing on outside click, Escape, or selection. Pass `defaultOpen` to mount it already open (handy for demos; it still closes normally afterward on interaction). Prefer it over a native `<select>` or a hand-rolled menu everywhere a single choice needs to be made from a list.

### Forms, overlays, and utility components

**Form fields**: `Checkbox` (filled teal square + checkmark, large click target on the whole label row — never a bare `<input type="checkbox">`), `TextField` (Material-style filled input with a floating label; pass `multiline` for a textarea, e.g. the feedback message box), `SearchBar` (pill input with a search icon + clear button once non-empty), `DateTimePicker` (calendar-grid month view + hour/minute steppers + AM/PM `SegmentedToggle`; pass `mode="date"` to hide the time row).

**Overlays** all share the outside-click/Escape-to-close pattern and a `defaultOpen`/`open` prop for demos: `Dropdown` (select from a list), `AddToCalendarButton` (real Google Calendar/Outlook/.ics links — no external script, unlike the old `add-to-calendar-button` web component), `Dialog` (generic modal: `title`, `children`, `actions` slots — the feedback flow is built from this, not one-off modal markup), `Tooltip` (hover/focus, ~400ms delay, `side="top"|"bottom"|"left"|"right"`).

**Buttons**: `ActionButton` (circular FAB, icon-only, `aria-label` required), `SignInWithDiscordButton` (Discord's own blurple `#5865F2` — a connected third-party account keeps its own brand color, never Gymcord's teal/purple).

**Cards**: `Card` — `elevation="flat"|"raised"|"elevated"`, `interactive` for a hover-lift on clickable cards (league cards, etc).

### App shell headers

`AppHeader` is the signed-in shell header. Pass `leagues` (a `LeagueOption[]`: `{ id, teamName, leagueName, icon }`) and `activeLeagueId`/`onLeagueChange` to show the `LeagueSwitcher` — a dropdown for players in more than one league, each entry keeping its own icon. `phase="preseason"` (before there are weeks/lineups — draft period) swaps the week navigator to a non-advancing "Preseason" label with **no arrows at all** (`WeekNavigator`'s `hideArrows`) and the nav tabs to Draft (clipboard icon) / Gymnasts. `phase="standard"` strips the header down to just the logo (+ `ThemeToggle` if `theme` is passed) — no league switcher, week navigator, or tabs — for pages with no league/week/tab context. Pass `theme`+`onThemeToggle` to show the `ThemeToggle` (omit to hide it). The account icon (top-right) always opens a menu with "Log out" — `onLogOut`, `accountMenuDefaultOpen` for demos.

`LoggedOutHeader` is the separate signed-out variant — logo, `ThemeToggle`, Log in (secondary button) / Sign Up (primary button). Don't try to make `AppHeader` do double duty for logged-out state; it assumes a team/league.

### Where the truth lives

Read `styles.css` and its imported `tokens/tokens.css` before styling anything — they're the real compiled source, not a summary. Each component's own usage guidance and prop contract is in its `<Name>.prompt.md` and `<Name>.d.ts` alongside it.

### Idiomatic build snippet

```tsx
import { AppHeader, AthleteTable, Button, HomeAwayBadge } from 'gymcord-design-system'

function LineupsPage() {
  return (
    <div style={{ background: 'var(--bg-0)', minHeight: '100vh' }}>
      <AppHeader
        teamName="Precision Flyers"
        leagueName="Elite Squad League"
        weekLabel="Week 3"
        weekStatusLabel="CURRENT"
        activeTab="lineups"
      />
      <div style={{ padding: 24 }}>
        <Button variant="primary">Save Lineup</Button>
        <AthleteTable
          columns={[{ key: 'VT', caption: '0/10' }]}
          rows={[{ id: 'a', name: 'Haleigh Bryant', team: 'LSU', badges: <HomeAwayBadge type="home" />, scores: { VT: 9.938 } }]}
        />
      </div>
    </div>
  )
}
```
