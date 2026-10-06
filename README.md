# iyiolaoluwaferanmi.com

Personal site of Oluwaferanmi Iyiola. Astro, React islands, Tailwind 4, self hosted fonts. Static output for Cloudflare Pages.

```
npm install
npm run dev       # local server
npm run build     # astro check + static build into dist/
```

- Content lives in `src/data/site.ts`. Anything in [BRACKETS] is still waiting for real details.
- Images are pre-sized webp files in `public/images` (`name-800.webp`, `name-1600.webp`).
- Leadership videos: set `src` on each entry in `leadership.videos` once the files are uploaded.
- CV files: set `file` on each entry in `cvs`.


## Deploy (Cloudflare)

Cloudflare builds the `main` branch of `Iyiola-Oluwaferanmi/Portolio` (build `npm run build`, deploy `npx wrangler deploy`). `wrangler.jsonc` serves `dist/` as static assets under the Worker name `portolio`. Node 22 comes from `.node-version`; caching and security headers live in `public/_headers`.
