import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "ristretto-dev-products-img.s3.ap-southeast-2.amazonaws.com",
      "picsum.photos",
      "images.unsplash.com",
      "img.com",
    ],
  },
};

export default nextConfig;
