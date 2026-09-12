import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import HeroAboutSection from "@/src/components/sections/about/HeroAboutSection";
import AboutPageSection from "@/src/components/sections/about/AboutPageSection";
import VisionMissionValuesSection from "@/src/components/sections/about/VisionMissionValuesSection";
import CertificationsSection from "@/src/components/sections/home/CertificationsSection";

interface AboutPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: AboutPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });

  return {
    title: `${t("hero.title")} | Chullpi Expeditions`,
    description: t("hero.description"),
  };
}

export default function AboutPage() {
  return (
    <>
      <HeroAboutSection />
      <AboutPageSection />
      <VisionMissionValuesSection />
      <CertificationsSection />
    </>
  );
}
