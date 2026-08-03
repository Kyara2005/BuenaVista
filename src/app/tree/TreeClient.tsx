"use client";

import Link from "next/link";
import { sectionHref, withBase } from "@/lib/paths";
import { useLanguage } from "@/i18n/LanguageProvider";
import SiteHeader from "@/components/SiteHeader";
import BrandLogo from "@/components/BrandLogo";

export default function TreeClient() {
  const { t } = useLanguage();

  const links = [
    {
      href: "https://wa.me/593998021719",
      label: "WhatsApp",
      detail: "+593 99 802 1719",
      external: true,
    },
    {
      href: "https://www.instagram.com/clubdetenisbuenavista?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      label: "Instagram",
      detail: "@clubdetenisbuenavista",
      external: true,
    },
    {
      href: withBase("/"),
      label: t.tree.site,
      detail: t.tree.title,
      external: false,
    },
    {
      href: sectionHref("experiencias", false),
      label: t.tree.vacacional,
      detail: t.tree.vacDetail,
      external: false,
    },
  ];

  return (
    <>
      <SiteHeader />
      <main className="flex min-h-screen flex-col items-center bg-gray-light px-4 pb-20 pt-24 sm:pb-16 sm:pt-28">
        <div className="w-full max-w-md">
          <div className="mb-8 text-center sm:mb-10">
            <div className="mb-5 flex justify-center">
              <BrandLogo size="block" tone="dark" priority />
            </div>
            <h1 className="font-display text-xl text-green-deep sm:text-2xl">{t.tree.title}</h1>
            <p className="mt-2 text-sm text-gray-muted">{t.tree.subtitle}</p>
          </div>

          <ul className="flex flex-col gap-3">
            {links.map((link) => (
              <li key={link.href + link.label}>
                <a
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="card-lift flex min-h-[3.5rem] items-center gap-4 bg-white px-4 py-3.5 sm:px-5 sm:py-4"
                >
                  <span className="min-w-0 flex-1 text-left">
                    <span className="block font-display text-base text-green-deep sm:text-lg">
                      {link.label}
                    </span>
                    <span className="block truncate text-xs text-gray-muted sm:text-sm">
                      {link.detail}
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <p className="mt-10 text-center text-xs text-gray-muted">
            <Link href="/" className="hover:text-gold">
              {t.tree.back}
            </Link>
          </p>
        </div>
      </main>
    </>
  );
}
