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
          for analytics, configured to collect as little as possible.
        </p>
        <ul>
          <li>No cookies, no local storage, no fingerprinting.</li>
          <li>
            No personal data is stored. Your IP address is used only
            momentarily to infer an approximate location and a rotating
            anonymous visitor hash, then discarded — it is never saved.
          </li>
          <li>
            Only aggregate, anonymous metrics: page views, referrers, rough
            location, and browser or device type.
          </li>
          <li>No ads, no cross-site tracking, no selling or sharing of data.</li>
          <li>
            Analytics are served first-party through this domain and processed
            by Umami Cloud on my behalf.
          </li>
          <li>
            <strong>Do Not Track is respected.</strong> If your browser sends a
            Do Not Track signal, nothing about your visit is collected at all.
          </li>
        </ul>
        <p>
          That covers it. Questions? Reach me at{" "}
          <a href="https://x.com/cxrtisxl" target="_blank" rel="noreferrer">
            @cxrtisxl
          </a>
          .
        </p>
      </div>
    </div>
  )
}
