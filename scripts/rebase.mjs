// Prefixes root relative links in the built site with BASE, for previews served from a sub path
// such as https://user.github.io/repo/. Not needed on the real domain.
import { readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const base = (process.env.BASE || '/').replace(/\/$/, '');
if (!base) process.exit(0);
const dist = 'dist';
const roots = readdirSync(dist).filter((n) => n !== '_astro').map((n) => n.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
const name = `(?:${roots.join('|')})`;
const lead = `(["'\`(]|&quot;|&#39;|,\\s*|\\s)`;
const rules = [
  [new RegExp(`${lead}/(${name})(?=[/"'\`?#\\s&),])`, 'g'), `$1${base}/$2`],
  [/(href=")\/(#[^"]*)?"/g, `$1${base}/$2"`],
  [/(&quot;)\/(#[^&]*)?&quot;/g, `$1${base}/$2&quot;`],
];
const walk = (d) => readdirSync(d).flatMap((n) => { const p = join(d, n); return statSync(p).isDirectory() ? walk(p) : [p]; });
let changed = 0;
for (const f of walk(dist).filter((p) => /\.(html|js|css|xml)$/.test(p))) {
  const s = readFileSync(f, 'utf8');
  let t = s;
  for (const [re, to] of rules) t = t.replace(re, to);
  t = t.split(`${base}${base}/`).join(`${base}/`);
  if (t !== s) { writeFileSync(f, t); changed++; }
}
console.log(`rebase: prefixed links with ${base} in ${changed} files`);
