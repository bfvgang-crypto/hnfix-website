import type { Metadata } from "next";
import { AnalyticsConsent } from "./components/analytics-consent";
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
    "HNFix bietet Reinigung, Entrümpelung, Keller- und Garagenservice, Sperrmüllbereitstellung und Gartenpflege in Heilbronn und Umgebung.",
  applicationName: "HNFix",
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

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <body>
        {children}
        <AnalyticsConsent gaId={gaMeasurementId} />
      </body>
    </html>
  );
}
