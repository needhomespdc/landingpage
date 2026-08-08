'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import {
  RiArrowDownSLine,
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiEqualizerLine,
  RiSearchLine,
} from 'react-icons/ri';
import type { FeaturedProperty, FeaturedPropertyModel } from '@/data/featured-properties';
import { PropertyCard } from '@/components/shared/PropertyCard';
import { PropertyCardSkeleton } from '@/components/shared/PropertyCardSkeleton';
import {
  listPublishedProperties,
  type InvestmentRangeOption,
  type PropertyKindOption,
  type PropertyReturnTypeOption,
  type PropertySortOption,
} from '@/lib/properties-api';
import { cn } from '@/lib/utils';

const PAGE_SIZE = 20;

const MODEL_OPTIONS: { id: 'all' | FeaturedPropertyModel; label: string }[] = [
  { id: 'all', label: 'All Properties' },
  { id: 'fractional', label: 'Fractional Ownership' },
  { id: 'land_banking', label: 'Land Banking' },
  { id: 'save_to_own', label: 'Save to Own' },
  { id: 'co_development', label: 'Co-development' },
  { id: 'outright', label: 'Outright Purchase' },
];

const PRICE_RANGES: { id: 'all' | InvestmentRangeOption; label: string }[] = [
  { id: 'all', label: 'All Prices' },
  { id: 'under100k', label: 'Under ₦100k' },
  { id: 'from100kTo500k', label: '₦100k – ₦500k' },
  { id: 'from500kTo1m', label: '₦500k – ₦1M' },
  { id: 'over1m', label: '₦1M+' },
];

const SORT_OPTIONS: { id: PropertySortOption; label: string }[] = [
  { id: 'popular', label: 'Newest First' },
  { id: 'priceLowToHigh', label: 'Price: Low to High' },
  { id: 'priceHighToLow', label: 'Price: High to Low' },
  { id: 'nameAsc', label: 'Name: A–Z' },
];

const PROPERTY_KINDS: { id: PropertyKindOption; label: string }[] = [
  { id: 'duplex', label: 'Duplex' },
  { id: 'bungalow', label: 'Bungalow' },
  { id: 'apartment', label: 'Apartment' },
  { id: 'terrace', label: 'Terrace' },
  { id: 'commercial', label: 'Commercial' },
  { id: 'land', label: 'Land' },
  { id: 'villa', label: 'Villa' },
  { id: 'house', label: 'House' },
  { id: 'mixed_use', label: 'Mixed Use' },
];

const RETURN_TYPES: { id: PropertyReturnTypeOption; label: string }[] = [
  { id: 'capital_appreciation', label: 'Capital Appreciation' },
  { id: 'rental_yield', label: 'Rental Yield' },
];

function FilterSelect({
  id,
  label,
  value,
  onChange,
  options,
  className,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: { id: string; label: string }[];
  className?: string;
}) {
  return (
    <label className={cn('flex shrink-0 flex-col gap-1.5', className)}>
      <span className="text-xs font-medium text-[#888888]">{label}</span>
      <span className="relative inline-flex w-full">
        <select
          id={id}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="w-full cursor-pointer appearance-none rounded-lg border border-[#E5E5E5] bg-white py-2.5 pl-3 pr-9 text-sm text-[#1A1A1A] outline-none transition-colors focus:border-[#E55820]"
        >
          {options.map((option) => (
            <option key={option.id} value={option.id}>
              {option.label}
            </option>
          ))}
        </select>
        <RiArrowDownSLine
          className="pointer-events-none absolute right-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#888888]"
          aria-hidden
        />
      </span>
    </label>
  );
}

