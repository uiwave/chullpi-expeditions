"use client";

import { SlidersHorizontal } from "lucide-react";
import type { TourType } from "@/src/data/tours";

const destinations = ["Todos", "Cusco", "Arequipa", "Ica", "Puno"];

const durations = [
  { label: "Todos", value: "all" },
  { label: "1-2 Días", value: "1-2" },
  { label: "3-4 Días", value: "3-4" },
  { label: "5+ Días", value: "5+" },
];

const types: TourType[] = ["Aventura", "Cultural", "Trekking", "Naturaleza"];

interface FilterToursProps {
  selectedDestination: string;
  selectedDuration: string;
  selectedType: string;
  minPrice: string;
  maxPrice: string;
  onDestinationChange: (destination: string) => void;
  onDurationChange: (duration: string) => void;
  onTypeChange: (type: string) => void;
  onMinPriceChange: (price: string) => void;
  onMaxPriceChange: (price: string) => void;
  onReset: () => void;
}

export default function FilterTours({
  selectedDestination,
  selectedDuration,
  selectedType,
  minPrice,
  maxPrice,
  onDestinationChange,
  onDurationChange,
  onTypeChange,
  onMinPriceChange,
  onMaxPriceChange,
  onReset,
}: FilterToursProps) {
  const hasActiveFilters =
    selectedDestination !== "Todos" ||
    selectedDuration !== "all" ||
    selectedType !== "" ||
    minPrice !== "" ||
    maxPrice !== "";

  return (
    <div className="bg-card border border-border rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <SlidersHorizontal className="w-5 h-5 text-primary" />
          <h3 className="font-heading text-xl tracking-wider text-white">
            Filtrar Tours
          </h3>
        </div>
        {hasActiveFilters && (
          <button
            onClick={onReset}
            className="text-sm text-primary hover:text-white transition-colors cursor-pointer"
          >
            Limpiar filtros
          </button>
        )}
      </div>

      <div className="space-y-5">
        <div>
          <h4 className="font-heading text-sm tracking-wider text-foreground mb-3">
            Destino
          </h4>
          <div className="flex flex-wrap gap-2">
            {destinations.map((dest) => (
              <button
                key={dest}
                onClick={() => onDestinationChange(dest)}
                className={`px-4 py-2 rounded-full font-heading text-sm tracking-wider transition-all cursor-pointer ${
                  selectedDestination === dest
                    ? "bg-primary text-white"
                    : "bg-surface text-foreground hover:bg-primary/20 hover:text-white border border-border"
                }`}
              >
                {dest}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-heading text-sm tracking-wider text-foreground mb-3">
            Duración
          </h4>
          <div className="flex flex-wrap gap-2">
            {durations.map((dur) => (
              <button
                key={dur.value}
                onClick={() => onDurationChange(dur.value)}
                className={`px-4 py-2 rounded-full font-heading text-sm tracking-wider transition-all cursor-pointer ${
                  selectedDuration === dur.value
                    ? "bg-primary text-white"
                    : "bg-surface text-foreground hover:bg-primary/20 hover:text-white border border-border"
                }`}
              >
                {dur.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-heading text-sm tracking-wider text-foreground mb-3">
            Tipo de Experiencia
          </h4>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => onTypeChange("")}
              className={`px-4 py-2 rounded-full font-heading text-sm tracking-wider transition-all cursor-pointer ${
                selectedType === ""
                  ? "bg-primary text-white"
                  : "bg-surface text-foreground hover:bg-primary/20 hover:text-white border border-border"
              }`}
            >
              Todos
            </button>
            {types.map((type) => (
              <button
                key={type}
                onClick={() => onTypeChange(type)}
                className={`px-4 py-2 rounded-full font-heading text-sm tracking-wider transition-all cursor-pointer ${
                  selectedType === type
                    ? "bg-primary text-white"
                    : "bg-surface text-foreground hover:bg-primary/20 hover:text-white border border-border"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-heading text-sm tracking-wider text-foreground mb-3">
            Rango de Precio (USD)
          </h4>
          <div className="flex items-center gap-3">
            <input
              type="number"
              placeholder="Mín"
              value={minPrice}
              onChange={(e) => onMinPriceChange(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-surface border border-border text-white font-heading tracking-wider placeholder:text-muted focus:outline-none focus:border-primary transition-colors"
            />
            <span className="text-muted">—</span>
            <input
              type="number"
              placeholder="Máx"
              value={maxPrice}
              onChange={(e) => onMaxPriceChange(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-surface border border-border text-white font-heading tracking-wider placeholder:text-muted focus:outline-none focus:border-primary transition-colors"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
