import { useState } from 'react';
import { WORLD_DOTS } from '../../data/worldDots';

type Place = { key: string; label: string; name: string; when: string; line: string; pt: number[]; items: { t: string; k: string; href: string }[] };

/** Dotted world with pins and arcs drawn from home. `full` adds the side panel with links. */
export default function WorldMap({ places, full = false }: { places: Place[]; full?: boolean }) {
  const [k, setK] = useState(0);
  const home = places[0].pt;
  const arc = (b: number[]) => {
    const mx = (home[0] + b[0]) / 2, my = Math.min(home[1], b[1]) - Math.abs(home[0] - b[0]) * 0.28;
    return `M${home[0]} ${home[1]}Q${mx.toFixed(0)} ${my.toFixed(0)} ${b[0]} ${b[1]}`;
  };
  const cur = places[k];

  const map = (
    <div className="relative min-w-0" style={{ aspectRatio: '1200 / 560' }}>
      <svg viewBox="0 0 1200 560" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <path d={WORLD_DOTS} fill="rgba(244,241,234,.16)" />
        {places.slice(1).map((p, i) => (
          <path key={p.key} d={arc(p.pt)} fill="none" stroke={k === i + 1 ? '#4c8de6' : 'rgba(76,141,230,.45)'} strokeWidth={k === i + 1 ? 2.5 : 1.5} strokeLinecap="round"
            style={{ strokeDasharray: 900, animation: 'draw 1.8s cubic-bezier(.6,0,.2,1) both', animationDelay: `${0.4 + i * 0.25}s` }} />
        ))}
      </svg>
      {places.map((p, i) => (
        <button key={p.key} type="button" onClick={() => setK(i)} aria-label={p.name} aria-pressed={i === k}
          className="absolute flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center border-0 bg-transparent p-0"
          style={{ left: `${(p.pt[0] / 12).toFixed(2)}%`, top: `${(p.pt[1] / 5.6).toFixed(2)}%` }}>
          <span className="absolute h-[22px] w-[22px] rounded-full" style={{ border: '2px solid #4c8de6', animation: 'ring 2.2s ease-out infinite', animationDelay: `${-i * 0.4}s` }} />
          <span className="rounded-full transition-all" style={{ width: i === k ? 15 : 10, height: i === k ? 15 : 10, background: '#4c8de6', boxShadow: '0 0 0 4px #141318' }} />
          <span className="ui absolute left-1/2 top-[-6px] -translate-x-1/2 -translate-y-full whitespace-nowrap rounded-full px-2.5 py-1 text-xs max-[700px]:hidden"
            style={{ color: i === k ? '#141318' : '#f4f1ea', background: i === k ? '#f4f1ea' : 'rgba(20,19,24,.7)' }}>{p.label}</span>
        </button>
      ))}
    </div>
  );

  const pills = (
    <div className="no-scrollbar mt-4 flex gap-2 overflow-x-auto">
      {places.map((p, i) => (
        <button key={p.key} type="button" onClick={() => setK(i)} className="ui flex min-h-[44px] flex-none cursor-pointer items-center gap-2 rounded-full border-0 px-4 text-sm"
          style={{ background: i === k ? '#f4f1ea' : 'rgba(244,241,234,.08)', color: i === k ? '#141318' : '#f4f1ea' }}>
          <span className="h-2 w-2 rounded-full" style={{ background: '#4c8de6' }} />{p.label}
        </button>
      ))}
    </div>
  );

  const panel = (
    <div className="rounded-[18px] p-6" style={{ background: '#1d1c23' }}>
      <div className="ui text-xs" style={{ color: 'rgba(244,241,234,.5)' }}>{cur.when}</div>
      <div className="display mt-0.5 text-[28px] leading-tight">{cur.name}</div>
      <div className="mt-1 text-sm" style={{ color: 'rgba(244,241,234,.65)' }}>{cur.line}</div>
      {full && (
        <div className="mt-5">
          {cur.items.map((it) => (
            <a key={it.t} href={it.href} className="flex justify-between gap-3 py-3.5 no-underline" style={{ color: '#f4f1ea', borderTop: '1px solid rgba(244,241,234,.08)' }}>
              <span className="ui text-[15px]">{it.t}</span><span className="text-right text-[13px]" style={{ color: 'rgba(244,241,234,.45)' }}>{it.k}</span>
            </a>
          ))}
        </div>
      )}
    </div>
  );

  if (full) return (
    <div>
      <div className="grid items-start gap-7 lg:grid-cols-[minmax(0,1fr)_380px]">{map}{panel}</div>
      {pills}
    </div>
  );
  return (
    <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,.7fr)_minmax(0,1.3fr)]">
      <div className="order-2 lg:order-1">{panel}{pills}<a className="btn btn-paper mt-5" href="/map/">Open the full map</a></div>
      <div className="order-1 lg:order-2">{map}</div>
    </div>
  );
}
