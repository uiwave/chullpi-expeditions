import type {
  AdditionalItem,
  ContentList,
  ItineraryBlock,
  TourAdditionalGroup,
  TourItineraryDay,
} from "@/types/Tour";

/**
 * Normaliza una lista de contenido al formato de bloques.
 * Los strings legacy se agrupan en un único bloque de lista para mantener
 * exactamente el mismo render que antes.
 */
export function toListBlocks(content?: ContentList): ItineraryBlock[] {
  if (!content?.length) return [];

  const blocks: ItineraryBlock[] = [];
  let plain: string[] = [];

  const flush = () => {
    if (plain.length) {
      blocks.push({ items: [...plain] });
      plain = [];
    }
  };

  for (const item of content) {
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

/**
 * Normaliza la descripción (string legacy o bloques) a bloques.
 * Un string se parte por saltos de línea, un párrafo por bloque.
 */
export function toParagraphBlocks(
  content?: string | ItineraryBlock[],
): ItineraryBlock[] {
  if (!content) return [];

  if (typeof content === "string") {
    return content
      .split(/\n+/)
      .map((text) => text.trim())
      .filter(Boolean)
      .map((text) => ({ text }));
  }

  return content;
}

/** Indica si los bloques tienen contenido real (texto, items o sub-bloques). */
export function hasContent(blocks: ItineraryBlock[]): boolean {
  return blocks.some(
    (block) =>
      Boolean(block.text?.trim()) ||
      Boolean(block.items?.some((item) => item.trim())) ||
      Boolean(block.blocks?.length),
  );
}

function hasItemContent(item: AdditionalItem): boolean {
  return (
    Boolean(item.name?.trim()) ||
    Boolean(item.price?.trim()) ||
    hasContent(toParagraphBlocks(item.description)) ||
    Boolean(item.blocks?.some(hasItemContent))
  );
}

/** Indica si el itinerario detallado tiene algún día con contenido real. */
export function hasItineraryContent(days?: TourItineraryDay[]): boolean {
  return Boolean(
    days?.some(
      (day) =>
        Boolean(day.title?.trim()) ||
        Boolean(day.subtitle?.trim()) ||
        hasContent(day.paragraphs),
    ),
  );
}

/** Indica si los grupos de adicionales tienen algún item con contenido real. */
export function hasAdditionalsContent(groups?: TourAdditionalGroup[]): boolean {
  return Boolean(
    groups?.some(
      (group) =>
        Boolean(group.title?.trim()) ||
        Boolean(group.subtitle?.trim()) ||
        group.items.some(hasItemContent),
    ),
  );
}
