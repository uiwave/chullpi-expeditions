import Heading from "@/components/uiwave/Heading";
import { MapPin, Phone, Mail } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Info() {
  const t = useTranslations("contact.info");

  return (
    <section
      aria-labelledby="contact-info-title"
      className="relative w-full py-16 lg:py-24"
    >
      <div className="uw-container relative z-10">
        {/* Cabecera de la sección */}
        <Heading
          subtitle={t("subtitle")}
          title={t("title")}
          description={t("description")}
          className="text-center"
        />

        {/* Grilla de Tarjetas de Contacto */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
          {/* Tarjeta 1: Dirección */}
          <div className="border-border/60 flex items-center gap-4.5 rounded-2xl border bg-white p-6 shadow-xs transition-shadow duration-300 hover:shadow-md lg:p-8">
            <div className="bg-secondary text-secondary-foreground flex size-14 shrink-0 items-center justify-center rounded-full shadow-xs sm:size-16">
              <MapPin className="size-6 sm:size-7" aria-hidden="true" />
            </div>
            <div className="flex flex-col">
              <h3 className="font-heading text-secondary mb-1 text-lg font-bold sm:text-xl">
                {t("addressTitle")}
              </h3>
              <address className="text-foreground text-sm leading-snug not-italic sm:text-base">
                {t("address.line1")}
                <br />
                {t("address.line2")}
              </address>
            </div>
          </div>

          {/* Tarjeta 2: Teléfono */}
          <div className="border-border/60 flex items-center gap-4.5 rounded-2xl border bg-white p-6 shadow-xs transition-shadow duration-300 hover:shadow-md lg:p-8">
            <div className="bg-secondary text-secondary-foreground flex size-14 shrink-0 items-center justify-center rounded-full shadow-xs sm:size-16">
              <Phone className="size-6 sm:size-7" aria-hidden="true" />
            </div>
            <div className="flex flex-col">
              <h3 className="font-heading text-secondary mb-1 text-lg font-bold sm:text-xl">
                {t("phoneTitle")}
              </h3>
              <a
                href="tel:+01234567890"
                className="text-foreground hover:text-primary block text-sm leading-snug transition-colors sm:text-base"
              >
                +01 234 567 890
              </a>
              <a
                href="tel:+09876543210"
                className="text-foreground hover:text-primary block text-sm leading-snug transition-colors sm:text-base"
              >
                +09 876 543 210
              </a>
            </div>
          </div>

          {/* Tarjeta 3: Correo Electrónico */}
          <div className="border-border/60 flex items-center gap-4.5 rounded-2xl border bg-white p-6 shadow-xs transition-shadow duration-300 hover:shadow-md lg:p-8">
            <div className="bg-secondary text-secondary-foreground flex size-14 shrink-0 items-center justify-center rounded-full shadow-xs sm:size-16">
              <Mail className="size-6 sm:size-7" aria-hidden="true" />
            </div>
            <div className="flex flex-col">
              <h3 className="font-heading text-secondary mb-1 text-lg font-bold sm:text-xl">
                {t("emailTitle")}
              </h3>
              <a
                href="mailto:mailinfo00@tourm.com"
                className="text-foreground hover:text-primary block text-sm leading-snug break-all transition-colors sm:text-base"
              >
                mailinfo00@tourm.com
              </a>
              <a
                href="mailto:support24@tourm.com"
                className="text-foreground hover:text-primary block text-sm leading-snug break-all transition-colors sm:text-base"
              >
                support24@tourm.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
