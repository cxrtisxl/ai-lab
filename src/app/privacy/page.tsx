import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Privacy",
  description: "What this site collects — and what it does not.",
}

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <Button asChild variant="ghost" size="sm" className="mb-8 -ml-2">
        <Link href="/">
          <ArrowLeft />
          Back
        </Link>
      </Button>
      <div className="prose">
        <h1>Privacy</h1>
        <p>
          This site uses{" "}
          <a href="https://umami.is" target="_blank" rel="noreferrer">
            Umami
          </a>{" "}
          (hosted on Umami Cloud), a privacy-preserving, cookieless
          analytics tool, to collect anonymous, aggregate usage statistics
          such as page views, referrers, approximate location, and browser
          type. No cookies are set and no personally identifying information
          is collected, sold, or shared. Umami is designed to be
          GDPR-compliant.
        </p>
        <p>
          The analytics script loads directly from Umami. Any tracker
          blocker, privacy browser, or Do Not Track signal stops it, and the
          visit is not counted. No attempt is made to bypass blockers.
        </p>
        <p>
          Questions? Reach me at{" "}
          <a href="https://x.com/cxrtisxl" target="_blank" rel="noreferrer">
            @cxrtisxl
          </a>
          .
        </p>
      </div>
    </div>
  )
}
