import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';

interface PartnerLogo {
  id: string;
  src: string;
  alt: string;
}

const partnersList: PartnerLogo[] = [
  { id: 'part-1', src: '/part1.webp', alt: 'Partner 1' },
  { id: 'part-2', src: '/part2.webp', alt: 'Partner 2' },
  { id: 'part-3', src: '/part3.webp', alt: 'Partner 3' },
  { id: 'part-4', src: '/part4.webp', alt: 'Partner 4' },
  { id: 'part-5', src: '/part5.webp', alt: 'Partner 5' },
  { id: 'part-6', src: '/part6.webp', alt: 'Partner 6' },
];

export const PartnersMarquee: React.FC = () => {
  const t = useTranslations('partners');

  // Staggered order for row 2 so adjacent rows don't display the same logos simultaneously
  const row2List: PartnerLogo[] = [
    partnersList[3],
    partnersList[4],
    partnersList[5],
    partnersList[0],
    partnersList[1],
    partnersList[2],
  ];

  // Repeat arrays 4 times to ensure seamless infinite looping on ultra-wide screens
  const row1 = [...partnersList, ...partnersList, ...partnersList, ...partnersList];
  const row2 = [...row2List, ...row2List, ...row2List, ...row2List];

  return (
    <section className="py-20 sm:py-24 bg-white relative overflow-hidden border-t border-zinc-100">
      {/* Section Heading as requested */}
      <Container className="mb-12 sm:mb-14" data-aos="fade-up" data-aos-duration="800">
        <SectionHeading
          tag={t('tag')}
          title={t('title')}
          subtitle={t('subtitle')}
          centered={true}
        />
      </Container>

      {/* Infinite Marquee Track with white fade masks on edges */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-56 bg-gradient-to-r from-white via-white/90 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-56 bg-gradient-to-l from-white via-white/90 to-transparent z-10 pointer-events-none" />

        <div className="space-y-4 sm:space-y-5">
          {/* Row 1: Moves to the RIGHT (Reverse marquee) */}
          <div className="relative w-full overflow-hidden">
            <div className="animate-marquee-reverse flex items-center gap-4 sm:gap-6 py-1">
              {row1.map((partner, idx) => (
                <div
                  key={`r1-${partner.id}-${idx}`}
                  className="flex items-center justify-center min-w-[190px] sm:min-w-[220px] md:min-w-[240px] h-20 sm:h-24 px-6 py-4 rounded-2xl bg-white border border-zinc-200/90 hover:border-red-600/40 shadow-sm hover:shadow-md transition-all duration-300 group cursor-default shrink-0"
                >
                  <div className="relative w-32 sm:w-36 md:w-40 h-10 sm:h-12 flex items-center justify-center">
                    <Image
                      src={partner.src}
                      alt={partner.alt}
                      fill
                      sizes="(max-width: 768px) 150px, 180px"
                      className="object-contain filter grayscale contrast-125 opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Moves to the LEFT (Standard marquee) */}
          <div className="relative w-full overflow-hidden">
            <div className="animate-marquee flex items-center gap-4 sm:gap-6 py-1">
              {row2.map((partner, idx) => (
                <div
                  key={`r2-${partner.id}-${idx}`}
                  className="flex items-center justify-center min-w-[190px] sm:min-w-[220px] md:min-w-[240px] h-20 sm:h-24 px-6 py-4 rounded-2xl bg-white border border-zinc-200/90 hover:border-red-600/40 shadow-sm hover:shadow-md transition-all duration-300 group cursor-default shrink-0"
                >
                  <div className="relative w-32 sm:w-36 md:w-40 h-10 sm:h-12 flex items-center justify-center">
                    <Image
                      src={partner.src}
                      alt={partner.alt}
                      fill
                      sizes="(max-width: 768px) 150px, 180px"
                      className="object-contain filter grayscale contrast-125 opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
