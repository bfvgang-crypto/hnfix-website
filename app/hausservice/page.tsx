import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../components/page-shell";
import { ServiceImage } from "../components/service-image";
import {
  createBreadcrumbJsonLd,
  createFaqJsonLd,
  createServiceJsonLd,
  FaqSection,
  JsonLd,
} from "../components/seo-content";
import { createPageMetadata } from "../metadata";

export const metadata: Metadata = createPageMetadata(
  "Hausservice & Objektpflege Heilbronn",
  "Hausservice in Heilbronn für Treppenhaus, Keller, Garage, Sperrmüll und Außenflächen. Flexible Objektpflege für Eigentümer und Verwaltungen.",
  "/hausservice",
);

const services = [
  "Treppenhausreinigung",
  "Keller- und Garagenservice",
  "Sperrmüllbereitstellung",
  "Pflege von Hof- und Außenflächen",
];

const houseServiceFaqs = [
  {
    question: "Was gehört zum Hausservice von HNFix?",
    answer:
      "Zum Hausservice gehören je nach Vereinbarung Treppenhausreinigung, Keller- und Garagenservice, Sperrmüllbereitstellung sowie die Pflege von Hof- und Außenflächen.",
  },
  {
    question: "Kann der Hausservice regelmäßig gebucht werden?",
    answer:
      "Ja. Wiederkehrende Arbeiten können in einem passenden Rhythmus geplant werden. Einmalige Einsätze sind ebenfalls möglich.",
  },
  {
    question: "Arbeitet HNFix auch für Hausverwaltungen?",
    answer:
      "Ja. HNFix unterstützt Eigentümer, Vermieter und Hausverwaltungen bei planbaren Aufgaben rund um gepflegte Gemeinschafts- und Nebenflächen.",
  },
];

export default function HausservicePage() {
  return (
    <PageShell>
      <JsonLd
        data={[
          createBreadcrumbJsonLd("Hausservice", "/hausservice"),
          createServiceJsonLd({
            name: "Hausservice und Objektpflege Heilbronn",
            description:
              "Treppenhaus-, Keller-, Garagen- und Außenflächenpflege für Eigentümer und Hausverwaltungen.",
            path: "/hausservice",
            serviceType: ["Hausservice", "Objektpflege", "Treppenhausreinigung"],
          }),
          createFaqJsonLd(houseServiceFaqs),
        ]}
      />
      <section className="pageHero">
        <div className="container">
          <p className="sectionEyebrow">Hausservice</p>
          <h1>Regelmäßige Objektpflege für Eigentümer und Verwaltungen</h1>
          <p className="sectionLead">
            HNFix bietet flexible Hausservice-Lösungen für ein dauerhaft
            gepflegtes Erscheinungsbild Ihrer Immobilie.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contentPanel">
          <ServiceImage
            src="/placeholders/TREPPENHAUS.png"
            alt="Gepflegtes Treppenhaus als Teil des HNFix Hausservice"
            caption="Regelmäßige Pflege von Treppenhäusern und gemeinschaftlich genutzten Flächen."
          />
          <h2>Typische Hausservice-Leistungen</h2>
          <ul className="checkList">
            {services.map((item) => (
              <li key={item}>✓ {item}</li>
            ))}
          </ul>
          <Link href="/kontakt" className="btn btnPrimary">
            Hausservice anfragen
          </Link>
        </div>
      </section>

      <section className="section sectionCompact">
        <div className="container contentPanel seoPanel">
          <h2>Planbare Pflege für Gemeinschafts- und Nebenflächen</h2>
          <p>
            Ein gepflegtes Treppenhaus, saubere Keller- und Garagenbereiche sowie
            ordentliche Außenflächen tragen zum Werterhalt und zu einem guten
            Eindruck der Immobilie bei. Aufgaben und Turnus werden objektbezogen
            vereinbart.
          </p>
          <p>
            Für Innenräume bieten wir zusätzlich{" "}
            <Link href="/reinigung">Reinigungsleistungen</Link> an. Bei
            Mieterwechseln lassen sich Hausservice und{" "}
            <Link href="/entruempelung">Entrümpelung</Link> kombinieren. Mehr
            dazu unter <Link href="/fuer-vermieter">Für Vermieter</Link>.
          </p>
        </div>
      </section>

      <FaqSection items={houseServiceFaqs} />
    </PageShell>
  );
}
