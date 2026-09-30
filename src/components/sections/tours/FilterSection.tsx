"use client";

import { useState, useEffect } from "react";
import { MapPin, Compass, Clock } from "lucide-react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { DESTINATIONS } from "@/data/destinations";
import { FilterField } from "./filters/FilterField";
import { FilterActions } from "./filters/FilterActions";
import { DURATION_OPTIONS, TOUR_TYPES } from "./filters/filterOptions";
import { useTranslations } from "next-intl";

const ALL_OPTION = "todos";

export function FilterSection() {
  const t = useTranslations("tours");

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [pendingDestino, setPendingDestino] = useState("");
  const [pendingTipo, setPendingTipo] = useState("");
  const [pendingDuracion, setPendingDuracion] = useState("");
  const [pendingPrecio, setPendingPrecio] = useState("");

  useEffect(() => {
    setPendingDestino(searchParams.get("destino") || "");
    setPendingTipo(searchParams.get("tipo") || "");
    setPendingDuracion(searchParams.get("duracion") || "");
    setPendingPrecio(searchParams.get("precio") || "");
  }, [searchParams]);

  const handleApplyFilters = () => {
    const params = new URLSearchParams();
    if (isFilterable(pendingDestino)) params.set("destino", pendingDestino);
    if (isFilterable(pendingTipo)) params.set("tipo", pendingTipo);
    if (isFilterable(pendingDuracion)) params.set("duracion", pendingDuracion);
    if (isFilterable(pendingPrecio)) params.set("precio", pendingPrecio);
    router.push(`${pathname}?${params.toString()}`);
  };

  const handleClearFilters = () => {
    setPendingDestino("");
    setPendingTipo("");
    setPendingDuracion("");
    setPendingPrecio("");
    router.push(pathname);
  };

  return (
    <section className="relative z-30 w-full">
      <div className="uw-container uw-section">
        <div className="bg-card relative rounded-2xl">
          <div className="absolute inset-0 overflow-hidden rounded-2xl">
            <div className="bg-primary absolute top-0 left-10 h-40 w-40 -translate-y-1/2 rounded-full blur-2xl"></div>
          </div>
          <img
            src="/images/bg/boking-img.png"
            alt=""
            className="absolute bottom-0 left-10 z-10 hidden h-[calc(100%+32px)] max-h-none object-contain md:block"
          />
          <div className="relative z-20 p-6 sm:p-8">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:items-end">
              <div className="hidden md:col-span-3 md:block lg:col-span-3"></div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:col-span-9 lg:col-span-9 lg:flex lg:items-end lg:gap-0">
                <FilterField
                  icon={MapPin}
                  label={t("filter.destination.label")}
                  value={pendingDestino}
                  onValueChange={setPendingDestino}
                  placeholder={t("filter.destination.placeholder")}
                  allLabel={t("filter.all")}
                  options={DESTINATIONS.map((dest) => ({
                    value: dest.slug,
                    label: dest.title,
                  }))}
                />
                <FilterField
                  icon={Compass}
                  label={t("filter.type.label")}
                  value={pendingTipo}
                  onValueChange={setPendingTipo}
                  placeholder={t("filter.type.placeholder")}
                  allLabel={t("filter.all")}
                  options={TOUR_TYPES.map((type) => ({
                    value: type.value,
                    label: t(`filter.type.options.${type.labelKey}`),
                  }))}
                />
                <FilterField
                  icon={Clock}
                  label={t("filter.duration.label")}
                  value={pendingDuracion}
                  onValueChange={setPendingDuracion}
                  placeholder={t("filter.duration.placeholder")}
                  allLabel={t("filter.all")}
                  options={DURATION_OPTIONS.map((option) => ({
                    value: option.value,
                    label: t(`filter.duration.options.${option.labelKey}`),
                  }))}
                />
                {/* <FilterField
                icon={DollarSign}
                label={t("filter.price.label")}
                value={pendingPrecio}
                onValueChange={setPendingPrecio}
                placeholder={t("filter.price.placeholder")}
                allLabel={t("filter.all")}
                options={PRICE_OPTIONS}
              /> */}
                <FilterActions
                  onApply={handleApplyFilters}
                  onClear={handleClearFilters}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function isFilterable(value: string): boolean {
  return Boolean(value) && value !== ALL_OPTION;
}
