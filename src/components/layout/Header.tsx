'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/routing';
import { navLinks, siteConfig } from '@/config/site';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Menu, X, PhoneCall, ShieldCheck } from 'lucide-react';

export const Header: React.FC = () => {
  const tNav = useTranslations('nav');
  const tCommon = useTranslations('common');
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on page navigation
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-3 sm:top-5 inset-x-0 z-50 flex justify-center px-3 sm:px-6 pointer-events-none">
      <div className="pointer-events-auto w-full max-w-6xl rounded-full bg-zinc-950/75 backdrop-blur-xl border border-white/10 hover:border-red-700/30 shadow-2xl shadow-black/80 px-4 sm:px-6 py-2 sm:py-2.5 flex items-center justify-between gap-3 sm:gap-6 transition-all duration-300">
        
        {/* Left: Clean Logo Alone (No rounded box div, No text beside it) */}
        <Link
          href="/"
          className="flex items-center shrink-0 hover:opacity-90 transition-opacity"
          title="AGZAMOV LEGAL GROUP"
        >
          <Image
            src="/logo-red.png"
            alt="Agzamov Legal Group"
            width={140}
            height={38}
            className="h-8 sm:h-9 w-auto object-contain drop-shadow-[0_0_8px_rgba(194,38,25,0.25)]"
            priority
          />
        </Link>

        {/* Center: Desktop Navigation Links (Rounded pills, Active tab text is WHITE) */}
        <nav className="hidden lg:flex items-center gap-1.5">
          {navLinks.map((item) => {
            const isActive =
              item.href === '/'
                ? pathname === '/'
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.key}
                href={item.href}
                className={`px-4 py-1.5 rounded-full text-xs tracking-wide transition-all duration-200 ${
                  isActive
                    ? 'bg-red-700 text-white font-bold shadow-md shadow-red-950/40'
                    : 'text-zinc-300 hover:text-white hover:bg-white/[0.08] font-medium'
                }`}
              >
                {tNav(item.key as any)}
              </Link>
            );
          })}
        </nav>

        {/* Right Section: Language Switcher + Contact Button (All Rounded) */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <LanguageSwitcher />

          {/* Rounded Contact Button */}
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full text-xs font-semibold text-white bg-red-700 hover:bg-red-800 transition-all duration-300 shadow-md shadow-red-950/40 hover:-translate-y-0.5 active:scale-95 cursor-pointer shrink-0"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>{tCommon('contactUs')}</span>
          </Link>

          {/* Mobile Burger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-zinc-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown (Floating Rounded Card with Blur) */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto lg:hidden fixed inset-x-4 top-20 max-w-md mx-auto rounded-3xl bg-zinc-950/95 backdrop-blur-2xl border border-white/10 shadow-2xl p-5 space-y-4 animate-in fade-in slide-in-from-top-3 duration-200">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((item) => {
              const isActive =
                item.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.key}
                  href={item.href}
                  className={`px-4 py-2.5 rounded-2xl text-sm font-semibold transition-all flex items-center justify-between ${
                    isActive
                      ? 'bg-red-700 text-white font-bold shadow-md shadow-red-950/30'
                      : 'text-zinc-300 hover:bg-white/[0.06] hover:text-white'
                  }`}
                >
                  <span>{tNav(item.key as any)}</span>
                </Link>
              );
            })}
          </nav>

          {/* Action in mobile menu */}
          <div className="pt-2 border-t border-zinc-800 space-y-2">
            <a
              href={`tel:${siteConfig.emergencyPhoneClean}`}
              className="flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-red-400 bg-red-700/15 rounded-full border border-red-700/30"
            >
              <ShieldCheck className="w-4 h-4 text-red-500" />
              <span>24/7 Advokat: {siteConfig.emergencyPhone}</span>
            </a>

            <Link
              href="/contact"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-full text-sm font-bold text-white bg-red-700 hover:bg-red-800 transition-colors shadow-lg shadow-red-950/40"
            >
              <PhoneCall className="w-4 h-4" />
              <span>{tCommon('getConsultation')}</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
