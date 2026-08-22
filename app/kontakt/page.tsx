import type { Metadata } from "next";
import { PageShell } from "../components/page-shell";
import { createPageMetadata } from "../metadata";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = createPageMetadata(
  "Kontakt",
  "Fordern Sie kostenlos und unverbindlich ein Angebot für Reinigung, Entrümpelung oder Hausservice in Heilbronn an.",
  "/kontakt",
);

export default function KontaktPage() {
  return (
    <PageShell>
      <section className="pageHero">
        <div className="container">
          <p className="sectionEyebrow">Kontakt</p>
          <h1>Kostenloses Angebot für Ihr Anliegen anfragen</h1>
          <p className="sectionLead">
            Senden Sie uns Ihre Daten und eine kurze Beschreibung. Wir melden
            uns zeitnah mit einem passenden Angebot.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contactLayout">
          <div className="contentPanel">
            <h2>Ihre Anfrage in wenigen Schritten</h2>
            <p className="sectionLead">
              Je genauer Ihre Angaben sind, desto schneller erhalten Sie ein
              passendes Angebot.
            </p>
          </div>

          <ContactForm />
        </div>
      </section>
    </PageShell>
  );
}
