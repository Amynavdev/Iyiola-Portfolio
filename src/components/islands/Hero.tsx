import { useState, type MouseEvent } from 'react';
import './hero.css';

type Chip = { t: string; x: number; y: number; depth: number; dot: string };
const MOBILE = [
  { t: 'IEEE ICCCNT 2023', s: { left: 12, top: 84 }, dot: '#4c8de6' },
  { t: 'First Division, DTU', s: { right: 12, top: 118 }, dot: '#3ccf8e' },
  { t: '700+ scholars led', s: { left: 12, top: 196 }, dot: '#f4f1ea' },
  { t: 'Raspberry Pi robotics', s: { right: 12, top: 228 }, dot: '#4c8de6' },
];
const REST = { x: 0.74, y: 0.32 };

export default function Hero({ chips }: { chips: Chip[] }) {
  const [m, setM] = useState(REST);
  const onMove = (e: MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    setM({ x: (e.clientX - r.left) / r.width, y: (e.clientY - r.top) / r.height });
  };
  const dim = `radial-gradient(circle 620px at ${(m.x * 100).toFixed(1)}% ${(m.y * 100).toFixed(1)}%, rgba(28,27,33,.06) 0%, rgba(28,27,33,.24) 55%, rgba(28,27,33,.55) 100%)`;

  return (
    <section className="hero studio" onMouseMove={onMove} onMouseLeave={() => setM(REST)} aria-label="Introduction">
      <div className="hero-photo" style={{ transform: `translate(${((0.5 - m.x) * 22).toFixed(1)}px, ${((0.5 - m.y) * 14).toFixed(1)}px)` }}>
        <div className="frame">
          <img
            src="/images/portrait-1600.webp"
            srcSet="/images/portrait-800.webp 800w, /images/portrait-1600.webp 1600w"
            sizes="(max-width: 900px) 100vw, 55vw"
            alt="Oluwaferanmi Iyiola in a blue kaftan at a studio desk"
            fetchPriority="high"
          />
        </div>
      </div>
      <div className="hero-dim" style={{ background: dim }} />
      <div className="hero-photo hero-chipbox" style={{ transform: `translate(${((0.5 - m.x) * 22).toFixed(1)}px, ${((0.5 - m.y) * 14).toFixed(1)}px)` }}>
        {chips.map((c, i) => {
          const ax = c.x > 60 ? '-100%' : c.x < 40 ? '0%' : '-50%';
          return (
            <div key={c.t} className="hero-chip desk" style={{ left: `${c.x}%`, top: `${c.y}%`, transform: `translate(${ax}, -50%) translate(${((m.x - 0.5) * c.depth).toFixed(1)}px, ${((m.y - 0.5) * c.depth * 0.7).toFixed(1)}px)` }}>
              <div className="f3"><span style={{ animationDelay: `${(-i * 1.1).toFixed(1)}s`, animationDuration: `${6 + (i % 3)}s` }}><i style={{ background: c.dot }} />{c.t}</span></div>
            </div>
          );
        })}
        <div className="chips-m">
          {MOBILE.map((c, i) => (
            <div key={c.t} className="hero-chip" style={{ ...Object.fromEntries(Object.entries(c.s).map(([k, v]) => [k, `${v}px`])) }}>
              <div className="f3"><span style={{ animationDelay: `${-i * 1.3}s` }}><i style={{ background: c.dot }} />{c.t}</span></div>
            </div>
          ))}
        </div>
      </div>

      <div className="wrap hero-copy">
        <div style={{ maxWidth: 660 }}>
          <div className="hero-name">Oluwaferanmi Iyiola</div>
          <h1>
            <span className="line"><span style={{ animationDelay: '1.35s' }}>From circuits</span></span>
            <span className="line"><span style={{ animationDelay: '1.5s' }}>to the cloud.</span></span>
          </h1>
          <p className="f1" style={{ margin: '22px 0 0', fontSize: 18, lineHeight: 1.65, color: 'rgba(255,255,255,.8)', maxWidth: 540 }}>
            Electronics engineer and full stack developer. Published at IEEE, shipping production software for clients on four continents.
          </p>
          <div className="f2" style={{ display: 'flex', gap: 12, marginTop: 30, flexWrap: 'wrap' }}>
            <a className="btn btn-primary" href="#hardware">See my work</a>
            <a className="btn btn-glass" href="/about/#cv">Download CV</a>
          </div>
          <div className="f3 ui" style={{ marginTop: 26, fontSize: 13, color: 'rgba(255,255,255,.6)', display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--green)' }} />
            DTU engineering graduate · Port Louis · open to remote roles worldwide
          </div>
        </div>
      </div>
      <a href="#hardware" className="hero-cue f3" aria-label="Scroll down"><span /></a>
      <div className="hero-lamp" />
    </section>
  );
}
