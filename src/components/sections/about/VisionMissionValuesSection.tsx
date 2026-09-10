import { Award, Gem, Handshake, Heart, Leaf } from "lucide-react";

const values = [
  {
    icon: Gem,
    title: "Autenticidad",
    description: "Experiencias que reflejan la verdadera esencia de Perú.",
  },
  {
    icon: Award,
    title: "Excelencia",
    description: "Servicio de alta calidad en cada detalle.",
  },
  {
    icon: Leaf,
    title: "Sostenibilidad",
    description: "Cuidamos el ambiente y apoyamos a las comunidades.",
  },
  {
    icon: Heart,
    title: "Pasión",
    description: "Amamos lo que hacemos y lo compartimos contigo.",
  },
  {
    icon: Handshake,
    title: "Respeto",
    description: "Honramos cada cultura, tradición y persona.",
  },
];

function ImageFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative w-full max-w-xs sm:max-w-sm mx-auto aspect-square lg:aspect-4/3">
      <div className="absolute -inset-3 -rotate-2 rounded-4xl bg-primary/10" />
      <div className="absolute inset-0 rotate-1 rounded-2xl border border-primary/50" />
      <div className="relative h-full w-full overflow-hidden rounded-2xl shadow-2xl shadow-black/50 ring-1 ring-white/10">
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
      </div>
    </div>
  );
}

function ContentHeader({
  number,
  eyebrow,
  title,
  description,
}: {
  number: string;
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-start gap-4">
      <div className="flex items-center gap-3">
        <span className="font-heading text-3xl leading-none text-primary">
          {number}
        </span>
        <span className="font-decoration text-2xl leading-none text-primary">
          {eyebrow}
        </span>
      </div>
      <h3 className="font-heading text-white leading-[0.95] text-[clamp(1.875rem,-0.5rem+6vw,4.5rem)]">
        {title}
      </h3>
      <p>{description}</p>
    </div>
  );
}

export default function VisionMissionValuesSection() {
  return (
    <section className="w-full overflow-hidden">
      <div className="uw-container uw-section space-y-20 lg:space-y-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-10 items-center">
          <div className="lg:order-1">
            <ImageFrame
              src="/images/Montana-de-colores-06.webp"
              alt="Montaña de colores de Vinicunca"
            />
          </div>
          <div className="lg:order-2">
            <ContentHeader
              number="01"
              eyebrow="Visión"
              title="El viaje que queremos inspirar"
              description="Ser reconocidos como la agencia líder en turismo auténtico en Perú, destacándonos por nuestra excelencia, compromiso con el medio ambiente y profundo respeto por la cultura local. Queremos inspirar a los viajeros a explorar, aprender y amar nuestro país."
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-10 items-center">
          <div className="lg:order-1">
            <ContentHeader
              number="02"
              eyebrow="Misión"
              title="Nuestra razón de ser"
              description="Ofrecer experiencias de viaje auténticas y personalizadas que conecten a los viajeros con la riqueza cultural, histórica y natural de Perú, promoviendo el turismo sostenible y enriqueciendo la vida de nuestros clientes y comunidades locales."
            />
          </div>
          <div className="lg:order-2">
            <ImageFrame
              src="/images/Cusco-a-Machu-Picchu-3-Dias-03.webp"
              alt="Cusco a Machu Picchu en tres días"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-10 items-center">
          <div className="lg:order-1">
            <ImageFrame
              src="/images/Tour-7-Lagunas-del-Ausangate-01.webp"
              alt="Siete lagunas del Ausangate"
            />
          </div>
          <div className="lg:order-2 flex flex-col items-start gap-6">
            <ContentHeader
              number="03"
              eyebrow="Valores"
              title="Los valores que nos guían"
              description="Cada experiencia que diseñamos nace de cinco principios que cuidan al viajero, a las personas y al planeta."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
              {values.map((value) => (
                <div key={value.title} className="flex items-start gap-3">
                  <value.icon className="size-5 text-primary shrink-0 mt-1" />
                  <div className="flex flex-col gap-1">
                    <h4 className="font-heading text-xl tracking-wider text-white">
                      {value.title}
                    </h4>
                    <p className="text-sm">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
