import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import PageHero from "@/components/uiwave/PageHero";
import MissionSection from "@/components/sections/about/MissionSection";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about.metadata" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });

  return (
    <>
      <PageHero
        title={t("hero.title")}
        image="/images/Tour-Huacachina-Buggy-Sandboarding-02.webp"
      />
      <MissionSection />
    </>
  );
}
