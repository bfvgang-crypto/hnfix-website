import type { MetadataRoute } from "next";
import { SITE_URL } from "./metadata";

const lastModified = new Date("2026-08-25");

const routes: Array<{
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}> = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "/leistungen", changeFrequency: "monthly", priority: 0.9 },
  { path: "/reinigung", changeFrequency: "monthly", priority: 0.9 },
  { path: "/reinigung-heilbronn", changeFrequency: "monthly", priority: 0.9 },
  { path: "/entruempelung", changeFrequency: "monthly", priority: 0.9 },
  { path: "/hausservice", changeFrequency: "monthly", priority: 0.9 },
  { path: "/fuer-vermieter", changeFrequency: "monthly", priority: 0.8 },
  { path: "/einsatzgebiet", changeFrequency: "monthly", priority: 0.8 },
  { path: "/kontakt", changeFrequency: "monthly", priority: 0.7 },
  { path: "/impressum", changeFrequency: "yearly", priority: 0.3 },
  { path: "/datenschutz", changeFrequency: "yearly", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
