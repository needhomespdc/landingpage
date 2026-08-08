'use client';

import Image from 'next/image';

const PARTNERS = [
  { name: 'Paystack', src: '/logo/Paystack.png' },
  { name: 'QoreID', src: '/logo/QureID.png' },
  { name: 'Property25', src: '/logo/property25.png' },
  { name: 'Custruct', src: '/logo/custruct.png' },
] as const;

/** Repeat so the strip stays filled on wide screens */
const LOGO_STRIP = [...PARTNERS, ...PARTNERS, ...PARTNERS];

function LogoTrack({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <ul
      className="flex shrink-0 items-center gap-8 md:gap-10 px-4 md:px-5"
      aria-hidden={ariaHidden || undefined}
    >
      {LOGO_STRIP.map((partner, index) => (
        <li
          key={`${ariaHidden ? 'b' : 'a'}-${partner.name}-${index}`}
          className="flex h-10 w-32 shrink-0 items-center justify-center md:h-12 md:w-36"
        >
          <Image
            src={partner.src}
            alt={ariaHidden ? '' : partner.name}
            width={144}
            height={48}
            className="max-h-10 w-auto object-contain opacity-60 grayscale transition-[filter,opacity] duration-300 hover:opacity-100 hover:grayscale-0 md:max-h-12"
          />
        </li>
      ))}
    </ul>
  );
}

export function PartnersCarousel() {
  return (
    <section
      className="overflow-hidden bg-[#F3F3F3] py-5 md:py-6"
      aria-label="Trusted partners"
    >
      <div className="mx-auto mb-3 max-w-[1200px] px-4 md:mb-4 md:px-6 lg:px-8">
        <p className="text-sm font-medium text-[#888888]">Trusted By</p>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#F3F3F3] to-transparent md:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#F3F3F3] to-transparent md:w-28" />

        <div className="flex w-max animate-partners-marquee hover:[animation-play-state:paused]">
          <LogoTrack />
          <LogoTrack ariaHidden />
        </div>
      </div>
    </section>
  );
}
