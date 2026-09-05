# AceisOriginal site

Cute coy gamer-girl public site for AceisOriginal.
Powder sky vibe matching Cloud Desk.

**Live:** https://aceisoriginal.com (GitHub Pages)

## Pages
- Home `/`
- Posts `/posts`
- Pages c/pages`
- Links `/links`

## Brand
Sky blush mint butter lavender. Nunito. Original clouds only.

## Router / GitHub Pages
Uses `BrowserRouter` (clean URLs). Deploy copies `index.html` → `404.html` so GitHub Pages SPA deep links work. Vite `base` is `/` for the custom domain.

## Scripts
- `npm install` — install dependencies
- `npm run dev` — Vite development server
- `npm run build` — TypeScript check + production bundle to `dist/`
- `npm run preview` — serve the production build

## Deploy
Push to `main` triggers `.github/workflows/deploy.yml`, which builds and publishes `dist/` to the `gh-pages` branch via peaceiris/actions-gh-pages. Custom domain: `aceisoriginal.com` (CNAME in `public/`).
