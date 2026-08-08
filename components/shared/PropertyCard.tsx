'use client';

import Image from 'next/image';
import Link from 'next/link';
import { RiMapPinLine } from 'react-icons/ri';
import {
  MODEL_BADGE_STYLES,
  formatNaira,
  type FeaturedProperty,
} from '@/data/featured-properties';
import { cn } from '@/lib/utils';

type PropertyCardProps = {
  property: FeaturedProperty;
  className?: string;
};

export function PropertyCard({ property, className }: PropertyCardProps) {
  const badge =
    MODEL_BADGE_STYLES[property.model] ?? MODEL_BADGE_STYLES.fractional;
  const isRemoteImage = property.imageSrc.startsWith('http');
  const showProgress =
    property.model !== 'outright' && property.model !== 'land_banking';

  return (
    <article
      className={cn(
        'group flex w-full flex-col overflow-hidden rounded-2xl border border-[#E8E8E8] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#E55820]/45',
        className
      )}
    >
      <Link href={property.href} className="relative aspect-[16/10] w-full overflow-hidden bg-[#F3F3F3]">
        <Image
          src={property.imageSrc}
          alt={property.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
          unoptimized={isRemoteImage}
        />
        <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
          <span
            className={`rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white ${badge.bg}`}
          >
            {property.modelLabel}
          </span>
          {property.isHotSelling ? (
            <span className="rounded-full bg-black/75 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
              Hot
            </span>
          ) : null}
          {property.isNewListing ? (
            <span className="rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-[#1A1A1A]">
              New
            </span>
          ) : null}
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-4">
        <Link href={property.href}>
          <h3 className="text-[15px] font-bold leading-snug text-[#1A1A1A] transition-colors group-hover:text-[#E55820]">
            {property.title}
          </h3>
        </Link>
        <p className="mt-1.5 flex items-center gap-1 text-sm text-[#888888]">
          <RiMapPinLine className="h-3.5 w-3.5 shrink-0 text-[#E55820]" />
          <span className="truncate">{property.location}</span>
        </p>

        <div className="mt-4 grid grid-cols-2 gap-3">
          <div>
            <p className="text-[11px] text-[#888888]">Min. Investment</p>
            <p className="mt-0.5 text-sm font-bold text-[#1A1A1A]">
              {formatNaira(property.minInvestment)}
            </p>
          </div>
          <div>
            <p className="text-[11px] text-[#888888]">Projected Return</p>
            <p className="mt-0.5 text-sm font-bold text-[#1A1A1A]">
              {property.projectedReturn}
            </p>
          </div>
        </div>

        {showProgress ? (
          <div className="mt-4">
            <div className="h-1.5 overflow-hidden rounded-full bg-[#EFEFEF]">
              <div
                className={`h-full rounded-full ${badge.bar}`}
                style={{ width: `${property.fundedPercent}%` }}
              />
            </div>
            <p className="mt-1.5 text-[11px] font-medium text-[#888888]">
              {property.fundedPercent}% Funded
            </p>
          </div>
        ) : null}

        <Link
          href={property.href}
          className="mt-4 block w-full rounded-lg bg-[#F3F3F3] py-2.5 text-center text-sm font-semibold text-[#1A1A1A] transition-colors hover:bg-[#EBEBEB]"
        >
          View Details
        </Link>
      </div>
    </article>
  );
}
