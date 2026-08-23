"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navigation } from "./site-data";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const trackOfferClick = () => {
    window.gtag?.("event", "offer_click", {
      button_name: "Kostenloses Angebot",
      location: "header",
    });
  };

  useEffect(() => {
    if (!menuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.addEventListener("keydown", closeOnEscape);

    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  return (
    <header className="siteHeader">
      <div className="container headerInner">
        <Link href="/" className="brand" aria-label="Zur Startseite">
          <Image
            src="/logo.png"
            alt="HNFix Haus & Objekt Service Heilbronn"
            width={150}
            height={58}
            priority
          />
        </Link>

        <nav className="mainNav" aria-label="Hauptnavigation">
          {navigation.map((item) => (
            <Link key={item.label} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/kontakt"
          className="headerCta"
          onClick={trackOfferClick}
        >
          <svg
            className="headerCtaIcon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M6 3.5h8l4 4V20.5H6v-17Z" />
            <path d="M14 3.5v4h4" />
            <path d="M9 12h6M9 16h4" />
          </svg>
          Kostenloses Angebot
        </Link>

        <button
          type="button"
          className={`menuToggle${menuOpen ? " isOpen" : ""}`}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <nav
        id="mobile-navigation"
        className={`mobileNav${menuOpen ? " isOpen" : ""}`}
        aria-label="Navigation für Mobilgeräte"
        aria-hidden={!menuOpen}
      >
        <div className="mobileNavInner">
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/kontakt"
            className="mobileNavCta"
            onClick={() => {
              trackOfferClick();
              setMenuOpen(false);
            }}
          >
            Kostenloses Angebot
          </Link>
        </div>
      </nav>
    </header>
  );
}