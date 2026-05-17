"use client"
import { useResolvedTheme } from "@/lib/use-resolved-theme"

export function DesmosFinal() {
  const theme = useResolvedTheme()
  const src = `https://www.desmos.com/calculator/r5kc6rnqzd${theme === "dark" ? "?invertedColors=true" : ""}`
  return (
    <iframe
      key={theme}
      src={src}
      style={{ width: "100%", height: 800, border: 0, }}
    />
  )
}

export function DesmosBlackBoxDots() {
  const theme = useResolvedTheme()
  const src = `https://www.desmos.com/calculator/skse7h4czz?embed`
  return (
    <iframe
      key={theme}
      src={src}
      style={{
        width: "100%", height: 500, border: 0,
        filter: theme === "dark" ? "invert(1)" : "none",
      }}
    />
  )
}

export function DesmosBlackBoxApproximation() {
  const theme = useResolvedTheme()
  const src = `https://www.desmos.com/calculator/ikwig7oc0b?embed`
  return (
    <iframe
      key={theme}
      src={src}
      style={{
        width: "100%", height: 500, border: 0,
        filter: theme === "dark" ? "invert(1)" : "none",
      }}
    />
  )
}

export function Desmos({
  id,
  height = 500,
  interactive = true,
  width = "content",
}: {
  id: string
  height?: number
  interactive?: boolean
  width?: "content" | "wide" | "bleed"
}) {
  const theme = useResolvedTheme()
  const src = `https://www.desmos.com/calculator/${id}${interactive ? "" : "?embed"}`
  return (
    <iframe
      className={width === "content" ? undefined : width}
      src={src}
      style={{
        width: "100%",
        height,
        border: 0,
        filter: theme === "dark" ? "invert(1) hue-rotate(180deg)" : "none",
      }}
    />
  )
}

export function WhiteOrBlack({ cap }: { cap?: boolean }) {
  const theme = useResolvedTheme()
  return (
    <span style={{ textTransform: cap ? "capitalize" : undefined }}>
      {
        theme == "dark" ? "white" : "black"
      }
    </span>
  )
}