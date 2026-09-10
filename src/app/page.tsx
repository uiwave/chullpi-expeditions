import DestinationsSection from "@/src/components/sections/home/DestinationsSection";
import HeroSection from "@/src/components/sections/home/HeroSection";
import AboutSection from "@/src/components/sections/home/AboutSection";
import PopularToursSection from "@/src/components/sections/home/PopularToursSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <DestinationsSection />
      <AboutSection/>
      <PopularToursSection/>
    </>
  );
}
