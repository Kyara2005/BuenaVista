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

  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-green-deep px-4">
      <div className="absolute inset-0 overflow-hidden">
        <video
          ref={videoRef}
          className={`h-full w-full object-cover object-[center_20%] transition-opacity duration-700 ${
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
      </div>
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 mx-auto max-w-3xl px-2 py-28 text-center text-white sm:px-6 sm:py-32">
        <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.22em] text-gold sm:mb-8 sm:text-xs sm:tracking-[0.28em]">
          {t.hero.eyebrow}
        </p>
        <h1 className="font-display text-[clamp(1.75rem,7vw,3.75rem)] font-medium leading-tight tracking-tight">
          {t.hero.title}
        </h1>
        <div className="mt-10 sm:mt-[60px]">
          <a
            href="#historia"
            className="inline-flex w-full max-w-xs items-center justify-center border border-white/50 bg-white/10 px-6 py-3.5 text-sm font-medium tracking-wide text-white backdrop-blur-md transition hover:border-gold hover:bg-gold hover:text-green-deep sm:w-auto sm:px-8"
          >
            {t.hero.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
