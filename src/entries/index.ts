import type { ComponentType } from "react"

import { InsideTheBlackBox } from "./inside-the-black-box"
import { Placeholder } from "./placeholder"
import TheBlackBoxExplained from "./the-black-box-explained.mdx"
import { SeeTheFuture } from "./see-the-future"

export type Entry = {
  slug: string
  title: string
  description: string
  emoji: string
  status?: "live" | "draft"
  /** Free-form tags shown on the home list and the entry page header. */
  tags?: string[]
  /** Optional: shows an "Open in new tab" button in the entry header. */
  externalUrl?: string
  Component: ComponentType
}

/**
 * A labelled cluster of related entries — shown together on the home feed
 * under a shared title. The entries inside still have their own routes;
 * grouping is purely a feed presentation thing.
 */
export type EntryGroup = {
  title: string
  entries: Entry[]
}

export type FeedItem = Entry | EntryGroup

export function isGroup(item: FeedItem): item is EntryGroup {
  return "entries" in item
}

// To add a new entry:
//   1. Create `src/entries/<your-slug>.tsx` (or `.mdx` for an article).
//   2. Import it here and add it (or a group containing it) to `allFeed`.
//
// Every entry renders inside a narrow prose-wrapped page. Embed iframes,
// tools, or custom React inline — wrap them with explanatory text so the
// reader knows what they're looking at.
//
// Groups: wrap related entries in `{ title, entries: [...] }`. They share
// a header in the feed but keep their own routes and metadata.

const allFeed: FeedItem[] = [
  {
    title: "The Black Box",
    entries: [
      {
        slug: "the-black-box-explained",
        title: "The Black Box, Explained",
        description:
          "A short walkthrough of how a neural network shapes itself into a function approximator. With a live model embedded in the middle.",
        emoji: "📝",
        status: "live",
        tags: ["article"],
        Component: TheBlackBoxExplained,
      },
      {
        slug: "inside-the-black-box",
        title: "Inside The Black Box",
        description:
          "A minimalistic neural network visualised in Desmos. Dive into how a neural network approximates a function and play with it.",
        emoji: "📈",
        status: "live",
        tags: ["experiment"],
        Component: InsideTheBlackBox,
      },
    ],
  },
  {
    slug: "see-the-future",
    title: "See The Future - a SaaS simulation",
    description: "See the future of SaaS in multiverse!",
    emoji: "📝",
    status: "live",
    tags: ["tool"],
    Component: SeeTheFuture,
  },
  {
    slug: "placeholder",
    title: "Placeholder",
    description: "Template entry. Replace it with real content.",
    emoji: "🧪",
    status: "draft",
    Component: Placeholder,
  },
]

// Drafts are only visible in dev. In production builds they're filtered
// out everywhere — list, static params, and route handlers. Groups whose
// entries all become drafts collapse and drop out of the feed.
function filterDrafts(items: FeedItem[]): FeedItem[] {
  return items.flatMap<FeedItem>((item) => {
    if (isGroup(item)) {
      const liveEntries = item.entries.filter((e) => e.status !== "draft")
      return liveEntries.length > 0
        ? [{ ...item, entries: liveEntries }]
        : []
    }
    return item.status !== "draft" ? [item] : []
  })
}

export const feed: FeedItem[] =
  process.env.NODE_ENV === "production" ? filterDrafts(allFeed) : allFeed

export const entries: Entry[] = feed.flatMap((item) =>
  isGroup(item) ? item.entries : [item]
)

export function findEntry(slug: string | undefined) {
  return entries.find((e) => e.slug === slug)
}
