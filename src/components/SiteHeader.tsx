"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { sectionHref } from "@/lib/paths";
import BrandLogo from "@/components/BrandLogo";
import { useLanguage } from "@/i18n/LanguageProvider";
import type { Lang } from "@/i18n/dictionary";

export default function SiteHeader() {
  const pathname = usePathname();
  const { lang, setLang, t } = useLanguage();
  const isHome =
    pathname === "/" ||
    pathname === "" ||
    pathname === "/index.html" ||
    pathname === "/index";
  const [scrolled, setScrolled] = useState(!isHome);
  const [open, setOpen] = useState(false);
  const solid = !isHome || scrolled || open;

  const links = [
    { id: "historia", label: t.nav.history },
    { id: "valores", label: t.nav.values },
    { id: "instalaciones", label: t.nav.facilities },
    { id: "experiencias", label: t.nav.experiences },
    { id: "eventos", label: t.nav.events },
    { id: "contacto", label: t.nav.contact },
  ];

  useEffect(() => {
    if (!isHome) {
      setScrolled(true);
      return;
    }
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  // Al llegar con /#seccion (p. ej. desde móvil en GH Pages), hacer scroll
  useEffect(() => {
    if (!isHome) return;
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;
    const t = window.setTimeout(() => {
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
    return () => window.clearTimeout(t);
  }, [isHome, pathname]);

  const goToSection = (id: string) => {
    setOpen(false);
    if (isHome) {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.replaceState(null, "", `#${id}`);
        return;
      }
    }
    window.location.assign(sectionHref(id, false));
  };

  const langBtn = (code: Lang, solidNav: boolean) => {
    const active = lang === code;
    return (
      <button
        type="button"
        onClick={() => setLang(code)}
        className={`rounded-full px-2.5 py-1 text-xs font-semibold tracking-wider transition ${
          active
            ? solidNav
              ? "bg-green-deep text-white"
              : "bg-gold text-green-deep"
            : solidNav
              ? "text-gray-dark/55 hover:text-green-deep"
              : "text-white/55 hover:text-white"
        }`}
        aria-pressed={active}
        aria-label={code === "es" ? "Español" : "English"}
      >
        {code.toUpperCase()}
      </button>
    );
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
        solid
          ? "bg-white/95 shadow-[0_8px_30px_rgba(18,53,43,0.08)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-3 py-2 sm:gap-3 sm:px-4 sm:py-2.5 md:px-8 md:py-3">
        <Link href="/" className="flex min-w-0 items-center gap-2 sm:gap-3" onClick={() => setOpen(false)}>
          <BrandLogo priority tone={solid ? "dark" : "light"} />
          <span
            className={`hidden truncate font-display text-sm font-semibold tracking-wide sm:block md:text-base ${
              solid ? "text-green-deep" : "text-white"
            }`}
          >
            {t.nav.brand}
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => goToSection(link.id)}
              className={`text-sm font-medium tracking-wide transition hover:text-gold ${
                solid ? "text-gray-dark/80" : "text-white/90"
              }`}
            >
              {link.label}
            </button>
          ))}
          <Link
            href="/tree/"
            className={`text-sm font-medium tracking-wide transition hover:text-gold ${
              solid ? "text-gray-dark/80" : "text-white/90"
            }`}
          >
            {t.nav.links}
          </Link>
          <div
            className={`flex items-center gap-0.5 rounded-full border p-0.5 ${
              solid ? "border-green/20" : "border-white/35"
            }`}
          >
            {langBtn("es", solid)}
            {langBtn("en", solid)}
          </div>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <div
            className={`flex items-center gap-0.5 rounded-full border p-0.5 ${
              solid ? "border-green/20" : "border-white/35"
            }`}
          >
            {langBtn("es", solid)}
            {langBtn("en", solid)}
          </div>
          <button
            type="button"
            className={solid ? "text-green-deep" : "text-white"}
            aria-label="Open menu"
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open ? (
        <div className="max-h-[70vh] overflow-y-auto border-t border-green/10 bg-white px-4 py-6 lg:hidden">
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.id}>
                <button
                  type="button"
                  className="block w-full py-3 text-left text-sm font-medium text-gray-dark"
                  onClick={() => goToSection(link.id)}
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li>
              <Link
                href="/tree/"
                className="block py-3 text-sm font-medium text-gray-dark"
                onClick={() => setOpen(false)}
              >
                {t.nav.links}
              </Link>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
