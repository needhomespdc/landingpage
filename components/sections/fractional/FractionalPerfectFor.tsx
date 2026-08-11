import Image from 'next/image';
import {
  RiCheckLine,
  RiHomeSmileLine,
  RiBriefcaseLine,
  RiMoneyDollarCircleLine,
  RiFileCheckLine,
  RiArrowRightLine,
} from 'react-icons/ri';
import { APP_URL } from '@/lib/constants';

const reasons = [
  { label: 'Low entry', detail: 'Start with any amount' },
  { label: 'Dual returns', detail: 'Rental income + appreciation' },
  { label: 'Diversified', detail: 'Invest across multiple properties' },
  { label: 'Flexible', detail: 'Invest at your pace' },
  { label: 'Transparent', detail: 'Real-time tracking in your portfolio' },
] as const;

const audience = [
  {
    icon: RiHomeSmileLine,
    text: 'First-time investors looking to start small',
  },
  {
    icon: RiBriefcaseLine,
    text: 'Busy professionals building long-term wealth',
  },
  {
    icon: RiMoneyDollarCircleLine,
    text: 'Anyone who wants passive income from real estate',
  },
  {
    icon: RiFileCheckLine,
    text: 'Investors who believe in the future of real estate',
  },
] as const;

export function FractionalPerfectFor() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-10 px-4 md:px-6 lg:grid-cols-[1.35fr_1fr] lg:gap-14 lg:px-8">
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl sm:aspect-[5/4] lg:aspect-auto lg:min-h-[480px]">
          <Image
            src="/images/featured/sunset-residences.jpg"
            alt="Premium living space available through fractional ownership"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 640px"
          />

          <div className="absolute inset-x-4 bottom-4 max-w-md rounded-2xl bg-black/70 p-5 backdrop-blur-sm sm:inset-x-auto sm:right-auto sm:bottom-6 sm:left-6 sm:p-6">
            <h3 className="mb-4 text-lg font-bold text-white sm:text-xl">
              Why Thousands Choose Fractional Ownership
            </h3>
            <ul className="space-y-2.5">
              {reasons.map(({ label, detail }) => (
                <li key={label} className="flex items-start gap-2.5 text-sm text-white/90">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E55820]">
                    <RiCheckLine className="h-3 w-3 text-white" aria-hidden />
                  </span>
                  <span>
                    <span className="font-semibold text-white">{label}</span>
                    <span className="text-white/75"> — {detail}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-[#E55820] uppercase">
            Perfect For
          </p>
          <h2 className="mb-8 text-3xl leading-tight font-bold text-[#1A1A1A] md:text-4xl">
            Who Is This For?
          </h2>

          <ul className="mb-8 space-y-5">
            {audience.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#E55820]/12">
                  <Icon className="h-5 w-5 text-[#E55820]" aria-hidden />
                </div>
                <p className="text-base font-medium text-[#1A1A1A]">{text}</p>
              </li>
            ))}
          </ul>

          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg bg-[#E55820] px-6 py-3 text-sm font-semibold text-white before:absolute before:inset-0 before:origin-left before:scale-x-0 before:bg-[#C44A15] before:transition-transform before:duration-300 before:ease-out hover:before:scale-x-100"
          >
            <span className="relative z-10">Invest Now</span>
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
