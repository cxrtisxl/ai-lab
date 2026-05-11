export function Placeholder() {
  return (
    <div className="h-full flex flex-col items-center justify-center text-center px-6 gap-2">
      <span className="text-4xl">🧪</span>
      <p className="text-sm text-muted-foreground max-w-md">
        Nothing here yet. Create a component in{" "}
        <code className="text-foreground">src/entries/</code> and register it
        in <code className="text-foreground">src/entries/index.ts</code>.
      </p>
    </div>
  )
}
