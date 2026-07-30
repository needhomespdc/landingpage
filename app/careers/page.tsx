import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Careers' };

const values = [
  { title: 'Innovation.',   desc: 'We constantly seek new ways to improve the real estate investment experience.' },
  { title: 'Integrity.',    desc: 'Transparency and ethical conduct are the foundation of everything we do.' },
  { title: 'Excellence.',   desc: 'We set high standards and consistently deliver exceptional results.' },
  { title: 'Collaboration.', desc: 'We believe the best outcomes come from diverse perspectives working together.' },
];

const benefits = [
  { num: '1', title: 'Competitive Salary',        desc: 'Industry-leading compensation packages with performance bonuses and equity opportunities.' },
  { num: '2', title: 'Professional Growth',        desc: 'Access to training programs, conferences, and mentorship from industry leaders.' },
  { num: '3', title: 'Health & Wellness',          desc: 'Comprehensive health insurance coverage for you and your immediate family.' },
  { num: '4', title: 'Flexible Work',              desc: 'Hybrid work environment with flexible hours to support work-life balance.' },
  { num: '5', title: 'Investment Opportunities',   desc: 'Exclusive access to Needhomes investment deals with preferential terms for employees.' },
  { num: '6', title: 'Team Culture',               desc: 'Collaborative environment with regular team events and professional development sessions.' },
];

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#333D42] text-white py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold">
            Careers<span className="text-[#E55820]">.</span>
          </h1>
          <p className="text-gray-400 mt-3 text-base">Join us in transforming the future of real estate investment in Africa.</p>
        </div>
      </section>

      {/* Why NeedHomes */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] leading-snug mb-6">
                Build the future of property wealth with Africa&apos;s leading PropTech innovators.
              </h2>
            </div>
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                At NeedHomes, we&apos;re not just building properties — we&apos;re building futures. Our team is composed of passionate professionals dedicated to making real estate investment accessible and profitable across Africa.
              </p>
              <p className="text-gray-600 leading-relaxed">
                If you&apos;re driven by innovation, committed to excellence, and ready to make a meaningful impact, we want to hear from you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-14 bg-gray-50">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A1A1A] mb-2">
            Our Values<span className="text-[#E55820]">.</span>
          </h2>
          <p className="text-gray-500 text-sm mb-10">These core values guide everything we do and define who we are as a company.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-xl p-6 border-b-2 border-[#E55820] shadow-sm">
                <h3 className="font-bold text-[#1A1A1A] mb-3">{v.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-[#1A1A1A]">
                Open Positions<span className="text-[#E55820]">.</span>
              </h2>
              <p className="text-gray-500 text-sm mt-1">Explore current opportunities to join our growing team.</p>
            </div>
            <span className="text-gray-400 text-sm flex items-center gap-1">
              <span className="w-4 h-4 inline-block">👤</span> 0 positions available
            </span>
          </div>
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="border-l-4 border-[#E55820] bg-gray-50 rounded-r-xl p-5 space-y-2 animate-pulse">
                <div className="h-4 bg-gray-200 rounded w-1/3" />
                <div className="h-3 bg-gray-200 rounded w-2/3" />
                <div className="h-3 bg-gray-200 rounded w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A1A1A] mb-2">
            Benefits & Perks<span className="text-[#E55820]">.</span>
          </h2>
          <p className="text-gray-500 text-sm mb-10">We invest in our team because we believe great people deliver great results.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div key={b.num} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-8 h-8 bg-orange-50 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-[#E55820] font-bold text-sm">{b.num}</span>
                </div>
                <h3 className="font-semibold text-[#1A1A1A] mb-2">{b.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#2A2C2E] text-white text-center">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8 space-y-5">
          <h2 className="text-2xl md:text-3xl font-bold">Don&apos;t see a role that fits?</h2>
          <p className="text-gray-400 text-sm max-w-md mx-auto">
            We&apos;re always looking for talented individuals to join our team. Send us your resume and tell us how you can contribute to our mission.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#E55820] hover:bg-[#C44A15] text-white font-semibold rounded-md transition-colors"
          >
            Get in Touch →
          </Link>
        </div>
      </section>
    </>
  );
}
