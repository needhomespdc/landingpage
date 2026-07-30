import Image from 'next/image';
import { RiCheckboxCircleFill, RiAppleFill, RiGooglePlayFill } from 'react-icons/ri';

const highlights = [
  'Build Wealth the smart way',
  'Co-develop and co-own trusted Real estate investment Portfolio',
  'Track Rental income and project milestone in real time',
  'Access digital contracts, investors dashboard and verified properties.',
];

export function Hero() {
  return (
    <section className="relative bg-[#1A1A1A] text-white overflow-hidden min-h-[480px]">
      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/hero-bg.jpeg"
          alt="NeedHomes dashboard"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Gradient overlay: dark on the left, fading to semi-transparent on the right */}
        <div className="absolute inset-0 bg-linear-to-r from-[#1A1A1A] via-[#1A1A1A]/80 to-[#1A1A1A]/30" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-[800] px-4 md:px-6 lg:px-8 py-20 md:py-28">
        <div className="max-w-xl space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-[1.15]">
            Your Smooth Journey<br />to Property<br />Ownership.
          </h1>
          <ul className="space-y-3">
            {highlights.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <RiCheckboxCircleFill className="w-5 h-5 text-[#E55820] shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm leading-snug">{text}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="https://apps.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-5 py-2.5 bg-[#E55820] hover:bg-[#C44A15] rounded-lg text-white text-sm font-semibold transition-colors"
            >
              <RiAppleFill className="w-5 h-5 shrink-0" />
              Get on iPhone
            </a>
            <a
              href="https://play.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-5 py-2.5 bg-white/10 hover:bg-white/20 border border-white/30 rounded-lg text-white text-sm font-semibold transition-colors"
            >
              <RiGooglePlayFill className="w-5 h-5 shrink-0 text-[#34D399]" />
              Get on Android
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
