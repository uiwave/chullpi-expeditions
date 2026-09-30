import { Send } from "lucide-react";

import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

import { siteConfig } from "@/site";

import { NAV_ITEMS } from "@/data/navItems";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("header");
  const tf = useTranslations("footer");
  return (
    <footer className="relative w-full overflow-hidden bg-black/50">
      <img
        src="/images/bg/uw.webp"
        alt=""
        className="pointer-events-none absolute top-0 left-0 z-10 w-full rotate-180"
      />
      <div className="relative">
        <img
          src="/images/bg/background_pattern.png"
          alt=""
          className="pointer-events-none absolute right-0 bottom-0 z-0"
        />

        <div className="uw-container relative pt-40 text-white">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3 lg:gap-16">
            <div className="flex flex-col items-start gap-6">
              <img
                src="/logo-white.webp"
                alt={tf("logoAlt")}
                className="h-12 w-auto object-contain xl:h-14"
              />
              <p>{tf("description")}</p>
              <div className="flex items-center gap-3">
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:bg-primary flex size-10 items-center justify-center rounded-full bg-white/10 transition-colors"
                >
                  <FaFacebook />
                </a>
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:bg-primary flex size-10 items-center justify-center rounded-full bg-white/10 transition-colors"
                >
                  <FaInstagram />
                </a>
                <a
                  href={siteConfig.social.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:bg-primary flex size-10 items-center justify-center rounded-full bg-white/10 transition-colors"
                >
                  <FaTiktok />
                </a>
              </div>
            </div>
            <div className="flex flex-col justify-center text-center">
              <h3 className="font-heading text-[clamp(1.875rem,1.25rem+1.563vw,2.75rem)] leading-none tracking-wider">
                {tf("newsletter.title")}
              </h3>
              <form className="mt-6 flex flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  required
                  placeholder={tf("newsletter.emailPlaceholder")}
                  className="bg-card border-border focus:border-primary focus:ring-primary/20 w-full rounded-lg border px-4 py-3 text-sm text-white focus:ring-2 focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-primary text-primary-foreground font-heading inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm tracking-wider transition-opacity hover:opacity-90"
                >
                  {tf("newsletter.submit")}
                  <Send className="size-4" />
                </button>
              </form>
            </div>
            <div className="flex flex-col items-center gap-4">
              <h3 className="font-heading text-[clamp(1.5rem,1.054rem+1.116vw,2.125rem)] tracking-wider">
                {tf("links.title")}
              </h3>
              <ul className="flex flex-col gap-2">
                {NAV_ITEMS.map((link) => (
                  <li key={link.id}>
                    <Link
                      href={link.href}
                      className="font-heading tracking-wider"
                    >
                      {t(link.label)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="font-heading from-primary mt-10 bg-linear-to-b to-white bg-clip-text text-center text-[clamp(4.688rem,-9.821rem+36.272vw,25rem)] leading-none text-transparent">
            {tf("watermark")}
          </p>
        </div>
      </div>
    </footer>
  );
}
