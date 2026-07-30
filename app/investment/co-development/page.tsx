import type { Metadata } from 'next';
import { RiGroupLine, RiMapPinLine, RiLineChartLine, RiShieldCheckLine, RiUserSettingsLine, RiBuilding2Line } from 'react-icons/ri';
import { InvestmentPageTemplate } from '@/components/shared/InvestmentPageTemplate';

export const metadata: Metadata = { title: 'Co-Development' };

const features = [
  { icon: <RiGroupLine className="w-5 h-5" />,        title: 'Partnership Model',    description: 'Collaborate with experienced developers on profitable real estate projects' },
  { icon: <RiMapPinLine className="w-5 h-5" />,       title: 'Strategic Projects',   description: 'Access carefully vetted development opportunities in prime locations' },
  { icon: <RiLineChartLine className="w-5 h-5" />,    title: 'Higher Returns',       description: 'Potential for 20–40% ROI through development appreciation' },
  { icon: <RiShieldCheckLine className="w-5 h-5" />,  title: 'Risk Mitigation',      description: 'Share risk with professional developers and other investors' },
  { icon: <RiUserSettingsLine className="w-5 h-5" />, title: 'Expert Management',    description: 'Projects managed by experienced real estate professionals' },
  { icon: <RiBuilding2Line className="w-5 h-5" />,    title: 'Quality Development',  description: 'High-standard construction with modern amenities and finishes' },
];

const steps = [
  { title: 'Select Project',    description: 'Browse available co-development opportunities and review project details' },
  { title: 'Due Diligence',     description: 'Review project feasibility, developer credentials, and financial projections' },
  { title: 'Invest & Partner',  description: 'Commit your investment and become a co-development partner' },
  { title: 'Track & Earn',      description: 'Monitor project progress and receive returns upon completion or sale' },
];

const benefits = [
  'Partner with experienced developers',
  'Higher potential returns than traditional investments',
  'Professional project management',
  'Tax benefits on development investments',
  'Share development costs and risks',
  'Transparent project tracking and reporting',
  'Exit options at project milestones',
  'Portfolio diversification opportunity',
];

export default function CoDevelopmentPage() {
  return (
    <InvestmentPageTemplate
      eyebrow="Investment Option"
      title="Co-Development"
      subtitle="Co-development is an investment model where multiple individuals co-fund a property development project from land acquisition to completion. Instead of one individual carrying full risk, the model enables multiple investors to co-fund it together. Each investor automatically gets full ownership and increase in equity upon project completion, thereby reducing lower entry barriers"
      features={features}
      steps={steps}
      keyBenefitsIntro="Co-development offers a unique opportunity to participate in high-value property development projects with reduced individual risk and professional management."
      benefitsList={benefits}
      sideImage="/images/properties/co-development.jpg"
      sideImageAlt="Construction team working on a building project representing co-development"
      ctaTitle="Ready to Partner in Development?"
      ctaSubtitle="Join successful investors who are building wealth through strategic co-development partnerships"
    />
  );
}
