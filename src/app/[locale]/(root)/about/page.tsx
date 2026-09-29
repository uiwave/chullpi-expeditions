import PageHero from "@/components/uiwave/PageHero";
import MissionSection from "@/components/sections/about/MissionSection";

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Sobre Nosotros"
        image="/images/Tour-Huacachina-Buggy-Sandboarding-02.webp"
      />
      <MissionSection />
    </>
  );
}
