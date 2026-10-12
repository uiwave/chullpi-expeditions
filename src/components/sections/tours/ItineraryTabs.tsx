"use client";

import { useState } from "react";
import { cn } from "cn";
import { CircleCheck } from "lucide-react";
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
      <div
        role="tablist"
        className="mb-10 flex flex-wrap gap-6"
      >
        {days.map((item, index) => (
          <button
            key={item.day}
            type="button"
            role="tab"
            aria-selected={index === active}
            onClick={() => setActive(index)}
            className={cn(
              "cursor-pointer rounded-lg px-[22px] py-[7px] text-base font-medium transition-colors",
              index === active
                ? "bg-primary text-white"
                : "bg-[#E9F6F9] text-secondary hover:text-primary",
            )}
          >
            {item.day}
          </button>
        ))}
      </div>

      <ul role="tabpanel" className="space-y-2.5">
        {current.items.map((item) => (
          <li
            key={item}
            className="text-foreground relative pl-10 text-lg leading-7"
          >
            <CircleCheck
              className="text-primary absolute top-0.5 left-0 size-6"
              aria-hidden="true"
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
