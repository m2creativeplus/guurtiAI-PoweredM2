# Live QA Audit Report
**Target:** https://guurtiai-powered-m2.vercel.app
**Pages Audited:** 20 (Crawled via Headless Browser)

## 🚨 Broken Routes (404 Not Found)
The crawler clicked all available links and buttons and discovered that the following navigation targets are entirely missing or result in a 404 Error:
- `https://guurtiai-powered-m2.vercel.app/about/mandate`
- `https://guurtiai-powered-m2.vercel.app/about/history`
- `https://guurtiai-powered-m2.vercel.app/about/structure`
- `https://guurtiai-powered-m2.vercel.app/accessibility`
- `https://guurtiai-powered-m2.vercel.app/downloads`
- `https://guurtiai-powered-m2.vercel.app/news/1`
- `https://guurtiai-powered-m2.vercel.app/news/2`
- `https://guurtiai-powered-m2.vercel.app/news/3`
- `https://guurtiai-powered-m2.vercel.app/news/4`

## 🌐 Verified Route Map (200 Success)
These pages successfully rendered client-side components and returned 200/304 status codes:
- `https://guurtiai-powered-m2.vercel.app`
- `https://guurtiai-powered-m2.vercel.app/sdla`
- `https://guurtiai-powered-m2.vercel.app/donors`
- `https://guurtiai-powered-m2.vercel.app/international-engagement`
- `https://guurtiai-powered-m2.vercel.app/strategic-plan`
- `https://guurtiai-powered-m2.vercel.app/search`
- `https://guurtiai-powered-m2.vercel.app/news`
- `https://guurtiai-powered-m2.vercel.app/gallery`

## 🖱️ Button Coverage Findings
The crawler verified that the core navigation headers load successfully on all functional pages. 
- The homepage and major routes load **22 distinct interactive buttons** per page (including the language toggles "SO, EN" and the primary dropdowns "About, News & Media, Publications").
- The `donors` page contains **34 interactive elements**.

### ⚠️ UX Assessment
- The dropdown menu in the header (e.g. "About" -> "History") is actively linking to pages that do not exist (`/about/history`), causing an immediate 404 dead end for users. 
- The dynamic routing for news articles (`/news/[id]`) is failing because there is no backend database providing the `[id]` parameters, leaving the links hardcoded to non-existent static routes (`/news/1`).
