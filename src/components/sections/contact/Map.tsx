interface MapSectionProps {
  embedSrc?: string;
}

export default function Map({
  embedSrc = "https://www.google.com/maps?q=-13.5228062,-71.9737244&z=16&output=embed",
}: MapSectionProps) {
  return (
    <section
      aria-label="Mapa de ubicación"
      className="relative h-100 w-full overflow-hidden sm:h-120 lg:h-130"
    >
      <div className="relative h-full w-full contrast-105 grayscale-20 transition-all duration-500 hover:grayscale-0">
        <iframe
          src={embedSrc}
          title="Mapa de ubicación"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-full w-full border-0"
        />
      </div>
    </section>
  );
}
