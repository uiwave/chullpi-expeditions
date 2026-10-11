interface MapSectionProps {
  mapUrl?: string;
  embedSrc?: string;
}

export default function Map({
  mapUrl = "https://maps.google.com/?q=Pabna",
  embedSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3644.839219329124!2d89.2285!3d24.0045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDAwJzE2LjIiTiA4OcKwMTMnNDIuNiJF!5e0!3m2!1ses!2spe!4v1710000000000!5m2!1ses!2spe",
}: MapSectionProps) {
  return (
    <section className="relative h-100 w-full overflow-hidden sm:h-120 lg:h-130">
      <div className="relative h-full w-full contrast-105 grayscale-20 transition-all duration-500 hover:grayscale-0">
        <iframe
          src={embedSrc}
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
