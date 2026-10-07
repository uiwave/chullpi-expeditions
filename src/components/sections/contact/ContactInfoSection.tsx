import Heading from "@/components/uiwave/Heading";
import { CONTACT_INFO } from "@/data/contact";
import { MapPin, Phone, Mail } from "lucide-react";
import { getTranslations } from "next-intl/server";

export default async function ContactInfoSection() {
  const t = await getTranslations("contact");

  const cards = [
    {
      id: "location",
      Icon: MapPin,
      titleKey: "info.locationTitle",
      value: t("info.address"),
    },
    {
      id: "phone",
      Icon: Phone,
      titleKey: "info.phoneTitle",
      value: CONTACT_INFO.phone,
    },
    {
      id: "email",
      Icon: Mail,
      titleKey: "info.emailTitle",
      value: CONTACT_INFO.email,
    },
  ] as const;

  return (
    <section className="w-full overflow-hidden">
      <div className="uw-container uw-section">
        <Heading  subtitle={t("info.badge")} title={t("info.title")} />
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-16">
          {cards.map(({ id, Icon, titleKey, value }) => (
            <div
              key={id}
              className="bg-card border-border flex flex-col items-center rounded-2xl border p-6 text-center"
            >
              <Icon className="text-primary mb-4 size-6" />
              <h3 className="font-heading mb-2 text-2xl uppercase">
                {t(titleKey)}
              </h3>
              <p className="text-muted-foreground text-lg">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
