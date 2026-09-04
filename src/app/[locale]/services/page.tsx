import React from 'react';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { GlowBadge } from '@/components/common/GlowBadge';
import { Button } from '@/components/common/Button';
import { mockServices, mockPrinciples } from '@/data/mockData';
import { Locale } from '@/types';
import { Link } from '@/i18n/routing';
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
  ArrowRight,
  CheckCircle2,
  FileSearch,
  Compass,
  Gavel,
  Trophy,
  UserCheck,
  Target,
  ShieldCheck,
  Zap,
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Building2: <Building2 className="w-6 h-6 text-red-600" />,
  Scale: <Scale className="w-6 h-6 text-red-600" />,
  ShieldAlert: <ShieldAlert className="w-6 h-6 text-red-600" />,
  Coins: <Coins className="w-6 h-6 text-red-600" />,
  Lightbulb: <Lightbulb className="w-6 h-6 text-red-600" />,
  Landmark: <Landmark className="w-6 h-6 text-red-600" />,
  FileCheck2: <FileCheck2 className="w-6 h-6 text-red-600" />,
  Lock: <Lock className="w-6 h-6 text-red-600" />,
  Globe: <Globe className="w-6 h-6 text-red-600" />,
};

const principleIcons = [
  <UserCheck key="1" className="w-5 h-5" />,
  <Target key="2" className="w-5 h-5" />,
  <ShieldCheck key="3" className="w-5 h-5" />,
  <Zap key="4" className="w-5 h-5" />,
];

interface ServicesPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: ServicesPageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'nav' });
  return {
    title: `${t('services')} — AGZAMOV LEGAL GROUP`,
    description:
      'Korporativ huquq, sud nizolari, jinoiy himoya, soliq auditi va intellektual mulk bo‘yicha professional yuridik xizmatlar.',
  };
}

