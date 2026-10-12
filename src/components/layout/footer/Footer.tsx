import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa6";
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import { NAV_ITEMS } from "@/data/navItems";
import { ROUTES } from "@/config/routes";
import { siteConfig } from "@/site";

const INSTAGRAM_POSTS = [
  "/images/Tour-a-Machu-Picchu-03.webp",
  "/images/Montana-de-colores-06.webp",
  "/images/Tour-Canon-del-Colca-02.webp",
  "/images/City-Tour-Cusco-03.webp",
  "/images/Tour-Huacachina-Buggy-Sandboarding-02.webp",
  "/images/Chullpas-de-Sillustani-02.webp",
];

const SOCIAL_LINKS = [
  { href: siteConfig.social.facebook, Icon: FaFacebookF, label: "Facebook" },
  { href: siteConfig.social.instagram, Icon: FaInstagram, label: "Instagram" },
  { href: siteConfig.social.tiktok, Icon: FaTiktok, label: "TikTok" },
  {
    href: `https://wa.me/51${siteConfig.contact.phone}`,
    Icon: FaWhatsapp,
    label: "WhatsApp",
  },
];

export async function Footer() {
  const t = await getTranslations("footer");
  const tHeader = await getTranslations("header");
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-20 overflow-hidden">
      <div className="pt-16 pb-12 xl:pt-[100px] xl:pb-[46px]">
        <div className="uw-container">
          <div className="grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 xl:grid-cols-4">
            {/* Widget: About */}
            <div>
              <Link
                href={ROUTES.HOME}
                className="mb-8 inline-flex rounded-2xl bg-secondary p-3 sm:p-4"
              >
                <img
                  src="/logo-white.webp"
                  alt={siteConfig.name}
                  className="h-9 w-auto object-contain sm:h-11"
                />
              </Link>
              <p className="text-foreground mb-5 max-w-[320px] text-base leading-relaxed">
                {t("about")}
              </p>
              <div className="flex gap-3">
                {SOCIAL_LINKS.map(({ href, Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="bg-[#E9F6F9] text-primary hover:bg-primary hover:text-white flex size-8 items-center justify-center rounded-full text-sm transition-colors duration-300"
                  >
                    <Icon aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>

            {/* Widget: Quick Links */}
            <div>
              <h3 className="text-secondary font-heading mb-[30px] text-2xl font-semibold">
                {t("quickLinks")}
              </h3>
              <ul>
                {NAV_ITEMS.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={item.href}
                      className="text-[#888C97] hover:text-primary relative mb-[21px] block w-max pl-5 text-base font-normal transition-colors before:absolute before:top-0 before:left-0 before:font-bold before:content-['›'] last:mb-0"
                    >
                      {tHeader(item.label)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Widget: Address */}
            <div>
              <h3 className="text-secondary font-heading mb-[30px] text-2xl font-semibold">
                {t("addressTitle")}
              </h3>
              <div className="space-y-[18px]">
                <div className="group flex gap-4">
                  <span className="bg-[#E9F6F9] text-primary group-hover:bg-primary group-hover:text-white flex size-10 shrink-0 items-center justify-center rounded-full transition-colors duration-300">
                    <Phone className="size-4" aria-hidden="true" />
                  </span>
                  <a
                    href={`tel:+51${siteConfig.contact.phone}`}
                    className="text-foreground hover:text-primary text-base leading-relaxed transition-colors"
                  >
                    +51 {siteConfig.contact.phone}
                  </a>
                </div>
                <div className="group flex gap-4">
                  <span className="bg-[#E9F6F9] text-primary group-hover:bg-primary group-hover:text-white flex size-10 shrink-0 items-center justify-center rounded-full transition-colors duration-300">
                    <Mail className="size-4" aria-hidden="true" />
                  </span>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-foreground hover:text-primary text-base leading-relaxed transition-colors"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
                <div className="group flex gap-4">
                  <span className="bg-[#E9F6F9] text-primary group-hover:bg-primary group-hover:text-white flex size-10 shrink-0 items-center justify-center rounded-full transition-colors duration-300">
                    <MapPin className="size-4" aria-hidden="true" />
                  </span>
                  <p className="text-foreground text-base leading-relaxed">
                    {t("address")}
                  </p>
                </div>
              </div>
            </div>

            {/* Widget: Instagram */}
            <div>
              <h3 className="text-secondary font-heading mb-[30px] text-2xl font-semibold">
                {t("instagramTitle")}
              </h3>
              <div className="grid max-w-[312px] grid-cols-3 gap-3">
                {INSTAGRAM_POSTS.map((src) => (
                  <a
                    key={src}
                    href={siteConfig.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={t("instagramTitle")}
                    className="group relative aspect-square overflow-hidden rounded"
                  >
                    <Image
                      src={src}
                      alt=""
                      fill
                      sizes="104px"
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <span className="bg-primary/0 text-white absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-300 group-hover:bg-primary/80 group-hover:opacity-100">
                      <FaInstagram className="size-5" aria-hidden="true" />
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-[#262A36] py-[18px]">
        <div className="uw-container">
          <p className="text-white text-center text-sm md:text-left">
            Copyright {year}{" "}
            <Link
              href={ROUTES.HOME}
              className="hover:text-primary transition-colors"
            >
              {siteConfig.name}
            </Link>
            . {t("copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}
