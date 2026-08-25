import type { Metadata } from "next";

const siteName = "HNFix";

export const SITE_URL = "https://www.hnfix.de";

export function createPageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  const canonicalUrl = new URL(path, SITE_URL).toString();

  return {
    title,
    description,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      type: "website",
      locale: "de_DE",
      url: canonicalUrl,
      siteName,
      title,
      description,
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
      title,
      description,
      images: ["/hero.webp"],
    },
  };
}
