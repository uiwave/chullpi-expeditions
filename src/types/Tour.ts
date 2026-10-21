export interface ItineraryBlock {
  text?: string;
  items?: string[];
  blocks?: ItineraryBlock[];
}

/** Bloque con párrafo + lista + sub-bloques, o un simple string heredado. */
export type ContentBlock = ItineraryBlock | string;

/** Lista de contenido: acepta el formato de bloques o el legacy de strings. */
export type ContentList = ContentBlock[];

export interface TourItineraryDay {
  title: string;
  subtitle?: string;
  paragraphs: ItineraryBlock[];
}

export interface AdditionalItem {
  name: string;
  price?: string;
  description?: string | ItineraryBlock[];
  blocks?: AdditionalItem[];
}

export interface TourAdditionalGroup {
  title?: string;
  subtitle?: string;
  items: AdditionalItem[];
}

export interface Tour {
  slug: string;
  destination: string;
  image: string;
  title: string;
  price: number;
  type: string;
  typeKey: string;
  duration: string;
  popular: boolean;
  description?: string | ItineraryBlock[];
  shortItinerary?: ContentList;
  itinerary?: TourItineraryDay[];
  included?: ContentList;
  notIncluded?: ContentList;
  recommendations?: ContentList;
  additionals?: TourAdditionalGroup[];
}
