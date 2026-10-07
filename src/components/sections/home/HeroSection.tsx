import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ROUTES } from "@/config/routes";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  const t = useTranslations("home.hero");

  return (
    <section className="relative flex min-h-dvh w-full items-center text-white">
      <Image
        src="/images/Tour-Valle-Sur-Tipon-02.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover object-center"
      />
      <div className="absolute inset-0 -z-10 bg-black/40" aria-hidden="true" />
      <div className="uw-container relative w-full">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center md:mx-0 md:items-start md:text-left">
          <p className="font-decoration text-[clamp(1.5rem,1.2rem+1.5vw,2.5rem)] leading-none">
            {t("subtitle")}
          </p>
          <h1 className="font-heading mb-11.25 text-[clamp(2.25rem,1.2rem+4vw,5rem)] leading-[1.18] font-bold">
            {t("title")}
          </h1>
          <div className="flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row">
            <Link href={ROUTES.TOURS}>
              <span>{t("actions.exploreTours")}</span>
              <ArrowRight className="size-5" />
            </Link>
            <Link href={ROUTES.AIRBNB}>
              <span>{t("actions.bookAirbnb")}</span>
              <ArrowRight className="size-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
