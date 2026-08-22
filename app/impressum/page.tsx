import type { Metadata } from "next";
import { PageShell } from "../components/page-shell";
import { createPageMetadata } from "../metadata";

export const metadata: Metadata = createPageMetadata(
  "Impressum",
  "Impressum und Anbieterinformationen von HNFix Haus & Objekt Service in Heilbronn.",
  "/impressum",
);

export default function ImpressumPage() {
  return (
    <PageShell>
      <section className="pageHero legalHero">
        <div className="container">
          <p className="sectionEyebrow">Rechtliche Informationen</p>
          <h1>Impressum</h1>
          <p className="sectionLead">Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG)</p>
        </div>
      </section>

      <section className="section legalSection">
        <div className="container contentPanel legalContent">
          <section>
            <h2>Anbieter</h2>
            <address>
              <strong>HNFix Haus &amp; Objekt Service</strong>
              <br />
              <span className="legalPlaceholder">[Vor- und Nachname des Inhabers ergänzen]</span>
              <br />
              <span className="legalPlaceholder">[Straße und Hausnummer ergänzen]</span>
              <br />
              <span className="legalPlaceholder">[PLZ und Ort ergänzen]</span>
            </address>
          </section>

          <section>
            <h2>Kontakt</h2>
            <p>
              Telefon: <span className="legalPlaceholder">[Telefonnummer ergänzen]</span>
              <br />
              E-Mail: <span className="legalPlaceholder">[E-Mail-Adresse ergänzen]</span>
            </p>
          </section>

          <section>
            <h2>Unternehmensangaben</h2>
            <p>
              Rechtsform: <span className="legalPlaceholder">[Rechtsform ergänzen]</span>
              <br />
              Vertretungsberechtigte Person: <span className="legalPlaceholder">[falls abweichend ergänzen]</span>
              <br />
              Register und Registernummer: <span className="legalPlaceholder">[falls vorhanden ergänzen]</span>
              <br />
              Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:{" "}
              <span className="legalPlaceholder">[falls vorhanden ergänzen]</span>
              <br />
              Wirtschafts-Identifikationsnummer gemäß § 139c AO:{" "}
              <span className="legalPlaceholder">[falls vorhanden ergänzen]</span>
            </p>
          </section>

          <section>
            <h2>Verbraucherstreitbeilegung</h2>
            <p className="legalPlaceholder">
              [Bitte entsprechend der tatsächlichen Teilnahmebereitschaft ergänzen:
              HNFix ist zur Teilnahme an einem Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle bereit / nicht bereit und nicht verpflichtet.]
            </p>
          </section>

          <section>
            <h2>Haftung für Inhalte</h2>
            <p>
              Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach
              den allgemeinen Gesetzen verantwortlich. Eine Verpflichtung zur
              Überwachung übermittelter oder gespeicherter fremder Informationen
              besteht nur im Rahmen der gesetzlichen Vorgaben. Verpflichtungen zur
              Entfernung oder Sperrung der Nutzung von Informationen nach den
              allgemeinen Gesetzen bleiben unberührt.
            </p>
          </section>

          <section>
            <h2>Haftung für Links</h2>
            <p>
              Unser Angebot kann Links zu externen Webseiten enthalten, auf deren
              Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten Seiten
              ist stets der jeweilige Anbieter verantwortlich. Rechtswidrige Inhalte
              werden bei Bekanntwerden unverzüglich entfernt.
            </p>
          </section>

          <section>
            <h2>Urheberrecht</h2>
            <p>
              Die durch HNFix erstellten Inhalte und Werke auf dieser Website
              unterliegen dem deutschen Urheberrecht. Jede Verwertung außerhalb der
              gesetzlichen Grenzen bedarf der vorherigen Zustimmung des jeweiligen
              Rechteinhabers.
            </p>
          </section>

          <p className="legalUpdated">Stand: August 2026</p>
        </div>
      </section>
    </PageShell>
  );
}
