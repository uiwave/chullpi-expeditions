"use client";

import { Search, ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";
import { DESTINATIONS } from "@/data/destinations";

interface ToursHeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onSearchSubmit?: () => void;
  destination: string;
  onDestinationChange: (destination: string) => void;
}

export default function ToursHeader({
  searchQuery,
  onSearchChange,
  onSearchSubmit,
  destination,
  onDestinationChange,
}: ToursHeaderProps) {
  const t = useTranslations("tours.header");
  const tFilter = useTranslations("tours.searchAndFilter");

  return (
    <header className="flex w-full flex-col items-center justify-between gap-4 sm:flex-row">
      {/* Buscador Redondeado */}
      <div className="relative w-full sm:w-80">
        <label htmlFor="tour-search" className="sr-only">
          {t("searchPlaceholder", { defaultValue: "Search" })}
        </label>
        <input
          id="tour-search"
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              onSearchSubmit?.();
            }
          }}
          placeholder={t("searchPlaceholder", { defaultValue: "Search" })}
          className="dark:bg-secondary/20 text-secondary placeholder:text-foreground/60 focus:ring-primary h-12 w-full rounded-full bg-[#E8F5F8] pr-14 pl-6 text-sm transition-all focus:ring-2 focus:outline-none"
        />
        <button
          type="button"
          onClick={() => onSearchSubmit?.()}
          aria-label={t("searchButton", { defaultValue: "Search tours" })}
          className="bg-primary hover:bg-primary/90 absolute top-1/2 right-1.5 flex size-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full text-white transition-colors"
        >
          <Search className="size-4" aria-hidden="true" />
        </button>
      </div>

      {/* Selector de Destino */}
      <div className="flex w-full flex-wrap items-center justify-end gap-3 sm:w-auto">
        {/* Dropdown de Destino */}
        <div className="relative">
          <select
            value={destination}
            onChange={(e) => onDestinationChange(e.target.value)}
            aria-label={tFilter("filterByDestination")}
            className="border-border/60 dark:bg-secondary/20 text-secondary focus:ring-primary h-11 max-w-50 cursor-pointer appearance-none rounded-xl border bg-white pr-10 pl-4 text-sm font-medium focus:ring-2 focus:outline-none sm:max-w-55"
          >
            <option value="">{tFilter("allDestinations")}</option>
            {DESTINATIONS.map((dest) => (
              <option key={dest.slug} value={dest.slug}>
                {dest.title}
              </option>
            ))}
          </select>
          <ChevronDown
            className="text-foreground/60 pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2"
            aria-hidden="true"
          />
        </div>
      </div>
    </header>
  );
}
