# DEPTH UNIT

Official DEPTH UNIT label website — React + Vite + TypeScript + Tailwind.

## Run locally / in Codespaces

```bash
npm install
npm run dev
```

Vite will expose the local server in the **Ports** panel. Open port **5173**.

## Production build

```bash
npm run build
npm run preview
```

## Routes

- `/` — Home
- `/releases` — Catalogue
- `/release/:slug` — Release detail
- `/artists` — Artists
- `/artist/:slug` — Artist detail
- `/shop` — Shop
- `/social` — Social
- `/about` — About
- `/contact` — Contact / demos
- `/admin` — Local demo admin
- `/admin/dashboard` — Dashboard

The admin is intentionally frontend-only and stores demo credentials/session in localStorage. Do not use it as production authentication without a real backend.
