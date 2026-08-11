import { fetchFeaturedProperties } from '@/lib/properties-api';
import { FeaturedPropertiesCarousel } from '@/components/sections/home/FeaturedProperties';

export async function FeaturedPropertiesSection() {
  const properties = await fetchFeaturedProperties(8);
  return <FeaturedPropertiesCarousel properties={properties} />;
}
