'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { RiArrowRightLine } from 'react-icons/ri';
import { APP_URL } from '@/lib/constants';

const TYPE_MS = 90;
const DELETE_MS = 55;
const HOLD_MS = 1600;

function useTypingRotate(words: readonly string[]) {
  const [wordIndex, setWordIndex] = useState(0);
  const [display, setDisplay] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const reduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduced) {
      setDisplay(words[0] ?? '');
      return;
    }

    const full = words[wordIndex] ?? '';

    if (!deleting && display === full) {
      const hold = window.setTimeout(() => setDeleting(true), HOLD_MS);
      return () => window.clearTimeout(hold);
    }

    if (deleting && display === '') {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
      return;
    }

    const delay = deleting ? DELETE_MS : TYPE_MS;
    const tick = window.setTimeout(() => {
      setDisplay((prev) =>
        deleting ? full.slice(0, prev.length - 1) : full.slice(0, prev.length + 1),
      );
    }, delay);

    return () => window.clearTimeout(tick);
  }, [display, deleting, wordIndex, words]);

  return display;
}

function DotCluster({ className }: { className?: string }) {
  return (
    <div aria-hidden className={`grid grid-cols-6 gap-2.5 ${className ?? ''}`}>
      {Array.from({ length: 36 }).map((_, i) => (
        <span
          key={i}
          className="h-1.5 w-1.5 rounded-full bg-white"
          style={{
            opacity: 0.28 + ((i * 17) % 45) / 100,
          }}
        />
      ))}
    </div>
  );
}

export interface InvestmentDarkHeroProps {
  badge: string;
  titleLine1: string;
  titleBeforeRotate: string;
  rotatingWords: readonly string[];
  titleAfterRotate?: string;
  subtitle: string;
}

export function InvestmentDarkHero({
  badge,
  titleLine1,
  titleBeforeRotate,
  rotatingWords,
  titleAfterRotate,
  subtitle,
}: InvestmentDarkHeroProps) {
  const typedWord = useTypingRotate(rotatingWords);

  return (
    <section className="relative overflow-hidden bg-black">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.22]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.45) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.45) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
          maskImage:
            'radial-gradient(ellipse 75% 65% at 50% 40%, black 20%, transparent 80%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 75% 65% at 50% 40%, black 20%, transparent 80%)',
        }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(229,88,32,0.85) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(229,88,32,0.85) 1px, transparent 1px)
          `,
          backgroundSize: '144px 144px',
          maskImage:
            'radial-gradient(ellipse 60% 55% at 50% 35%, black 15%, transparent 75%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 60% 55% at 50% 35%, black 15%, transparent 75%)',
        }}
      />

      <DotCluster className="absolute top-8 left-6 md:top-10 md:left-12" />
      <DotCluster className="absolute right-6 bottom-8 rotate-180 md:right-12 md:bottom-10" />

      <div className="relative mx-auto flex w-full max-w-[1100px] flex-col items-center px-4 py-12 text-center md:px-6 md:py-16 lg:px-8">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#E55820]" aria-hidden />
          <span className="text-xs font-semibold tracking-wide text-white sm:text-sm">
            {badge}
          </span>
        </div>

        <h1 className="mb-4 max-w-none text-4xl leading-[1.2] font-bold tracking-tight text-white md:text-5xl lg:text-[3.25rem]">
          <span className="block">{titleLine1}</span>
          <span className="block whitespace-nowrap">
            {titleBeforeRotate}{' '}
            <span className="whitespace-nowrap text-[#E55820]" aria-live="polite">
              {typedWord}
              <span
                className="ml-0.5 inline-block h-[0.9em] w-[2px] translate-y-[0.12em] animate-pulse bg-[#E55820]"
                aria-hidden
              />
            </span>
            {titleAfterRotate ? <> {titleAfterRotate}</> : null}
          </span>
        </h1>

        <p className="mb-8 max-w-xl text-base leading-relaxed text-white/65 md:text-lg">
          {subtitle}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg bg-[#E55820] px-6 py-3 text-sm font-semibold text-white before:absolute before:inset-0 before:origin-left before:scale-x-0 before:bg-[#C44A15] before:transition-transform before:duration-300 before:ease-out hover:before:scale-x-100"
          >
            <span className="relative z-10">Get Started</span>
            <RiArrowRightLine
              className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden
            />
          </a>
          <Link
            href="/marketplace"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg border border-white/20 bg-transparent px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 before:absolute before:inset-0 before:origin-left before:scale-x-0 before:bg-[#E55820] before:transition-transform before:duration-300 before:ease-out hover:border-[#E55820] hover:before:scale-x-100"
          >
            <span className="relative z-10">Explore Marketplace</span>
            <RiArrowRightLine
              className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
