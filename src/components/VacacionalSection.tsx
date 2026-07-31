import Image from "next/image";
import Link from "next/link";
import { asset } from "@/lib/paths";

const CARDS = [
  {
    href: "/vacacional/QuitoTenis",
    title: "Quito Tenis",
    subtitle: "Buena Vista Club de Tenis",
    image: asset("/images/flyer-club.png"),
    accent: "#e91e8c",
  },
  {
    href: "/vacacional/puembo",
    title: "Puembo",
    subtitle: "Plaza San Marcos",
    image: asset("/images/flyer-puembo.png"),
    accent: "#1e8fd6",
  },
];

export default function VacacionalSection() {
  return (
    <section id="vacacional" className="relative px-4 py-16 md:py-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          background:
            "radial-gradient(ellipse at 20% 30%, #ffe14a 0%, transparent 45%), radial-gradient(ellipse at 90% 60%, #ff6eb4 0%, transparent 40%)",
        }}
      />
      <div className="relative mx-auto max-w-5xl">
        <p className="mb-2 text-center font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-widest text-[#e91e8c]">
          Sedes 2026
        </p>
        <h2 className="mb-3 text-center font-[family-name:var(--font-display)] text-4xl font-bold text-[#1a2b6b] md:text-5xl">
          Vacacional
        </h2>
        <p className="mx-auto mb-10 max-w-lg text-center text-[#1a2b6b]/75">
          Elige tu sede y vive el Vacacional de Colores más divertido del verano.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {CARDS.map((card) => (
            <article
              key={card.href}
              className="overflow-hidden rounded-[1.75rem] bg-white shadow-[0_14px_0_rgba(26,43,107,0.12)] ring-1 ring-[#1a2b6b]/8"
            >
              <div className="relative aspect-[4/5] bg-[#e8f7ff]">
                <Image
                  src={card.image}
                  alt={`Flyer ${card.title}`}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold text-[#1a2b6b]">
                    {card.title}
                  </h3>
                  <p className="text-sm text-[#1a2b6b]/70">{card.subtitle}</p>
                </div>
                <Link
                  href={card.href}
                  className="inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5"
                  style={{ backgroundColor: card.accent }}
                >
                  Más información
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
