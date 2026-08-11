import Image from 'next/image';
import Link from 'next/link';
import { RiCheckLine } from 'react-icons/ri';
import { APP_URL } from '@/lib/constants';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface Step {
  title: string;
  description: string;
}

interface InvestmentPageTemplateProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  features: Feature[];
  howItWorksTitle?: string;
  steps: Step[];
  keyBenefitsIntro: string;
  benefitsList: string[];
  sideImage: string;
  sideImageAlt: string;
  ctaTitle: string;
  ctaSubtitle: string;
  /** When provided, replaces the default dark investment hero. */
  customHero?: React.ReactNode;
  /** When provided, replaces the default "Why Choose" features section. */
  customAfterHero?: React.ReactNode;
  /** When provided, replaces the default How It Works section. */
  customHowItWorks?: React.ReactNode;
  /** When provided, replaces the default Key Benefits section. */
  customKeyBenefits?: React.ReactNode;
  /** When provided, replaces the default bottom CTA section. */
  customCta?: React.ReactNode;
}

export function InvestmentPageTemplate({
  eyebrow,
  title,
  subtitle,
  features,
  howItWorksTitle = 'How It Works',
  steps,
  keyBenefitsIntro,
  benefitsList,
  sideImage,
  sideImageAlt,
  ctaTitle,
  ctaSubtitle,
  customHero,
  customAfterHero,
  customHowItWorks,
  customKeyBenefits,
  customCta,
}: InvestmentPageTemplateProps) {
  const half = Math.ceil(benefitsList.length / 2);
  const col1 = benefitsList.slice(0, half);
  const col2 = benefitsList.slice(half);

  return (
    <>
      {customHero ?? (
        <section className="bg-[#333D42] text-white py-16 md:py-20">
          <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-gray-400 text-xs font-semibold tracking-widest uppercase">{eyebrow}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
            <p className="text-gray-300 text-base max-w-xl leading-relaxed mb-8">{subtitle}</p>
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#2A2C2E] border border-white/30 hover:border-white text-white font-semibold text-sm rounded-md transition-colors"
            >
              Get Started →
            </a>
          </div>
        </section>
      )}

      {customAfterHero ?? (
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-3">Why Choose {title}?</h2>
              <p className="text-gray-500 text-sm">Experience the benefits of {title.toLowerCase()}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {features.map((f, i) => (
                <div key={i} className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
                  <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center mb-4 text-[#E55820]">
                    {f.icon}
                  </div>
                  <h3 className="font-bold text-[#1A1A1A] mb-2 text-sm">{f.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{f.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {customHowItWorks ?? (
        <section className="py-16 bg-gray-50">
          <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-3">{howItWorksTitle}</h2>
              <p className="text-gray-500 text-sm">Start your {title.toLowerCase()} journey in four simple steps</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step, i) => (
                <div key={i} className="relative flex flex-col items-center text-center">
                  <div className="w-10 h-10 rounded-full bg-[#E55820] text-white flex items-center justify-center font-bold text-sm mb-4 shrink-0">
                    {i + 1}
                  </div>
                  <h3 className="font-bold text-[#1A1A1A] mb-2 text-sm">{step.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{step.description}</p>
                  {i < steps.length - 1 && (
                    <span className="hidden lg:block absolute top-5 left-[calc(100%-8px)] text-[#E55820] text-lg">→</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {customKeyBenefits ?? (
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-5">
                <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A]">Key Benefits</h2>
                <p className="text-gray-600 text-sm leading-relaxed">{keyBenefitsIntro}</p>
                <div className="grid grid-cols-2 gap-y-3 gap-x-6">
                  <div className="space-y-3">
                    {col1.map((b, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <RiCheckLine className="w-4 h-4 text-[#E55820] shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-600">{b}</span>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-3">
                    {col2.map((b, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <RiCheckLine className="w-4 h-4 text-[#E55820] shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-600">{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                <Image src={sideImage} alt={sideImageAlt} fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>
      )}

      {customCta ?? (
        <section className="py-16 bg-[#1A1A1A] text-white text-center">
          <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8 space-y-5">
            <h2 className="text-2xl md:text-3xl font-bold">{ctaTitle}</h2>
            <p className="text-gray-400 text-sm max-w-lg mx-auto">{ctaSubtitle}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`${APP_URL}/register`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-[#E55820] hover:bg-[#C44A15] text-white font-semibold text-sm rounded-md transition-colors"
              >
                Create Account →
              </a>
              <Link
                href="/contact"
                className="px-8 py-3 border border-white/30 hover:border-white text-white font-semibold text-sm rounded-md transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
