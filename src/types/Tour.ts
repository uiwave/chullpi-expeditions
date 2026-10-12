export interface ItineraryBlock {
  text: string;
  items?: string[];
  blocks?: ItineraryBlock[];
}

export interface TourItineraryDay {
  title: string;
  subtitle?: string;
  paragraphs: ItineraryBlock[];
}

export interface AdditionalItem {
  name: string;
  price?: string;
  description?: string;
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
  description?: string;
  shortItinerary?: string[];
  itinerary?: TourItineraryDay[];
  included?: string[];
  notIncluded?: string[];
  recommendations?: string[];
  additionals?: TourAdditionalGroup[];
}
