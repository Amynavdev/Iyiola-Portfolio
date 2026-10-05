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

## Temporary preview

`.github/workflows/preview-pages.yml` publishes the branch to https://amynavdev.github.io/Iyiola-Portfolio/ using `scripts/rebase.mjs` to fit the sub path.
Remove both, and turn off GitHub Pages in the repo settings, once the site is live on Cloudflare Pages.
