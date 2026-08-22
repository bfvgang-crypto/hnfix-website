import type { Metadata } from "next";

const siteName = "HNFix";

export function createPageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "de_DE",
      url: path,
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
