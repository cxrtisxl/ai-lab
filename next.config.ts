import type { NextConfig } from "next"
import createMDX from "@next/mdx"

const nextConfig: NextConfig = {
  reactStrictMode: true,
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  async rewrites() {
    // Serve Umami analytics first-party through our own origin for
    // reliability and same-origin requests. `beforeFiles` so these
    // resolve ahead of the /[slug] route.
    return {
      beforeFiles: [
        {
          source: "/io/script.js",
          destination: "https://cloud.umami.is/script.js",
        },
        {
          source: "/io/api/send",
          destination: "https://cloud.umami.is/api/send",
        },
      ],
    }
  },
}

const withMDX = createMDX({})

export default withMDX(nextConfig)
