"use client";

import { DestinationCard } from "@/components/uiwave/DestinationCard";
import { DESTINATIONS } from "@/data/destinations";
import { useTranslations } from "next-intl";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Heading from "@/components/uiwave/Heading";
import { useCallback, useEffect, useRef, useState } from "react";

export default function DestinationsSection() {
  const t = useTranslations("home.destinations");
  const [api, setApi] = useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLElement | null)[]>([]);

  const [styles, setStyles] = useState<{
    [key: number]: { transform: string };
  }>({});

  // Garantizamos suficientes elementos para que Embla ejecute el LOOP sin importar la pantalla
  const displayCategories =
    DESTINATIONS.length < 10
      ? [...DESTINATIONS, ...DESTINATIONS].map((item, idx) => ({
          ...item,
          uniqueKey: `${item.id}-${idx}`,
        }))
      : DESTINATIONS.map((item) => ({ ...item, uniqueKey: item.id }));

  const updateArcLayout = useCallback(() => {
    if (!containerRef.current || !api) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const containerCenter = containerRect.left + containerRect.width / 2;

    const newStyles: { [key: number]: { transform: string } } = {};

    itemRefs.current.forEach((el, index) => {
      if (!el) return;

      const itemRect = el.getBoundingClientRect();
      const itemCenter = itemRect.left + itemRect.width / 2;

      // Distancia horizontal en px desde el centro de la pantalla
      let distanceFromCenter = itemCenter - containerCenter;

      // Ancho aproximado de la tarjeta
      const itemWidth = itemRect.width || 1;
      const normalizedDist = distanceFromCenter / itemWidth;

      // --- CÁLCULO GEOMÉTRICO DEL ARCO ---
      // Rotación máxima de 20 grados
      const rotateDeg = Math.max(-20, Math.min(20, normalizedDist * 7.5));

      // Caída vertical en forma de parabola (Y = X^2 * constante)
      const translateYPx = Math.pow(Math.abs(normalizedDist), 2) * 26;

      newStyles[index] = {
        transform: `translateY(${translateYPx}px) rotate(${rotateDeg}deg)`,
      };
    });

    setStyles(newStyles);
  }, [api]);

  useEffect(() => {
    if (!api) return;

    const onScroll = () => {
      requestAnimationFrame(updateArcLayout);
    };

    const onSelect = () => {
      // Mapeamos el índice real dentro del rango base (0 a 4)
      setSelectedIndex(api.selectedScrollSnap() % DESTINATIONS.length);
      onScroll();
    };

    api.on("scroll", onScroll);
    api.on("select", onSelect);
    api.on("reInit", onScroll);

    window.addEventListener("resize", updateArcLayout);

    // Ejecución inicial con retardo leve para asegurar montaje del DOM
    setTimeout(updateArcLayout, 60);

    return () => {
      api.off("scroll", onScroll);
      api.off("select", onSelect);
      api.off("reInit", onScroll);
      window.removeEventListener("resize", updateArcLayout);
    };
  }, [api, updateArcLayout]);

  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative z-10 w-full px-10" ref={containerRef}>
        <Heading
          subtitle={t("subtitle")}
          title={t("title")}
          className="text-center"
        />
        <Carousel
          setApi={setApi}
          opts={{
            align: "center",
            loop: true,
            skipSnaps: false,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4 items-start pb-20 md:-ml-6 md:pb-28">
            {[...DESTINATIONS, ...DESTINATIONS].map((destination, index) => (
              <CarouselItem
                key={destination.id}
                className="basis-full pl-4 sm:basis-1/2 md:basis-1/3 md:pl-6 lg:basis-1/4 xl:basis-1/5"
              >
                <div
                  ref={(el) => {
                    itemRefs.current[index] = el;
                  }}
                  style={styles[index] || { transform: "none" }}
                >
                  <DestinationCard data={destination} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex items-center justify-center gap-3">
            {DESTINATIONS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => api?.scrollTo(idx)}
                className={`size-2.5 rounded-full transition-all duration-300 ${
                  selectedIndex === idx
                    ? "bg-primary scale-125"
                    : "border border-primary/40 bg-transparent"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </Carousel>
      </div>
    </section>
  );
}
