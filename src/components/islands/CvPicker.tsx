import { useState } from 'react';

type Cv = { label: string; t: string; d: string; pts: string[]; file: string };

export default function CvPicker({ cvs }: { cvs: Cv[] }) {
  const [k, setK] = useState(0);
  const c = cvs[k];
  return (
    <div>
      <div className="mt-7 flex flex-wrap gap-2" role="tablist">
        {cvs.map((x, i) => (
          <button key={x.label} type="button" role="tab" aria-selected={i === k} onClick={() => setK(i)} className="btn min-h-[44px] px-[18px] text-sm"
            style={{ background: i === k ? 'var(--accent)' : 'var(--ash)', color: i === k ? '#fff' : 'var(--ink)' }}>{x.label}</button>
        ))}
      </div>
      <div className="mt-7 grid gap-7 rounded-[18px] p-8 lg:grid-cols-[minmax(0,1fr)_340px] max-[900px]:p-5" style={{ background: 'var(--bg)' }} role="tabpanel">
        <div>
          <div className="display text-[28px]">{c.t}</div>
          <p className="lead mt-2.5">{c.d}</p>
          <ul className="m-0 mt-4 flex list-none flex-col gap-2.5 p-0">
            {c.pts.map((p) => <li key={p} className="flex gap-3 text-[15px] leading-normal" style={{ color: 'var(--text)' }}><span className="mt-2 h-1.5 w-1.5 flex-none rounded-full" style={{ background: 'var(--accent)' }} />{p}</li>)}
          </ul>
        </div>
        <div className="card flex flex-col justify-center gap-3 p-6">
          <div className="ui text-[13px] muted">PDF · updated [DATE]</div>
          <a className="btn btn-primary" href={c.file || '#'} aria-disabled={!c.file}>{c.file ? 'Download PDF' : 'PDF coming soon'}</a>
          <a className="btn btn-ash" href="mailto:iyolastrings@gmail.com">Ask me for it</a>
        </div>
      </div>
    </div>
  );
}
