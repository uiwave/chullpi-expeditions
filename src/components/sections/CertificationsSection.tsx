import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface CertificationLogo {
  id: string;
  src: string;
  alt: string;
}

const CERTIFICATION_LOGOS: CertificationLogo[] = [
  {
    id: "blue-lake",
    src: "gerceturlogo.png",
    alt: "Jefferson The Greate Outdoor Blue Lake",
  },
  {
    id: "life-adventure-1",
    src: "perulogo.png",
    alt: "Life is an Adventure 2013",
  },
  {
    id: "mountain-climbing-1",
    src: "promperulogo.png",
    alt: "Outdoor Adventure Mountain Extreme Climbing",
  },
  {
    id: "life-adventure-2",
    src: "safetravelslogo.png",
    alt: "Life is an Adventure 2013",
  },
  {
    id: "wanderlust-1",
    src: "seguridadturisticalogo.png",
    alt: "Wanderlust Travel is to discover",
  },
  {
    id: "explorer",
    src: "tripadvisorlogo.png",
    alt: "Explorer Greate Adventure",
  },
];

export default function CertificationsSection() {
  return (
    <section className="relative w-full py-12 lg:py-16 overflow-hidden">
      <div className="uw-container relative z-10">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4 md:-ml-6 items-center">
            {CERTIFICATION_LOGOS.map((item, index) => (
              <CarouselItem
                key={`${item.id}-${index}`}
                className="pl-4 md:pl-6 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6"
              >
                <div className="flex items-center justify-center p-4 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300 group">
                  <div className="relative w-full h-24 sm:h-28 aspect-4/3 flex items-center justify-center">
                    <Image
                      src={`/images/certifications/${item.src}`}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 16vw"
                      className="object-contain filter brightness-100 contrast-100 group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
