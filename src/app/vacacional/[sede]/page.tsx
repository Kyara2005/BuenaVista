import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { VACACIONALES } from "@/data/vacacionales";
import ColorfulTitle from "@/components/ColorfulTitle";
import FloatingFigures from "@/components/FloatingFigures";
import type { Metadata } from "next";

type Props = { params: Promise<{ sede: string }> };

export function generateStaticParams() {
  return [{ sede: "QuitoTenis" }, { sede: "puembo" }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { sede } = await params;
  const data = VACACIONALES[sede as keyof typeof VACACIONALES];
  if (!data) return { title: "Vacacional" };
  return {
    title: `${data.name} · ${data.subtitle} | Buena Vista`,
    description: `${data.dates}. ${data.ages}. Reserva al ${data.whatsappDisplay}.`,
  };
}

export default async function VacacionalPage({ params }: Props) {
  const { sede } = await params;
  const data = VACACIONALES[sede as keyof typeof VACACIONALES];
  if (!data) notFound();

  const wa = `https://wa.me/${data.whatsapp}?text=${encodeURIComponent(
    `¡Hola! Quiero información del Vacacional de Colores — ${data.subtitle}`
  )}`;

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#e8f7ff]">
      <div className="absolute inset-0 hero-wave opacity-40" />
      <FloatingFigures />

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-8 md:py-12">
        <Link
          href="/#vacacional"
          className="mb-6 inline-flex text-sm font-bold text-[#1a2b6b]/70 hover:text-[#e91e8c]"
        >
          ← Volver a Vacacional
        </Link>

        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-[1.75rem] shadow-2xl ring-4 ring-white">
            <Image
              src={data.flyer}
              alt={`Flyer ${data.name} ${data.subtitle}`}
              fill
              priority
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div>
            <ColorfulTitle text={data.name} className="text-[clamp(2rem,6vw,3.5rem)]" as="h1" />
            <p className="mt-3 font-[family-name:var(--font-display)] text-xl font-bold text-[#e91e8c]">
              {data.subtitle}
            </p>

            <ul className="mt-6 space-y-2 text-[#1a2b6b]">
              {data.highlights.map((h) => (
                <li key={h} className="text-base leading-relaxed md:text-lg">
                  {h}
                </li>
              ))}
            </ul>

            <dl className="mt-8 space-y-4">
              <InfoRow label="Fechas" value={data.dates} />
              <InfoRow label="Horario" value={data.schedule} />
              <InfoRow label="Edades" value={data.ages} />
              {data.location ? <InfoRow label="Lugar" value={data.location} /> : null}
            </dl>

            <div className="mt-8">
              <p className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-widest text-[#1e8fd6]">
                Actividades
              </p>
              <ul className="mt-2 flex flex-wrap gap-2">
                {data.activities.map((a) => (
                  <li
                    key={a}
                    className="rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-[#1a2b6b] shadow-sm"
                  >
                    {a}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <p className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-widest text-[#8fd12a]">
                Incluye
              </p>
              <ul className="mt-2 list-inside list-disc space-y-1 text-[#1a2b6b]/85">
                {data.includes.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>

            <div className="mt-8 rounded-[1.5rem] bg-white p-6 shadow-[0_12px_0_rgba(26,43,107,0.1)]">
              <p className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-widest text-[#ff7a1a]">
                {data.priceNote}
              </p>
              <div className="mt-4 flex flex-wrap gap-4">
                {data.prices.map((p) => (
                  <div key={p.label} className="min-w-[120px]">
                    <p className="text-sm font-semibold text-[#1a2b6b]/70">{p.label}</p>
                    <p className="font-[family-name:var(--font-display)] text-4xl font-black text-[#1a2b6b]">
                      {p.amount}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="pulse-wa mt-8 inline-flex items-center gap-3 rounded-full bg-[#25D366] px-7 py-4 text-base font-bold text-white shadow-lg transition hover:-translate-y-0.5"
            >
              ¡Reserva tu cupo! · {data.whatsappDisplay}
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-white/80 px-4 py-3 backdrop-blur">
      <dt className="text-xs font-bold uppercase tracking-wider text-[#e91e8c]">{label}</dt>
      <dd className="mt-0.5 font-semibold text-[#1a2b6b]">{value}</dd>
    </div>
  );
}
