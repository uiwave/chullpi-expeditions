import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dynamic-media-cdn.tripadvisor.com",
        pathname: "/media/**",
      },
      {
        protocol: "https",
        hostname: "static.tacdn.com",
        pathname: "/img2/**",
      },
    ],
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
