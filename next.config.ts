import type { NextConfig } from "next";

// NEXT_PUBLIC_BASE_PATH: set to /Cortado-public for GitHub Pages (no trailing slash)
// NEXT_EXPORT: set to "true" for static export (GitHub Pages)
// Docker/server builds: leave both unset
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const isStaticExport = process.env.NEXT_EXPORT === "true";

const nextConfig: NextConfig = {
  ...(isStaticExport && { output: "export" }),
  basePath,
  assetPrefix: basePath || undefined,
  images: {
    unoptimized: isStaticExport,
    domains: [
      "ristretto-dev-products-img.s3.ap-southeast-2.amazonaws.com",
      "picsum.photos",
      "images.unsplash.com",
      "img.com",
    ],
  },
};

export default nextConfig;
