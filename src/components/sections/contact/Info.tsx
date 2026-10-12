import Heading from "@/components/uiwave/Heading";
import { siteConfig } from "@/site";
import { MapPin, Phone, Mail, LucideIcon } from "lucide-react";
import { useTranslations } from "next-intl";

interface InfoCardProps {
  icon: LucideIcon;
  title: string;
  children: React.ReactNode;
}

function InfoCard({ icon: Icon, title, children }: InfoCardProps) {
  return (
    <div className="border-border/60 flex items-center gap-4.5 rounded-2xl border bg-white p-6 shadow-xs transition-shadow duration-300 hover:shadow-md lg:p-8">
      <div className="bg-secondary text-secondary-foreground flex size-14 shrink-0 items-center justify-center rounded-full shadow-xs sm:size-16">
        <Icon className="size-6 sm:size-7" aria-hidden="true" />
      </div>
      <div className="flex flex-col">
        <h3 className="font-heading text-secondary mb-1 text-lg font-bold sm:text-xl">
          {title}
        </h3>
        {children}
      </div>
    </div>
  );
}

export default function Info() {
  const t = useTranslations("contact.info");

  return (
    <section className="relative w-full py-30">
      <div className="uw-container relative z-10">
        <Heading
          subtitle={t("subtitle")}
          title={t("title")}
          description={t("description")}
          className="text-center"
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
          <InfoCard icon={MapPin} title={t("addressTitle")}>
            {siteConfig.contact.address}
          </InfoCard>
          <InfoCard icon={Phone} title={t("phoneTitle")}>
            <a
              href={`tel:+51${siteConfig.contact.phone}`}
              className="text-foreground hover:text-primary block text-sm leading-snug transition-colors sm:text-base"
            >
              +51 {siteConfig.contact.phone}
            </a>
          </InfoCard>
          <InfoCard icon={Mail} title={t("emailTitle")}>
            {siteConfig.contact.email}
          </InfoCard>
        </div>
      </div>
    </section>
  );
}
