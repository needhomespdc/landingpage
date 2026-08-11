import type { Metadata } from 'next';
import { RiGridLine, RiTimeLine, RiLineChartLine, RiShieldCheckLine, RiGroupLine, RiArrowLeftRightLine } from 'react-icons/ri';
import { InvestmentPageTemplate } from '@/components/shared/InvestmentPageTemplate';
import { FractionalHero } from '@/components/sections/fractional/FractionalHero';
import { FractionalAbout } from '@/components/sections/fractional/FractionalAbout';
import { FractionalHowItWorks } from '@/components/sections/fractional/FractionalHowItWorks';
import { FractionalPerfectFor } from '@/components/sections/fractional/FractionalPerfectFor';
import { FractionalCta } from '@/components/sections/fractional/FractionalCta';

export const metadata: Metadata = { title: 'Fractional Ownership' };

const features = [
  { icon: <RiGridLine className="w-5 h-5" />,           title: 'Low Entry Cost',       description: 'Start your property investment journey with as little as ₦500,000' },
  { icon: <RiTimeLine className="w-5 h-5" />,           title: 'Diversified Portfolio', description: 'Own fractions of multiple properties instead of putting all your money in one' },
  { icon: <RiLineChartLine className="w-5 h-5" />,      title: 'Passive Income',       description: 'Earn rental income proportional to your ownership percentage' },
  { icon: <RiShieldCheckLine className="w-5 h-5" />,    title: 'Secure Investment',    description: 'All properties are legally registered with proper documentation' },
  { icon: <RiGroupLine className="w-5 h-5" />,          title: 'Shared Ownership',     description: 'Co-own premium properties with other verified investors' },
  { icon: <RiArrowLeftRightLine className="w-5 h-5" />, title: 'Flexible Exit',        description: 'Sell your shares anytime through our marketplace platform' },
];

const steps = [
  { title: 'Browse Properties',  description: 'Explore our curated selection of premium properties available for fractional ownership' },
  { title: 'Choose Your Share',  description: 'Select the percentage of ownership you want to purchase based on your budget' },
  { title: 'Complete Purchase',  description: 'Make payment and complete the legal documentation process' },
  { title: 'Earn Returns',       description: 'Start earning rental income and benefit from property appreciation' },
];

const benefits = [
  'Own a fraction of high-value properties',
  'Earn proportional rental income',
  'No property management hassles',
  'Potential for capital appreciation',
  'Start with minimal capital investment',
  'Diversify your investment portfolio',
  'Transparent ownership structure',
  'Liquidity through secondary market',
];

export default function FractionalOwnershipPage() {
  return (
    <InvestmentPageTemplate
      eyebrow="Investment Option"
      title="Fractional Ownership"
      subtitle="Own a piece of premium real estate without breaking the bank. Start building your property portfolio with fractional ownership."
      features={features}
      steps={steps}
      keyBenefitsIntro="Fractional ownership opens doors to premium real estate investments that were previously out of reach for individual investors."
      benefitsList={benefits}
      sideImage="/images/properties/fractional-hands.jpg"
      sideImageAlt="Multiple hands pointing at property chart representing fractional ownership"
      ctaTitle="Ready to Start Your Investment Journey?"
      ctaSubtitle="Join thousands of investors who are building wealth through fractional property ownership"
      customHero={<FractionalHero />}
      customAfterHero={<FractionalAbout />}
      customHowItWorks={<FractionalHowItWorks />}
      customKeyBenefits={<FractionalPerfectFor />}
      customCta={<FractionalCta />}
    />
  );
}
