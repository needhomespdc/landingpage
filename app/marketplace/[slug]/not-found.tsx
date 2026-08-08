import Link from 'next/link';

export default function MarketplacePropertyNotFound() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-[640px] px-4 text-center">
        <h1 className="text-3xl font-bold text-[#1A1A1A]">Property not found</h1>
        <p className="mt-3 text-sm text-[#666666]">
          This listing may have been removed or is no longer published.
        </p>
        <Link
          href="/marketplace"
          className="mt-6 inline-flex rounded-md bg-[#E55820] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#C44A15]"
        >
          Back to marketplace
        </Link>
      </div>
    </section>
  );
}
