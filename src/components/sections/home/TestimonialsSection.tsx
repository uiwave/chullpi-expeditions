"use client";

import { useState, useEffect, useCallback } from "react";
import { TESTIMONIALS } from "@/data/testimonials";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useTranslations } from "next-intl";
import Heading from "@/components/uiwave/Heading";
import { Quote, Star } from "lucide-react";
import Image from "next/image";

export default function TestimonialsSection() {
  const t = useTranslations("home.testimonials");
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const onSelect = useCallback(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
  }, [api]);

  useEffect(() => {
    if (!api) return;
    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api, onSelect]);

  return (
    <section className="relative w-full overflow-hidden py-16 lg:py-28">
      <div className="uw-container relative z-10">
        <Heading
          subtitle={t("subtitle")}
          title={t("title")}
          className="text-center"
        />
      </div>

      <div className="relative w-full">
        <Carousel
          setApi={setApi}
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full"
        >
          {/* py-20 para dar suficiente colchón vertical al desplazamiento más amplio */}
          <CarouselContent className="-ml-4 items-stretch py-20 md:-ml-8">
            {TESTIMONIALS.map((item, index) => {
              const isActive = index === current;

              return (
                <CarouselItem
                  key={index}
                  className="flex basis-full pl-4 md:basis-1/2 md:pl-8 lg:basis-1/3"
                >
                  {/*
                    Mayor separación vertical:
                    - Activo: sube hasta -translate-y-8 (sm) y -translate-y-12 (lg)
                    - Inactivo: baja a translate-y-6
                  */}
                  <article
                    className={`dark:bg-secondary/20 relative flex w-full flex-col justify-between rounded-3xl bg-[#eaf6f9] p-6 transition-all duration-500 ease-out sm:p-8 ${
                      isActive
                        ? "z-10 -translate-y-8 opacity-100 shadow-xl lg:-translate-y-12"
                        : "translate-y-6 opacity-90 shadow-xs lg:opacity-75"
                    }`}
                  >
                    <div className="flex flex-1 flex-col">
                      {/* Cabecera del Testimonio */}
                      <div className="mb-6 flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3.5">
                          <div className="relative size-12 shrink-0 overflow-hidden rounded-full border-2 border-white shadow-xs sm:size-14">
                            <Image
                              src={item.image}
                              alt={item.name}
                              fill
                              sizes="56px"
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <h3 className="font-heading text-secondary text-[1.25rem] font-semibold sm:text-2xl">
                              {item.name}
                            </h3>
                          </div>
                        </div>

                        <div
                          className="flex shrink-0 items-center gap-1 text-amber-400"
                          aria-label={`Calificación: ${item.rating} de 5 estrellas`}
                        >
                          {Array.from({ length: item.rating }).map((_, i) => (
                            <Star
                              key={i}
                              className="size-4 fill-amber-400 text-amber-400"
                              aria-hidden="true"
                            />
                          ))}
                        </div>
                      </div>

                      {/* Contenedor del texto */}
                      <div className="mb-8 flex min-h-28 flex-1 items-start">
                        <p className="line-clamp-4 text-lg leading-relaxed font-medium text-pretty text-black sm:text-[1.25rem]">
                          {item.comment}
                        </p>
                      </div>
                    </div>

                    {/* Insignia Flotante en el borde inferior */}
                    <div className="absolute -bottom-7 left-1/2 z-20 -translate-x-1/2">
                      <div
                        className={`dark:border-background flex size-14 shrink-0 items-center justify-center rounded-full border-4 border-white shadow-md transition-colors duration-500 select-none sm:size-16 ${
                          isActive
                            ? "bg-primary text-primary-foreground"
                            : "text-primary border-transparent bg-white"
                        }`}
                      >
                        <Quote
                          className="size-7 fill-current sm:size-8"
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                  </article>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
