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

interface Props {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{
    destino?: string;
    tipo?: string;
    duracion?: string;
    precio?: string;
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
    page: pageParam,
  } = await searchParams;
  const t = await getTranslations("tours");

  if (!isLocale(localeValue)) {
    notFound();
  }

  const tours = await getTours(localeValue);
  const filtered = filterTours(tours, { destino, tipo, duracion, precio });

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

  return (
    <>
      <PageHero title={t("hero.title")} image="/images/puno.webp" />
      <FilterSection />
      <ToursGrid
        tours={pageTours}
        page={page}
        totalPages={totalPages}
        total={filtered.length}
        query={query}
      />
    </>
  );
}
