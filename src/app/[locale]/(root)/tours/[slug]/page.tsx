import Image from "next/image";
import PageHero from "@/components/uiwave/PageHero";
import { notFound } from "next/navigation";
import { Clock } from "lucide-react";
import { getTranslations } from "next-intl/server";
import ItineraryTabs from "@/components/sections/tours/ItineraryTabs";
import ItineraryDay from "@/components/sections/tours/ItineraryDay";
import ItineraryBlocks from "@/components/sections/tours/ItineraryBlocks";
import AdditionalList from "@/components/sections/tours/AdditionalList";
import BookingSidebar from "@/components/sections/tours/BookingSidebar";
import SimilarTours from "@/components/sections/tours/SimilarTours";
import {
  hasAdditionalsContent,
  hasContent,
  hasItineraryContent,
  toListBlocks,
  toParagraphBlocks,
} from "@/lib/tour-content";
import { cn } from "cn";
import {
  getTourBySlug,
  getTours,
  getTourSlugs,
  isLocale,
  type Locale,
} from "@/i18n/tours";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string; locale: string }>;
}

export async function generateStaticParams() {
  const slugs = await getTourSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const tour = await getTourBySlug(slug, locale);

  if (!tour) {
    return {};
  }

  const firstParagraph = toParagraphBlocks(tour.description)
    .map((block) => block.text?.trim() ?? "")
    .find(Boolean);

  const description = firstParagraph ? firstParagraph.slice(0, 160) : undefined;

  return {
    title: tour.title,
    description,
    openGraph: {
      title: tour.title,
      description,
      images: [{ url: `/images/${tour.image}` }],
    },
  };
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-secondary font-heading mb-10 text-[clamp(1.75rem,1.254rem+2.116vw,3rem)] leading-snug font-bold">
      {children}
    </h2>
  );
}

