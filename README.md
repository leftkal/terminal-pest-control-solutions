# Terminal Pest Control Solutions

Static Greek-language React website for Terminal Pest Control Solutions, a pest control company based in Νέα Ιωνία, Αθήνα.

## Commands

- `npm install` installs dependencies.
- `npm run dev` starts the local Vite dev server.
- `npm run lint` runs ESLint.
- `npm run build` creates the production build in `dist/`.
- `npm run preview` previews the production build locally.
- `npm run deploy` builds and publishes `dist/` to the `gh-pages` branch.

## Deployment

- Vite uses `base: '/terminal-pest-control-solutions/'` for GitHub Pages project deployment.
- Routing uses `HashRouter`; do not switch to `BrowserRouter` unless hosting changes.
- No custom domain is configured. Add `public/CNAME`, set Vite `base: '/'`, and update SEO URLs if a custom domain is added later.

## Owner TODOs

- If adding a custom domain later, update `package.json`, `index.html`, `vite.config.js`, and add `public/CNAME`.
- The contact form submits through Web3Forms from `src/components/Contact.jsx`.
- Replace or confirm the Google Maps embed URL in `src/components/Contact.jsx`.
- Add a production hero WebP photo if desired; the current hero uses CSS-only industrial styling.
- `public/terminal-icon.png` is used for the visible logo and browser favicon.
- Replace `YOUR_ELFSIGHT_APP_ID` in `src/components/ElfsightReviews.jsx` after creating the Elfsight Google Reviews widget.
