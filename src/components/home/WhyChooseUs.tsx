'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Container } from '../common/Container';
import { Link } from '@/i18n/routing';
import {
  Shield,
  Zap,
  Scale,
  User,
  ArrowRight,
} from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const t = useTranslations('whyUs');

  const featureCards = [
    {
      icon: <Shield className="w-6 h-6 stroke-[1.8]" />,
      title: t('card1Title'),
      desc: t('card1Desc'),
    },
    {
      icon: <Zap className="w-6 h-6 stroke-[1.8]" />,
      title: t('card2Title'),
      desc: t('card2Desc'),
    },
    {
      icon: <Scale className="w-6 h-6 stroke-[1.8]" />,
      title: t('card3Title'),
      desc: t('card3Desc'),
    },
    {
      icon: <User className="w-6 h-6 stroke-[1.8]" />,
      title: t('card4Title'),
      desc: t('card4Desc'),
    },
  ];

  return (
    <section className="relative py-20 sm:py-24 bg-white overflow-hidden border-t border-zinc-100">
      {/* SVG ClipPath Definition for the Organic Curved Cut on the Right Image */}
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
        <defs>
          <clipPath id="whyChooseOrganicCurve" clipPathUnits="objectBoundingBox">
            <path d="M 0.26,0 C 0.14,0.12 0,0.46 0,1 L 1,1 L 1,0 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* Full Section Architectural Grid Background ("Katak" to'r) */}
      <div className="absolute inset-0 pointer-events-none opacity-50 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] [background-size:36px_36px] z-0" />

      <Container className="relative z-10">
        
        {/* UPPER ROW: Left Text & Right Beautiful Curved Image with Trust Overlays */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Heading, Subtitle & Single Decisive CTA Button */}
          <div
            data-aos="fade-right"
            data-aos-duration="850"
            className="lg:col-span-6 space-y-6 text-left"
          >
            {/* Red Eyebrow Tag with Red Line */}
            <div>
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wider uppercase text-[#b91c1c]">
                <span className="w-2 h-2 rounded-full bg-[#b91c1c] inline-block shadow-sm" />
                <span>{t('tag')}</span>
              </div>
              <div className="w-9 h-0.5 bg-[#b91c1c] mt-2" />
            </div>

            {/* Authoritative Headline (Matching Hero Typography) */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-zinc-950 tracking-tight leading-[1.18]">
              {t('titleLine1')}
              <br />
              {t('titleLine2')}
              <br />
              {t('titlePrefix')}{' '}
              <span className="text-[#b91c1c] font-bold">
                {t('titleHighlight')}
              </span>
            </h2>

            {/* Subtitle Explanatory Paragraph */}
            <p className="text-sm sm:text-base text-zinc-600 font-normal leading-relaxed max-w-xl">
              {t('subtitle')}
            </p>

            {/* Single Decisive CTA Button */}
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#b91c1c] hover:bg-[#991b1b] text-white font-bold text-sm shadow-lg shadow-red-950/20 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200"
              >
                <span>{t('primaryCta')}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: High-Res Law Consultation Photo with Organic Curved Cut */}
          <div
            data-aos="fade-left"
            data-aos-duration="850"
            className="lg:col-span-6 relative w-full flex justify-end group"
          >
            <div className="relative w-full h-[400px] sm:h-[480px] lg:h-[510px] max-w-2xl lg:max-w-none rounded-3xl lg:rounded-none overflow-hidden lg:overflow-visible">
              {/* Curved container on Desktop, sleek rounded frame on Mobile */}
              <div className="relative w-full h-full lg:[clip-path:url(#whyChooseOrganicCurve)] shadow-2xl lg:shadow-none rounded-2xl lg:rounded-none overflow-hidden">
                <Image
                  src="/why-choose-us.jpg"
                  alt="Agzamov Legal Group Senior Partners Consultation"
                  fill
                  className="object-cover object-center filter contrast-[1.04] transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 650px"
                  priority
                />
                {/* Subtle natural gradient reflection */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>

        </div>

        {/* LOWER ROW: 4 Feature Cards (Elevated Hover Transitions, Glowing Border & Morphed Icon) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mt-14 sm:mt-18">
          {featureCards.map((card, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              data-aos-duration="800"
              className="relative bg-white rounded-2xl p-6 sm:p-7 border border-zinc-200/80 shadow-[0_4px_25px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_45px_-8px_rgba(185,28,28,0.14)] hover:border-[#b91c1c]/40 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group overflow-hidden cursor-default"
            >
              {/* Top edge accent highlight that reveals on hover */}
              <div className="absolute top-0 inset-x-8 h-0.5 bg-gradient-to-r from-transparent via-[#b91c1c] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                {/* Icon Container with Morphing Transition */}
                <div className="w-12 h-12 rounded-2xl bg-red-50 border border-red-100 flex items-center justify-center text-[#b91c1c] mb-5 group-hover:bg-[#b91c1c] group-hover:border-[#b91c1c] group-hover:text-white group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-red-900/25 transition-all duration-300">
                  {card.icon}
                </div>

                {/* Title (2 lines) with color accent transition */}
                <h3 className="text-base sm:text-lg font-bold text-zinc-950 leading-snug whitespace-pre-line group-hover:text-[#b91c1c] transition-colors duration-200">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-[13px] text-zinc-500 font-normal leading-relaxed mt-2.5">
                  {card.desc}
                </p>
              </div>

              {/* Bottom Row: Interactive Arrow Pill Button */}
              <div className="flex justify-end pt-5">
                <div className="w-8 h-8 rounded-full bg-zinc-50 border border-zinc-200/80 group-hover:bg-[#b91c1c] group-hover:border-[#b91c1c] text-zinc-400 group-hover:text-white flex items-center justify-center transition-all duration-300 group-hover:translate-x-1 group-hover:scale-105 shadow-sm">
                  <ArrowRight className="w-4 h-4 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </Container>
    </section>
  );
};
