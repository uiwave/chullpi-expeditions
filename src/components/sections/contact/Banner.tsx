"use client";

import Image from "next/image";
import { User, Mail, MessageSquare, Send, Play } from "lucide-react";
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
      className="text-foreground relative flex min-h-160 w-full items-center overflow-hidden py-16 lg:min-h-180 lg:py-24"
    >
      <Image
        src="/images/bg/tour_bg_1.jpg"
        alt=""
        fill
        priority
        quality={85}
        sizes="100vw"
        className="-z-20 object-cover object-center"
      />
      <div className="absolute inset-0 -z-10 bg-black/25" aria-hidden="true" />

      <div className="uw-container relative z-10">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
          <div className="w-full lg:col-span-5 xl:col-span-5">
            <div className="border-border/40 rounded-3xl border bg-white p-6 shadow-2xl sm:p-8 md:p-10">
              <h2
                id="book-tour-title"
                className="font-heading text-secondary mb-6 text-2xl font-bold sm:text-3xl lg:mb-8"
              >
                {t("title")}
              </h2>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
                    className="border-border/80 bg-background text-secondary placeholder:text-foreground/60 focus:border-primary focus:ring-primary h-13 w-full rounded-lg border pr-12 pl-5 text-sm transition-all focus:ring-1 focus:outline-none"
                  />
                  <User
                    className="text-foreground/50 pointer-events-none absolute top-1/2 right-4 size-5 -translate-y-1/2"
                    aria-hidden="true"
                  />
                </div>
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
                    className="border-border/80 bg-background text-secondary placeholder:text-foreground/60 focus:border-primary focus:ring-primary h-13 w-full rounded-lg border pr-12 pl-5 text-sm transition-all focus:ring-1 focus:outline-none"
                  />
                  <Mail
                    className="text-foreground/50 pointer-events-none absolute top-1/2 right-4 size-5 -translate-y-1/2"
                    aria-hidden="true"
                  />
                </div>
                <div className="relative">
                  <label htmlFor="message" className="sr-only">
                    {t("fields.message")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder={t("messagePlaceholder")}
                    className="border-border/80 bg-background text-secondary placeholder:text-foreground/60 focus:border-primary focus:ring-primary w-full resize-none rounded-lg border pt-3.5 pr-12 pl-5 text-sm transition-all focus:ring-1 focus:outline-none"
                  />
                  <MessageSquare
                    className="text-foreground/50 pointer-events-none absolute top-4 right-4 size-5"
                    aria-hidden="true"
                  />
                </div>
                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="secondary"
                    size="lg"
                    className="w-full font-medium sm:w-auto"
                  >
                    <span>{t("submitButton")}</span>
                    <Send className="size-4 -rotate-12" aria-hidden="true" />
                  </Button>
                </div>
              </form>
            </div>
          </div>
          <div className="flex items-center justify-center py-12 lg:col-span-7 lg:py-0 xl:col-span-7">
            <button
              type="button"
              aria-label={t("playVideo")}
              className="group relative flex size-20 cursor-pointer items-center justify-center rounded-full border border-white/40 bg-white/30 text-white shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-white/40 sm:size-24"
            >
              <span className="pointer-events-none absolute inset-0 animate-ping rounded-full bg-white/20 opacity-75" />

              <Play className="size-8 translate-x-0.5 fill-white text-white transition-transform group-hover:scale-105 sm:size-10" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
