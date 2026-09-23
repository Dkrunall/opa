import type { MetadataRoute } from "next";
import { getBlogPosts } from "@/lib/blog";

const baseUrl = "https://opabarandcafe.in";

type ChangeFrequency = MetadataRoute.Sitemap[number]["changeFrequency"];

const pages: { path: string; priority: number; changeFrequency: ChangeFrequency }[] = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/book-a-table", priority: 0.9, changeFrequency: "monthly" },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
  { path: "/fine-dine-in-andheri-east", priority: 0.8, changeFrequency: "monthly" },
  { path: "/nightlife-in-andheri", priority: 0.8, changeFrequency: "monthly" },
  { path: "/blog", priority: 0.7, changeFrequency: "weekly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const staticEntries = pages.map(({ path, priority, changeFrequency }) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
  const blogEntries = getBlogPosts().map((post) => ({
    url: `${baseUrl}${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as ChangeFrequency,
    priority: 0.6,
  }));

  return [...staticEntries, ...blogEntries];
}
