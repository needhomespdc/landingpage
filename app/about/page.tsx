import type { Metadata } from 'next';
import Image from 'next/image';
import { testimonials } from '@/data/testimonials';
import { featuredProjects } from '@/data/projects';

export const metadata: Metadata = { title: 'About Us' };

const pillars = [
  { number: '01', letter: 'M', label: 'Market Intelligence' },
  { number: '02', letter: 'R', label: 'Regulatory Rigor' },
  { number: '03', letter: 'T', label: 'Technological Edge' },
  { number: '04', letter: 'S', label: 'Synergistic Partners' },
  { number: '05', letter: 'I', label: 'Investor Legacy' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#333D42] text-white py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold">
            About Us<span className="text-[#E55820]">.</span>
          </h1>
        </div>
      </section>

      {/* Mission statement */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] leading-snug mb-6">
                In a world where home ownership feels out of reach, NeedHomes stands as a vibrant force of change.
              </h2>
              <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
                <Image
                  src="/images/hero/about-person.jpg"
                  alt="Man standing in front of apartment building"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="space-y-5">
              <p className="text-gray-600 leading-relaxed">
                Needhomes is a Proptech enabled real estate investment platform focused on affordable housing, through co-development and fractional ownership that enables individual home buyers and Corporate investors to invest, discover, promote and earn returns on their investments. The platform provides tools for user onboarding, KYC verification, wallet funding/investment tracking, property document access, and milestone based. All managed under a secure, role-based admin dashboard.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We are not just a property company, we are your dedicated partners on a journey of wealth creation through strategic real estate investments.
              </p>
              <p className="text-gray-600 leading-relaxed">
                For us, success is not merely about square footage; it&apos;s about the financial security and legacy that property ownership provides.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Track record stats */}
      <section className="py-10 bg-white">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#2A2C2E] rounded-xl p-8">
              <p className="text-[#E55820] text-xs font-semibold mb-2">Track Record</p>
              <p className="text-white text-3xl font-bold">Over 1Billion</p>
              <p className="text-gray-400 text-sm mt-2">Invested so far into the company by partners who trust our vision for the African real estate market.</p>
            </div>
            <div className="bg-[#E55820] rounded-xl p-8">
              <p className="text-white/80 text-xs font-semibold mb-2">Current Round</p>
              <p className="text-white text-3xl font-bold">$1.33m (₦2 Billion)</p>
              <p className="text-white/80 text-sm mt-2">Our target now for this round to scale our property portfolio and deliver even greater value to our investors.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Keystone */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A]">
                The Keystone: The Foundation of Lasting Wealth.
              </h2>
              <p className="text-gray-600 leading-relaxed">
                In ancient architecture, the keystone is the most critical piece of an arch. It locks all other stones into position, allowing the structure to bear weight and stand the test of time.
              </p>
              <p className="text-gray-600 leading-relaxed">
                At Needhomes, we view strategic real estate as the Keystone of your financial portfolio. It is the stabilizing force that turns scattered investments into a unified, unbreakable legacy.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our approach ensures that every property you acquire through us is not just a piece of land, but a structural necessity for your long-term prosperity.
              </p>
            </div>
            <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
              <Image
                src="/images/properties/keystone-building.jpg"
                alt="Luxury apartment building"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Structural integrity */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8 space-y-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A]">Why structural integrity matters.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-gray-600 leading-relaxed">
            <p>Just as an arch distributes weight evenly to prevent collapse, Needhomes utilizes technology and market data to distribute risk and maximize yield for our partners.</p>
            <p>When you choose Needhomes, you are building on a foundation of mathematical precision and architectural performance. We don&apos;t just sell property; we engineer wealth.</p>
            <div />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: 'Our Vision.',   text: 'To be the leading real estate investment partner in Africa recognized for creating sustainable wealth through property.' },
              { label: 'Our Mission.',  text: 'To provide accessible property investment opportunities by leveraging technology, market expertise and transparent processes.' },
              { label: 'Our Promise.',  text: 'We are committed to securing your future by delivering high-yield real estate assets and exceptional value to our investors.' },
            ].map((item) => (
              <div key={item.label} className="bg-white rounded-xl p-6 border-b-2 border-[#E55820] shadow-sm">
                <h3 className="font-semibold text-[#1A1A1A] mb-3">{item.label}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* M R T S I Pillars */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-3">M R T S I: The Pillars of Prosperity.</h2>
            <p className="text-gray-500 text-sm max-w-2xl">
              Our culture is built on five structural pillars. Like the columns of a great estate, these values provide the strength, stability, and integrity required to build lasting African wealth.
            </p>
          </div>
          <div className="grid grid-cols-5 divide-x divide-gray-200 border border-gray-200 bg-white rounded-xl overflow-hidden">
            {pillars.map((p) => (
              <div key={p.letter} className="flex flex-col justify-between px-6 pt-7 pb-6 min-h-[220px]">
                <div className="space-y-5">
                  <p className="text-[#E55820] text-xs font-semibold tracking-widest uppercase">
                    PILLAR {p.number}
                  </p>
                  <p className="text-[72px] leading-none font-bold text-[#2A3A4A]">{p.letter}</p>
                  <p className="text-sm font-medium text-[#2A3A4A]">{p.label}</p>
                </div>
                <div className="w-8 h-[3px] bg-[#E55820] mt-6" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
          <p className="text-[#E55820] text-xs font-semibold tracking-widest mb-4">Testimonials</p>
          <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-10">Trusted by Hundreds of Satisfied Clients.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.id} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <p className="text-gray-600 text-sm leading-relaxed mb-4 italic">&ldquo;{t.quote}&rdquo;</p>
                <p className="font-semibold text-[#1A1A1A] text-sm">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
          <p className="text-[#E55820] text-xs font-semibold tracking-widest mb-2">Our Projects</p>
          <h2 className="text-2xl font-bold text-[#1A1A1A] mb-8">Presented below are some of our projects.</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featuredProjects.map((project) => (
              <div key={project.id} className="rounded-xl overflow-hidden shadow-sm border border-gray-100 group">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.imageSrc}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-sm text-[#1A1A1A] mb-1">{project.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
