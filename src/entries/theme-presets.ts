import type { EntryTheme } from "./index"

/**
 * Pure black canvas, white text and links. Every token is pinned —
 * including the interactive *surface* tokens (`accent`, `secondary`,
 * `muted`, `*-foreground`) — so hover/fill states don't leak the base
 * light/dark theme. Interactive surfaces are a subtle raised gray so
 * hover reads on black. Pair with `lockUserTheme` so it can't be toggled.
 */
export const blackWhite: EntryTheme = {
  background: "0 0% 0%",
  foreground: "0 0% 100%",
  card: "0 0% 0%",
  cardForeground: "0 0% 100%",
  popover: "0 0% 0%",
  popoverForeground: "0 0% 100%",
  primary: "0 0% 100%",
  primaryForeground: "0 0% 0%",
  secondary: "217.2 32.6% 17.5%",
  secondaryForeground: "0 0% 100%",
  muted: "217.2 32.6% 17.5%",
  mutedForeground: "0 0% 100%",
  accent: "217.2 32.6% 17.5%",
  accentForeground: "0 0% 100%",
  destructive: "0 62.8% 30.6%",
  destructiveForeground: "0 0% 100%",
  border: "217.2 32.6% 17.5%",
  input: "217.2 32.6% 17.5%",
  ring: "217.2 32.6% 17.5%",
}
