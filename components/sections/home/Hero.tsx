'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  RiArrowRightLine,
  RiArrowUpSFill,
  RiBarChartBoxFill,
  RiCheckboxCircleFill,
  RiEarthLine,
  RiFileTextFill,
  RiGroupLine,
  RiHome4Line,
  RiLineChartLine,
  RiShieldCheckFill,
} from 'react-icons/ri';
import { WaitlistModal } from '@/components/shared/WaitlistModal';

const highlights = [
  'Build Wealth the smart way',
  'Co-develop and co-own trusted Real estate investment Portfolio',
  'Track Rental income and project milestone in real time',
  'Access digital contracts, investors dashboard and verified properties',
];

const stats = [
  { icon: RiGroupLine, value: '1,250+', label: 'Active Investors' },
  { icon: RiHome4Line, value: '35+', label: 'Properties Listed' },
  { icon: RiEarthLine, value: '₦2.4B+', label: 'Investments Funded' },
  { icon: RiLineChartLine, value: '18.7%', label: 'Avg. Project ROI' },
] as const;

const featureCards = [
  {
    icon: RiShieldCheckFill,
    title: 'Verified & Secure',
    description: 'Every property and transaction is verified for your peace of mind.',
  },
  {
    icon: RiBarChartBoxFill,
    title: 'Real-time Tracking',
    description: 'Monitor rental income and project milestones in real time.',
  },
  {
    icon: RiFileTextFill,
    title: 'Digital & Transparent',
    description: 'Access digital contracts, verified properties and investor dashboard.',
  },
] as const;

export function Hero() {
  const [waitlistOpen, setWaitlistOpen] = useState(false);

  return (
    <section className="relative min-h-[480px] overflow-hidden bg-[#0A0C10] text-white">
      <div className="relative mx-auto max-w-[1200px] px-4 pt-6 pb-16 md:px-6 md:pt-8 md:pb-20 lg:px-8">
        <div className="pointer-events-none absolute inset-x-0 top-2 bottom-12 flex items-center justify-center sm:top-4 sm:bottom-16 lg:top-10 lg:bottom-24">
          <div className="relative w-[min(140vw,580px)] sm:w-[min(110vw,640px)] md:w-[680px] lg:w-[780px] lg:-translate-y-12 lg:translate-x-20">
            <Image
              src="/images/hero/herovilla.png"
              alt=""
              width={900}
              height={900}
              priority
              className="h-auto w-full object-contain"
            />
            <div
              className="absolute inset-0 bg-[#0A0C10]/35 lg:bg-[#0A0C10]/45"
              aria-hidden
            />
          </div>
        </div>

        <div className="relative grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-center lg:gap-10">
        <div className="relative z-10 max-w-xl space-y-5 lg:space-y-6">
          <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-[#E55820] px-3 py-1.5">
            <RiShieldCheckFill className="h-4 w-4 shrink-0 text-[#E55820]" aria-hidden />
            <span className="text-[11px] font-medium tracking-wide text-white sm:text-xs">
              Smart Investments. Trusted Real Estate.
            </span>
          </div>

          <h1 className="text-3xl font-bold leading-[1.12] sm:text-4xl md:text-5xl">
            Your Smooth
            <br />
            Journey to
            <br />
            <span className="text-[#E55820]">Property</span>
            <br />
            Ownership<span className="text-[#E55820]">.</span>
          </h1>

          <p className="max-w-md text-base leading-relaxed text-white/85">
            Co-develop, co-own, and grow wealth with trusted real estate
            investments — all in one secure platform.
          </p>

          <ul className="list-none space-y-3 p-0">
            {highlights.map((text) => (
              <li key={text} className="flex items-start gap-3">
                <RiCheckboxCircleFill className="mt-0.5 h-5 w-5 shrink-0 text-[#E55820]" />
                <span className="text-sm leading-snug text-white">{text}</span>
              </li>
            ))}
          </ul>
          <div className="flex w-full flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap sm:items-center">
            <button
              type="button"
              onClick={() => setWaitlistOpen(true)}
              className="inline-flex w-full items-center justify-center gap-3 rounded-lg bg-[#E55820] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#C44A15] sm:w-auto"
            >
              Join our waitlist
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white">
                <RiArrowRightLine className="h-3.5 w-3.5 text-[#1A1A1A]" aria-hidden />
              </span>
            </button>
            <Link
              href="/marketplace"
              className="inline-flex w-full items-center justify-center rounded-lg border border-white/60 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:border-white hover:bg-white hover:text-[#2A2C2E] sm:w-auto"
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

        <aside className="relative z-10 hidden w-full max-w-sm space-y-3 lg:block lg:w-[300px]">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-md">
            <p className="text-xs text-white/55">Total Portfolio Value</p>
            <p className="mt-1 text-3xl font-bold tracking-tight text-white">₦125.4M</p>
            <span className="mt-2 inline-flex items-center rounded-full bg-emerald-500/15 px-2.5 py-0.5 text-xs font-medium text-emerald-400">
              <RiArrowUpSFill className="h-4 w-4" aria-hidden />
              18.7% this month
            </span>
            <svg
              viewBox="0 0 240 56"
              className="mt-3 h-12 w-full"
              aria-hidden
            >
              <defs>
                <linearGradient id="hero-portfolio-spark" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#E55820" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#E55820" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0 48 L0 36 C20 34 36 30 52 28 C76 24 92 18 112 16 C136 13 156 10 180 8 C204 6 220 4 240 2 L240 48 Z"
                fill="url(#hero-portfolio-spark)"
              />
              <path
                d="M0 36 C20 34 36 30 52 28 C76 24 92 18 112 16 C136 13 156 10 180 8 C204 6 220 4 240 2"
                fill="none"
                stroke="#E55820"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {featureCards.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.title}
                className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 shadow-[0_8px_32px_rgba(0,0,0,0.28)] backdrop-blur-md"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#E55820]/45 bg-[#E55820]/10 text-[#E55820]">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-white">{card.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-white/55">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </aside>
        </div>

        <ul className="relative mt-10 grid list-none grid-cols-2 overflow-hidden rounded-xl border border-white/10 bg-black/50 p-0 lg:mt-12 lg:flex lg:flex-row lg:items-stretch">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <li
                key={stat.label}
                className={`flex items-center gap-2.5 px-3 py-3.5 sm:gap-3 sm:px-5 sm:py-4 lg:flex-1 ${
                  index % 2 === 0 ? 'border-r border-white/15' : ''
                } ${index < 2 ? 'border-b border-white/15' : ''} ${
                  index < stats.length - 1
                    ? 'lg:border-r lg:border-b-0'
                    : 'lg:border-r-0 lg:border-b-0'
                }`}
              >
                <Icon className="h-6 w-6 shrink-0 text-[#E55820] sm:h-8 sm:w-8" aria-hidden />
                <div>
                  <p className="text-lg font-bold leading-none text-[#E55820] sm:text-xl md:text-2xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[11px] text-white sm:mt-1.5 sm:text-sm">
                    {stat.label}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <WaitlistModal open={waitlistOpen} onOpenChange={setWaitlistOpen} />
    </section>
  );
}
