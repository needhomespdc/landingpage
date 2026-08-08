export type FeaturedPropertyModel =
  | 'fractional'
  | 'land_banking'
  | 'co_development'
  | 'save_to_own'
  | 'outright';

export type FeaturedProperty = {
  id: string;
  slug: string;
  title: string;
  location: string;
  imageSrc: string;
  model: FeaturedPropertyModel;
  modelLabel: string;
  minInvestment: number;
  projectedReturn: string;
  fundedPercent: number;
  href: string;
  isHotSelling?: boolean;
  isNewListing?: boolean;
};

export const MODEL_BADGE_STYLES: Record<
  FeaturedPropertyModel,
  { bg: string; bar: string }
> = {
  fractional: { bg: 'bg-[#E55820]', bar: 'bg-[#E55820]' },
  land_banking: { bg: 'bg-[#16A34A]', bar: 'bg-[#16A34A]' },
  co_development: { bg: 'bg-[#7C4F9E]', bar: 'bg-[#7C4F9E]' },
  save_to_own: { bg: 'bg-[#2563EB]', bar: 'bg-[#2563EB]' },
  outright: { bg: 'bg-[#E55820]', bar: 'bg-[#E55820]' },
};

export function formatNaira(amount: number): string {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    maximumFractionDigits: 0,
  }).format(amount);
}
