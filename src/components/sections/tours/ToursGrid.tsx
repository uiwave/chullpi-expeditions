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
    <section className="w-full overflow-hidden">
      <div className="uw-container uw-section pt-0">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
      </div>
    </section>
  );
}
