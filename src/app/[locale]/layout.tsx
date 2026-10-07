import { hasLocale, NextIntlClientProvider } from "next-intl";
import { cn } from "@/lib/utils";
import "./globals.css";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { inter, manrope, montez } from "@/lib/fonts";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html
      lang={locale}
      className={cn(
        "h-full antialiased",
        "font-sans",
        manrope.variable,
        inter.variable,
        montez.variable,
      )}
    >
      <body>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
