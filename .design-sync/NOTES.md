# Design-sync notes

## Repo shape

- Package shape (no Storybook). Build: `npm run build` (tsc declaration-only pass + vite library build). Entry: `dist/index.es.js`. CSS: `dist/style.css` (bundled from `src/styles.css`, which `@import`s tokens + all component CSS + the M PLUS 1p Google Fonts stylesheet).
- `vite.config.ts` sets `build.emptyOutDir: false` — without it, `vite build` wipes the `.d.ts` files the preceding `tsc --emitDeclarationOnly` pass just wrote (both steps write into `dist/`). If a future toolchain change reintroduces a clean-dist step, watch for this.
- `src/dev/` (the local demo app used to visually verify against a reference screenshot) is excluded from `tsconfig.json`'s `include` so it never leaks into the shipped `.d.ts` tree or the component count.
- All 28 exported components are real: 17 "product" components + 11 icon wrapper components (`src/icons/Icons.tsx`, thin wrappers around `@phosphor-icons/react`, MIT licensed). The icon wrappers keep the original hand-authored icon component names (`HomeIcon`, `PlaneIcon`, etc.) so nothing else in the codebase needed to change when the user asked to switch from hand-drawn SVGs to a real open-source icon set (iconshock.com surfaces Phosphor Icons; we depend on `@phosphor-icons/react` directly instead of scraping the aggregator site).

## Known render warns

- None outstanding. The two `[GRID_OVERFLOW]` warns from the first validate pass (`SegmentedToggle` wide export, `FeedbackButton`'s fixed-position FAB escaping the grid) are resolved via `cfg.overrides` (`SegmentedToggle`: `cardMode: "column"`; `FeedbackButton`: `cardMode: "single", primaryStory: "Default"`; `AppHeader`/`AthleteTable` also set to `cardMode: "column"` preemptively since both are full-width layout components).

## Design system facts worth remembering

- **Dark-theme only.** No light mode, no theme provider. Every component assumes a dark backdrop (`var(--bg-0)`/`var(--bg-1)`) — documented in `.design-sync/conventions.md`.
- **Red is reserved exclusively for long-term injury status** (`--injury-long-term`). Nothing else in the system — not generic errors, not destructive actions — uses red; `--danger` (orange) covers those. This is an explicit, deliberate brand rule from the user, not an oversight.
- Primary CTA pill buttons (`--radius-pill`) must be a **solid** fill, never a gradient — a past Gymcord site (the meet calendar) hit a visible rendering artifact on a gradient-filled large pill button. Small badge-sized pills (rank tiers, discipline tags) are fine with gradients/solid spectrum colors.
- Font is M PLUS 1p, loaded via a remote Google Fonts `@import` in `styles.css` (not shipped as local `.woff2` files) — this is intentional and matches every other Gymcord Fantasy site.

## Re-sync risks

- The whole component set (all 28) was authored and graded in one solo pass rather than fanned out to subagents — there is no wave/learnings history to fold on the next sync.
- `AppHeader`, `AthleteTable`, `SegmentedToggle`'s `NavigationTabs` export, and `FeedbackButton` were visually cross-checked against a real screenshot of the production Gymcord Fantasy lineups page during this session (not just graded in isolation). If the product's actual header/table design changes, these previews should be re-compared against a fresh screenshot, not just re-graded against themselves.
- `AthleteTable`'s authored preview uses only 3 rows; the real app renders 9+ rows (see the dev demo at `src/dev/App.tsx`, which mirrors the full reference screenshot with badge combinations not all present in the authored preview — home+bye, home+double-week, away+injury, etc.). If a future sync wants a richer table preview, `src/dev/App.tsx`'s `ROWS` array is the source to draw from.
- `@phosphor-icons/react` is a real runtime dependency (bundled into `_ds_bundle.js`, not external) — a future icon addition should use the same package rather than reintroducing hand-drawn SVGs.
- No Storybook exists in this repo and none is planned — if one is added later, re-run detection (delete the `"shape"` pin from `.design-sync/config.json` first) rather than assuming package-shape forever.
