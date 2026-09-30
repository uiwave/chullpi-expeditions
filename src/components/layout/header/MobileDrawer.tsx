import { useState } from "react";
import { X, ChevronDown, MapPin, Headset } from "lucide-react";
import { NAV_ITEMS } from "@/data/navItems";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function MobileDrawer({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [accordionOpen, setAccordionOpen] = useState(false);
  const t = useTranslations("header");

  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 z-50 bg-black/70 transition-opacity duration-300 xl:hidden ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 flex w-[85%] max-w-sm flex-col justify-between border-r border-white/10 bg-black transition-transform duration-300 ease-in-out xl:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div>
          <div className="flex items-center justify-between border-b border-white/10 p-6">
            <span className="font-heading text-lg font-semibold tracking-wider text-white">
              {t("menu.title")}
            </span>
            <button
              onClick={onClose}
              className="hover:text-primary cursor-pointer text-white/70 transition-colors"
              aria-label={t("menu.closeAria")}
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="flex flex-col space-y-4 p-6">
            {NAV_ITEMS.map((item) => (
              <div key={item.id} className="border-b border-white/10 pb-4">
                {item.children ? (
                  <div>
                    <button
                      onClick={() => setAccordionOpen((v) => !v)}
                      className="font-heading hover:text-primary flex w-full cursor-pointer items-center justify-between text-base tracking-wider text-white transition-colors"
                    >
                      <span>{t(item.label)}</span>
                      <ChevronDown
                        className={`h-5 w-5 transition-transform duration-200 ${
                          accordionOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`mt-3 flex-col space-y-3 pl-4 ${
                        accordionOpen ? "flex" : "hidden"
                      }`}
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          onClick={onClose}
                          className="font-heading hover:text-primary block text-sm tracking-wider text-white/70 transition-colors"
                        >
                          {t(child.label)}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="font-heading hover:text-primary block text-base tracking-wider text-white transition-colors"
                  >
                    {t(item.label)}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>

        <div className="font-heading space-y-3 border-t border-white/10 bg-black/40 p-6 text-xs tracking-wider text-white sm:text-sm">
          <div className="flex items-center gap-2">
            <MapPin className="text-primary h-4 w-4 shrink-0" />
            <span>{t("contact.location")}</span>
          </div>
          <div className="flex items-center gap-2">
            <Headset className="text-primary h-4 w-4 shrink-0" />
            <span className="font-semibold">
              {t("contact.bookings", { phone: "+51 123 456 789" })}
            </span>
          </div>
        </div>
      </aside>
    </>
  );
}
