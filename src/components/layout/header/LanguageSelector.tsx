"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { LANGUAGE_OPTIONS } from "@/data/language";

export default function LanguageSelector() {
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
      <select
        value={currentLocale}
        onChange={(e) => changeLanguage(e.target.value)}
        className="border-border h-7 w-auto cursor-pointer appearance-none rounded-full border bg-transparent pr-7 pl-3 text-sm leading-none font-normal focus:ring-0 focus:outline-none sm:h-8 sm:pr-20 sm:pl-3.5"
      >
        {LANGUAGE_OPTIONS.map((lang) => (
          <option key={lang.value} value={lang.value}>
            {lang.codeUpper}
          </option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none absolute right-2.5 size-3.5 sm:right-3 sm:size-4" />
    </div>
  );
}
