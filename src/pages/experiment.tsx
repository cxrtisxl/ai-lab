import { Link, useParams } from "react-router-dom"
import { ArrowLeft, ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"
import { findExperiment } from "@/experiments"

export function ExperimentPage() {
  const { slug } = useParams<{ slug: string }>()
  const experiment = findExperiment(slug)

  if (!experiment) {
    return (
      <div className="mx-auto max-w-5xl px-6 py-24 text-center">
        <p className="text-2xl">🤷</p>
        <h1 className="mt-4 text-2xl font-medium">Experiment not found</h1>
        <p className="mt-2 text-muted-foreground">
          The thing you're looking for isn't here.
        </p>
        <Button asChild variant="outline" className="mt-6">
          <Link to="/">
            <ArrowLeft />
            Back to lab
          </Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-5xl px-6 py-6 flex flex-col gap-4 h-[calc(100vh-7rem)]">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 min-w-0">
          <Button asChild variant="ghost" size="sm" className="shrink-0">
            <Link to="/">
              <ArrowLeft />
              <span className="hidden sm:inline">Back</span>
            </Link>
          </Button>
          <div className="flex items-center gap-2 min-w-0">
            <span className="text-xl shrink-0">{experiment.emoji}</span>
            <h1 className="font-medium truncate">{experiment.title}</h1>
          </div>
        </div>
        {experiment.externalUrl && (
          <Button asChild variant="outline" size="sm">
            <a href={experiment.externalUrl} target="_blank" rel="noreferrer">
              <span className="hidden sm:inline">Open</span>
              <ExternalLink />
            </a>
          </Button>
        )}
      </div>

      <div className="flex-1 min-h-[400px] rounded-xl border bg-card overflow-hidden">
        <experiment.Component />
      </div>
    </div>
  )
}
