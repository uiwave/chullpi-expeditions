import DestinationsSection from "@/src/components/sections/home/DestinationsSection";
import HeroSection from "@/src/components/sections/home/HeroSection";
import AboutSection from "@/src/components/sections/home/AboutSection";
import PopularToursSection from "@/src/components/sections/home/PopularToursSection";
import GallerySection from "@/src/components/sections/home/GallerySection";
import TestimonialsSection from "@/src/components/sections/home/TestimonialsSection";
import CertificationsSection from "@/src/components/sections/home/CertificationsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <DestinationsSection />
      <AboutSection />
      <PopularToursSection />
      <GallerySection />
      <TestimonialsSection />
      <CertificationsSection />
    </>
  );
}
