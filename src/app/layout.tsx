import type { Metadata } from "next"

import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "Lab — writing, tools, and ideas by cxrtisxl",
    template: "%s — lab",
  },
  description:
    "A space for writing, tools, and ideas in progress.",
  authors: [{ name: "cxrtisxl", url: "https://cxrtisxl.com" }],
  creator: "cxrtisxl",
  openGraph: {
    type: "website",
    title: "Lab",
    description: "Writing, tools, and ideas in progress.",
    siteName: "lab",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@cxrtisxl",
    title: "Lab",
    description: "Writing, tools, and ideas in progress.",
  },
  icons: {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='.9em' font-size='90'%3E%F0%9F%A7%AA%3C/text%3E%3C/svg%3E",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-foreground flex flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  )
}
