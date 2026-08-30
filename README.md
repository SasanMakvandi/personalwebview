# Sasan Makvandi — Portfolio

Personal portfolio site, styled as a retro Windows XP desktop — a sticky "whoami.txt" sidebar next to scrollable windows for education/skills/certs, work experience, projects, and web design work, plus a taskbar and a small easter egg.

Fully static: no backend, no database, no server-side code.

## Tech stack

- [Vite](https://vitejs.dev/) — build tooling and dev server
- [React](https://react.dev/) 19
- [Tailwind CSS](https://tailwindcss.com/) 3
- [lucide-react](https://lucide.dev/) — icons

## Getting started

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:5173` with hot module reload.

## Build

```bash
npm run build
```

Outputs a static production build to `dist/`. Preview it locally with:

```bash
npm run preview
```

## Project structure

```
src/
  App.jsx        # main component — all sections, content data, and layout
  main.jsx        # React entry point
  index.css       # Tailwind entry
  assets/         # project preview images and photos, imported directly in App.jsx
public/
  favicon.svg
```

Section content (skills, experience, projects, web design work) is defined as plain data objects near the top of `src/App.jsx` — update those to change copy without touching layout code.

## Deployment

See [DEPLOYMENT.md](DEPLOYMENT.md) for the full walkthrough: pushing to GitHub, deploying to Vercel or Netlify, attaching a custom domain, and rolling back a bad deploy.

## Notes

- `lucide-react` is pinned to `0.577.0`. Versions `1.0` and later removed several brand icons (`Github`, `Linkedin`) used in the sidebar — upgrading past `1.0` requires swapping those out first.
- Project preview images and the aquarium photo live in `src/assets/` and are pulled in via standard `import` statements, so Vite fingerprints and caches them separately from the JS bundle.

## Roadmap

- [ ] Add a headshot to the sidebar
- [ ] Link a repository for the Streaming Platform project once one is public
- [ ] Add a preview image and link for the advertising agency site once it ships
