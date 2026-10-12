import PageHero from "@/components/uiwave/PageHero";
import ToursGrid from "@/components/sections/tours/ToursGrid";
import { getTours, isLocale } from "@/i18n/tours";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import type { Metadata } from "next";
import {
  filterTours,
  getTotalPages,
  parsePage,
  TOURS_PER_PAGE,
} from "@/lib/tour-filters";
import ToursSidebar from "@/components/sections/tours/ToursSidebar";
import ToursHeaderWrapper from "@/components/sections/tours/ToursHeaderWrapper";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    return {};
  }
  const t = await getTranslations({ locale, namespace: "meta" });
  return { title: t("tours"), description: t("description") };
}

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
  const tCommon = await getTranslations("common");

  if (!isLocale(localeValue)) {
    notFound();
  }

  const tours = await getTours(localeValue);
  const filtered = filterTours(tours, { destino, tipo, duracion, precio, q });

  const typeCounts: Record<string, number> = {};
  for (const tour of tours) {
    typeCounts[tour.typeKey] = (typeCounts[tour.typeKey] ?? 0) + 1;
  }

  const totalPages = getTotalPages(filtered.length);
  const parsedPage = parsePage(pageParam);
  const page = Math.min(Math.max(parsedPage ?? 1, 1), totalPages);

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
      <section className="relative w-full pt-16 pb-12 lg:pt-30 lg:pb-20">
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
                emptyLabel={tCommon("noResults")}
              />
            </main>
            <ToursSidebar typeCounts={typeCounts} />
          </div>
        </div>
      </section>
    </>
  );
}
