import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    sitemap: "https://chullpiexpeditions.com/sitemap.xml",
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  };
}
