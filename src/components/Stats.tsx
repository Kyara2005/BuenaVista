"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function Stats() {
  const { t } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  const stats = [
    { value: 40, suffix: "+", label: t.stats.years },
    { value: 16, suffix: "", label: t.stats.courts },
    { value: 600, suffix: "+", label: t.stats.members },
    { value: 365, suffix: "", label: t.stats.days },
  ];

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          obs.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-green-deep px-4 py-20 text-white md:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="font-display text-5xl font-medium text-gold md:text-6xl">
              <Counter value={stat.value} active={active} />
              {stat.suffix}
            </p>
            <p className="mt-3 text-sm font-medium uppercase tracking-[0.2em] text-white/70">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Counter({ value, active }: { value: number; active: boolean }) {
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!active) return;
    const duration = 1400;
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(value * eased));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, value]);

  return <>{n}</>;
}
