"use client";

import { useTranslations } from "next-intl";

export default function HeroSection() {
  const t = useTranslations("hero_home");

  return (
    <section className="relative flex min-h-[95vh] w-full items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        >
          <source src="/videos/chull-banner.mp4" type="video/mp4" />
          {t("video_fallback")}
        </video>
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <img
        src="/images/bg/hero-bg.webp"
        alt=""
        className="pointer-events-none absolute bottom-0 left-0 z-10 w-full"
      />
      <div className="uw-container relative z-20 pt-30 text-center">
        <div>
          <span className="font-decoration text-[clamp(1rem,0.643rem+0.893vw,1.5rem)] tracking-[4px] text-primary uppercase">
            {t("subtitle")}
          </span>
          <h1 className="font-heading text-[clamp(4.688rem,-9.821rem+36.272vw,25rem)] leading-none text-white">
            {t("title")}
          </h1>
        </div>
      </div>
    </section>
  );
}
