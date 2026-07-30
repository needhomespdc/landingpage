import type { Metadata } from 'next';
import { RiLineChartLine, RiHome2Line, RiMapPinLine, RiShieldCheckLine, RiTimeLine, RiMapPin2Line } from 'react-icons/ri';
import { InvestmentPageTemplate } from '@/components/shared/InvestmentPageTemplate';

export const metadata: Metadata = { title: 'Land Banking' };

const features = [
  { icon: <RiLineChartLine className="w-5 h-5" />, title: 'Long-term Appreciation', description: 'Land values typically appreciate 15–25% annually in strategic locations' },
  { icon: <RiHome2Line className="w-5 h-5" />,     title: 'Low Maintenance',         description: 'No property management, repairs, or tenant issues to worry about' },
  { icon: <RiMapPinLine className="w-5 h-5" />,    title: 'Strategic Locations',     description: 'Carefully selected plots in high-growth corridors and development zones' },
  { icon: <RiShieldCheckLine className="w-5 h-5" />, title: 'Secure Title',          description: 'All lands come with verified titles and proper documentation' },
  { icon: <RiTimeLine className="w-5 h-5" />,      title: 'Flexible Timeline',       description: 'Hold for as long as you want and sell when the time is right' },
  { icon: <RiMapPin2Line className="w-5 h-5" />,   title: 'Prime Locations',         description: 'Access to lands in emerging areas with high development potential' },
];

const steps = [
  { title: 'Browse Lands',      description: 'Explore our curated selection of lands in strategic growth areas' },
  { title: 'Verify & Inspect',  description: 'Review documentation and conduct site inspection with our team' },
  { title: 'Secure Purchase',   description: 'Complete payment and legal documentation process' },
  { title: 'Hold & Appreciate', description: 'Watch your investment grow over time and sell when ready' },
];

const benefits = [
  'Hedge against inflation effectively',
  'No ongoing maintenance expenses',
  'Flexible development options',
  'Portfolio diversification',
  'Low entry cost compared to developed properties',
  'High appreciation potential',
  'Tax advantages on land holdings',
  'Generational wealth building',
];

export default function LandBankingPage() {
  return (
    <InvestmentPageTemplate
      eyebrow="Investment Option"
      title="Land Banking"
      subtitle="Secure your financial future by investing in strategic land parcels. Benefit from long-term appreciation with minimal maintenance."
      features={features}
      steps={steps}
      keyBenefitsIntro="Land banking is a proven wealth-building strategy that offers excellent long-term returns with minimal ongoing costs and management requirements."
      benefitsList={benefits}
      sideImage="/images/properties/land-banking.jpg"
      sideImageAlt="Hand placing coins on grass representing land banking investment"
      ctaTitle="Ready to Secure Your Land Investment?"
      ctaSubtitle="Join smart investors who are building generational wealth through strategic land banking"
    />
  );
}
