'use client';
import { useState } from 'react';
import Image from 'next/image';
import { RiMapPinLine, RiPhoneLine, RiMailLine, RiWhatsappLine, RiTimeLine } from 'react-icons/ri';
import { CONTACT } from '@/lib/constants';

export default function ContactPage() {
  const [form, setForm] = useState({ firstName: '', lastName: '', phone: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="overflow-hidden bg-black text-white">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-end gap-6 px-4 lg:grid-cols-2 lg:gap-10 lg:px-8">
          <div className="pt-10 pb-10 md:pt-12 md:pb-12 lg:pt-14 lg:pb-14">
            <h1 className="text-4xl font-bold md:text-5xl">
              Contact us<span className="text-[#E55820]">.</span>
            </h1>
          </div>
          <div className="mx-auto w-full max-w-[240px] sm:max-w-[280px] lg:mx-0 lg:ml-auto lg:max-w-[320px]">
            <Image
              src="/images/contact/contact.png"
              alt="NeedHomes support representative ready to help"
              width={1536}
              height={1024}
              priority
              className="h-auto w-full"
              sizes="(max-width: 1024px) 280px, 320px"
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left info */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <RiTimeLine className="w-4 h-4 text-[#E55820]" />
                Our offices are open Monday to Friday, 24 hours / 7 days a week, excluding public holidays.
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <RiMapPinLine className="w-5 h-5 text-[#E55820]" />
                  <h3 className="font-bold text-[#1A1A1A]">Our Office</h3>
                </div>
                <p className="text-sm text-gray-600">{CONTACT.address}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-gray-50 p-5">
                  <h3 className="mb-3 text-sm font-semibold text-[#1A1A1A]">Phone & WhatsApp</h3>
                  <a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`} className="mb-2 flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-[#1A1A1A]">
                    <RiPhoneLine className="h-4 w-4 text-[#E55820]" />
                    {CONTACT.phone}
                  </a>
                  <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-[#1A1A1A]">
                    <RiWhatsappLine className="h-4 w-4 text-[#E55820]" />
                    WhatsApp
                  </a>
                </div>
                <div className="rounded-xl bg-gray-50 p-5">
                  <h3 className="mb-3 text-sm font-semibold text-[#1A1A1A]">Email</h3>
                  <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-[#1A1A1A]">
                    <RiMailLine className="h-4 w-4 text-[#E55820]" />
                    {CONTACT.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Right form */}
            <div className="rounded-2xl bg-gray-50 p-8">
              <h2 className="mb-6 text-xl font-bold text-[#1A1A1A]">
                Send a message<span className="text-[#E55820]">.</span>
              </h2>
              {sent ? (
                <div className="py-8 text-center">
                  <p className="text-lg font-semibold text-[#E55820]">Message sent!</p>
                  <p className="mt-2 text-sm text-gray-500">We&apos;ll get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="mb-1 block text-xs font-medium text-gray-500">FIRST NAME *</label>
                      <input
                        type="text"
                        required
                        value={form.firstName}
                        onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                        className="w-full rounded-md border border-gray-200 bg-white px-3 py-2.5 text-sm text-[#1A1A1A] focus:border-[#E55820] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="mb-1 block text-xs font-medium text-gray-500">LAST NAME *</label>
                      <input
                        type="text"
                        required
                        value={form.lastName}
                        onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                        className="w-full rounded-md border border-gray-200 bg-white px-3 py-2.5 text-sm text-[#1A1A1A] focus:border-[#E55820] focus:outline-none"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="mb-1 block text-xs font-medium text-gray-500">TELEPHONE NO *</label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full rounded-md border border-gray-200 bg-white px-3 py-2.5 text-sm text-[#1A1A1A] focus:border-[#E55820] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="mb-1 block text-xs font-medium text-gray-500">EMAIL ADDRESS *</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full rounded-md border border-gray-200 bg-white px-3 py-2.5 text-sm text-[#1A1A1A] focus:border-[#E55820] focus:outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="mb-1 block text-xs font-medium text-gray-500">YOUR MESSAGE</label>
                    <textarea
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full resize-none rounded-md border border-gray-200 bg-white px-3 py-2.5 text-sm text-[#1A1A1A] focus:border-[#E55820] focus:outline-none"
                    />
                  </div>
                  <p className="text-xs leading-relaxed text-gray-500">
                    By providing your name, phone number and email you consent to NeedHomes Property Investment Limited&apos;s use of your personal data in accordance with the{' '}
                    <a href="/privacy-policy" className="text-[#E55820] hover:underline">Privacy Policy</a>.
                  </p>
                  <button
                    type="submit"
                    className="w-full rounded-md bg-[#E55820] py-3 font-bold text-white transition-colors hover:bg-[#C44A15]"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
