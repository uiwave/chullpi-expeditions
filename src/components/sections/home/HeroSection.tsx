import { useTranslations } from "next-intl";

export default function HeroSection() {
  const t = useTranslations("home");

  return (
    <section className="relative flex min-h-screen w-full items-center justify-center">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        >
          <source src="/videos/chull-banner.mp4" type="video/mp4" />
          {t("hero.videoFallback")}
        </video>
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <img
        src="/images/bg/uw.webp"
        alt=""
        className="pointer-events-none absolute bottom-0 left-0 z-10 w-full"
      />
      <div className="relative z-20 overflow-hidden text-center">
        <span className="font-decoration text-primary text-[clamp(1rem,0.643rem+0.893vw,1.5rem)] tracking-[4px] uppercase">
          {t("hero.subtitle")}
        </span>
        <h1 className="font-heading text-[clamp(6.25rem,-7.143rem+33.482vw,25rem)] leading-none text-white">
          {t("hero.title")}
        </h1>
      </div>
    </section>
  );
}
