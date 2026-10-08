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
    <section className="relative w-full overflow-hidden py-12 lg:py-16">
      <div className="uw-container relative z-10">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4 items-center md:-ml-6">
            {CERTIFICATION_LOGOS.map((item, index) => (
              <CarouselItem
                key={`${item.id}-${index}`}
                className="basis-1/2 pl-4 sm:basis-1/3 md:basis-1/4 md:pl-6 lg:basis-1/5 xl:basis-1/6"
              >
                <div className="group flex items-center justify-center p-4 opacity-80 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0">
                  <div className="relative flex aspect-4/3 h-24 w-full items-center justify-center sm:h-28">
                    <Image
                      src={`/images/certifications/${item.src}`}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 16vw"
                      className="object-contain brightness-100 contrast-100 filter transition-transform duration-300 group-hover:scale-105"
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
