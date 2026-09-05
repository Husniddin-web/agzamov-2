import React from 'react';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { Container } from '@/components/common/Container';
import { PageHeader } from '@/components/common/PageHeader';
import { Button } from '@/components/common/Button';
import { ContactForm } from '@/components/forms/ContactForm';
import { mockServices } from '@/data/mockData';
import { Locale } from '@/types';
import {
  Building2,
  Scale,
  ShieldAlert,
  Coins,
  Lightbulb,
  Landmark,
  FileCheck2,
  Lock,
  Globe,
  ArrowLeft,
  CheckCircle2,
  ShieldCheck,
} from 'lucide-react';
import { siteConfig } from '@/config/site';

const iconMap: Record<string, React.ReactNode> = {
  Building2: <Building2 className="w-8 h-8 text-red-700" />,
  Scale: <Scale className="w-8 h-8 text-red-700" />,
  ShieldAlert: <ShieldAlert className="w-8 h-8 text-red-700" />,
  Coins: <Coins className="w-8 h-8 text-red-700" />,
  Lightbulb: <Lightbulb className="w-8 h-8 text-red-700" />,
  Landmark: <Landmark className="w-8 h-8 text-red-700" />,
  FileCheck2: <FileCheck2 className="w-8 h-8 text-red-700" />,
  Lock: <Lock className="w-8 h-8 text-red-700" />,
  Globe: <Globe className="w-8 h-8 text-red-700" />,
};

interface ServiceDetailPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

const serviceDetailDict = {
  home: { uz: 'Bosh sahifa', ru: 'Главная', en: 'Home' },
  services: { uz: 'Xizmatlar', ru: 'Услуги', en: 'Services' },
  allServices: { uz: 'Barcha xizmatlar', ru: 'Все услуги', en: 'All Services' },
  practiceArea: { uz: 'YURIDIK AMALIYOT', ru: 'ЮРИДИЧЕСКАЯ ПРАКТИКА', en: 'PRACTICE AREA' },
  overview: { uz: 'Xizmat Haqida Umumiy Ma‘lumot', ru: 'Общее Описание Практики', en: 'Overview' },
  solutionsTitle: { uz: 'Biz Taqdim Etadigan Huquqiy Yechimlar', ru: 'Предоставляемые Правовые Решения', en: 'Legal Solutions We Provide' },
  guaranteeTitle: { uz: 'Kafolatlangan Maxfiylik va Halollik', ru: 'Гарантия Конфиденциальности и Честности', en: 'Guaranteed Confidentiality and Integrity' },
  guaranteeDesc: {
    uz: 'Ushbu yo‘nalish bo‘yicha tuziladigan shartnoma mijozning to‘liq huquqiy xavfsizligini ta‘minlaydi. Har bir harakat O‘zbekiston Respublikasi «Advokatura to‘g‘risida»gi qonuni talablariga qat‘iy mos ravishda amalga oshiriladi.',
    ru: 'Договор на оказание юридической помощи гарантирует полную конфиденциальность (адвокатскую тайну) и правовую защиту доверителя в строгом соответствии с Законом РУз «Об адвокатуре».',
    en: 'Every engagement adheres strictly to advocate-client privilege and procedural law. All legal steps are executed in compliance with statutory advocate standards.',
  },
  ctaTitle: { uz: 'Ushbu Xizmat Bo‘yicha Maslahat Oling', ru: 'Получить Консультацию по Практике', en: 'Consult on This Practice Area' },
  ctaSubtitle: { uz: 'Advokatimiz 15 daqiqada siz bilan bog‘lanadi', ru: 'Адвокат свяжется с вами в течение 15 минут', en: 'Our attorney will contact you within 15 minutes' },
  orCall: { uz: 'Yoki to‘g‘ridan-to‘g‘ri qo‘ng‘iroq qiling:', ru: 'Или позвоните напрямую:', en: 'Or call directly:' },
};

