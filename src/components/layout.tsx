import { Link, Outlet } from "react-router-dom"

export function Layout() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
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
              to="/"
              className="text-foreground hover:text-muted-foreground transition-colors"
            >
              ai<span className="text-muted-foreground">.lab</span>
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

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t">
        <div className="mx-auto max-w-5xl px-6 h-12 flex items-center justify-between text-xs text-muted-foreground">
          <span>experiments &amp; interactive tools</span>
          <span>{new Date().getFullYear()}</span>
        </div>
      </footer>
    </div>
  )
}
