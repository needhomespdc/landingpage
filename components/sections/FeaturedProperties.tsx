'use client';

import { useRef } from 'react';
import Link from 'next/link';
import {
  RiArrowLeftSLine,
  RiArrowRightLine,
  RiArrowRightSLine,
} from 'react-icons/ri';
import type { FeaturedProperty } from '@/data/featured-properties';
import { PropertyCard } from '@/components/shared/PropertyCard';

export function FeaturedPropertiesCarousel({
  properties,
}: {
  properties: FeaturedProperty[];
}) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByCards = (direction: 'prev' | 'next') => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({
      left: direction === 'next' ? 320 : -320,
      behavior: 'smooth',
    });
  };

  if (!properties.length) {
    return (
      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold tracking-tight text-[#1A1A1A] md:text-3xl">
              Featured Properties
            </h2>
            <p className="mt-2 text-sm text-[#666666] md:text-base">
              Handpicked investment opportunities with high potential returns.
            </p>
          </div>
          <div className="rounded-2xl border border-dashed border-[#E8E8E8] px-6 py-12 text-center">
            <p className="text-sm text-[#666666]">
              No hot or newly listed properties are available right now.
            </p>
            <Link
              href="/marketplace"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#E55820]"
            >
              View Marketplace
              <RiArrowRightLine className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white py-14 md:py-20">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-4 md:mb-10">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-[#1A1A1A] md:text-3xl">
              Featured Properties
            </h2>
            <p className="mt-2 text-sm text-[#666666] md:text-base">
              Hot and newly listed investment opportunities with high potential
              returns.
            </p>
          </div>
          <Link
            href="/marketplace"
            className="hidden shrink-0 items-center gap-1.5 text-sm font-semibold text-[#E55820] transition-colors hover:text-[#C44A15] sm:inline-flex"
          >
            View Marketplace
            <RiArrowRightLine className="h-4 w-4" />
          </Link>
        </div>

        <div className="relative">
          <div
            ref={scrollerRef}
            className="flex gap-5 overflow-x-auto px-12 pb-2 scroll-smooth [scrollbar-width:none] md:px-14 [&::-webkit-scrollbar]:hidden"
          >
            {properties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                className="w-[280px] shrink-0 sm:w-[300px]"
              />
            ))}
          </div>

          {properties.length > 3 ? (
            <>
              <button
                type="button"
                onClick={() => scrollByCards('prev')}
                aria-label="Scroll featured properties left"
                className="absolute left-0 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black text-white transition-transform hover:scale-105"
              >
                <RiArrowLeftSLine className="h-6 w-6" />
              </button>
              <button
                type="button"
                onClick={() => scrollByCards('next')}
                aria-label="Scroll featured properties right"
                className="absolute right-0 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black text-white transition-transform hover:scale-105"
              >
                <RiArrowRightSLine className="h-6 w-6" />
              </button>
            </>
          ) : null}
        </div>

        <div className="mt-6 sm:hidden">
          <Link
            href="/marketplace"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#E55820]"
          >
            View Marketplace
            <RiArrowRightLine className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
