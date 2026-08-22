import Image from "next/image";
import Link from "next/link";
import { navigation } from "./site-data";

export function SiteHeader() {
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

        <Link href="/kontakt" className="headerCta">
          Kostenloses Angebot
        </Link>
      </div>
    </header>
  );
}
