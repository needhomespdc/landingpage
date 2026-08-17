'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  readCookieConsent,
  writeCookieConsent,
  type CookieConsent,
} from '@/lib/cookie-consent';

export function CookieConsentBanner() {
  const [isReady, setIsReady] = useState(false);
  const [consent, setConsent] = useState<CookieConsent | null>(null);

  useEffect(() => {
    setConsent(readCookieConsent());
    setIsReady(true);
  }, []);

  if (!isReady || consent) {
    return null;
  }

  function choose(value: CookieConsent) {
    writeCookieConsent(value);
    setConsent(value);
  }

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[80] border-t border-white/10 bg-[#0A0C10]/95 text-white shadow-[0_-8px_32px_rgba(0,0,0,0.35)] backdrop-blur-md"
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-copy"
    >
      <div className="mx-auto flex max-w-[1200px] flex-col gap-4 px-4 py-4 md:flex-row md:items-center md:justify-between md:gap-8 md:px-6 md:py-5 lg:px-8">
        <div className="max-w-2xl">
          <p
            id="cookie-consent-title"
            className="text-sm font-semibold text-white"
          >
            We use cookies
          </p>
          <p
            id="cookie-consent-copy"
            className="mt-1 text-sm leading-relaxed text-white/70"
          >
            We use cookies to keep this site working and to understand how
            visitors use NeedHomes. You can accept all cookies or continue with
            essential cookies only. Read our{' '}
            <Link
              href="/privacy-policy"
              className="font-medium text-[#E55820] underline-offset-2 hover:underline"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>

        <div className="flex shrink-0 flex-col gap-2 sm:flex-row sm:items-center">
          <button
            type="button"
            onClick={() => choose('essential')}
            className="inline-flex h-11 items-center justify-center rounded-lg border border-white/20 px-5 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
          >
            Essential only
          </button>
          <button
            type="button"
            onClick={() => choose('accepted')}
            className="inline-flex h-11 items-center justify-center rounded-lg bg-[#E55820] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#C44A15]"
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
}
