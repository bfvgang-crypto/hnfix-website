import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../components/page-shell";
import { createPageMetadata } from "../metadata";

export const metadata: Metadata = createPageMetadata(
  "Reinigung für Haus und Objekt",
  "Zuverlässige Reinigung von Wohnungen, Häusern, Treppenhäusern und gewerblichen Objekten durch HNFix.",
  "/reinigung",
);

const cleaningServices = [
  "Gebäudereinigung für private und gewerbliche Objekte",
  "Regelmäßige Treppenhausreinigung",
  "Grundreinigung und laufende Objektpflege",
  "Reinigung vor Wohnungsübergaben",
];

export default function ReinigungPage() {
  return (
    <PageShell>
      <section className="pageHero pageHeroCompact">
        <div className="container">
          <p className="sectionEyebrow">Reinigung</p>

          <h1>Zuverlässige Reinigung für Haus und Objekt</h1>

          <p className="sectionLead">
            Saubere Wohnungen, Häuser, Treppenhäuser und Gewerbeflächen –
            passend zum Objekt und zum gewünschten Rhythmus.
          </p>
        </div>
      </section>

      <section className="section sectionCompact">
        <div className="container contentPanel">
          <h2>Leistungsumfang Reinigung</h2>

          <ul className="checkList">
            {cleaningServices.map((item) => (
              <li key={item}>✓ {item}</li>
            ))}
          </ul>

          <Link href="/kontakt" className="btn btnPrimary">
            Reinigungsanfrage senden
          </Link>
        </div>
      </section>

      <section className="section sectionCompact">
        <div className="container contentPanel seoPanel">
          <h2>Reinigung passend zu Ihrem Objekt</h2>

          <p>
            HNFix übernimmt einmalige und regelmäßige Reinigungsarbeiten für
            Privatkunden, Vermieter, Hausverwaltungen und Unternehmen.
          </p>

          <p>
            Leistungsumfang, Turnus und Zugang zum Objekt stimmen wir vorab
            transparent ab. So erhalten Sie ein Angebot, das zum tatsächlichen
            Aufwand passt.
          </p>

          <p>
            Für weitere lokale Informationen besuchen Sie unsere Seite zur{" "}
            <Link href="/reinigung-heilbronn">Gebäudereinigung in Heilbronn</Link>.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
