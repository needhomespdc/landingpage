import type { Metadata } from 'next';
import { RiKey2Line, RiShieldCheckLine, RiLineChartLine, RiVipCrownLine, RiHome2Line, RiCheckLine } from 'react-icons/ri';
import { InvestmentPageTemplate } from '@/components/shared/InvestmentPageTemplate';

export const metadata: Metadata = { title: 'Outright Purchase' };

const features = [
  { icon: <RiKey2Line className="w-5 h-5" />,        title: 'Full Ownership',       description: '100% ownership rights with complete control over your property' },
  { icon: <RiShieldCheckLine className="w-5 h-5" />, title: 'Verified Properties',  description: 'All properties come with clear titles and proper documentation' },
  { icon: <RiLineChartLine className="w-5 h-5" />,   title: 'Capital Appreciation', description: 'Benefit from full property value appreciation over time' },
  { icon: <RiVipCrownLine className="w-5 h-5" />,    title: 'Premium Selection',    description: 'Access to exclusive, high-quality properties in prime locations' },
  { icon: <RiHome2Line className="w-5 h-5" />,       title: 'Immediate Possession', description: 'Move in or rent out immediately after purchase completion' },
  { icon: <RiCheckLine className="w-5 h-5" />,       title: 'Hassle-Free Process',  description: 'We handle all legal and documentation processes for you' },
];

const steps = [
  { title: 'Browse Properties', description: 'Explore our curated selection of premium properties for outright purchase' },
  { title: 'Schedule Viewing',  description: 'Book a property tour and inspect the property with our agents' },
  { title: 'Make Offer',        description: 'Submit your offer and complete the payment process' },
  { title: 'Own & Enjoy',       description: 'Complete documentation and take full possession of your property' },
];

const benefits = [
  'Complete ownership and control',
  'Full rental income potential',
  'Immediate possession rights',
  'Generational asset building',
  'No shared decision-making',
  'Maximum capital appreciation',
  'Flexible usage options',
  'Tax benefits on ownership',
];

export default function OutrightPurchasePage() {
  return (
    <InvestmentPageTemplate
      eyebrow="Investment Option"
      title="Outright Purchase"
      subtitle="Own your dream property outright. Enjoy complete ownership, full control, and maximum returns on your investment."
      features={features}
      steps={steps}
      keyBenefitsIntro="Outright purchase gives you complete freedom and control over your property investment, with no restrictions or shared decision-making."
      benefitsList={benefits}
      sideImage="/images/properties/outright-purchase.jpg"
      sideImageAlt="Modern apartment complex for outright purchase"
      ctaTitle="Ready to Own Your Dream Property?"
      ctaSubtitle="Join successful property owners who have secured their future through outright purchase"
    />
  );
}
