import { Clock } from "lucide-react";
import { tours } from "@/src/data/tours";

export default function PopularToursSection() {
  return (
    <section className="w-full overflow-hidden">
      <div className="uw-container uw-section pt-0">
        <div className="mb-7.5 lg:mb-9.5">
          <div className="flex flex-col gap-6 items-center text-center">
            <h2 className="font-heading text-white leading-[0.95]">
              <span className="block font-decoration text-primary text-[clamp(1.5rem,0.5rem+3.5vw,3rem)] leading-none mb-1">
                No te pierdas
              </span>
              <span className="block text-[clamp(1.875rem,-0.5rem+6vw,4.5rem)]">
                Nuestros Tours Destacados en Perú
              </span>
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full">
          {tours.map((tour) => (
            <a
              key={tour.slug}
              href={tour.slug}
              className="group flex flex-col w-full overflow-hidden rounded-2xl bg-card border border-border p-5 gap-3"
            >
              <span className="text-center font-heading text-[3.125rem] leading-none tracking-widest text-primary mb-3.75">
                {tour.destination}
              </span>

              <div className="relative aspect-video w-full overflow-hidden rounded-xl">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <h3 className="font-heading text-[1.875rem] leading-[1.2] text-white">
                {tour.title}
              </h3>

              <p className="text-base mt-auto">
                <span className="font-heading text-white text-2xl">
                  ${tour.price}.00
                </span>{" "}
                / Per Person
              </p>

              <div className="border-t border-border" />

              <span className="font-heading text-white inline-flex items-center gap-2">
                <Clock className="size-4 text-primary" />
                {tour.duration}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
