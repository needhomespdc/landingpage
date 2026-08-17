import type { Metadata } from 'next';
import { RiCalendarLine, RiTimeLine, RiPriceTag2Line, RiSaveLine, RiLineChartLine, RiHeartLine } from 'react-icons/ri';
import { InvestmentPageTemplate } from '@/components/shared/InvestmentPageTemplate';
import { InvestmentDarkHero } from '@/components/sections/investment/InvestmentDarkHero';
import { InvestmentDarkCta } from '@/components/sections/investment/InvestmentDarkCta';
import { SaveToOwnAbout } from '@/components/sections/save-to-own/SaveToOwnAbout';
import { SaveToOwnHowItWorks } from '@/components/sections/save-to-own/SaveToOwnHowItWorks';
import { SaveToOwnBenefits } from '@/components/sections/save-to-own/SaveToOwnBenefits';

export const metadata: Metadata = { title: 'Save to Own' };

const features = [
  { icon: <RiCalendarLine className="w-5 h-5" />,  title: 'Flexible Payments',      description: 'Pay in installments that fit your budget — weekly, monthly, or quarterly' },
  { icon: <RiTimeLine className="w-5 h-5" />,      title: 'Customizable Timeline',  description: 'Choose your payment duration from 6 months to 5 years' },
  { icon: <RiPriceTag2Line className="w-5 h-5" />, title: 'Lock-in Prices',         description: 'Secure today\'s property prices and pay over time without price increases' },
  { icon: <RiSaveLine className="w-5 h-5" />,      title: 'Secure Savings',         description: 'Your payments are held securely and earn interest until completion' },
  { icon: <RiLineChartLine className="w-5 h-5" />, title: 'Build Equity',           description: 'Start building equity from your first payment' },
  { icon: <RiHeartLine className="w-5 h-5" />,     title: 'No Credit Check',        description: 'Accessible to everyone regardless of credit history' },
];

const steps = [
  { title: 'Choose Property',  description: 'Select your desired property and review the save-to-own plan options' },
  { title: 'Select Plan',      description: 'Choose a payment plan that fits your budget and timeline' },
  { title: 'Start Saving',     description: 'Make regular payments according to your chosen schedule' },
  { title: 'Own Property',     description: 'Complete payments and take full ownership of your property' },
];

const benefits = [
  'Affordable payment plans',
  'Lock in current property prices',
  'Interest earned on savings',
  'Early completion bonuses',
  'No large upfront payment required',
  'Flexible payment schedules',
  'No credit history required',
  'Transparent fee structure',
];

export default function SaveToOwnPage() {
  return (
    <InvestmentPageTemplate
      eyebrow="Investment Option"
      title="Save to Own"
      subtitle="Make property ownership accessible with flexible payment plans. Save at your own pace and own your dream property without financial stress."
      features={features}
      steps={steps}
      keyBenefitsIntro="Save to Own makes property ownership accessible to everyone by offering flexible payment plans that fit any budget, without the need for large upfront payments or perfect credit."
      benefitsList={benefits}
      sideImage="/images/properties/save-to-own.jpg"
      sideImageAlt="House model beside a jar of coins representing save to own"
      ctaTitle="Ready to Start Saving Toward Ownership?"
      ctaSubtitle="Join people who are paying gradually toward a property and becoming full owners"
      customHero={
        <InvestmentDarkHero
          badge="Save to Own"
          titleLine1="Pay gradually toward a home"
          titleBeforeRotate="and own it"
          rotatingWords={['fully', 'flexibly', 'confidently']}
          titleAfterRotate="."
          subtitle="Choose a verified property, save at your own pace with a flexible plan, and become the full owner when your payments are complete."
        />
      }
      customAfterHero={<SaveToOwnAbout />}
      customHowItWorks={<SaveToOwnHowItWorks />}
      customKeyBenefits={<SaveToOwnBenefits />}
      customCta={
        <InvestmentDarkCta
          title="Ready to Start Saving Toward Ownership?"
          subtitle="Join people who are paying gradually toward a property and becoming full owners"
        />
      }
    />
  );
}
