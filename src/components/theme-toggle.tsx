"use client"

import { useEffect, useState } from "react"
import { Lock, Monitor, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { useThemeLock } from "@/components/theme-lock"

const ORDER = ["light", "dark", "system"] as const

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const { locked } = useThemeLock()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  if (locked) {
    return (
      <Button
        variant="ghost"
        size="icon"
        disabled
        aria-label="Theme is locked for this page"
        title="Theme is locked for this page"
        className="h-8 w-8 text-muted-foreground"
      >
        <Lock className="size-4" />
      </Button>
    )
  }

  // `theme` is undefined until mounted (next-themes avoids hydration
  // mismatch). Render a stable icon until then, then the real selection.
  const current = mounted ? theme : undefined
  const next = ORDER[(ORDER.indexOf(current as never) + 1) % ORDER.length]
  const Icon = current === "light" ? Sun : current === "dark" ? Moon : Monitor

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(next)}
      aria-label={`Switch theme — current: ${current ?? "system"}`}
      title={`Theme: ${current ?? "system"}`}
      className="h-8 w-8 text-muted-foreground hover:text-foreground"
    >
      <Icon className="size-4" />
    </Button>
  )
}
