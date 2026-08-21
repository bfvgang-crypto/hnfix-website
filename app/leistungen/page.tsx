import { BenefitsBar } from "../components/benefits-bar";
import { PageShell } from "../components/page-shell";
import { ProcessSteps } from "../components/process-steps";
import { ServicesGrid } from "../components/services-grid";

export default function LeistungenPage() {
  return (
    <PageShell>
      <section className="pageHero">
        <div className="container">
          <p className="sectionEyebrow">Leistungen</p>
          <h1>Alle Services für saubere und gepflegte Immobilien</h1>
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
