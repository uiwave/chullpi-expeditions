import { Compass, ShieldCheck, MapPinned } from "lucide-react";

const features = [
  {
    icon: Compass,
    title: "Guías expertos y equipo apasionado",
    description:
      "Recorridos cuidadosamente planificados por guías locales que conocen cada rincón y secreto de Perú.",
  },
  {
    icon: MapPinned,
    title: "Aventuras a tu medida",
    description:
      "Cada itinerario se diseña según tus intereses, para que descubras el Perú que soñaste a tu propio ritmo.",
  },
  {
    icon: ShieldCheck,
    title: "Seguridad y confianza",
    description:
      "Viajes seguros, personalizados y sin preocupaciones, pensados para que solo disfrutes la experiencia.",
  },
];

export default function AboutPageSection() {
  return (
    <section className="w-full overflow-hidden">
      <div className="uw-container uw-section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-10 items-center">
          <div className="relative mx-auto w-full max-w-130 aspect-4/5 sm:aspect-4/3 lg:aspect-3/4">
            <div className="absolute -inset-3 -rotate-2 rounded-4xl bg-primary/10" />
            <div className="absolute inset-0 rotate-1 rounded-2xl border border-primary/50" />
            <div className="relative h-full w-full overflow-hidden rounded-2xl shadow-2xl shadow-black/50 ring-1 ring-white/10">
              <img
                src="/images/Cuevas-de-Arte-Rupestre-en-Sumbay-02.webp"
                alt="Cuevas de Arte Rupestre en Sumbay"
                className="h-full w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
            </div>
          </div>
          <div className="flex flex-col items-start gap-6">
            <h2 className="font-heading text-white leading-[0.95]">
              <span className="block font-decoration text-primary text-[clamp(1.5rem,0.5rem+3.5vw,3rem)] leading-none mb-1">
                Sobre nosotros
              </span>
              <span className="block text-[clamp(1.875rem,-0.5rem+6vw,4.5rem)]">
                Descubre Perú de forma auténtica y enriquecedora
              </span>
            </h2>

            <p>
              En Chullpi Expeditions diseñamos experiencias únicas que conectan
              a los viajeros con la cultura, la historia y los paisajes de este
              maravilloso país. Cada recorrido está planificado con detalle para
              que vivas una <strong className="text-white">aventura segura y
              personalizada</strong> de principio a fin.
            </p>

            <div className="flex flex-col gap-6 w-full">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex items-start gap-4 pl-4 border-l-2 border-primary"
                >
                  <feature.icon className="size-6 text-primary shrink-0 mt-1" />
                  <div className="flex flex-col gap-1">
                    <h3 className="font-heading sm:text-2xl tracking-wider text-white">
                      {feature.title}
                    </h3>
                    <p className="text-base">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="font-decoration text-primary text-[clamp(1.375rem,1.018rem+0.893vw,2rem)]">
              ¡Explora, descubre y déjate sorprender por Perú con Chullpi
              Expeditions!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}