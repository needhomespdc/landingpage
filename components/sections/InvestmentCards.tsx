import Image from 'next/image';
import Link from 'next/link';

export function InvestmentCards() {
  return (
    <section className="py-16 bg-[#ffffff]">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Co-Own card */}
          <div className="rounded-2xl bg-[#6C63E8] p-8 flex flex-col items-center text-center">
            <p className="text-white font-bold text-xl mb-3">Co-Own</p>
            <p className="text-white/90 text-sm leading-relaxed max-w-sm mb-6">
              Build wealth through partnership—every investment brings you closer to long-term financial success.
            </p>
            <Link
              href="/investment/fractional-ownership"
              className="inline-block px-6 py-2.5 bg-[#E55820] hover:bg-[#C44A15] text-white text-sm font-semibold rounded-md transition-colors mb-8"
            >
              Get Started
            </Link>
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-white">
              <Image
                src="/images/mockups/revenue-trend.png"
                alt="Revenue trend dashboard preview"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Co-Develop card */}
          <div className="rounded-2xl bg-[#2A2C2E] p-8 flex flex-col items-center text-center">
            <p className="text-white font-bold text-xl mb-3">Co-Develop</p>
            <p className="text-gray-300 text-sm leading-relaxed max-w-sm mb-6">
              Join a network of forward-thinking investors turning development opportunities into profitable assets.
            </p>
            <Link
              href="/investment/co-development"
              className="inline-block px-6 py-2.5 bg-[#E55820] hover:bg-[#C44A15] text-white text-sm font-semibold rounded-md transition-colors mb-8"
            >
              Get Started
            </Link>
            <div className="relative w-full aspect-[4/3]">
              <Image
                src="/images/mockups/wallet.png"
                alt="Wallet and completed projects dashboard preview"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
