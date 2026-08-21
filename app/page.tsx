import Link from "next/link";
import { BenefitsBar } from "./components/benefits-bar";
import { PageShell } from "./components/page-shell";
import { ProcessSteps } from "./components/process-steps";
import { ServicesGrid } from "./components/services-grid";

const heroBenefits = [
  "Kostenlose Anfrage",
  "Schnelle Termine",
  "Zuverlässiger Service",
  "Fachgerechte Entsorgung",
];

export default function Home() {
  return (
    <PageShell>
      <section className="hero">
        <div className="heroOverlay" />
        <div className="container heroInner">
          <p className="heroEyebrow">Heilbronn & Umgebung – bis 50 km</p>
          <h1>Haus & Objekt Service Heilbronn</h1>
          <p className="heroSubtitle">
            Reinigung · Entrümpelung · Keller · Garage · Treppenhaus ·
            Außenbereich
          </p>

          <ul className="heroBenefits">
            {heroBenefits.map((item) => (
              <li key={item}>✓ {item}</li>
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

      <section className="section sectionTopTight">
        <div className="container">
          <p className="sectionEyebrow">Leistungen</p>
          <h2>Professioneller Service rund um Haus und Objekt</h2>
          <ServicesGrid />
        </div>
      </section>

      <BenefitsBar />
      <ProcessSteps />
    </PageShell>
  );
}
