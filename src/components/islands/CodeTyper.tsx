import { useEffect, useRef, useState } from 'react';

const CODE = `// Meta signup finished. Save the tenant's
// WhatsApp credentials in one transaction.

$db->beginTransaction();
try {
  $integration->store($tenant, $waba);
  $phones->register($tenant, $waba->numbers);
  $db->commit();
} catch (Throwable $e) {
  $db->rollBack();
  throw new OnboardingFailed($e);
}`;

/** An editor that types itself, only while it is on screen. */
export default function CodeTyper() {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let t: number | undefined;
    const io = new IntersectionObserver(([e]) => {
      window.clearInterval(t);
      if (e.isIntersecting) t = window.setInterval(() => setN((v) => (v >= CODE.length + 50 ? 0 : v + 2)), 45);
    });
    if (ref.current) io.observe(ref.current);
    return () => { io.disconnect(); window.clearInterval(t); };
  }, []);
  return (
    <div ref={ref} className="overflow-hidden rounded-[18px]" style={{ background: '#1b1a20', boxShadow: '0 24px 50px rgba(19,29,39,.18)' }} aria-label="Code sample from the WhatsApp onboarding fix">
      <div className="flex items-center gap-2 px-4 py-3" style={{ background: '#24232a' }}>
        {[0, 1, 2].map((k) => <span key={k} className="h-2.5 w-2.5 rounded-full" style={{ background: '#3a3940' }} />)}
        <span className="ml-2 font-mono text-xs text-white/45">onboarding.php</span>
      </div>
      <pre className="m-0 min-h-[300px] whitespace-pre-wrap px-6 py-5 font-mono text-[13.5px] leading-[1.75] max-[900px]:min-h-[240px] max-[900px]:text-[11.5px]" style={{ color: '#cfd6e0' }}>
        {CODE.slice(0, n)}
        <span className="inline-block h-[15px] w-[7px] align-[-2px]" style={{ background: 'var(--accent-2)', animation: 'caret 1s steps(1) infinite' }} />
      </pre>
    </div>
  );
}
