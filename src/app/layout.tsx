import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Vacacional de Colores 2026 | Buena Vista Club de Tenis",
  description:
    "Vacacional infantil del 22 de junio al 28 de agosto. +16 actividades, kit de bienvenida y ciclos de 2 semanas. Reserva por WhatsApp 095 868 9486.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${raleway.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-[family-name:var(--font-raleway)]">
        {children}
      </body>
    </html>
  );
}
