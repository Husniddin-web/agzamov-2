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

export const metadata: Metadata = {
  title: {
    template: '%s | AGZAMOV LEGAL GROUP',
    default: 'AGZAMOV LEGAL GROUP — Professional Yuridik Xizmatlar va Advokatura',
  },
  description:
    'Toshkentda yuqori toifali advokatlar va yuridik konsalting. Korporativ huquq, iqtisodiy sudlar, jinoiy himoya va soliq nizolari bo‘yicha ishonchli yechimlar.',
  keywords: [
    'advokat Toshkent',
    'yurist Toshkent',
    'yuridik xizmatlar',
    'korporativ huquq',
    'iqtisodiy sud',
    'jinoiy himoya',
    'Agzamov Legal Group',
  ],
  icons: {
    icon: [
      { url: '/icon.png', type: 'image/png' },
      { url: '/favicon.ico' },
    ],
    apple: [
      { url: '/apple-icon.png' },
    ],
    shortcut: '/favicon.ico',
  },
};

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
