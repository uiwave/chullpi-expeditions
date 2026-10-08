import Heading from "@/components/uiwave/Heading";
import { ROUTES } from "@/config/routes";
import { Link } from "@/i18n/navigation";
import {
  ArrowUpRight,
  MapPin,
  Sparkles,
  Compass,
  ArrowRight,
  Users,
} from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

const FEATURES = [
  {
    icon: Compass,
    title: "features.localExperts.title",
    description: "features.localExperts.description",
  },
  {
    icon: MapPin,
    title: "features.personalizedService.title",
    description: "features.personalizedService.description",
  },
];

export default function AboutSection() {
  const t = useTranslations("home.about");
  const tCommon = useTranslations("common");

  return (
    <section className="relative w-full overflow-hidden lg:pb-30">
      <div className="uw-container relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="mx-auto grid h-full w-full max-w-lg grid-cols-2 gap-4 lg:max-w-none">
            <div className="relative h-full w-full overflow-hidden rounded-full shadow-sm">
              <Image
                src="/images/banner-slider-01.webp"
                alt=""
                fill
                priority
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            <div className="flex h-full w-full flex-col gap-4">
              <div className="relative w-full flex-1 overflow-hidden rounded-full rounded-bl-none shadow-sm">
                <Image
                  src="/images/banner-slider-01.webp"
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 50vw, 20vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              <div className="relative w-full flex-1 overflow-hidden rounded-full rounded-tl-none shadow-sm">
                <Image
                  src="/images/banner-slider-01.webp"
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 50vw, 20vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start text-left lg:pr-8 xl:pr-16">
            <Heading
              subtitle={t("subtitle")}
              title={t("title")}
              description={t("description")}
            />

            <ul className="mb-8 w-full space-y-6" role="list">
              {FEATURES.map((item) => {
                const IconComponent = item.icon;
                return (
                  <li className="flex items-center gap-4">
                    <div className="bg-primary text-primary-foreground flex size-12 shrink-0 items-center justify-center rounded-full shadow-md">
                      <IconComponent className="size-6" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-heading text-secondary mb-1 text-2xl font-semibold">
                        {t(item.title)}
                      </h3>
                      <p>{t(item.description)}</p>
                    </div>
                  </li>
                );
              })}
            </ul>

            <Link
              href={ROUTES.ABOUT_US}
              className="bg-secondary group relative inline-flex items-center justify-center overflow-hidden rounded-full px-8.75 py-[18.8px]"
            >
              <div className="bg-primary absolute inset-0 -translate-x-full rounded-full transition-transform duration-300 ease-out group-hover:translate-x-0" />
              <div className="relative z-10 inline-flex items-center gap-2 text-white transition-colors duration-300">
                <span className="text-base font-normal">
                  {tCommon("readMore")}
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
