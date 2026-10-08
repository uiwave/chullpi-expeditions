import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { ROUTES } from "@/config/routes";
import Image from "next/image";

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
          <h1 className="font-heading mb-11.25 text-[clamp(2.25rem,1.2rem+4vw,5rem)] leading-[1.18] font-bold">
            {t("title")}
          </h1>
          <div className="flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row">
            <Link
              href={ROUTES.TOURS}
              className="bg-primary group relative inline-flex items-center justify-center overflow-hidden rounded-full px-8.75 py-[18.8px]"
            >
              <div className="bg-secondary absolute inset-0 -translate-x-full rounded-full transition-transform duration-300 ease-out group-hover:translate-x-0" />
              <div className="relative z-10 inline-flex items-center gap-2 text-white transition-colors duration-300">
                <span className="text-base font-normal">
                  {t("actions.exploreTours")}
                </span>
                <ArrowRight className="size-5" />
              </div>
            </Link>
            <Link
              href={ROUTES.AIRBNB}
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-white bg-transparent px-8.75 py-[18.8px]"
            >
              <div className="absolute inset-0 -translate-x-full rounded-full bg-white transition-transform duration-300 ease-out group-hover:translate-x-0" />
              <div className="group-hover:text-secondary relative z-10 inline-flex items-center gap-2 text-white transition-colors duration-300">
                <span className="text-base font-normal">
                  {t("actions.bookAirbnb")}
                </span>
                <ArrowRight className="size-5" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
