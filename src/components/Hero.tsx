import Image from "next/image";
import ColorfulTitle from "./ColorfulTitle";
import FloatingFigures from "./FloatingFigures";
import WhatsAppButton from "./WhatsAppButton";

export default function Hero() {
  return (
    <header className="relative min-h-[100svh] overflow-hidden">
      <Image
        src="/images/galeria-grupo.png"
        alt="Niños disfrutando el Vacacional de Colores"
        fill
        priority
        className="object-cover object-[center_30%]"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#4eb8f5]/75 via-[#ffe14a]/55 to-[#e8f7ff]" />
      <div className="absolute inset-0 hero-wave opacity-30 mix-blend-overlay" />

      <svg
        className="absolute bottom-0 left-0 w-full text-[#e8f7ff]"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          fill="currentColor"
          d="M0,64 C320,120 640,0 960,48 C1120,72 1280,96 1440,64 L1440,120 L0,120 Z"
        />
      </svg>

      <FloatingFigures />

      <nav className="relative z-20 flex items-center justify-between px-4 py-4 md:px-8">
        <p className="rounded-full bg-white/80 px-4 py-1.5 font-[family-name:var(--font-display)] text-sm font-bold text-[#1a2b6b] shadow-sm backdrop-blur md:text-base">
          Buena Vista Club de Tenis
        </p>
        <div className="hidden gap-1 rounded-full bg-white/80 p-1 text-sm font-semibold text-[#1a2b6b]/80 shadow-sm backdrop-blur md:flex">
          <a href="#vacacional" className="rounded-full px-4 py-1.5 hover:bg-[#e91e8c] hover:text-white">
            Vacacional
          </a>
          <a href="#galeria" className="rounded-full px-4 py-1.5 hover:bg-[#e91e8c] hover:text-white">
            Galería
          </a>
          <a href="#torneos" className="rounded-full px-4 py-1.5 hover:bg-[#e91e8c] hover:text-white">
            Torneos
          </a>
          <a href="/tree" className="rounded-full px-4 py-1.5 hover:bg-[#e91e8c] hover:text-white">
            Links
          </a>
        </div>
      </nav>

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-88px)] max-w-5xl flex-col items-center justify-center px-4 pb-20 pt-6 text-center">
        <ColorfulTitle
          text="Vacacional de Colores"
          className="max-w-4xl text-[clamp(2.6rem,9vw,5.75rem)]"
        />

        <p className="mt-6 max-w-md text-base font-extrabold leading-relaxed text-[#1a2b6b] drop-shadow-[0_1px_8px_rgba(255,255,255,0.9)] md:text-lg">
          ¡Este verano será inolvidable! Deporte, creatividad y nuevos amigos.
        </p>

        <div className="mt-8">
          <WhatsAppButton />
        </div>
      </div>
    </header>
  );
}
