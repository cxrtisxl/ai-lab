import { Link } from "react-router-dom"
import { ArrowUpRight } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { experiments } from "@/experiments"

export function HomePage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
      <section className="max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-medium tracking-tight">
          AI Lab by <a href="https://x.com/cxrtisxl" target="_blank" style={{ color: "blue" }}>@cxrtisxl</a>
        </h1>
        <p className="mt-4 text-muted-foreground text-base md:text-lg">
          A collection of experiments and interactive tools.<br />
          Each one is a self-contained idea — click through to try it.
        </p>
      </section>

      <section className="mt-12 md:mt-16">
        <div className="flex items-baseline justify-between mb-4">
          <h2 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Experiments
          </h2>
          <span className="text-xs text-muted-foreground">
            {experiments.length} total
          </span>
        </div>

        <ul className="divide-y border-y">
          {experiments.map((e) => (
            <li key={e.slug}>
              <Link
                to={`/experiments/${e.slug}`}
                className="group flex items-center gap-4 py-5 transition-colors hover:bg-accent/40 px-2 -mx-2 rounded-md"
              >
                <span className="text-2xl shrink-0 w-10 text-center">
                  {e.emoji}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-medium truncate">{e.title}</span>
                    {e.status === "draft" && (
                      <Badge variant="secondary" className="text-[10px]">
                        draft
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground truncate">
                    {e.description}
                  </p>
                </div>
                <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
