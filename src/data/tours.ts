export type TourType = "Aventura" | "Cultural" | "Trekking" | "Naturaleza";

export interface Tour {
  title: string;
  slug: string;
  image: string;
  price: number;
  duration: string;
  durationDays: number;
  destination: string;
  type: TourType;
}

export const tourTypes: TourType[] = [
  "Aventura",
  "Cultural",
  "Trekking",
  "Naturaleza",
];

export function getTourBySlug(slug: string): Tour | undefined {
  return tours.find((t) => t.slug === slug);
}

export const tours: Tour[] = [
  {
    title: "MACHU PICCHU CLASSIC TREK",
    slug: "cusco/machu-picchu-classic-trek",
    image: "/images/Tour-a-Machu-Picchu-03.webp",
    price: 350,
    duration: "04 DÍAS",
    durationDays: 4,
    destination: "CUSCO",
    type: "Trekking",
  },
  {
    title: "SACRED VALLEY & RAINBOW MOUNTAIN",
    slug: "cusco/sacred-valley-rainbow-mountain",
    image: "/images/Montana-de-colores-06.webp",
    price: 280,
    duration: "03 DÍAS",
    durationDays: 3,
    destination: "CUSCO",
    type: "Aventura",
  },
  {
    title: "CITY TOUR CUSCO",
    slug: "cusco/city-tour-cusco",
    image: "/images/City-Tour-Cusco-03.webp",
    price: 120,
    duration: "01 DÍA",
    durationDays: 1,
    destination: "CUSCO",
    type: "Cultural",
  },
  {
    title: "COLCA CANYON & HOT SPRINGS",
    slug: "arequipa/colca-canyon-hot-springs",
    image: "/images/Canon-del-Colca-y-Aguas-Termales-de-La-Calera-03.webp",
    price: 220,
    duration: "02 DÍAS",
    durationDays: 2,
    destination: "AREQUIPA",
    type: "Naturaleza",
  },
  {
    title: "WHITE CITY & VOLCANOES",
    slug: "arequipa/white-city-volcanoes",
    image: "/images/Ascenso-al-volcan-Chachani-01.webp",
    price: 190,
    duration: "03 DÍAS",
    durationDays: 3,
    destination: "AREQUIPA",
    type: "Aventura",
  },
  {
    title: "SILLAR ROUTE & CULEBRILLAS",
    slug: "arequipa/sillar-route-culebrillas",
    image: "/images/Tours-Salinas-y-ruta-del-Sillar-Culebrillas-02.webp",
    price: 95,
    duration: "01 DÍA",
    durationDays: 1,
    destination: "AREQUIPA",
    type: "Cultural",
  },
  {
    title: "HUACACHINA BUGGY & SANDBOARDING",
    slug: "ica/huacachina-buggy-sandboarding",
    image: "/images/Tour-Huacachina-Buggy-Sandboarding-02.webp",
    price: 150,
    duration: "01 DÍA",
    durationDays: 1,
    destination: "ICA",
    type: "Aventura",
  },
  {
    title: "PARACAS RESERVE & BALLESTAS ISLANDS",
    slug: "ica/paracas-reserve-ballestas-islands",
    image: "/images/Tour-por-la-Reserva-Nacional-de-Paracas-01.webp",
    price: 200,
    duration: "02 DÍAS",
    durationDays: 2,
    destination: "ICA",
    type: "Naturaleza",
  },
  {
    title: "TITICACA LAKE & FLOATING ISLANDS",
    slug: "puno/titicaca-lake-floating-islands",
    image: "/images/puno.webp",
    price: 250,
    duration: "02 DÍAS",
    durationDays: 2,
    destination: "PUNO",
    type: "Cultural",
  },
  {
    title: "7 LAGUNAS DEL AUSANGATE",
    slug: "puno/7-lagunas-del-ausangate",
    image: "/images/Tour-7-Lagunas-del-Ausangate-01.webp",
    price: 320,
    duration: "03 DÍAS",
    durationDays: 3,
    destination: "PUNO",
    type: "Trekking",
  },
];
