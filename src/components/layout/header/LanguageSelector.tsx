"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { LANGUAGE_OPTIONS } from "@/data/language";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
    <div className="relative flex h-20 items-center">
      <Select value={currentLocale} onValueChange={changeLanguage}>
        <SelectTrigger className="bg-primary font-heading text-primary-foreground inline-flex h-10 w-auto cursor-pointer items-center justify-center gap-1.5 rounded-lg border-none text-sm tracking-wider transition-all hover:opacity-90 focus:ring-0 sm:h-11 sm:gap-2 sm:text-[clamp(0.9375rem,calc(0.85rem+0.35vw),1.125rem)]">
          <SelectValue placeholder={t("language.placeholder")} />
        </SelectTrigger>

        <SelectContent
          position="popper"
          align="end"
          sideOffset={20}
          className="border-primary z-50 flex w-44 min-w-0 flex-col overflow-hidden rounded-none border-x-0 border-t-2 border-b-0 bg-white p-0 shadow-xl sm:w-48"
        >
          {LANGUAGE_OPTIONS.map((lang) => (
            <SelectItem
              key={lang.value}
              value={lang.value}
              className="font-heading focus:bg-primary/10 focus:text-primary data-[state=checked]:bg-primary flex cursor-pointer items-center justify-between rounded-none px-4 py-3 tracking-wider text-black transition-colors data-[state=checked]:text-white sm:px-5 sm:py-3.5 [&>span:first-child]:hidden"
            >
              <span className="text-base sm:text-lg">{lang.flag}</span>
              <span className="text-xs sm:text-[clamp(0.875rem,calc(0.8rem+0.25vw),1rem)]">
                {lang.codeUpper}
              </span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
