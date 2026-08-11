import type { Metadata } from 'next';
import { Hero } from '@/components/sections/home/Hero';
import { PartnersCarousel } from '@/components/sections/home/PartnersCarousel';
import { InvestmentModels } from '@/components/sections/home/InvestmentModels';
import { HomeHowItWorks } from '@/components/sections/home/HomeHowItWorks';
import { FeaturedPropertiesSection } from '@/components/sections/home/FeaturedPropertiesSection';
import { HomeFAQ } from '@/components/sections/home/HomeFAQ';
import { DownloadApp } from '@/components/sections/home/DownloadApp';
// import { Newsletter } from '@/components/sections/home/Newsletter';

export const metadata: Metadata = { title: 'Home' };

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
      {/* <Newsletter /> */}
    </>
  );
}
