import { getApiBaseUrl } from '@/lib/api-config';
import type {
  FeaturedProperty,
  FeaturedPropertyModel,
} from '@/data/featured-properties';

export type BackendPropertyListItem = {
  id: string;
  title: string;
  slug: string;
  location: string;
  investmentModelType: FeaturedPropertyModel;
  investmentModelTypeLabel: string;
  returnTypeLabel: string;
  isHotSelling: boolean;
  isNewListing: boolean;
  minInvestment: number;
  totalPrice?: number | null;
  progressPercent: number | null;
  listingStats: { value: string; label: string }[];
  primaryImageUrl: string | null;
};

export type BackendPropertyImage = {
  id: string;
  url: string;
  secureUrl: string;
  altText: string | null;
  isPrimary: boolean;
  sortOrder: number;
};

export type BackendPropertyDetail = BackendPropertyListItem & {
  description: string;
  propertyKindLabel: string;
  returnType: string;
  keyFacts: { label: string; value: string }[];
  highlights: { label: string; iconKey?: string }[];
  howItWorksTitle: string | null;
  howItWorksSteps: { title: string; subtitle: string }[];
  planTitle: string | null;
  planMetrics: { label: string; value: string }[];
  progressLabel: string | null;
  amountLabel: string | null;
  trustItems: { title: string; subtitle: string }[];
  developmentStageLabel: string | null;
  projectStartDate: string | null;
  projectEndDate: string | null;
  landSize: string | null;
  buildingPermitNumber: string | null;
  canAcceptInvestments?: boolean;
  fractionalSummary: {
    expectedReturnPercent: number;
    payoutCycleLabel: string;
    allowEarlyExit: boolean;
  } | null;
  investmentModelConfig: {
    type: FeaturedPropertyModel;
    typeLabel: string;
    config: Record<string, unknown>;
  } | null;
  milestones: {
    id: string;
    stepNumber: number;
    title: string;
    subtitle: string;
    status: string;
    fundingShareLabel: string;
    targetDate: string | null;
    isCurrentStage: boolean;
  }[];
  images: BackendPropertyImage[];
  video: {
    id: string;
    fileName: string;
    url: string;
    secureUrl: string;
  } | null;
  documents: {
    id: string;
    fileName: string;
    category: string;
    url: string;
    secureUrl: string;
  }[];
};

type PropertiesListResponse = {
  data: BackendPropertyListItem[];
  meta: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
};

export type PropertiesListResult = {
  properties: FeaturedProperty[];
  meta: PropertiesListResponse['meta'];
};

export type PropertySortOption =
  | 'popular'
  | 'priceLowToHigh'
  | 'priceHighToLow'
  | 'nameAsc';

export type InvestmentRangeOption =
  | 'under100k'
  | 'from100kTo500k'
  | 'from500kTo1m'
  | 'over1m';

export type PropertyKindOption =
  | 'duplex'
  | 'bungalow'
  | 'apartment'
  | 'terrace'
  | 'commercial'
  | 'land'
  | 'villa'
  | 'house'
  | 'mixed_use';

export type PropertyReturnTypeOption =
  | 'capital_appreciation'
  | 'rental_yield';

export type ListPublishedPropertiesParams = {
  page?: number;
  limit?: number;
  search?: string;
  type?: FeaturedPropertyModel | 'all';
  featured?: boolean;
  sort?: PropertySortOption;
  investmentRange?: InvestmentRangeOption;
  kind?: PropertyKindOption;
  returnType?: PropertyReturnTypeOption;
};

function parseFundedPercent(property: BackendPropertyListItem): number {
  if (property.progressPercent != null) {
    return Math.max(0, Math.min(100, Math.round(property.progressPercent)));
  }

  const fundedStat = property.listingStats?.find((stat) =>
    stat.label.toLowerCase().includes('funded')
  );
  if (fundedStat) {
    const parsed = Number.parseInt(fundedStat.value.replace(/[^\d]/g, ''), 10);
    if (Number.isFinite(parsed)) {
      return Math.max(0, Math.min(100, parsed));
    }
  }

  return 0;
}

function resolveProjectedReturn(property: BackendPropertyListItem): string {
  const returnStat = property.listingStats?.find((stat) => {
    const label = stat.label.toLowerCase();
    return (
      label.includes('return') ||
      label.includes('roi') ||
      label.includes('yield')
    );
  });

  if (returnStat?.value?.trim()) {
    return returnStat.value.trim();
  }

  return property.returnTypeLabel || '—';
}