export function MarketplaceCatalog() {
  const [activeModel, setActiveModel] = useState<'all' | FeaturedPropertyModel>(
    'all'
  );
  const [searchInput, setSearchInput] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [location, setLocation] = useState('all');
  const [priceRange, setPriceRange] = useState<'all' | InvestmentRangeOption>(
    'all'
  );
  const [sort, setSort] = useState<PropertySortOption>('popular');
  const [kind, setKind] = useState<'all' | PropertyKindOption>('all');
  const [returnType, setReturnType] = useState<'all' | PropertyReturnTypeOption>(
    'all'
  );
  const [moreFiltersOpen, setMoreFiltersOpen] = useState(false);
  const [locations, setLocations] = useState<string[]>([]);
  const [page, setPage] = useState(1);
  const [properties, setProperties] = useState<FeaturedProperty[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setDebouncedSearch(searchInput.trim());
      setPage(1);
    }, 350);
    return () => window.clearTimeout(timer);
  }, [searchInput]);

  useEffect(() => {
    let cancelled = false;

    async function loadLocations() {
      try {
        const result = await listPublishedProperties({ page: 1, limit: 100 });
        if (cancelled) return;
        const unique = Array.from(
          new Set(
            result.properties
              .map((property) => property.location.trim())
              .filter(Boolean)
          )
        ).sort((a, b) => a.localeCompare(b));
        setLocations(unique);
      } catch {
        if (!cancelled) setLocations([]);
      }
    }

    void loadLocations();
    return () => {
      cancelled = true;
    };
  }, []);

  const loadProperties = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const searchQuery =
        debouncedSearch ||
        (location !== 'all' ? location : undefined);

      const result = await listPublishedProperties({
        page,
        limit: PAGE_SIZE,
        search: searchQuery,
        type: activeModel,
        sort,
        investmentRange: priceRange === 'all' ? undefined : priceRange,
        kind: kind === 'all' ? undefined : kind,
        returnType: returnType === 'all' ? undefined : returnType,
      });

      const filtered =
        location !== 'all' && debouncedSearch
          ? result.properties.filter((property) =>
              property.location.toLowerCase().includes(location.toLowerCase())
            )
          : result.properties;

      setProperties(filtered);
      setTotalPages(result.meta.totalPages);
      setTotal(
        location !== 'all' && debouncedSearch
          ? filtered.length
          : result.meta.total
      );
    } catch {
      setProperties([]);
      setTotalPages(0);
      setTotal(0);
      setError('Could not load properties. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }, [
    activeModel,
    debouncedSearch,
    kind,
    location,
    page,
    priceRange,
    returnType,
    sort,
  ]);

  useEffect(() => {
    void loadProperties();
  }, [loadProperties]);

  const resetPage = () => setPage(1);

  const handleModelChange = (model: 'all' | FeaturedPropertyModel) => {
    setActiveModel(model);
    resetPage();
  };

  const locationOptions = useMemo(
    () => [
      { id: 'all', label: 'All Locations' },
      ...locations.map((item) => ({ id: item, label: item })),
    ],
    [locations]
  );

  const moreFiltersActive = kind !== 'all' || returnType !== 'all';

  return (
    <section className="bg-white py-12 md:py-16">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
        {/* Row 1: search + dropdowns */}
        <div className="rounded-2xl border border-[#E8E8E8] bg-[#FAFAFA] p-4 md:p-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-end lg:flex-nowrap">
            <label className="relative min-w-0 w-full flex-1 sm:min-w-[220px]">
              <span className="mb-1.5 block text-xs font-medium text-[#888888]">
                Search
              </span>
              <RiSearchLine className="pointer-events-none absolute bottom-3 left-3 h-4 w-4 text-[#888888]" />
              <input
                type="search"
                value={searchInput}
                onChange={(event) => setSearchInput(event.target.value)}
                placeholder="Search by property name, location or type..."
                className="w-full rounded-lg border border-[#E5E5E5] bg-white py-2.5 pl-10 pr-3 text-sm text-[#1A1A1A] outline-none transition-colors placeholder:text-[#AAAAAA] focus:border-[#E55820]"
              />
            </label>

            <FilterSelect
              id="location"
              label="Location"
              value={location}
              onChange={(value) => {
                setLocation(value);
                resetPage();
              }}
              options={locationOptions}
              className="w-full sm:w-[170px]"
            />

            <FilterSelect
              id="price-range"
              label="Price Range"
              value={priceRange}
              onChange={(value) => {
                setPriceRange(value as 'all' | InvestmentRangeOption);
                resetPage();
              }}
              options={PRICE_RANGES}
              className="w-full sm:w-[150px]"
            />

            <button
              type="button"
              onClick={() => setMoreFiltersOpen((open) => !open)}
              className={cn(
                'inline-flex h-[42px] shrink-0 items-center justify-center gap-2 rounded-lg border px-4 text-sm font-semibold transition-colors lg:mt-0',
                moreFiltersOpen || moreFiltersActive
                  ? 'border-[#E55820] bg-[#FFF1EB] text-[#E55820]'
                  : 'border-[#E5E5E5] bg-white text-[#1A1A1A] hover:border-[#E55820]/50'
              )}
            >
              More Filters
              <RiEqualizerLine className="h-4 w-4" />
            </button>
          </div>

          {moreFiltersOpen ? (
            <div className="mt-4 grid grid-cols-1 gap-3 border-t border-[#E8E8E8] pt-4 sm:grid-cols-2 lg:grid-cols-3">
              <FilterSelect
                id="property-kind"
                label="Property Type"
                value={kind}
                onChange={(value) => {
                  setKind(value as 'all' | PropertyKindOption);
                  resetPage();
                }}
                options={[
                  { id: 'all', label: 'All Property Types' },
                  ...PROPERTY_KINDS,
                ]}
                className="w-full sm:w-[200px]"
              />
              <FilterSelect
                id="return-type"
                label="Return Type"
                value={returnType}
                onChange={(value) => {
                  setReturnType(value as 'all' | PropertyReturnTypeOption);
                  resetPage();
                }}
                options={[
                  { id: 'all', label: 'All Return Types' },
                  ...RETURN_TYPES,
                ]}
                className="w-full sm:w-[200px]"
              />
              {moreFiltersActive ? (
                <div className="flex items-end">
                  <button
                    type="button"
                    onClick={() => {
                      setKind('all');
                      setReturnType('all');
                      resetPage();
                    }}
                    className="text-sm font-semibold text-[#E55820] hover:text-[#C44A15]"
                  >
                    Clear more filters
                  </button>
                </div>
              ) : null}
            </div>
          ) : null}
        </div>

        {/* Row 2: pills + sort + view */}
        <div className="mt-5 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {MODEL_OPTIONS.map((tab) => {
              const isActive = activeModel === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => handleModelChange(tab.id)}
                  className={cn(
                    'shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition-colors',
                    isActive
                      ? 'bg-[#E55820] text-white'
                      : 'bg-[#F3F3F3] text-[#555555] hover:bg-[#EBEBEB]'
                  )}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <label className="flex items-center gap-2 text-sm text-[#666666]">
              <span className="whitespace-nowrap">Sort by</span>
              <span className="relative inline-flex">
                <select
                  value={sort}
                  onChange={(event) => {
                    setSort(event.target.value as PropertySortOption);
                    resetPage();
                  }}
                  className="min-w-[160px] cursor-pointer appearance-none rounded-lg border border-[#E5E5E5] bg-white py-2 pl-3 pr-9 text-sm font-medium text-[#1A1A1A] outline-none focus:border-[#E55820]"
                >
                  {SORT_OPTIONS.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <RiArrowDownSLine
                  className="pointer-events-none absolute right-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#888888]"
                  aria-hidden
                />
              </span>
            </label>
          </div>
        </div>

        <div className="mt-4 text-sm text-[#888888]">
          {isLoading
            ? 'Loading properties...'
            : `${total} ${total === 1 ? 'property' : 'properties'} found`}
        </div>

        {error ? (
          <div className="mt-8 rounded-2xl border border-red-200 bg-red-50 px-6 py-10 text-center text-sm text-red-700">
            {error}
          </div>
        ) : null}

        {!error && isLoading ? (
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {Array.from({ length: PAGE_SIZE }).map((_, index) => (
              <PropertyCardSkeleton key={index} />
            ))}
          </div>
        ) : null}

        {!error && !isLoading && properties.length === 0 ? (
          <div className="mt-8 rounded-2xl border border-dashed border-[#E8E8E8] px-6 py-16 text-center">
            <p className="text-sm font-medium text-[#1A1A1A]">No properties found</p>
            <p className="mt-2 text-sm text-[#666666]">
              Try adjusting your filters or search.
            </p>
          </div>
        ) : null}

        {!error && !isLoading && properties.length > 0 ? (
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : null}

        {totalPages > 1 && !(location !== 'all' && debouncedSearch) ? (
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => setPage((current) => Math.max(1, current - 1))}
              disabled={page <= 1 || isLoading}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#E5E5E5] text-[#1A1A1A] transition-colors hover:border-[#E55820] hover:text-[#E55820] disabled:cursor-not-allowed disabled:opacity-40"
              aria-label="Previous page"
            >
              <RiArrowLeftSLine className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-1.5">
              {Array.from({ length: totalPages }, (_, index) => index + 1)
                .filter((pageNumber) => {
                  if (totalPages <= 7) return true;
                  if (pageNumber === 1 || pageNumber === totalPages) return true;
                  return Math.abs(pageNumber - page) <= 1;
                })
                .reduce<(number | 'ellipsis')[]>((acc, pageNumber, index, list) => {
                  if (index > 0) {
                    const prev = list[index - 1];
                    if (pageNumber - prev > 1) {
                      acc.push('ellipsis');
                    }
                  }
                  acc.push(pageNumber);
                  return acc;
                }, [])
                .map((item, index) =>
                  item === 'ellipsis' ? (
                    <span
                      key={`ellipsis-${index}`}
                      className="px-1 text-sm text-[#888888]"
                    >
                      …
                    </span>
                  ) : (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setPage(item)}
                      disabled={isLoading}
                      className={cn(
                        'inline-flex h-10 min-w-10 items-center justify-center rounded-full px-3 text-sm font-semibold transition-colors',
                        page === item
                          ? 'bg-[#E55820] text-white'
                          : 'border border-[#E5E5E5] text-[#1A1A1A] hover:border-[#E55820] hover:text-[#E55820]'
                      )}
                    >
                      {item}
                    </button>
                  )
                )}
            </div>

            <button
              type="button"
              onClick={() =>
                setPage((current) => Math.min(totalPages, current + 1))
              }
              disabled={page >= totalPages || isLoading}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#E5E5E5] text-[#1A1A1A] transition-colors hover:border-[#E55820] hover:text-[#E55820] disabled:cursor-not-allowed disabled:opacity-40"
              aria-label="Next page"
            >
              <RiArrowRightSLine className="h-5 w-5" />
            </button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
