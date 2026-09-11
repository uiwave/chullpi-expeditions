import Link from "next/link";
import type { Tour } from "@/src/data/tours";

interface HeroTourDetailProps {
  tour: Tour;
}

export default function HeroTourDetail({ tour }: HeroTourDetailProps) {
  return (
    <section className="relative flex min-h-[70vh] w-full items-end overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={tour.image}
          alt={tour.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      </div>

      <div className="uw-container relative z-20 pb-12 pt-40 w-full">
        <nav className="mb-6 text-sm font-heading tracking-wider">
          <Link href="/tours" className="text-primary hover:text-white transition-colors">
            Tours
          </Link>
          <span className="text-muted mx-2">/</span>
          <Link
            href={`/tours?destination=${tour.destination}`}
            className="text-primary hover:text-white transition-colors"
          >
            {tour.destination}
          </Link>
          <span className="text-muted mx-2">/</span>
          <span className="text-foreground">{tour.title}</span>
        </nav>

        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="bg-primary/90 text-white text-xs font-heading tracking-wider px-4 py-1.5 rounded-full">
            {tour.type}
          </span>
          <span className="bg-white/10 text-white text-xs font-heading tracking-wider px-4 py-1.5 rounded-full backdrop-blur-sm">
            {tour.destination}
          </span>
        </div>

        <h1 className="font-heading text-[clamp(2.5rem,-1rem+8vw,5rem)] leading-none text-white">
          {tour.title}
        </h1>

        <div className="mt-4 flex flex-wrap items-center gap-6 text-foreground">
          <span className="font-heading text-3xl text-white">
            ${tour.price}.00
            <span className="text-sm text-muted ml-1">/ Persona</span>
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            {tour.duration}
          </span>
        </div>
      </div>
    </section>
  );
}