export default async function ServicesPage({ params }: ServicesPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const currentLocale = locale as Locale;

  const workflowSteps = [
    {
      step: '01',
      title: 'Hujjatlarni Sinchkov Tahlil Qilish',
      desc: 'Mavjud shartnomalar, dalillar va da‘volarni chuqur o‘rganib, real xavf va imkoniyatlarni aniqlaymiz.',
      icon: <FileSearch className="w-6 h-6 text-red-600" />,
    },
    {
      step: '02',
      title: 'G‘oliblik Strategiyasini Tuzish',
      desc: 'Sud amaliyoti va qonun talablari asosida har bir bosqich uchun aniq taktik reja ishlab chiqamiz.',
      icon: <Compass className="w-6 h-6 text-red-600" />,
    },
    {
      step: '03',
      title: 'Muzokaralar va Sud Himoyasi',
      desc: 'Sud majlislarida murosasiz himoya qilamiz yoki nizoni suddan tashqari maksimal foydali kelishuv bilan hal etamiz.',
      icon: <Gavel className="w-6 h-6 text-red-600" />,
    },
    {
      step: '04',
      title: 'Ijroni Ta‘minlash va Natija',
      desc: 'Qaror qabul qilinishi bilan cheklanmay, mablag‘ yoki mulkning mijozga to‘liq qaytarilishini ta‘minlaymiz.',
      icon: <Trophy className="w-6 h-6 text-red-600" />,
    },
  ];

  return (
    <div className="pt-28 pb-20 bg-black min-h-screen">
      {/* Banner */}
      <section className="py-16 border-b border-zinc-900 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-red-700/10 blur-[150px] pointer-events-none" />

        <Container className="relative z-10 text-center space-y-5">
          <GlowBadge icon>Yuridik xizmatlar</GlowBadge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
            Bizning Xizmat Turlarimiz
          </h1>
          <p className="text-base sm:text-lg text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            Biz cheklangan miqdordagi ishlarni qabul qilamiz. Har bir ish — advokatning shaxsiy ishtirokida, yordamchilarga topshirilmasdan yuritiladi.
          </p>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <Container className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {mockServices.map((service, idx) => {
              const formattedNumber = `0${idx + 1}`;

              return (
                <div
                  key={service.id}
                  className="group relative rounded-2xl p-7 sm:p-8 bg-[#0c1017] hover:bg-gradient-to-b hover:from-red-950/20 hover:to-[#0c1017] border border-white/[0.08] hover:border-red-600/50 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.4)] hover:shadow-[0_0_35px_-5px_rgba(220,38,38,0.22)] transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:border-red-600/40 group-hover:bg-red-600/20 transition-all duration-300">
                        {iconMap[service.iconName] || <Scale className="w-5 h-5" />}
                      </div>

                      <span className="font-mono text-4xl sm:text-5xl font-black text-transparent select-none [-webkit-text-stroke:1.5px_rgba(255,255,255,0.22)] group-hover:[-webkit-text-stroke:0px] group-hover:text-red-600 transition-all duration-300">
                        {formattedNumber}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-white mt-6 mb-3 leading-snug tracking-tight transition-colors">
                      {service.title[currentLocale]}
                    </h3>

                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed line-clamp-3">
                      {service.shortDesc[currentLocale]}
                    </p>

                    <ul className="space-y-2 pt-4 mt-4 border-t border-white/[0.06]">
                      {service.features[currentLocale].slice(0, 3).map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-2 text-xs text-zinc-400">
                          <CheckCircle2 className="w-3.5 h-3.5 text-red-600 shrink-0" />
                          <span className="line-clamp-1">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center justify-between">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-400 group-hover:text-red-500 transition-colors"
                    >
                      <span>Batafsil ma&apos;lumot</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                    </Link>

                    <span className="text-[11px] font-mono text-zinc-600">
                      {service.casesCount}+ ish
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Principles Section */}
      <section className="py-20 bg-zinc-950/70 border-t border-zinc-900">
        <Container className="space-y-12">
          <SectionHeading
            tag="Standartlarimiz"
            title="Ish Tamoyillarimiz"
            subtitle="Har bir ishda maksimal natijaga erishish uchun biz qat'iy amal qiladigan qoidalar."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mockPrinciples.map((principle, pIdx) => (
              <div
                key={principle.id}
                className="group relative rounded-2xl p-6 sm:p-7 bg-[#0b0e14] hover:bg-[#0f141f] border border-white/[0.08] hover:border-red-600/40 shadow-lg transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-2xl font-black text-red-600/80 group-hover:text-red-500 transition-colors">
                      {principle.number}
                    </span>
                    <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-red-500 group-hover:border-red-600/30 transition-all">
                      {principleIcons[pIdx]}
                    </div>
                  </div>

                  <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-white leading-snug">
                    {principle.title[currentLocale]}
                  </h4>

                  <p className="text-xs sm:text-[13px] text-zinc-400 font-normal leading-relaxed group-hover:text-zinc-300">
                    {principle.desc[currentLocale]}
                  </p>
                </div>

                <div className="pt-4 mt-5 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="text-[10px] font-mono tracking-widest text-zinc-600 uppercase">
                    Tamoyil 0{pIdx + 1}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600/50 group-hover:bg-red-500" />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4-Step Process Section */}
      <section className="py-20 bg-zinc-950/60 border-y border-zinc-900">
        <Container className="space-y-16">
          <SectionHeading
            tag="Ish Jarayoni"
            title="Qanday Qilib G'alabaga Erishamiz?"
            subtitle="Har bir nizo va loyihani 4 ta bosqichli tizimli metodologiya orqali hal qilamiz."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflowSteps.map((step) => (
              <div key={step.step} className="bento-card p-6 sm:p-7 space-y-4 relative">
                <span className="text-3xl font-black text-red-600/40 font-mono">
                  {step.step}
                </span>
                <div className="h-10 w-10 rounded-lg bg-red-600/10 flex items-center justify-center">
                  {step.icon}
                </div>
                <h3 className="text-base font-bold text-white">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Consultation Banner */}
      <section className="py-20">
        <Container>
          <div className="bento-card p-8 sm:p-12 border-red-600/40 text-center max-w-4xl mx-auto space-y-6">
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Sizga Qaysi Xizmat Turida Yordam Kerak?
            </h2>
            <p className="text-sm text-zinc-400 max-w-xl mx-auto">
              Vaziyatingizni advokatimizga tushuntiring, 15 daqiqa ichida dastlabki yuridik baho va taklifni taqdim etamiz.
            </p>
            <Button href="/contact" size="lg" variant="primary" icon={<ArrowRight className="w-4 h-4" />}>
              Maslahat uchun so&apos;rov qoldirish
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
