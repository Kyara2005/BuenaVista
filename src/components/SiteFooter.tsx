"use client";

import Image from "next/image";
import Link from "next/link";
import { asset } from "@/lib/paths";
import { useLanguage } from "@/i18n/LanguageProvider";

const LINKS = {
  club: "https://wa.me/593998021719",
  ig: "https://www.instagram.com/clubdetenisbuenavista?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  tennisplus: "https://www.instagram.com/tennisplus_ec/",
};

export default function SiteFooter() {
  const { t } = useLanguage();

  return (
    <footer className="bg-green-deep text-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 md:grid-cols-2 md:px-8 lg:grid-cols-4 lg:py-20">
        <div>
          <Image
            src={asset("/images/logo-buena-vista.png")}
            alt={t.nav.brand}
            width={72}
            height={72}
            className="mb-5 h-16 w-16 rounded-full object-cover ring-1 ring-gold/50"
          />
          <p className="font-display text-xl font-medium">Buena Vista</p>
          <p className="mt-1 text-sm tracking-wide text-white/60">Club de Tenis</p>
          <p className="mt-5 text-sm leading-relaxed text-white/70">{t.footer.tagline}</p>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
            {t.footer.explore}
          </h3>
          <ul className="space-y-3 text-sm text-white/75">
            <li>
              <a href="/#historia" className="hover:text-gold">
                {t.footer.history}
              </a>
            </li>
            <li>
              <a href="/#instalaciones" className="hover:text-gold">
                {t.footer.facilities}
              </a>
            </li>
            <li>
              <a href="/#experiencias" className="hover:text-gold">
                {t.footer.experiences}
              </a>
            </li>
            <li>
              <Link href="/vacacional/QuitoTenis" className="hover:text-gold">
                {t.footer.vacQuito}
              </Link>
            </li>
            <li>
              <Link href="/vacacional/puembo" className="hover:text-gold">
                {t.footer.vacPuembo}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
            {t.footer.contact}
          </h3>
          <ul className="space-y-3 text-sm text-white/75">
            <li>WhatsApp: +593 99 802 1719</li>
            <li>www.cbuenavista.com</li>
            <li>Quito, Ecuador</li>
            <li>{t.footer.attention}</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
            {t.footer.networks}
          </h3>
          <ul className="space-y-3 text-sm text-white/75">
            <li>
              <a href={LINKS.ig} target="_blank" rel="noopener noreferrer" className="hover:text-gold">
                Instagram Club
              </a>
            </li>
            <li>
              <a href={LINKS.tennisplus} target="_blank" rel="noopener noreferrer" className="hover:text-gold">
                Tennis Plus EC
              </a>
            </li>
            <li>
              <a href={LINKS.club} target="_blank" rel="noopener noreferrer" className="hover:text-gold">
                WhatsApp
              </a>
            </li>
            <li>
              <Link href="/tree" className="hover:text-gold">
                {t.footer.allLinks}
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-6">
        <p className="mx-auto max-w-4xl text-center text-xs leading-relaxed text-white/55">{t.footer.demo}</p>
        <p className="mt-4 text-center text-xs text-white/40">
          © {new Date().getFullYear()} Buena Vista Club de Tenis. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
