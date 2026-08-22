import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../components/page-shell";
import { createPageMetadata } from "../metadata";

export const metadata: Metadata = createPageMetadata(
  "Hausservice",
  "Flexibler Hausservice für Treppenhäuser, Keller, Garagen und Außenflächen in Heilbronn und Umgebung.",
  "/hausservice",
);

const services = [
  "Treppenhausreinigung",
  "Keller- und Garagenservice",
  "Sperrmüllbereitstellung",
  "Pflege von Hof- und Außenflächen",
];

export default function HausservicePage() {
  return (
    <PageShell>
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
    </PageShell>
  );
}
