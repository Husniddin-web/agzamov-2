import React from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { Container } from '@/components/common/Container';
import { PageHeader } from '@/components/common/PageHeader';
import { Button } from '@/components/common/Button';
import { mockNews } from '@/data/mockData';
import { Locale } from '@/types';
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  Send,
} from 'lucide-react';

interface NewsDetailPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

const detailDict = {
  home: { uz: 'Bosh sahifa', ru: 'Главная', en: 'Home' },
  news: { uz: 'Yangiliklar', ru: 'Новости', en: 'News' },
  readDuration: { uz: 'daqiqa mutolaa', ru: 'мин чтения', en: 'min read' },
  backBtn: { uz: 'Barcha maqolalarga qaytish', ru: 'Назад ко всем новостям', en: 'Back to all articles' },
  share: { uz: 'Ulashish:', ru: 'Поделиться:', en: 'Share:' },
};

export async function generateStaticParams() {
  const paths: { locale: string; slug: string }[] = [];
  const locales = ['uz', 'ru', 'en'];

  for (const locale of locales) {
    for (const n of mockNews) {
      paths.push({ locale, slug: n.slug });
    }
  }

  return paths;
}

export default async function NewsDetailPage({ params }: NewsDetailPageProps) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const article = mockNews.find((n) => n.slug === slug);

  if (!article) {
    notFound();
  }

  const currentLocale = (['uz', 'ru', 'en'].includes(locale) ? locale : 'ru') as Locale;

  return (
    <div className="bg-white min-h-screen">
      {/* Top Hero Banner matching user reference image */}
      <PageHeader
        title={article.title[currentLocale]}
        eyebrow={article.category[currentLocale]}
        imageSrc="/banners/news-banner.jpg"
        breadcrumbs={[
          { label: detailDict.home[currentLocale], href: '/' },
          { label: detailDict.news[currentLocale], href: '/news' },
          { label: article.category[currentLocale] },
        ]}
      />

      {/* Article Body on Pure White */}
      <article className="py-16 sm:py-24 bg-white">
        <Container className="max-w-4xl space-y-10">
          {/* Metadata Row */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-zinc-200 text-xs sm:text-sm text-zinc-500">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-1.5 font-medium text-zinc-700">
                <User className="w-4 h-4 text-zinc-400" />
                {article.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-zinc-400" />
                {article.createdAt}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-zinc-400" />
                {article.readTime} {detailDict.readDuration[currentLocale]}
              </span>
            </div>

            <span className="px-3 py-1 rounded-full bg-zinc-100 text-zinc-800 text-xs font-semibold">
              {article.category[currentLocale]}
            </span>
          </div>

          {/* Main Hero Image */}
          <div className="relative h-80 sm:h-[460px] w-full rounded-2xl overflow-hidden border border-zinc-200 bg-zinc-100 shadow-lg">
            <Image
              src={article.thumbnail}
              alt={article.title[currentLocale]}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 900px"
            />
          </div>

          {/* Excerpt Lead */}
          <div className="p-6 sm:p-8 rounded-2xl bg-zinc-50 border-l-4 border-l-red-700 border border-zinc-200 text-base sm:text-lg text-zinc-800 font-medium leading-relaxed italic">
            «{article.excerpt[currentLocale]}»
          </div>

          {/* Text Content */}
          <div className="text-zinc-700 text-base sm:text-lg leading-relaxed space-y-6">
            {article.content[currentLocale].split('\n\n').map((paragraph, pIdx) => (
              <p key={pIdx}>{paragraph}</p>
            ))}
          </div>

          {/* Share & Actions Footer */}
          <div className="pt-8 border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <Button href="/news" variant="outline" icon={<ArrowLeft className="w-4 h-4" />} iconPosition="left">
              {detailDict.backBtn[currentLocale]}
            </Button>

            <div className="flex items-center gap-3">
              <span className="text-xs text-zinc-500 font-semibold uppercase tracking-wider">
                {detailDict.share[currentLocale]}
              </span>
              <a
                href={`https://t.me/share/url?url=https://agzamovlegal.uz/news/${article.slug}&text=${encodeURIComponent(
                  article.title[currentLocale]
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-sky-50 border border-sky-200 text-sky-700 hover:bg-sky-100 transition-all flex items-center gap-2 text-xs font-semibold"
              >
                <Send className="w-3.5 h-3.5 text-sky-600" />
                <span>Telegram</span>
              </a>
            </div>
          </div>
        </Container>
      </article>
    </div>
  );
}
