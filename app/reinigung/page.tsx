import Link from "next/link";
import { PageShell } from "../components/page-shell";

const cleaningServices = [
  "Haus- und Wohnungsreinigung",
  "Treppenhausreinigung",
  "Objektreinigung vor Übergaben",
  "Regelmäßige Betreuung nach Plan",
];

export default function ReinigungPage() {
  return (
    <PageShell>
      <section className="pageHero">
        <div className="container">
          <p className="sectionEyebrow">Reinigung</p>
          <h1>Gründliche Reinigung für private und gewerbliche Objekte</h1>
          <p className="sectionLead">
            Wir sorgen für gepflegte Räume und saubere Ergebnisse mit
            professionellem Anspruch.
          </p>
        </div>
      </section>

      <section className="section">
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
    </PageShell>
  );
}
