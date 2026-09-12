"use client";

import { useTranslations } from "next-intl";

export default function HeroAboutSection() {
  const t = useTranslations("about.hero");

  return (
    <section className="relative flex min-h-[70vh] w-full items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/Tour-a-Machu-Picchu-03.webp"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <img
        src="/images/bg/hero-bg.webp"
        alt=""
        className="pointer-events-none absolute bottom-0 left-0 z-10 w-full"
      />
      <div className="uw-container relative z-20 pt-30 text-center">
        <span className="font-decoration text-primary uppercase tracking-[4px] text-[clamp(1rem,0.643rem+0.893vw,1.5rem)]">
          {t("label")}
        </span>
        <h1 className="font-heading leading-none text-white text-[clamp(4.5rem,1.5rem+7.5vw,10.5rem)]">
          {t("title")}
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-[clamp(1rem,0.822rem+0.446vw,1.25rem)] text-white/90">
          {t("description")}
        </p>
      </div>
    </section>
  );
}
