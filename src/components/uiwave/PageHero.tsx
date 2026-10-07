import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { ROUTES } from "@/config/routes";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  /**
   * Título principal de la página (ej: "Contact Us")
   */
  title: string;
  /**
   * Ruta de la imagen de fondo (por defecto usa la del banner genérico)
   */
  bgImage?: string;
  /**
   * Migas de pan adicionales opcionales para personalizar el breadcrumb
   */
  breadcrumbs?: BreadcrumbItem[];
}

export default function HeroSection({
  title,
  bgImage = "/images/hero/hero_bg_1_1.jpg",
  breadcrumbs,
}: PageHeaderProps) {
  return (
    <section
      aria-labelledby="page-header-title"
      className="relative flex min-h-[300px] sm:min-h-[360px] lg:min-h-[420px] w-full items-center justify-center text-white overflow-hidden"
    >
      {/* Imagen de Fondo Optimizada */}
      <Image
        src={bgImage}
        alt=""
        fill
        priority
        quality={85}
        sizes="100vw"
        className="object-cover object-center -z-20"
      />

      {/* Capa de oscurecimiento (Overlay) */}
      <div
        className="absolute inset-0 bg-slate-900/50 -z-10"
        aria-hidden="true"
      />

      <div className="uw-container relative z-10 py-12 text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center justify-center">
          {/* Título Principal */}
          <h1
            id="page-header-title"
            className="font-heading font-bold text-[clamp(2rem,1.4rem+2.5vw,3.5rem)] leading-tight mb-3 tracking-tight"
          >
            {title}
          </h1>

          {/* Navegación de Breadcrumb (Semántica HTML5) */}
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center justify-center gap-2 text-sm sm:text-base font-medium text-white/90 flex-wrap">
              <li>
                <Link
                  href={ROUTES.HOME || "/"}
                  className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:underline"
                >
                  Home
                </Link>
              </li>

              {breadcrumbs && breadcrumbs.length > 0 ? (
                breadcrumbs.map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="text-white/60 select-none" aria-hidden="true">
                      &rarr;
                    </span>
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:underline"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <span className="text-white font-normal" aria-current="page">
                        {item.label}
                      </span>
                    )}
                  </li>
                ))
              ) : (
                <li className="flex items-center gap-2">
                  <span className="text-white/60 select-none" aria-hidden="true">
                    &rarr;
                  </span>
                  <span className="text-white font-normal" aria-current="page">
                    {title}
                  </span>
                </li>
              )}
            </ol>
          </nav>
        </div>
      </div>
    </section>
  );
}