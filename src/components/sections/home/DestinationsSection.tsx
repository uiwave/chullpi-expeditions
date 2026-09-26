import { DestinationCard } from "@/components/uiwave/DestinationCard";
import { Heading } from "@/components/uiwave/Heading";
import { DESTINATIONS } from "@/data/destinations";
import { useTranslations } from "next-intl";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function DestinationsSection() {
  const t = useTranslations("home.destination");

  return (
    <section className="w-full">
      <div className="uw-container uw-section">
        <Heading
          badge={t("badge")}
          title={t("title")}
          description={t("description")}
        />
        <Carousel
          opts={{
            align: "start",
          }}
          className="relative w-full"
        >
          <CarouselContent>
            {DESTINATIONS.map((destination) => (
              <CarouselItem
                key={destination.id}
                className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <DestinationCard data={destination} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
