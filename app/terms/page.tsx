import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Terms and Conditions' };

export default function TermsPage() {
  return (
    <>
      <section className="bg-[#333D42] text-white py-16">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
          <h1 className="text-4xl font-bold">Terms and Conditions<span className="text-[#E55820]">.</span></h1>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-[800px] px-4 md:px-6 lg:px-8">
          <p className="text-gray-600 text-sm mb-6">Last updated: January 2025</p>
          <p className="text-gray-700 leading-relaxed mb-4">
            By accessing and using the NeedHomes platform, you agree to be bound by these Terms and Conditions.
          </p>
          <h2 className="text-xl font-bold text-[#1A1A1A] mt-6 mb-3">Investment Risk</h2>
          <p className="text-gray-700 leading-relaxed mb-4">All investments carry risk. Past performance is not indicative of future results. Please read all investment materials carefully before committing funds.</p>
          <h2 className="text-xl font-bold text-[#1A1A1A] mt-6 mb-3">Contact</h2>
          <p className="text-gray-700 leading-relaxed">For questions, contact surport@needhomespdc.com.</p>
        </div>
      </section>
    </>
  );
}
