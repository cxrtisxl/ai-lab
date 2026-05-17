import type { Metadata } from "next"

import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeLockProvider } from "@/components/theme-lock"
import Script from "next/script"

import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "Lab — writing, tools, and ideas by cxrtisxl",
    template: "%s — The Lab",
  },
  description:
    "A space for writing, tools, and ideas in progress.",
  authors: [{ name: "Ian Sosunov (cxrtisxl)", url: "https://cxrtisxl.com" }],
  creator: "Ian Sosunov (cxrtisxl)",
  openGraph: {
    type: "website",
    title: "The Lab",
    description: "Writing, tools, and ideas in progress.",
    siteName: "lab",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@cxrtisxl",
    title: "The Lab",
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
    <html lang="en" suppressHydrationWarning>
      <body
        className="min-h-screen bg-background text-foreground flex flex-col"
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ThemeLockProvider>
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </ThemeLockProvider>
        </ThemeProvider>
        <Script
          src="https://cloud.umami.is/script.js"
          data-website-id="fdd7fdc5-5ddc-4b35-9732-178e3c237c58"
          data-domains="lab.cxrtisxl.com"
          data-do-not-track="true"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
