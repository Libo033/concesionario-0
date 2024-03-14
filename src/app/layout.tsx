import type { Metadata } from "next";
import { Titillium_Web } from "next/font/google";
import "./globals.css";
import NavigationBar from "@/componentes/navigation/NavigationBar";
import Footer from "@/componentes/others/Footer";

const titi = Titillium_Web({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: "LIBO Automotores",
  description: "Compra y vende autos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={titi.className}>
        <NavigationBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
