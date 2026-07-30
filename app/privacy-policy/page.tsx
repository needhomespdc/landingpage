import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Privacy Policy' };

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-[#333D42] text-white py-16">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
          <h1 className="text-4xl font-bold">Privacy Policy<span className="text-[#E55820]">.</span></h1>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-[800px] px-4 md:px-6 lg:px-8 prose prose-gray max-w-none">
          <p className="text-gray-600 text-sm">Last updated: January 2025</p>
          <p className="text-gray-700 leading-relaxed">
            NeedHomes Property Investment Limited (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) is committed to protecting your personal information and your right to privacy.
          </p>
          <h2 className="text-xl font-bold text-[#1A1A1A] mt-6 mb-3">Information We Collect</h2>
          <p className="text-gray-700 leading-relaxed">We collect information you provide directly to us when you create an account, make investments, or contact our support team.</p>
          <h2 className="text-xl font-bold text-[#1A1A1A] mt-6 mb-3">How We Use Your Information</h2>
          <p className="text-gray-700 leading-relaxed">We use your information to provide, maintain, and improve our services, process transactions, and send you related information.</p>
          <h2 className="text-xl font-bold text-[#1A1A1A] mt-6 mb-3">Contact Us</h2>
          <p className="text-gray-700 leading-relaxed">If you have questions about this Privacy Policy, please contact us at surport@needhomespdc.com.</p>
        </div>
      </section>
    </>
  );
}
