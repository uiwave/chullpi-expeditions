import { Link } from "@/i18n/navigation";
import { Tour } from "@/types/Tour";
import { Clock } from "lucide-react";

interface Props {
  data: Tour;
  destination?: boolean;
}

export default function TourCard({ data, destination = false }: Props) {
  return (
    <Link
      href={`/tours/${data.slug}`}
      className="group bg-card border-border flex h-full w-full flex-col gap-3 overflow-hidden rounded-2xl border p-5"
    >
      {destination && (
        <span className="font-heading text-primary mb-3.75 text-center text-[3.125rem] leading-none tracking-widest">
          {data.destination}
        </span>
      )}

      <div className="relative aspect-video w-full overflow-hidden rounded-xl">
        <img
          src={`/images/${data.image}`}
          alt={data.title}
          className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <h3 className="font-heading text-[1.875rem] leading-[1.2] text-white">
        {data.title}
      </h3>

      <p className="mt-auto text-base">
        <span className="font-heading text-2xl text-white">${data.price}</span>{" "}
        Persona
      </p>

      <div className="border-border border-t" />

      <span className="font-heading inline-flex items-center gap-2 text-white">
        <Clock className="text-primary size-4" />
        {data.duration}
      </span>
    </Link>
  );
}
