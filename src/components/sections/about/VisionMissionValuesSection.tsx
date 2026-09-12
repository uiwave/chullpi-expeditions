"use client";

import { useTranslations } from "next-intl";
import { Award, Gem, Handshake, Heart, Leaf } from "lucide-react";

const valueIcons = [Gem, Award, Leaf, Heart, Handshake];
const valueKeys = ["authenticity", "excellence", "sustainability", "passion", "respect"] as const;

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
  const tVision = useTranslations("about.vision");
  const tMission = useTranslations("about.mission");
  const tValues = useTranslations("about.values");
  const tAlt = useTranslations("about.alt");

  return (
    <section className="w-full overflow-hidden">
      <div className="uw-container uw-section space-y-20 lg:space-y-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-10 items-center">
          <div className="lg:order-1">
            <ImageFrame
              src="/images/Montana-de-colores-06.webp"
              alt={tAlt("vinicunca")}
            />
          </div>
          <div className="lg:order-2">
            <ContentHeader
              number={tVision("number")}
              eyebrow={tVision("label")}
              title={tVision("title")}
              description={tVision("description")}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-10 items-center">
          <div className="lg:order-1">
            <ContentHeader
              number={tMission("number")}
              eyebrow={tMission("label")}
              title={tMission("title")}
              description={tMission("description")}
            />
          </div>
          <div className="lg:order-2">
            <ImageFrame
              src="/images/Cusco-a-Machu-Picchu-3-Dias-03.webp"
              alt={tAlt("machu_picchu")}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-10 items-center">
          <div className="lg:order-1">
            <ImageFrame
              src="/images/Tour-7-Lagunas-del-Ausangate-01.webp"
              alt={tAlt("ausangate")}
            />
          </div>
          <div className="lg:order-2 flex flex-col items-start gap-6">
            <ContentHeader
              number={tValues("number")}
              eyebrow={tValues("label")}
              title={tValues("title")}
              description={tValues("description")}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
              {valueKeys.map((key, i) => {
                const Icon = valueIcons[i];
                return (
                  <div key={key} className="flex items-start gap-3">
                    <Icon className="size-5 text-primary shrink-0 mt-1" />
                    <div className="flex flex-col gap-1">
                      <h4 className="font-heading text-xl tracking-wider text-white">
                        {tValues(key)}
                      </h4>
                      <p className="text-sm">{tValues(`${key}_desc`)}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
