import type { ComponentType } from "react"

import { PlaceholderExperiment } from "./placeholder"
import { IframeExperiment } from "./iframe-experiment"

export type Experiment = {
  slug: string
  title: string
  description: string
  emoji: string
  status?: "live" | "draft"
  /** Optional: shows an "Open in new tab" button in the experiment header. */
  externalUrl?: string
  Component: ComponentType
}

// To add a new experiment:
//   1. Create `src/experiments/<your-slug>.tsx` exporting a component.
//   2. Import it here and add an entry to the array below.
//
// For iframe-based experiments, use the IframeExperiment helper:
//   import { IframeExperiment } from "./iframe-experiment"
//   { ..., Component: () => <IframeExperiment src="https://..." title="..." /> }

const allExperiments: Experiment[] = [
  {
    slug: "inside-the-blackbox",
    title: "Inside The Blackbox",
    description: "A minimalistic neural networks visualised in Desmos. Dive into how a neural network approximates the funtion and play with it.",
    emoji: "📈",
    status: "live",
    Component: IframeExperiment,
  },
  {
    slug: "placeholder",
    title: "Placeholder Experiment",
    description:
      "Template entry. Replace it with a real experiment component.",
    emoji: "🧪",
    status: "draft",
    Component: PlaceholderExperiment,
  },
]

// Drafts are only visible in dev (`npm run dev`). In production builds
// (`npm run build`) they're filtered out everywhere — list and routes.
export const experiments: Experiment[] = import.meta.env.DEV
  ? allExperiments
  : allExperiments.filter((e) => e.status !== "draft")

export function findExperiment(slug: string | undefined) {
  return experiments.find((e) => e.slug === slug)
}
