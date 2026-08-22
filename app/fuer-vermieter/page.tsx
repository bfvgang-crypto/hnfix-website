import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../components/page-shell";
import { createPageMetadata } from "../metadata";

export const metadata: Metadata = createPageMetadata(
  "Service für Vermieter",
  "HNFix unterstützt Vermieter, Eigentümer und Hausverwaltungen bei Mieterwechsel, Reinigung und Entrümpelung.",
  "/fuer-vermieter",
);

const advantages = [
  "Schnelle Einsatzbereitschaft bei Mieterwechsel",
  "Saubere Übergaben von Wohnungen und Nebenflächen",
  "Entrümpelung und Reinigung aus einer Hand",
  "Persönliche Abstimmung mit klaren Festpreisen",
];

export default function FuerVermieterPage() {
  return (
    <PageShell>
      <section className="pageHero">
        <div className="container">
          <p className="sectionEyebrow">Für Vermieter</p>
          <h1>Verlässlicher Partner rund um Mieterwechsel und Objektpflege</h1>
          <p className="sectionLead">
            Wir unterstützen Vermieter, Hausverwaltungen und Eigentümer mit
            planbaren Abläufen und professioneller Ausführung.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contentPanel">
          <h2>Ihre Vorteile mit HNFix</h2>
          <ul className="checkList">
            {advantages.map((item) => (
              <li key={item}>✓ {item}</li>
            ))}
          </ul>
          <Link href="/kontakt" className="btn btnPrimary">
            Anfrage für Vermieter senden
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
