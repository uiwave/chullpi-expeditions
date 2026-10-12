import localFont from "next/font/local";

export const inter = localFont({
  src: [
    {
      path: "../../public/fonts/Inter-VariableFont.woff2",
      style: "normal",
    },
    {
      path: "../../public/fonts/Inter-Italic-VariableFont.woff2",
      style: "italic",
    },
  ],
  variable: "--font-inter",
  weight: "100 900",
});

export const manrope = localFont({
  src: "../../public/fonts/Manrope-VariableFont_wght.woff2",
  variable: "--font-manrope",
  weight: "200 800",
});

export const montez = localFont({
  src: "../../public/fonts/Montez-Regular.woff2",
  variable: "--font-montez",
  weight: "400",
});
