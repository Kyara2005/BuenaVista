"use client";

import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { VACACIONAL_META, type VacacionalSlug } from "@/data/vacacionales";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function VacacionalContent({ sede }: { sede: VacacionalSlug }) {
  const { t } = useLanguage();
  const meta = VACACIONAL_META[sede];
  const data = t.vacacional[sede];

  const wa = `https://wa.me/${meta.whatsapp}?text=${encodeURIComponent(
    `¡Hola! Quiero información del ${data.name} — ${data.subtitle}`
  )}`;

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-white pt-24">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-20">
          <Link
            href="/#experiencias"
            className="mb-10 inline-flex text-sm font-medium tracking-wide text-gray-muted hover:text-gold"
          >
            {t.vacacional.back}
          </Link>

          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden bg-gray-light">
              <Image
                src={meta.flyer}
                alt={`${data.name} ${data.subtitle}`}
                fill
                priority
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
                {t.vacacional.experiences}
              </p>
              <h1 className="mt-4 font-display text-4xl font-medium text-green-deep md:text-5xl">
                {data.name}
              </h1>
              <p className="mt-3 text-lg text-gray-muted">{data.subtitle}</p>

              <ul className="mt-8 space-y-3 text-gray-dark">
                {data.highlights.map((h) => (
                  <li key={h} className="text-base leading-relaxed">
                    {h}
                  </li>
                ))}
              </ul>

              <dl className="mt-10 space-y-4 border-y border-green/10 py-8">
                <InfoRow label={t.vacacional.labels.dates} value={data.dates} />
                <InfoRow label={t.vacacional.labels.schedule} value={data.schedule} />
                <InfoRow label={t.vacacional.labels.ages} value={data.ages} />
                {"location" in data && data.location ? (
                  <InfoRow label={t.vacacional.labels.location} value={data.location} />
                ) : null}
              </dl>

              <div className="mt-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                  {t.vacacional.activities}
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {data.activities.map((a) => (
                    <li key={a} className="bg-gray-light px-3 py-1.5 text-sm text-gray-dark">
                      {a}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                  {t.vacacional.includes}
                </p>
                <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-gray-muted">
                  {data.includes.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-10 bg-gray-light p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                  {data.priceNote}
                </p>
                <div className="mt-4 flex flex-wrap gap-8">
                  {data.prices.map((p) => (
                    <div key={p.label}>
                      <p className="text-sm text-gray-muted">{p.label}</p>
                      <p className="font-display text-4xl text-green-deep">{p.amount}</p>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex w-full items-center justify-center bg-green-deep px-8 py-3.5 text-sm font-semibold tracking-wide text-white transition hover:bg-green sm:w-auto"
              >
                {t.vacacional.reserve} · {meta.whatsappDisplay}
              </a>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">{label}</dt>
      <dd className="mt-1 text-sm font-medium text-gray-dark md:text-base">{value}</dd>
    </div>
  );
}
