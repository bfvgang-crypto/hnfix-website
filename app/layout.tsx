import type { Metadata } from "next";
import { AnalyticsConsent } from "./components/analytics-consent";
import { JsonLd, serviceArea } from "./components/seo-content";
import { SITE_URL } from "./metadata";
import "./globals.css";

const gaMeasurementId =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "G-LR6B2PC3RB";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "HNFix | Haus & Objekt Service Heilbronn",
    template: "%s | HNFix",
  },
  description:
    "HNFix bietet Reinigung, Entrümpelung, Keller- und Garagenservice, Sperrmüllbereitstellung und leichte Außenpflege in Heilbronn und Umgebung.",
  applicationName: "HNFix",
  category: "Haus- und Objektservice",
  keywords: [
    "Hausservice Heilbronn",
    "Gebäudereinigung Heilbronn",
    "Entrümpelung Heilbronn",
    "Objektpflege Heilbronn",
    "Treppenhausreinigung Heilbronn",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "/",
    siteName: "HNFix",
    title: "HNFix | Haus & Objekt Service Heilbronn",
    description:
      "Reinigung, Entrümpelung und zuverlässiger Hausservice in Heilbronn und Umgebung.",
    images: [
      {
        url: "/hero.webp",
        width: 1536,
        height: 1024,
        alt: "HNFix Haus & Objekt Service in Heilbronn",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HNFix | Haus & Objekt Service Heilbronn",
    description:
      "Reinigung, Entrümpelung und zuverlässiger Hausservice in Heilbronn und Umgebung.",
    images: ["/hero.webp"],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "HNFix",
      inLanguage: "de-DE",
      publisher: { "@id": `${SITE_URL}/#localbusiness` },
    },
    {
      "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
      "@id": `${SITE_URL}/#localbusiness`,
      name: "HNFix Haus & Objekt Service",
      url: SITE_URL,
      logo: `${SITE_URL}/logo.png`,
      image: `${SITE_URL}/hero.webp`,
      description:
        "Haus- und Objektservice für Reinigung, Entrümpelung und Objektpflege in Heilbronn und Umgebung.",
      areaServed: serviceArea.map((name) => ({ "@type": "City", name })),
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Haus- und Objektservice",
        itemListElement: [
          "Gebäudereinigung",
          "Treppenhausreinigung",
          "Entrümpelung",
          "Keller- und Garagenservice",
          "Sperrmüllbereitstellung",
          "Leichte Außenflächenpflege",
        ].map((name) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name },
        })),
      },
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <body>
        <JsonLd data={organizationJsonLd} />
        {children}
        <AnalyticsConsent gaId={gaMeasurementId} />
      </body>
    </html>
  );
}
