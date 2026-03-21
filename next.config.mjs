/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  /** Helps `next build` on low-RAM hosts (e.g. shared cPanel). */
  experimental: {
    webpackMemoryOptimizations: true,
    /** Less peak RAM during build (slower). */
    parallelServerCompiles: false,
    parallelServerBuildTraces: false,
    staticGenerationMaxConcurrency: 1,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
