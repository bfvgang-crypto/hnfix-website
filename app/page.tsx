import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import heroImage from "../public/hero.webp";
import { BenefitsBar } from "./components/benefits-bar";
import { PageShell } from "./components/page-shell";
import { ProcessSteps } from "./components/process-steps";
import { ServicesGrid } from "./components/services-grid";
import { createPageMetadata } from "./metadata";

export const metadata: Metadata = createPageMetadata(
  "Haus & Objekt Service Heilbronn",
  "HNFix bietet Reinigung, Entrümpelung und Hausservice mit Festpreisen in Heilbronn und bis zu 50 km Umgebung.",
  "/",
);

const heroBenefits = [
  "Kostenlose Anfrage & Festpreis",
  "Schnelle Termine",
  "Zuverlässiger Service",
  "Fachgerechte Entsorgung",
];

export default function Home() {
  return (
    <PageShell>
      <section className="hero">
        <Image
          className="heroImage"
          src={heroImage}
          alt="Gepflegte Immobilie im Einsatzgebiet von HNFix"
          fill
          priority
          sizes="100vw"
        />
        <div className="heroOverlay" />
        <div className="container heroInner">
          <p className="heroEyebrow">Heilbronn & Umgebung – bis 50 km</p>
          <h1>
            Haus & Objekt
            <br />
            Service Heilbronn
          </h1>
          <p className="heroSubtitle">
            Reinigung · Entrümpelung · Keller · Garage · Treppenhaus ·
            Außenbereich
          </p>

          <ul className="heroBenefits">
            {heroBenefits.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className="heroActions">
            <Link href="/kontakt" className="btn btnPrimary">
              Kostenloses Angebot anfordern
            </Link>
            <Link href="/leistungen" className="btn btnGhost">
              Unsere Leistungen
            </Link>
          </div>
        </div>
      </section>

      <section className="homeServices" aria-label="Leistungen">
        <div className="homeServicesInner">
          <ServicesGrid />
        </div>
      </section>

      <BenefitsBar />
      <ProcessSteps />
    </PageShell>
  );
}
