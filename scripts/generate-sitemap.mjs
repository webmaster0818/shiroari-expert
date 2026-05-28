#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, "..");
const BASE = "https://shiroari-expert-navi.com";
const OUT = path.join(ROOT, "public", "sitemap.xml");
const TODAY = new Date().toISOString().slice(0, 10);

// Tier 1: 主要ハブ・最重要記事
const TIER1 = [
  "shiroari-gyousha-erabikata",
  "shiroari-kuchu-hiyou",
  "shiroari-hojo-kin-zenkoku",
];
// Tier 2: 高検索ボリュームの周辺記事
const TIER2 = [
  "hane-ari-mikiwake",
  "shiroari-higai-shoujou",
  "shiroari-jibun-de",
  "shiroari-yobou",
  "shiroari-kasai-hoken",
  "chuuko-juutaku-inspection",
  "shiroari-yukashita-tenken",
];

function priorityFor(slug) {
  if (TIER1.includes(slug)) return "0.9";
  if (TIER2.includes(slug)) return "0.8";
  return "0.7";
}

function changefreqFor(priority) {
  return parseFloat(priority) >= 0.8 ? "weekly" : "monthly";
}

const STATIC_PAGES = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/about/", priority: "0.5", changefreq: "monthly" },
  { path: "/editorial/", priority: "0.4", changefreq: "yearly" },
  { path: "/privacy-policy/", priority: "0.3", changefreq: "yearly" },
  { path: "/terms-of-service/", priority: "0.3", changefreq: "yearly" },
];

function articleSlugs() {
  const dir = path.join(ROOT, "app", "articles");
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((e) => e.isDirectory() && !e.name.startsWith("_") && !e.name.startsWith("["))
    .map((e) => e.name)
    .sort();
}

function build() {
  const lines = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ];

  for (const p of STATIC_PAGES) {
    lines.push(
      `  <url><loc>${BASE}${p.path}</loc><lastmod>${TODAY}</lastmod><changefreq>${p.changefreq}</changefreq><priority>${p.priority}</priority></url>`,
    );
  }

  const articles = articleSlugs();
  for (const slug of articles) {
    const p = priorityFor(slug);
    const cf = changefreqFor(p);
    lines.push(
      `  <url><loc>${BASE}/articles/${slug}/</loc><lastmod>${TODAY}</lastmod><changefreq>${cf}</changefreq><priority>${p}</priority></url>`,
    );
  }

  lines.push("</urlset>", "");
  return { xml: lines.join("\n"), total: STATIC_PAGES.length + articles.length };
}

const result = build();
fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, result.xml);
console.log(`Wrote ${OUT}`);
console.log(`  ${result.total} URLs`);
