"use client"
import { useResolvedTheme } from "@/lib/use-resolved-theme"

const GRAPH_ID = "r5kc6rnqzd"

export function InsideTheBlackBox() {
  const theme = useResolvedTheme()
  const src = `https://www.desmos.com/calculator/${GRAPH_ID}${theme === "dark" ? "?invertedColors=true" : ""
    }`
  return (
    <iframe
      key={theme}
      src={src}
      style={{ width: "100%", height: 600, border: 0 }}
    />
  )
}