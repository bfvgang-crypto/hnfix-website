import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../components/page-shell";
import { createPageMetadata } from "../metadata";

export const metadata: Metadata = createPageMetadata(
  "Gebäudereinigung Heilbronn",
  "Professionelle Gebäudereinigung in Heilbronn und Umgebung. HNFix bietet Hausreinigung, Wohnungsreinigung, Treppenhausreinigung und Objektpflege für Privatkunden, Vermieter und Unternehmen.",
  "/reinigung-heilbronn",
);

const cleaningServices = [
  "Gebäudereinigung für Privatkunden und Unternehmen",
  "Treppenhausreinigung in Heilbronn",
  "Grundreinigung und Objektpflege",
  "Reinigung vor Wohnungsübergaben",
];

export default function ReinigungPage() {
  return (
    <PageShell>
      <section className="pageHero">
        <div className="container">
          <p className="sectionEyebrow">Gebäudereinigung Heilbronn</p>

          <h1>
            Professionelle Gebäudereinigung in Heilbronn
          </h1>

          <p className="sectionLead">
            Zuverlässige Reinigung für Wohnungen, Häuser, Treppenhäuser
            und gewerbliche Objekte in Heilbronn und Umgebung.
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

      <section className="section">
        <div className="container contentPanel">
          <h2>Gebäudereinigung Heilbronn und Umgebung</h2>

          <p>
            HNFix Haus & Objekt Service bietet professionelle
            Gebäudereinigung für Privatkunden, Vermieter und Unternehmen
            in Heilbronn.
          </p>

          <p>
            Wir übernehmen Wohnungsreinigung, Treppenhausreinigung,
            Grundreinigung und Objektpflege mit zuverlässigen Abläufen
            und fairen Angeboten.
          </p>

          <p>
            Unser Einsatzgebiet umfasst Heilbronn und die Umgebung,
            darunter Neckarsulm, Bad Friedrichshall, Flein, Leingarten
            und Weinsberg.
          </p>
        </div>
      </section>
    </PageShell>
  );
}