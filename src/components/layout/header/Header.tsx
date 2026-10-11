"use client";

import { Suspense, useEffect, useState } from "react";
import { cn } from "cn";
import { ArrowRight } from "lucide-react";
import LanguageSelector from "./LanguageSelector";
import { ROUTES } from "@/config/routes";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { NAV_ITEMS } from "@/data/navItems";

export function Header() {
  const t = useTranslations("header");
  const tCommon = useTranslations("common");
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 right-0 left-0 z-50 bg-white">
        <div>
          <Suspense>
            <LanguageSelector />
          </Suspense>
        </div>
        <div
          className="relative flex items-center justify-between bg-auto bg-top-left bg-no-repeat"
          style={{ backgroundImage: "url('/images/bg/logo_bg_mask.png')" }}
        >
          <div className="flex items-center">
            <Link href={ROUTES.HOME}>
              <img
                src="/logo-white.webp"
                alt=""
                className="h-10 w-auto object-contain transition-all sm:h-12 xl:h-14"
              />
            </Link>
            <nav className="flex">
              {NAV_ITEMS.map((item) => (
                <div key={item.id}>
                  <Link href={item.href}>{t(item.label)}</Link>
                </div>
              ))}
            </nav>
          </div>
          <Link
            href={ROUTES.TOURS}
            className="bg-secondary group relative inline-flex items-center justify-center overflow-hidden rounded-full px-8.75 py-[18.8px]"
          >
            <div className="bg-primary absolute inset-0 -translate-x-full rounded-full transition-transform duration-300 ease-out group-hover:translate-x-0" />
            <div className="relative z-10 inline-flex items-center gap-2 text-white transition-colors duration-300">
              <span className="text-base font-normal">
                {tCommon("bookNow")}
              </span>
              <ArrowRight className="size-5" />
            </div>
          </Link>
        </div>
      </header>
    </>
  );
}
