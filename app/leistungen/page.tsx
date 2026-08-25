import type { Metadata } from "next";
import { BenefitsBar } from "../components/benefits-bar";
import { PageShell } from "../components/page-shell";
import { ProcessSteps } from "../components/process-steps";
import {
  createBreadcrumbJsonLd,
  createFaqJsonLd,
  createServiceJsonLd,
  FaqSection,
  JsonLd,
  ServiceLinks,
} from "../components/seo-content";
import { ServicesGrid } from "../components/services-grid";
import { createPageMetadata } from "../metadata";

export const metadata: Metadata = createPageMetadata(
  "Reinigung, Entrümpelung & Hausservice Heilbronn",
  "HNFix Leistungen in Heilbronn: Reinigung, Entrümpelung, Treppenhaus-, Keller-, Garagen- und Außenservice. Jetzt unverbindlich anfragen.",
  "/leistungen",
);

const serviceFaqs = [
  {
    question: "Können mehrere Leistungen kombiniert werden?",
    answer:
      "Ja. Reinigung, Entrümpelung und Hausservice können je nach Objekt in einer Anfrage zusammengefasst und sinnvoll aufeinander abgestimmt werden.",
  },
  {
    question: "Sind einmalige und regelmäßige Einsätze möglich?",
    answer:
      "HNFix übernimmt sowohl einzelne Aufträge als auch wiederkehrende Leistungen. Der passende Turnus wird anhand des Objekts und Ihres Bedarfs vereinbart.",
  },
  {
    question: "Für welche Kunden sind die Leistungen gedacht?",
    answer:
      "Das Angebot richtet sich an Privatkunden, Vermieter, Eigentümer, Hausverwaltungen und Unternehmen in Heilbronn und Umgebung.",
  },
];

export default function LeistungenPage() {
  return (
    <PageShell>
      <JsonLd
        data={[
          createBreadcrumbJsonLd("Leistungen", "/leistungen"),
          createServiceJsonLd({
            name: "Haus- und Objektservice in Heilbronn",
            description:
              "Reinigung, Entrümpelung und laufende Objektpflege für private und gewerbliche Immobilien.",
            path: "/leistungen",
            serviceType: ["Reinigung", "Entrümpelung", "Hausservice"],
          }),
          createFaqJsonLd(serviceFaqs),
        ]}
      />
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

      <section className="section sectionCompact">
        <div className="container contentPanel seoPanel">
          <h2>Leistungen passend zu Objekt und Situation</h2>
          <p>
            Ob Wohnungsübergabe, laufende Treppenhauspflege oder vollständige
            Räumung: HNFix stimmt den Arbeitsumfang auf Flächen, Zugänglichkeit
            und Terminbedarf ab. Dadurch bleibt das Angebot nachvollziehbar und
            die Ausführung planbar.
          </p>
          <ServiceLinks />
        </div>
      </section>

      <FaqSection items={serviceFaqs} />
    </PageShell>
  );
}
