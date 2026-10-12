export interface TourItineraryDay {
  day: string;
  items: string[];
}

export interface TourAdditional {
  name: string;
  price?: string;
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
  additionals?: TourAdditional[];
}
