import Button from "@/components/uiwave/Button";
import Heading from "@/components/uiwave/Heading";
import { ROUTES } from "@/config/routes";
import { MapPin, Compass } from "lucide-react";
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
    <section className="relative w-full overflow-hidden bg-[#F4F9FA] py-12 lg:py-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 bottom-0 h-[179px] w-[292px] bg-contain bg-right-bottom bg-no-repeat"
        style={{ backgroundImage: "url('/images/bg/hills-image-2.svg')" }}
      />
      <div className="uw-container relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="mx-auto grid h-full w-full max-w-lg grid-cols-2 gap-4 lg:max-w-none">
            <div className="relative h-full w-full overflow-hidden rounded-full shadow-sm">
              <Image
                src="/images/Tour-a-Moray-y-las-salineras-de-Maras-01.webp"
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
                  src="/images/Chullpas-de-Sillustani-02.webp"
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 50vw, 20vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              <div className="relative w-full flex-1 overflow-hidden rounded-full rounded-tl-none shadow-sm">
                <Image
                  src="/images/Cusco-a-Machu-Picchu-3-Dias-03.webp"
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
              {FEATURES.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <li key={index} className="flex items-center gap-4">
                    <div className="bg-primary text-primary-foreground flex size-12 shrink-0 items-center justify-center rounded-full shadow-md">
                      <IconComponent className="size-6" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-heading text-secondary mb-1 text-xl font-semibold">
                        {t(item.title)}
                      </h3>
                      <p className="text-base leading-relaxed">
                        {t(item.description)}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
            <Button
              href={ROUTES.ABOUT_US}
              label={tCommon("readMore")}
              variant="secondary"
              size="lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
