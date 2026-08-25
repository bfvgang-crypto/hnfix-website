import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../components/page-shell";
import {
  createBreadcrumbJsonLd,
  createFaqJsonLd,
  FaqSection,
  JsonLd,
} from "../components/seo-content";
import { createPageMetadata } from "../metadata";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = createPageMetadata(
  "Kontakt & kostenloses Angebot anfragen",
  "Kostenloses Angebot für Reinigung, Entrümpelung oder Hausservice in Heilbronn anfragen. Objekt beschreiben und unverbindlich Kontakt aufnehmen.",
  "/kontakt",
);

const contactFaqs = [
  {
    question: "Ist die Angebotsanfrage unverbindlich?",
    answer:
      "Ja. Sie senden zunächst die Eckdaten zu Ihrem Anliegen. HNFix prüft die Angaben und meldet sich mit den nächsten Schritten beziehungsweise einem passenden Angebot.",
  },
  {
    question: "Welche Angaben helfen bei einer schnellen Einschätzung?",
    answer:
      "Besonders hilfreich sind Objektart, Ort, Flächengröße, gewünschte Leistung, Zugänglichkeit und Terminrahmen. Aussagekräftige Fotos können den Aufwand besser erkennbar machen.",
  },
  {
    question: "Kann ich mehrere Leistungen gleichzeitig anfragen?",
    answer:
      "Ja. Sie können zum Beispiel Entrümpelung und anschließende Reinigung oder mehrere Hausservice-Arbeiten in einer Anfrage kombinieren.",
  },
];

export default function KontaktPage() {
  return (
    <PageShell>
      <JsonLd
        data={[
          createBreadcrumbJsonLd("Kontakt", "/kontakt"),
          createFaqJsonLd(contactFaqs),
        ]}
      />
      <section className="pageHero">
        <div className="container">
          <p className="sectionEyebrow">Kontakt</p>
          <h1>Kostenloses Angebot für Ihr Anliegen anfragen</h1>
          <p className="sectionLead">
            Beschreiben Sie Ihr Objekt und den gewünschten Leistungsumfang.
            Wir melden uns zeitnah mit einem transparenten Angebot.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contactLayout contactQuoteLayout">
          <div className="contentPanel quoteIntro">
            <h2>Ihre Anfrage in wenigen Schritten</h2>
            <p className="sectionLead">
              Je genauer Ihre Angaben sind, desto schneller erhalten Sie ein
              passendes und unverbindliches Angebot. Fotos helfen uns dabei,
              den Aufwand realistisch einzuschätzen.
            </p>
            <p>
              Noch unsicher? Vergleichen Sie vorab unsere{" "}
              <Link href="/leistungen">Leistungen</Link> oder prüfen Sie das{" "}
              <Link href="/einsatzgebiet">Einsatzgebiet rund um Heilbronn</Link>.
            </p>
          </div>

          <ContactForm />
        </div>
      </section>

      <FaqSection items={contactFaqs} />
    </PageShell>
  );
}
