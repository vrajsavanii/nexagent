import { MetadataRoute } from "next";
import { SOLUTIONS_DATA } from "@/data/solutions";
import { INSIGHTS_DATA } from "@/data/insights";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://nexagent.ai";
  const lastModified = new Date();

  const staticRoutes = [
    "",
    "/technology",
    "/solutions",
    "/industries",
    "/products",
    "/about",
    "/insights",
    "/faq",
    "/contact",
    "/strategy-call",
    "/privacy",
    "/terms",
    "/cookies"
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : route.startsWith("/solutions") || route.startsWith("/strategy-call") ? 0.9 : 0.8
  }));

  const solutionRoutes = SOLUTIONS_DATA.map((sol) => ({
    url: `${baseUrl}/solutions/${sol.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.85
  }));

  const insightRoutes = INSIGHTS_DATA.map((art) => ({
    url: `${baseUrl}/insights/${art.slug}`,
    lastModified: new Date(art.updatedAt),
    changeFrequency: "monthly" as const,
    priority: 0.75
  }));

  return [...staticRoutes, ...solutionRoutes, ...insightRoutes];
}
