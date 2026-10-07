import Image from "next/image";
import {
  ArrowRight,
  Compass,
  ShieldCheck,
  UserCheck,
  Target,
  Eye,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import Heading from "@/components/uiwave/Heading";
import { ROUTES } from "@/config/routes";

const FEATURES = [
  {
    icon: Eye,
    title: "missionVision.mission.title",
    description: "missionVision.mission.description",
  },
  {
    icon: Target,
    title: "missionVision.vision.title",
    description: "missionVision.vision.description",
  },
];

export default function About() {
  const t = useTranslations("about.story");

  return (
    <section
      aria-labelledby="welcome-agency-title"
      className="bg-background relative w-full overflow-hidden py-16 lg:py-28"
    >
      <div className="uw-container relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* COLUMNA IZQUIERDA: Composición de Imágenes Asimétrica */}
          <div className="relative mx-auto w-full max-w-lg lg:col-span-6 lg:max-w-none">
            {/* Grid/Layout de 3 imágenes superpuestas */}
            <div className="relative grid grid-cols-12 items-center gap-4">
              {/* Contenedor Columna Izquierda de Imágenes (Imagen 1 y Imagen 3) */}
              <div className="col-span-7 flex flex-col gap-4 sm:gap-6">
                {/* Imagen 1: Lago entre montañas */}
                <figure className="group relative aspect-4/5 w-full overflow-hidden rounded-3xl shadow-sm sm:rounded-[32px]">
                  <Image
                    src="/images/hero/hero_bg_1_1.jpg"
                    alt=""
                    fill
                    priority
                    sizes="(max-width: 640px) 60vw, (max-width: 1024px) 35vw, 25vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </figure>

                {/* Imagen 3: Yate de lujo en el mar */}
                <figure className="group relative aspect-4/3 w-full overflow-hidden rounded-3xl shadow-sm sm:rounded-[32px]">
                  <Image
                    src="/images/hero/hero_bg_1_1.jpg"
                    alt=""
                    fill
                    sizes="(max-width: 640px) 60vw, (max-width: 1024px) 35vw, 25vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </figure>
              </div>

              {/* Contenedor Columna Derecha de Imágenes (Imagen 2 Principal Superpuesta) */}
              <div className="relative z-10 col-span-5 -ml-4 sm:-ml-8 lg:-ml-10">
                {/* Imagen 2: Grupo de viajeros sonrientes */}
                <figure className="dark:border-background group relative aspect-3/5 w-full overflow-hidden rounded-3xl border-4 border-white shadow-lg sm:rounded-[32px]">
                  <Image
                    src="/images/hero/hero_bg_1_1.jpg"
                    alt=""
                    fill
                    sizes="(max-width: 640px) 40vw, (max-width: 1024px) 25vw, 20vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </figure>
              </div>
            </div>
          </div>

          {/* COLUMNA DERECHA: Contenido Informativo y Beneficios */}
          <div className="relative z-10 flex flex-col items-start text-left lg:col-span-6">
            {/* Subtítulo Decorativo */}
            <Heading
              subtitle={t("subtitle")}
              title={t("title")}
              description={t("description")}
            />

            {/* Lista de Beneficios / Features */}
            <ul className="mb-10 w-full space-y-6" role="list">
              {/* Feature 1: Exclusive Trip */}
              {FEATURES.map((item) => {
                const IconComponent = item.icon;
                return (
                  <li className="flex items-start gap-4">
                    <div
                      className="bg-primary/15 text-primary mt-1 flex size-12 shrink-0 items-center justify-center rounded-full"
                      aria-hidden="true"
                    >
                      <IconComponent className="size-6" />
                    </div>
                    <div>
                      <h3 className="font-heading text-secondary mb-1 text-lg font-bold sm:text-xl">
                        {t(item.title)}
                      </h3>
                      <p className="text-foreground/90 text-sm leading-snug sm:text-base">
                        {t(item.description)}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
