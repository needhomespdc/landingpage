'use client';

import { useState } from 'react';
import Image from 'next/image';
import { WaitlistModal } from '@/components/shared/WaitlistModal';

export function DownloadApp() {
  const [waitlistOpen, setWaitlistOpen] = useState(false);

  return (
    <section id="download-app" className="bg-black py-16 text-white">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          <div className="mx-auto flex-1 space-y-6 text-center lg:mx-0 lg:text-left">
            <h2 className="text-2xl font-bold leading-snug md:text-3xl">
              Download our Mobile App
            </h2>
            <p className="mx-auto max-w-md text-sm leading-relaxed text-white/60 md:text-base lg:mx-0">
              Track your portfolio, fund investments, and manage your properties
              — all from your phone.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <button
                type="button"
                onClick={() => setWaitlistOpen(true)}
                className="inline-flex items-center justify-center rounded-md bg-[#E55820] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#C44A15]"
              >
                Join our waitlist
              </button>

              {/* Store badges — restore when app listings go live
              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block transition-opacity hover:opacity-90"
                aria-label="Download on the App Store"
              >
                <Image
                  src="/logo/apple.png"
                  alt="Download on the App Store"
                  width={160}
                  height={48}
                  className="h-12 w-auto"
                />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.needhomes.need_homes"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block transition-opacity hover:opacity-90"
                aria-label="Get it on Google Play"
              >
                <Image
                  src="/logo/google.png"
                  alt="Get it on Google Play"
                  width={170}
                  height={48}
                  className="h-12 w-auto"
                />
              </a>
              */}
            </div>
          </div>

          <div className="relative w-full max-w-[560px] shrink-0 lg:max-w-[520px]">
            <Image
              src="/images/cta/appimage.png"
              alt="NeedHomes mobile app portfolio overview"
              width={1040}
              height={780}
              className="h-auto w-full object-contain"
              priority={false}
            />
          </div>
        </div>
      </div>

      <WaitlistModal open={waitlistOpen} onOpenChange={setWaitlistOpen} />
    </section>
  );
}
