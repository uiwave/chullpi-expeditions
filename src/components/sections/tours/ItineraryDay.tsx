import ItineraryBlocks from "./ItineraryBlocks";
import type { TourItineraryDay } from "@/types/Tour";

export default function ItineraryDay({ day }: { day: TourItineraryDay }) {
  return (
    <div>
      {day.subtitle ? (
        <p className="text-primary mb-4 text-lg font-medium whitespace-pre-line">
          {day.subtitle}
        </p>
      ) : null}
      <ItineraryBlocks blocks={day.paragraphs} />
    </div>
  );
}
