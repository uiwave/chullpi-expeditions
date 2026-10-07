import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import TestimonialsSection from "@/components/sections/home/TestimonialsSection";
import DestinationsSection from "@/components/sections/home/DestinationsSection";
import PopularToursSection from "@/components/sections/home/PopularToursSection";
import GallerySection from "@/components/sections/home/GallerySection";
import AboutSection from "@/components/sections/home/AboutSection";
import HeroSection from "@/components/sections/home/HeroSection";
import { getTours, isLocale } from "@/i18n/tours";
import { notFound } from "next/navigation";
import CertificationsSection from "@/components/sections/CertificationsSection";

interface Props {
  params: Promise<{ locale: string }>;
}

// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   const { locale } = await params;
//   const t = await getTranslations({ locale, namespace: "home.metadata" });
//   return {
//     title: t("title"),
//     description: t("description"),
//   };
// }

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
      <CertificationsSection/>
    </>
  );
}
