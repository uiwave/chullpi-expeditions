import {
  ChevronRight,
  Clock,
  Headset,
  Mail,
  MapPin,
  Send,
} from "lucide-react";

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4">
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <path d="m10 15 5-3-5-3z" />
  </svg>
);

const quickLinks = [
  { label: "Inicio", href: "/" },
  { label: "Destinos", href: "/tours" },
  { label: "Cusco", href: "/tours?destination=Cusco" },
  { label: "Arequipa", href: "/tours?destination=Arequipa" },
  { label: "Puno", href: "/tours?destination=Puno" },
  { label: "Ica", href: "/tours?destination=Ica" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Contacto", href: "/contacto" },
];

const socials = [
  { icon: InstagramIcon, label: "Instagram", href: "#" },
  { icon: FacebookIcon, label: "Facebook", href: "#" },
  { icon: YoutubeIcon, label: "YouTube", href: "#" },
];

const contactItems = [
  { icon: MapPin, text: "Cusco, Perú" },
  { icon: Headset, text: "+51 123 456 789" },
  { icon: Mail, text: "hola@travelink.com" },
  { icon: Clock, text: "Lun – Dom: 8:00 – 19:00" },
];

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden">
      <img
        src="/images/bg/hero-bg.webp"
        alt=""
        className="pointer-events-none absolute top-0 left-0 z-10 w-full rotate-180"
      />
      <div className="relative">
        <img
          src="/images/Tour-a-Machu-Picchu-03.webp"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-background/80" />

        <div className="relative uw-container uw-section text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {/* MARCA */}
            <div className="flex flex-col items-start gap-6">
              <img
                src="/logo-white.webp"
                alt="TRAVELINK Logo"
                className="h-12 xl:h-14 w-auto object-contain"
              />
              <p className="text-foreground">
                Expediciones únicas por Perú. Diseñamos viajes a tu medida,
                combinando experiencia local y tecnología para que cada
                experiencia sea segura y memorable.
              </p>
              <div className="flex items-center gap-3">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex size-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <social.icon />
                  </a>
                ))}
              </div>
            </div>

            {/* CONTACTO + NEWSLETTER */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-3">
                <h3 className="font-heading tracking-wider text-white">
                  Contacto
                </h3>
                {contactItems.map((item) => (
                  <div
                    key={item.text}
                    className="flex items-center gap-3 text-foreground"
                  >
                    <item.icon className="size-4 text-primary shrink-0" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="font-heading tracking-wider text-white">
                  Recibe nuestras ofertas
                </h3>
                <form className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    required
                    placeholder="Tu correo electrónico"
                    className="w-full rounded-lg bg-surface border border-border px-4 py-3 text-sm text-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary text-primary-foreground px-5 py-3 text-sm font-heading tracking-wider transition-opacity hover:opacity-90"
                  >
                    Suscribirse
                    <Send className="size-4" />
                  </button>
                </form>
              </div>
            </div>

            {/* ENLACES */}
            <div className="flex flex-col gap-4">
              <h3 className="font-heading tracking-wider text-white">
                Enlaces
              </h3>
              <ul className="flex flex-col gap-2">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="font-heading tracking-wider text-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-14 flex items-center justify-between border-t border-white/10 pt-6 text-sm text-muted">
            <span>© {new Date().getFullYear()} TRAVELINK. Todos los derechos reservados.</span>
            <a
              href="#top"
              className="hidden sm:flex items-center gap-1 font-heading tracking-wider text-muted transition-colors hover:text-primary"
            >
              Volver arriba
              <ChevronRight className="size-4 -rotate-90" />
            </a>
          </div>

          <p
            aria-hidden="true"
            className="mt-10 select-none text-center font-heading leading-none text-white/10 text-[clamp(4.688rem,-9.821rem+36.272vw,25rem)]"
          >
            TRAVELINK
          </p>
        </div>
      </div>
    </footer>
  );
}