export function Placeholder() {
  return (
    <div className="py-12 text-center flex flex-col items-center gap-2 not-prose">
      <span className="text-4xl">🧪</span>
      <p className="text-sm text-muted-foreground max-w-md">
        Nothing here yet. Create a component in{" "}
        <code className="text-foreground">src/entries/</code> and register it
        in <code className="text-foreground">src/entries/index.ts</code>.
      </p>
    </div>
  )
}
