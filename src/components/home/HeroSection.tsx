import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Container } from '../common/Container';
import { StatsCounter } from './StatsCounter';
import { Link } from '@/i18n/routing';
import { ArrowRight } from 'lucide-react';

import { siteConfig } from '@/config/site';

export const HeroSection: React.FC = () => {
  const t = useTranslations('hero');

  return (
    <section className="relative min-h-[96vh] sm:min-h-screen flex flex-col justify-between pt-24 sm:pt-32 pb-8 sm:pb-12 overflow-hidden bg-black">
      {/* Background Image: Classical Supreme Court Palace Hall */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/new-hero-bg.png"
          alt="Agzamov Legal Group Law Chamber & Judicial Practice"
          fill
          priority
          className="object-cover object-center scale-100"
          sizes="100vw"
          quality={95}
        />
        
        {/* Layer 1: Left Editorial Vignette - Softened to reveal more background clarity */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 via-30% to-transparent pointer-events-none" />

        {/* Layer 2: Gentle Top Vignette for Navigation contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-transparent via-12% to-transparent pointer-events-none" />

        {/* Layer 3: Soft Bottom Shadow for Stats row */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 via-18% to-transparent pointer-events-none" />
      </div>

      {/* Main Hero Content (Editorial Pure Typography) */}
      <Container className="relative z-10 my-auto py-6 sm:py-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 xl:col-span-7 text-left space-y-5 sm:space-y-6">
            
            {/* Top Eyebrow Tag: Clean Pure Poppins Tracked Typography */}
            <div
              data-aos="fade-up"
              data-aos-duration="800"
              className="text-xs sm:text-[13px] tracking-[0.22em] text-zinc-400 font-semibold uppercase"
            >
              {t('eyebrow')}
            </div>

            {/* Main Headline: Pure Authoritative Typography */}
            <h1
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="850"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-bold tracking-tight text-white leading-[1.08]"
            >
              {t('titlePrefix')}
              <span className="block text-[#d23b3b] font-bold mt-1.5 sm:mt-2">
                {t('titleHighlight')}.
              </span>
            </h1>

            {/* Subtitle: Crisp Natural Contrast */}
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="850"
              className="text-sm sm:text-base text-zinc-400 font-normal leading-relaxed max-w-lg"
            >
              {t('subtitle')}
            </p>

            {/* Call to Action: Outlined Luxury Pill Button with Subtle Crimson Stroke */}
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="850"
              className="pt-2 sm:pt-3"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 px-8 py-3.5 sm:py-4 rounded-full border border-[#d23b3b]/70 bg-black/45 hover:bg-[#d23b3b] hover:border-[#d23b3b] text-zinc-200 hover:text-white font-medium text-xs sm:text-sm tracking-[0.18em] uppercase backdrop-blur-sm transition-all duration-300 shadow-xl shadow-black/50 hover:shadow-[#d23b3b]/25 hover:-translate-y-0.5"
              >
                <span>{t('primaryCta')}</span>
                <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </Link>
            </div>

          </div>
        </div>
      </Container>

      {/* Stats Row at Bottom of Hero */}
      <Container
        data-aos="fade-up"
        data-aos-delay="400"
        data-aos-duration="900"
        className="relative z-10 w-full pt-8 sm:pt-10 border-t border-white/10"
      >
        <StatsCounter />
      </Container>
    </section>
  );
};
