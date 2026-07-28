import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://amrinterface.org/sitemap.xml",
    host: "https://amrinterface.org",
  };
}
