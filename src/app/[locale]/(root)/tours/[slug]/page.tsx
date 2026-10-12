import Image from "next/image";
import PageHero from "@/components/uiwave/PageHero";
import { notFound } from "next/navigation";
import { CircleCheck, CircleX, Clock } from "lucide-react";
import { getTranslations } from "next-intl/server";
import ItineraryTabs from "@/components/sections/tours/ItineraryTabs";
import ItineraryDay from "@/components/sections/tours/ItineraryDay";
import AdditionalList from "@/components/sections/tours/AdditionalList";
import BookingSidebar from "@/components/sections/tours/BookingSidebar";
import SimilarTours from "@/components/sections/tours/SimilarTours";
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

  const description = tour.description
    ? tour.description.split(/\n+/)[0].slice(0, 160)
    : undefined;

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
    <h2 className="text-secondary font-heading mb-10 text-[clamp(1.75rem,1.4rem+1.5vw,2.5rem)] leading-[1.4] font-semibold">
      {children}
    </h2>
  );
}

type CheckVariant = "default" | "included" | "excluded";

function CheckList({
  items,
  variant = "default",
}: {
  items: string[];
  variant?: CheckVariant;
}) {
  const Icon = variant === "excluded" ? CircleX : CircleCheck;
  const color =
    variant === "included"
      ? "text-[#27AE60]"
      : variant === "excluded"
        ? "text-[#EB5757]"
        : "text-primary";

  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li
          key={item}
          className="text-foreground relative pl-10 text-lg leading-7"
        >
          <Icon
            className={cn("absolute top-0.5 left-0 size-6", color)}
            aria-hidden="true"
          />
          {item}
        </li>
      ))}
    </ul>
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

  const paragraphs = tour.description ? tour.description.split(/\n+/) : [];
  const hasIncluded = Boolean(tour.included?.length);
  const hasNotIncluded = Boolean(tour.notIncluded?.length);

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
      <PageHero title={tour.title} bgImage={`/images/${tour.image}`} />

      <div className="uw-container pt-16 pb-12 lg:pt-30 lg:pb-20">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-8">
            {/* Imagen del tour */}
            <div className="relative mb-10 aspect-[16/10] w-full overflow-hidden rounded-lg">
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
              <span className="bg-secondary rounded-full px-4 py-1.5 text-lg text-white">
                {tour.type}
              </span>
              <span className="text-secondary inline-flex items-center gap-2 rounded-full bg-[#E9F6F9] px-4 py-1.5 text-lg">
                <Clock className="text-primary size-4" aria-hidden="true" />
                {tour.duration}
              </span>
            </div>

            {/* Título + precio */}
            <h2 className="text-secondary font-heading mb-4 text-[clamp(1.75rem,1.4rem+1.5vw,2.5rem)] leading-[1.4] font-semibold">
              {tour.title}
            </h2>
            <p className="text-foreground mb-10 text-lg leading-10">
              <span className="text-primary text-[28px] font-semibold">
                ${tour.price}
              </span>
              /{tCommon("perPerson")}
            </p>

            {/* Descripción */}
            {paragraphs.length > 0 && (
              <section className="mb-12">
                <SectionTitle>{t("overview")}</SectionTitle>
                <div className="space-y-4">
                  {paragraphs.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-foreground text-lg leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            )}

            {/* Itinerario corto */}
            {tour.shortItinerary?.length ? (
              <section className="mb-12">
                <SectionTitle>{t("shortItinerary")}</SectionTitle>
                <CheckList items={tour.shortItinerary} />
              </section>
            ) : null}

            {/* Itinerario detallado */}
            {tour.itinerary?.length ? (
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
                      <CheckList items={tour.included!} variant="included" />
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
                      <CheckList items={tour.notIncluded!} variant="excluded" />
                    </div>
                  )}
                </div>
              </section>
            )}

            {/* Recomendaciones */}
            {tour.recommendations?.length ? (
              <section className="mb-12">
                <SectionTitle>{t("recommendations")}</SectionTitle>
                <CheckList items={tour.recommendations} />
              </section>
            ) : null}

            {/* Adicionales */}
            {tour.additionals?.length ? (
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
