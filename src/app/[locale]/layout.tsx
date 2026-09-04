import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { AosProvider } from '@/components/common/AosProvider';
import '../globals.css';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--font-poppins',
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const titles: Record<string, string> = {
    ru: 'AGZAMOV LEGAL GROUP — Профессиональные юридические услуги и адвокатура в Ташкенте',
    uz: 'AGZAMOV LEGAL GROUP — Professional Yuridik Xizmatlar va Advokatura',
    en: 'AGZAMOV LEGAL GROUP — Professional Legal Services & Advocacy in Tashkent',
  };

  const descriptions: Record<string, string> = {
    ru: 'Высококвалифицированные адвокаты и юридический консалтинг в Ташкенте. Корпоративное право, экономические суды, уголовная защита и налоговые споры.',
    uz: 'Toshkentda yuqori toifali advokatlar va yuridik konsalting. Korporativ huquq, iqtisodiy sudlar, jinoiy himoya va soliq nizolari bo‘yicha ishonchli yechimlar.',
    en: 'High-class attorneys and legal consulting in Tashkent. Corporate law, economic courts, criminal defense, and tax disputes.',
  };

  const keywords: Record<string, string[]> = {
    ru: [
      'адвокат Ташкент',
      'юрист Ташкент',
      'юридические услуги',
      'корпоративное право',
      'экономический суд',
      'уголовная защита',
      'Agzamov Legal Group',
    ],
    uz: [
      'advokat Toshkent',
      'yurist Toshkent',
      'yuridik xizmatlar',
      'korporativ huquq',
      'iqtisodiy sud',
      'jinoiy himoya',
      'Agzamov Legal Group',
    ],
    en: [
      'lawyer Tashkent',
      'attorney Tashkent',
      'legal services Uzbekistan',
      'corporate law',
      'commercial disputes',
      'Agzamov Legal Group',
    ],
  };

  return {
    title: {
      template: '%s | AGZAMOV LEGAL GROUP',
      default: titles[locale] || titles.ru,
    },
    description: descriptions[locale] || descriptions.ru,
    keywords: keywords[locale] || keywords.ru,
    icons: {
      icon: [
        { url: '/icon.png', type: 'image/png' },
        { url: '/favicon.ico' },
      ],
      apple: [{ url: '/apple-icon.png' }],
      shortcut: '/favicon.ico',
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;

  // Validate locale
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  setRequestLocale(locale);

  // Providing all messages to the client side
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${poppins.variable} dark scroll-smooth`}>
      <body className={`${poppins.className} min-h-screen bg-black text-zinc-100 flex flex-col font-sans selection:bg-red-700 selection:text-white antialiased`}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <AosProvider>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </AosProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
