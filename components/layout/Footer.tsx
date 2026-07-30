import Link from 'next/link';
import {
  RiInstagramLine,
  RiTiktokLine,
  RiWhatsappLine,
  RiLinkedinBoxLine,
  RiYoutubeLine,
} from 'react-icons/ri';
import { FOOTER_LINKS, CONTACT } from '@/lib/constants';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-[#39383E] text-white">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

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
            <p className="text-gray-300 text-sm">{CONTACT.phone}</p>
            <p className="text-gray-300 text-sm">{CONTACT.email}</p>
            <div className="flex items-center gap-3 pt-1">
              <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-[#E55820] transition-colors">
                <RiInstagramLine className="w-5 h-5" />
              </a>
              <a href={CONTACT.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-gray-400 hover:text-[#E55820] transition-colors">
                <RiTiktokLine className="w-5 h-5" />
              </a>
              <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-gray-400 hover:text-[#E55820] transition-colors">
                <RiWhatsappLine className="w-5 h-5" />
              </a>
              <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-[#E55820] transition-colors">
                <RiLinkedinBoxLine className="w-5 h-5" />
              </a>
              <a href={CONTACT.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-gray-400 hover:text-[#E55820] transition-colors">
                <RiYoutubeLine className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Company links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Investment links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Investment</h4>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.investment.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.resources.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-sm">© 2025 Needhomes Property Investment Limited. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="text-gray-500 text-sm hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <span className="text-gray-600">•</span>
            <Link href="/terms" className="text-gray-500 text-sm hover:text-gray-300 transition-colors">Terms and Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
