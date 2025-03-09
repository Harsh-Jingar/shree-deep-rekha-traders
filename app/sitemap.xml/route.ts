// app/sitemap.xml/route.ts

import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "https://www.shreedeeprekhatraders.in";

  const staticPages = [
    "",
    "/about",
    "/products"
    // Add more pages like /contact if you create later
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${staticPages
      .map((page) => {
        return `
        <url>
          <loc>${baseUrl}${page}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>monthly</changefreq>
          <priority>${page === "" ? "1.0" : "0.8"}</priority>
        </url>`;
      })
      .join("")}
  </urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
