"use client";

import { useState, useMemo, useCallback, useRef } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import FilterTours from "./FilterTours";
import ToursGrid from "./ToursGrid";
import Pagination from "./Pagination";
import { tours } from "@/src/data/tours";

const TOURS_PER_PAGE = 8;

export default function ToursClient() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const filterVersionRef = useRef(0);

  const [selectedDestination, setSelectedDestination] = useState(
    searchParams.get("destination") || "Todos"
  );
  const [selectedDuration, setSelectedDuration] = useState(
    searchParams.get("duration") || "all"
  );
  const [selectedType, setSelectedType] = useState(
    searchParams.get("type") || ""
  );
  const [minPrice, setMinPrice] = useState(searchParams.get("minPrice") || "");
  const [maxPrice, setMaxPrice] = useState(searchParams.get("maxPrice") || "");
  const [currentPage, setCurrentPage] = useState(
    Number(searchParams.get("page")) || 1
  );

  const filteredTours = useMemo(() => {
    return tours.filter((tour) => {
      if (
        selectedDestination !== "Todos" &&
        tour.destination !== selectedDestination.toUpperCase()
      ) {
        return false;
      }

      if (selectedDuration !== "all") {
        const [min, max] = selectedDuration
          .split("-")
          .map((v) => (v === "+" ? Infinity : Number(v.replace("+", ""))));
        if (selectedDuration === "5+") {
          if (tour.durationDays < 5) return false;
        } else {
          if (tour.durationDays < min || tour.durationDays > max) return false;
        }
      }

      if (selectedType && tour.type !== selectedType) return false;

      if (minPrice && tour.price < Number(minPrice)) return false;
      if (maxPrice && tour.price > Number(maxPrice)) return false;

      return true;
    });
  }, [selectedDestination, selectedDuration, selectedType, minPrice, maxPrice]);

  const totalPages = Math.ceil(filteredTours.length / TOURS_PER_PAGE);
  const effectivePage = Math.min(currentPage, totalPages || 1);

  const paginatedTours = useMemo(() => {
    const start = (effectivePage - 1) * TOURS_PER_PAGE;
    return filteredTours.slice(start, start + TOURS_PER_PAGE);
  }, [filteredTours, effectivePage]);

  const updateUrl = useCallback(
    (dest: string, dur: string, type: string, min: string, max: string, page: number) => {
      const params = new URLSearchParams();
      if (dest !== "Todos") params.set("destination", dest);
      if (dur !== "all") params.set("duration", dur);
      if (type) params.set("type", type);
      if (min) params.set("minPrice", min);
      if (max) params.set("maxPrice", max);
      if (page > 1) params.set("page", String(page));

      const queryString = params.toString();
      router.replace(`/tours${queryString ? `?${queryString}` : ""}`, {
        scroll: false,
      });
    },
    [router]
  );

  const handleDestinationChange = (dest: string) => {
    filterVersionRef.current += 1;
    setSelectedDestination(dest);
    setCurrentPage(1);
    updateUrl(dest, selectedDuration, selectedType, minPrice, maxPrice, 1);
  };

  const handleDurationChange = (dur: string) => {
    filterVersionRef.current += 1;
    setSelectedDuration(dur);
    setCurrentPage(1);
    updateUrl(selectedDestination, dur, selectedType, minPrice, maxPrice, 1);
  };

  const handleTypeChange = (type: string) => {
    filterVersionRef.current += 1;
    setSelectedType(type);
    setCurrentPage(1);
    updateUrl(selectedDestination, selectedDuration, type, minPrice, maxPrice, 1);
  };

  const handleMinPriceChange = (price: string) => {
    setMinPrice(price);
    setCurrentPage(1);
    updateUrl(selectedDestination, selectedDuration, selectedType, price, maxPrice, 1);
  };

  const handleMaxPriceChange = (price: string) => {
    setMaxPrice(price);
    setCurrentPage(1);
    updateUrl(selectedDestination, selectedDuration, selectedType, minPrice, price, 1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    updateUrl(selectedDestination, selectedDuration, selectedType, minPrice, maxPrice, page);
  };

  const handleReset = () => {
    filterVersionRef.current += 1;
    setSelectedDestination("Todos");
    setSelectedDuration("all");
    setSelectedType("");
    setMinPrice("");
    setMaxPrice("");
    setCurrentPage(1);
    updateUrl("Todos", "all", "", "", "", 1);
  };

  return (
    <section className="w-full">
      <div className="uw-container uw-section">
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8">
          <aside>
            <div className="lg:sticky lg:top-28">
              <FilterTours
                selectedDestination={selectedDestination}
                selectedDuration={selectedDuration}
                selectedType={selectedType}
                minPrice={minPrice}
                maxPrice={maxPrice}
                onDestinationChange={handleDestinationChange}
                onDurationChange={handleDurationChange}
                onTypeChange={handleTypeChange}
                onMinPriceChange={handleMinPriceChange}
                onMaxPriceChange={handleMaxPriceChange}
                onReset={handleReset}
              />
            </div>
          </aside>

          <div>
            <div className="mb-6">
              <p className="text-foreground">
                <span className="font-heading text-white text-lg">
                  {filteredTours.length}
                </span>{" "}
                {filteredTours.length === 1 ? "tour encontrado" : "tours encontrados"}
              </p>
            </div>

            <ToursGrid tours={paginatedTours} />

            <Pagination
              currentPage={effectivePage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
