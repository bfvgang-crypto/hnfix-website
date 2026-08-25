import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import heroImage from "../public/hero.webp";
import { BenefitsBar } from "./components/benefits-bar";
import { PageShell } from "./components/page-shell";
import { ProcessSteps } from "./components/process-steps";
import {
  createFaqJsonLd,
  FaqSection,
  JsonLd,
  ServiceLinks,
} from "./components/seo-content";
import { ServicesGrid } from "./components/services-grid";
import { createPageMetadata } from "./metadata";

export const metadata: Metadata = createPageMetadata(
  "HNFix | Haus & Objekt Service Heilbronn",
  "HNFix bietet Reinigung, Entrümpelung und Hausservice mit Festpreisen in Heilbronn und bis zu 50 km Umgebung.",
  "/",
);

const heroBenefits = [
  "Kostenlose Anfrage & Festpreis",
  "Schnelle Termine",
  "Zuverlässiger Service",
  "Sperrmüllbereitstellung",
];

const homeFaqs = [
  {
    question: "Welche Leistungen bietet HNFix in Heilbronn an?",
    answer:
      "HNFix übernimmt Reinigungen, Entrümpelungen, Treppenhauspflege, Keller- und Garagenservice, Sperrmüllbereitstellung sowie Arbeiten an Hof- und Außenflächen.",
  },
  {
    question: "Wie erhalte ich ein Angebot?",
    answer:
      "Senden Sie über das Anfrageformular die wichtigsten Angaben zum Objekt und zur gewünschten Leistung. HNFix prüft den Aufwand und meldet sich mit einem unverbindlichen Angebot.",
  },
  {
    question: "In welchen Orten ist HNFix im Einsatz?",
    answer:
      "Der Schwerpunkt liegt in Heilbronn. Einsätze sind nach Absprache auch in Neckarsulm, Weinsberg, Leingarten, Flein und weiteren Orten bis etwa 50 km möglich.",
  },
];

export default function Home() {
  return (
    <PageShell>
      <JsonLd data={createFaqJsonLd(homeFaqs)} />
      <section className="hero">
        <Image
          className="heroImage"
          src={heroImage}
          alt="Gepflegte Immobilie im Einsatzgebiet von HNFix"
          fill
          priority
          sizes="100vw"
        />
        <div className="heroOverlay" />
        <div className="container heroInner">
          <p className="heroEyebrow">Heilbronn & Umgebung – bis 50 km</p>
          <h1>
            Haus & Objekt
            <br />
            Service Heilbronn
          </h1>
          <p className="heroSubtitle">
            Reinigung · Entrümpelung · Keller · Garage · Treppenhaus ·
            Außenbereich
          </p>

          <ul className="heroBenefits">
            {heroBenefits.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className="heroActions">
            <Link href="/kontakt" className="btn btnPrimary">
              Kostenloses Angebot anfordern
            </Link>
            <Link href="/leistungen" className="btn btnGhost">
              Unsere Leistungen
            </Link>
          </div>
        </div>
      </section>

      <section className="homeServices" aria-label="Leistungen">
        <div className="homeServicesInner">
          <ServicesGrid />
        </div>
      </section>

      <BenefitsBar />
      <ProcessSteps />

      <section className="section sectionCompact">
        <div className="container contentPanel seoPanel">
          <h2>Haus- und Objektservice aus der Region Heilbronn</h2>
          <p>
            HNFix unterstützt Privathaushalte, Eigentümer, Vermieter,
            Hausverwaltungen und Unternehmen bei einmaligen Aufgaben und
            regelmäßig wiederkehrender Objektpflege. Leistungsumfang, Termin
            und Zugang werden vorab passend zum Objekt abgestimmt.
          </p>
          <ServiceLinks />
        </div>
      </section>

      <FaqSection items={homeFaqs} />
    </PageShell>
  );
}
