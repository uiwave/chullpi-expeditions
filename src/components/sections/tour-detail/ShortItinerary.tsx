"use client";

import { useTranslations } from "next-intl";
import { Check } from "lucide-react";

interface ShortItineraryProps {
  items: string[];
}

export default function ShortItinerary({ items }: ShortItineraryProps) {
  const t = useTranslations("tour_detail");

  return (
    <section>
      <h2 className="font-heading text-2xl tracking-wider text-white mb-4">
        {t("short_itinerary")}
      </h2>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/20">
              <Check className="h-3.5 w-3.5 text-primary" />
            </span>
            <span className="text-foreground">{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
