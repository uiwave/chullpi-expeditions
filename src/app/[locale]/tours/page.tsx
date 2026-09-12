import type { Metadata } from "next";
import { Suspense } from "react";
import { getTranslations } from "next-intl/server";
import HeroTours from "@/src/components/sections/tours/HeroTours";
import ToursClient from "@/src/components/sections/tours/ToursClient";

interface ToursPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: ToursPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "tours" });

  return {
    title: `${t("hero.title")} | Chullpi Expeditions`,
    description: t("hero.description"),
  };
}

export default function ToursPage() {
  return (
    <>
      <HeroTours />
      <Suspense>
        <ToursClient />
      </Suspense>
    </>
  );
}
