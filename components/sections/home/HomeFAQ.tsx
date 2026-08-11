'use client';
import { useState } from 'react';
import Link from 'next/link';
import { RiAddLine, RiSubtractLine } from 'react-icons/ri';
import { faqs } from '@/data/faqs';

const homeFaqs = faqs.slice(0, 5);

export function HomeFAQ() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section className="py-16 bg-[#f3f4f6]">
      <div className="mx-auto max-w-300 px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <div className="space-y-4">
            <p className="text-[#E55820] font-semibold text-sm">NEEDHOMES Frequently Asked Questions (FAQ)</p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A]">
              Common frequently asked question in real estate investment at Needhomes.
            </h2>
            <Link
              href="/contact"
              className="inline-block px-6 py-3 bg-[#E55820] hover:bg-[#C44A15] text-white font-semibold text-sm rounded-md transition-colors"
            >
              Contact Us
            </Link>
          </div>

          {/* Right accordion */}
          <div className="space-y-3">
            {homeFaqs.map((faq) => (
              <div
                key={faq.id}
                className="border border-gray-200 rounded-xl overflow-hidden"
              >
                <button
                  className="w-full flex items-center justify-between px-5 py-4 text-left"
                  onClick={() => setOpen(open === faq.id ? null : faq.id)}
                >
                  <span className={`text-sm font-medium ${open === faq.id ? 'text-[#E55820]' : 'text-[#1A1A1A]'}`}>
                    {faq.question}
                  </span>
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ml-3 ${open === faq.id ? 'bg-[#E55820] text-white' : 'bg-gray-100 text-gray-500'}`}>
                    {open === faq.id ? <RiSubtractLine className="w-4 h-4" /> : <RiAddLine className="w-4 h-4" />}
                  </span>
                </button>
                {open === faq.id && (
                  <div className="px-5 pb-4">
                    <p className="text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-10">
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 text-[#E55820] font-semibold text-sm hover:underline"
          >
            View More FAQs →
          </Link>
        </div>
      </div>
    </section>
  );
}
