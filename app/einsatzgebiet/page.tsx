import type { Metadata } from "next";
import { PageShell } from "../components/page-shell";
import { createPageMetadata } from "../metadata";

export const metadata: Metadata = createPageMetadata(
  "Einsatzgebiet",
  "HNFix ist in Heilbronn, Neckarsulm, Weinsberg und im Umkreis von bis zu 50 km für Sie im Einsatz.",
  "/einsatzgebiet",
);

const locations = [
  "Heilbronn",
  "Neckarsulm",
  "Weinsberg",
  "Leingarten",
  "Bad Friedrichshall",
  "Lauffen am Neckar",
  "Abstatt",
  "Neuenstadt",
];

export default function EinsatzgebietPage() {
  return (
    <PageShell>
      <section className="pageHero">
        <div className="container">
          <p className="sectionEyebrow">Einsatzgebiet</p>
          <h1>Heilbronn und Umgebung bis 50 km</h1>
          <p className="sectionLead">
            Wir sind regional unterwegs und schnell vor Ort – mit persönlichem
            Service für private und gewerbliche Kunden.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contentPanel">
          <h2>Regionen im Überblick</h2>
          <div className="locations">
            {locations.map((location) => (
              <span key={location}>{location}</span>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
