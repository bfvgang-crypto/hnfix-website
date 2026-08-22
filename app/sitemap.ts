import type { MetadataRoute } from "next";

const routes = [
  "",
  "/leistungen",
  "/reinigung",
  "/entruempelung",
  "/hausservice",
  "/fuer-vermieter",
  "/einsatzgebiet",
  "/kontakt",
  "/impressum",
  "/datenschutz",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://hnfix.de${route}`,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/kontakt" ? 0.9 : 0.8,
  }));
}
