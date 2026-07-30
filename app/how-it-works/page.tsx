import type { Metadata } from 'next';
import Link from 'next/link';
import { RiUserAddLine, RiSearchLine, RiHome2Line, RiMoneyDollarCircleLine, RiLineChartLine } from 'react-icons/ri';
import { SectionHeading } from '@/components/shared/SectionHeading';

export const metadata: Metadata = {
  title: 'How it Works',
  description: 'A simple, transparent process to start building wealth through real estate with NeedHomes.',
};

const journey = [
  {
    Icon: RiUserAddLine,
    step: 1,
    title: 'Create Your Account',
    description: 'Sign up for free and complete a simple verification process. Choose between investor or partner account based on your goals.',
  },
  {
    Icon: RiSearchLine,
    step: 2,
    title: 'Browse Properties',
    description: 'Explore our curated selection of verified real estate opportunities across prime African locations with detailed analytics.',
  },
  {
    Icon: RiHome2Line,
    step: 3,
    title: 'Choose Investment Type',
    description: 'Select from Co-Development, Fractional Ownership, Land Banking, or Outright Purchase based on your investment strategy.',
  },
  {
    Icon: RiMoneyDollarCircleLine,
    step: 4,
    title: 'Make Your Investment',
    description: 'Fund your chosen property securely through our escrow-protected payment system with flexible payment plans available.',
  },
  {
    Icon: RiLineChartLine,
    step: 5,
    title: 'Track & Earn Returns',
    description: 'Monitor your investment performance in real-time through your dashboard and receive returns as your property appreciates.',
  },
];

const investmentOptions = [
  {
    title: 'Co-Development.',
    color: 'border-[#7C4F9E]',
    points: [
      'Minimum investment from ₦2,000,000',
      'Projected ROI: 25–35% annually',
      '18–24 months investment period',
      'Full legal ownership upon completion',
    ],
  },
  {
    title: 'Fractional Ownership.',
    color: 'border-[#E55820]',
    points: [
      'Start from as low as ₦500,000',
      'Earn rental income proportional to your stake',
      'Liquidity options through our marketplace',
      'Professional property management included',
    ],
  },
  {
    title: 'Land Banking.',
    color: 'border-[#2A2C2E]',
    points: [
      'Entry point from ₦2,000,000',
      'Capital appreciation of 15–20% annually',
      'Verified title documentation',
      'Option to develop or resell',
    ],
  },
];

const localFaqs = [
  { q: 'How secure is my investment?',    a: 'All investments are protected through escrow accounts managed by licensed trustees. Properties undergo rigorous due diligence, and all transactions are fully documented and legally binding.' },
  { q: 'When do I receive returns?',      a: 'Returns vary by investment type. Co-development returns are realized upon project completion, fractional ownership provides quarterly rental income, and land banking returns come from appreciation and eventual sale.' },
  { q: 'Can I visit the properties?',     a: 'Absolutely! We encourage site visits and can arrange inspections. Our team is available to provide guided tours and answer all your questions about any property.' },
  { q: 'What are the associated fees?',   a: 'Platform fees are clearly disclosed upfront and typically range from 2–5% depending on investment type. There are no hidden charges, and all costs are itemized in your investment agreement.' },
];

export default function HowItWorksPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#333D42] text-white py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold">
            How it Works<span className="text-[#E55820]">.</span>
          </h1>
          <p className="text-gray-400 mt-3 text-base">A simple, transparent process to start building wealth through real estate.</p>
        </div>
      </section>

      {/* Journey steps */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
          <SectionHeading
            title="Your Journey to Property Wealth"
            accentChar="."
            subtitle="From account creation to earning returns, we've streamlined every step of the investment process."
            align="center"
            className="mb-12"
          />
          <div className="space-y-4 max-w-3xl mx-auto">
            {journey.map(({ Icon, step, title, description }) => (
              <div key={step} className="flex items-start gap-5 p-5 bg-white border border-gray-100 rounded-xl shadow-sm">
                <div className="w-10 h-10 rounded-full bg-orange-50 border-2 border-[#E55820] flex items-center justify-center shrink-0">
                  <span className="text-[#E55820] font-bold text-sm">{step}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <Icon className="w-5 h-5 text-[#E55820]" />
                    <h3 className="font-bold text-[#1A1A1A] text-sm">{title}</h3>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Options */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
          <SectionHeading
            title="Investment Options"
            accentChar="."
            subtitle="Choose the investment strategy that aligns with your financial goals and risk appetite."
            align="left"
            className="mb-10"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {investmentOptions.map((opt) => (
              <div key={opt.title} className={`bg-white rounded-xl p-6 border-t-4 shadow-sm ${opt.color}`}>
                <h3 className="font-bold text-[#1A1A1A] mb-4">{opt.title}</h3>
                <ul className="space-y-2">
                  {opt.points.map((p, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-500">
                      <span className="text-[#E55820] mt-1">✓</span> {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8 max-w-3xl">
          <SectionHeading title="Frequently Asked Questions" accentChar="." align="left" className="mb-8" />
          <div className="space-y-4">
            {localFaqs.map(({ q, a }) => (
              <div key={q} className="border-b border-gray-100 pb-4">
                <h3 className="font-semibold text-[#1A1A1A] text-sm mb-2 text-[#E55820]">{q}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/faq" className="text-[#E55820] text-sm font-semibold hover:underline">
              View All FAQs →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#2A2C2E] text-white text-center">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8 space-y-5">
          <h2 className="text-2xl md:text-3xl font-bold">Ready to start investing?</h2>
          <p className="text-gray-400 text-sm max-w-md mx-auto">
            Join thousands of investors building wealth through strategic real estate investments.
          </p>
          <a
            href={`${process.env.NEXT_PUBLIC_APP_URL}/register`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-[#E55820] hover:bg-[#C44A15] text-white font-semibold rounded-md transition-colors"
          >
            Create Free Account →
          </a>
        </div>
      </section>
    </>
  );
}
