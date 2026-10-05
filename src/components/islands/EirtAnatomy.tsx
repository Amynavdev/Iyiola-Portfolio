import { useState } from 'react';
import { useLoaded } from './useSkeleton';

type Part = { t: string; x: number; y: number; d: string };

/** The robot from above. Tap a point to learn what that part does. */
export default function EirtAnatomy({ parts }: { parts: Part[] }) {
  const [k, setK] = useState(0);
  const sk = useLoaded();
  return (
    <div>
      <div className={`${sk.cls('top')} relative overflow-hidden rounded-[18px]`} style={{ aspectRatio: '4 / 3', boxShadow: 'var(--shadow)' }}>
        <img src="/images/eirt-top-1600.webp" srcSet="/images/eirt-top-800.webp 800w, /images/eirt-top-1600.webp 1600w" sizes="(max-width: 900px) 100vw, 760px"
          alt="EIRT seen from above: Raspberry Pi, servo driver, arm, bins and power regulator" loading="lazy" onLoad={sk.onLoad('top')} className={`${sk.imgCls('top')} block h-full w-full object-cover`} />
        {parts.map((p, i) => (
          <button key={p.t} type="button" onClick={() => setK(i)} aria-label={p.t} aria-pressed={i === k}
            className="absolute flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center border-0 bg-transparent p-0"
            style={{ left: `${p.x}%`, top: `${p.y}%` }}>
            <span className="absolute h-[26px] w-[26px] rounded-full" style={{ border: '2px solid #fff', animation: 'ring 2.2s ease-out infinite', animationDelay: `${-i * 0.45}s` }} />
            <span className="ui flex items-center justify-center rounded-full text-[11px] transition-all"
              style={{ width: i === k ? 30 : 22, height: i === k ? 30 : 22, background: i === k ? 'var(--accent)' : '#fff', color: i === k ? '#fff' : '#131d27', boxShadow: '0 0 0 3px rgba(19,29,39,.55)' }}>{i + 1}</span>
          </button>
        ))}
        <div className="absolute bottom-4 left-4 right-4 rounded-[14px] px-[18px] py-4 text-white" style={{ background: 'rgba(19,29,39,.82)', backdropFilter: 'blur(10px)' }} aria-live="polite">
          <div className="ui text-[15px]">{String(k + 1).padStart(2, '0')} · {parts[k].t}</div>
          <div className="mt-1 text-sm leading-relaxed text-white/80">{parts[k].d}</div>
        </div>
      </div>
      <div className="mt-3.5 flex flex-wrap gap-2">
        {parts.map((p, i) => (
          <button key={p.t} type="button" onClick={() => setK(i)} className="ui min-h-[40px] cursor-pointer rounded-full border-0 px-4 text-[13px]"
            style={{ background: i === k ? 'var(--ink)' : 'var(--ash)', color: i === k ? 'var(--bg)' : 'var(--ink)' }}>{p.t}</button>
        ))}
      </div>
    </div>
  );
}
