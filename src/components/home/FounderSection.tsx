'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import { Container } from '../common/Container';
import { Locale } from '@/types';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

interface TeamMemberSliderItem {
  id: string;
  name: string;
  role: Record<Locale, string>;
  headline: Record<Locale, string>;
  quote: Record<Locale, string>;
  image: string;
}

const teamSlides: TeamMemberSliderItem[] = [
  {
    id: 't-1',
    name: 'Alisher Agzamov',
    role: {
      uz: 'FIRMA RAHBARI, BOSHQARUVCHI ADVOKAT (LITSENZIYA № 1044)',
      ru: 'РУКОВОДИТЕЛЬ ФИРМЫ, АДВОКАТ (ЛИЦЕНЗИЯ № 1044)',
      en: 'MANAGING PARTNER, SENIOR ADVOCATE (LICENSE № 1044)',
    },
    headline: {
      uz: "G'alaba tasodif emas, u puxta rejalashtirilgan strategiya natijasidir",
      ru: 'Победа не бывает случайной, это результат безупречно выстроенной стратегии',
      en: 'Victory is never an accident; it is the outcome of a meticulously planned strategy',
    },
    quote: {
      uz: '«Qonun har doim haqiqat tomonida bo‘lishi kerak. Ammo haqiqatni himoya qilish uchun kuch, aql va chekinmas jasorat talab qilinadi. Biz mijozlarimiz uchun faqat maslahatchi emas, ularning eng ishonchli qalqonimiz.»',
      ru: '«Закон всегда должен быть на стороне правды. Но чтобы защитить эту правду, требуются сила, острый ум и непоколебимая решимость. Мы — не просто консультанты, мы надежный щит для каждого доверителя.»',
      en: '«The law must always stand for justice. But defending the truth requires strength, intellect, and relentless courage. We are not merely consultants; we are our clients’ strongest shield.»',
    },
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 't-2',
    name: "Karimova Shahzoda Ulug'bekovna",
    role: {
      uz: 'HAMKOR, M&A VA XALQARO HUQUQ RAHBARI',
      ru: 'ПАРТНЕР, РУКОВОДИТЕЛЬ ПРАКТИКИ M&A',
      en: 'PARTNER, HEAD OF M&A & CROSS-BORDER PRACTICE',
    },
    headline: {
      uz: 'Katta biznes manfaatlari puxta yuridik arxitekturaga tayanadi',
      ru: 'Интересы крупного бизнеса держатся на безупречной правовой архитектуре',
      en: 'The interests of enterprise business rely on flawless legal architecture',
    },
    quote: {
      uz: '«Har bir yirik shartnoma va investitsiya ortida mijozning ko‘p yillik mehnati turadi. Bizning vazifamiz — har qanday xavf-xatarlardan oldindan himoya qiluvchi mustahkam yuridik poydevor qurishdir.»',
      ru: '«За каждым крупным контрактом стоит колоссальный труд. Наша миссия — выстроить неуязвимый правовой фундамент, защищенный от любых внешних и процессуальных рисков.»',
      en: '«Behind every major transaction lies immense dedication. Our mission is to engineer an invulnerable legal fortress ahead of any potential regulatory or contractual risk.»',
    },
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 't-3',
    name: 'Rahimov Jamshid Anvarovich',
    role: {
      uz: 'KATTA HAMKOR, IQTISODIY NIZOLAR VA ARBITRAJ',
      ru: 'СТАРШИЙ ПАРТНЕР, РУКОВОДИТЕЛЬ АРБИТРАЖА',
      en: 'SENIOR PARTNER, COMMERCIAL LITIGATION LEAD',
    },
    headline: {
      uz: 'Murakkab sud jarayonlarida faktlar va qat’iyat hal qiluvchi kuchdir',
      ru: 'В самых сложных судебных баталиях решающую роль играют факты и стойкость',
      en: 'In complex litigation battles, rigorous evidence and resolute perseverance prevail',
    },
    quote: {
      uz: '«Sud amaliyotida mayda detallar bo‘lmaydi. Har bir dalil va protsessual norma g‘alaba kalitiga aylanishi mumkin. Biz har bir ishni faqat to‘liq g‘alabaga qadar murosasiz olib boramiz.»',
      ru: '«В судебной защите нет незначительных деталей. Каждая норма и улика способны переломить ход процесса в пользу нашего доверителя.»',
      en: '«There are no trivial details in litigation. Every piece of evidence and statutory rule can become the turning point to decisive victory.»',
    },
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 't-4',
    name: 'Mahmudov Alisher Rustamovich',
    role: {
      uz: 'KATTA ADVOKAT, JINOIY HIMOYALAR VA SOLIQ NIZOLARI',
      ru: 'СТАРШИЙ АДВОКАТ, УГОЛОВНО-ПРАВОВАЯ ЗАЩИТА',
      en: 'SENIOR TRIAL ATTORNEY, CRIMINAL DEFENSE & TAX',
    },
    headline: {
      uz: 'Har bir inson va tadbirkor eng yuqori darajadagi professional himoyaga munosib',
      ru: 'Каждый предприниматель заслуживает бескомпромиссной защиты своих прав',
      en: 'Every individual and business is entitled to the highest caliber of legal defense',
    },
    quote: {
      uz: '«Tekshiruvlar yoki tergov jarayonlarida o‘z vaqtida ko‘rsatilgan malakali advokatlik yordami inson erkinligi va biznes taqdirini hal qiladi. Biz doimo 24/7 tezkor himoyaga shaymiz.»',
      ru: '«При проверках и следственных действиях своевременная помощь адвоката решает судьбу активов и свободы. Мы стоим на защите ваших прав 24/7.»',
      en: '«During regulatory audits and investigations, timely attorney intervention protects both freedom and enterprise value. We stand ready around the clock.»',
    },
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1000&q=80',
  },
];

