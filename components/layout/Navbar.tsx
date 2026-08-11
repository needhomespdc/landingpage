'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { RiMenuLine, RiCloseLine, RiArrowDownSLine } from 'react-icons/ri';
import { NAV_LINKS, BLOG_URL } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { WaitlistModal } from '@/components/shared/WaitlistModal';

const dropdownGroups = [
  { key: 'company',    label: 'Company',    items: NAV_LINKS.company },
  { key: 'investment', label: 'Investment', items: NAV_LINKS.investment },
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
  const [waitlistOpen, setWaitlistOpen] = useState(false);
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

  const openWaitlist = () => {
    setMobileOpen(false);
    setWaitlistOpen(true);
  };

  return (
    <nav ref={navRef} className="sticky top-0 z-50 bg-black shadow-md">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex shrink-0 items-center gap-2">
            <Image
              src="/logo/logo-hero-white.png"
              alt="NeedHomes"
              width={110}
              height={110}
              priority
              className="object-contain"
            />
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {dropdownGroups.map((group) => (
              <div
                key={group.key}
                className="relative"
                onMouseEnter={() => setOpenDropdown(group.key)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-white/90 transition-colors hover:text-white">
                  {group.label}
                  <RiArrowDownSLine className={cn('h-4 w-4 transition-transform duration-200', openDropdown === group.key && 'rotate-180')} />
                </button>
                <DropdownMenu items={group.items} isOpen={openDropdown === group.key} />
              </div>
            ))}
            <Link href="/marketplace" className="px-3 py-2 text-sm font-medium text-white/90 transition-colors hover:text-white">
              Marketplace
            </Link>
            <a
              href={BLOG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 text-sm font-medium text-white/90 transition-colors hover:text-white"
            >
              Blog
            </a>
            <Link href="/contact" className="px-3 py-2 text-sm font-medium text-white/90 transition-colors hover:text-white">
              Contact Us
            </Link>
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <button
              type="button"
              onClick={openWaitlist}
              className="rounded-md border border-white/60 px-5 py-2 text-sm font-semibold text-white transition-all duration-200 hover:border-white hover:bg-white hover:text-[#2A2C2E]"
            >
              Download App
            </button>
            <button
              type="button"
              onClick={openWaitlist}
              className="rounded-md bg-[#E55820] px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#C44A15]"
            >
              Get Started
            </button>
          </div>

          <button
            className="p-2 text-white lg:hidden"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <RiCloseLine className="h-6 w-6" /> : <RiMenuLine className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-black lg:hidden">
          <div className="space-y-1 px-4 py-4">
            {dropdownGroups.map((group) => (
              <div key={group.key}>
                <button
                  className="flex w-full items-center justify-between px-3 py-2.5 text-sm font-medium text-white/90"
                  onClick={() => setMobileExpanded(mobileExpanded === group.key ? null : group.key)}
                >
                  {group.label}
                  <RiArrowDownSLine className={cn('h-4 w-4 transition-transform', mobileExpanded === group.key && 'rotate-180')} />
                </button>
                {mobileExpanded === group.key && (
                  <div className="space-y-1 pb-2 pl-4">
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
            <Link href="/marketplace" className="block px-3 py-2.5 text-sm font-medium text-white/90" onClick={() => setMobileOpen(false)}>
              Marketplace
            </Link>
            <a
              href={BLOG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-2.5 text-sm font-medium text-white/90"
              onClick={() => setMobileOpen(false)}
            >
              Blog
            </a>
            <Link href="/contact" className="block px-3 py-2.5 text-sm font-medium text-white/90" onClick={() => setMobileOpen(false)}>
              Contact Us
            </Link>
            <div className="space-y-2 pt-3">
              <button
                type="button"
                onClick={openWaitlist}
                className="block w-full rounded-md border border-white/60 px-5 py-2.5 text-center text-sm font-semibold text-white transition-all duration-200 hover:border-white hover:bg-white hover:text-[#2A2C2E]"
              >
                Download App
              </button>
              <button
                type="button"
                onClick={openWaitlist}
                className="block w-full rounded-md bg-[#E55820] px-5 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-[#C44A15]"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}

      <WaitlistModal open={waitlistOpen} onOpenChange={setWaitlistOpen} />
    </nav>
  );
}
