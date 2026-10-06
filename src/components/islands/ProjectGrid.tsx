import { useState } from 'react';

type P = { kind: string; meta: string; t: string; d: string; stack: string };
const FILTERS: [string, string | null][] = [['All', null], ['Products', 'Product'], ['Platforms', 'Platform'], ['Client work', 'Client']];

/** Project cards with filter chips. */
export default function ProjectGrid({ projects }: { projects: P[] }) {
  const [f, setF] = useState(0);
  const kind = FILTERS[f][1];
  const shown = kind ? projects.filter((p) => p.kind === kind) : projects;
  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-6">
        <h2 className="h2">More projects</h2>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects">
          {FILTERS.map(([label], i) => (
            <button key={label} type="button" onClick={() => setF(i)} aria-pressed={i === f} className="btn min-h-[44px] px-[18px] text-sm"
              style={{ background: i === f ? 'var(--accent)' : 'var(--ash)', color: i === f ? '#fff' : 'var(--ink)' }}>{label}</button>
          ))}
        </div>
      </div>
      <div className="mt-9 grid gap-[22px] md:grid-cols-2 lg:grid-cols-3">
        {shown.map((p, i) => (
          <article key={p.t} className="card flex min-h-[250px] flex-col gap-3 p-7" style={{ animation: 'rise .5s cubic-bezier(.2,.8,.2,1) both', animationDelay: `${i * 0.04}s` }}>
            <div className="flex items-center justify-between gap-3">
              <span className="ui text-[13px] muted">{p.meta}</span>
              <span className="ui rounded-full px-[11px] py-1.5 text-xs" style={{ background: 'var(--accent-soft)', color: 'var(--accent)' }}>{p.kind}</span>
            </div>
            <h3 className="display m-0 text-[26px] leading-tight">{p.t}</h3>
            <p className="m-0 flex-1 text-[15px] leading-relaxed" style={{ color: 'var(--text)' }}>{p.d}</p>
            <div className="ui text-[13px]">{p.stack}</div>
          </article>
        ))}
      </div>
    </div>
  );
}
