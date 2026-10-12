import TestimonialsSection from "@/components/sections/home/TestimonialsSection";
import DestinationsSection from "@/components/sections/home/DestinationsSection";
import PopularToursSection from "@/components/sections/home/PopularToursSection";
import GallerySection from "@/components/sections/home/GallerySection";
import AboutSection from "@/components/sections/home/AboutSection";
import HeroSection from "@/components/sections/home/HeroSection";
import { getTours, isLocale } from "@/i18n/tours";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import type { Metadata } from "next";
import CertificationsSection from "@/components/sections/CertificationsSection";

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
  return { title: t("home"), description: t("description") };
}

interface Props {
  params: Promise<{ locale: string }>;
}

export default async function Home({ params }: Props) {
  const { locale: localeValue } = await params;

  if (!isLocale(localeValue)) {
    notFound();
  }

  const tours = await getTours(localeValue);

  return (
    <>
      <HeroSection />
      <PopularToursSection tours={tours} />
      <AboutSection />
      <DestinationsSection />
      <GallerySection />
      <TestimonialsSection />
      <CertificationsSection />
    </>
  );
}
