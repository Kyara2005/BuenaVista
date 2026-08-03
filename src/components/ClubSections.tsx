"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Stats from "@/components/Stats";
import { asset } from "@/lib/paths";
import { useLanguage } from "@/i18n/LanguageProvider";

const TIMELINE_IMAGES = [
  "/images/galeria-tenis.png",
  "/images/galeria-torneo.png",
  "/images/galeria-fiestas.png",
  "/images/galeria-vacacional-grupo.png",
];

const FACILITY_IMAGES = [
  "/images/galeria-tenis.png",
  "/images/galeria-natacion.png",
  "/images/galeria-copa-mundo.png",
];

const VALUE_ICONS = [
  <path key="1" d="M12 3l2.2 4.5 5 .7-3.6 3.5.9 5L12 14.8 7.5 16.7l.9-5L4.8 8.2l5-.7L12 3z" />,
  <path key="2" d="M16 11a3 3 0 10-2.8-4M8 11a3 3 0 112.8-4M4 19a5 5 0 0110 0M10 19a5 5 0 0110 0" />,
  <path key="3" d="M12 21s-7-4.5-7-10a4 4 0 017-2.5A4 4 0 0119 11c0 5.5-7 10-7 10z" />,
  <>
    <circle key="c" cx="12" cy="12" r="8" />
    <path key="p" d="M12 8v4l2.5 2.5" />
  </>,
];

const ZONE_KEYS = ["tenis", "piscina", "social", "kids", "park"] as const;
const ZONE_POS = [
  { x: 22, y: 38 },
  { x: 58, y: 30 },
  { x: 72, y: 58 },
  { x: 38, y: 68 },
  { x: 14, y: 72 },
];

