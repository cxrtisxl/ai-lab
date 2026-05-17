import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ExternalLink } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { LockUserTheme } from "@/components/theme-lock"
import { entries, findEntry } from "@/entries"

type Props = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return entries.map((e) => ({ slug: e.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const entry = findEntry(slug)
  if (!entry) return {}
  return {
    title: entry.title,
    description: entry.description,
    openGraph: {
      title: entry.title,
      description: entry.description,
    },
  }
}

export default async function EntryPage({ params }: Props) {
  const { slug } = await params
  const entry = findEntry(slug)

  if (!entry) {
    notFound()
  }

  // Scope the entry's color overrides to <body> so the whole chrome
  // (header, footer, prose, borders) recolors via the existing
  // `hsl(var(--token))` cascade. Unmounts on client nav, so it self-cleans.
  const themeVars = entry.theme
    ? Object.entries(entry.theme)
        .map(
          ([key, value]) =>
            `--${key.replace(/[A-Z]/g, (c) => `-${c.toLowerCase()}`)}:${value}`
        )
        .join(";")
    : null

  const header = (
    <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
      <div className="flex items-center gap-3 min-w-0">
        <Button asChild variant="ghost" size="sm" className="shrink-0">
          <Link href="/">
            <ArrowLeft />
            <span className="hidden sm:inline">Back</span>
          </Link>
        </Button>
        <div className="flex items-center gap-2 min-w-0">
          <span className="text-xl shrink-0">{entry.emoji}</span>
          <h1 className="font-medium truncate">{entry.title}</h1>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-2 ml-auto">
        {entry.tags?.map((tag) => (
          <Badge
            key={tag}
            variant="outline"
            className="text-[10px] font-normal text-muted-foreground"
          >
            {tag}
          </Badge>
        ))}
        {entry.externalUrl && (
          <Button asChild variant="outline" size="sm">
            <a href={entry.externalUrl} target="_blank" rel="noreferrer">
              <span className="hidden sm:inline">Open</span>
              <ExternalLink />
            </a>
          </Button>
        )}
      </div>
    </div>
  )

  return (
    <>
      {themeVars && <style>{`body{${themeVars}}`}</style>}
      {entry.lockUserTheme && <LockUserTheme />}
      <div className="py-6 flex flex-col gap-8">
        <div className="article-grid">
          <div>{header}</div>
        </div>
        <article className="article-grid prose pb-16">
          <entry.Component />
        </article>
      </div>
    </>
  )
}
