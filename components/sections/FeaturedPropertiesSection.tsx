import { fetchFeaturedProperties } from '@/lib/properties-api';
import { FeaturedPropertiesCarousel } from '@/components/sections/FeaturedProperties';

export async function FeaturedPropertiesSection() {
  const properties = await fetchFeaturedProperties(8);
  return <FeaturedPropertiesCarousel properties={properties} />;
}
