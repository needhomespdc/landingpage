'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  RiInstagramLine,
  RiTiktokLine,
  RiWhatsappLine,
  RiLinkedinBoxLine,
  RiYoutubeLine,
} from 'react-icons/ri';
import { FOOTER_LINKS, CONTACT, BLOG_URL } from '@/lib/constants';

export function Footer() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleWaitlistSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);

    if (!email.trim()) {
      setError('Please enter your email.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim() }),
      });

      const data = (await response.json().catch(() => null)) as {
        message?: string;
      } | null;

      if (!response.ok) {
        throw new Error(data?.message || 'Could not join the waitlist.');
      }

      setEmail('');
      window.open(CONTACT.whatsappCommunity, '_blank', 'noopener,noreferrer');
    } catch (submitError) {
      setError(
        submitError instanceof Error
          ? submitError.message
          : 'Could not join the waitlist.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-[#39383E] text-white">
      <div className="mx-auto max-w-[1200px] px-4 py-14 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="space-y-4">
            <Image
              src="/logo/logo-hero-white.png"
              alt="NeedHomes"
              width={110}
              height={110}
              priority
              className="object-contain"
            />
            <p className="text-sm text-gray-300">{CONTACT.phone}</p>
            <p className="text-sm text-gray-300">{CONTACT.email}</p>
            <div className="flex items-center gap-3 pt-1">
              <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 transition-colors hover:text-[#E55820]">
                <RiInstagramLine className="h-5 w-5" />
              </a>
              <a href={CONTACT.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-gray-400 transition-colors hover:text-[#E55820]">
                <RiTiktokLine className="h-5 w-5" />
              </a>
              <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-gray-400 transition-colors hover:text-[#E55820]">
                <RiWhatsappLine className="h-5 w-5" />
              </a>
              <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 transition-colors hover:text-[#E55820]">
                <RiLinkedinBoxLine className="h-5 w-5" />
              </a>
              <a href={CONTACT.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-gray-400 transition-colors hover:text-[#E55820]">
                <RiYoutubeLine className="h-5 w-5" />
              </a>
            </div>
            {/* App store buttons temporarily hidden until public release
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block transition-opacity hover:opacity-90"
                aria-label="Download on the App Store"
              >
                <Image
                  src="/logo/apple.png"
                  alt="Download on the App Store"
                  width={140}
                  height={42}
                  className="h-10 w-auto"
                />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.needhomes.need_homes"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block transition-opacity hover:opacity-90"
                aria-label="Get it on Google Play"
              >
                <Image
                  src="/logo/google.png"
                  alt="Get it on Google Play"
                  width={150}
                  height={42}
                  className="h-10 w-auto"
                />
              </a>
            </div>
            */}
          </div>

          {/* Company links */}
          <div>
            <h4 className="mb-4 font-semibold text-white">Company</h4>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={BLOG_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 transition-colors hover:text-white"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Investment links */}
          <div>
            <h4 className="mb-4 font-semibold text-white">Investment</h4>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.investment.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Waitlist */}
          <div>
            <h4 className="mb-2 font-semibold text-white">Join our waitlist</h4>
            <p className="mb-4 text-sm leading-relaxed text-gray-400">
              Be first to know when the app launches, then hop into our WhatsApp community.
            </p>
            <form onSubmit={handleWaitlistSubmit} className="space-y-3">
              <label className="block">
                <span className="sr-only">Email</span>
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="ada@email.com"
                  className="w-full rounded-md border border-white/15 bg-white/5 px-3.5 py-2.5 text-sm text-white outline-none transition-colors placeholder:text-gray-500 focus:border-[#E55820]"
                />
              </label>
              {error ? (
                <p className="text-sm text-red-400" role="alert">
                  {error}
                </p>
              ) : null}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-md bg-[#E55820] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#C44A15] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? 'Submitting...' : 'Join waitlist and community'}
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-3 px-4 py-4 sm:flex-row md:px-6 lg:px-8">
          <p className="text-sm text-gray-500">
            © 2026 Needhomes Property Investment Limited. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="text-sm text-gray-500 transition-colors hover:text-gray-300">
              Privacy Policy
            </Link>
            <span className="text-gray-600">•</span>
            <Link href="/terms" className="text-sm text-gray-500 transition-colors hover:text-gray-300">
              Terms and Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
