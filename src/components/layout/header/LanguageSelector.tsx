"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { LANGUAGE_OPTIONS } from "@/data/language";

export default function LanguageSelector() {
  const t = useTranslations("header");
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const currentLocale = useLocale();

  const changeLanguage = (newLocale: string) => {
    const newPathname = pathName.replace(`/${currentLocale}`, `/${newLocale}`);
    const paramString = searchParams.toString();
    const url = paramString ? `${newPathname}?${paramString}` : newPathname;
    router.push(url);
  };

  return (
    <div className="relative flex items-center">
      <img
        src={`/images/flags/${currentLocale}.svg`}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-2.5 z-10 size-4 rounded-full object-cover sm:left-3.5 sm:size-[18px]"
      />
      <select
        value={currentLocale}
        onChange={(e) => changeLanguage(e.target.value)}
        aria-label={t("language.placeholder")}
        className="border-border text-foreground hover:text-primary h-7 w-auto cursor-pointer appearance-none rounded-full border bg-transparent pr-7 pl-8 text-xs font-medium transition-colors focus:ring-0 sm:h-8 sm:pr-8 sm:pl-10 sm:text-sm"
      >
        {LANGUAGE_OPTIONS.map((lang) => (
          <option key={lang.value} value={lang.value}>
            {lang.name}
          </option>
        ))}
      </select>
      <ChevronDown
        aria-hidden="true"
        className="text-foreground pointer-events-none absolute right-2.5 size-3.5 sm:right-3.5 sm:size-4"
      />
    </div>
  );
}
