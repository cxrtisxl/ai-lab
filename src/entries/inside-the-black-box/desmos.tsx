"use client"
import { useResolvedTheme } from "@/lib/use-resolved-theme"

export function DesmosFinal() {
  const theme = useResolvedTheme()
  const src = `https://www.desmos.com/calculator/r5kc6rnqzd${theme === "dark" ? "?invertedColors=true" : ""}`
  return (
    <iframe
      key={theme}
      src={src}
      style={{ width: "100%", height: 600, border: 0 }}
    />
  )
}
