import TourCardPopular from "@/components/v2/TourCardPopular";
import Heading from "@/components/uiwave/Heading";
import { useTranslations } from "next-intl";
import type { Tour } from "@/types/Tour";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

interface Props {
  tours: Tour[];
}

export default function PopularToursSection({ tours }: Props) {
  const t = useTranslations("home.machupicchuFeatured");
  const popularTours = tours.filter((tour) => tour.popular);

  return (
    <section className="relative w-full py-30">
      <div className="pointer-events-none absolute top-0 right-0 left-0 z-0 h-[calc(100%-180px)] overflow-hidden sm:h-[calc(100%-200px)] lg:h-[calc(100%-300px)]">
        <Image
          src="/images/bg/tour_bg_1.jpg"
          alt=""
          fill
          priority
          quality={85}
          sizes="100vw"
          className="object-cover object-top"
        />
      </div>
      <div className="uw-container relative z-10">
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
              <CarouselItem key={tour.slug} className="basis-1/1 lg:basis-1/4">
                <TourCardPopular data={tour} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
