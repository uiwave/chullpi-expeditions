import Image from "next/image";
interface PageHeaderProps {
  title: string;
  bgImage?: string;
}

export default function HeroSection({
  title,
  bgImage = "/images/hero/hero_bg_1_1.jpg",
}: PageHeaderProps) {
  return (
    <section
      aria-labelledby="page-header-title"
      className="relative flex min-h-75 w-full items-center justify-center overflow-hidden text-white sm:min-h-90 lg:min-h-105"
    >
      {/* Imagen de Fondo Optimizada */}
      <Image
        src={bgImage}
        alt=""
        fill
        priority
        quality={85}
        sizes="100vw"
        className="-z-20 object-cover object-center"
      />

      {/* Capa de oscurecimiento (Overlay) */}
      <div
        className="absolute inset-0 -z-10 bg-slate-900/50"
        aria-hidden="true"
      />

      <div className="uw-container relative z-10 py-12 text-center">
        <div className="mx-auto flex max-w-3xl flex-col items-center justify-center">
          {/* Título Principal */}
          <h1
            id="page-header-title"
            className="font-heading mb-3 text-[clamp(2rem,1.4rem+2.5vw,3.5rem)] leading-tight font-bold tracking-tight"
          >
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
}
