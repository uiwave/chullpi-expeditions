import type { MetadataRoute } from "next";
import { getTourSlugs } from "@/i18n/tours";
import { routing } from "@/i18n/routing";

const BASE_URL = "https://chullpiexpeditions.com";

const STATIC_PATHS = ["/", "/about", "/contact", "/tours", "/airbnb"];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const slugs = await getTourSlugs();

  const languages = Object.fromEntries(
    routing.locales.map((locale) => [locale, `${BASE_URL}/${locale}`]),
  );

  const staticEntries: MetadataRoute.Sitemap = STATIC_PATHS.map((path) => ({
    url: `${BASE_URL}${path === "/" ? "" : path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "/" ? 1 : 0.8,
    alternates: {
      languages,
    },
  }));

  const tourEntries: MetadataRoute.Sitemap = slugs.map((slug) => ({
    url: `${BASE_URL}/tours/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((locale) => [
          locale,
          `${BASE_URL}/${locale}/tours/${slug}`,
        ]),
      ),
    },
  }));

  return [...staticEntries, ...tourEntries];
}
