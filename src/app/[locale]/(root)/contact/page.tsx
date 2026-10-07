import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import PageHero from "@/components/uiwave/PageHero";
import Info from "@/components/sections/contact/Info";
import Banner from "@/components/sections/contact/Banner";
import Map from "@/components/sections/contact/Map";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact.metadata" });
  return {
    title: t("title"),
    description: t("description"),
  };
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
