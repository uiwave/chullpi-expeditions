import PageHero from "@/components/uiwave/PageHero";
import type { Metadata } from "next";
import ToursGrid from "@/components/sections/tours/ToursGrid";
import { getTours, isLocale } from "@/i18n/tours";
import { notFound } from "next/navigation";
import { FilterSection } from "@/components/sections/tours/FilterSection";
import { getTranslations } from "next-intl/server";
import {
  filterTours,
  getTotalPages,
  parsePage,
  TOURS_PER_PAGE,
} from "@/lib/tour-filters";
import ToursSidebar from "@/components/sections/tours/ToursSidebar";
import ToursHeaderWrapper from "@/components/sections/tours/ToursHeaderWrapper";

const MOCK_CATEGORIES = [
  { id: "1", name: "City Tour", slug: "city-tour", count: 8 },
  { id: "2", name: "Beach Tours", slug: "beach-tours", count: 6 },
  { id: "3", name: "Wildlife Tours", slug: "wildlife-tours", count: 2 },
  { id: "4", name: "News & Tips", slug: "news-tips", count: 7 },
  { id: "5", name: "Adventure Tours", slug: "adventure-tours", count: 9 },
  { id: "6", name: "Mountain Tours", slug: "mountain-tours", count: 10 },
];

// Datos de ejemplo para Posts Recientes
const MOCK_POSTS = [
  {
    id: "1",
    title: "Top 10 Places to Visit in Peru",
    slug: "top-10-places-peru",
    date: "Oct 12, 2026",
    image: "hero/hero_bg_1_1.jpg",
  },
  {
    id: "2",
    title: "Ultimate Guide for Machu Picchu",
    slug: "guide-machu-picchu",
    date: "Oct 10, 2026",
    image: "hero/hero_bg_1_1.jpg",
  },
];

interface Props {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{
    destino?: string;
    tipo?: string;
    duracion?: string;
    precio?: string;
    q?: string;
    page?: string;
  }>;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "tours.metadata" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function ToursPage({ params, searchParams }: Props) {
  const { locale: localeValue } = await params;
  const {
    destino,
    tipo,
    duracion,
    precio,
    q,
    page: pageParam,
  } = await searchParams;
  const t = await getTranslations("tours");

  if (!isLocale(localeValue)) {
    notFound();
  }

  const tours = await getTours(localeValue);
  const filtered = filterTours(tours, { destino, tipo, duracion, precio, q });

  const totalPages = getTotalPages(filtered.length);
  const page = parsePage(pageParam);

  if (page === null || page > totalPages) {
    notFound();
  }

  const start = (page - 1) * TOURS_PER_PAGE;
  const pageTours = filtered.slice(start, start + TOURS_PER_PAGE);

  const query: Record<string, string> = {};
  if (destino) query.destino = destino;
  if (tipo) query.tipo = tipo;
  if (duracion) query.duracion = duracion;
  if (precio) query.precio = precio;
  if (q) query.q = q;

  return (
    <>
      <PageHero title={t("hero.title")} />
      <section className="relative w-full py-12 lg:py-16">
        <div className="uw-container">
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 xl:gap-10">
            <main className="flex flex-col gap-8 lg:col-span-8 xl:col-span-9">
              <ToursHeaderWrapper />
              <ToursGrid
                tours={pageTours}
                page={page}
                totalPages={totalPages}
                total={filtered.length}
                query={query}
              />
            </main>
            <ToursSidebar
              categories={MOCK_CATEGORIES}
              recentPosts={MOCK_POSTS}
            />
          </div>
        </div>
      </section>
      <FilterSection />
    </>
  );
}
