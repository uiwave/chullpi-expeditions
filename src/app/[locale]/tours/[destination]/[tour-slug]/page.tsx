import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { tours, getTourBySlug } from "@/src/data/tours";
import { getTourData } from "@/src/data/tour-data";
import HeroTourDetail from "@/src/components/sections/tour-detail/HeroTourDetail";
import TourInfo from "@/src/components/sections/tour-detail/TourInfo";
import DescriptionSection from "@/src/components/sections/tour-detail/DescriptionSection";
import ShortItinerary from "@/src/components/sections/tour-detail/ShortItinerary";
import ItinerarySection from "@/src/components/sections/tour-detail/ItinerarySection";
import IncludesSection from "@/src/components/sections/tour-detail/IncludesSection";
import RecommendationsSection from "@/src/components/sections/tour-detail/RecommendationsSection";

interface TourPageProps {
  params: Promise<{ locale: string; destination: string; "tour-slug": string }>;
}

export async function generateStaticParams() {
  return tours.map((tour) => {
    const [destination, tourSlug] = tour.slug.split("/");
    return {
      destination,
      "tour-slug": tourSlug,
    };
  });
}

export async function generateMetadata({ params }: TourPageProps): Promise<Metadata> {
  const { locale, destination, "tour-slug": tourSlug } = await params;
  const tour = getTourBySlug(`${destination}/${tourSlug}`);
  const t = await getTranslations({ locale, namespace: "tour_detail" });

  if (!tour) return { title: "Tour not found" };

  const tourData = await getTourData(`${destination}/${tourSlug}`, locale);

  return {
    title: t("meta_title", { title: tourData?.title || tour.title }),
    description: tourData?.description?.slice(0, 160) || `${tour.title} - ${tour.destination}`,
  };
}

export default async function TourDetailPage({ params }: TourPageProps) {
  const { locale, destination, "tour-slug": tourSlug } = await params;
  const tour = getTourBySlug(`${destination}/${tourSlug}`);

  if (!tour) notFound();

  const tourData = await getTourData(`${destination}/${tourSlug}`, locale);

  return (
    <>
      <HeroTourDetail tour={tour} tourData={tourData} />

      <section className="w-full">
        <div className="uw-container uw-section">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-12">
            <div className="space-y-12">
              {tourData?.description && (
                <DescriptionSection description={tourData.description} />
              )}

              {tourData?.shortItinerary && (
                <ShortItinerary items={tourData.shortItinerary} />
              )}

              {tourData?.itinerary && (
                <ItinerarySection itinerary={tourData.itinerary} />
              )}

              <IncludesSection
                includes={tourData?.includes}
                notIncludes={tourData?.notIncludes}
              />

              {tourData?.recommendations && (
                <RecommendationsSection recommendations={tourData.recommendations} />
              )}
            </div>

            <aside>
              <div className="lg:sticky lg:top-28">
                <TourInfo tour={tour} />
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
