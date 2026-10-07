"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import ToursHeader from "./ToursHeader";

const SEARCH_DEBOUNCE_MS = 300;

export default function ToursHeaderWrapper() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const urlQ = searchParams.get("q") ?? "";

  const [searchQuery, setSearchQuery] = useState(urlQ);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState("default");

  const urlQRef = useRef(urlQ);
  const searchParamsRef = useRef(searchParams);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    searchParamsRef.current = searchParams;
  }, [searchParams]);

  useEffect(() => {
    if (urlQ === urlQRef.current) return;
    urlQRef.current = urlQ;
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    setSearchQuery(urlQ);
  }, [urlQ]);

  const applySearch = useCallback(
    (value: string) => {
      if (value === urlQRef.current) return;
      urlQRef.current = value;

      const params = new URLSearchParams(searchParamsRef.current.toString());
      if (value) {
        params.set("q", value);
      } else {
        params.delete("q");
      }
      params.delete("page");

      const qs = params.toString();
      router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
    },
    [pathname, router],
  );

  useEffect(() => {
    if (searchQuery === urlQRef.current) return;
    timerRef.current = setTimeout(() => {
      timerRef.current = null;
      applySearch(searchQuery);
    }, SEARCH_DEBOUNCE_MS);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [searchQuery, applySearch]);

  const handleSearchSubmit = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    applySearch(searchQuery);
  };

  return (
    <ToursHeader
      searchQuery={searchQuery}
      onSearchChange={setSearchQuery}
      onSearchSubmit={handleSearchSubmit}
      viewMode={viewMode}
      onViewChange={setViewMode}
      sortBy={sortBy}
      onSortChange={setSortBy}
    />
  );
}
