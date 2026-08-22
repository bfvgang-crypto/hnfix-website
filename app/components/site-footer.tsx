import Link from "next/link";
import { CookieSettingsButton } from "./cookie-settings-button";

export function SiteFooter() {
  return (
    <footer className="siteFooter">
      <div className="container footerInner">
        <div className="footerBrand">
          <strong>HNFix</strong>
          <span>Haus & Objekt Service · Heilbronn</span>
        </div>
        <nav className="footerLinks" aria-label="Rechtliche Informationen">
          <Link href="/impressum">Impressum</Link>
          <Link href="/datenschutz">Datenschutz</Link>
          <CookieSettingsButton />
        </nav>
      </div>
    </footer>
  );
}
