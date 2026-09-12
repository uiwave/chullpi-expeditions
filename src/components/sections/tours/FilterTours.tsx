"use client";

import { useTranslations } from "next-intl";
import { SlidersHorizontal } from "lucide-react";
import type { TourType } from "@/src/data/tours";

const durationOptions = [
  { value: "all", labelKey: "all" },
  { value: "1-2", labelKey: "days_1_2" },
  { value: "3-4", labelKey: "days_3_4" },
  { value: "5+", labelKey: "days_5_plus" },
];

const typeOptions: { value: TourType; labelKey: string }[] = [
  { value: "Aventura", labelKey: "aventura" },
  { value: "Cultural", labelKey: "cultural" },
  { value: "Trekking", labelKey: "trekking" },
  { value: "Naturaleza", labelKey: "naturaleza" },
];

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
  const t = useTranslations("tours.filter");
  const tNav = useTranslations("nav");

  const destinations = [
    { value: "Todos", labelKey: "all" },
    { value: "Cusco", labelKey: "cusco" },
    { value: "Arequipa", labelKey: "arequipa" },
    { value: "Ica", labelKey: "ica" },
    { value: "Puno", labelKey: "puno" },
  ];

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
            {t("title")}
          </h3>
        </div>
        {hasActiveFilters && (
          <button
            onClick={onReset}
            className="text-sm text-primary hover:text-white transition-colors cursor-pointer"
          >
            {t("clear")}
          </button>
        )}
      </div>

      <div className="space-y-5">
        <div>
          <h4 className="font-heading text-sm tracking-wider text-foreground mb-3">
            {t("destination")}
          </h4>
          <div className="flex flex-wrap gap-2">
            {destinations.map((dest) => (
              <button
                key={dest.value}
                onClick={() => onDestinationChange(dest.value)}
                className={`px-4 py-2 rounded-full font-heading text-sm tracking-wider transition-all cursor-pointer ${
                  selectedDestination === dest.value
                    ? "bg-primary text-white"
                    : "bg-surface text-foreground hover:bg-primary/20 hover:text-white border border-border"
                }`}
              >
                {dest.labelKey === "all" ? t("all") : tNav(dest.labelKey)}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-heading text-sm tracking-wider text-foreground mb-3">
            {t("duration")}
          </h4>
          <div className="flex flex-wrap gap-2">
            {durationOptions.map((dur) => (
              <button
                key={dur.value}
                onClick={() => onDurationChange(dur.value)}
                className={`px-4 py-2 rounded-full font-heading text-sm tracking-wider transition-all cursor-pointer ${
                  selectedDuration === dur.value
                    ? "bg-primary text-white"
                    : "bg-surface text-foreground hover:bg-primary/20 hover:text-white border border-border"
                }`}
              >
                {t(dur.labelKey)}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-heading text-sm tracking-wider text-foreground mb-3">
            {t("type")}
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
              {t("all")}
            </button>
            {typeOptions.map((type) => (
              <button
                key={type.value}
                onClick={() => onTypeChange(type.value)}
                className={`px-4 py-2 rounded-full font-heading text-sm tracking-wider transition-all cursor-pointer ${
                  selectedType === type.value
                    ? "bg-primary text-white"
                    : "bg-surface text-foreground hover:bg-primary/20 hover:text-white border border-border"
                }`}
              >
                {t(type.labelKey)}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-heading text-sm tracking-wider text-foreground mb-3">
            {t("price_range")}
          </h4>
          <div className="flex items-center gap-3">
            <input
              type="number"
              placeholder={t("min")}
              value={minPrice}
              onChange={(e) => onMinPriceChange(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-surface border border-border text-white font-heading tracking-wider placeholder:text-muted focus:outline-none focus:border-primary transition-colors"
            />
            <span className="text-muted">—</span>
            <input
              type="number"
              placeholder={t("max")}
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
