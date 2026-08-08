'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { RiCheckboxCircleFill } from 'react-icons/ri';
import { WaitlistModal } from '@/components/shared/WaitlistModal';

const highlights = [
  'Build Wealth the smart way',
  'Co-develop and co-own trusted Real estate investment Portfolio',
  'Track Rental income and project milestone in real time',
  'Access digital contracts, investors dashboard and verified properties.',
];

export function Hero() {
  const [waitlistOpen, setWaitlistOpen] = useState(false);

  return (
    <section className="relative min-h-[480px] overflow-hidden bg-[#1A1A1A] text-white">
      <div className="absolute inset-0">
        <Image
          src="/images/hero/hero-bg.jpeg"
          alt="NeedHomes dashboard"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-linear-to-r from-[#1A1A1A] via-[#1A1A1A]/80 to-[#1A1A1A]/30" />
      </div>

      <div className="relative mx-auto max-w-[1200px] px-4 py-20 md:px-6 md:py-28 lg:px-8">
        <div className="max-w-xl space-y-6">
          <h1 className="text-4xl font-bold leading-[1.15] md:text-5xl">
            Your Smooth Journey
            <br />
            to Property
            <br />
            Ownership.
          </h1>
          <ul className="list-none space-y-3 p-0">
            {highlights.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <RiCheckboxCircleFill className="mt-0.5 h-5 w-5 shrink-0 text-[#E55820]" />
                <span className="text-sm leading-snug text-gray-300">{text}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-3 pt-2">
            <button
              type="button"
              onClick={() => setWaitlistOpen(true)}
              className="rounded-lg bg-[#E55820] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#C44A15]"
            >
              Join our waitlist
            </button>
            <Link
              href="/marketplace"
              className="rounded-lg border border-white/60 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:border-white hover:bg-white hover:text-[#2A2C2E]"
            >
              Explore Marketplace
            </Link>

            {/* Store badges — restore when app listings go live
            <a
              href="https://apps.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 rounded-lg bg-[#E55820] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#C44A15]"
            >
              <RiAppleFill className="h-5 w-5 shrink-0" />
              Get on iPhone
            </a>
            <a
              href="https://play.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 rounded-lg border border-white/30 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/20"
            >
              <RiGooglePlayFill className="h-5 w-5 shrink-0 text-[#34D399]" />
              Get on Android
            </a>
            */}
          </div>
        </div>
      </div>

      <WaitlistModal open={waitlistOpen} onOpenChange={setWaitlistOpen} />
    </section>
  );
}
