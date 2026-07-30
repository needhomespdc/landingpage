'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { RiMenuLine, RiCloseLine, RiArrowDownSLine } from 'react-icons/ri';
import { NAV_LINKS, APP_URL } from '@/lib/constants';
import { cn } from '@/lib/utils';

const dropdownGroups = [
  { key: 'company',    label: 'Company',    items: NAV_LINKS.company },
  { key: 'investment', label: 'Investment', items: NAV_LINKS.investment },
  { key: 'resources',  label: 'Resources',  items: NAV_LINKS.resources },
] as const;

function DropdownMenu({ items, isOpen }: { items: readonly { label: string; href: string }[]; isOpen: boolean }) {
  return (
    <div className={cn(
      'absolute top-full left-0 mt-1 w-52 bg-white rounded-lg shadow-lg border border-gray-100 py-1 z-50 transition-all duration-150',
      isOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-1'
    )}>
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-orange-50 hover:text-[#E55820] transition-colors"
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}

export function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
        setMobileOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <nav ref={navRef} className="sticky top-0 z-50 bg-[#2A2C2E] shadow-md">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image
              src="/logo/logo-hero-white.png"
              alt="NeedHomes"
              width={110}
              height={110}
              priority
              className="object-contain"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {dropdownGroups.map((group) => (
              <div
                key={group.key}
                className="relative"
                onMouseEnter={() => setOpenDropdown(group.key)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="flex items-center gap-1 px-3 py-2 text-sm text-white/90 hover:text-white font-medium transition-colors">
                  {group.label}
                  <RiArrowDownSLine className={cn('w-4 h-4 transition-transform duration-200', openDropdown === group.key && 'rotate-180')} />
                </button>
                <DropdownMenu items={group.items} isOpen={openDropdown === group.key} />
              </div>
            ))}
            <Link href="/marketplace" className="px-3 py-2 text-sm text-white/90 hover:text-white font-medium transition-colors">
              Marketplace
            </Link>
            <Link href="/contact" className="px-3 py-2 text-sm text-white/90 hover:text-white font-medium transition-colors">
              Contact Us
            </Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-[#E55820] hover:bg-[#C44A15] text-white text-sm font-semibold rounded-md transition-colors"
            >
              Get Started
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <RiCloseLine className="w-6 h-6" /> : <RiMenuLine className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#1E2022] border-t border-white/10">
          <div className="px-4 py-4 space-y-1">
            {dropdownGroups.map((group) => (
              <div key={group.key}>
                <button
                  className="flex items-center justify-between w-full px-3 py-2.5 text-white/90 font-medium text-sm"
                  onClick={() => setMobileExpanded(mobileExpanded === group.key ? null : group.key)}
                >
                  {group.label}
                  <RiArrowDownSLine className={cn('w-4 h-4 transition-transform', mobileExpanded === group.key && 'rotate-180')} />
                </button>
                {mobileExpanded === group.key && (
                  <div className="pl-4 space-y-1 pb-2">
                    {group.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-3 py-2 text-sm text-white/70 hover:text-white"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link href="/marketplace" className="block px-3 py-2.5 text-white/90 font-medium text-sm" onClick={() => setMobileOpen(false)}>
              Marketplace
            </Link>
            <Link href="/contact" className="block px-3 py-2.5 text-white/90 font-medium text-sm" onClick={() => setMobileOpen(false)}>
              Contact Us
            </Link>
            <div className="pt-3">
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-5 py-2.5 bg-[#E55820] hover:bg-[#C44A15] text-white text-sm font-semibold rounded-md transition-colors"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
