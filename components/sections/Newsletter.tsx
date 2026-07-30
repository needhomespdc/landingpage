'use client';
import { useState } from 'react';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) { setSent(true); }
  };

  return (
    <section className="py-14 bg-white border-y border-gray-100">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
        <div className="max-w-lg mx-auto text-center space-y-5">
          <h2 className="text-2xl font-bold text-[#1A1A1A]">NewsLetter</h2>
          <p className="text-gray-500 text-sm">Subscribe To Newsletter For Updates</p>
          {sent ? (
            <p className="text-[#E55820] font-medium">Thank you for subscribing!</p>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Name"
                className="flex-1 px-4 py-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-[#E55820]"
              />
              <button
                type="submit"
                className="px-6 py-2.5 bg-[#E55820] hover:bg-[#C44A15] text-white font-semibold text-sm rounded-md transition-colors"
              >
                Send
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
