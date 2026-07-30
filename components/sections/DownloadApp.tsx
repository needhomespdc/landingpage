'use client';
import { useState } from 'react';
import { RiAppleFill, RiGooglePlayFill } from 'react-icons/ri';

export function DownloadApp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name || !email) return;
    setSent(true);
  }

  return (
    <section className="py-16 bg-gradient-to-br from-[#0D1117] via-[#111827] to-[#0D1117] text-white">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">

          {/* Left — App download */}
          <div className="space-y-6 flex-1">
            <h2 className="text-2xl md:text-3xl font-bold leading-snug">
              Download our Mobile App
            </h2>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-5 py-3 bg-transparent border border-white/40 hover:border-white rounded-lg text-white font-medium transition-colors min-w-[160px]"
              >
                <RiAppleFill className="w-6 h-6 shrink-0" />
                <span className="text-sm font-semibold">Get On iPhone</span>
              </a>
              <a
                href="https://play.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-5 py-3 bg-transparent border border-white/40 hover:border-white rounded-lg text-white font-medium transition-colors min-w-[160px]"
              >
                <RiGooglePlayFill className="w-6 h-6 shrink-0 text-[#34D399]" />
                <span className="text-sm font-semibold">Get On Android</span>
              </a>
            </div>
          </div>

          {/* Right — Newsletter card */}
          <div className="w-full md:w-[360px] shrink-0 rounded-2xl border border-[#E55820] bg-[#111827] p-6 space-y-4">
            <div>
              <h3 className="text-lg font-bold text-white">NewsLetter</h3>
              <p className="text-gray-400 text-sm mt-1">Subscribe To Newsletter For Updates</p>
            </div>

            {sent ? (
              <p className="text-green-400 text-sm py-4">Thanks for subscribing!</p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-[#1E2A3A] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-500 outline-none focus:border-[#E55820] transition-colors"
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#1E2A3A] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-500 outline-none focus:border-[#E55820] transition-colors"
                />
                <button
                  type="submit"
                  className="w-full bg-[#1A1A1A] hover:bg-black text-white font-semibold text-sm py-2.5 rounded-lg transition-colors"
                >
                  Send
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
