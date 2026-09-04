'use client';

import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Container } from '../common/Container';
import { mockServices, mockPrinciples } from '@/data/mockData';
import { Locale } from '@/types';
import { Link } from '@/i18n/routing';
import {
  ShieldAlert,
  Scale,
  FileCheck2,
  Lock,
  Globe,
  ArrowRight,
  PhoneCall,
  UserCheck,
  Target,
  ShieldCheck,
  Zap,
} from 'lucide-react';

const serviceIcons: Record<string, React.ReactNode> = {
  ShieldAlert: <ShieldAlert className="w-5 h-5" />,
  Scale: <Scale className="w-5 h-5" />,
  FileCheck2: <FileCheck2 className="w-5 h-5" />,
  Lock: <Lock className="w-5 h-5" />,
  Globe: <Globe className="w-5 h-5" />,
};

const principleIcons = [
  <UserCheck key="1" className="w-5 h-5" />,
  <Target key="2" className="w-5 h-5" />,
  <ShieldCheck key="3" className="w-5 h-5" />,
  <Zap key="4" className="w-5 h-5" />,
];

export const ServicesSection: React.FC = () => {
  const t = useTranslations('services');
  const tCommon = useTranslations('common');
  const locale = useLocale() as Locale;

  const bespokeContent = {
    badge: {
      uz: 'Alohida yondashuv',
      ru: 'Индивидуальный запрос',
      en: 'Bespoke Inquiry',
    },
    title: {
      uz: 'Boshqa murakkab yoki nostandart holat?',
      ru: 'Не нашли свою категорию спора?',
      en: 'Have a unique or unclassified legal challenge?',
    },
    desc: {
      uz: 'Har bir vaziyat individualdir. Murakkab huquqiy kolliziyalar va nozik masalalarni boshqaruvchi hamkor bilan shaxsan muhokama qiling.',
      ru: 'Каждая ситуация уникальна. Обсудите нестандартные риски и конфиденциальные задачи лично с управляющим партнёром.',
      en: 'Every dispute is singular. Discuss sensitive matters directly and confidentially with our Managing Partner.',
    },
    action: {
      uz: 'Advokat bilan bog‘lanish',
      ru: 'Обсудить с адвокатом',
      en: 'Consult Partner',
    },
  };

  return (
    <section className="py-24 sm:py-28 bg-[#07090e] bg-grid-pattern relative overflow-hidden border-t border-white/5">
      {/* Background Ambient Red Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-red-950/20 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[300px] bg-red-900/10 rounded-full blur-[140px] pointer-events-none" />

      <Container className="relative z-10 space-y-20 sm:space-y-24">
        
        {/* Section Header: Practice Areas */}
        <div
          data-aos="fade-up"
          data-aos-duration="800"
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8"
        >
          <div className="space-y-3 max-w-3xl text-left">
            <p className="text-xs sm:text-[13px] font-semibold tracking-[0.22em] uppercase text-red-500">
              {t('tag')}
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              {t('title')}
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 font-normal leading-relaxed pt-1">
              {t('subtitle')}
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-white/15 hover:border-red-600 hover:bg-red-700 text-zinc-300 hover:text-white font-semibold text-xs tracking-wider uppercase transition-all duration-300 shrink-0 self-start md:self-end group shadow-lg bg-white/[0.03] backdrop-blur-sm"
          >
            <span>{tCommon('getConsultation')}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 6-Card Grid: 5 Legal Practices + 1 Bespoke Consultation Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {mockServices.map((service, idx) => {
            const formattedNumber = `0${idx + 1}`;

            return (
              <div
                key={service.id}
                data-aos="fade-up"
                data-aos-delay={idx * 80}
                data-aos-duration="750"
                className="group relative rounded-2xl p-7 sm:p-8 bg-[#0c1017] hover:bg-gradient-to-b hover:from-red-950/20 hover:to-[#0c1017] border border-white/[0.08] hover:border-red-600/50 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.4)] hover:shadow-[0_0_35px_-5px_rgba(220,38,38,0.22)] transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
              >
                <div>
                  {/* Top Row: Icon Container on Left, Large Stroked Outline Number on Right */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:border-red-600/40 group-hover:bg-red-600/20 group-hover:shadow-md group-hover:shadow-red-950/40 transition-all duration-300">
                      {serviceIcons[service.iconName] || <Scale className="w-5 h-5" />}
                    </div>

                    {/* Number: In default state, stroked outline font. On hover: solid filled red accent! */}
                    <span className="font-mono text-4xl sm:text-5xl font-black text-transparent select-none [-webkit-text-stroke:1.5px_rgba(255,255,255,0.22)] group-hover:[-webkit-text-stroke:0px] group-hover:text-red-600 transition-all duration-300">
                      {formattedNumber}
                    </span>
                  </div>

                  {/* Service Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-white mt-6 mb-3 leading-snug tracking-tight transition-colors">
                    {service.title[locale]}
                  </h3>

                  {/* Service Description */}
                  <p className="text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed group-hover:text-zinc-300 transition-colors line-clamp-3">
                    {service.shortDesc[locale]}
                  </p>
                </div>

                {/* Bottom Action: "Batafsil / Подробнее →" */}
                <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center justify-between">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-400 group-hover:text-red-500 transition-colors"
                  >
                    <span>{tCommon('learnMore')}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                  </Link>

                  <span className="text-[11px] font-mono text-zinc-600 group-hover:text-zinc-500 transition-colors">
                    {service.casesCount}+ {locale === 'ru' ? 'дел' : locale === 'en' ? 'cases' : 'ish'}
                  </span>
                </div>
              </div>
            );
          })}

          {/* 6th Complementary Card: Bespoke Legal Strategy Consultation */}
          <div
            data-aos="fade-up"
            data-aos-delay={5 * 80}
            data-aos-duration="750"
            className="group relative rounded-2xl p-7 sm:p-8 bg-gradient-to-br from-red-950/30 via-[#0c1017] to-[#090b10] border border-red-600/30 hover:border-red-600/60 shadow-[0_4px_25px_-4px_rgba(0,0,0,0.5)] hover:shadow-[0_0_40px_-5px_rgba(220,38,38,0.28)] transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
          >
            <div>
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-red-600/15 border border-red-600/30 flex items-center justify-center text-red-500 group-hover:text-white group-hover:bg-red-600 transition-all duration-300">
                  <PhoneCall className="w-5 h-5" />
                </div>

                <span className="font-mono text-4xl sm:text-5xl font-black text-transparent select-none [-webkit-text-stroke:1.5px_rgba(255,255,255,0.22)] group-hover:[-webkit-text-stroke:0px] group-hover:text-red-600 transition-all duration-300">
                  06
                </span>
              </div>

              <div className="mt-6 mb-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-red-400 font-bold px-2 py-0.5 rounded bg-red-950/60 border border-red-600/30">
                  {bespokeContent.badge[locale] || bespokeContent.badge.uz}
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white mt-2 mb-3 leading-snug tracking-tight">
                {bespokeContent.title[locale] || bespokeContent.title.uz}
              </h3>

              <p className="text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed">
                {bespokeContent.desc[locale] || bespokeContent.desc.uz}
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-white/[0.08] flex items-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-400 group-hover:text-red-300 transition-colors"
              >
                <span>{bespokeContent.action[locale] || bespokeContent.action.uz}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* SECOND PART: «ПРИНЦИПЫ РАБОТЫ» / «ISH TAMOYILLARIMIZ» */}
        {/* ------------------------------------------------------------- */}
        <div className="pt-8 sm:pt-12 space-y-12">
          
          {/* Principles Header */}
          <div
            data-aos="fade-up"
            data-aos-duration="800"
            className="text-left space-y-3 max-w-2xl"
          >
            <p className="text-xs sm:text-[13px] font-semibold tracking-[0.22em] uppercase text-red-500">
              {t('principlesTag')}
            </p>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              {t('principlesTitle')}
            </h3>
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
              {t('principlesSubtitle')}
            </p>
          </div>

          {/* 4 Principles Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mockPrinciples.map((principle, pIdx) => (
              <div
                key={principle.id}
                data-aos="fade-up"
                data-aos-delay={pIdx * 90}
                data-aos-duration="750"
                className="group relative rounded-2xl p-6 sm:p-7 bg-[#0b0e14] hover:bg-[#0f141f] border border-white/[0.08] hover:border-red-600/40 shadow-lg transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
              >
                <div className="space-y-4">
                  {/* Number & Icon */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-2xl font-black text-red-600/80 group-hover:text-red-500 transition-colors">
                      {principle.number}
                    </span>
                    <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-red-500 group-hover:border-red-600/30 transition-all">
                      {principleIcons[pIdx]}
                    </div>
                  </div>

                  {/* Title */}
                  <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-white leading-snug">
                    {principle.title[locale]}
                  </h4>

                  {/* Description */}
                  <p className="text-xs sm:text-[13px] text-zinc-400 font-normal leading-relaxed group-hover:text-zinc-300">
                    {principle.desc[locale]}
                  </p>
                </div>

                <div className="pt-4 mt-5 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="text-[10px] font-mono tracking-widest text-zinc-600 uppercase group-hover:text-zinc-500">
                    Standart 0{pIdx + 1}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </Container>
    </section>
  );
};
