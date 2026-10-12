"use client";

import { Suspense, useState } from "react";
import { cn } from "cn";
import { Clock, MapPin, Menu, Phone } from "lucide-react";
import LanguageSelector from "./LanguageSelector";
import MobileDrawer from "./MobileDrawer";
import { ROUTES } from "@/config/routes";
import { Link, usePathname } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { NAV_ITEMS } from "@/data/navItems";
import { siteConfig } from "@/site";
import Button from "@/components/uiwave/Button";

export function Header() {
  const t = useTranslations("header");
  const tCommon = useTranslations("common");
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 right-0 left-0 z-50 bg-white text-black">
        <div className="border-border/50 mx-auto flex items-center justify-between border px-4 py-1.5 sm:px-8 xl:px-16">
          <div className="flex items-center gap-6">
            <span className="hidden items-center gap-2 md:flex">
              <MapPin className="size-4" />
              <span className="text-sm font-medium">{t("topbar.address")}</span>
            </span>
            <span className="hidden items-center gap-2 md:flex">
              <Clock className="size-4" />
              <span className="text-sm font-medium">{t("topbar.hours")}</span>
            </span>
            <span className="hidden items-center gap-2 md:flex">
              <Phone className="size-4" />
              <span className="text-sm font-medium">
                +51 {siteConfig.contact.phone}
              </span>
            </span>
          </div>
          <div className="flex items-center gap-6">
            <Suspense>
              <LanguageSelector />
            </Suspense>
          </div>
        </div>

        <div className="relative transition-all duration-300">
          <div
            className="bg-primary pointer-events-none absolute top-0 left-0 h-full w-[40%] sm:w-[34%] lg:w-[26%] xl:w-[18%]"
            style={{
              maskImage: "url('/images/bg/logo_bg_mask.png')",
              WebkitMaskImage: "url('/images/bg/logo_bg_mask.png')",
              maskSize: "100% 100%",
              WebkitMaskSize: "100% 100%",
            }}
          />

          <div className="relative mx-auto flex items-center justify-between px-4 py-4 sm:px-8 xl:h-23 xl:px-16 xl:py-0">
            <Link href={ROUTES.HOME}>
              <img
                src="/logo-white.webp"
                alt={siteConfig.name}
                className="h-10 w-auto object-contain transition-all sm:h-12 xl:h-14"
              />
            </Link>
            <nav className="hidden xl:block">
              <ul className="flex items-center gap-10.5">
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
                          "relative flex py-8 text-base font-normal",
                          "after:absolute after:right-0 after:bottom-7 after:left-0 after:h-px after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full",
                          isActive && "after:w-full",
                        )}
                      >
                        {t(item.label)}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="relative flex items-center gap-4">
              <Button
                label={tCommon("bookNow")}
                href={ROUTES.TOURS}
                variant="secondary"
                size="md"
                className="hidden xl:flex"
              />

              <button
                type="button"
                onClick={() => setDrawerOpen(true)}
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
