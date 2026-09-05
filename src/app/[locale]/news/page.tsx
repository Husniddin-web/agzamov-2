import React from 'react';
import Image from 'next/image';
import { setRequestLocale } from 'next-intl/server';
import { Container } from '@/components/common/Container';
import { PageHeader } from '@/components/common/PageHeader';
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
  home: {
    uz: 'Bosh sahifa',
    ru: 'Главная',
    en: 'Home',
  },
  title: {
    uz: 'Yangiliklar va Maqolalar',
    ru: 'Новости и Статьи',
    en: 'News and Articles',
  },
  eyebrow: {
    uz: 'HUQUQIY TAHLIL VA YANGILIKLAR',
    ru: 'ПРАВОВОЙ АНАЛИЗ И НОВОСТИ',
    en: 'LEGAL INSIGHTS & CASE LAW',
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
    <div className="bg-white min-h-screen">
      {/* Top Hero Banner matching user reference image */}
      <PageHeader
        title={contentDict.title[currentLocale]}
        eyebrow={contentDict.eyebrow[currentLocale]}
        imageSrc="/banners/news-banner.jpg"
        breadcrumbs={[
          { label: contentDict.home[currentLocale], href: '/' },
          { label: contentDict.title[currentLocale] },
        ]}
      />

      {/* News Grid on Pure White Background */}
      <section className="py-16 sm:py-24 bg-white">
        <Container className="space-y-12">
          <div className="max-w-3xl mx-auto text-center space-y-3">
            <h2 className="text-2xl sm:text-3xl font-black text-zinc-900 tracking-tight">
              {contentDict.title[currentLocale]}
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
              {contentDict.subtitle[currentLocale]}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockNews.map((article) => (
              <article
                key={article.id}
                className="group rounded-2xl bg-white border border-zinc-200/90 shadow-sm hover:shadow-xl hover:border-zinc-300 hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-56 w-full overflow-hidden bg-zinc-100">
                    <Image
                      src={article.thumbnail}
                      alt={article.title[currentLocale]}
                      fill
                      className="object-cover group-hover:scale-105 filter grayscale contrast-110 group-hover:grayscale-0 transition-all duration-500"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />

                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-white/95 text-zinc-900 text-[11px] font-bold shadow-sm backdrop-blur-md">
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

                    <h3 className="text-lg font-bold text-zinc-900 group-hover:text-red-700 transition-colors leading-snug line-clamp-2">
                      <Link href={`/news/${article.slug}`}>
                        {article.title[currentLocale]}
                      </Link>
                    </h3>

                    <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed line-clamp-3">
                      {article.excerpt[currentLocale]}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-zinc-100 mt-4">
                  <div className="flex items-center justify-between pt-4">
                    <span className="text-xs text-zinc-500">
                      {contentDict.author[currentLocale]}: {article.author}
                    </span>
                    <Link
                      href={`/news/${article.slug}`}
                      className="text-xs font-bold text-red-700 hover:text-red-800 inline-flex items-center gap-1.5 tracking-wide group-hover:translate-x-1 transition-transform"
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
