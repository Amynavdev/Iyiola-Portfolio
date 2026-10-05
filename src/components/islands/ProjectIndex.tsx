import { useState, type MouseEvent } from 'react';

type P = { t: string; where: string; stack: string; href: string; d: string; img?: string };

/** Two column project list. On desktop, hovering a row shows a preview card that follows the cursor. */
export default function ProjectIndex({ projects }: { projects: P[] }) {
  const [h, setH] = useState(-1);
  const [pos, setPos] = useState({ x: 0, y: 0, v: 0 });
  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - r.left;
    setPos((p) => ({ x, y: e.clientY - r.top, v: x - p.x }));
  };
  const cur = h >= 0 ? projects[h] : null;
  return (
    <div className="relative mt-7" onMouseMove={onMove} onMouseLeave={() => setH(-1)}>
      <div className="grid gap-x-12 lg:grid-cols-2" data-stagger>
        {projects.map((p, i) => (
          <a key={p.t} href={p.href} onMouseEnter={() => setH(i)} onFocus={() => setH(i)}
            className="flex min-h-[44px] items-center gap-4 py-4 no-underline transition-[opacity,transform] duration-300"
            style={{ color: '#f4f1ea', borderBottom: '1px solid rgba(244,241,234,.1)', opacity: h >= 0 && h !== i ? 0.3 : 1, transform: h === i ? 'translateX(14px)' : 'none' }}>
            <span className="ui w-6 text-xs" style={{ color: 'rgba(244,241,234,.4)' }}>{String(i + 1).padStart(2, '0')}</span>
            <span className="min-w-0 flex-1">
              <span className="display block text-[26px] leading-tight max-[900px]:text-[21px]">{p.t}</span>
              <span className="mt-0.5 block text-[13px]" style={{ color: 'rgba(244,241,234,.5)' }}>{p.stack}</span>
            </span>
            <span className="ui whitespace-nowrap rounded-full px-3 py-1.5 text-xs" style={{ background: 'rgba(244,241,234,.08)' }}>{p.where}</span>
          </a>
        ))}
      </div>
      {cur && (
        <div className="pointer-events-none absolute z-10 w-[300px] max-[1000px]:hidden"
          style={{ left: pos.x, top: pos.y, transform: `translate(-50%, -112%) rotate(${Math.max(-6, Math.min(6, pos.v * 0.4)).toFixed(1)}deg)`, transition: 'left .12s linear, top .12s linear' }}>
          <div className="overflow-hidden rounded-2xl" style={{ background: '#f4f1ea', color: '#131d27', boxShadow: '0 30px 60px rgba(0,0,0,.45)' }}>
            {cur.img ? <img src={cur.img} alt="" className="block h-[170px] w-full object-cover" /> : (
              <div className="flex h-[170px] flex-col" style={{ background: '#e6e3dd' }}>
                <div className="flex gap-1.5 px-3 py-2.5" style={{ background: '#dcd8d1' }}>{[0, 1, 2].map((k) => <span key={k} className="h-2 w-2 rounded-full" style={{ background: '#bdb8af' }} />)}</div>
                <div className="display flex flex-1 items-center justify-center text-[28px]" style={{ color: '#8a857c' }}>{cur.t}</div>
              </div>
            )}
            <div className="px-[18px] py-4">
              <div className="display text-[22px]">{cur.t}</div>
              <div className="mt-1 text-[13px] leading-snug" style={{ color: '#3c4754' }}>{cur.d}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
