'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useLocale } from 'next-intl';
import { Container } from '../common/Container';
import { Locale } from '@/types';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface ClientReview {
  id: string;
  quote: Record<Locale, string>;
  company: string;
  author: string;
  role: string;
}

const reviewsData: ClientReview[] = [
  {
    id: 'rev-1',
    company: 'PROWEB',
    author: 'Javohir Toshmatov',
    role: 'Ta’sischi & CEO',
    quote: {
      uz: 'Agzamov Legal jamoasiga professional huquqiy qo‘llab-quvvatlash va intellektual mulk himoyasi uchun katta minnatdorchilik bildiramiz. Har bir vaziyatga chuqur strategik tahlil bilan yondashilgani biznesimiz xavfsizligini to‘liq ta’minladi.',
      ru: 'Благодарим команду Agzamov Legal за оказание высококлассной юридической поддержки и надежную защиту интеллектуальной собственности. Индивидуальный стратегический подход обеспечил абсолютную безопасность нашего бизнеса.',
      en: 'We sincerely thank the Agzamov Legal team for their exceptional legal counsel and comprehensive IP asset protection. Their bespoke strategic methodology completely safeguarded our commercial enterprise.',
    },
  },
  {
    id: 'rev-2',
    company: 'IT-CLOUD SCHOOL',
    author: 'Dilshod Ergashev',
    role: 'Boshqaruvchi Hamkor',
    quote: {
      uz: 'Jamoangizga katta rahmat! Yirik shartnomalarni tekshirish, sud oldi nizolarini hal qilish va korporativ xatarlarni bartaraf etishda siz shunchaki eng nufuzli va ishonchli mutaxassissiz.',
      ru: 'Огромное спасибо вашей команде! В вопросах экспертизы масштабных коммерческих контрактов, урегулирования досудебных споров и минимизации рисков вы — бесспорно лучшие эксперты.',
      en: 'Immense gratitude to your entire practice! When it comes to high-stakes contract structuring, pre-litigation dispute resolution, and commercial risk mitigation, you are simply second to none.',
    },
  },
  {
    id: 'rev-3',
    company: 'TIMEKEEPER',
    author: 'Anvar Karimov',
    role: 'Bosh Direktor',
    quote: {
      uz: 'Birinchi konsultatsiyadanoq haqiqiy ekspertlar qo‘liga tushganimni angladim. Bojxona va soliqqa oid eng murakkab masalalar rekord darajadagi qisqa muddatlarda, to‘liq qonuniy hal etildi.',
      ru: 'С первой же консультации стало очевидно, что мы обратились к первоклассным экспертам. Самые запутанные таможенные и налоговые коллизии были разрешены в рекордно короткие сроки.',
      en: 'From the very first consultation, it was evident we had partnered with premier legal counsel. Complex customs and fiscal regulatory disputes were resolved in record statutory turnaround.',
    },
  },
  {
    id: 'rev-4',
    company: 'ORIENT HOLDING',
    author: 'Jamshid Aliyev',
    role: 'Korporativ Maslahatchi',
    quote: {
      uz: 'Agzamov Legal tomonidan taqdim etiladigan yuridik yordam — bu yirik biznes xotirjamligining mustahkam kafolati. Har qanday murakkab vaziyatda ham doimo qat’iyatli va ishonchli yechim topiladi.',
      ru: 'Юридическое сопровождение от Agzamov Legal — это железная гарантия стабильности и правового спокойствия для крупного бизнеса. Всегда пунктуально, безукоризненно и результативно.',
      en: 'Retained counsel from Agzamov Legal constitutes an ironclad guarantee of enterprise stability. Under any complex corporate challenge, they consistently formulate prompt and decisive outcomes.',
    },
  },
];

const sectionBadge: Record<Locale, string> = {
  uz: 'Mijozlar fikri',
  ru: 'Отзывы клиентов',
  en: 'Client Testimonials',
};