export default async function TourDetailPage({ params }: Props) {
  const { slug, locale: localeValue } = await params;

  if (!isLocale(localeValue)) {
    notFound();
  }

  const locale: Locale = localeValue;
  const tour = await getTourBySlug(slug, locale);

  if (!tour) {
    notFound();
  }

  const t = await getTranslations("tours.details");
  const tCommon = await getTranslations("common");

  const descriptionBlocks = toParagraphBlocks(tour.description);
  const shortItineraryBlocks = toListBlocks(tour.shortItinerary);
  const includedBlocks = toListBlocks(tour.included);
  const notIncludedBlocks = toListBlocks(tour.notIncluded);
  const recommendationsBlocks = toListBlocks(tour.recommendations);

  const hasDescription = hasContent(descriptionBlocks);
  const hasShortItinerary = hasContent(shortItineraryBlocks);
  const hasIncluded = hasContent(includedBlocks);
  const hasNotIncluded = hasContent(notIncludedBlocks);
  const hasRecommendations = hasContent(recommendationsBlocks);
  const hasItinerary = hasItineraryContent(tour.itinerary);
  const hasAdditionals = hasAdditionalsContent(tour.additionals);

  const allTours = await getTours(locale);
  const others = allTours.filter((item) => item.slug !== tour.slug);
  const seen = new Set<string>();
  const similar: typeof allTours = [];
  const collect = (list: typeof allTours) => {
    for (const item of list) {
      if (similar.length >= 3) return;
      if (!seen.has(item.slug)) {
        seen.add(item.slug);
        similar.push(item);
      }
    }
  };
  collect(others.filter((item) => item.destination === tour.destination));
  collect(others.filter((item) => item.typeKey === tour.typeKey));
  collect([...others].sort((a, b) => Number(b.popular) - Number(a.popular)));

  return (
    <>
      <PageHero title={tour.title} />

      <div className="uw-container pt-16 pb-12 lg:pt-30 lg:pb-20">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-8">
            {/* Imagen del tour */}
            <div className="relative mb-10 aspect-16/10 w-full overflow-hidden rounded-lg">
              <Image
                src={`/images/${tour.image}`}
                alt={tour.title}
                fill
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover"
              />
            </div>

            {/* Meta: tipo + duración */}
            <div className="mb-10 flex flex-wrap items-center gap-3">
              <span className="bg-secondary rounded-full px-4 py-1.5 text-sm font-medium text-white">
                {tour.type}
              </span>
              <span className="text-secondary inline-flex items-center gap-2 rounded-full bg-[#E9F6F9] px-4 py-1.5 text-sm font-medium">
                <Clock className="text-primary size-4" aria-hidden="true" />
                {tour.duration}
              </span>
            </div>

            {/* Título + precio */}
            <h2 className="text-secondary font-heading mb-4 text-[clamp(1.75rem,1.254rem+2.116vw,3rem)] leading-snug font-bold">
              {tour.title}
            </h2>
            <p className="text-foreground mb-10 text-base leading-relaxed">
              <span className="text-primary text-2xl font-semibold">
                ${tour.price}
              </span>
              /{tCommon("perPerson")}
            </p>

            {/* Descripción */}
            {hasDescription && (
              <section className="mb-12">
                <SectionTitle>{t("overview")}</SectionTitle>
                <ItineraryBlocks blocks={descriptionBlocks} size="lg" />
              </section>
            )}

            {/* Itinerario corto */}
            {hasShortItinerary && (
              <section className="mb-12">
                <SectionTitle>{t("shortItinerary")}</SectionTitle>
                <ItineraryBlocks blocks={shortItineraryBlocks} />
              </section>
            )}

            {/* Itinerario detallado */}
            {hasItinerary && tour.itinerary ? (
              <section className="mb-12">
                <SectionTitle>{t("itinerary")}</SectionTitle>
                {tour.itinerary.length > 1 ? (
                  <ItineraryTabs days={tour.itinerary} />
                ) : (
                  <>
                    <h3 className="text-secondary font-heading mb-4 text-xl font-semibold">
                      {tour.itinerary[0].title}
                    </h3>
                    <ItineraryDay day={tour.itinerary[0]} />
                  </>
                )}
              </section>
            ) : null}

            {/* Qué incluye / Qué no incluye */}
            {(hasIncluded || hasNotIncluded) && (
              <section className="mb-12">
                <div
                  className={cn(
                    "grid gap-8",
                    hasIncluded && hasNotIncluded && "md:grid-cols-2 md:gap-10",
                  )}
                >
                  {hasIncluded && (
                    <div>
                      <SectionTitle>{t("included")}</SectionTitle>
                      <ItineraryBlocks
                        blocks={includedBlocks}
                        variant="included"
                      />
                    </div>
                  )}
                  {hasNotIncluded && (
                    <div
                      className={cn(
                        hasIncluded &&
                          "md:border-l md:border-[#E1E4E5] md:pl-10",
                      )}
                    >
                      <SectionTitle>{t("notIncluded")}</SectionTitle>
                      <ItineraryBlocks
                        blocks={notIncludedBlocks}
                        variant="excluded"
                      />
                    </div>
                  )}
                </div>
              </section>
            )}

            {/* Recomendaciones */}
            {hasRecommendations && (
              <section className="mb-12">
                <SectionTitle>{t("recommendations")}</SectionTitle>
                <ItineraryBlocks blocks={recommendationsBlocks} />
              </section>
            )}

            {/* Adicionales */}
            {hasAdditionals && tour.additionals ? (
              <section className="mb-12">
                <SectionTitle>{t("additionals")}</SectionTitle>
                <AdditionalList groups={tour.additionals} />
              </section>
            ) : null}
          </div>

          <aside className="space-y-6 lg:sticky lg:top-24 lg:col-span-4">
            <BookingSidebar tourTitle={tour.title} price={tour.price} />
            <SimilarTours tours={similar} />
          </aside>
        </div>
      </div>
    </>
  );
}
