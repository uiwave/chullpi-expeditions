import { useTranslations } from "next-intl";
import { NAV_ITEMS } from "@/data/navItems";
import { ChevronDown } from "lucide-react";
import { Link } from "@/i18n/navigation";

export default function DesktopNavigation() {
  const t = useTranslations("header");
  return (
    <>
      <nav className="hidden space-x-6 xl:flex">
        {NAV_ITEMS.map((item) => (
          <div
            key={item.id}
            className="group hover:text-primary relative flex h-20 cursor-pointer items-center gap-2 text-white transition-colors"
          >
            <Link
              href={item.href}
              className="font-heading flex items-center gap-2 text-[clamp(0.938rem,0.804rem+0.335vw,1.125rem)] leading-[0.95] tracking-normal"
            >
              {t(item.label)}
            </Link>
            {item.children && (
              <ChevronDown className="h-5 w-5 transition-transform duration-200 group-hover:rotate-180" />
            )}

            {item.children && (
              <div className="absolute top-20 left-0 z-50 hidden w-64 flex-col overflow-hidden bg-white shadow-xl group-hover:flex">
                {item.children.map((child) => (
                  <Link
                    key={child.id}
                    href={child.href}
                    className="font-heading hover:bg-primary px-5 py-3.5 text-[clamp(0.9375rem,calc(0.85rem+0.35vw),1.125rem)] leading-6.5 tracking-wider text-black transition-colors hover:text-white"
                  >
                    {t(child.label)}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </>
  );
}
