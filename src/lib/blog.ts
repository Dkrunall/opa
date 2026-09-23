import fs from "node:fs";
import path from "node:path";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  tags: string[];
  date: string;
};

const blogDir = path.join(process.cwd(), "src", "app", "blog");
const requiredFields = ["title", "excerpt", "category", "image", "tags", "date"] as const;

// Every folder under src/app/blog with a page file is a post. Its card data
// lives in a post.json next to page.tsx. Read at build time, so new posts show
// up on the blog index and in the sitemap without editing either.
export function getBlogPosts(): BlogPost[] {
  return fs
    .readdirSync(blogDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && !/^[_[(@]/.test(entry.name))
    .filter((entry) =>
      ["page.tsx", "page.ts", "page.jsx", "page.js", "page.mdx"].some((file) =>
        fs.existsSync(path.join(blogDir, entry.name, file)),
      ),
    )
    .map((entry) => readPost(entry.name))
    .sort((a, b) => b.date.localeCompare(a.date));
}

function readPost(folder: string): BlogPost {
  const file = path.join(blogDir, folder, "post.json");
  if (!fs.existsSync(file)) {
    throw new Error(`Blog post "${folder}" is missing src/app/blog/${folder}/post.json`);
  }
  const data = JSON.parse(fs.readFileSync(file, "utf8"));
  const missing = requiredFields.filter((field) => !data[field]);
  if (missing.length > 0) {
    throw new Error(`src/app/blog/${folder}/post.json is missing: ${missing.join(", ")}`);
  }
  return { ...data, slug: `/blog/${folder}` };
}