export const ReviewsSection: React.FC = () => {
  const locale = useLocale() as Locale;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % reviewsData.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + reviewsData.length) % reviewsData.length);
  }, []);

  // Automatic slide every 6 seconds (pauses on mouse hover)
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  const currentReview = reviewsData[currentIndex];

  return (
    <section className="py-24 sm:py-32 bg-[#070707] bg-grid-pattern relative overflow-hidden border-t border-white/5">
      {/* Ambient Red Atmospheric Glow in the Center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-red-950/25 rounded-full blur-[180px] pointer-events-none" />

      <Container className="relative z-10 text-center">
        
        {/* Top Minimal Badge */}
        <div
          data-aos="fade-up"
          data-aos-duration="800"
          className="flex justify-center mb-10"
        >
          <p className="text-xs sm:text-[13px] font-semibold tracking-[0.22em] uppercase text-red-500 text-center">
            {sectionBadge[locale] || sectionBadge.uz}
          </p>
        </div>

        {/* Large Central Testimonial Showcase (Not a box card, wide editorial format) */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative max-w-4xl mx-auto px-4 sm:px-8 py-6"
        >
          {/* Glowing Center Quotation Icon */}
          <div
            data-aos="zoom-in"
            data-aos-duration="700"
            className="w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-red-500 mx-auto mb-8 shadow-inner shadow-white/5"
          >
            <Quote className="w-6 h-6 fill-red-500/20 text-red-500" />
          </div>

          {/* Large Editorial Quote Typography with Smooth Fade Transition */}
          <div className="min-h-[160px] sm:min-h-[140px] flex items-center justify-center">
            <blockquote
              key={currentReview.id}
              className="text-xl sm:text-2xl md:text-3xl lg:text-[30px] text-zinc-100 font-light leading-relaxed tracking-tight text-center transition-all duration-500 animate-in fade-in zoom-in-95"
            >
              “{currentReview.quote[locale] || currentReview.quote.uz}”
            </blockquote>
          </div>

          {/* 5-Star Rating Row */}
          <div className="flex items-center justify-center gap-1.5 text-amber-500 mt-8 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
            ))}
          </div>

          {/* Client Identity & Company Attribution */}
          <div className="flex items-center justify-center gap-4 mt-2">
            <div className="w-12 h-12 rounded-full bg-black border border-white/20 flex items-center justify-center text-xs font-black text-white tracking-wider shadow-lg shadow-black/80 shrink-0">
              {currentReview.company.substring(0, 3)}
            </div>
            <div className="text-left">
              <h4 className="text-base font-bold text-white tracking-wide">
                {currentReview.company}
              </h4>
              <p className="text-xs text-zinc-400 font-medium">
                {currentReview.author} • <span className="text-zinc-500">{currentReview.role}</span>
              </p>
            </div>
          </div>

          {/* Slider Controls: Side Arrow Buttons + Bottom Dots */}
          <div className="flex items-center justify-between mt-12 pt-8 border-t border-white/10 max-w-xs mx-auto">
            {/* Prev Button */}
            <button
              onClick={prevSlide}
              aria-label="Previous Review"
              className="w-11 h-11 rounded-full border border-white/10 bg-white/[0.04] hover:bg-red-700 hover:border-red-700 text-white flex items-center justify-center backdrop-blur-md transition-all duration-300 shadow-lg hover:scale-105 active:scale-95 group cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5 text-zinc-300 group-hover:text-white" />
            </button>

            {/* Dot Indicators */}
            <div className="flex items-center gap-2">
              {reviewsData.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    i === currentIndex
                      ? 'w-8 bg-red-600'
                      : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              aria-label="Next Review"
              className="w-11 h-11 rounded-full border border-white/10 bg-white/[0.04] hover:bg-red-700 hover:border-red-700 text-white flex items-center justify-center backdrop-blur-md transition-all duration-300 shadow-lg hover:scale-105 active:scale-95 group cursor-pointer"
            >
              <ChevronRight className="w-5 h-5 text-zinc-300 group-hover:text-white" />
            </button>
          </div>

        </div>

      </Container>
    </section>
  );
};
