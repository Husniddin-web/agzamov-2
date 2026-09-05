import React from 'react';
import Image from 'next/image';
import { setRequestLocale } from 'next-intl/server';
import { Container } from '@/components/common/Container';
import { mockNews } from '@/data/mockData';
import { Locale } from '@/types';
import { Link } from '@/i18n/routing';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

interface NewsPageProps {
  params: Promise<{ locale: string }>;
}

const contentDict = {
  metaTitle: {
    uz: 'Yangiliklar va Huquqiy Tahlillar — AGZAMOV LEGAL GROUP',
    ru: 'Новости и Правовой Анализ — AGZAMOV LEGAL GROUP',
    en: 'News and Legal Insights — AGZAMOV LEGAL GROUP',
  },
  metaDesc: {
    uz: 'Qonunchilikdagi so‘nggi o‘zgarishlar, sud amaliyoti tahlillari va yuridik tavsiyalar.',
    ru: 'Последние изменения в законодательстве, анализ судебной практики и юридические рекомендации.',
    en: 'Recent legislative updates, case law analysis, and executive legal counsel.',
  },
  title: {
    uz: 'Yangiliklar va Maqolalar',
    ru: 'Новости и Статьи',
    en: 'News and Articles',
  },
  subtitle: {
    uz: 'Qonunchilikdagi yangi qarorlar, sud pretsedentlari va biznesni huquqiy xavflardan asrash bo‘yicha advokatlarimiz tahlili.',
    ru: 'Актуальные изменения законодательства, судебная практика и аналитические обзоры экспертов для защиты бизнеса.',
    en: 'Latest regulatory developments, judicial precedents, and expert legal analysis to safeguard your business.',
  },
  readMinutes: {
    uz: 'daqiqa mutolaa',
    ru: 'мин чтения',
    en: 'min read',
  },
  author: {
    uz: 'Muallif',
    ru: 'Автор',
    en: 'Author',
  },
  readMore: {
    uz: 'Batafsil o‘qish',
    ru: 'Читать далее',
    en: 'Read full article',
  },
};

export async function generateMetadata({ params }: NewsPageProps) {
  const { locale } = await params;
  const currentLocale = (['uz', 'ru', 'en'].includes(locale) ? locale : 'ru') as Locale;
  return {
    title: contentDict.metaTitle[currentLocale],
    description: contentDict.metaDesc[currentLocale],
  };
}

export default async function NewsPage({ params }: NewsPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const currentLocale = (['uz', 'ru', 'en'].includes(locale) ? locale : 'ru') as Locale;

  return (
    <div className="pt-28 pb-20 bg-black min-h-screen">
      {/* Banner */}
      <section className="py-16 border-b border-zinc-900 relative">
        <Container className="text-center space-y-4 max-w-4xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
            {contentDict.title[currentLocale]}
          </h1>
          <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            {contentDict.subtitle[currentLocale]}
          </p>
        </Container>
      </section>

      {/* News Grid */}
      <section className="py-20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockNews.map((article) => (
              <article
                key={article.id}
                className="group rounded-2xl bg-zinc-950/80 border border-zinc-800/80 hover:border-zinc-700 hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-56 w-full overflow-hidden bg-zinc-900">
                    <Image
                      src={article.thumbnail}
                      alt={article.title[currentLocale]}
                      fill
                      className="object-cover group-hover:scale-105 filter grayscale contrast-110 group-hover:grayscale-0 transition-all duration-500"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent" />

                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-zinc-900/90 border border-zinc-700/80 text-[11px] font-medium text-zinc-300 backdrop-blur-md">
                        {article.category[currentLocale]}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-4 text-xs text-zinc-500">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                        {article.createdAt}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-zinc-400" />
                        {article.readTime} {contentDict.readMinutes[currentLocale]}
                      </span>
                    </div>

                    <h2 className="text-lg font-bold text-white group-hover:text-red-500 transition-colors leading-snug line-clamp-2">
                      <Link href={`/news/${article.slug}`}>
                        {article.title[currentLocale]}
                      </Link>
                    </h2>

                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed line-clamp-3">
                      {article.excerpt[currentLocale]}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-zinc-900 mt-4">
                  <div className="flex items-center justify-between pt-4">
                    <span className="text-xs text-zinc-500">
                      {contentDict.author[currentLocale]}: {article.author}
                    </span>
                    <Link
                      href={`/news/${article.slug}`}
                      className="text-xs font-semibold text-red-500 hover:text-red-400 inline-flex items-center gap-1.5 tracking-wide group-hover:translate-x-1 transition-transform"
                    >
                      <span>{contentDict.readMore[currentLocale]}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
