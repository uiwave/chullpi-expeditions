import { Clock, MapPin, Tag } from "lucide-react";
import type { Tour } from "@/src/data/tours";

interface TourInfoProps {
  tour: Tour;
}

export default function TourInfo({ tour }: TourInfoProps) {
  return (
    <div className="bg-card border border-border rounded-2xl p-6">
      <div className="mb-6">
        <span className="font-heading text-4xl text-primary">
          ${tour.price}.00
        </span>
        <span className="text-muted text-sm ml-2">/ Persona</span>
      </div>

      <div className="space-y-4 mb-6">
        <div className="flex items-center gap-3">
          <Clock className="w-5 h-5 text-primary shrink-0" />
          <div>
            <p className="text-xs text-muted font-heading tracking-wider uppercase">
              Duración
            </p>
            <p className="text-white font-heading tracking-wider">
              {tour.duration}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <MapPin className="w-5 h-5 text-primary shrink-0" />
          <div>
            <p className="text-xs text-muted font-heading tracking-wider uppercase">
              Destino
            </p>
            <p className="text-white font-heading tracking-wider">
              {tour.destination}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Tag className="w-5 h-5 text-primary shrink-0" />
          <div>
            <p className="text-xs text-muted font-heading tracking-wider uppercase">
              Tipo
            </p>
            <p className="text-white font-heading tracking-wider">
              {tour.type}
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-border pt-6">
        <button className="w-full bg-primary hover:bg-primary/90 text-white font-heading tracking-wider text-lg py-3 rounded-xl transition-colors cursor-pointer">
          Reservar Ahora
        </button>
        <p className="text-center text-muted text-xs mt-3">
          O contáctanos al +51 123 456 789
        </p>
      </div>
    </div>
  );
}
