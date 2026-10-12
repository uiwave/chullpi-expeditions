"use client";

import { useState } from "react";
import { cn } from "cn";
import ItineraryDay from "./ItineraryDay";
import type { TourItineraryDay } from "@/types/Tour";

interface ItineraryTabsProps {
  days: TourItineraryDay[];
}

export default function ItineraryTabs({ days }: ItineraryTabsProps) {
  const [active, setActive] = useState(0);
  const current = days[active];

  if (!current) return null;

  return (
    <div>
      <div role="tablist" className="mb-10 flex flex-wrap gap-6">
        {days.map((day, index) => (
          <button
            key={day.title}
            type="button"
            role="tab"
            aria-selected={index === active}
            onClick={() => setActive(index)}
            className={cn(
              "cursor-pointer rounded-lg px-[22px] py-[7px] text-base font-medium transition-colors",
              index === active
                ? "bg-secondary text-white"
                : "text-secondary hover:text-primary bg-[#E9F6F9]",
            )}
          >
            {day.title}
          </button>
        ))}
      </div>

      <div role="tabpanel">
        <ItineraryDay day={current} />
      </div>
    </div>
  );
}