export default function ClubSections() {
  const { t } = useLanguage();

  return (
    <>
      <section id="historia" className="bg-white px-4 py-16 sm:py-24 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-gold sm:mb-6 sm:text-xs sm:tracking-[0.28em]">
              {t.history.eyebrow}
            </p>
            <h2 className="font-display text-3xl font-medium text-green-deep sm:text-4xl md:text-5xl">
              {t.history.title}
            </h2>
          </Reveal>
          <Reveal delayMs={120}>
            <p className="mt-6 text-sm leading-relaxed text-gray-muted sm:mt-10 sm:text-base md:text-lg">
              {t.history.intro}
            </p>
          </Reveal>
        </div>

        <div className="mx-auto mt-14 max-w-4xl sm:mt-24">
          <ol className="relative space-y-12 border-l border-gold/40 pl-6 sm:space-y-16 sm:pl-8 md:pl-12">
            {t.history.items.map((item, i) => (
              <li key={item.year} className="relative">
                <span className="absolute -left-[1.9rem] top-1 h-3 w-3 rounded-full bg-gold sm:-left-[2.55rem] sm:h-3.5 sm:w-3.5 md:-left-[3.3rem]" />
                <Reveal variant={i % 2 === 0 ? "fade-right" : "fade-left"}>
                  <div className="grid items-center gap-5 sm:gap-8 md:grid-cols-2">
                    <div>
                      <p className="font-display text-2xl text-green-deep sm:text-3xl">{item.year}</p>
                      <h3 className="mt-2 font-display text-lg text-gray-dark sm:mt-3 sm:text-xl">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-gray-muted md:text-base">
                        {item.text}
                      </p>
                    </div>
                    <div className="group relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={asset(TIMELINE_IMAGES[i])}
                        alt={item.title}
                        fill
                        className="img-zoom object-cover"
                        sizes="(max-width: 768px) 100vw, 40vw"
                      />
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="valores" className="bg-gray-light px-4 py-16 sm:py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="mb-4 text-center text-[10px] font-semibold uppercase tracking-[0.22em] text-gold sm:mb-6 sm:text-xs sm:tracking-[0.28em]">
              {t.values.eyebrow}
            </p>
            <h2 className="mb-12 text-center font-display text-3xl font-medium text-green-deep sm:mb-20 sm:text-4xl md:text-5xl">
              {t.values.title}
            </h2>
          </Reveal>
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {t.values.items.map((v, i) => (
              <Reveal key={v.title} delayMs={i * 100}>
                <div className="text-center sm:text-left">
                  <svg
                    className="mx-auto mb-6 h-10 w-10 text-green sm:mx-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {VALUE_ICONS[i]}
                  </svg>
                  <h3 className="font-display text-2xl text-green-deep">{v.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-gray-muted">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Stats />

      <section id="instalaciones" className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-24 md:py-32">
          <Reveal>
            <p className="mb-4 text-center text-[10px] font-semibold uppercase tracking-[0.22em] text-gold sm:mb-6 sm:text-xs sm:tracking-[0.28em]">
              {t.facilities.eyebrow}
            </p>
            <h2 className="mb-4 text-center font-display text-3xl font-medium text-green-deep sm:mb-6 sm:text-4xl md:text-5xl">
              {t.facilities.title}
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-center text-sm text-gray-muted sm:mb-20 sm:text-base">
              {t.facilities.intro}
            </p>
          </Reveal>
        </div>

        {t.facilities.items.map((item, i) => (
          <div
            key={item.title}
            className={`grid items-center lg:grid-cols-2 ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
          >
            <div className="group relative aspect-[16/10] min-h-[220px] sm:min-h-[320px] lg:aspect-auto lg:min-h-[520px]">
              <Image
                src={asset(FACILITY_IMAGES[i])}
                alt={item.title}
                fill
                className="img-zoom object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div
              className={`px-4 py-10 sm:px-6 sm:py-16 md:px-16 md:py-24 ${i % 2 === 1 ? "bg-gray-light" : "bg-white"}`}
            >
              <Reveal variant={i % 2 === 0 ? "fade-left" : "fade-right"}>
                <h3 className="font-display text-2xl text-green-deep sm:text-3xl md:text-4xl">
                  {item.title}
                </h3>
                <p className="mt-5 max-w-md text-sm leading-relaxed text-gray-muted sm:mt-8 sm:text-base">
                  {item.text}
                </p>
              </Reveal>
            </div>
          </div>
        ))}

        <div className="bg-gray-light px-4 py-16 sm:py-24 md:py-28">
          <div className="mx-auto max-w-5xl">
            <Reveal>
              <h3 className="mb-4 text-center font-display text-2xl text-green-deep sm:text-3xl md:text-4xl">
                {t.facilities.mapTitle}
              </h3>
              <p className="mx-auto mb-8 max-w-xl text-center text-sm text-gray-muted sm:mb-12">
                {t.facilities.mapHint}
              </p>
            </Reveal>
            <Reveal variant="zoom-in">
              <div className="relative aspect-[4/3] overflow-hidden bg-green-deep/90 sm:aspect-[16/9]">
                <Image
                  src={asset("/images/galeria-grupo.png")}
                  alt=""
                  fill
                  className="object-cover opacity-40"
                  sizes="100vw"
                />
                {ZONE_KEYS.map((key, i) => (
                  <div
                    key={key}
                    className="group absolute -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `${ZONE_POS[i].x}%`, top: `${ZONE_POS[i].y}%` }}
                  >
                    <button
                      type="button"
                      className="flex h-5 w-5 items-center justify-center rounded-full bg-gold ring-4 ring-gold/30 transition group-hover:scale-125 sm:h-4 sm:w-4"
                      aria-label={t.facilities.zones[key]}
                    />
                    <span className="map-label pointer-events-none absolute left-1/2 top-6 z-10 -translate-x-1/2 whitespace-nowrap rounded bg-white/90 px-2 py-1 text-[10px] font-medium text-green-deep opacity-0 shadow transition group-hover:opacity-100 sm:px-3 sm:py-1.5 sm:text-xs">
                      {t.facilities.zones[key]}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="experiencias" className="bg-white px-4 py-16 sm:py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="mb-4 text-center text-[10px] font-semibold uppercase tracking-[0.22em] text-gold sm:mb-6 sm:text-xs sm:tracking-[0.28em]">
              {t.experiences.eyebrow}
            </p>
            <h2 className="mb-4 text-center font-display text-3xl font-medium text-green-deep sm:mb-6 sm:text-4xl md:text-5xl">
              {t.experiences.title}
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-center text-sm text-gray-muted sm:mb-16 sm:text-base">
              {t.experiences.intro}
            </p>
          </Reveal>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
            {[
              { href: "/vacacional/QuitoTenis/", image: "/images/flyer-club.png", ...t.experiences.cards[0] },
              { href: "/vacacional/puembo/", image: "/images/flyer-puembo.png", ...t.experiences.cards[1] },
            ].map((card, i) => (
              <Reveal key={card.href} delayMs={i * 120}>
                <Link href={card.href} className="card-lift group block overflow-hidden bg-gray-light">
                  <div className="relative aspect-[4/5] max-h-[420px] sm:max-h-none">
                    <Image
                      src={asset(card.image)}
                      alt={card.title}
                      fill
                      className="img-zoom object-cover object-top"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-5 sm:p-8">
                    <h3 className="font-display text-xl text-green-deep sm:text-2xl">{card.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-gray-muted">{card.text}</p>
                    <span className="mt-5 inline-block text-sm font-medium tracking-wide text-gold sm:mt-6">
                      {t.experiences.more}
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <div className="mt-14 grid items-center gap-8 sm:mt-20 sm:gap-12 lg:grid-cols-2">
            <Reveal variant="fade-right">
              <div>
                <h3 className="font-display text-2xl text-green-deep sm:text-3xl">
                  {t.experiences.tournamentsTitle}
                </h3>
                <p className="mt-5 text-sm leading-relaxed text-gray-muted sm:mt-6 sm:text-base">
                  {t.experiences.tournamentsText.split("@tennisplus_ec").map((part, idx, arr) =>
                    idx < arr.length - 1 ? (
                      <span key={idx}>
                        {part}
                        <a
                          href="https://www.instagram.com/tennisplus_ec/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-green underline decoration-gold/50 underline-offset-4"
                        >
                          @tennisplus_ec
                        </a>
                      </span>
                    ) : (
                      <span key={idx}>{part}</span>
                    )
                  )}
                </p>
              </div>
            </Reveal>
            <Reveal variant="fade-left">
              <div className="flex justify-center">
                <div className="w-full max-w-[360px] overflow-hidden bg-black shadow-xl">
                  <video
                    className="mx-auto block h-auto max-h-[min(70vh,640px)] w-full max-w-full"
                    controls
                    playsInline
                    preload="metadata"
                  >
                    <source src={asset("/videos/buenaVista.mp4")} type="video/mp4" />
                  </video>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="eventos" className="bg-gray-light px-4 py-16 sm:py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="mb-4 text-center text-[10px] font-semibold uppercase tracking-[0.22em] text-gold sm:mb-6 sm:text-xs sm:tracking-[0.28em]">
              {t.events.eyebrow}
            </p>
            <h2 className="mb-10 text-center font-display text-3xl font-medium text-green-deep sm:mb-16 sm:text-4xl md:text-5xl">
              {t.events.title}
            </h2>
          </Reveal>

          <div className="grid gap-6 sm:gap-8 lg:grid-cols-5">
            <Reveal className="lg:col-span-3">
              <article className="card-lift overflow-hidden bg-white">
                <div className="group relative aspect-[16/10]">
                  <Image
                    src={asset("/images/galeria-copa-mundo.png")}
                    alt={t.events.featuredTitle}
                    fill
                    className="img-zoom object-cover"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                </div>
                <div className="p-5 sm:p-8 md:p-10">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold sm:text-xs">
                    {t.events.featuredTag}
                  </p>
                  <h3 className="mt-3 font-display text-xl text-green-deep sm:text-2xl md:text-3xl">
                    {t.events.featuredTitle}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-gray-muted sm:mt-5 md:text-base">
                    {t.events.featuredText}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-gray-muted sm:mt-4 md:text-base">
                    {t.events.featuredTextExtra}
                  </p>
                </div>
              </article>
            </Reveal>

            <div className="flex flex-col gap-4 sm:gap-6 lg:col-span-2">
              {t.events.news.map((n, i) => (
                <Reveal key={n.title + n.date} delayMs={i * 100}>
                  <article className="card-lift flex flex-col gap-3 overflow-hidden bg-white p-4 sm:flex-row sm:gap-4 sm:p-5">
                    <div className="group relative aspect-[16/10] w-full shrink-0 overflow-hidden sm:aspect-auto sm:h-32 sm:w-32">
                      <Image
                        src={asset(n.image)}
                        alt={n.title}
                        fill
                        className="img-zoom object-cover"
                        sizes="(max-width: 640px) 100vw, 128px"
                      />
                    </div>
                    <div className="min-w-0 py-1">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gold">
                        {n.date}
                      </p>
                      <h3 className="mt-2 font-display text-base leading-snug text-green-deep sm:text-lg">
                        {n.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-gray-muted">{n.summary}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contacto" className="relative overflow-hidden px-4 py-20 sm:py-28 md:py-36">
        <Image
          src={asset("/images/galeria-fiestas.png")}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-green-deep/75" />
        <div className="relative z-10 mx-auto max-w-2xl text-center text-white">
          <Reveal>
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-gold sm:mb-6 sm:text-xs sm:tracking-[0.28em]">
              {t.contact.eyebrow}
            </p>
            <h2 className="font-display text-3xl font-medium sm:text-4xl md:text-5xl">
              {t.contact.title}
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-white/80 sm:mt-8 sm:text-base">
              {t.contact.text}
            </p>
            <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:mt-12 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <a
                href="https://wa.me/593998021719"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border border-gold bg-gold px-6 py-3.5 text-sm font-semibold tracking-wide text-green-deep transition hover:bg-transparent hover:text-gold sm:px-8"
              >
                WhatsApp +593 99 802 1719
              </a>
              <Link
                href="/tree/"
                className="inline-flex items-center justify-center border border-white/40 px-6 py-3.5 text-sm font-medium tracking-wide text-white transition hover:border-gold hover:text-gold sm:px-8"
              >
                {t.contact.links}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
