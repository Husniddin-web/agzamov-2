import React from 'react';
import { setRequestLocale } from 'next-intl/server';
import { Container } from '@/components/common/Container';
import { ContactForm } from '@/components/forms/ContactForm';
import { siteConfig } from '@/config/site';
import { Locale } from '@/types';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  ShieldCheck,
  Building,
} from 'lucide-react';

interface ContactPageProps {
  params: Promise<{ locale: string }>;
}

const contactDict = {
  metaTitle: {
    uz: 'Aloqa — AGZAMOV LEGAL GROUP',
    ru: 'Контакты — AGZAMOV LEGAL GROUP',
    en: 'Contacts — AGZAMOV LEGAL GROUP',
  },
  metaDesc: {
    uz: 'Toshkent shahrida yuridik maslahat olish uchun bog‘lanish. Telefonlar, manzil va ariza qoldirish formasi.',
    ru: 'Свяжитесь с нами для юридической консультации в Ташкенте. Телефоны, адрес и форма онлайн-заявки.',
    en: 'Contact us for legal consultation in Tashkent. Phones, office address, and application form.',
  },
  title: {
    uz: 'Biz Bilan Bog‘laning',
    ru: 'Свяжитесь с Нами',
    en: 'Contact Us',
  },
  subtitle: {
    uz: 'Har qanday savol yoki nizo bo‘yicha advokatlarimiz bilan zudlik bilan bog‘lanishingiz yoki ofisimizga tashrif buyurishingiz mumkin.',
    ru: 'По любым юридическим вопросам и спорам вы можете оперативно связаться с нашими адвокатами или посетить наш офис.',
    en: 'For any legal inquiry or dispute, connect directly with our attorneys or visit our executive chambers.',
  },
  emergencyTitle: {
    uz: 'Favqulodda Holatlar Uchun (24/7)',
    ru: 'Экстренная Правовая Помощь (24/7)',
    en: 'Emergency Legal Assistance (24/7)',
  },
  emergencyDesc: {
    uz: 'Kechayu-kunduz shoshilinch advokat chaqiruvi:',
    ru: 'Круглосуточный вызов адвоката при неотложных ситуациях:',
    en: '24/7 round-the-clock urgent legal defense hotline:',
  },
  officeTitle: {
    uz: 'Bosh Ofis Ma‘lumotlari',
    ru: 'Главный Офис',
    en: 'Headquarters',
  },
  addressLabel: {
    uz: 'Manzil',
    ru: 'Адрес',
    en: 'Address',
  },
  phoneLabel: {
    uz: 'Telefonlar',
    ru: 'Телефоны',
    en: 'Phone Numbers',
  },
  emailLabel: {
    uz: 'Elektron Pochta',
    ru: 'Электронная Почта',
    en: 'Email Address',
  },
  workingHoursLabel: {
    uz: 'Ish Tartibi',
    ru: 'Режим Работы',
    en: 'Working Hours',
  },
  telegramTitle: {
    uz: 'Tezkor Telegram Aloqasi',
    ru: 'Оперативная связь в Telegram',
    en: 'Direct Telegram Support',
  },
  telegramAction: {
    uz: 'Yozish →',
    ru: 'Написать →',
    en: 'Message →',
  },
  formTitle: {
    uz: 'Yuridik Ariza Qoldiring',
    ru: 'Оставить Заявку на Консультацию',
    en: 'Request a Legal Consultation',
  },
  formSubtitle: {
    uz: 'Advokatimiz sizga zudlik bilan qo‘ng‘iroq qilib, vaziyat bo‘yicha dastlabki maslahat beradi',
    ru: 'Наш адвокат свяжется с вами в течение 15 минут для первичного правового анализа ситуации',
    en: 'Our attorney will contact you promptly to provide an initial legal evaluation of your case',
  },
};

