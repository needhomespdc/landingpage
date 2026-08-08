import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PropertyDetailView } from '@/components/marketplace/PropertyDetailView';
import { fetchPropertyBySlug } from '@/lib/properties-api';
import { getPlainTextFromHtml } from '@/lib/rich-text';

type PropertyDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: PropertyDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const property = await fetchPropertyBySlug(slug);

  if (!property) {
    return { title: 'Property not found' };
  }

  const plainDescription = getPlainTextFromHtml(property.description ?? '');

  return {
    title: property.title,
    description: plainDescription.slice(0, 160) || property.location,
  };
}

export default async function PropertyDetailPage({
  params,
}: PropertyDetailPageProps) {
  const { slug } = await params;
  const property = await fetchPropertyBySlug(slug);

  if (!property) {
    notFound();
  }

  return <PropertyDetailView property={property} />;
}
