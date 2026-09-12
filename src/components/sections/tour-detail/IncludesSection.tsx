"use client";

import { useTranslations } from "next-intl";
import { CircleCheck, CircleX } from "lucide-react";

interface IncludesSectionProps {
  includes?: string[];
  notIncludes?: string[];
}

export default function IncludesSection({ includes, notIncludes }: IncludesSectionProps) {
  const t = useTranslations("tour_detail");

  if (!includes && !notIncludes) return null;

  return (
    <section>
      <h2 className="font-heading text-2xl tracking-wider text-white mb-6">
        {t("includes_title")}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {includes && includes.length > 0 && (
          <div className="bg-surface border border-border rounded-xl p-5">
            <h3 className="font-heading text-lg tracking-wider text-primary mb-4 flex items-center gap-2">
              <CircleCheck className="w-5 h-5" />
              {t("includes")}
            </h3>
            <ul className="space-y-2.5">
              {includes.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-foreground">
                  <span className="text-primary mt-1">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {notIncludes && notIncludes.length > 0 && (
          <div className="bg-surface border border-border rounded-xl p-5">
            <h3 className="font-heading text-lg tracking-wider text-red-400 mb-4 flex items-center gap-2">
              <CircleX className="w-5 h-5" />
              {t("not_includes")}
            </h3>
            <ul className="space-y-2.5">
              {notIncludes.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-foreground">
                  <span className="text-red-400 mt-1">✗</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
