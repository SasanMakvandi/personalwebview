# Portfolio site

Vite + React + Tailwind CSS. Fully static — no backend, no database.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Outputs static files to `dist/`. Preview the production build locally with `npm run preview`.

## Deploy

See [DEPLOYMENT.md](DEPLOYMENT.md) for the full walkthrough (GitHub push, Vercel/Netlify setup, custom domain, rollbacks).

## Known placeholders

- **GitHub profile link** (sidebar) — now points to `https://github.com/SasanMakvandi`. Done.
- **Project repo links** — matched against your GitHub repos:
  - Habit Reminder System → [Water-Reminder-](https://github.com/SasanMakvandi/Water-Reminder-) (site copy describes a Java backend; the actual repo is Python — same project, just flagging the mismatch in case the bullets need updating)
  - ADS-B Flight Radar → [ADSB-Radar](https://github.com/SasanMakvandi/ADSB-Radar) (exact match)
  - Streaming Platform → **no matching public repo found** on your account. Left unlinked — if it's private, under a teammate's account, or named differently, let me know the URL and I'll wire it up the same way (add a `repo:` field to that project in `src/App.jsx`).
- **Headshot** — the photo slot was removed from the sidebar entirely (LinkedIn required login to pull it, so nothing was fabricated). To add one later: put the image in `src/assets/`, `import` it (same pattern as `fredPreview` / `bonPreview` / `aquariumPhoto`), and re-add an `<img>` above the name in the `whoami.txt` window in [src/App.jsx](src/App.jsx).
- **Advertising agency project card** — intentionally left as `wip` with no link until that site ships.
- Note: the handoff brief mentioned a résumé download button in the nav — the `App.jsx` you provided doesn't actually contain one (no résumé link, no separate taskbar-Start-button-triggered menu). Nothing was invented to fill that gap; let me know if you want one added and where.

Contact email (`sasan.makvandi@hotmail.com`) and LinkedIn URL are real and were left untouched.

## About the images

The original artifact embedded three images (two site previews, one aquarium photo) as inline base64 `data:` URIs directly in `App.jsx`, which made the file ~150KB of mostly base64 text. They've been extracted to real files in `src/assets/` and are pulled in via normal `import` statements instead. This is better for a real build:

- Vite fingerprints and serves them as separate cacheable files instead of bloating the JS bundle — the built JS is ~220KB instead of carrying the images inline.
- They benefit from the browser's normal image cache across visits, and gzip/Brotli less well as base64 text.

No action needed on this — it's done. If you ever add more images, drop them in `src/assets/` and `import` them the same way.

## Dependencies

- `lucide-react` is pinned to `0.577.0`. Note: 1.0 removed brand icons (`Github`, `Linkedin`) that this design uses — upgrading past 1.0 will break the build unless those icons are swapped for something else first.
