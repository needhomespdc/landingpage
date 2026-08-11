'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  RiArrowLeftLine,
  RiFileTextLine,
  RiMapPinLine,
} from 'react-icons/ri';
import {
  MODEL_BADGE_STYLES,
  formatNaira,
  type FeaturedPropertyModel,
} from '@/data/featured-properties';
import {
  getDetailFundedPercent,
  getDetailProjectedReturn,
  getPropertyImageUrl,
  type BackendPropertyDetail,
} from '@/lib/properties-api';
import { resolvePropertyHighlightIcon } from '@/lib/property-highlight-icons';
import { APP_URL } from '@/lib/constants';
import { RichTextContent } from '@/components/shared/RichTextContent';
import { WaitlistModal } from '@/components/shared/WaitlistModal';
import { HotSellingBadge } from '@/components/shared/HotSellingBadge';
import { cn } from '@/lib/utils';

type PropertyDetailViewProps = {
  property: BackendPropertyDetail;
};

export function PropertyDetailView({ property }: PropertyDetailViewProps) {
  const [waitlistOpen, setWaitlistOpen] = useState(false);
  const [showStickyBar, setShowStickyBar] = useState(false);
  const [stickyBarHeight, setStickyBarHeight] = useState(0);
  const heroRef = useRef<HTMLElement>(null);
  const stickyBarRef = useRef<HTMLDivElement>(null);

  const images = useMemo(() => {
    const sorted = [...(property.images ?? [])].sort((a, b) => {
      if (a.isPrimary !== b.isPrimary) return a.isPrimary ? -1 : 1;
      return a.sortOrder - b.sortOrder;
    });
    if (sorted.length) return sorted;
    if (property.primaryImageUrl) {
      return [
        {
          id: 'primary',
          url: property.primaryImageUrl,
          secureUrl: property.primaryImageUrl,
          altText: property.title,
          isPrimary: true,
          sortOrder: 0,
        },
      ];
    }
    return [];
  }, [property]);

  const [activeImageId, setActiveImageId] = useState(images[0]?.id ?? '');
  const activeImage =
    images.find((image) => image.id === activeImageId) ?? images[0] ?? null;
  const badge =
    MODEL_BADGE_STYLES[property.investmentModelType as FeaturedPropertyModel] ??
    MODEL_BADGE_STYLES.fractional;
  const fundedPercent = getDetailFundedPercent(property);
  const projectedReturn = getDetailProjectedReturn(property);
  const titleDocuments = (property.documents ?? []).filter(
    (document) => document.category === 'title'
  );

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowStickyBar(!entry.isIntersecting);
      },
      {
        // Navbar height (~64px): sticky bar appears once the hero leaves below it
        rootMargin: '-64px 0px 0px 0px',
        threshold: 0,
      }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const bar = stickyBarRef.current;
    if (!bar) {
      return;
    }

    const updateHeight = () => {
      setStickyBarHeight(bar.getBoundingClientRect().height);
    };

    updateHeight();

    const resizeObserver = new ResizeObserver(updateHeight);
    resizeObserver.observe(bar);
    return () => resizeObserver.disconnect();
  }, []);

  const navbarOffset = 64;
  const sidebarGap = 12;
  const sidebarStickyTop = showStickyBar
    ? navbarOffset + stickyBarHeight + sidebarGap
    : 96;

  return (
    <>
      <div
        ref={stickyBarRef}
        className={cn(
          'fixed inset-x-0 top-16 z-40 border-b border-[#E8E8E8] bg-white/95 shadow-[0_4px_20px_rgba(0,0,0,0.06)] backdrop-blur-md transition-all duration-200',
          showStickyBar
            ? 'translate-y-0 opacity-100'
            : 'pointer-events-none -translate-y-2 opacity-0'
        )}
        aria-hidden={!showStickyBar}
      >
        <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-4 py-3 md:px-6 lg:px-8">
          <div className="min-w-0">
            <div className="mb-1 flex flex-wrap items-center gap-1.5">
              <span
                className={cn(
                  'rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white',
                  badge.bg
                )}
              >
                {property.investmentModelTypeLabel}
              </span>
              {property.isHotSelling ? <HotSellingBadge size={20} /> : null}
              {property.isNewListing ? (
                <span className="rounded-full bg-[#F3F3F3] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-[#1A1A1A]">
                  New
                </span>
              ) : null}
            </div>
            <p className="truncate text-sm font-bold text-[#1A1A1A] md:text-base">
              {property.title}
            </p>
            <p className="mt-0.5 flex min-w-0 items-center gap-1 text-xs text-[#888888]">
              <RiMapPinLine className="h-3.5 w-3.5 shrink-0 text-[#E55820]" />
              <span className="truncate">{property.location}</span>
            </p>
          </div>
          <button
            type="button"
            onClick={() => setWaitlistOpen(true)}
            className="shrink-0 rounded-md bg-[#E55820] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#C44A15] md:text-sm"
          >
            Join waitlist
          </button>
        </div>
      </div>

      <section ref={heroRef} className="bg-[#333D42] py-10 text-white md:py-12">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
          <Link
            href="/marketplace"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-white/70 transition-colors hover:text-white"
          >
            <RiArrowLeftLine className="h-4 w-4" />
            Back to marketplace
          </Link>
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span
              className={cn(
                'rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white',
                badge.bg
              )}
            >
              {property.investmentModelTypeLabel}
            </span>
            {property.isHotSelling ? <HotSellingBadge size={24} /> : null}
            {property.isNewListing ? (
              <span className="rounded-full bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-[#1A1A1A]">
                New
              </span>
            ) : null}
          </div>
          <h1 className="mt-3 text-3xl font-bold md:text-4xl">{property.title}</h1>
          <p className="mt-2 flex items-center gap-1.5 text-sm text-white/70 md:text-base">
            <RiMapPinLine className="h-4 w-4 shrink-0 text-[#E55820]" />
            {property.location}
          </p>
        </div>
      </section>

      <section className="bg-white py-10 md:py-14">
        <div className="mx-auto grid max-w-[1200px] gap-8 px-4 md:px-6 lg:grid-cols-[1.4fr_0.8fr] lg:gap-10 lg:px-8">
          <div className="space-y-8">
            <div className="space-y-3">
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-[#E8E8E8] bg-[#F3F3F3]">
                {activeImage ? (
                  <Image
                    src={getPropertyImageUrl(activeImage)}
                    alt={activeImage.altText || property.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    unoptimized={getPropertyImageUrl(activeImage).startsWith('http')}
                    priority
                  />
                ) : null}
              </div>
              {images.length > 1 ? (
                <div className="flex gap-2 overflow-x-auto pb-1">
                  {images.map((image) => {
                    const src = getPropertyImageUrl(image);
                    const isActive = image.id === activeImage?.id;
                    return (
                      <button
                        key={image.id}
                        type="button"
                        onClick={() => setActiveImageId(image.id)}
                        className={cn(
                          'relative h-16 w-24 shrink-0 overflow-hidden rounded-lg border transition-colors',
                          isActive
                            ? 'border-[#E55820]'
                            : 'border-[#E8E8E8] hover:border-[#E55820]/50'
                        )}
                      >
                        <Image
                          src={src}
                          alt={image.altText || property.title}
                          fill
                          className="object-cover"
                          sizes="96px"
                          unoptimized={src.startsWith('http')}
                        />
                      </button>
                    );
                  })}
                </div>
              ) : null}
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#1A1A1A]">About this property</h2>
              <div className="mt-3">
                <RichTextContent
                  html={property.description ?? ''}
                  emptyFallback="No description available for this listing yet."
                />
              </div>
            </div>

            {property.keyFacts?.length ? (
              <div>
                <h2 className="text-xl font-bold text-[#1A1A1A]">Key facts</h2>
                <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {property.keyFacts.map((fact) => (
                    <div
                      key={`${fact.label}-${fact.value}`}
                      className="rounded-xl border border-[#E8E8E8] px-4 py-3"
                    >
                      <p className="text-xs text-[#888888]">{fact.label}</p>
                      <p className="mt-1 text-sm font-semibold text-[#1A1A1A]">
                        {fact.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}

            {property.highlights?.length ? (
              <div>
                <h2 className="text-xl font-bold text-[#1A1A1A]">Highlights</h2>
                <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-3">
                  {property.highlights.map((highlight) => {
                    const Icon = resolvePropertyHighlightIcon(
                      highlight.iconKey,
                      highlight.label
                    );
                    return (
                      <li
                        key={highlight.label}
                        className="flex items-center gap-3 text-sm text-[#555555]"
                      >
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#FFF1EB] text-[#E55820]">
                          <Icon className="h-4 w-4" aria-hidden />
                        </span>
                        <span className="min-w-0 leading-snug">
                          {highlight.label}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ) : null}

            {property.howItWorksSteps?.length ? (
              <div>
                <h2 className="text-xl font-bold text-[#1A1A1A]">
                  {property.howItWorksTitle || 'How it works'}
                </h2>
                <ol className="mt-4 space-y-3">
                  {property.howItWorksSteps.map((step, index) => (
                    <li
                      key={`${step.title}-${index}`}
                      className="rounded-xl border border-[#E8E8E8] px-4 py-3"
                    >
                      <p className="text-xs font-semibold uppercase tracking-wide text-[#E55820]">
                        Step {index + 1}
                      </p>
                      <p className="mt-1 text-sm font-semibold text-[#1A1A1A]">
                        {step.title}
                      </p>
                      <p className="mt-1 text-sm text-[#666666]">{step.subtitle}</p>
                    </li>
                  ))}
                </ol>
              </div>
            ) : null}

            {property.milestones?.length ? (
              <div>
                <h2 className="text-xl font-bold text-[#1A1A1A]">Project milestones</h2>
                <div className="mt-4 space-y-3">
                  {property.milestones.map((milestone) => (
                    <div
                      key={milestone.id}
                      className="rounded-xl border border-[#E8E8E8] px-4 py-3"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <p className="text-sm font-semibold text-[#1A1A1A]">
                          {milestone.stepNumber}. {milestone.title}
                        </p>
                        <span className="rounded-full bg-[#F3F3F3] px-2.5 py-1 text-[11px] font-semibold uppercase text-[#555555]">
                          {milestone.status.replaceAll('_', ' ')}
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-[#666666]">{milestone.subtitle}</p>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}

            {titleDocuments.length ? (
              <div>
                <h2 className="text-xl font-bold text-[#1A1A1A]">Documents</h2>
                <ul className="mt-4 space-y-2">
                  {titleDocuments.map((document) => (
                    <li key={document.id}>
                      <a
                        href={document.secureUrl || document.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 rounded-xl border border-[#E8E8E8] px-4 py-3 text-sm text-[#1A1A1A] transition-colors hover:border-[#E55820]/50"
                      >
                        <RiFileTextLine className="h-4 w-4 text-[#E55820]" />
                        {document.fileName}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>

          <aside
            className="lg:sticky lg:self-start"
            style={{ top: sidebarStickyTop }}
          >
            <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 shadow-[0_8px_30px_rgba(0,0,0,0.04)] md:p-6">
              <p className="text-sm text-[#888888]">
                {property.investmentModelType === 'outright'
                  ? 'Property Price'
                  : property.investmentModelType === 'fractional'
                    ? 'Price per Slot'
                    : property.investmentModelType === 'land_banking'
                      ? 'Price per Plot'
                      : 'Min. Investment'}
              </p>
              <p className="mt-1 text-2xl font-bold text-[#1A1A1A]">
                {formatNaira(
                  property.investmentModelType === 'outright'
                    ? (property.totalPrice ?? property.minInvestment)
                    : property.minInvestment
                )}
              </p>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-[#F7F7F7] px-3 py-3">
                  <p className="text-[11px] text-[#888888]">Projected Return</p>
                  <p className="mt-1 text-sm font-bold text-[#1A1A1A]">
                    {projectedReturn}
                  </p>
                </div>
                <div className="rounded-xl bg-[#F7F7F7] px-3 py-3">
                  <p className="text-[11px] text-[#888888]">Property Type</p>
                  <p className="mt-1 text-sm font-bold text-[#1A1A1A]">
                    {property.propertyKindLabel}
                  </p>
                </div>
              </div>

              {property.investmentModelType !== 'outright' &&
              property.investmentModelType !== 'land_banking' &&
              property.investmentModelType !== 'save_to_own' ? (
                <div className="mt-5">
                  <div className="mb-1.5 flex items-center justify-between text-xs text-[#888888]">
                    <span>
                      {property.investmentModelType === 'fractional'
                        ? 'Completion rate'
                        : property.progressLabel || 'Funding progress'}
                    </span>
                    <span>{fundedPercent}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-[#EFEFEF]">
                    <div
                      className={cn('h-full rounded-full', badge.bar)}
                      style={{ width: `${fundedPercent}%` }}
                    />
                  </div>
                </div>
              ) : null}

              <dl className="mt-5 space-y-2 text-sm">
                <div className="flex justify-between gap-3">
                  <dt className="text-[#888888]">Return type</dt>
                  <dd className="font-medium text-[#1A1A1A]">
                    {property.returnTypeLabel}
                  </dd>
                </div>
                {property.developmentStageLabel ? (
                  <div className="flex justify-between gap-3">
                    <dt className="text-[#888888]">Stage</dt>
                    <dd className="font-medium text-[#1A1A1A]">
                      {property.developmentStageLabel}
                    </dd>
                  </div>
                ) : null}
                {property.landSize ? (
                  <div className="flex justify-between gap-3">
                    <dt className="text-[#888888]">Land size</dt>
                    <dd className="font-medium text-[#1A1A1A]">{property.landSize}</dd>
                  </div>
                ) : null}
                {property.buildingPermitNumber ? (
                  <div className="flex justify-between gap-3">
                    <dt className="text-[#888888]">Permit</dt>
                    <dd className="font-medium text-[#1A1A1A]">
                      {property.buildingPermitNumber}
                    </dd>
                  </div>
                ) : null}
              </dl>

              <div className="mt-6 space-y-3">
                <button
                  type="button"
                  onClick={() => setWaitlistOpen(true)}
                  className="w-full rounded-md bg-[#E55820] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#C44A15]"
                >
                  Join waitlist to invest
                </button>
                <a
                  href={APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full rounded-md border border-[#E5E5E5] px-5 py-3 text-center text-sm font-semibold text-[#1A1A1A] transition-colors hover:border-[#E55820]/50"
                >
                  Open in app
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <WaitlistModal open={waitlistOpen} onOpenChange={setWaitlistOpen} />
    </>
  );
}
