import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "./components/page-shell";

export const metadata: Metadata = {
  title: "Seite nicht gefunden",
};

export default function NotFound() {
  return (
    <PageShell>
      <section className="pageHero">
        <div className="container">
          <p className="sectionEyebrow">Fehler 404</p>
          <h1>Seite nicht gefunden</h1>
          <p className="sectionLead">
            Die gesuchte Seite ist nicht verfügbar oder wurde verschoben.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contentPanel">
          <h2>Wie können wir Ihnen weiterhelfen?</h2>
          <p className="sectionLead">
            Kehren Sie zur Startseite zurück oder nutzen Sie die Navigation,
            um den gewünschten Bereich aufzurufen.
          </p>
          <Link href="/" className="btn btnPrimary">
            Zur Startseite
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