export function mapPropertyToFeatured(
  property: BackendPropertyListItem
): FeaturedProperty {
  return {
    id: property.id,
    slug: property.slug,
    title: property.title,
    location: property.location,
    imageSrc: property.primaryImageUrl || '/images/hero/housing-bg.jpg',
    model: property.investmentModelType,
    modelLabel: property.investmentModelTypeLabel,
    minInvestment: property.minInvestment,
    listingStats: property.listingStats ?? [],
    href: `/marketplace/${property.slug}`,
    isHotSelling: property.isHotSelling,
    isNewListing: property.isNewListing,
  };
}

async function fetchPropertiesPage(
  params: Record<string, string>
): Promise<PropertiesListResponse> {
  const url = new URL(`${getApiBaseUrl()}/properties`);
  for (const [key, value] of Object.entries(params)) {
    url.searchParams.set(key, value);
  }

  const response = await fetch(url.toString(), {
    ...(typeof window === 'undefined'
      ? { next: { revalidate: 60 } }
      : { cache: 'no-store' }),
  });

  if (!response.ok) {
    return {
      data: [],
      meta: { page: 1, limit: Number(params.limit ?? 10), total: 0, totalPages: 0 },
    };
  }

  const payload = (await response.json()) as PropertiesListResponse;
  return {
    data: payload.data ?? [],
    meta: payload.meta ?? {
      page: 1,
      limit: Number(params.limit ?? 10),
      total: 0,
      totalPages: 0,
    },
  };
}

export async function listPublishedProperties(
  params: ListPublishedPropertiesParams = {}
): Promise<PropertiesListResult> {
  const page = params.page ?? 1;
  const limit = params.limit ?? 20;
  const query: Record<string, string> = {
    page: String(page),
    limit: String(limit),
  };

  if (params.search?.trim()) {
    query.search = params.search.trim();
  }

  if (params.type && params.type !== 'all') {
    query.type = params.type;
  }

  if (params.featured) {
    query.featured = 'true';
  }

  if (params.sort) {
    query.sort = params.sort;
  }

  if (params.investmentRange) {
    query.investmentRange = params.investmentRange;
  }

  if (params.kind) {
    query.kind = params.kind;
  }

  if (params.returnType) {
    query.returnType = params.returnType;
  }

  try {
    const result = await fetchPropertiesPage(query);
    return {
      properties: result.data.map(mapPropertyToFeatured),
      meta: result.meta,
    };
  } catch {
    return {
      properties: [],
      meta: { page, limit, total: 0, totalPages: 0 },
    };
  }
}

/**
 * Featured = published properties flagged hot selling and/or newly listed.
 * Tries `featured=true` when the API supports it; otherwise filters client-side.
 */
export async function fetchFeaturedProperties(
  limit = 8
): Promise<FeaturedProperty[]> {
  try {
    const featured = await listPublishedProperties({
      featured: true,
      limit,
      page: 1,
    });

    if (featured.properties.length) {
      return featured.properties;
    }

    // Older APIs reject unknown `featured` (400). Fall back and filter locally.
    const published = await listPublishedProperties({
      limit: 50,
      page: 1,
    });

    return published.properties
      .filter((property) => property.isHotSelling || property.isNewListing)
      .sort((a, b) => {
        if (Boolean(a.isHotSelling) !== Boolean(b.isHotSelling)) {
          return a.isHotSelling ? -1 : 1;
        }
        if (Boolean(a.isNewListing) !== Boolean(b.isNewListing)) {
          return a.isNewListing ? -1 : 1;
        }
        return 0;
      })
      .slice(0, limit);
  } catch {
    return [];
  }
}

export async function fetchPropertyBySlug(
  slug: string
): Promise<BackendPropertyDetail | null> {
  const url = `${getApiBaseUrl()}/properties/by-slug/${encodeURIComponent(slug)}`;

  try {
    const response = await fetch(url, {
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      return null;
    }

    return (await response.json()) as BackendPropertyDetail;
  } catch {
    return null;
  }
}

export function getPropertyImageUrl(
  image: Pick<BackendPropertyImage, 'secureUrl' | 'url'>
): string {
  return image.secureUrl || image.url || '/images/hero/housing-bg.jpg';
}

export function getDetailProjectedReturn(
  property: BackendPropertyDetail
): string {
  if (property.fractionalSummary?.expectedReturnPercent != null) {
    return `${property.fractionalSummary.expectedReturnPercent}% p.a`;
  }

  return resolveProjectedReturn(property);
}

export function getDetailFundedPercent(property: BackendPropertyDetail): number {
  return parseFundedPercent(property);
}
