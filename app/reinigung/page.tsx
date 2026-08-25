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
  "Reinigung für Haus, Wohnung & Gewerbe Heilbronn",
  "Reinigung für Wohnungen, Häuser, Treppenhäuser und Gewerbeobjekte in Heilbronn. Einmalig oder regelmäßig – jetzt HNFix Angebot anfragen.",
  "/reinigung",
);

const cleaningServices = [
  "Gebäudereinigung für private und gewerbliche Objekte",
  "Regelmäßige Treppenhausreinigung",
  "Grundreinigung und laufende Objektpflege",
  "Reinigung vor Wohnungsübergaben",
];

const cleaningFaqs = [
  {
    question: "Welche Objekte reinigt HNFix?",
    answer:
      "HNFix reinigt Wohnungen, Häuser, Treppenhäuser, Nebenflächen und gewerblich genutzte Objekte. Der genaue Umfang wird vor dem Angebot abgestimmt.",
  },
  {
    question: "Ist eine regelmäßige Reinigung möglich?",
    answer:
      "Ja. Neben einmaligen Grund- und Übergabereinigungen sind wiederkehrende Einsätze in einem passenden Turnus möglich.",
  },
  {
    question: "Wie wird der Preis für die Reinigung ermittelt?",
    answer:
      "Entscheidend sind unter anderem Flächengröße, Zustand, gewünschte Arbeiten, Zugänglichkeit und Rhythmus. Diese Angaben können Sie direkt über das Anfrageformular senden.",
  },
];

export default function ReinigungPage() {
  return (
    <PageShell>
      <JsonLd
        data={[
          createBreadcrumbJsonLd("Reinigung", "/reinigung"),
          createServiceJsonLd({
            name: "Reinigung für Haus und Objekt",
            description:
              "Einmalige und regelmäßige Reinigung von Wohnungen, Häusern, Treppenhäusern und Gewerbeobjekten in Heilbronn und Umgebung.",
            path: "/reinigung",
            serviceType: [
              "Gebäudereinigung",
              "Treppenhausreinigung",
              "Grundreinigung",
              "Übergabereinigung",
            ],
          }),
          createFaqJsonLd(cleaningFaqs),
        ]}
      />
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
          <ServiceImage
            src="/placeholders/reinigung.png"
            alt="Reinigung einer Immobilie durch einen Haus- und Objektservice"
            caption="Reinigung für Wohnungen, Häuser, Treppenhäuser und Gewerbeobjekte."
          />
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
          <p>
            Ergänzend übernehmen wir bei Bedarf{" "}
            <Link href="/hausservice">laufende Objektpflege</Link> oder eine{" "}
            <Link href="/entruempelung">Entrümpelung vor der Reinigung</Link>.
            Alle Orte finden Sie in unserem <Link href="/einsatzgebiet">Einsatzgebiet</Link>.
          </p>
        </div>
      </section>

      <FaqSection items={cleaningFaqs} />
    </PageShell>
  );
}
