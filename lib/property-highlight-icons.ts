import type { LucideIcon } from 'lucide-react';
import {
  BedDouble,
  Building2,
  Camera,
  Car,
  Check,
  Dumbbell,
  Home,
  Landmark,
  MapPin,
  ShieldCheck,
  Sparkles,
  Star,
  TrendingUp,
  Trees,
  Users,
  Waves,
  Wifi,
  Wrench,
  Zap,
} from 'lucide-react';

export type PropertyHighlightIconKey =
  | 'map_pin'
  | 'building'
  | 'sparkles'
  | 'trending_up'
  | 'shield_check'
  | 'car'
  | 'wrench'
  | 'star'
  | 'bed'
  | 'home'
  | 'waves'
  | 'dumbbell'
  | 'zap'
  | 'users'
  | 'landmark'
  | 'trees'
  | 'wifi'
  | 'camera';

const ICON_BY_KEY: Record<PropertyHighlightIconKey, LucideIcon> = {
  map_pin: MapPin,
  building: Building2,
  sparkles: Sparkles,
  trending_up: TrendingUp,
  shield_check: ShieldCheck,
  car: Car,
  wrench: Wrench,
  star: Star,
  bed: BedDouble,
  home: Home,
  waves: Waves,
  dumbbell: Dumbbell,
  zap: Zap,
  users: Users,
  landmark: Landmark,
  trees: Trees,
  wifi: Wifi,
  camera: Camera,
};

/** Fallback when API omits iconKey — match common catalog labels. */
const ICON_BY_LABEL: Record<string, LucideIcon> = {
  'prime location': MapPin,
  'quality construction': Building2,
  'modern amenities': Sparkles,
  'high roi potential': TrendingUp,
  '24/7 security': ShieldCheck,
  'ample parking': Car,
  'quality finishes': Wrench,
  'high demand area': Star,
  'swimming pool': Waves,
};

export function resolvePropertyHighlightIcon(
  iconKey?: string | null,
  label?: string
): LucideIcon {
  if (iconKey && iconKey in ICON_BY_KEY) {
    return ICON_BY_KEY[iconKey as PropertyHighlightIconKey];
  }

  const normalized = label?.trim().toLowerCase();
  if (normalized && ICON_BY_LABEL[normalized]) {
    return ICON_BY_LABEL[normalized];
  }

  return Check;
}
