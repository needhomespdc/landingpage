'use client';
import { useState } from 'react';
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
      <section className="bg-[#333D42] text-white py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold">
            Contact us<span className="text-[#E55820]">.</span>
          </h1>
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
                <div className="bg-[#2A2C2E] rounded-xl p-5">
                  <h3 className="text-white font-semibold text-sm mb-3">Phone & WhatsApp</h3>
                  <a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 text-gray-300 text-sm hover:text-white transition-colors mb-2">
                    <RiPhoneLine className="w-4 h-4 text-[#E55820]" />
                    {CONTACT.phone}
                  </a>
                  <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-300 text-sm hover:text-white transition-colors">
                    <RiWhatsappLine className="w-4 h-4 text-[#E55820]" />
                    WhatsApp
                  </a>
                </div>
                <div className="bg-[#2A2C2E] rounded-xl p-5">
                  <h3 className="text-white font-semibold text-sm mb-3">Email</h3>
                  <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-2 text-gray-300 text-sm hover:text-white transition-colors">
                    <RiMailLine className="w-4 h-4 text-[#E55820]" />
                    {CONTACT.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Right form */}
            <div className="bg-[#2A2C2E] rounded-2xl p-8">
              <h2 className="text-white text-xl font-bold mb-6">
                Send a message<span className="text-[#E55820]">.</span>
              </h2>
              {sent ? (
                <div className="text-center py-8">
                  <p className="text-[#E55820] text-lg font-semibold">Message sent!</p>
                  <p className="text-gray-400 text-sm mt-2">We&apos;ll get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-gray-400 text-xs font-medium mb-1 block">FIRST NAME *</label>
                      <input
                        type="text"
                        required
                        value={form.firstName}
                        onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                        className="w-full bg-[#1E2022] border border-white/10 rounded-md px-3 py-2.5 text-white text-sm focus:outline-none focus:border-[#E55820]"
                      />
                    </div>
                    <div>
                      <label className="text-gray-400 text-xs font-medium mb-1 block">LAST NAME *</label>
                      <input
                        type="text"
                        required
                        value={form.lastName}
                        onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                        className="w-full bg-[#1E2022] border border-white/10 rounded-md px-3 py-2.5 text-white text-sm focus:outline-none focus:border-[#E55820]"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-gray-400 text-xs font-medium mb-1 block">TELEPHONE NO *</label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full bg-[#1E2022] border border-white/10 rounded-md px-3 py-2.5 text-white text-sm focus:outline-none focus:border-[#E55820]"
                      />
                    </div>
                    <div>
                      <label className="text-gray-400 text-xs font-medium mb-1 block">EMAIL ADDRESS *</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full bg-[#1E2022] border border-white/10 rounded-md px-3 py-2.5 text-white text-sm focus:outline-none focus:border-[#E55820]"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-gray-400 text-xs font-medium mb-1 block">YOUR MESSAGE</label>
                    <textarea
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-[#1E2022] border border-white/10 rounded-md px-3 py-2.5 text-white text-sm focus:outline-none focus:border-[#E55820] resize-none"
                    />
                  </div>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    By providing your name, phone number and email you consent to NeedHomes Property Investment Limited&apos;s use of your personal data in accordance with the{' '}
                    <a href="/privacy-policy" className="text-[#E55820] hover:underline">Privacy Policy</a>.
                  </p>
                  <button
                    type="submit"
                    className="w-full py-3 bg-[#E55820] hover:bg-[#C44A15] text-white font-bold rounded-md transition-colors"
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