export const FounderSection: React.FC = () => {
  const locale = useLocale() as Locale;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % teamSlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + teamSlides.length) % teamSlides.length);
  }, []);

  // Auto-slide every 5.5s unless paused by mouse hover
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 5500);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  const current = teamSlides[currentIndex];

  const categoryTitles: Record<Locale, string> = {
    uz: 'Bizning Jamoa',
    ru: 'Наша Команда',
    en: 'Our Team',
  };

  return (
    <section
      className="py-24 bg-white relative overflow-hidden border-t border-zinc-100"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Team Member Photo Frame */}
          <div className="lg:col-span-5 relative" data-aos="fade-right" data-aos-duration="850">
            <div className="relative mx-auto max-w-md">
              <div className="relative rounded-3xl overflow-hidden border border-zinc-200/80 bg-white shadow-2xl">
                <div className="relative h-[480px] w-full">
                  <Image
                    key={current.id}
                    src={current.image}
                    alt={current.name}
                    fill
                    className="object-cover object-top filter contrast-105 transition-all duration-700 animate-in fade-in zoom-in-95 duration-500"
                    sizes="(max-width: 768px) 100vw, 500px"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Category Text, Dynamic Headline, Quote & Slider Controls */}
          <div className="lg:col-span-7 space-y-7 text-left" data-aos="fade-left" data-aos-duration="850">
            
            <p className="text-xs sm:text-[13px] font-semibold tracking-[0.22em] uppercase text-red-600">
              {categoryTitles[locale] || categoryTitles.uz}
            </p>

            {/* Dynamic Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950 tracking-tight leading-tight min-h-[70px] transition-all duration-300">
              {current.headline[locale]}
            </h2>

            {/* Quote Block on Crisp White/Zinc Theme */}
            <div className="relative p-6 sm:p-8 rounded-2xl bg-white border-l-4 border-l-red-600 border border-zinc-200/80 space-y-4 shadow-xl">
              <Quote className="w-9 h-9 text-red-600/30" />
              <blockquote className="text-base sm:text-lg italic text-zinc-800 font-normal leading-relaxed min-h-[85px]">
                {current.quote[locale]}
              </blockquote>
              <div className="pt-2">
                <p className="text-base font-bold text-zinc-950 tracking-wide">
                  {current.name}
                </p>
                <p className="text-xs font-semibold text-red-600 uppercase tracking-wider mt-0.5">
                  {current.role[locale]}
                </p>
              </div>
            </div>

            {/* Slider Navigation Controls */}
            <div className="pt-3 flex items-center justify-between">
              {/* Pagination counter */}
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-500">
                <span className="text-sm font-bold text-zinc-950">0{currentIndex + 1}</span>
                <span>/</span>
                <span>0{teamSlides.length}</span>
              </div>

              {/* Slider Dots */}
              <div className="flex items-center gap-2">
                {teamSlides.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      currentIndex === idx
                        ? 'w-8 bg-red-600 shadow-md shadow-red-600/40'
                        : 'w-2 bg-zinc-300 hover:bg-zinc-400'
                    }`}
                    aria-label={`Slide ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Prev / Next Action Arrows */}
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={prevSlide}
                  className="h-11 w-11 rounded-full bg-white hover:bg-zinc-100 border border-zinc-200/90 flex items-center justify-center text-zinc-700 hover:text-black transition-all duration-200 cursor-pointer shadow-sm active:scale-95"
                  aria-label="Previous attorney"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={nextSlide}
                  className="h-11 w-11 rounded-full bg-red-700 hover:bg-red-800 border border-red-700 flex items-center justify-center text-white transition-all duration-200 cursor-pointer shadow-md shadow-red-950/20 active:scale-95"
                  aria-label="Next attorney"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </Container>
    </section>
  );
};