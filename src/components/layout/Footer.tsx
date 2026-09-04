import React from 'react';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Container } from '../common/Container';
import { siteConfig, navLinks } from '@/config/site';
import { Locale } from '@/types';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowUpRight,
} from 'lucide-react';

export const Footer: React.FC = () => {
  const t = useTranslations('footer');
  const tNav = useTranslations('nav');
  const locale = useLocale() as Locale;

  return (
    <footer className="relative bg-black border-t border-zinc-900 pt-20 pb-6 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[150px] bg-red-700/10 blur-[120px] pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-zinc-900">
          
          {/* Col 1: Brand & Bio (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <Link href="/" className="flex items-center group">
              <Image
                src="/logo-red.png"
                alt="Agzamov Legal Group"
                width={160}
                height={42}
                className="h-9 sm:h-10 w-auto object-contain drop-shadow-[0_0_8px_rgba(194,38,25,0.25)]"
              />
            </Link>

            <p className="text-sm text-zinc-400 leading-relaxed max-w-sm">
              {t('description')}
            </p>

            {/* 24/7 Emergency Hotline - Senior Level Minimalist Editorial */}
            <div className="pt-2 border-l-2 border-red-700/70 pl-4 space-y-1">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
                <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-widest">
                  24/7 Tezkor Advokat
                </span>
              </div>
              <a
                href={`tel:${siteConfig.emergencyPhoneClean}`}
                className="text-lg font-black text-white hover:text-red-400 transition-colors tracking-wide block"
              >
                {siteConfig.emergencyPhone}
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links ONLY (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              {t('navigation')}
            </h3>
            <ul className="space-y-3">
              {navLinks.map((item) => (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    className="text-sm text-zinc-400 hover:text-red-500 transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{tNav(item.key as any)}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all text-red-600" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact Info & Real Socials (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              {t('contactInfo')}
            </h3>
            <ul className="space-y-3.5 text-sm text-zinc-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-red-600 shrink-0 mt-1" />
                <span>{siteConfig.address[locale]}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-red-600 shrink-0" />
                <a
                  href={`tel:${siteConfig.phoneClean}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-red-600 shrink-0" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                <span>{siteConfig.workingHours[locale]}</span>
              </li>
            </ul>

            {/* Real Branded Social Media Icons */}
            <div className="pt-2 flex items-center gap-3">
              {/* Telegram */}
              <a
                href={siteConfig.social.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-sky-500/50 hover:bg-sky-500/10 transition-all"
                title="Telegram"
                aria-label="Telegram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .37z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-pink-500/50 hover:bg-pink-500/10 transition-all"
                title="Instagram"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-blue-600/50 hover:bg-blue-600/10 transition-all"
                title="Facebook"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-blue-500/50 hover:bg-blue-500/10 transition-all"
                title="LinkedIn"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Statutory Legal Notice / Litsenziya Guvohnomasi */}
        <div className="pt-8 pb-4 border-b border-zinc-900/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-zinc-400">
          <div className="flex items-start sm:items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0 mt-1 sm:mt-0" />
            <p className="leading-relaxed">
              {siteConfig.licenseNotice[locale]}
            </p>
          </div>
          <span className="shrink-0 px-2.5 py-1 rounded bg-white/[0.04] border border-white/10 text-[11px] font-mono uppercase tracking-wider text-zinc-300">
            Litsenziya № {siteConfig.licenseNumber}
          </span>
        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. {t('allRightsReserved')}
          </p>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-zinc-300 transition-colors">
              {t('privacy')}
            </Link>
            <Link href="/about" className="hover:text-zinc-300 transition-colors">
              {t('terms')}
            </Link>
          </div>
        </div>

        {/* Grand Architectural Typography Watermark at the Very Bottom */}
        <div className="pt-14 pb-2 w-full select-none pointer-events-none overflow-hidden">
          <svg
            viewBox="0 0 1350 110"
            className="w-full h-auto max-h-24 sm:max-h-32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <text
              x="50%"
              y="55%"
              textAnchor="middle"
              dominantBaseline="middle"
              className="font-black text-[78px] tracking-[0.14em] uppercase font-sans fill-white/15"
            >
              AGZAMOV LEGAL GROUP
            </text>
          </svg>
        </div>
      </Container>
    </footer>
  );
};
