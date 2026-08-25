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
  "Einsatzgebiet Heilbronn & Umgebung bis 50 km",
  "HNFix ist in Heilbronn, Neckarsulm, Weinsberg, Leingarten und weiteren Orten bis etwa 50 km für Reinigung und Hausservice im Einsatz.",
  "/einsatzgebiet",
);

const locations = [
  "Heilbronn",
  "Neckarsulm",
  "Weinsberg",
  "Leingarten",
  "Bad Friedrichshall",
  "Lauffen am Neckar",
  "Abstatt",
  "Neuenstadt",
  "Flein",
];

const areaFaqs = [
  {
    question: "Wie groß ist das Einsatzgebiet von HNFix?",
    answer:
      "HNFix arbeitet schwerpunktmäßig in Heilbronn und fährt nach Absprache auch Objekte in einem Umkreis von etwa 50 km an.",
  },
  {
    question: "Ist ein Einsatz außerhalb der genannten Orte möglich?",
    answer:
      "Ja, je nach Leistung, Auftragsumfang und Termin kann auch ein anderer Ort im regionalen Umkreis berücksichtigt werden. Fragen Sie den Standort einfach unverbindlich an.",
  },
  {
    question: "Welche Leistungen werden im gesamten Einsatzgebiet angeboten?",
    answer:
      "Grundsätzlich können Reinigung, Entrümpelung und Hausservice regional angefragt werden. Die konkrete Verfügbarkeit wird mit dem Objektstandort geprüft.",
  },
];

export default function EinsatzgebietPage() {
  return (
    <PageShell>
      <JsonLd
        data={[
          createBreadcrumbJsonLd("Einsatzgebiet", "/einsatzgebiet"),
          createServiceJsonLd({
            name: "Regionaler Haus- und Objektservice",
            description:
              "Reinigung, Entrümpelung und Hausservice in Heilbronn und einem Umkreis von etwa 50 Kilometern.",
            path: "/einsatzgebiet",
            serviceType: "Regionaler Haus- und Objektservice",
          }),
          createFaqJsonLd(areaFaqs),
        ]}
      />
      <section className="pageHero">
        <div className="container">
          <p className="sectionEyebrow">Einsatzgebiet</p>
          <h1>Heilbronn und Umgebung bis 50 km</h1>
          <p className="sectionLead">
            Wir sind regional unterwegs und schnell vor Ort – mit persönlichem
            Service für private und gewerbliche Kunden.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contentPanel">
          <ServiceImage
            src="/placeholders/AUSSENBEREICH.png"
            alt="Gepflegte Außenfläche im Einsatzgebiet von HNFix rund um Heilbronn"
            caption="Regionaler Haus- und Objektservice in Heilbronn und Umgebung."
          />
          <h2>Regionen im Überblick</h2>
          <div className="locations">
            {locations.map((location) => (
              <span key={location}>{location}</span>
            ))}
          </div>
          <p>
            In Heilbronn bieten wir unter anderem eine lokal ausgerichtete{" "}
            <Link href="/reinigung-heilbronn">Gebäudereinigung</Link> an. Auch{" "}
            <Link href="/entruempelung">Entrümpelung</Link> und{" "}
            <Link href="/hausservice">Hausservice</Link> können für Orte im
            regionalen Umkreis angefragt werden.
          </p>
        </div>
      </section>

      <FaqSection items={areaFaqs} />
    </PageShell>
  );
}
