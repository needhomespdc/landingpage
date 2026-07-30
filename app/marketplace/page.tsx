import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Marketplace' };

export default function MarketplacePage() {
  return (
    <>
      <section className="bg-[#333D42] text-white py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold">
            Marketplace<span className="text-[#E55820]">.</span>
          </h1>
          <p className="text-gray-400 mt-3 text-base">Browse and invest in verified real estate opportunities.</p>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8 text-center space-y-6">
          <p className="text-gray-500 text-lg">Our marketplace is launching soon. Explore investment options in the meantime.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/investment/fractional-ownership" className="px-6 py-3 bg-[#E55820] text-white font-semibold rounded-md text-sm hover:bg-[#C44A15] transition-colors">
              Fractional Ownership
            </Link>
            <Link href="/investment/co-development" className="px-6 py-3 border border-gray-300 text-[#1A1A1A] font-semibold rounded-md text-sm hover:border-[#E55820] transition-colors">
              Co-Development
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
