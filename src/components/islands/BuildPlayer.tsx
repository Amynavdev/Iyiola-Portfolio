import { useState } from 'react';
import { useLoaded } from './useSkeleton';

type Build = { slug: string; t: string; when: string; img: string; d: string; team: string; tags: string[]; small?: boolean };
const src = (b: Build, w: number) => (b.small ? `${b.img}.webp` : `${b.img}-${w}.webp`);

/** Big media with a strip of builds under it. Clicking a thumbnail swaps the main view. */
export default function BuildPlayer({ builds, detail = false }: { builds: Build[]; detail?: boolean }) {
  const [i, setI] = useState(0);
  const b = builds[i];
  const sk = useLoaded();
  return (
    <div>
      <div className={detail ? 'grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px]' : ''}>
        <a href={b.slug === 'eirt' ? '/electronics/eirt/' : '/electronics/'} className={`${sk.cls(b.img)} relative block overflow-hidden rounded-[18px] bg-black`} style={{ aspectRatio: detail ? '16 / 9' : '16 / 10' }} aria-label={`Open ${b.t}`}>
          <img key={b.img} src={src(b, 1600)} srcSet={b.small ? undefined : `${src(b, 800)} 800w, ${src(b, 1600)} 1600w`} sizes="(max-width: 900px) 100vw, 60vw" alt={b.t} loading="lazy" onLoad={sk.onLoad(b.img)}
            className={`${sk.imgCls(b.img)} h-full w-full object-cover`} style={{ animation: 'kb 12s ease-in-out infinite alternate' }} />
          <span className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,.72) 0%, rgba(0,0,0,0) 55%)' }} />
          <span className="absolute bottom-5 left-6 right-6 text-white">
            <span className="display block text-[28px] max-[900px]:text-[22px]">{b.t}</span>
            <span className="block text-sm text-white/80">{b.d}</span>
          </span>
        </a>
        {detail && (
          <div className="card flex flex-col gap-3 p-7" style={{ background: 'var(--studio-2)', color: '#f4f1ea', boxShadow: 'none' }}>
            <span className="ui text-[13px] text-white/50">{b.when}</span>
            <span className="display text-[26px]">{b.t}</span>
            <p className="m-0 text-[15px] leading-relaxed text-white/75">{b.d}</p>
            <div className="flex flex-wrap gap-2">{b.tags.map((t) => <span key={t} className="chip" style={{ background: 'rgba(255,255,255,.08)', color: '#fff' }}>{t}</span>)}</div>
            <span className="ui mt-auto text-[13px] text-white/50">{b.team}</span>
            {b.slug === 'eirt' && <a className="btn btn-primary" href="/electronics/eirt/">Open project</a>}
          </div>
        )}
      </div>
      <div className="no-scrollbar mt-3 flex gap-3 overflow-x-auto">
        {builds.map((x, k) => (
          <button key={x.slug} type="button" onClick={() => setI(k)} aria-label={x.t} aria-pressed={k === i}
            className="flex min-w-[96px] flex-1 cursor-pointer flex-col gap-2 border-0 bg-transparent p-0 text-left">
            <img src={src(x, 800)} alt="" loading="lazy" className="block w-full rounded-[10px] object-cover transition-opacity"
              style={{ aspectRatio: '16 / 10', opacity: k === i ? 1 : 0.5, outline: `2px solid ${k === i ? 'var(--accent)' : 'transparent'}`, outlineOffset: 2 }} />
            {detail && <span className="ui text-[13px]" style={{ color: k === i ? '#fff' : 'rgba(255,255,255,.5)' }}>{x.t}</span>}
          </button>
        ))}
      </div>
    </div>
  );
}
