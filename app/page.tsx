import type { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { PartnersCarousel } from '@/components/sections/PartnersCarousel';
import { InvestmentModels } from '@/components/sections/InvestmentModels';
import { HomeHowItWorks } from '@/components/sections/HomeHowItWorks';
import { FeaturedPropertiesSection } from '@/components/sections/FeaturedPropertiesSection';
import { HomeFAQ } from '@/components/sections/HomeFAQ';
import { DownloadApp } from '@/components/sections/DownloadApp';
// import { Newsletter } from '@/components/sections/Newsletter';

export const metadata: Metadata = {
  title: 'NeedHomes — Your Smooth Journey to Property Ownership',
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <PartnersCarousel />
      <InvestmentModels />
      <HomeHowItWorks />
      <FeaturedPropertiesSection />
      <HomeFAQ />
      <DownloadApp />
    </>
  );
}
