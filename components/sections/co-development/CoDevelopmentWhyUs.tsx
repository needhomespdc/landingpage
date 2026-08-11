import Image from 'next/image';
import { RiCheckLine, RiArrowRightLine } from 'react-icons/ri';
import { APP_URL } from '@/lib/constants';

const reasons = [
  'Prime locations',
  'Thoroughly vetted projects',
  'Experienced development partners',
  'Clear legal structure',
  'Regular updates & communication',
] as const;

export function CoDevelopmentWhyUs() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-10 px-4 md:px-6 lg:grid-cols-[1.35fr_1fr] lg:gap-14 lg:px-8">
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl sm:aspect-[5/4] lg:aspect-auto lg:min-h-[480px]">
          <Image
            src="/images/featured/horizon-towers.jpg"
            alt="Premium co-development property by NeedHomes"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 640px"
          />

          <div className="absolute bottom-4 left-4 max-w-xs rounded-2xl bg-black/70 p-5 backdrop-blur-sm sm:bottom-6 sm:left-6 sm:p-6">
            <ul className="space-y-3">
              {reasons.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-white/90">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E55820]">
                    <RiCheckLine className="h-3 w-3 text-white" aria-hidden />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-[#E55820] uppercase">
            Why Co-Develop with NeedHomes?
          </p>
          <h2 className="mb-5 text-3xl leading-tight font-bold text-[#1A1A1A] md:text-4xl">
            Stronger Projects.
            <br />
            Shared Ownership.
          </h2>
          <p className="mb-8 max-w-md text-base leading-relaxed text-[#555555]">
            We combine expertise, transparency, and trust to help you build
            valuable real estate assets — together.
          </p>

          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg bg-[#E55820] px-6 py-3 text-sm font-semibold text-white before:absolute before:inset-0 before:origin-left before:scale-x-0 before:bg-[#C44A15] before:transition-transform before:duration-300 before:ease-out hover:before:scale-x-100"
          >
            <span className="relative z-10">Start Investing Today</span>
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
