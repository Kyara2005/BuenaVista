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
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-green-deep">
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

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center text-white">
        <p className="mb-8 text-xs font-medium uppercase tracking-[0.28em] text-gold">
          {t.hero.eyebrow}
        </p>
        <h1 className="font-display text-[clamp(2rem,5vw,3.75rem)] font-medium leading-tight tracking-tight">
          {t.hero.title}
        </h1>
        <div className="mt-[60px]">
          <a
            href="#historia"
            className="inline-flex items-center border border-white/50 bg-white/10 px-8 py-3.5 text-sm font-medium tracking-wide text-white backdrop-blur-md transition hover:border-gold hover:bg-gold hover:text-green-deep"
          >
            {t.hero.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
