import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://hnfix.de"),
  title: {
    default: "HNFix | Haus & Objekt Service Heilbronn",
    template: "%s | HNFix",
  },
  description:
    "HNFix bietet Reinigung, Entrümpelung, Keller- und Garagenservice, Sperrmüllbereitstellung und Gartenpflege in Heilbronn und Umgebung.",
  applicationName: "HNFix",
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
      <body>{children}</body>
    </html>
  );
}
