import Link from "next/link";
import { Clock } from "lucide-react";
import type { Tour } from "@/src/data/tours";

interface TourCardProps {
  tour: Tour;
}

export default function TourCard({ tour }: TourCardProps) {
  return (
    <Link
      href={`/tours/${tour.slug}`}
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
        <span className="absolute top-3 right-3 bg-primary/90 text-white text-xs font-heading tracking-wider px-3 py-1 rounded-full">
          {tour.type}
        </span>
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
    </Link>
  );
}
