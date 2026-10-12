import { getTranslations } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import type { Metadata } from "next";
import PageHero from "@/components/uiwave/PageHero";
import Info from "@/components/sections/contact/Info";
import Banner from "@/components/sections/contact/Banner";
import Map from "@/components/sections/contact/Map";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    return {};
  }
  const t = await getTranslations({ locale, namespace: "meta" });
  return { title: t("contact"), description: t("description") };
}

interface Props {
  params: Promise<{ locale: string }>;
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });

  return (
    <>
      <PageHero title={t("hero.title")} />
      <Info />
      <Banner />
      <Map />
    </>
  );
}
