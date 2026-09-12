"use client";

import { useTranslations } from "next-intl";
import { Search } from "lucide-react";
import TourCard from "./TourCard";
import type { Tour } from "@/src/data/tours";

interface ToursGridProps {
  tours: Tour[];
}

export default function ToursGrid({ tours }: ToursGridProps) {
  const t = useTranslations("tours.grid");

  if (tours.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <Search className="w-16 h-16 text-muted mb-4" />
        <h3 className="font-heading text-2xl text-white mb-2">
          {t("not_found")}
        </h3>
        <p className="text-foreground max-w-md">
          {t("try_adjust")}
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
      {tours.map((tour) => (
        <TourCard key={tour.slug} tour={tour} />
      ))}
    </div>
  );
}
