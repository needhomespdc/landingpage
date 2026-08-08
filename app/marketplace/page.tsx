import type { Metadata } from 'next';
import { MarketplaceCatalog } from '@/components/marketplace/MarketplaceCatalog';

export const metadata: Metadata = {
  title: 'Marketplace',
  description:
    'Browse verified NeedHomes investment properties across fractional, co-development, land banking, save-to-own, and outright models.',
};

export default function MarketplacePage() {
  return (
    <>
      <section className="bg-[#333D42] py-16 text-white md:py-20">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
          <h1 className="text-4xl font-bold md:text-5xl">
            Marketplace<span className="text-[#E55820]">.</span>
          </h1>
          <p className="mt-3 max-w-2xl text-base text-gray-400">
            Browse and invest in verified real estate opportunities across every
            NeedHomes investment model.
          </p>
        </div>
      </section>

      <MarketplaceCatalog />
    </>
  );
}
