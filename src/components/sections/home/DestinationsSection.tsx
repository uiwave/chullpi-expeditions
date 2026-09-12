"use client";

import { useTranslations } from "next-intl";
import { destinations } from "@/src/data/destinations";

export default function DestinationsSection() {
  const t = useTranslations("home.destinations");
  const tNav = useTranslations("nav");

  return (
    <section className="w-full overflow-hidden">
      <div className="uw-container uw-section">
        <div className="mb-7.5 lg:mb-9.5">
          <div className="flex flex-col xl:flex-row gap-6 justify-between items-start xl:items-end">
            <h2 className="xl:w-1/2 font-heading text-white leading-[0.95]">
              <span className="block font-decoration text-primary text-[clamp(1.5rem,0.5rem+3.5vw,3rem)] leading-none mb-1">
                {t("label")}
              </span>
              <span className="block text-[clamp(1.875rem,-0.5rem+6vw,4.5rem)]">
                {t("title")}
              </span>
            </h2>
            <p className="xl:w-[38%]">
              {t("description")}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full">
          {destinations.map((destination) => (
            <a
              key={destination.slug}
              href={destination.slug}
              className="group flex flex-col w-full overflow-hidden rounded-2xl bg-card border border-border"
            >
              <div className="relative aspect-4/4 w-full overflow-hidden">
                <img
                  src={destination.image}
                  alt={tNav(destination.slug)}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="flex flex-col p-5">
                <h3 className="font-heading text-[1.875rem] leading-[1.2] text-white">
                  {tNav(destination.slug)}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
