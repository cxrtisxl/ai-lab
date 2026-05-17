"use client"
import { useResolvedTheme } from "@/lib/use-resolved-theme"
import { DesmosFinal } from "./desmos"

const GRAPH_ID = "r5kc6rnqzd"

export function InsideTheBlackBox() {
  const theme = useResolvedTheme()
  const src = `https://www.desmos.com/calculator/${GRAPH_ID}${theme === "dark" ? "?invertedColors=true" : ""
    }`
  return (
    <div className="wide">
      <DesmosFinal />
    </div>
  )
}