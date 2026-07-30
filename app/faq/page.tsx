'use client';
import { useState } from 'react';
import { RiAddLine, RiSubtractLine } from 'react-icons/ri';
import { faqs } from '@/data/faqs';

export default function FAQPage() {
  const [open, setOpen] = useState<string | null>('create-account');

  return (
    <>
      {/* Hero */}
      <section className="bg-[#333D42] text-white py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold">
            FAQs<span className="text-[#E55820]">.</span>
          </h1>
        </div>
      </section>

      {/* FAQ list */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8 max-w-3xl">
          <div className="space-y-3">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className={`border rounded-xl overflow-hidden transition-colors ${open === faq.id ? 'border-[#E55820]' : 'border-gray-200'}`}
              >
                <button
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                  onClick={() => setOpen(open === faq.id ? null : faq.id)}
                >
                  <span className={`text-sm font-medium ${open === faq.id ? 'text-[#E55820]' : 'text-[#1A1A1A]'}`}>
                    {faq.question}
                  </span>
                  <span className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ml-4 ${open === faq.id ? 'bg-[#E55820] text-white' : 'border border-gray-300 text-gray-500'}`}>
                    {open === faq.id ? <RiSubtractLine className="w-4 h-4" /> : <RiAddLine className="w-4 h-4" />}
                  </span>
                </button>
                {open === faq.id && (
                  <div className="px-6 pb-5">
                    <p className="text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
