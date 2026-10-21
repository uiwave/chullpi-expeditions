import ItineraryBlocks from "./ItineraryBlocks";
import type { ItineraryBlock, ShortItineraryEntry } from "@/types/Tour";

/**
 * Normaliza el itinerario corto al formato de bloques.
 * Los strings sueltos se agrupan en un único bloque de lista para mantener
 * exactamente el mismo render que antes.
 */
function toBlocks(items: ShortItineraryEntry[]): ItineraryBlock[] {
  const blocks: ItineraryBlock[] = [];
  let plain: string[] = [];

  const flush = () => {
    if (plain.length) {
      blocks.push({ items: [...plain] });
      plain = [];
    }
  };

  for (const item of items) {
    if (typeof item === "string") {
      plain.push(item);
    } else {
      flush();
      blocks.push(item);
    }
  }

  flush();

  return blocks;
}

export default function ShortItinerary({
  items,
}: {
  items: ShortItineraryEntry[];
}) {
  return <ItineraryBlocks blocks={toBlocks(items)} />;
}
