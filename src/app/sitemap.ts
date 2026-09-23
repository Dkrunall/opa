import fs from "node:fs";
import path from "node:path";
import type { MetadataRoute } from "next";

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

// Every folder under src/app/blog with a page file is a post, so new posts
// are picked up at build time without editing this file.
function getBlogPaths(): string[] {
  const blogDir = path.join(process.cwd(), "src", "app", "blog");
  return fs
    .readdirSync(blogDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && !/^[_[(@]/.test(entry.name))
    .filter((entry) =>
      ["page.tsx", "page.ts", "page.jsx", "page.js", "page.mdx"].some((file) =>
        fs.existsSync(path.join(blogDir, entry.name, file)),
      ),
    )
    .map((entry) => `/blog/${entry.name}`)
    .sort();
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const blogPages = getBlogPaths().map((blogPath) => ({
    path: blogPath,
    priority: 0.6,
    changeFrequency: "monthly" as ChangeFrequency,
  }));

  return [...pages, ...blogPages].map(({ path, priority, changeFrequency }) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
