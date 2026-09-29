import PageHero from "@/components/uiwave/PageHero";
import ContactInfoSection from "@/components/sections/contact/ContactInfoSection";
import ContactFormSection from "@/components/sections/contact/ContactFormSection";

export default function ContactPage() {
  return (
    <>
      <PageHero title="Contacto" image="/images/Tour-a-Machu-Picchu-03.webp" />
      <ContactInfoSection />
      <ContactFormSection />
    </>
  );
}
