'use client';
import { useEffect } from 'react';

export function LdrsProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    import('ldrs').then(({ ring, helix, dotPulse, ripples }) => {
      ring.register();
      helix.register();
      dotPulse.register();
      ripples.register();
    });
  }, []);
  return <>{children}</>;
}
