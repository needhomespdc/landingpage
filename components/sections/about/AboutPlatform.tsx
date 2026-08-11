import Image from 'next/image';
import Link from 'next/link';
import { RiCheckboxCircleFill } from 'react-icons/ri';

const floaters = [
  { label: 'Co-Develop', className: 'top-2 right-0 md:-right-2' },
  { label: 'Co-Own', className: 'left-0 top-1/2 -translate-y-1/2 md:-left-4' },
  { label: 'Invest Now', className: 'bottom-2 left-1/3 md:left-1/4' },
];

export function AboutPlatform() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left image */}
          <div className="relative mx-auto w-full max-w-[420px] aspect-square">
            {/* Decorative blobs */}
            <div className="absolute -left-6 top-2 w-36 h-36 md:w-44 md:h-44 rounded-full bg-[#E55820]/90" />
            <div className="absolute -right-6 bottom-4 w-32 h-32 md:w-40 md:h-40 rounded-full bg-[#E55820]/90" />

            {/* Circular image */}
            <div className="absolute inset-8 md:inset-10 rounded-full overflow-hidden shadow-lg ring-4 ring-white">
              <Image
                src="/images/hero/woman-with-card.jpg"
                alt="NeedHomes platform interface on laptop"
                fill
                className="object-cover"
              />
            </div>

            {/* Floating badges */}
            {floaters.map((f) => (
              <div
                key={f.label}
                className={`absolute z-10 flex items-center gap-2 bg-gray-100 rounded-full pl-4 pr-1.5 py-1.5 shadow-md whitespace-nowrap ${f.className}`}
              >
                <span className="text-[11px] font-bold tracking-wide uppercase text-[#1A1A1A]">
                  {f.label}
                </span>
                <RiCheckboxCircleFill className="w-5 h-5 text-[#E11D1D] shrink-0" />
              </div>
            ))}
          </div>

          {/* Right content */}
          <div className="space-y-5">
            <p className="text-[#1A1A1A] text-base leading-relaxed">
              At Needhomes, we redefine property ownership using our PropTech platform to make
              owning real estate easier, more transparent, and accessible to everyone. From
              co-developing verified projects to fractional or full home purchase. Needhomes
              provides secure and flexible pathways to property investment. With us, you don&apos;t
              just invest in real estate — you invest in your future.
            </p>
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#E55820] hover:bg-[#C44A15] text-white font-semibold text-sm rounded-md transition-colors"
            >
              Explore How it Works
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
