import { hasLocale, NextIntlClientProvider } from "next-intl";
import { cn } from "cn";
import "./globals.css";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { inter, manrope, montez } from "@/lib/fonts";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { siteConfig } from "@/site";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    return {};
  }

  const t = await getTranslations({ locale, namespace: "meta" });

  return {
    metadataBase: new URL("https://chullpiexpeditions.com"),
    title: {
      template: t("template"),
      default: t("default"),
    },
    description: t("description"),
    openGraph: {
      siteName: siteConfig.name,
      locale,
      type: "website",
    },
  };
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
