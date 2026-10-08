import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import PageHero from "@/components/uiwave/PageHero";
import TestimonialsSection from "@/components/sections/home/TestimonialsSection";
import CertificationsSection from "@/components/sections/CertificationsSection";
import About from "@/components/sections/about/About";

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
      <PageHero title={t("hero.title")} />
      <About />
      <TestimonialsSection />
      <CertificationsSection />
    </>
  );
}
