import { useTranslations } from "next-intl";
import { ROUTES } from "@/config/routes";
import Image from "next/image";
import Button from "@/components/uiwave/Button";

export default function HeroSection() {
  const t = useTranslations("home.hero");

  return (
    <section className="relative flex min-h-dvh w-full items-center text-white">
      <Image
        src="/images/bg/machu-picchu.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover object-center"
      />
      <div className="absolute inset-0 -z-10 bg-black/40" />
      <div className="uw-container relative w-full">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center md:mx-0 md:items-start md:text-left">
          <p className="font-decoration text-[clamp(1.5rem,1.2rem+1.5vw,2.5rem)] leading-none">
            {t("subtitle")}
          </p>
          <h1 className="font-heading mb-11.25 text-[clamp(2rem,1.5rem+2.5vw,4rem)] leading-tight font-bold">
            {t("title")}
          </h1>
          <div className="flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row">
            <Button
              label={t("actions.exploreTours")}
              href={ROUTES.TOURS}
              variant="primary"
              size="lg"
            />
            <Button
              label={t("actions.bookAirbnb")}
              href={ROUTES.AIRBNB}
              variant="outlet"
              size="lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
