import { Heading } from "@/components/uiwave/Heading";
import { Target, Heart, Globe } from "lucide-react";
import { getTranslations } from "next-intl/server";

const VALUES = [
  { icon: Target, key: "mission" },
  { icon: Heart, key: "passion" },
  { icon: Globe, key: "commitment" },
] as const;

export default async function MissionSection() {
  const t = await getTranslations("about.mission");

  return (
    <section className="w-full overflow-hidden">
      <div className="uw-container uw-section">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-10">
          <div className="relative mx-auto aspect-4/5 w-full max-w-130 sm:aspect-4/3 lg:aspect-3/4">
            <div className="bg-primary/10 absolute -inset-3 -rotate-2 rounded-4xl" />
            <div className="border-primary/50 absolute inset-0 rotate-1 rounded-2xl border" />
            <div className="relative h-full w-full overflow-hidden rounded-2xl shadow-2xl ring-1 shadow-black/50 ring-white/10">
              <img
                src="/images/Canon-del-Colca-y-Aguas-Termales-de-La-Calera-03.webp"
                alt={t("imageAlt")}
                className="h-full w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
            </div>
          </div>

          <div className="flex flex-col items-start gap-8">
            <Heading
              centered
              badge={t("badge")}
              title={t("title")}
              description={t("description")}
              className="mb-0 text-start lg:mb-0"
            />
            <div className="flex w-full flex-col gap-6">
              {VALUES.map((value) => (
                <div
                  key={value.key}
                  className="border-primary flex items-start gap-4 border-l-2 pl-4"
                >
                  <div className="flex flex-col gap-1">
                    <h3 className="font-heading tracking-wider text-white sm:text-2xl">
                      {t(`values.${value.key}.title`)}
                    </h3>
                    <p className="text-base">
                      {t(`values.${value.key}.description`)}
                    </p>
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
