'use client';

import React, { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';
import { mockFaqs } from '@/data/mockData';
import { Locale } from '@/types';
import { ChevronDown } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const t = useTranslations('faq');
  const locale = useLocale() as Locale;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden border-t border-zinc-100">
      <Container className="relative z-10 space-y-16">
        <div data-aos="fade-up" data-aos-duration="800">
          <SectionHeading
            tag={t('tag')}
            title={t('title')}
            subtitle={t('subtitle')}
          />
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {mockFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={faq.id}
                data-aos="fade-up"
                data-aos-delay={idx * 80}
                data-aos-duration="700"
                className={`rounded-2xl border transition-all duration-300 overflow-hidden bg-white shadow-sm ${
                  isOpen ? 'border-red-600/40 shadow-md' : 'border-zinc-200/80 hover:border-zinc-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full flex items-center justify-between p-6 sm:p-7 text-left gap-4 focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3 text-base sm:text-lg font-bold text-zinc-950 group-hover:text-red-700 transition-colors">
                    <span className="h-2 w-2 rounded-full bg-red-600 shrink-0" />
                    <span>{faq.question[locale]}</span>
                  </span>

                  <span
                    className={`p-2 rounded-xl border transition-all duration-300 shrink-0 ${
                      isOpen
                        ? 'rotate-180 bg-red-700 border-red-700 text-white font-bold'
                        : 'bg-zinc-100 border-zinc-200 text-zinc-600'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-7 pb-6 pt-0 border-t border-zinc-100 text-sm sm:text-base text-zinc-600 leading-relaxed animate-in fade-in duration-300">
                    <p className="pt-4">{faq.answer[locale]}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
