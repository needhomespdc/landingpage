import type { Metadata } from 'next';
import Link from 'next/link';
import {
  RiLineChartLine,
  RiShieldCheckLine,
  RiGroupLine,
  RiFlashlightLine,
} from 'react-icons/ri';
import { partnerStats } from '@/data/stats';

export const metadata: Metadata = { title: 'Partner with Us' };

const benefits = [
  { Icon: RiLineChartLine,  title: 'Strategic Growth.',    desc: 'Access to prime real estate opportunities across Africa with proven ROI and sustainable growth potential.' },
  { Icon: RiShieldCheckLine, title: 'Risk Mitigation.',    desc: 'Our rigorous due diligence process and legal framework ensure your investments are protected and compliant.' },
  { Icon: RiGroupLine,       title: 'Network Access.',     desc: 'Join a community of forward-thinking investors and developers shaping the future of African real estate.' },
  { Icon: RiFlashlightLine,  title: 'Fast Execution.',     desc: 'Streamlined processes and technology-driven solutions enable quick deployment and efficient management.' },
];

const process = [
  { num: '01', title: 'Initial Consultation.',     desc: 'Schedule a call with our partnership team to discuss your goals, investment capacity, and preferred partnership model.' },
  { num: '02', title: 'Due Diligence.',             desc: 'We conduct thorough background checks and share detailed project documentation, financial projections, and legal frameworks.' },
  { num: '03', title: 'Agreement Structuring.',     desc: 'Our legal team works with you to create a partnership agreement that protects all parties and aligns incentives.' },
  { num: '04', title: 'Project Execution.',         desc: 'Begin collaboration with regular updates, transparent reporting, and dedicated support throughout the project lifecycle.' },
];

export default function PartnerWithUsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#333D42] text-white py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold">
            Partner with Us<span className="text-[#E55820]">.</span>
          </h1>
          <p className="text-gray-400 mt-4 text-base max-w-xl">
            Join forces with NeedHomes to unlock exceptional real estate opportunities across Africa. Together, we build wealth that lasts.
          </p>
        </div>
      </section>

      {/* Why partner */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A]">
              Why partner with NeedHomes<span className="text-[#E55820]">?</span>
            </h2>
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                At NeedHomes, we believe that the most impactful real estate ventures are built on strong partnerships. Whether you&apos;re a developer, investor, or institution, we offer collaborative opportunities designed to maximize value and minimize risk.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our track record speaks for itself: over ₦500 million invested, multiple successful projects delivered, and a growing network of satisfied partners across Africa.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {benefits.map((b) => (
              <div key={b.title} className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm border-b-2 border-b-[#E55820]">
                <b.Icon className="w-7 h-7 text-[#E55820] mb-4" />
                <h3 className="font-bold text-[#1A1A1A] mb-2">{b.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership process */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-2">
            Our Partnership Process<span className="text-[#E55820]">.</span>
          </h2>
          <p className="text-gray-500 text-sm mb-10">
            We&apos;ve streamlined our partnership onboarding to ensure transparency, efficiency, and mutual success from day one.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p, i) => (
              <div key={p.num} className="relative">
                <p className="text-5xl font-bold text-gray-100 mb-3">{p.num}</p>
                <h3 className="font-bold text-[#1A1A1A] mb-2">{p.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
                {i < 3 && (
                  <span className="hidden lg:block absolute top-6 -right-3 text-[#E55820] text-xl">→</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {partnerStats.map((stat, i) => (
              <div
                key={stat.id}
                className={`rounded-xl p-8 ${i === 1 ? 'bg-[#E55820] text-white' : 'bg-[#2A2C2E] text-white'}`}
              >
                <p className={`text-xs font-semibold mb-3 ${i === 1 ? 'text-white/80' : 'text-[#E55820]'}`}>{stat.label}</p>
                <p className="text-3xl font-bold mb-3">{stat.value}</p>
                <p className={`text-sm leading-relaxed ${i === 1 ? 'text-white/80' : 'text-gray-400'}`}>{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#2A2C2E]">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8 text-center space-y-5">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Ready to build wealth together<span className="text-[#E55820]">?</span>
          </h2>
          <p className="text-gray-400 text-sm max-w-lg mx-auto">
            Let&apos;s discuss how a partnership with NeedHomes can accelerate your real estate investment goals and create lasting value.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#E55820] hover:bg-[#C44A15] text-white font-semibold rounded-md transition-colors"
          >
            Become a Partner Now →
          </Link>
        </div>
      </section>
    </>
  );
}
