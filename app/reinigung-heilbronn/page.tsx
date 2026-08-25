import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../components/page-shell";
import { ServiceImage } from "../components/service-image";
import {
  createBreadcrumbJsonLd,
  createFaqJsonLd,
  createServiceJsonLd,
  FaqSection,
  JsonLd,
} from "../components/seo-content";
import { createPageMetadata } from "../metadata";

export const metadata: Metadata = createPageMetadata(
  "Gebäudereinigung Heilbronn für Privat & Gewerbe",
  "Gebäudereinigung in Heilbronn für Wohnungen, Treppenhäuser und Gewerbeobjekte. Persönlich, planbar und auch im Heilbronner Umland verfügbar.",
  "/reinigung-heilbronn",
);

const localCleaningServices = [
  "Wohnungs- und Hausreinigung in Heilbronn",
  "Treppenhausreinigung für Mehrfamilienhäuser",
  "Grundreinigung bei Einzug, Auszug oder Mieterwechsel",
  "Objektpflege für Vermieter und Unternehmen",
];

const localFaqs = [
  {
    question: "Wo bietet HNFix Gebäudereinigung an?",
    answer:
      "Der Schwerpunkt liegt in Heilbronn. Nach Absprache sind Einsätze unter anderem auch in Neckarsulm, Flein, Leingarten, Weinsberg und weiteren Orten der Region möglich.",
  },
  {
    question: "Übernimmt HNFix Treppenhausreinigung in Mehrfamilienhäusern?",
    answer:
      "Ja. Die Treppenhausreinigung kann einmalig oder regelmäßig für Eigentümer, Vermieter und Hausverwaltungen vereinbart werden.",
  },
  {
    question: "Kann eine Reinigung bei einem Mieterwechsel kurzfristig erfolgen?",
    answer:
      "Kurzfristige Termine sind abhängig von Umfang und Auslastung möglich. Senden Sie den gewünschten Zeitraum und Angaben zum Objekt über das Anfrageformular.",
  },
];

export default function ReinigungHeilbronnPage() {
  return (
    <PageShell>
      <JsonLd
        data={[
          createBreadcrumbJsonLd(
            "Gebäudereinigung Heilbronn",
            "/reinigung-heilbronn",
          ),
          createServiceJsonLd({
            name: "Gebäudereinigung Heilbronn",
            description:
              "Gebäudereinigung für Wohnungen, Treppenhäuser und Gewerbeobjekte in Heilbronn und angrenzenden Orten.",
            path: "/reinigung-heilbronn",
            serviceType: "Gebäudereinigung",
          }),
          createFaqJsonLd(localFaqs),
        ]}
      />
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
          <ServiceImage
            src="/placeholders/reinigung.png"
            alt="Gebäudereinigung für ein gepflegtes Objekt in Heilbronn"
            caption="Gebäudereinigung für private und gewerbliche Objekte in Heilbronn."
          />
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
          <p>
            Für kombinierte Arbeiten finden Sie außerdem Informationen zu{" "}
            <Link href="/entruempelung">Entrümpelungen</Link>, zum{" "}
            <Link href="/hausservice">Hausservice</Link> und zum{" "}
            <Link href="/fuer-vermieter">Service bei Mieterwechseln</Link>.
          </p>
        </div>
      </section>

      <FaqSection items={localFaqs} />
    </PageShell>
  );
}
