# Deployment

This is a static site (Vite + React + Tailwind). `npm run build` outputs plain HTML/CSS/JS to `dist/` — no server, no environment variables, no database. Any static host works; these instructions cover Vercel and Netlify, both free-tier, both auto-deploying on every push to `main`.

## 1. Push this project to GitHub

Skip this section if it's already in a repo.

```bash
git init
git add .
git commit -m "Initial commit"
```

Create an empty repo on GitHub (no README/license, so it doesn't conflict with what you just committed), then:

```bash
git remote add origin https://github.com/SasanMakvandi/<repo-name>.git
git branch -M main
git push -u origin main
```

## 2. Connect a host

### Option A — Vercel

1. Go to [vercel.com/new](https://vercel.com/new) and sign in with GitHub.
2. Import the repo. Vercel auto-detects the Vite framework preset:
   - Build command: `npm run build`
   - Output directory: `dist`
   - No environment variables needed.
3. Click **Deploy**. First deploy takes ~1 minute.
4. Every push to `main` triggers a new deploy automatically. Pushes to other branches get their own preview URL.

### Option B — Netlify

1. Go to [app.netlify.com](https://app.netlify.com) and sign in with GitHub.
2. **Add new site → Import an existing project**, pick the repo.
3. `netlify.toml` is already committed in this repo, so build settings are picked up automatically:
   ```toml
   [build]
     command = "npm run build"
     publish = "dist"
   ```
4. Click **Deploy site**.
5. Every push to `main` triggers a new deploy automatically. Pull requests get their own deploy preview.

Pick one, not both — running the same repo through two hosts just means two URLs to keep straight for no benefit.

## 3. Custom domain

Once deployed, both platforms let you attach a custom domain from the project dashboard (Vercel: **Settings → Domains**; Netlify: **Domain management → Add a domain**). Point your domain's DNS at the host as instructed there:

- Vercel gives you an A record + CNAME (or lets you use their nameservers).
- Netlify gives you a similar A record + CNAME, or their own nameservers.

If the domain comes from Porkbun: add the records under **DNS Records** for the domain in the Porkbun dashboard, matching whatever the host's domain settings screen shows you. Propagation is usually minutes, sometimes up to 24 hours. Both platforms auto-provision free HTTPS (Let's Encrypt) once DNS resolves — no manual certificate work.

## 4. Verifying a deploy

After connecting either host, confirm:

- The deployed URL matches what you see locally with `npm run preview` (run this after `npm run build` to sanity-check the production bundle before pushing).
- Images (project previews, aquarium photo) load — they're bundled from `src/assets/`, not fetched externally, so if they're missing it means the build didn't pick them up.
- Internal nav links (About Me / Experience / Projects / Web Design in the sidebar and taskbar) scroll to the right section.
- The Aquarium.exe icon opens the modal.

## Rollbacks

Both Vercel and Netlify keep a history of every deploy and let you instantly roll back to a previous one from their dashboard (Vercel: **Deployments** tab, click **⋯ → Promote to Production** on an older one; Netlify: **Deploys** tab, click an older deploy → **Publish deploy**). No git revert needed for a quick rollback — though fixing forward with a new commit is usually cleaner long-term.
