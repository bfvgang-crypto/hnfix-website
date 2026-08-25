import Link from "next/link";
import { SITE_URL } from "../metadata";

type JsonLd = Record<string, unknown>;

type FaqItem = {
  question: string;
  answer: string;
};

export const serviceArea = [
  "Heilbronn",
  "Neckarsulm",
  "Weinsberg",
  "Leingarten",
  "Bad Friedrichshall",
  "Flein",
  "Lauffen am Neckar",
  "Abstatt",
  "Neuenstadt am Kocher",
];

export function JsonLd({ data }: { data: JsonLd | JsonLd[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export function createBreadcrumbJsonLd(
  currentName: string,
  currentPath: string,
): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Startseite",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: currentName,
        item: new URL(currentPath, SITE_URL).toString(),
      },
    ],
  };
}

export function createWebPageJsonLd({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url: new URL(path, SITE_URL).toString(),
    inLanguage: "de-DE",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#localbusiness` },
  };
}

export function createServiceJsonLd({
  name,
  description,
  path,
  serviceType,
}: {
  name: string;
  description: string;
  path: string;
  serviceType: string | string[];
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: new URL(path, SITE_URL).toString(),
    serviceType,
    provider: { "@id": `${SITE_URL}/#localbusiness` },
    areaServed: serviceArea.map((name) => ({
      "@type": "City",
      name,
    })),
  };
}

export function createFaqJsonLd(items: FaqItem[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function FaqSection({
  items,
  title = "Häufige Fragen",
}: {
  items: FaqItem[];
  title?: string;
}) {
  return (
    <section className="section sectionCompact" aria-labelledby="faq-heading">
      <div className="container contentPanel seoPanel">
        <h2 id="faq-heading">{title}</h2>
        {items.map((item) => (
          <div key={item.question}>
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function ServiceLinks() {
  return (
    <p>
      Mehr erfahren über unsere <Link href="/reinigung">Reinigung</Link>, die{" "}
      <Link href="/entruempelung">Entrümpelung</Link>, den{" "}
      <Link href="/hausservice">Hausservice</Link> oder den speziellen{" "}
      <Link href="/fuer-vermieter">Service für Vermieter</Link>. Unser gesamtes{" "}
      <Link href="/einsatzgebiet">Einsatzgebiet</Link> reicht bis etwa 50 km um
      Heilbronn.
    </p>
  );
}
