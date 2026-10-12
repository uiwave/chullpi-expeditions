import { getTranslations } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import type { Metadata } from "next";
import PageHero from "@/components/uiwave/PageHero";
import TestimonialsSection from "@/components/sections/home/TestimonialsSection";
import CertificationsSection from "@/components/sections/CertificationsSection";
import About from "@/components/sections/about/About";

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
  return { title: t("about"), description: t("description") };
}

interface Props {
  params: Promise<{ locale: string }>;
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
