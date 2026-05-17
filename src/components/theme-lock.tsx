"use client"

import { createContext, useContext, useEffect, useState } from "react"
import type { ReactNode } from "react"

const ThemeLockContext = createContext<{
  locked: boolean
  setLocked: (locked: boolean) => void
}>({ locked: false, setLocked: () => {} })

export function ThemeLockProvider({ children }: { children: ReactNode }) {
  const [locked, setLocked] = useState(false)
  return (
    <ThemeLockContext.Provider value={{ locked, setLocked }}>
      {children}
    </ThemeLockContext.Provider>
  )
}

export function useThemeLock() {
  return useContext(ThemeLockContext)
}

/** Locks the site theme toggle for as long as this entry's page is mounted. */
export function LockUserTheme() {
  const { setLocked } = useThemeLock()
  useEffect(() => {
    setLocked(true)
    return () => setLocked(false)
  }, [setLocked])
  return null
}
