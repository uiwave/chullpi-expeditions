import { MapPin, ExternalLink } from "lucide-react";
import { useTranslations } from "next-intl";

interface MapSectionProps {
  /**
   * Enlace directo a Google Maps para abrir en una pestaña nueva
   */
  mapUrl?: string;
  /**
   * Coordenadas o ubicación en texto codificado para el embed de Google Maps
   */
  embedSrc?: string;
}

export default function Map({
  mapUrl = "https://maps.google.com/?q=Pabna",
  embedSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3644.839219329124!2d89.2285!3d24.0045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDAwJzE2LjIiTiA4OcKwMTMnNDIuNiJF!5e0!3m2!1ses!2spe!4v1710000000000!5m2!1ses!2spe",
}: MapSectionProps) {
  const t = useTranslations("contact.map");

  return (
    <section
      aria-label={t("title", { defaultValue: "Ubicación en el mapa" })}
      className="relative w-full h-[400px] sm:h-[480px] lg:h-[520px] bg-border/20 overflow-hidden"
    >
      {/* Botón flotante 'Open in Maps' (esquina superior izquierda) */}
      <div className="absolute top-4 left-4 z-20">
        <a
          href={mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-3.5 py-2 bg-white/95 backdrop-blur-xs text-secondary hover:text-primary font-medium text-xs sm:text-sm rounded-lg shadow-md border border-border/60 transition-all duration-300 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          <span>{t("openInMaps", { defaultValue: "Open in Maps" })}</span>
          <ExternalLink className="size-3.5 shrink-0" aria-hidden="true" />
        </a>
      </div>

      {/* Contenedor del Iframe de Google Maps */}
      <div className="relative w-full h-full grayscale-[20%] contrast-[105%] hover:grayscale-0 transition-all duration-500">
        <iframe
          title={t("title", { defaultValue: "Mapa interactivo de ubicación" })}
          src={embedSrc}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full border-0"
        />
      </div>

      {/* Indicador visual / Marker flotante opcional central */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10 hidden sm:flex flex-col items-center justify-center"
        aria-hidden="true"
      >
        <div className="relative flex items-center justify-center size-10 rounded-full bg-primary text-white shadow-lg animate-bounce">
          <MapPin className="size-6 fill-current" />
        </div>
        <div className="w-4 h-1.5 bg-black/20 rounded-full blur-[2px] mt-1" />
      </div>
    </section>
  );
}