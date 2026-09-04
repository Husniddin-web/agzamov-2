import React from 'react';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { Container } from '@/components/common/Container';
import { GlowBadge } from '@/components/common/GlowBadge';
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

export async function generateMetadata({ params }: ContactPageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'nav' });
  return {
    title: `${t('contact')} — AGZAMOV LEGAL GROUP`,
    description:
      'Toshkent shahrida yuridik maslahat olish uchun bog‘lanish. Telefonlar, manzil va ariza qoldirish formasi.',
  };
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const currentLocale = locale as Locale;

  return (
    <div className="pt-28 pb-20 bg-black min-h-screen">
      {/* Banner */}
      <section className="py-16 border-b border-zinc-900 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-red-700/10 blur-[150px] pointer-events-none" />

        <Container className="relative z-10 text-center space-y-5">
          <GlowBadge icon>Aloqa va konsultatsiya</GlowBadge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
            Biz Bilan Bog&apos;laning
          </h1>
          <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Har qanday savol yoki nizo bo&apos;yicha advokatlarimiz bilan zudlik bilan bog&apos;lanishingiz yoki ofisimizga tashrif buyurishingiz mumkin.
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
              <div className="p-6 rounded-2xl bg-red-600/10 border border-red-600/30 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-red-500 uppercase tracking-wider">
                  <ShieldCheck className="w-5 h-5 text-red-600" />
                  <span>Favqulodda Holatlar Uchun (24/7)</span>
                </div>
                <p className="text-xs text-zinc-300">
                  Kechayu-kunduz shoshilinch advokat chaqiruvi:
                </p>
                <a
                  href={`tel:${siteConfig.emergencyPhoneClean}`}
                  className="block text-2xl font-black text-white hover:text-red-500 transition-colors"
                >
                  {siteConfig.emergencyPhone}
                </a>
              </div>

              {/* Office Details */}
              <div className="bento-card p-6 space-y-6">
                <h2 className="text-lg font-bold text-white flex items-center gap-2">
                  <Building className="w-5 h-5 text-red-600" />
                  <span>Bosh Ofis Ma&apos;lumotlari</span>
                </h2>

                <ul className="space-y-4 text-sm text-zinc-300">
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs text-zinc-500 font-semibold uppercase">Manzil</p>
                      <p className="mt-0.5">{siteConfig.address[currentLocale]}</p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs text-zinc-500 font-semibold uppercase">Telefonlar</p>
                      <p className="mt-0.5">
                        <a href={`tel:${siteConfig.phoneClean}`} className="hover:text-red-500 transition-colors">
                          {siteConfig.phone}
                        </a>
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs text-zinc-500 font-semibold uppercase">Elektron Pochta</p>
                      <p className="mt-0.5">
                        <a href={`mailto:${siteConfig.email}`} className="hover:text-red-500 transition-colors">
                          {siteConfig.email}
                        </a>
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs text-zinc-500 font-semibold uppercase">Ish Tartibi</p>
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
                className="bento-card p-5 flex items-center justify-between group cursor-pointer block border-sky-500/30"
              >
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-xl bg-sky-500/15 border border-sky-500/30 flex items-center justify-center text-sky-400 group-hover:scale-110 transition-transform">
                    <Send className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-400 font-semibold uppercase">
                      Tezkor Telegram Aloqasi
                    </p>
                    <p className="text-base font-bold text-white group-hover:text-sky-400 transition-colors">
                      {siteConfig.social.telegramHandle}
                    </p>
                  </div>
                </div>
                <span className="text-xs font-bold text-sky-400 group-hover:translate-x-1 transition-transform">
                  Yozish →
                </span>
              </a>
            </div>

            {/* Right Column: Contact Form (7 cols) */}
            <div className="lg:col-span-7">
              <div className="bento-card p-8 sm:p-10 border-red-600/40 bg-zinc-950 shadow-2xl">
                <div className="mb-6 pb-4 border-b border-zinc-800">
                  <h2 className="text-2xl font-black text-white">
                    Yuridik Ariza Qoldiring
                  </h2>
                  <p className="text-xs text-zinc-400 mt-1">
                    Advokatimiz sizga zudlik bilan qo&apos;ng&apos;iroq qilib, vaziyat bo&apos;yicha dastlabki maslahat beradi
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
