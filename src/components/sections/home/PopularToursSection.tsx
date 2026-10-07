import { useTranslations } from "next-intl";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import type { Tour } from "@/types/Tour";
import Heading from "@/components/uiwave/Heading";
import Image from "next/image";
import TourCardPopular from "@/components/v2/TourCardPopular";

interface Props {
  tours: Tour[];
}

export default function PopularToursSection({ tours }: Props) {
  const t = useTranslations("home.machupicchuFeatured");
  const popularTours = tours.filter((tour) => tour.popular);

  return (
    <section className="relative w-full">
      <div className="pointer-events-none absolute top-0 right-0 left-0 z-0 h-[calc(100%-180px)] overflow-hidden sm:h-[calc(100%-200px)] lg:h-128">
        <Image
          src="/images/hero/tour_bg_1.jpg"
          alt=""
          fill
          priority
          quality={85}
          sizes="100vw"
          className="object-cover object-top"
        />
      </div>
      <div className="uw-container relative z-10 pt-16 pb-16 lg:pt-24 lg:pb-24">
        <Heading
          subtitle={t("subtitle")}
          title={t("title")}
          description={t("description")}
          className="text-center"
        />
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent>
            {popularTours.map((tour) => (
              <CarouselItem key={tour.slug} className="basis-1/2 lg:basis-1/4">
                <TourCardPopular data={tour} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
