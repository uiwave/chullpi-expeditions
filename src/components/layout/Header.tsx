"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { usePathname, useRouter } from "@/src/i18n/navigation";
import { ChevronDown, Clock, Headset, MapPin, Menu, X } from "lucide-react";

const navItems = [
  {
    labelKey: "destinos",
    href: "/tours",
    children: [
      { labelKey: "cusco", href: "/tours?destination=Cusco" },
      { labelKey: "arequipa", href: "/tours?destination=Arequipa" },
      { labelKey: "puno", href: "/tours?destination=Puno" },
      { labelKey: "ica", href: "/tours?destination=Ica" },
    ],
  },
  { labelKey: "nosotros", href: "/nosotros" },
  { labelKey: "contacto", href: "/contacto" },
];

const languageOptions = [
  { code: "es", flag: "🇪🇸", codeUpper: "ES" },
  { code: "en", flag: "🇺🇸", codeUpper: "EN" },
  { code: "pt", flag: "🇧🇷", codeUpper: "PT" },
];

export default function Header() {
  const t = useTranslations("nav");
  const tTopbar = useTranslations("topbar");
  const tCommon = useTranslations("common");
  const tLang = useTranslations("lang");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [accordionOpen, setAccordionOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const switchLocale = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
    setLangOpen(false);
  };

  return (
    <>
      <header
        id="main-header"
        className={`fixed top-0 right-0 left-0 z-50 border-b border-white/10 transition-all duration-300 ${
          scrolled
            ? "bg-background shadow-lg"
            : "bg-black/20 backdrop-blur-md"
        }`}
      >
        {/* TOP BAR */}
        <div
          className={`bg-black/60 border-b border-white/10 transition-all duration-300 ease-in-out overflow-hidden ${
            scrolled ? "max-h-0 opacity-0 py-0" : "max-h-16 opacity-100"
          }`}
        >
          <div className="uw-container py-2.5">
            <div className="flex justify-between items-center text-xs sm:text-sm font-heading font-medium tracking-wider">
              <div className="hidden sm:flex items-center space-x-6">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary shrink-0" />
                  <span className="hover:text-primary transition-colors cursor-default">
                    {tCommon("location")}
                  </span>
                </div>
                <span className="text-white/30">|</span>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary shrink-0" />
                  <span className="hover:text-primary transition-colors cursor-default">
                    {tCommon("hours")}
                  </span>
                </div>
              </div>

              <div className="flex items-center space-x-6 justify-between sm:justify-end w-full sm:w-auto">
                <div className="flex items-center gap-2">
                  <Headset className="w-4 h-4 text-primary shrink-0" />
                  <span className="font-semibold tracking-wider">
                    {tTopbar("reservations")}
                    <a
                      href={`tel:${tCommon("phone")}`}
                      className="hover:text-primary transition-colors"
                    >
                      {tCommon("phone")}
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* HEADER PRINCIPAL */}
        <div className="uw-container">
          <div className="grid grid-cols-3 items-center h-20 w-full">
            {/* COLUMNA 1: Menú / Links desktop */}
            <div className="flex items-center justify-start">
              <button
                onClick={() => setMenuOpen(true)}
                className="xl:hidden text-primary hover:text-white transition-colors h-11 inline-flex items-center justify-center cursor-pointer"
                aria-label={tCommon("open_menu")}
              >
                <Menu className="w-7 h-7 shrink-0" />
              </button>

              <nav className="hidden xl:flex space-x-6">
                {navItems.map((item) => (
                  <div
                    key={item.labelKey}
                    className="relative group flex items-center gap-2 cursor-pointer hover:text-primary transition-colors text-white h-20"
                  >
                    <a
                      href={`/${locale}${item.href}`}
                      className="uw-heading flex items-center gap-2"
                    >
                      {t(item.labelKey)}
                    </a>
                    {item.children && (
                      <ChevronDown className="w-5 h-5 transition-transform duration-200 group-hover:rotate-180" />
                    )}

                    {item.children && (
                      <div className="absolute left-0 top-20 hidden group-hover:flex flex-col w-64 bg-white overflow-hidden z-50 shadow-xl">
                        {item.children.map((child) => (
                          <a
                            key={child.labelKey}
                            href={`/${locale}${child.href}`}
                            className="px-5 py-3.5 text-[clamp(0.9375rem,calc(0.85rem+0.35vw),1.125rem)] leading-6.5 font-heading tracking-wider transition-colors text-black hover:bg-primary hover:text-white"
                          >
                            {t(child.labelKey)}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </div>

            {/* COLUMNA 2: Logo */}
            <div className="flex justify-center items-center">
              <Link href={`/${locale}`}>
                <img
                  src="/logo-white.webp"
                  alt={tCommon("logo_alt")}
                  className="h-10 sm:h-12 xl:h-14 w-auto object-contain transition-all"
                />
              </Link>
            </div>

            {/* COLUMNA 3: Idioma */}
            <div className="flex justify-end items-center">
              <div
                className="relative h-20 flex items-center"
                onMouseLeave={() => setLangOpen(false)}
              >
                <button
                  onClick={() => setLangOpen((v) => !v)}
                  className="bg-primary hover:opacity-90 text-primary-foreground text-sm sm:text-[clamp(0.9375rem,calc(0.85rem+0.35vw),1.125rem)] font-heading tracking-wider px-3 sm:px-5 h-10 sm:h-11 rounded-lg inline-flex items-center justify-center gap-1.5 sm:gap-2 transition-all cursor-pointer"
                >
                  <span className="text-base sm:text-lg">
                    {languageOptions.find((l) => l.code === locale)?.flag}
                  </span>
                  <span className="pt-0.5">{locale.toUpperCase()}</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-200 shrink-0 ${
                      langOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {langOpen && (
                  <div className="absolute right-0 top-20 flex flex-col w-44 sm:w-48 bg-white overflow-hidden z-50 shadow-xl border-t-2 border-primary">
                    {languageOptions.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => switchLocale(lang.code)}
                        className={`px-4 sm:px-5 py-3 sm:py-3.5 text-xs sm:text-[clamp(0.875rem,calc(0.8rem+0.25vw),1rem)] font-heading tracking-wider transition-colors flex items-center justify-between ${
                          lang.code === locale
                            ? "bg-primary text-white"
                            : "text-black hover:bg-primary/10 hover:text-primary"
                        }`}
                      >
                        <div className="flex items-center gap-2.5 sm:gap-3">
                          <span className="text-sm sm:text-base">
                            {lang.flag}
                          </span>
                          <span>{lang.codeUpper}</span>
                        </div>
                        <span className="text-[10px] sm:text-xs opacity-75 font-normal">
                          {tLang(lang.code)}
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* BACKDROP MOBILE */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 bg-black/70 z-50 transition-opacity duration-300 xl:hidden ${
          menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* DRAWER MOBILE */}
      <aside
        className={`fixed top-0 left-0 bottom-0 w-[85%] max-w-sm bg-black border-r border-white/10 z-50 transition-transform duration-300 ease-in-out xl:hidden flex flex-col justify-between ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div>
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <span className="text-white font-heading tracking-wider text-lg font-semibold">
              {tCommon("menu")}
            </span>
            <button
              onClick={() => setMenuOpen(false)}
              className="text-white/70 hover:text-primary transition-colors cursor-pointer"
              aria-label={tCommon("close_menu")}
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="p-6 flex flex-col space-y-4">
            {navItems.map((item) => (
              <div key={item.labelKey} className="border-b border-white/10 pb-4">
                {item.children ? (
                  <div>
                    <button
                      onClick={() => setAccordionOpen((v) => !v)}
                      className="flex items-center justify-between w-full text-white font-heading tracking-wider text-base hover:text-primary transition-colors cursor-pointer"
                    >
                      <span>{t(item.labelKey)}</span>
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-200 ${
                          accordionOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`flex-col pl-4 mt-3 space-y-3 ${
                        accordionOpen ? "flex" : "hidden"
                      }`}
                    >
                      {item.children.map((child) => (
                        <a
                          key={child.labelKey}
                          href={`/${locale}${child.href}`}
                          className="text-white/70 font-heading tracking-wider text-sm hover:text-primary transition-colors block"
                        >
                          {t(child.labelKey)}
                        </a>
                      ))}
                    </div>
                  </div>
                ) : (
                  <a
                    href={`/${locale}${item.href}`}
                    className="text-white font-heading tracking-wider text-base hover:text-primary transition-colors block"
                  >
                    {t(item.labelKey)}
                  </a>
                )}
              </div>
            ))}
          </nav>
        </div>

        <div className="p-6 border-t border-white/10 bg-black/40 text-white font-heading tracking-wider text-xs sm:text-sm space-y-3">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary shrink-0" />
            <span>{tCommon("location")}</span>
          </div>
          <div className="flex items-center gap-2">
            <Headset className="w-4 h-4 text-primary shrink-0" />
            <span className="font-semibold">
              {tTopbar("reservations")}
              {tCommon("phone")}
            </span>
          </div>
        </div>
      </aside>
    </>
  );
}
