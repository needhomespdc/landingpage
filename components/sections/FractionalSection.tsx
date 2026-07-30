import Link from 'next/link';
import { RiArrowLeftRightLine, RiHandCoinLine, RiExchangeFundsLine } from 'react-icons/ri';

const pillars = [
  {
    icon: RiArrowLeftRightLine,
    title: 'Split',
    description: 'The cost of an asset is split between individual shareholders.',
    gradient: 'from-[#5c5c5c] to-[#161616]',
    offsetClass: 'mt-16 sm:mt-20',
  },
  {
    icon: RiHandCoinLine,
    title: 'Benefit',
    description: 'All the shareholders split the benefits of the asset, such as income sharing, reduced rates, and usage rights.',
    gradient: 'from-[#F2994A] to-[#6b3f22]',
    offsetClass: '',
  },
  {
    icon: RiExchangeFundsLine,
    title: 'Equity',
    description: 'Your initial investment determines your equity stake in the asset.',
    gradient: 'from-[#6C5CE7] to-[#574e63]',
    offsetClass: '',
  },
];

export function FractionalSection() {
  return (
    <section className="py-16 md:py-20 bg-[#F3F4F6]">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A]">
              What is Fractional<br />Ownership?
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              Fractional ownership is a structure in which multiple individuals or entities can each
              purchase a portion of an asset. Each investor buys a fraction of the property, sharing both
              the cost and the potential profit.
            </p>
            <Link
              href="/investment/fractional-ownership"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#E55820] hover:bg-[#C44A15] text-white font-semibold text-sm rounded-md transition-colors mt-2"
            >
              Read more
            </Link>
          </div>

          {/* Right pillars */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4">
            {pillars.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className={p.offsetClass}>
                  <div
                    className={`relative bg-gradient-to-b ${p.gradient} text-white px-3 pt-10 pb-8 min-h-[280px] flex flex-col items-center text-center`}
                    style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 68%, 50% 100%, 0% 68%)' }}
                  >
                    {/* glossy fold highlight */}
                    <div
                      className="absolute top-0 left-0 w-full h-16 bg-white/15 pointer-events-none"
                      style={{ clipPath: 'polygon(0 0, 65% 0, 0% 100%)' }}
                    />
                    <Icon className="relative w-7 h-7 mb-4" />
                    <p className="relative font-bold text-sm mb-2">{p.title}</p>
                    <p className="relative text-[11px] leading-relaxed text-white/85">{p.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
