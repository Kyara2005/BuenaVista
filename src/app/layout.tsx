import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import Providers from "@/components/Providers";
import "./globals.css";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Buena Vista Club de Tenis | Deporte, bienestar y comunidad",
  description:
    "Más de 40 años construyendo deporte, bienestar y comunidad. Tenis, vacacionales, torneos y vida social en Club Buena Vista.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${raleway.variable} ${raleway.className} h-full`}>
      <body className={`${raleway.className} min-h-full antialiased text-gray-dark`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
