"use client";

import { useTranslations } from "next-intl";

interface DescriptionSectionProps {
  description: string;
}

export default function DescriptionSection({ description }: DescriptionSectionProps) {
  const t = useTranslations("tour_detail");

  return (
    <section>
      <h2 className="font-heading text-2xl tracking-wider text-white mb-4">
        {t("description_title")}
      </h2>
      <p className="text-foreground leading-relaxed text-lg">
        {description}
      </p>
    </section>
  );
}
