import type { Metadata } from "next";
import { Suspense } from "react";
import HeroTours from "@/src/components/sections/tours/HeroTours";
import ToursClient from "@/src/components/sections/tours/ToursClient";

export const metadata: Metadata = {
  title: "Tours en Perú | Chullpi Expeditions",
  description:
    "Explora nuestros tours de aventura, cultura y naturaleza en los mejores destinos de Perú. Encuentra tu próxima expedición en Cusco, Arequipa, Ica, Puno y más.",
};

export default function ToursPage() {
  return (
    <>
      <HeroTours />
      <Suspense>
        <ToursClient />
      </Suspense>
    </>
  );
}
