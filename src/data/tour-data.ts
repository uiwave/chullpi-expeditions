export interface TourData {
  title: string;
  description: string;
  shortItinerary: string[];
  itinerary: { day: number; title: string; description: string }[];
  includes: string[];
  notIncludes: string[];
  recommendations: string[];
}

const tourDataCache: Record<string, TourData> = {};

export async function getTourData(slug: string, locale: string): Promise<TourData | null> {
  const cacheKey = `${locale}/${slug}`;

  if (tourDataCache[cacheKey]) {
    return tourDataCache[cacheKey];
  }

  try {
    const fileName = slug.replace(/\//g, "-");
    const data = await import(`../../messages/tours/${locale}/${fileName}.json`);
    tourDataCache[cacheKey] = data.default;
    return data.default;
  } catch {
    return null;
  }
}
