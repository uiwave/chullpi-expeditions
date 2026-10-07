"use client";

import Image from "next/image";
import { User, Mail, ChevronDown, MessageSquare, Send, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export default function Banner() {
  const t = useTranslations("contact.form");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Lógica para enviar el formulario o Server Action
  };

  return (
    <section
      aria-labelledby="book-tour-title"
      className="relative w-full min-h-[640px] lg:min-h-[720px] flex items-center py-16 lg:py-24 text-foreground overflow-hidden"
    >
      {/* Imagen de fondo con overlay */}
      <Image
        src="/images/hero/hero_bg_1_1.jpg"
        alt=""
        fill
        priority
        quality={85}
        sizes="100vw"
        className="object-cover object-center -z-20"
      />
      <div className="absolute inset-0 bg-black/25 -z-10" aria-hidden="true" />

      <div className="uw-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Columna Izquierda: Tarjeta del Formulario */}
          <div className="lg:col-span-5 xl:col-span-5 w-full">
            <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl border border-border/40">
              <h2
                id="book-tour-title"
                className="font-heading font-bold text-secondary text-2xl sm:text-3xl mb-6 lg:mb-8"
              >
                {t("title")}
              </h2>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {/* Campo: Nombre */}
                <div className="relative">
                  <label htmlFor="firstName" className="sr-only">
                    {t("fields.firstName")}
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    placeholder={t("fullNamePlaceholder")}
                    className="w-full h-13 pl-5 pr-12 rounded-lg border border-border/80 bg-background text-sm text-secondary placeholder:text-foreground/60 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  />
                  <User
                    className="absolute right-4 top-1/2 -translate-y-1/2 size-5 text-foreground/50 pointer-events-none"
                    aria-hidden="true"
                  />
                </div>

                {/* Campo: Correo Electrónico */}
                <div className="relative">
                  <label htmlFor="email" className="sr-only">
                    {t("fields.email")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder={t("emailPlaceholder")}
                    className="w-full h-13 pl-5 pr-12 rounded-lg border border-border/80 bg-background text-sm text-secondary placeholder:text-foreground/60 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  />
                  <Mail
                    className="absolute right-4 top-1/2 -translate-y-1/2 size-5 text-foreground/50 pointer-events-none"
                    aria-hidden="true"
                  />
                </div>

                {/* Campo: Selector de Tipo de Tour */}
                {/* <div className="relative">
                  <label htmlFor="tourType" className="sr-only">
                    {t("fields.tourType")}
                  </label>
                  <select
                    id="tourType"
                    name="tourType"
                    defaultValue=""
                    required
                    className="w-full h-13 pl-5 pr-12 rounded-lg border border-border/80 bg-background text-sm text-secondary placeholder:text-foreground/60 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all appearance-none cursor-pointer"
                  >
                    <option value="" disabled hidden>
                      {t("fields.tourType")}
                    </option>

                    <option value="machu-picchu">Machu Picchu Tour</option>

                    <option value="sacred-valley">Sacred Valley Tour</option>

                    <option value="city-tour">Cusco City Tour</option>
                  </select>
                  <ChevronDown
                    className="absolute right-4 top-1/2 -translate-y-1/2 size-5 text-foreground/50 pointer-events-none"
                    aria-hidden="true"
                  />
                </div> */}

                {/* Campo: Mensaje */}
                <div className="relative">
                  <label htmlFor="message" className="sr-only">
                    {t("fields.message")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder={t("messagePlaceholder")}
                    className="w-full pl-5 pr-12 pt-3.5 rounded-lg border border-border/80 bg-background text-sm text-secondary placeholder:text-foreground/60 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                  />
                  <MessageSquare
                    className="absolute right-4 top-4 size-5 text-foreground/50 pointer-events-none"
                    aria-hidden="true"
                  />
                </div>

                {/* Botón de Envío */}
                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="secondary"
                    size="lg"
                    className="w-full sm:w-auto font-medium"
                  >
                    <span>{t("submitButton")}</span>
                    <Send className="size-4 -rotate-12" aria-hidden="true" />
                  </Button>
                </div>
              </form>
            </div>
          </div>

          {/* Columna Derecha: Botón Interactivo de Video */}
          <div className="lg:col-span-7 xl:col-span-7 flex items-center justify-center py-12 lg:py-0">
            <button
              type="button"
              aria-label={t("playVideo")}
              className="group relative size-20 sm:size-24 rounded-full bg-white/30 backdrop-blur-md border border-white/40 flex items-center justify-center text-white shadow-xl hover:scale-110 hover:bg-white/40 transition-all duration-300 cursor-pointer"
            >
              {/* Anillo de pulso sutil */}
              <span className="absolute inset-0 rounded-full bg-white/20 animate-ping opacity-75 pointer-events-none" />

              <Play className="size-8 sm:size-10 fill-white text-white translate-x-0.5 group-hover:scale-105 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}