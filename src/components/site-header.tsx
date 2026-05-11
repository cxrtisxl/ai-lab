import Link from "next/link"

export function SiteHeader() {
  return (
    <header className="border-b">
      <div className="mx-auto max-w-5xl px-6 h-14 flex items-center justify-between">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 font-medium tracking-tight"
        >
          <span className="text-xl leading-none">🧪</span>
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
            lab
          </Link>
        </nav>
        <nav className="text-sm text-muted-foreground">
          <a
            href="https://github.com/cxrtisxl/ai-lab"
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground transition-colors"
          >
            github
          </a>
        </nav>
      </div>
    </header>
  )
}
