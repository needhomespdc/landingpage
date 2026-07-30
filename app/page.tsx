import type { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { AboutPlatform } from '@/components/sections/AboutPlatform';
import { HomeStats } from '@/components/sections/HomeStats';
import { CoDevSection } from '@/components/sections/CoDevSection';
import { FractionalSection } from '@/components/sections/FractionalSection';
import { InvestmentCards } from '@/components/sections/InvestmentCards';
import { HomeHowItWorks } from '@/components/sections/HomeHowItWorks';
import { ProfessionalMembership } from '@/components/sections/ProfessionalMembership';
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
      <AboutPlatform />
      <HomeStats />
      <CoDevSection />
      <FractionalSection />
      <InvestmentCards />
      <HomeHowItWorks />
      <ProfessionalMembership />
      <HomeFAQ />
      <DownloadApp />
    </>
  );
}
