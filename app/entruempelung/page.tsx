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
  "Entrümpelung Heilbronn mit besenreiner Übergabe",
  "Entrümpelung in Heilbronn für Wohnung, Haus, Keller und Garage – mit Transport, Entsorgung nach Absprache und besenreiner Übergabe.",
  "/entruempelung",
);

const points = [
  "Wohnungen, Häuser, Keller und Garagen",
  "Demontage, Transport und besenreine Übergabe",
  "Fachgerechte Entsorgung nach Absprache",
  "Planbare Termine auch bei kurzfristigem Bedarf",
];

const clearanceFaqs = [
  {
    question: "Welche Räume können entrümpelt werden?",
    answer:
      "HNFix übernimmt Entrümpelungen von Wohnungen, Häusern, Kellern, Garagen und Nebenflächen. Auch mehrere Bereiche können in einem Auftrag zusammengefasst werden.",
  },
  {
    question: "Ist eine besenreine Übergabe möglich?",
    answer:
      "Ja. Nach der Räumung kann die Fläche wie vereinbart besenrein übergeben werden. Zusätzliche Reinigungsarbeiten werden bei Bedarf separat abgestimmt.",
  },
  {
    question: "Wie entsteht das Angebot für eine Entrümpelung?",
    answer:
      "Für ein realistisches Angebot benötigt HNFix Angaben zu Objekt, Etage, Zugänglichkeit, Umfang und gewünschtem Termin. Fotos können die Einschätzung erleichtern.",
  },
];

export default function EntruempelungPage() {
  return (
    <PageShell>
      <JsonLd
        data={[
          createBreadcrumbJsonLd("Entrümpelung", "/entruempelung"),
          createServiceJsonLd({
            name: "Entrümpelung in Heilbronn und Umgebung",
            description:
              "Entrümpelung von Wohnungen, Häusern, Kellern und Garagen mit Transport und besenreiner Übergabe.",
            path: "/entruempelung",
            serviceType: ["Entrümpelung", "Haushaltsauflösung", "Kellerräumung"],
          }),
          createFaqJsonLd(clearanceFaqs),
        ]}
      />
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
          <ServiceImage
            src="/placeholders/entruempelung.png"
            alt="Vorbereitete Entrümpelung einer Wohnung in der Region Heilbronn"
            caption="Entrümpelung von Wohnungen, Häusern, Kellern und Garagen."
          />
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

      <section className="section sectionCompact">
        <div className="container contentPanel seoPanel">
          <h2>Entrümpelung für private und vermietete Immobilien</h2>
          <p>
            Vor Beginn werden Umfang, Zugangswege und gewünschter Übergabezustand
            geklärt. Das ist besonders bei Wohnungsauflösungen, Mieterwechseln
            sowie vollgestellten Kellern oder Garagen wichtig.
          </p>
          <p>
            Auf Wunsch lässt sich die Räumung mit einer anschließenden{" "}
            <Link href="/reinigung">Reinigung</Link> verbinden. Eigentümer und
            Verwaltungen finden weitere Hinweise im Bereich{" "}
            <Link href="/fuer-vermieter">Service für Vermieter</Link>. Prüfen Sie
            auch unser <Link href="/einsatzgebiet">Einsatzgebiet</Link>.
          </p>
        </div>
      </section>

      <FaqSection items={clearanceFaqs} />
    </PageShell>
  );
}
