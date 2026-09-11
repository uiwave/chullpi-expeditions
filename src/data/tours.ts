export type TourType = "Aventura" | "Cultural" | "Trekking" | "Naturaleza";

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
}

export interface Tour {
  title: string;
  slug: string;
  image: string;
  price: number;
  duration: string;
  durationDays: number;
  destination: string;
  type: TourType;
  description?: string;
  shortItinerary?: string[];
  itinerary?: ItineraryDay[];
  includes?: string[];
  notIncludes?: string[];
  recommendations?: string[];
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
    description:
      "Vive la experiencia definitiva trekking hacia Machu Picchu. Este tour de 4 días te lleva por senderos ancestrales rodeados de paisajes impresionantes, passes de alta montaña y la selva amazónica. Al llegar a la Puerta del Sol al amanecer, contemplarás la ciudadela sagrada de los incas envuelta en la niebla matutina.",
    shortItinerary: [
      "Día 1: Cusco - Ollantaytambo - Aguas Calientes",
      "Día 2: Trekking Inca hacia Machu Picchu",
      "Día 3: Exploración de Machu Picchu - Aguas Calientes",
      "Día 4: Retorno a Cusco",
    ],
    itinerary: [
      {
        day: 1,
        title: "Cusco - Ollantaytambo - Aguas Calientes",
        description:
          "Partimos temprano desde Cusco hacia Ollantaytambo, donde iniciaremos una caminata de 3 horas por senderos incas rodeados de paisajes andinos. Llegaremos a Aguas Calientes por la tarde, donde passaremos la noche en un hotel.",
      },
      {
        day: 2,
        title: "Trekking Inca hacia Machu Picchu",
        description:
          "Amanecemos con energía para el gran día. Cruzaremos el Puente del Inca y comenzaremos el ascenso de 1.5 horas hasta la Puerta del Sol. Desde allí, contemplaremos la ciudadela envuelta en niebla. Tendremos todo el día para explorar templos, plazas y la Huayna Picchu.",
      },
      {
        day: 3,
        title: "Exploración de Machu Picchu - Aguas Calientes",
        description:
          "Segundo día en Machu Picchu para explorar áreas que no visitamos el día anterior. Opcionalmente podemos visitar la Huayna Picchu o el Monte Machu Picchu. Por la tarde descendemos a Aguas Calientes para celebrar.",
      },
      {
        day: 4,
        title: "Retorno a Cusco",
        description:
          "Por la mañana tomaremos el tren de regreso a Ollantaytambo y luego un traslado privado hasta Cusco. Llegaremos por la tarde con tiempo libre para explorar la ciudad imperial.",
      },
    ],
    includes: [
      "Transporte ida y vuelta por tren",
      "Guía profesional de turismo",
      "Entrada a Machu Picchu",
      "Alojamiento en hotel 3 estrellas",
      "Alimentación completa (desayuno, almuerzo, cena)",
      "Equipo de trekking básico",
      "Botiquín de primeros auxilios",
    ],
    notIncludes: [
      "Vuelos de ida y regreso a Cusco",
      "Almuerzo del primer día",
      "Propinas para guías y equipo",
      "Seguro de viaje",
      "Bebidas alcohólicas",
    ],
    recommendations: [
      "Llevar ropa de abrigo por las noches frías en montaña",
      "Calzado cómodo para caminar en senderos de piedra",
      "Crema solar y lentes de sol por la altitud",
      "Llevar documentos de identidad originales",
      "Acclimatarse al menos 2 días en Cusco antes del trekking",
    ],
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
    description:
      "Descubre la magia del Valle Sagrado de los Incas y la impressionante Montaña de Colores. Este tour combina historia, cultura y naturaleza en un solo viaje inolvidable.",
    shortItinerary: [
      "Día 1: Cusco - Ollantaytambo - Pisac",
      "Día 2: Valle Sagrado - Chinchero - Moray - Maras",
      "Día 3: Montaña de Colores - Retorno a Cusco",
    ],
    itinerary: [
      {
        day: 1,
        title: "Cusco - Ollantaytambo - Pisac",
        description:
          "Recogida en el hotel y traslado al Valle Sagrado. Visitaremos las ruinas de Ollantaytambo y la incansable Pisac con su mercado artesanal.",
      },
      {
        day: 2,
        title: "Valle Sagrado - Chinchero - Moray - Maras",
        description:
          "Exploraremos los centros ceremoniales de Chinchero, las terrazas agrícolas de Moray y las salineras ancestrales de Maras.",
      },
      {
        day: 3,
        title: "Montaña de Colores - Retorno a Cusco",
        description:
          "Trekking hacia la famosa Vinicunca o Montaña de Colores, con vistas panorámicas de 360°. Retorno a Cusco por la tarde.",
      },
    ],
    includes: [
      "Transporte turístico todo el tour",
      "Guía profesional bilingüe",
      "Entradas a todas las atracciones",
      "Almuerzo buffet en Valle Sagrado",
      "Agua mineral durante el tour",
    ],
    notIncludes: [
      "Alojamiento",
      "Cenas y desayunos",
      "Propinas",
      "Seguro de viaje",
    ],
    recommendations: [
      "Usar zapatillas de trekking cómodas",
      "Llevar chompa o chaqueta para las tardes frescas",
      "Protector solar obligatorio por la altitud",
      "Llevar efectivo para compras en mercados",
    ],
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
    description:
      "Recorre la imperial ciudad de Cusco y descubre su rica historia que fusiona la cultura inca con la colonia española. Un tour perfecto para tu primer día de adaptación.",
    shortItinerary: [
      "Mañana: Plaza de Armas, Catedral, Qoricancha",
      "Tarde: Sacsayhuamán, Qenqo, Puka Pukara, Tambomachay",
    ],
    itinerary: [
      {
        day: 1,
        title: "City Tour Completo",
        description:
          "Iniciamos en la Plaza de Armas, visitamos la Catedral y el templo del Qoricancha. Por la tarde ascendemos a las ruinas de Sacsayhuamán, Qenqo, Puka Pukara y Tambomachay.",
      },
    ],
    includes: [
      "Transporte turístico",
      "Guía profesional",
      "Entradas a los sitios arqueológicos",
      "Almuerzo en restaurante turístico",
    ],
    notIncludes: [
      "Bebidas",
      "Propinas",
      "Compras personales",
    ],
    recommendations: [
      "Usar ropa cómoda y zapatillas",
      "Llevar impermeable por si llueve",
      "Tomar Coca Tea para la adaptación",
    ],
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
    description:
      "Explora uno de los cañones más profundos del mundo y relájate en aguas termales naturales. El Cañón del Colca te sorprenderá con sus paisajes y la majestuosidad del cóndor andino.",
    shortItinerary: [
      "Día 1: Arequipa - Cañón del Colca - Aguas Termales",
      "Día 2: Cruz del Cóndor - Chivay - Arequipa",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arequipa - Cañón del Colca - Aguas Termales",
        description:
          "Salida temprana desde Arequipa, cruzaremos el altiplano con vistas al volcán Misti y Chachani. Llegaremos al Cañón del Colca para observar cóndores y terminaremos el día relajándonos en las aguas termales de La Calera.",
      },
      {
        day: 2,
        title: "Cruz del Cóndor - Chivay - Arequipa",
        description:
          "Madrugada para llegar a la Cruz del Cóndor y observar el espectáculo de los cóndores planear sobre el cañón. Visita al pueblo de Chivay y retorno a Arequipa por la tarde.",
      },
    ],
    includes: [
      "Transporte turístico ida y vuelta",
      "Guía profesional",
      "Entrada al Cañón del Colca",
      "Almuerzo buffet",
      "Alojamiento en hotel",
      "Entrada a aguas termales",
    ],
    notIncludes: [
      "Cenas y desayunos",
      "Bebidas",
      "Propinas",
    ],
    recommendations: [
      "Llevar ropa de abrigo por las alturas",
      "Protector solar y gorra",
      "Cámara fotográfica para los cóndores",
    ],
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
    description:
      "Conoce la Ciudad Blanca de Arequipa y desafía los volcanes circundantes. Un tour que combina la arquitectura colonial con la aventura en alta montaña.",
    shortItinerary: [
      "Día 1: City Tour Arequipa - Monasterio de Santa Catalina",
      "Día 2: Ascenso al Volcán Misti",
      "Día 3: Cañón de Imata - Retorno",
    ],
    itinerary: [
      {
        day: 1,
        title: "City Tour Arequipa",
        description:
          "Recorrido por la ciudad blanca: Plaza de Armas, Catedral, Monasterio de Santa Catalina y miradores con vistas a los volcanes.",
      },
      {
        day: 2,
        title: "Ascenso al Volcán Misti",
        description:
          "Trekking de día completo hacia el cráter del volcán Misti (5,822 msnm). Paisajes volcánicos impresionantes y vistas panorámicas.",
      },
      {
        day: 3,
        title: "Cañón de Imata - Retorno",
        description:
          "Visita al impresionante Cañón de Imata con formaciones rocosas únicas. Retorno a Arequipa por la tarde.",
      },
    ],
    includes: [
      "Transporte turístico",
      "Guía profesional de montaña",
      "Equipo de trekking (bastones, crampones)",
      "Almuerzo en montaña",
      "Entrada a Santa Catalina",
    ],
    notIncludes: [
      "Alojamiento",
      "Cenas y desayunos",
      "Equipo personal de alta montaña",
      "Propinas",
    ],
    recommendations: [
      "Buena condición física para el ascenso",
      "Ropa térmica para la altitud",
      "Bloqueador solar SPF 50+",
      "Llevar snacks energéticos",
    ],
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
    description:
      "Recorre la Ruta del Sillar y descubre cómo la piedra volcánica blanca da forma a la arquitectura arequipeña. Termina con un baño en las aguas termales de Culebrillas.",
    shortItinerary: [
      "Visita a canteras de sillar y talleres artesanales",
      "Caminata por el Cañón de Culebrillas",
      "Baño en aguas termales",
    ],
    itinerary: [
      {
        day: 1,
        title: "Ruta del Sillar y Culebrillas",
        description:
          "Recorrido por las canteras donde se extrae el sillar, talleres de escultores, el Cañón de Culebrillas con pinturas rupestres y baño final en aguas termales.",
      },
    ],
    includes: [
      "Transporte turístico",
      "Guía local",
      "Entrada a canteras",
      "Almuerzo típico",
      "Toallas y casillero en aguas termales",
    ],
    notIncludes: [
      "Traje de baño (traer el propio)",
      "Bebidas adicionales",
      "Propinas",
    ],
    recommendations: [
      "Usar ropa cómoda y calzado cerrado",
      "Llevar traje de baño y ropa de cambio",
      "Protector solar",
    ],
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
    description:
      "Adrenalina pura en el desierto de Huacachina. Disfruta de emocionantes paseos en buggy por las dunas y desliza sobre la arena con sandboarding.",
    shortItinerary: [
      "Paseo en buggy por las dunas del desierto",
      "Sandboarding en las dunas más altas",
      "Atardecer mágico desde la cima",
    ],
    itinerary: [
      {
        day: 1,
        title: "Aventura en Huacachina",
        description:
          "Nos reunimos en Huacachina, el oasis del desierto. Empezamos con un emocionante paseo en buggy a toda velocidad por las dunas. Luego practicaremos sandboarding en las dunas más altas. Finalizamos con un atardecer espectacular desde la cima.",
      },
    ],
    includes: [
      "Paseo en buggy compartido (4 personas)",
      "Tablas de sandboarding",
      "Guía conductor",
      "Seguro básico",
      "Recoleta y retorno al hotel",
    ],
    notIncludes: [
      "Transporte hasta Huacachina",
      "Almuerzo",
      "Propinas",
    ],
    recommendations: [
      "Usar ropa que pueda ensuciarse",
      "Llevar gafas de sol y pañuelo para la arena",
      "Crema solar obligatoria",
      "No apto para personas con problemas de espalda",
    ],
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
    description:
      "Explora la Reserva Nacional de Paracas y las Islas Ballestas, hogar de pingüinos, leones marinos y miles de aves. Un paraíso natural en la costa peruana.",
    shortItinerary: [
      "Día 1: Islas Ballestas - Reserva Nacional de Paracas",
      "Día 2: Cañón de los Pérez - Retorno",
    ],
    itinerary: [
      {
        day: 1,
        title: "Islas Ballestas - Reserva Nacional",
        description:
          "Embarcación hacia las Islas Ballestas para observar pingüinos, leones marinos y colonias de aves. Por la tarde visitaremos la Reserva Nacional de Paracas con sus playas y fauna silvestre.",
      },
      {
        day: 2,
        title: "Cañón de los Pérez - Retorno",
        description:
          "Excursión al Cañón de los Pérez con formaciones rocosas y fauna marina. Retorno a Lima por la tarde.",
      },
    ],
    includes: [
      "Transporte desde Lima (ida y vuelta)",
      "Embarcación a Islas Ballestas",
      "Guía naturalista",
      "Alojamiento en hotel frente al mar",
      "Desayuno y almuerzo",
    ],
    notIncludes: [
      "Cenas",
      "Propinas",
      "Actividades opcionales",
    ],
    recommendations: [
      "Llevar chompa o chaqueta por el viento del mar",
      "Cámara con zoom para aves",
      "Protector solar",
      "Llevar protector para el pelo del viento salado",
    ],
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
    description:
      "Conoce la cultura Uros y Taquile en el Lago Titicaca, el lago navegable más alto del mundo. Vive una experiencia cultural única en las islas flotantes de totora.",
    shortItinerary: [
      "Día 1: Puno - Islas Flotantes de los Uros",
      "Día 2: Isla Taquile - Retorno a Puno",
    ],
    itinerary: [
      {
        day: 1,
        title: "Islas Flotantes de los Uros",
        description:
          "Embarcación desde el puerto de Puno hacia las islas flotantes de totora de los Uros. Aprenderemos sobre su forma de vida ancestral y construiremos nuestra propia isla.",
      },
      {
        day: 2,
        title: "Isla Taquile",
        description:
          "Visita a la Isla Taquile, conocida por sus textiles premiados por la UNESCO. Caminata por el pueblo y almuerzo con vista al lago. Retorno a Puno por la tarde.",
      },
    ],
    includes: [
      "Transporte desde el hotel",
      "Embarcación turística",
      "Guía local Uros",
      "Entrada a Islas Uros y Taquile",
      "Almuerzo en Isla Taquile",
      "Alojamiento en Puno",
    ],
    notIncludes: [
      "Desayunos y cenas",
      "Propinas",
      "Compras artesanales",
    ],
    recommendations: [
      "Llevar ropa de abrigo (las tardes son frías)",
      "Calzado cómodo para caminar en las islas",
      "Llevar efectivo para artesanías locales",
      "Protector solar y gorra",
    ],
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
    description:
      "Trekking épico por las 7 Lagunas del Ausangate, un circuito de alta montaña con lagunas de colores turquesas y nevados imponentes. La ruta menos transitada del Perú.",
    shortItinerary: [
      "Día 1: Cusco - Tinki - Upis",
      "Día 2: Lagunas de Ausangate - Travisique",
      "Día 3: Qomercocha - Tinki - Cusco",
    ],
    itinerary: [
      {
        day: 1,
        title: "Cusco - Tinki - Upis",
        description:
          "Partimos de Cusco hacia Tinki (4,000 msnm) donde comienza el trekking. Caminaremos 4 horas hasta Upis, passando por paisajes de altura y pastizales andinos.",
      },
      {
        day: 2,
        title: "Lagunas de Ausangate - Travisique",
        description:
          "El día más épico: visitaremos las 7 lagunas de colores (verde esmeralda, turquesa, azul profundo) con el nevado Ausangate de fondo.宿营 en Travisique.",
      },
      {
        day: 3,
        title: "Qomercocha - Tinki - Cusco",
        description:
          "Descendemos por Qomercocha y otros puntos de vista panorámico hasta Tinki. Traslado de regreso a Cusco por la tarde.",
      },
    ],
    includes: [
      "Transporte ida y vuelta desde Cusco",
      "Guía de montaña certificado",
      "Equipo de camping (carpa, sleeping bag)",
      "Alimentación completa durante trekking",
      "Caballos de carga",
      "Botiquín de altura",
      "Entrada a la zona protegida",
    ],
    notIncludes: [
      "Equipo personal de trekking",
      "Bebidas energéticas",
      "Propinas para equipo",
      "Seguro de viaje",
    ],
    recommendations: [
      "Mínimo 2 días de acclimatamiento en Cusco",
      "Buena condición física (altitud hasta 5,000 msnm)",
      "Ropa térmica y impermeable",
      "Bastones de trekking",
      "Llevar snack energéticos",
    ],
  },
];
