import { BenefitsBar } from "../components/benefits-bar";
import { PageShell } from "../components/page-shell";
import { ProcessSteps } from "../components/process-steps";
import { ServicesGrid } from "../components/services-grid";
import { createPageMetadata } from "../metadata";

export const metadata: Metadata = createPageMetadata(
  "Leistungen",
  "Entdecken Sie alle HNFix Leistungen: Reinigung, Entrümpelung, Hausservice und Objektpflege in Heilbronn und Umgebung.",
  "/leistungen",
);

export default function LeistungenPage() {
  return (
    <PageShell>
      <section className="pageHero">
        <div className="container">
          <p className="sectionEyebrow">Leistungen</p>
          <h1>Alle Leistungen für saubere und gepflegte Immobilien</h1>
          <p className="sectionLead">
            Von Reinigung bis Entrümpelung bietet HNFix einen zuverlässigen
            Rundum-Service in Heilbronn und Umgebung.
          </p>
        </div>
      </section>

      <section className="section sectionTopTight">
        <div className="container">
          <ServicesGrid />
        </div>
      </section>

      <BenefitsBar />
      <ProcessSteps />
    </PageShell>
  );
}
import type { Metadata } from "next";
