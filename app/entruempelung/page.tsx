import Link from "next/link";
import { PageShell } from "../components/page-shell";

const points = [
  "Wohnungen, Häuser, Keller und Garagen",
  "Demontage, Transport und Besenreine Übergabe",
  "Fachgerechte Entsorgung nach Absprache",
  "Planbare Termine auch bei kurzfristigem Bedarf",
];

export default function EntruempelungPage() {
  return (
    <PageShell>
      <section className="pageHero">
        <div className="container">
          <p className="sectionEyebrow">Entrümpelung</p>
          <h1>Strukturiert entrümpeln. Sauber übergeben.</h1>
          <p className="sectionLead">
            HNFix übernimmt Entrümpelungen zuverlässig und transparent – für
            Privatkunden, Vermieter und Hausverwaltungen.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contentPanel">
          <h2>Unser Entrümpelungsservice</h2>
          <ul className="checkList">
            {points.map((point) => (
              <li key={point}>✓ {point}</li>
            ))}
          </ul>
          <Link href="/kontakt" className="btn btnPrimary">
            Kostenloses Angebot anfragen
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
