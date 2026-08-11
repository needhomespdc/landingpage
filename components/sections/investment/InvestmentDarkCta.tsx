import Link from 'next/link';
import { RiArrowRightLine } from 'react-icons/ri';
import { APP_URL } from '@/lib/constants';

export interface InvestmentDarkCtaProps {
  title: string;
  subtitle: string;
}

export function InvestmentDarkCta({ title, subtitle }: InvestmentDarkCtaProps) {
  return (
    <section className="relative overflow-hidden bg-black py-14 md:py-16">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.4) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.4) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
          maskImage:
            'radial-gradient(ellipse 70% 70% at 50% 50%, black 15%, transparent 75%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 70% 70% at 50% 50%, black 15%, transparent 75%)',
        }}
      />

      <div className="relative mx-auto max-w-[1200px] space-y-5 px-4 text-center md:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-white md:text-3xl">{title}</h2>
        <p className="mx-auto max-w-lg text-sm text-white/60">{subtitle}</p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
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
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg bg-[#E55820] px-6 py-3 text-sm font-semibold text-white before:absolute before:inset-0 before:origin-left before:scale-x-0 before:bg-[#C44A15] before:transition-transform before:duration-300 before:ease-out hover:before:scale-x-100"
          >
            <span className="relative z-10">Start Investing</span>
            <RiArrowRightLine
              className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden
            />
          </a>
        </div>
      </div>
    </section>
  );
}
