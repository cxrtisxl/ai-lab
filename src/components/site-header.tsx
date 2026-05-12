import Link from "next/link"

import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
  return (
    <header className="border-b">
      <div className="mx-auto max-w-5xl px-6 h-14 flex items-center justify-between">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 font-medium tracking-tight"
        >
          <a
            href="https://cxrtisxl.com"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            cxrtisxl
          </a>
          <span className="text-muted-foreground/60" aria-hidden="true">
            /
          </span>
          <Link
            href="/"
            className="text-foreground hover:text-muted-foreground transition-colors"
          >
            The Lab
          </Link>
        </nav>
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <a
            href="https://github.com/cxrtisxl/lab"
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground transition-colors"
          >
            github
          </a>
          <ThemeToggle />
          <a
            href="https://x.com/cxrtisxl"
            target="_blank"
            className="inline-flex items-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-blue-500 transition-colors"
          >
            Follow on X
          </a>
        </div>
      </div>
    </header>
  )
}
