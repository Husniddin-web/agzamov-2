import React from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { Container } from '@/components/common/Container';
import { Button } from '@/components/common/Button';
import { mockNews } from '@/data/mockData';
import { Locale } from '@/types';
import { Link } from '@/i18n/routing';
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
  readDuration: { uz: 'daqiqalik mutolaa', ru: 'мин чтения', en: 'min read' },
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
    <div className="pt-28 pb-20 bg-black min-h-screen">
      {/* Top Header */}
      <section className="py-12 border-b border-zinc-900">
        <Container className="max-w-4xl">
          <div className="flex items-center gap-3 text-xs text-zinc-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              {detailDict.home[currentLocale]}
            </Link>
            <span>/</span>
            <Link href="/news" className="hover:text-white transition-colors">
              {detailDict.news[currentLocale]}
            </Link>
            <span>/</span>
            <span className="text-red-500 font-medium line-clamp-1">
              {article.category[currentLocale]}
            </span>
          </div>

          <div className="space-y-4">
            <div className="inline-flex">
              <span className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-medium text-zinc-300">
                {article.category[currentLocale]}
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              {article.title[currentLocale]}
            </h1>

            <div className="flex flex-wrap items-center gap-6 pt-2 text-xs text-zinc-400 border-t border-zinc-800/80">
              <span className="flex items-center gap-1.5">
                <User className="w-4 h-4 text-zinc-500" />
                {article.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-zinc-500" />
                {article.createdAt}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-zinc-500" />
                {article.readTime} {detailDict.readDuration[currentLocale]}
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* Article Body */}
      <section className="py-12">
        <Container className="max-w-4xl space-y-10">
          {/* Main Hero Image */}
          <div className="relative h-80 sm:h-[420px] w-full rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-2xl">
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
          <div className="p-6 rounded-2xl bg-zinc-950 border-l-4 border-l-red-600 border border-zinc-850 text-base sm:text-lg text-zinc-200 font-medium leading-relaxed italic">
            «{article.excerpt[currentLocale]}»
          </div>

          {/* Text Content */}
          <div className="prose prose-invert max-w-none text-zinc-300 text-base sm:text-lg leading-relaxed space-y-6">
            {article.content[currentLocale].split('\n\n').map((paragraph, pIdx) => (
              <p key={pIdx}>{paragraph}</p>
            ))}
          </div>

          {/* Share & Actions Footer */}
          <div className="pt-8 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <Button href="/news" variant="outline" icon={<ArrowLeft className="w-4 h-4" />} iconPosition="left">
              {detailDict.backBtn[currentLocale]}
            </Button>

            <div className="flex items-center gap-3">
              <span className="text-xs text-zinc-400 font-semibold uppercase tracking-wider">
                {detailDict.share[currentLocale]}
              </span>
              <a
                href={`https://t.me/share/url?url=https://agzamovlegal.uz/news/${article.slug}&text=${encodeURIComponent(
                  article.title[currentLocale]
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 transition-all flex items-center gap-2 text-xs font-semibold"
              >
                <Send className="w-3.5 h-3.5 text-sky-400" />
                <span>Telegram</span>
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
