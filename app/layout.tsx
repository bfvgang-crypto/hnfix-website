import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://hnfix.de"),
  title: "HNFix | Haus & Objekt Service Heilbronn",
  description:
    "HNFix bietet Reinigung, Entrümpelung, Keller- und Garagenservice, Sperrmüllbereitstellung und Gartenpflege in Heilbronn und Umgebung.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
