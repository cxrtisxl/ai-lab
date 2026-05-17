import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-5xl px-6 h-12 flex items-center justify-between text-xs text-muted-foreground">
        <span>by cxrtisxl</span>
        <div className="flex items-center gap-4">
          <Link
            href="/privacy"
            className="hover:text-foreground transition-colors"
          >
            privacy
          </Link>
          <span>{new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  )
}
