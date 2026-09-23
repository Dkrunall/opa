import type { MetadataRoute } from "next";

const baseUrl = "https://opabarandcafe.in";

const pages: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/book-a-table", priority: 0.9, changeFrequency: "monthly" },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
  { path: "/fine-dine-in-andheri-east", priority: 0.8, changeFrequency: "monthly" },
  { path: "/nightlife-in-andheri", priority: 0.8, changeFrequency: "monthly" },
  { path: "/blog", priority: 0.7, changeFrequency: "weekly" },
  { path: "/blog/best-bar-in-andheri", priority: 0.6, changeFrequency: "monthly" },
  { path: "/blog/best-bar-in-andheri-opa-bar-cafe", priority: 0.6, changeFrequency: "monthly" },
  { path: "/blog/bar-and-restaurant-in-andheri-east", priority: 0.6, changeFrequency: "monthly" },
  { path: "/blog/best-lounge-in-mumbai", priority: 0.6, changeFrequency: "monthly" },
  { path: "/blog/best-mediterranean-restaurant-andheri", priority: 0.6, changeFrequency: "monthly" },
  { path: "/blog/mediterranean-food-restaurant-in-andheri", priority: 0.6, changeFrequency: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return pages.map(({ path, priority, changeFrequency }) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
