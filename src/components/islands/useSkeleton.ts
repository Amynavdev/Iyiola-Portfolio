import { useState } from 'react';

/** Tracks image load so a shimmer shows until the picture is ready. */
export function useLoaded() {
  const [loaded, setLoaded] = useState<Record<string, boolean>>({});
  return {
    cls: (key: string) => (loaded[key] ? 'sk sk-done' : 'sk'),
    imgCls: (key: string) => (loaded[key] ? 'loaded' : ''),
    onLoad: (key: string) => () => setLoaded((l) => ({ ...l, [key]: true })),
  };
}
