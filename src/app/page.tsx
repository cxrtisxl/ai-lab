import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { entries } from "@/entries"

export default function HomePage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
      <section className="max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-medium tracking-tight">
          Lab by{" "}
          <a
            href="https://x.com/cxrtisxl"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 hover:underline"
          >
            @cxrtisxl
          </a>
        </h1>
        <p className="mt-4 text-muted-foreground text-base md:text-lg">
          A space for writing, tools, and ideas in progress.
          <br />
          Each one is a self-contained piece — click through to read or play.
        </p>
      </section>

      <section className="mt-12 md:mt-16">
        <div className="flex items-baseline justify-between mb-4">
          <h2 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Feed
          </h2>
          <span className="text-xs text-muted-foreground">
            {entries.length} total
          </span>
        </div>

        <ul className="divide-y border-y">
          {entries.map((e) => (
            <li key={e.slug}>
              <Link
                href={`/${e.slug}`}
                className="group flex items-center gap-4 py-5 transition-colors hover:bg-accent/40 px-2 -mx-2 rounded-md"
              >
                <span className="text-2xl shrink-0 w-10 text-center">
                  {e.emoji}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                    <span className="font-medium truncate">{e.title}</span>
                    {e.tags?.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="text-[10px] font-normal text-muted-foreground"
                      >
                        {tag}
                      </Badge>
                    ))}
                    {e.status === "draft" && (
                      <Badge variant="secondary" className="text-[10px]">
                        draft
                      </Badge>
                    )}
                  </div>
                  <p className="mt-0.5 text-sm text-muted-foreground truncate">
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
