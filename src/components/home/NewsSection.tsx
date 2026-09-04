import React from 'react';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { Container } from '../common/Container';
import { mockNews } from '@/data/mockData';
import { Locale } from '@/types';
import { Link } from '@/i18n/routing';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

export const NewsSection: React.FC = () => {
  const t = useTranslations('news');
  const tCommon = useTranslations('common');
  const locale = useLocale() as Locale;

  return (
    <section className="py-20 sm:py-28 bg-white relative overflow-hidden border-t border-zinc-100">
      <Container className="relative z-10 space-y-12 sm:space-y-14">
        
        {/* Section Header */}
        <div
          data-aos="fade-up"
          data-aos-duration="800"
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-zinc-100 pb-8"
        >
          <div className="space-y-3 max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wider uppercase text-[#b91c1c]">
              <span className="w-2 h-2 rounded-full bg-[#b91c1c] inline-block shadow-sm" />
              <span>{t('tag')}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-zinc-950 tracking-tight leading-[1.18]">
              {t('title')}
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 font-normal leading-relaxed">
              {t('subtitle')}
            </p>
          </div>

          <Link
            href="/news"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-zinc-300 hover:border-[#b91c1c] hover:bg-[#b91c1c] hover:text-white text-zinc-900 font-semibold text-xs tracking-wider uppercase transition-all duration-300 shrink-0 self-start md:self-end group shadow-sm bg-white"
          >
            <span>{tCommon('allNews')}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 sm:gap-8">
          {mockNews.map((article, idx) => (
            <article
              key={article.id}
              data-aos="fade-up"
              data-aos-delay={idx * 150}
              data-aos-duration="800"
              className="bg-white rounded-3xl overflow-hidden border border-zinc-200/90 hover:border-[#b91c1c]/50 shadow-[0_4px_25px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_16px_40px_-8px_rgba(0,0,0,0.09)] hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between text-left"
            >
              <div>
                {/* Thumbnail Image (Clean without badge overlay) */}
                <div className="relative h-56 sm:h-60 w-full overflow-hidden bg-zinc-100">
                  <Image
                    src={article.thumbnail}
                    alt={article.title[locale]}
                    fill
                    className="object-cover object-center group-hover:scale-105 filter contrast-[1.03] transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                  {/* Subtle Natural Shadow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Content Area */}
                <div className="p-6 sm:p-7 space-y-3.5">
                  {/* Meta: Category, Date & Read Time */}
                  <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-zinc-400">
                    <span className="text-[#b91c1c] font-semibold text-[11px] uppercase tracking-wider">
                      {article.category[locale]}
                    </span>
                    <span className="text-zinc-300">•</span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                      {article.createdAt}
                    </span>
                    <span className="text-zinc-300">•</span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-zinc-400" />
                      {article.readTime} {t('readTime')}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-zinc-950 group-hover:text-[#b91c1c] transition-colors leading-snug line-clamp-2">
                    <Link href={`/news/${article.slug}`}>
                      {article.title[locale]}
                    </Link>
                  </h3>

                  {/* Excerpt */}
                  <p className="text-xs sm:text-sm text-zinc-600 font-normal leading-relaxed line-clamp-2">
                    {article.excerpt[locale]}
                  </p>
                </div>
              </div>

              {/* Card Footer: Read More Link */}
              <div className="px-6 sm:px-7 pb-6 pt-4 border-t border-zinc-100 flex items-center justify-end mt-2">
                <Link
                  href={`/news/${article.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase text-[#b91c1c] group-hover:translate-x-1 transition-transform"
                >
                  <span>{tCommon('readMore')}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>

      </Container>
    </section>
  );
};
