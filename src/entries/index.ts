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
  /**
   * Free-form tags shown on the home list. Use the "article" tag to render
   * the entry inside the prose-styled article layout; anything else renders
   * full-bleed inside a bordered card.
   */
  tags?: string[]
  /** Optional: shows an "Open in new tab" button in the entry header. */
  externalUrl?: string
  Component: ComponentType
}

// To add a new entry:
//   1. Create `src/entries/<your-slug>.tsx` (or `.mdx` for an article).
//   2. Import it here and add an entry to the array below.
//
// Articles: add the "article" tag — switches the page to prose layout and
// lets the MDX flow naturally with inline iframes, components, etc.
// Anything else (tools, experiments, demos) renders full-bleed.

const allEntries: Entry[] = [
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
  {
    slug: "see-the-future",
    title: "See The Future - a SaaS simulation",
    description:
      "See the future of SaaS in multiverse!",
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

// Drafts are only visible in dev (`npm run dev`). In production builds
// (`npm run build`) they're filtered out everywhere — list, static params,
// and route handlers.
export const entries: Entry[] =
  process.env.NODE_ENV === "production"
    ? allEntries.filter((e) => e.status !== "draft")
    : allEntries

export function findEntry(slug: string | undefined) {
  return entries.find((e) => e.slug === slug)
}
