"use client";

import { useState } from "react";

const galleryImages = [
  "/images/Tour-a-Machu-Picchu-03.webp",
  "/images/Montana-de-colores-06.webp",
  "/images/Canon-del-Colca-y-Aguas-Termales-de-La-Calera-03.webp",
  "/images/Tour-Huacachina-Buggy-Sandboarding-02.webp",
  "/images/City-Tour-Cusco-03.webp",
  "/images/Ascenso-volcan-Misti-–-Ruta-norte-02.webp",
  "/images/Tour-en-Bote-a-Islas-Ballestas-y-Candelabro-02.webp",
  "/images/puno.webp",
];

export default function GallerySection() {
  const [stopScroll, setStopScroll] = useState(false);

  return (
    <section className="w-full overflow-hidden">
      <div className="uw-container uw-section pb-0">
        <div className="mb-7.5 lg:mb-9.5">
          <div className="flex flex-col xl:flex-row gap-6 justify-between items-start xl:items-end">
            <h2 className="xl:w-1/2 font-heading text-white leading-[0.95]">
              <span className="block font-decoration text-primary text-[clamp(1.5rem,0.5rem+3.5vw,3rem)] leading-none mb-1">
                Momentos
              </span>
              <span className="block text-[clamp(1.875rem,-0.5rem+6vw,4.5rem)]">
                Galería de Experiencias
              </span>
            </h2>
            <p className="xl:w-[38%]">
              Descubre los destinos más impresionantes de Perú. Desde paisajes
              majestuosos hasta sitios históricos, vive experiencias auténticas
              y memorables en cada rincón del país.
            </p>
          </div>
        </div>
      </div>

      <div className="relative group w-full overflow-hidden">
        <img
          src="/images/bg/gelary-sp1.png"
          alt=""
          className="absolute top-0 left-0 z-10 w-full h-14 object-cover object-bottom pointer-events-none"
        />
        <img
          src="/images/bg/gelary-sp2.png"
          alt=""
          className="absolute bottom-0 left-0 z-10 w-full h-14 object-cover object-top pointer-events-none"
        />

        {/* Pista de animación que contiene los elementos duplicados */}
        <div
          className="flex w-max h-[40vh] sm:h-[45vh] gap-5 marquee-track"
          style={{
            animationPlayState: stopScroll ? "paused" : "running",
            animationDuration: `${galleryImages.length * 3000}ms`,
          }}
        >
          {[...galleryImages, ...galleryImages].map((image, index) => (
            <figure
              key={`${image}-${index}`}
              className="relative shrink-0 w-[280px] sm:w-[320px] md:w-[360px] h-full overflow-hidden rounded-2xl bg-card border border-border"
            >
              <img
                src={image}
                alt="Galería destino"
                className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-300 hover:scale-105"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
