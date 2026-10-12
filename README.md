# CurePlus Hospitals website

Next.js 16 (App Router) · React · Tailwind CSS 3 · TypeScript. A rural / semi-urban healthcare network in Karnataka: 18 hospitals, a Super Hub (in construction), contact details, careers.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start   # production build
npm run lint
```

No environment variables are needed. There is no contact form: the Contact page lists phone, email, address and a phone directory of every hospital.

## Where things live

| What | File |
| --- | --- |
| **All hospital content** (names, addresses, pincodes, map links, `is24x7`, photos, SEO) | `src/app/data/hospitals.json` (typed by `src/app/data/Hospital.ts`) |
| Team members shown on `/team` | `src/app/data/team.json` |
| Site constants: phone, social links, nav, stats, mission/vision, Super Hub facts, video ids | `src/app/data/site.ts` |
| Public hospital URLs (`/cureplus-…`) and redirects (URL of the removed hospital → `/hospitals`) | `next.config.ts` |
| Design tokens (colours, type scale, buttons, cards, badges, forms) | `tailwind.config.ts` + `src/app/globals.css` |
| Shared components (header, footer, hospital card, gallery, video facade, team dialog) | `src/app/component/` |
| Sitemap / robots | `src/app/sitemap.ts`, `src/app/robots.ts` (generated from the hospital data) |

### Common edits

- **Add / change a hospital** – edit its entry in `hospitals.json`; add a rewrite for its URL in `next.config.ts`. Cards, filters, the contact-page phone directory, JSON-LD, sitemap and counts update automatically.
- **24x7 badge** – set `is24x7: true` only for hospitals that are really open 24x7.
- **Home / Super Hub videos** – edit `STORY_VIDEOS` in `site.ts` (the first one is shown large). Videos load on click from `youtube-nocookie.com`. To add the new hospital video, add its YouTube id to that list.
- **Milestones on the Super Hub timeline** – `SUPER_HUB.milestones` in `site.ts` (marked TODO: confirm with client).

## Images

Photos are pre-optimised (16:10, WebP + JPEG fallback, 600 / 800 / 1200 px, each under ~200 KB) into `public/images/`.

```bash
python scripts/extract-pdf-images.py    # docs/CurePlus Hospitals Website.pdf -> assets/source (git-ignored)
python scripts/extract-docx-images.py   # assets/source/CurePlus Hospitals Website.docx -> assets/source (updated Google Doc)
python scripts/optimize-images.py       # crop + compress -> public/images
```

Requires Python with `pymupdf` and `pillow`. To change a crop, edit the anchor for that image at the top of `optimize-images.py`.

## Quality checks run on this build

Lighthouse (mobile, simulated 4G): accessibility, best-practices and SEO 100 on all key pages; performance 90–97 (median of 3–5 runs per page). axe-core: no WCAG 2 A/AA violations on any page. Also smoke-tested in Chrome, Edge, Firefox and WebKit (desktop + iPhone 13 profile). No horizontal scroll from 320 px to 1536 px.
