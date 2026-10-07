import TourInfoSection from "@/components/sections/tour-detail/TourInfoSection";
import PageHero from "@/components/uiwave/PageHero";
import { notFound } from "next/navigation";
import {
  getTourBySlug,
  getTourSlugs,
  isLocale,
  type Locale,
} from "@/i18n/tours";

interface Props {
  params: Promise<{ slug: string; locale: string }>;
}

export async function generateStaticParams() {
  const slugs = await getTourSlugs();
  return slugs.map((slug) => ({ slug }));
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

  return (
    <>
      <PageHero title={tour.title} bgImage={`/images/${tour.image}`} />

      <div className="uw-container uw-section py-10 lg:py-14">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-8"></div>

          <div className="lg:sticky lg:top-24 lg:col-span-4">
            <TourInfoSection tour={tour} />
          </div>
        </div>
      </div>
    </>
  );
}