export async function generateStaticParams() {
  const paths: { locale: string; slug: string }[] = [];
  const locales = ['uz', 'ru', 'en'];

  for (const locale of locales) {
    for (const s of mockServices) {
      paths.push({ locale, slug: s.slug });
    }
  }

  return paths;
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const service = mockServices.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const currentLocale = (['uz', 'ru', 'en'].includes(locale) ? locale : 'ru') as Locale;

  return (
    <div className="bg-white min-h-screen">
      {/* Top Hero Banner matching user reference image */}
      <PageHeader
        title={service.title[currentLocale]}
        eyebrow={serviceDetailDict.practiceArea[currentLocale]}
        imageSrc="/banners/services-banner.jpg"
        breadcrumbs={[
          { label: serviceDetailDict.home[currentLocale], href: '/' },
          { label: serviceDetailDict.services[currentLocale], href: '/services' },
          { label: service.title[currentLocale] },
        ]}
      />

      {/* Main Content Area on Pure White */}
      <section className="py-16 sm:py-24 bg-white">
        <Container>
          <div className="flex items-center justify-between gap-4 pb-10 border-b border-zinc-200 mb-12">
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 rounded-2xl bg-red-50 border border-red-100 flex items-center justify-center shrink-0">
                {iconMap[service.iconName] || <Scale className="w-7 h-7 text-red-700" />}
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-red-700">
                  {serviceDetailDict.practiceArea[currentLocale]}
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-zinc-900">
                  {service.title[currentLocale]}
                </h2>
              </div>
            </div>

            <Button href="/services" variant="outline" icon={<ArrowLeft className="w-4 h-4" />} iconPosition="left">
              {serviceDetailDict.allServices[currentLocale]}
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Content (8 cols) */}
            <div className="lg:col-span-8 space-y-10">
              {/* Detailed Description */}
              <div className="rounded-2xl bg-white border border-zinc-200/90 shadow-sm p-8 sm:p-10 space-y-6">
                <h3 className="text-2xl font-black text-zinc-900">
                  {serviceDetailDict.overview[currentLocale]}
                </h3>
                <p className="text-base text-zinc-700 leading-relaxed">
                  {service.fullDesc[currentLocale]}
                </p>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  {service.shortDesc[currentLocale]}
                </p>
              </div>

              {/* What We Provide / Key Services */}
              <div className="rounded-2xl bg-white border border-zinc-200/90 shadow-sm p-8 sm:p-10 space-y-6">
                <h3 className="text-2xl font-black text-zinc-900">
                  {serviceDetailDict.solutionsTitle[currentLocale]}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {service.features[currentLocale].map((feat, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-zinc-50 border border-zinc-200 flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-red-700 shrink-0 mt-0.5" />
                      <span className="text-sm font-medium text-zinc-800">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Guarantees Box */}
              <div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-200 space-y-4">
                <div className="flex items-center gap-3 text-red-700 font-bold">
                  <ShieldCheck className="w-6 h-6 text-red-700" />
                  <h4 className="text-lg">{serviceDetailDict.guaranteeTitle[currentLocale]}</h4>
                </div>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  {serviceDetailDict.guaranteeDesc[currentLocale]}
                </p>
              </div>
            </div>

            {/* Right Sidebar: Contact Form for This Service (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              <div className="rounded-2xl bg-white border border-zinc-200 shadow-xl p-6 sm:p-8 sticky top-28 space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-zinc-900">
                    {serviceDetailDict.ctaTitle[currentLocale]}
                  </h3>
                  <p className="text-xs text-zinc-500 mt-1">
                    {serviceDetailDict.ctaSubtitle[currentLocale]}
                  </p>
                </div>

                <ContactForm defaultService={service.slug} lightMode={true} />

                <div className="pt-4 border-t border-zinc-100 text-center">
                  <p className="text-xs text-zinc-500">{serviceDetailDict.orCall[currentLocale]}</p>
                  <a
                    href={`tel:${siteConfig.phoneClean}`}
                    className="block text-base font-extrabold text-red-700 hover:text-red-800 mt-1"
                  >
                    {siteConfig.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
