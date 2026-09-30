import { Heading } from "@/components/uiwave/Heading";
import { TestimonialCard } from "@/components/uiwave/TestimonialCard";
import { TESTIMONIALS } from "@/data/testimonials";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useTranslations } from "next-intl";

export default function TestimonialsSection() {
  const t = useTranslations("home.testimonial");

  return (
    <section className="relative w-full overflow-hidden">
      <img
        src="/images/bg/testimonial.png"
        alt=""
        className="pointer-events-none absolute inset-0 z-0 h-full w-full object-contain object-center"
      />

      <div className="uw-container uw-section relative z-10">
        <Heading
          centered
          badge={t("badge")}
          title={t("title")}
          description={t("description")}
        />

        {/* Layout en 2 columnas */}
        <div className="mt-10 grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Columna Izquierda: Imagen destacada (Aumentada de tamaño) */}
          <div className="relative flex justify-center lg:col-span-5">
            <img
              src="/images/bg/travel2.png"
              alt={t("travelerAlt")}
              className="h-auto max-h-137.5 w-full max-w-120 object-contain"
            />
          </div>

          {/* Columna Derecha: Carrusel (2 Cards visibles) */}
          <div className="lg:col-span-7">
            <Carousel
              opts={{
                align: "start",
              }}
              className="relative w-full"
            >
              <CarouselContent>
                {TESTIMONIALS.map((testimonial) => (
                  <CarouselItem
                    key={testimonial.name}
                    className="basis-full pl-4 md:basis-1/2"
                  >
                    <TestimonialCard data={testimonial} />
                  </CarouselItem>
                ))}
              </CarouselContent>

              {/* Botones de navegación personalizados */}
              <div className="mt-6 flex gap-3">
                <CarouselPrevious className="static h-12 w-12 translate-x-0 translate-y-0 rounded-full border-none bg-[#009ca6] text-white transition-colors hover:bg-[#008189] hover:text-white" />
                <CarouselNext className="static h-12 w-12 translate-x-0 translate-y-0 rounded-full border-none bg-[#009ca6] text-white transition-colors hover:bg-[#008189] hover:text-white" />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
