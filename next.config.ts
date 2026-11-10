import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // A stray package-lock.json higher up the disk makes Next guess the wrong
  // workspace root, so both roots are pinned to this repository.
  turbopack: {
    root: __dirname,
  },
  outputFileTracingRoot: __dirname,
  images: {
    // 90 is used for the award letter excerpts, which are small text.
    qualities: [75, 90],
  },
};

export default nextConfig;
