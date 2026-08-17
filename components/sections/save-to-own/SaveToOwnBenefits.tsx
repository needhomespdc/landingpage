import Image from 'next/image';
import {
  RiCheckLine,
  RiCalendarCheckLine,
  RiPriceTag2Line,
  RiSaveLine,
  RiKey2Line,
  RiArrowRightLine,
} from 'react-icons/ri';
import { APP_URL } from '@/lib/constants';

const reasons = [
  { label: 'Flexible plans', detail: 'Pay on a schedule that fits your budget' },
  { label: 'Price lock', detail: 'Secure today\'s price as you save over time' },
  { label: 'Low barrier', detail: 'Start without a large upfront payment' },
  { label: 'Clear path', detail: 'Track progress until you become the full owner' },
  { label: 'Verified homes', detail: 'Save toward properties with clear documentation' },
] as const;

const benefits = [
  {
    icon: RiCalendarCheckLine,
    text: 'Save at your own pace with a plan that matches your income',
  },
  {
    icon: RiPriceTag2Line,
    text: 'Lock in the property price while you complete your contributions',
  },
  {
    icon: RiSaveLine,
    text: 'Build toward ownership without waiting to raise the full amount upfront',
  },
  {
    icon: RiKey2Line,
    text: 'Become the full owner once your savings plan is complete',
  },
] as const;

export function SaveToOwnBenefits() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-10 px-4 md:px-6 lg:grid-cols-[1.35fr_1fr] lg:gap-14 lg:px-8">
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl sm:aspect-[5/4] lg:aspect-auto lg:min-h-[480px]">
          <Image
            src="/images/featured/palm-grove.jpg"
            alt="Home available through Save to Own flexible ownership plans"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 640px"
          />

          <div className="absolute inset-x-4 bottom-4 max-w-md rounded-2xl bg-black/70 p-5 backdrop-blur-sm sm:inset-x-auto sm:right-auto sm:bottom-6 sm:left-6 sm:p-6">
            <h3 className="mb-4 text-lg font-bold text-white sm:text-xl">
              Why People Choose Save to Own
            </h3>
            <ul className="space-y-2.5">
              {reasons.map(({ label, detail }) => (
                <li key={label} className="flex items-start gap-2.5 text-sm text-white/90">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E55820]">
                    <RiCheckLine className="h-3 w-3 text-white" aria-hidden />
                  </span>
                  <span>
                    <span className="font-semibold text-white">{label}</span>
                    <span className="text-white/75">: {detail}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-[#E55820] uppercase">
            Key Benefits
          </p>
          <h2 className="mb-5 text-3xl leading-tight font-bold text-[#1A1A1A] md:text-4xl">
            Save steadily.
            <br />
            Own completely.
          </h2>
          <p className="mb-8 max-w-md text-base leading-relaxed text-[#555555]">
            Save to Own makes property ownership reachable. You choose a verified
            home, pay gradually on a flexible plan, and become the full owner when
            your contributions are complete.
          </p>

          <ul className="mb-8 space-y-5">
            {benefits.map(({ icon: Icon, text }) => (
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
            <span className="relative z-10">Start Saving to Own</span>
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