export async function generateMetadata({ params }: ContactPageProps) {
  const { locale } = await params;
  const currentLocale = (['uz', 'ru', 'en'].includes(locale) ? locale : 'ru') as Locale;
  return {
    title: contactDict.metaTitle[currentLocale],
    description: contactDict.metaDesc[currentLocale],
  };
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const currentLocale = (['uz', 'ru', 'en'].includes(locale) ? locale : 'ru') as Locale;

  return (
    <div className="pt-28 pb-20 bg-black min-h-screen">
      {/* Banner */}
      <section className="py-16 border-b border-zinc-900 relative">
        <Container className="text-center space-y-4 max-w-4xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
            {contactDict.title[currentLocale]}
          </h1>
          <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            {contactDict.subtitle[currentLocale]}
          </p>
        </Container>
      </section>

      {/* Main Form & Contact Channels Grid */}
      <section className="py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Direct Info & Addresses (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              {/* 24/7 Hotline Card */}
              <div className="p-6 rounded-2xl bg-zinc-950/90 border border-zinc-800 space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-red-500 uppercase tracking-wider">
                  <ShieldCheck className="w-5 h-5 text-red-600" />
                  <span>{contactDict.emergencyTitle[currentLocale]}</span>
                </div>
                <p className="text-xs text-zinc-400">
                  {contactDict.emergencyDesc[currentLocale]}
                </p>
                <a
                  href={`tel:${siteConfig.emergencyPhoneClean}`}
                  className="block text-2xl font-black text-white hover:text-red-500 transition-colors"
                >
                  {siteConfig.emergencyPhone}
                </a>
              </div>

              {/* Office Details */}
              <div className="rounded-2xl bg-zinc-950/80 border border-zinc-800/80 p-6 space-y-6">
                <h2 className="text-lg font-bold text-white flex items-center gap-2">
                  <Building className="w-5 h-5 text-red-600" />
                  <span>{contactDict.officeTitle[currentLocale]}</span>
                </h2>

                <ul className="space-y-4 text-sm text-zinc-300">
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-zinc-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs text-zinc-500 font-semibold uppercase">{contactDict.addressLabel[currentLocale]}</p>
                      <p className="mt-0.5">{siteConfig.address[currentLocale]}</p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-zinc-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs text-zinc-500 font-semibold uppercase">{contactDict.phoneLabel[currentLocale]}</p>
                      <p className="mt-0.5">
                        <a href={`tel:${siteConfig.phoneClean}`} className="hover:text-red-500 transition-colors">
                          {siteConfig.phone}
                        </a>
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-zinc-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs text-zinc-500 font-semibold uppercase">{contactDict.emailLabel[currentLocale]}</p>
                      <p className="mt-0.5">
                        <a href={`mailto:${siteConfig.email}`} className="hover:text-red-500 transition-colors">
                          {siteConfig.email}
                        </a>
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-zinc-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs text-zinc-500 font-semibold uppercase">{contactDict.workingHoursLabel[currentLocale]}</p>
                      <p className="mt-0.5">{siteConfig.workingHours[currentLocale]}</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Telegram Channel / Direct Chat */}
              <a
                href={siteConfig.social.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-zinc-950/80 border border-zinc-800/80 hover:border-zinc-700 p-5 flex items-center justify-between group cursor-pointer block transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 group-hover:scale-105 transition-transform">
                    <Send className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-400 font-semibold uppercase">
                      {contactDict.telegramTitle[currentLocale]}
                    </p>
                    <p className="text-base font-bold text-white group-hover:text-sky-400 transition-colors">
                      {siteConfig.social.telegramHandle}
                    </p>
                  </div>
                </div>
                <span className="text-xs font-semibold text-sky-400 group-hover:translate-x-1 transition-transform">
                  {contactDict.telegramAction[currentLocale]}
                </span>
              </a>
            </div>

            {/* Right Column: Contact Form (7 cols) */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl bg-zinc-950/90 border border-zinc-800 p-8 sm:p-10 shadow-2xl">
                <div className="mb-6 pb-4 border-b border-zinc-900">
                  <h2 className="text-2xl font-black text-white">
                    {contactDict.formTitle[currentLocale]}
                  </h2>
                  <p className="text-xs text-zinc-400 mt-1">
                    {contactDict.formSubtitle[currentLocale]}
                  </p>
                </div>

                <ContactForm />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
