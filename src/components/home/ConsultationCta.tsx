import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';
import { ContactForm } from '../forms/ContactForm';
import { siteConfig } from '@/config/site';
import { Locale } from '@/types';
import { Phone, MapPin, Send, ArrowUpRight } from 'lucide-react';

export const ConsultationCta: React.FC = () => {
  const t = useTranslations('contact');
  const locale = useLocale() as Locale;

  return (
    <section id="consultation" className="py-20 sm:py-28 bg-white relative overflow-hidden border-t border-zinc-100">
      <Container className="relative z-10">
        {/* Executive Consultation Boardroom Suite */}
        <div className="relative rounded-[32px] sm:rounded-[40px] bg-[#0c0c0d] bg-grid-pattern border border-zinc-800/90 shadow-2xl p-8 sm:p-12 lg:p-16 overflow-hidden">
          {/* Subtle top light gradient line */}
          <div className="absolute top-0 inset-x-12 h-px bg-gradient-to-r from-transparent via-red-600/50 to-transparent" />
          {/* Ambient red glow blob */}
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-red-950/30 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
            
            {/* Left Column: Direct Human Communication Channels (6 cols) */}
            <div className="lg:col-span-6 space-y-8 text-left" data-aos="fade-right" data-aos-duration="850">
              <SectionHeading
                title={t('title')}
                subtitle={t('subtitle')}
                centered={false}
                dark={true}
              />

              {/* Direct Contact Cards */}
              <div className="space-y-4 pt-2">
                {/* Telephone Card */}
                <a
                  href={`tel:${siteConfig.phoneClean}`}
                  className="group p-5 rounded-2xl bg-zinc-900/60 hover:bg-zinc-900 border border-white/10 hover:border-red-600/40 transition-all duration-300 flex items-center justify-between block shadow-lg"
                >
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl bg-red-700/15 border border-red-600/30 flex items-center justify-center text-red-500 group-hover:bg-red-700 group-hover:text-white transition-all">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="text-xs text-zinc-400 font-semibold uppercase tracking-wider">
                          Telefon orqali bog&apos;lanish
                        </p>
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      </div>
                      <p className="text-lg font-black text-white group-hover:text-red-400 transition-colors">
                        {siteConfig.phone}
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>

                {/* Telegram Card */}
                <a
                  href={siteConfig.social.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-5 rounded-2xl bg-zinc-900/60 hover:bg-zinc-900 border border-white/10 hover:border-sky-500/40 transition-all duration-300 flex items-center justify-between block shadow-lg"
                >
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl bg-sky-500/15 border border-sky-500/30 flex items-center justify-center text-sky-400 group-hover:bg-sky-500 group-hover:text-white transition-all">
                      <Send className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-zinc-400 font-semibold uppercase tracking-wider">
                        {t('telegram')}
                      </p>
                      <p className="text-lg font-black text-white group-hover:text-sky-400 transition-colors">
                        {siteConfig.social.telegramHandle}
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>

                {/* Location Card */}
                <div className="p-5 rounded-2xl bg-zinc-900/40 border border-white/10 flex items-start gap-4 shadow-lg">
                  <div className="h-12 w-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-zinc-300 shrink-0">
                    <MapPin className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-400 font-semibold uppercase tracking-wider">
                      {t('officeLocation')}
                    </p>
                    <p className="text-sm font-bold text-white mt-1 leading-snug">
                      {siteConfig.address[locale]}
                    </p>
                    <p className="text-xs text-zinc-500 mt-1">
                      Dush - Shan: 09:00 - 18:00 (Advokat qabuli oldindan yozilish orqali)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form with Crisp Clean Border */}
            <div className="lg:col-span-6 relative" data-aos="fade-left" data-aos-duration="850">
              <div className="relative rounded-3xl border border-zinc-800/90 hover:border-red-700/40 bg-zinc-950/95 p-7 sm:p-9 shadow-2xl transition-all duration-300">
                <div className="mb-6 pb-4 border-b border-white/10">
                  <h3 className="text-xl font-extrabold text-white tracking-tight">
                    Tezkor Yuridik Maslahat Olish
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1">
                    Mutaxassisimiz 15 daqiqa ichida siz bilan bog&apos;lanadi
                  </p>
                </div>

                <ContactForm />
              </div>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
};
