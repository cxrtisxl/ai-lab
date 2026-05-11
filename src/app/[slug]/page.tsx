import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ExternalLink } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
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

  const isArticle = entry.tags?.includes("article")

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

  if (isArticle) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-6 flex flex-col gap-8">
        {header}
        <article className="prose pb-16">
          <entry.Component />
        </article>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-5xl px-6 py-6 flex flex-col gap-4 h-[calc(100vh-7rem)]">
      {header}
      <div className="flex-1 min-h-[400px] rounded-xl border bg-card overflow-hidden">
        <entry.Component />
      </div>
    </div>
  )
}
