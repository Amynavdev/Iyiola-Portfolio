import { useEffect, useRef, useState } from 'react';

type V = { t: string; when: string; img: string; src: string };

/** Photos that crossfade, with a play button that opens a video pop-up. */
export default function LeadershipMedia({ videos, label = '3 clips · speeches and an interview' }: { videos: V[]; label?: string }) {
  const [open, setOpen] = useState(-1);
  const close = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (open < 0) return;
    close.current?.focus();
    const k = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(-1); };
    document.addEventListener('keydown', k);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', k); document.body.style.overflow = ''; };
  }, [open]);
  useEffect(() => {
    const o = () => setOpen(0);
    window.addEventListener('open-videos', o);
    return () => window.removeEventListener('open-videos', o);
  }, []);
  const v = videos[Math.max(0, open)];
  return (
    <>
      <div className="sk sk-done relative overflow-hidden rounded-[18px]" style={{ aspectRatio: '4 / 3' }}>
        {videos.map((x, i) => (
          <img key={x.img} src={`${x.img}-800.webp`} srcSet={`${x.img}-800.webp 800w, ${x.img}-1400.webp 1400w`} sizes="(max-width: 900px) 100vw, 50vw" alt={x.t} loading="lazy"
            className="loaded absolute inset-0 h-full w-full object-cover" style={{ animation: 'crossfade 12s infinite', animationDelay: `${-i * 4}s` }} />
        ))}
        <button type="button" onClick={() => setOpen(0)} aria-label="Play speeches and interview"
          className="absolute left-1/2 top-1/2 flex h-[76px] w-[76px] -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border-0 transition-transform hover:scale-105"
          style={{ background: 'rgba(255,255,255,.92)', boxShadow: '0 12px 30px rgba(0,0,0,.3)' }}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="#131d27" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg>
        </button>
        <span className="ui absolute bottom-4 left-4 rounded-full px-3.5 py-2 text-[13px] text-white" style={{ background: 'rgba(19,29,39,.75)' }}>{label}</span>
      </div>

      {open >= 0 && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6" style={{ background: 'rgba(10,10,14,.82)', backdropFilter: 'blur(8px)' }} onClick={(e) => { if (e.target === e.currentTarget) setOpen(-1); }}>
          <div role="dialog" aria-modal="true" aria-label={v.t} className="w-full max-w-[1040px] overflow-hidden rounded-[20px]" style={{ background: '#141318', color: '#f4f1ea', boxShadow: '0 40px 80px rgba(0,0,0,.5)', animation: 'rise .4s cubic-bezier(.2,.8,.2,1)' }}>
            <div className="relative bg-black" style={{ aspectRatio: '16 / 9' }}>
              {v.src ? <video key={v.src} src={v.src} poster={`${v.img}-1400.webp`} controls autoPlay className="h-full w-full" /> : (
                <>
                  <img src={`${v.img}-1400.webp`} alt={v.t} className="h-full w-full object-cover opacity-80" />
                  <span className="ui absolute bottom-3 right-4 rounded-full px-3 py-1.5 text-xs" style={{ background: 'rgba(0,0,0,.55)' }}>Video coming soon</span>
                </>
              )}
              <button ref={close} type="button" onClick={() => setOpen(-1)} aria-label="Close" className="absolute right-3.5 top-3.5 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border-0" style={{ background: 'rgba(0,0,0,.55)' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18" /></svg>
              </button>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-5 px-5 py-4">
              <div><div className="ui text-xs text-white/50">{v.when}</div><div className="display text-2xl">{v.t}</div></div>
              <div className="flex gap-2.5">
                {videos.map((x, i) => (
                  <button key={x.img} type="button" onClick={() => setOpen(i)} aria-label={x.t} className="cursor-pointer border-0 bg-transparent p-0">
                    <img src={`${x.img}-800.webp`} alt="" className="block h-[62px] w-[110px] rounded-[10px] object-cover max-[600px]:h-[48px] max-[600px]:w-[80px]" style={{ opacity: i === open ? 1 : 0.5, outline: `2px solid ${i === open ? 'var(--accent-2)' : 'transparent'}`, outlineOffset: 2 }} />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
