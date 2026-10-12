"use client";

import { Suspense, useEffect, useState } from "react";
import { cn } from "cn";
import { ArrowRight, Clock, MapPin, Menu, Phone } from "lucide-react";
import LanguageSelector from "./LanguageSelector";
import MobileDrawer from "./MobileDrawer";
import { ROUTES } from "@/config/routes";
import { Link, usePathname } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { NAV_ITEMS } from "@/data/navItems";
import { siteConfig } from "@/site";

export function Header() {
  const t = useTranslations("header");
  const tCommon = useTranslations("common");
  const pathname = usePathname();
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
      <header className="relative z-50">
        <div className="border-border bg-background border-b">
          <div className="uw-container-wide text-foreground flex items-center justify-between py-1.5 text-xs">
            <div className="flex items-center gap-6">
              <span className="hidden items-center gap-2 md:flex">
                <MapPin className="text-primary size-3.5" aria-hidden="true" />
                {t("topbar.address")}
              </span>
              <span className="hidden items-center gap-2 md:flex">
                <Clock className="text-primary size-3.5" aria-hidden="true" />
                {t("topbar.hours")}
              </span>
            </div>
            <div className="flex items-center gap-6">
              <a
                href={`tel:+51${siteConfig.contact.phone}`}
                className="hover:text-primary flex items-center gap-2 transition-colors"
              >
                <Phone className="text-primary size-3.5" aria-hidden="true" />
                +51 {siteConfig.contact.phone}
              </a>
              <Suspense>
                <LanguageSelector />
              </Suspense>
            </div>
          </div>
        </div>

        <div
          className={cn(
            "bg-background sticky top-0 z-50 transition-all duration-300",
            scrolled && "shadow-[0_0_10px_rgba(0,0,0,0.07)]",
          )}
        >
          <div
            aria-hidden="true"
            className="bg-primary pointer-events-none absolute top-0 left-0 h-full w-[28%] xl:w-[22%]"
            style={{
              maskImage: "url('/images/bg/logo_bg_mask.png')",
              WebkitMaskImage: "url('/images/bg/logo_bg_mask.png')",
              maskSize: "100% 100%",
              WebkitMaskSize: "100% 100%",
              maskRepeat: "no-repeat",
              WebkitMaskRepeat: "no-repeat",
            }}
          />

          <div className="uw-container-wide relative flex items-center justify-between py-4 xl:h-[92px] xl:py-0">
            <div className="relative flex items-center gap-4">
              <Link href={ROUTES.HOME}>
                <img
                  src="/logo-white.webp"
                  alt={siteConfig.name}
                  className="h-10 w-auto object-contain transition-all sm:h-12 xl:h-14"
                />
              </Link>

              <nav className="hidden xl:block">
                <ul className="flex items-center">
                  {NAV_ITEMS.map((item) => {
                    const isActive =
                      item.href === "/"
                        ? pathname === "/"
                        : pathname === item.href ||
                          pathname.startsWith(`${item.href}/`);

                    return (
                      <li key={item.id}>
                        <Link
                          href={item.href}
                          aria-current={isActive ? "page" : undefined}
                          className={cn(
                            "text-foreground hover:text-primary relative flex py-8 pl-7 text-base font-normal transition-colors after:absolute after:right-7 after:bottom-6 after:left-7 after:h-px after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-[calc(100%-3.5rem)]",
                            isActive &&
                              "text-primary after:w-[calc(100%-3.5rem)]",
                          )}
                        >
                          {t(item.label)}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>

            <div className="relative flex items-center gap-4">
              <Link
                href={ROUTES.TOURS}
                className="bg-secondary group relative hidden items-center justify-center overflow-hidden rounded-full px-7 py-[14px] xl:inline-flex xl:px-8.75 xl:py-[18.8px]"
              >
                <div className="bg-primary absolute inset-0 -translate-x-full rounded-full transition-transform duration-300 ease-out group-hover:translate-x-0" />
                <div className="relative z-10 inline-flex items-center gap-2 text-white transition-colors duration-300">
                  <span className="text-base font-normal">
                    {tCommon("bookNow")}
                  </span>
                  <ArrowRight className="size-5" />
                </div>
              </Link>

              <button
                type="button"
                onClick={() => setDrawerOpen(true)}
                aria-label={t("menu.openAria")}
                className="text-secondary hover:text-primary inline-flex size-11 cursor-pointer items-center justify-center transition-colors xl:hidden"
              >
                <Menu className="size-7" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}
