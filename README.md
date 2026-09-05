# AceisOriginal site

Cute coy gamer-girl public site for AceisOriginal.
Powder sky vibe matching Cloud Desk.

**Live:** https://aceisoriginal.com (GitHub Pages)

## Pages
- Home `/`
- Posts `/posts`
- Pages `/pages`
- Links `/links`

## Brand
Sky blush mint butter lavender. Nunito. Original clouds only.

## Router / GitHub Pages
Uses `BrowserRouter` (clean URLs). The `gh-pages` deploy includes `404.html` (copy of `index.html`) so GitHub Pages SPA deep links work. Vite `base` is `/` for the custom domain.

## Scripts
- `npm install` — install dependencies
- `npm run dev` — Vite development server
- `npm run build` — TypeScript check + production bundle to `dist/`
- `npm run preview` — serve the production build

## Deploy
Source lives on `main`. Built site is published to the `gh-pages` branch (includes `CNAME` = `aceisoriginal.com` and SPA `404.html`).
To redeploy: `npm run build`, copy `dist/index.html` to `dist/404.html`, then push `dist/` contents to `gh-pages`.
