"use client";

import { useSearchParams } from "next/navigation";
import { cn } from "cn";
import { Link, usePathname } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { TOUR_TYPES } from "./filters/filterOptions";

interface TourTypeFilterProps {
  counts: Record<string, number>;
}

export default function TourTypeFilter({ counts }: TourTypeFilterProps) {
  const t = useTranslations("tours");
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const activeTipo = searchParams.get("tipo") ?? "";
  const totalCount = Object.values(counts).reduce((sum, n) => sum + n, 0);

  const buildHref = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set("tipo", value);
    } else {
      params.delete("tipo");
    }
    params.delete("page");

    const qs = params.toString();
    return qs ? `${pathname}?${qs}` : pathname;
  };

  const items = [
    { value: "", label: t("searchAndFilter.allTypes"), count: totalCount },
    ...TOUR_TYPES.map(({ value, labelKey }) => ({
      value,
      label: t(`filter.type.options.${labelKey}`),
      count: counts[value] ?? 0,
    })),
  ];

  return (
    <div className="dark:bg-secondary/10 border-border/60 rounded-2xl border bg-white p-6 shadow-xs">
      <div className="relative mb-6 pb-2">
        <h2 className="font-heading text-secondary text-xl font-semibold">
          {t("searchAndFilter.filterByType")}
        </h2>
        <span className="bg-primary absolute bottom-0 left-0 h-0.5 w-12 rounded-full" />
      </div>

      <ul className="space-y-3.5" role="list">
        {items.map((item) => {
          const isActive = item.value === activeTipo;

          return (
            <li key={item.value || "all"}>
              <Link
                href={buildHref(item.value)}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "text-foreground hover:text-primary group flex items-center justify-between py-2.5 transition-colors",
                  isActive && "text-primary",
                )}
              >
                <div className="flex items-center gap-2.5">
                  <span
                    className={cn(
                      "text-primary text-lg leading-none font-bold transition-transform group-hover:scale-125",
                      isActive && "scale-125",
                    )}
                  >
                    ❖
                  </span>
                  <span className="text-sm font-medium sm:text-base">
                    {item.label}
                  </span>
                </div>
                <span className="text-foreground/60 text-xs font-medium">
                  ({item.count})
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
