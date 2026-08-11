import type { Metadata } from 'next';
import { AboutHero } from '@/components/sections/about/AboutHero';
import { AboutMission } from '@/components/sections/about/AboutMission';
import { AboutStats } from '@/components/sections/about/AboutStats';
import { AboutStory } from '@/components/sections/about/AboutStory';

export const metadata: Metadata = { title: 'About Us' };

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutMission />
      <AboutStats />
      <AboutStory />
    </>
  );
}
