import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { tours, getTourBySlug } from "@/src/data/tours";
import HeroTourDetail from "@/src/components/sections/tour-detail/HeroTourDetail";
import TourInfo from "@/src/components/sections/tour-detail/TourInfo";
import DescriptionSection from "@/src/components/sections/tour-detail/DescriptionSection";
import ShortItinerary from "@/src/components/sections/tour-detail/ShortItinerary";
import ItinerarySection from "@/src/components/sections/tour-detail/ItinerarySection";
import IncludesSection from "@/src/components/sections/tour-detail/IncludesSection";
import RecommendationsSection from "@/src/components/sections/tour-detail/RecommendationsSection";

interface TourPageProps {
  params: Promise<{ destination: string; "tour-slug": string }>;
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
  const { destination, "tour-slug": tourSlug } = await params;
  const tour = getTourBySlug(`${destination}/${tourSlug}`);

  if (!tour) return { title: "Tour no encontrado" };

  return {
    title: `${tour.title} | Chullpi Expeditions`,
    description:
      tour.description?.slice(0, 160) ||
      `${tour.title} - Tour en ${tour.destination}, Perú. ${tour.duration} desde $${tour.price} USD.`,
  };
}

export default async function TourDetailPage({ params }: TourPageProps) {
  const { destination, "tour-slug": tourSlug } = await params;
  const tour = getTourBySlug(`${destination}/${tourSlug}`);

  if (!tour) notFound();

  return (
    <>
      <HeroTourDetail tour={tour} />

      <section className="w-full">
        <div className="uw-container uw-section">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-12">
            <div className="space-y-12">
              {tour.description && (
                <DescriptionSection description={tour.description} />
              )}

              {tour.shortItinerary && (
                <ShortItinerary items={tour.shortItinerary} />
              )}

              {tour.itinerary && (
                <ItinerarySection itinerary={tour.itinerary} />
              )}

              <IncludesSection
                includes={tour.includes}
                notIncludes={tour.notIncludes}
              />

              {tour.recommendations && (
                <RecommendationsSection recommendations={tour.recommendations} />
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
