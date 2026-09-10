import DestinationsSection from "@/src/components/sections/home/DestinationsSection";
import HeroSection from "@/src/components/sections/home/HeroSection";
import AboutSection from "@/src/components/sections/home/AboutSection";
import PopularToursSection from "@/src/components/sections/home/PopularToursSection";
import GallerySection from "@/src/components/sections/home/GallerySection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <DestinationsSection />
      <AboutSection/>
      <PopularToursSection/>
      <GallerySection />
    </>
  );
}
