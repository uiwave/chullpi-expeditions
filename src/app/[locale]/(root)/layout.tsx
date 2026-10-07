import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {/* <Header /> */}
      <main>{children}</main>
      {/* <Footer /> */}
    </div>
  );
}
