"use client";

import { Search, LayoutGrid, List, ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";

interface ToursHeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  viewMode: "grid" | "list";
  onViewChange: (mode: "grid" | "list") => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
}

export default function ToursHeader({
  searchQuery,
  onSearchChange,
  viewMode,
  onViewChange,
  sortBy,
  onSortChange,
}: ToursHeaderProps) {
  const t = useTranslations("tours.header");

  return (
    <header className="flex flex-col sm:flex-row items-center justify-between gap-4 w-full">
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
          placeholder={t("searchPlaceholder", { defaultValue: "Search" })}
          className="w-full h-12 pl-6 pr-14 rounded-full bg-[#E8F5F8] dark:bg-secondary/20 text-secondary text-sm placeholder:text-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
        />
        <button
          type="button"
          aria-label={t("searchButton", { defaultValue: "Search tours" })}
          className="absolute right-1.5 top-1/2 -translate-y-1/2 size-9 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary/90 transition-colors cursor-pointer"
        >
          <Search className="size-4" aria-hidden="true" />
        </button>
      </div>

      {/* Selector de Vista y Ordenamiento */}
      <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
        <div className="flex items-center gap-1.5 bg-[#E8F5F8] dark:bg-secondary/20 p-1 rounded-xl">
          <button
            type="button"
            onClick={() => onViewChange("grid")}
            aria-label={t("gridView", { defaultValue: "Grid view" })}
            className={`p-2 rounded-lg transition-colors cursor-pointer ${
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
            className={`p-2 rounded-lg transition-colors cursor-pointer ${
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
            className="appearance-none h-11 pl-4 pr-10 rounded-xl border border-border/60 bg-white dark:bg-secondary/20 text-secondary text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer"
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
            className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-foreground/60 pointer-events-none"
            aria-hidden="true"
          />
        </div>
      </div>
    </header>
  );
}