"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { ArrowRight, Send, X } from "lucide-react";
import { cn } from "cn";
import { siteConfig } from "@/site";

interface BookingSidebarProps {
  tourTitle: string;
  price: number;
}

const fieldClass =
  "border-border/80 bg-background text-secondary placeholder:text-foreground/60 focus:border-primary focus:ring-primary h-13 w-full rounded-lg border pr-5 pl-5 text-sm transition-all focus:ring-1 focus:outline-none";
const labelClass = "text-secondary mb-1.5 block text-sm font-medium";

export default function BookingSidebar({
  tourTitle,
  price,
}: BookingSidebarProps) {
  const t = useTranslations("tours.details.bookingWidget");
  const tCommon = useTranslations("common");
  const [open, setOpen] = useState(false);
  const [minDate, setMinDate] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (!open) return;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const lines = [
      "*Nueva reserva - Chullpi Expeditions*",
      "",
      `Tour: ${tourTitle}`,
      `Nombre: ${form.get("name")}`,
      `Email: ${form.get("email")}`,
      `WhatsApp: ${form.get("phone")}`,
      `Fecha: ${form.get("date")}`,
      `Mensaje: ${form.get("message") || "-"}`,
    ];
    const url = `https://wa.me/51${siteConfig.contact.phone}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setOpen(false);
  };

  return (
    <>
      <div className="bg-card border-border rounded-2xl border p-6">
        <div className="mb-5 flex items-baseline gap-1">
          <span className="text-primary text-[28px] font-semibold">
            ${price}
          </span>
          <span className="text-foreground text-base">
            /{tCommon("perPerson")}
          </span>
        </div>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="bg-secondary group relative inline-flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-full px-7 py-[14px]"
        >
          <div className="bg-primary absolute inset-0 -translate-x-full rounded-full transition-transform duration-300 ease-out group-hover:translate-x-0" />
          <span className="text-base relative z-10 inline-flex items-center gap-2 font-normal text-white">
            {t("bookButton")}
            <ArrowRight className="size-5" aria-hidden="true" />
          </span>
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 overflow-y-auto p-4 sm:flex sm:items-center sm:justify-center sm:p-6">
          <div
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black/70"
            aria-hidden="true"
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="booking-modal-title"
            className="relative z-10 my-6 w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl sm:p-8"
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <h2
                  id="booking-modal-title"
                  className="text-secondary font-heading text-2xl font-bold"
                >
                  {t("title")}
                </h2>
                <p className="text-foreground mt-1 text-sm">{tourTitle}</p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label={t("closeAria")}
                className="text-foreground hover:text-primary -mt-1 -mr-1 inline-flex size-9 shrink-0 cursor-pointer items-center justify-center rounded-full transition-colors"
              >
                <X className="size-5" aria-hidden="true" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label htmlFor="booking-tour" className={labelClass}>
                  {t("tourLabel")}
                </label>
                <input
                  id="booking-tour"
                  name="tour"
                  type="text"
                  value={tourTitle}
                  readOnly
                  className={cn(fieldClass, "cursor-not-allowed bg-muted/50")}
                />
              </div>

              <div>
                <label htmlFor="booking-name" className={labelClass}>
                  {t("nameLabel")}
                </label>
                <input
                  id="booking-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className={fieldClass}
                />
              </div>

              <div>
                <label htmlFor="booking-email" className={labelClass}>
                  {t("emailLabel")}
                </label>
                <input
                  id="booking-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className={fieldClass}
                />
              </div>

              <div>
                <label htmlFor="booking-phone" className={labelClass}>
                  {t("whatsappLabel")}
                </label>
                <input
                  id="booking-phone"
                  name="phone"
                  type="tel"
                  required
                  inputMode="tel"
                  autoComplete="tel"
                  placeholder="+51 999 888 777"
                  className={fieldClass}
                />
              </div>

              <div>
                <label htmlFor="booking-date" className={labelClass}>
                  {t("selectDate")}
                </label>
                <input
                  id="booking-date"
                  name="date"
                  type="date"
                  required
                  min={minDate}
                  onFocus={() =>
                    setMinDate(new Date().toISOString().split("T")[0])
                  }
                  className={fieldClass}
                />
              </div>

              <div>
                <label htmlFor="booking-message" className={labelClass}>
                  {t("messageLabel")}
                </label>
                <textarea
                  id="booking-message"
                  name="message"
                  rows={4}
                  placeholder={t("messagePlaceholder")}
                  className={cn(
                    fieldClass,
                    "h-auto resize-none pt-3.5 pb-3.5",
                  )}
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="bg-secondary group relative inline-flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-full px-8 py-[14px]"
                >
                  <div className="bg-primary absolute inset-0 -translate-x-full rounded-full transition-transform duration-300 ease-out group-hover:translate-x-0" />
                  <span className="text-base relative z-10 inline-flex items-center gap-2 font-normal text-white">
                    {t("submitButton")}
                    <Send
                      className="size-4 -rotate-12"
                      aria-hidden="true"
                    />
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
