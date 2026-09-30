import { Tour } from "@/types/Tour";
import { routing } from "./routing";

export type Locale = (typeof routing.locales)[number];

const TOUR_SLUGS = [
  "tour-a-machu-picchu",
  "montana-de-colores",
  "laguna-humantay",
  "city-tour-cusco",
  "tour-en-pisac",
  "valle-sagrado-vip-2",
  "tour-7-lagunas-del-ausangate",
  "tour-a-la-morada-de-los-dioses",
  "tour-valle-sur-tipon",
  "trekking-montana-arcoiris-palcoyo",
  "tour-a-moray-y-las-salineras-de-maras",
  "tour-al-puente-inca-qeswachaka",
  "tour-a-waqrapukara",
  "ascenso-volcan-misti-ruta-norte",
  "ascenso-al-volcan-chachani",
  "tour-catarata-de-pillones-y-bosque-de-piedras",
  "tours-salinas-y-ruta-del-sillar-culebrillas",
  "tour-al-santuario-nacional-lagunas-de-mejia",
  "tour-petroglifos-de-toro-muerto-y-querullpa",
  "cuevas-de-arte-rupestre-en-sumbay",
  "tour-por-el-valle-de-los-volcanes",
  "canon-del-colca-y-aguas-termales-de-la-calera",
  "tour-canon-del-colca",
  "city-tour-arequipa-monasterio-santa-catalina-miradores",
  "museo-maria-reiche-y-mirador-lineas-de-nazca",
  "tour-cementerio-de-chauchilla",
  "centro-ceremonial-cahuachi",
  "tour-huaytara",
  "tour-a-tambo-colorado",
  "tour-lineas-de-palpa",
  "tour-por-la-reserva-nacional-de-paracas",
  "tour-en-bote-a-islas-ballestas-y-candelabro",
  "tour-huacachina-buggy-sandboarding",
  "aventura-en-ica-y-nazca-huacachina-vinos-y-sobrevuelo-desde-lima",
  "ruta-del-sol-de-cusco-a-puno",
  "tour-a-lampa-pucara-y-tinajani",
  "paquete-turistico-puno-uros-taquile-suasi",
  "tour-isla-de-los-uros-llachon-capachica-puno",
  "tour-aramu-muru-hayu-marca",
  "chullpas-de-sillustani",
  "isla-uros-taquile-amantani",
  "tour-islas-flotantes-de-los-uros",
] as const;

export type TourSlug = (typeof TOUR_SLUGS)[number];

export function isLocale(value: string | undefined): value is Locale {
  return routing.locales.includes(value as Locale);
}

export async function getTours(locale: Locale): Promise<Tour[]> {
  const tours: Tour[] = [];

  for (const slug of TOUR_SLUGS) {
    const tour = await getTourBySlug(slug, locale);
    if (tour) {
      tours.push(tour);
    }
  }

  return tours;
}

export async function getTourBySlug(
  slug: string,
  locale: Locale,
): Promise<Tour | undefined> {
  try {
    const tour = (await import(`../../messages/tours/${slug}/${locale}.json`))
      .default as Tour;
    return tour;
  } catch {
    return undefined;
  }
}

export async function getTourSlugs(): Promise<string[]> {
  return [...TOUR_SLUGS];
}
