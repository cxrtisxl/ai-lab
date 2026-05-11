import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-24 text-center">
      <p className="text-2xl">🤷</p>
      <h1 className="mt-4 text-2xl font-medium">Not found</h1>
      <p className="mt-2 text-muted-foreground">
        The thing you&apos;re looking for isn&apos;t here.
      </p>
      <Button asChild variant="outline" className="mt-6">
        <Link href="/">
          <ArrowLeft />
          Back to lab
        </Link>
      </Button>
    </div>
  )
}
