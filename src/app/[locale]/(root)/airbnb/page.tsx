import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { Headset, Home, MapPin, Users } from "lucide-react";
import PageHero from "@/components/uiwave/PageHero";
import Heading from "@/components/uiwave/Heading";
import Button from "@/components/uiwave/Button";
import { Link } from "@/i18n/navigation";
import { ROUTES } from "@/config/routes";
import { siteConfig } from "@/site";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    title: t("airbnb"),
    description: t("description"),
    openGraph: {
      title: `${t("airbnb")} | ${siteConfig.name}`,
      description: t("description"),
      images: [{ url: "/images/bg/boking-img.png" }],
    },
  };
}

const FEATURES = [
  { key: "locations", icon: MapPin },
  { key: "homes", icon: Home },
  { key: "hosts", icon: Users },
  { key: "support", icon: Headset },
] as const;

export default async function AirbnbPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "airbnb" });
  const tCommon = await getTranslations({ locale, namespace: "common" });

  return (
    <>
      <PageHero title={t("hero.title")} />

      <section className="relative w-full pt-16 pb-12 lg:pt-30 lg:pb-20">
        <div className="uw-container">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <Heading
              subtitle={t("intro.subtitle")}
              title={t("intro.title")}
              description={t("intro.description")}
            />
            <div className="relative aspect-4/3 w-full overflow-hidden rounded-3xl shadow-sm sm:rounded-[32px]">
              <Image
                src="/images/bg/boking-img.png"
                alt={t("intro.title")}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full py-12 lg:py-20">
        <div className="uw-container">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {FEATURES.map(({ key, icon: Icon }) => (
              <div
                key={key}
                className="border-border/60 flex flex-col gap-4 rounded-2xl border bg-white p-6 shadow-xs transition-shadow duration-300 hover:shadow-md lg:p-8"
              >
                <div className="bg-primary/10 text-primary flex size-14 shrink-0 items-center justify-center rounded-full">
                  <Icon className="size-6" aria-hidden="true" />
                </div>
                <h3 className="font-heading text-secondary text-lg font-bold">
                  {t(`features.${key}.title`)}
                </h3>
                <p className="text-foreground text-sm leading-relaxed sm:text-base">
                  {t(`features.${key}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary relative w-full overflow-hidden py-16 text-white lg:py-24">
        <div className="uw-container relative z-10 flex flex-col items-center text-center">
          <h2 className="font-heading mb-4 text-[clamp(1.75rem,1.4rem+1.5vw,2.5rem)] leading-[1.4] font-semibold">
            {t("cta.title")}
          </h2>
          <p className="mb-8 max-w-2xl text-white/80">{t("cta.description")}</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              label={t("cta.whatsapp")}
              href={`https://wa.me/51${siteConfig.contact.phone}?text=${encodeURIComponent(
                tCommon("whatsAppUs"),
              )}`}
              variant="primary"
              size="lg"
            />
            <Link
              href={ROUTES.CONTACT}
              className="text-white underline-offset-4 hover:underline"
            >
              {t("cta.contact")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
