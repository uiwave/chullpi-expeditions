import type { Metadata } from "next";
import HeroAboutSection from "@/src/components/sections/about/HeroAboutSection";
import AboutPageSection from "@/src/components/sections/about/AboutPageSection";
import VisionMissionValuesSection from "@/src/components/sections/about/VisionMissionValuesSection";
import CertificationsSection from "@/src/components/sections/home/CertificationsSection";

export const metadata: Metadata = {
  title: "Nosotros | Chullpi Expeditions",
  description:
    "Agencia de expediciones en Perú. Descubre quiénes somos, nuestra misión, visión y valores, y las certificaciones que respaldan nuestros viajes auténticos y sostenibles.",
};

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