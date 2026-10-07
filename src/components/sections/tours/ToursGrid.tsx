import TourCard from "@/components/uiwave/TourCard";
import Pagination from "@/components/sections/tours/Pagination";
import { TOURS_PER_PAGE } from "@/lib/tour-filters";
import type { Tour } from "@/types/Tour";

interface Props {
  tours: Tour[];
  page: number;
  totalPages: number;
  total: number;
  query: Record<string, string>;
}

export default function ToursGrid({
  tours,
  page,
  totalPages,
  total,
  query,
}: Props) {
  return (
    <>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {tours.map((tour) => (
          <TourCard key={tour.slug} data={tour} />
        ))}
      </div>
      <Pagination
        page={page}
        totalPages={totalPages}
        total={total}
        perPage={TOURS_PER_PAGE}
        query={query}
      />
    </>
  );
}
