import { Heading } from "@/components/uiwave/Heading";
import { useTranslations } from "next-intl";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import TourCard from "@/components/uiwave/TourCard";
import type { Tour } from "@/types/Tour";

interface Props {
  tours: Tour[];
}

export default function PopularToursSection({ tours }: Props) {
  const t = useTranslations("home.popular_tour");
  const popularTours = tours.filter((tour) => tour.popular);

  return (
    <section className="w-full overflow-hidden">
      <div className="uw-container uw-section pb-0">
        <Heading centered badge={t("badge")} title={t("title")} />
        <Carousel
          opts={{
            align: "start",
          }}
          className="relative w-full"
        >
          <CarouselContent>
            {popularTours.map((tour) => (
              <CarouselItem
                key={tour.slug}
                className="basis-full pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <TourCard data={tour} destination={true} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
