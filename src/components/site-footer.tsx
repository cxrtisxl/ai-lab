export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-5xl px-6 h-12 flex items-center justify-between text-xs text-muted-foreground">
        <span>by cxrtisxl</span>
        <span>{new Date().getFullYear()}</span>
      </div>
    </footer>
  )
}
