# AGENTS

## Project Facts
- Static Greek-only Vite + React site for Terminal Pest Control Solutions; no backend.
- Routing is `HashRouter` in `src/main.jsx` for GitHub Pages compatibility; do not replace with `BrowserRouter` unless hosting changes.
- Styling is plain CSS in `src/index.css` with CSS custom properties; no Tailwind or CSS-in-JS.
- Main page sections are rendered from `src/App.jsx` and component files under `src/components/`.

## Commands
- Install: `npm install`
- Dev server: `npm run dev`
- Lint: `npm run lint`
- Production build: `npm run build`
- Preview build: `npm run preview`
- Deploy to GitHub Pages: `npm run deploy` (`predeploy` runs the build first)

## Deployment / Owner Placeholders
- Vite `base` is explicitly `/terminal-pest-control-solutions/` for GitHub Pages project deployment.
- No custom domain is configured; if adding one later, set Vite `base: '/'`, add `public/CNAME`, and update SEO URLs in `index.html` and `package.json`.
- Contact form submissions use Web3Forms in `src/components/Contact.jsx`; keep the site static and GitHub Pages-compatible.
- Google reviews are prepared through Elfsight in `src/components/ElfsightReviews.jsx`; replace `YOUR_ELFSIGHT_APP_ID` with the real widget app ID.
