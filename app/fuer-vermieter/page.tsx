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
  "Service für Vermieter & Hausverwaltungen Heilbronn",
  "HNFix unterstützt Vermieter und Hausverwaltungen in Heilbronn bei Mieterwechsel, Reinigung, Entrümpelung und laufender Objektpflege.",
  "/fuer-vermieter",
);

const advantages = [
  "Schnelle Einsatzbereitschaft bei Mieterwechsel",
  "Saubere Übergaben von Wohnungen und Nebenflächen",
  "Entrümpelung und Reinigung aus einer Hand",
  "Persönliche Abstimmung mit klaren Festpreisen",
];

const landlordFaqs = [
  {
    question: "Welche Arbeiten übernimmt HNFix bei einem Mieterwechsel?",
    answer:
      "Je nach Bedarf können Entrümpelung, Übergabereinigung und Arbeiten an Keller-, Garagen- oder Gemeinschaftsflächen abgestimmt werden.",
  },
  {
    question: "Können Hausverwaltungen wiederkehrende Leistungen anfragen?",
    answer:
      "Ja. Regelmäßige Reinigungs- und Hausserviceleistungen können passend zu Objekt, Flächen und gewünschtem Turnus geplant werden.",
  },
  {
    question: "Welche Angaben werden für ein Angebot benötigt?",
    answer:
      "Hilfreich sind Objektart, Standort, Flächengröße, gewünschte Arbeiten, Zugänglichkeit und Terminrahmen. Fotos können über das Anfrageformular ergänzt werden.",
  },
];

export default function FuerVermieterPage() {
  return (
    <PageShell>
      <JsonLd
        data={[
          createBreadcrumbJsonLd("Für Vermieter", "/fuer-vermieter"),
          createServiceJsonLd({
            name: "Objektservice für Vermieter und Hausverwaltungen",
            description:
              "Reinigung, Entrümpelung und Hausservice bei Mieterwechseln und für laufend gepflegte Immobilien.",
            path: "/fuer-vermieter",
            serviceType: "Objektservice für Vermieter",
          }),
          createFaqJsonLd(landlordFaqs),
        ]}
      />
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
          <ServiceImage
            src="/placeholders/keller-garage.png"
            alt="Aufgeräumter Keller- und Garagenbereich einer vermieteten Immobilie"
            caption="Objektservice für Vermieter, Eigentümer und Hausverwaltungen."
          />
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

      <section className="section sectionCompact">
        <div className="container contentPanel seoPanel">
          <h2>Koordinierte Abläufe bei Übergabe und Neuvermietung</h2>
          <p>
            Wenn Termine zwischen Auszug, Aufbereitung und Neuvermietung eng
            liegen, hilft ein klar abgestimmter Leistungsumfang. HNFix bündelt
            auf Wunsch <Link href="/entruempelung">Entrümpelung</Link>,{" "}
            <Link href="/reinigung">Reinigung</Link> und Arbeiten aus dem{" "}
            <Link href="/hausservice">Hausservice</Link>.
          </p>
          <p>
            Der Schwerpunkt liegt in Heilbronn und der Region. Alle regelmäßig
            angefahrenen Orte finden Sie auf der Seite{" "}
            <Link href="/einsatzgebiet">Einsatzgebiet</Link>.
          </p>
        </div>
      </section>

      <FaqSection items={landlordFaqs} />
    </PageShell>
  );
}
