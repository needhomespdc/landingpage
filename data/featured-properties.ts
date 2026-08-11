export type FeaturedPropertyModel =
  | 'fractional'
  | 'land_banking'
  | 'co_development'
  | 'save_to_own'
  | 'outright';

export type FeaturedPropertyStat = {
  value: string;
  label: string;
};

export type FeaturedProperty = {
  id: string;
  slug: string;
  title: string;
  location: string;
  imageSrc: string;
  model: FeaturedPropertyModel;
  modelLabel: string;
  /** Display price on the card (slot / unit / plot / min investment). */
  minInvestment: number;
  /** Model-specific listing stats shown on the card (same as mobile). */
  listingStats: FeaturedPropertyStat[];
  href: string;
  isHotSelling?: boolean;
  isNewListing?: boolean;
};

export const MODEL_BADGE_STYLES: Record<
  FeaturedPropertyModel,
  { bg: string; bar: string }
> = {
  fractional: { bg: 'bg-[#7C4F9E]', bar: 'bg-[#7C4F9E]' },
  land_banking: { bg: 'bg-[#E55820]', bar: 'bg-[#E55820]' },
  co_development: { bg: 'bg-[#16A34A]', bar: 'bg-[#16A34A]' },
  save_to_own: { bg: 'bg-[#2563EB]', bar: 'bg-[#2563EB]' },
  outright: { bg: 'bg-[#E55820]', bar: 'bg-[#E55820]' },
};

/** Short badge labels aligned with the mobile marketplace cards. */
export const MODEL_CARD_BADGE_LABELS: Record<FeaturedPropertyModel, string> = {
  fractional: 'Fractional',
  co_development: 'Co-Dev',
  land_banking: 'Land Banking',
  save_to_own: 'Save-to-Own',
  outright: 'Outright',
};

/** Price row labels aligned with the mobile marketplace cards. */
export const MODEL_PRICE_LABELS: Record<FeaturedPropertyModel, string> = {
  fractional: 'Price per Slot',
  co_development: 'Price per Unit',
  land_banking: 'Price per Plot',
  save_to_own: 'Plot Price',
  outright: 'Price per Unit',
};

export function formatNaira(amount: number): string {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    maximumFractionDigits: 0,
  }).format(amount);
}

/** Compact naira like mobile cards (₦50K, ₦1.5M). */
export function formatNairaCompact(amount: number): string {
  const isNegative = amount < 0;
  const abs = Math.abs(amount);

  if (abs < 1000) {
    return formatNaira(amount);
  }

  let scaled: number;
  let suffix: string;

  if (abs >= 1_000_000_000) {
    scaled = abs / 1_000_000_000;
    suffix = 'B';
  } else if (abs >= 1_000_000) {
    scaled = abs / 1_000_000;
    suffix = 'M';
  } else {
    scaled = abs / 1000;
    suffix = 'K';
  }

  const formatted =
    scaled >= 100
      ? String(Math.round(scaled))
      : Number.isInteger(Math.round(scaled * 10) / 10)
        ? String(Math.round(scaled * 10) / 10)
        : (Math.round(scaled * 10) / 10).toFixed(1);

  const value = `₦${formatted}${suffix}`;
  return isNegative ? `-${value}` : value;
}
