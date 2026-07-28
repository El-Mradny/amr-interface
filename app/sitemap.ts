import type { MetadataRoute } from "next";

const BASE = "https://amrinterface.org";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${BASE}/`,            lastModified: now, changeFrequency: "monthly", priority: 1.0 },
    { url: `${BASE}/roundtables`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/outputs`,     lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/leadership`,  lastModified: now, changeFrequency: "yearly",  priority: 0.6 },
    { url: `${BASE}/engage`,      lastModified: now, changeFrequency: "yearly",  priority: 0.8 },
  ];
}
