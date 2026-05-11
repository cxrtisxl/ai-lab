import { useEffect, useState } from "react"
import { useTheme } from "next-themes"

/**
 * The theme currently applied to the page — "light" or "dark", never
 * "system". Returns "light" during SSR and before the client mounts to
 * keep the server-rendered HTML stable; the real value lands after
 * hydration. Use this in entries that need to vary their content
 * (iframe URLs, image sources, etc.) by theme.
 */
export function useResolvedTheme(): "light" | "dark" {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return "light"
  return resolvedTheme === "dark" ? "dark" : "light"
}
