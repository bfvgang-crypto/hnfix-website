import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../components/page-shell";
import { createPageMetadata } from "../metadata";

export const metadata: Metadata = createPageMetadata(
  "Gebäudereinigung Heilbronn",
  "Gebäudereinigung in Heilbronn für Wohnungen, Treppenhäuser und Gewerbeobjekte. HNFix ist auch in Neckarsulm, Flein, Leingarten und Weinsberg im Einsatz.",
  "/reinigung-heilbronn",
);

const localCleaningServices = [
  "Wohnungs- und Hausreinigung in Heilbronn",
  "Treppenhausreinigung für Mehrfamilienhäuser",
  "Grundreinigung bei Einzug, Auszug oder Mieterwechsel",
  "Objektpflege für Vermieter und Unternehmen",
];

export default function ReinigungHeilbronnPage() {
  return (
    <PageShell>
      <section className="pageHero pageHeroCompact">
        <div className="container">
          <p className="sectionEyebrow">Gebäudereinigung Heilbronn</p>
          <h1>Professionelle Gebäudereinigung in Heilbronn</h1>
          <p className="sectionLead">
            Persönlicher Reinigungsservice für Wohnungen, Treppenhäuser und
            gewerbliche Objekte direkt in Heilbronn und den angrenzenden Orten.
          </p>
        </div>
      </section>

      <section className="section sectionCompact">
        <div className="container contentPanel">
          <h2>Reinigungsleistungen in Heilbronn</h2>
          <ul className="checkList">
            {localCleaningServices.map((item) => (
              <li key={item}>✓ {item}</li>
            ))}
          </ul>
          <Link href="/kontakt" className="btn btnPrimary">
            Reinigungsanfrage für Heilbronn senden
          </Link>
        </div>
      </section>

      <section className="section sectionCompact">
        <div className="container contentPanel seoPanel">
          <h2>Regional erreichbar und passend zum Objekt geplant</h2>
          <p>
            Als Haus- und Objektservice für die Region kennt HNFix die
            Anforderungen von Privathaushalten, Vermietern und Gewerbekunden in
            Heilbronn. Termine und Leistungsumfang werden direkt abgestimmt.
          </p>
          <p>
            Zum Einsatzgebiet gehören neben Heilbronn unter anderem Neckarsulm,
            Bad Friedrichshall, Flein, Leingarten und Weinsberg. Je nach Objekt
            sind auch Einsätze im weiteren Umkreis möglich.
          </p>
          <p>
            Einen Überblick ohne lokalen Schwerpunkt finden Sie unter{" "}
            <Link href="/reinigung">Reinigung für Haus und Objekt</Link>.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
