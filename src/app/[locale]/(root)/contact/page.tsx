import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import PageHero from "@/components/uiwave/PageHero";
import ContactInfoSection from "@/components/sections/contact/ContactInfoSection";
import ContactFormSection from "@/components/sections/contact/ContactFormSection";

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
      <PageHero
        title={t("hero.title")}
        image="/images/Tour-a-Machu-Picchu-03.webp"
      />
      <ContactInfoSection />
      <ContactFormSection />
    </>
  );
}
