"use client";

import { useEffect, useRef, useState } from "react";
import { asset } from "@/lib/paths";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function CorporateHero() {
  const { t } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const tryPlay = async () => {
      try {
        video.defaultMuted = true;
        video.muted = true;
        await video.play();
      } catch {
        /* autoplay may be blocked until interaction */
      }
    };

    const onCanPlay = () => {
      setReady(true);
      void tryPlay();
    };

    video.addEventListener("canplay", onCanPlay);
    if (video.readyState >= 3) onCanPlay();

    return () => video.removeEventListener("canplay", onCanPlay);
  }, []);

  const scrollToHistoria = () => {
    document.getElementById("historia")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative flex h-[100svh] min-h-[100svh] items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          className={`absolute inset-0 h-full w-full object-cover object-[center_18%] transition-opacity duration-700 ${
            ready ? "opacity-100" : "opacity-0"
          }`}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={asset("/images/galeria-grupo.png")}
        >
          <source src={asset("/videos/buenaVista.mp4")} type="video/mp4" />
        </video>
        {/* Poster visible mientras carga, evita franja vacía */}
        {!ready ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={asset("/images/galeria-grupo.png")}
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-[center_18%]"
          />
        ) : null}
      </div>
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center justify-center px-5 text-center text-white">
        <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.22em] text-gold sm:mb-6 sm:text-xs sm:tracking-[0.28em]">
          {t.hero.eyebrow}
        </p>
        <h1 className="font-display text-[clamp(1.7rem,6.5vw,3.75rem)] font-medium leading-[1.15] tracking-tight">
          {t.hero.title}
        </h1>
        <div className="mt-8 sm:mt-12">
          <button
            type="button"
            onClick={scrollToHistoria}
            className="inline-flex min-w-[200px] items-center justify-center border border-white/50 bg-white/10 px-6 py-3.5 text-sm font-medium tracking-wide text-white backdrop-blur-md transition hover:border-gold hover:bg-gold hover:text-green-deep sm:px-8"
          >
            {t.hero.cta}
          </button>
        </div>
      </div>
    </section>
  );
}
