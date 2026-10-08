"use client";

import { Search, LayoutGrid, List, ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";

interface ToursHeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onSearchSubmit?: () => void;
  viewMode: "grid" | "list";
  onViewChange: (mode: "grid" | "list") => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
}

export default function ToursHeader({
  searchQuery,
  onSearchChange,
  onSearchSubmit,
  viewMode,
  onViewChange,
  sortBy,
  onSortChange,
}: ToursHeaderProps) {
  const t = useTranslations("tours.header");

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
          className="bg-primary hover:bg-primary/90 absolute top-1/2 right-1.5 flex size-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full text-white transition-colors"
        >
          <Search className="size-4" aria-hidden="true" />
        </button>
      </div>

      {/* Selector de Vista y Ordenamiento */}
      <div className="flex w-full items-center justify-end gap-3 sm:w-auto">
        <div className="dark:bg-secondary/20 flex items-center gap-1.5 rounded-xl bg-[#E8F5F8] p-1">
          <button
            type="button"
            onClick={() => onViewChange("grid")}
            aria-label={t("gridView", { defaultValue: "Grid view" })}
            className={`cursor-pointer rounded-lg p-2 transition-colors ${
              viewMode === "grid"
                ? "bg-primary text-white shadow-xs"
                : "text-foreground hover:text-primary"
            }`}
          >
            <LayoutGrid className="size-4" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => onViewChange("list")}
            aria-label={t("listView", { defaultValue: "List view" })}
            className={`cursor-pointer rounded-lg p-2 transition-colors ${
              viewMode === "list"
                ? "bg-primary text-white shadow-xs"
                : "text-foreground hover:text-primary"
            }`}
          >
            <List className="size-4" aria-hidden="true" />
          </button>
        </div>

        {/* Dropdown de Ordenamiento */}
        <div className="relative">
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="border-border/60 dark:bg-secondary/20 text-secondary focus:ring-primary h-11 cursor-pointer appearance-none rounded-xl border bg-white pr-10 pl-4 text-sm font-medium focus:ring-2 focus:outline-none"
          >
            <option value="default">
              {t("sortDefault", { defaultValue: "Default Sorting" })}
            </option>
            <option value="price-low">
              {t("sortPriceLow", { defaultValue: "Price: Low to High" })}
            </option>
            <option value="price-high">
              {t("sortPriceHigh", { defaultValue: "Price: High to Low" })}
            </option>
            <option value="rating">
              {t("sortRating", { defaultValue: "Highest Rated" })}
            </option>
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
