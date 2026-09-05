import React from 'react';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
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
  const currentLocale = (['ru', 'uz', 'en'].includes(locale) ? locale : 'ru') as Locale;

  const pageContent = {
    title: {
      ru: 'Практики и Юридические Услуги',
      uz: 'Bizning Xizmat Turlarimiz',
      en: 'Legal Practices & Advisory Services',
    },
    subtitle: {
      ru: 'Мы принимаем в производство строго ограниченное количество дел. Каждое поручение ведется лично старшими адвокатами без делегирования рядовым ассистентам.',
      uz: 'Biz cheklangan miqdordagi ishlarni qabul qilamiz. Har bir ish — advokatning shaxsiy ishtirokida, yordamchilarga topshirilmasdan yuritiladi.',
      en: 'We accept a strictly selective caseload. Every engagement is directed personally by senior counsel without delegation to junior assistants.',
    },
    principlesTitle: {
      ru: 'Наши Стандарты Практики',
      uz: 'Ish Tamoyillarimiz',
      en: 'Institutional Standards of Practice',
    },
    principlesSub: {
      ru: 'Бескомпромиссные регламенты судебной и процессуальной работы для достижения гарантированного правового результата.',
      uz: "Har bir ishda maksimal natijaga erishish uchun biz qat'iy amal qiladigan qoidalar.",
      en: 'Rigorous procedural methodologies formulated to maximize trial outcomes across high-value disputes.',
    },
    workflowTitle: {
      ru: 'Методология Достижения Победы',
      uz: "Qanday Qilib G'alabaga Erishamiz?",
      en: 'Strategic Pathway to Legal Victory',
    },
    workflowSub: {
      ru: 'Каждое поручение и судебный спор разрешаются по четкой 4-этапной системе аналитического и процессуального сопровождения.',
      uz: 'Har bir nizo va loyihani 4 ta bosqichli tizimli metodologiya orqali hal qilamiz.',
      en: 'Every dispute and engagement is structured across a disciplined 4-stage procedural framework.',
    },
    ctaTitle: {
      ru: 'Какая юридическая помощь вам необходима?',
      uz: 'Sizga Qaysi Xizmat Turida Yordam Kerak?',
      en: 'Which Legal Practice Area Matches Your Matter?',
    },
    ctaDesc: {
      ru: 'Изложите обстоятельства вашего спора или проекта. В течение 15 минут наши старшие адвокаты предоставят первичную правовую оценку.',
      uz: 'Vaziyatingizni advokatimizga tushuntiring, 15 daqiqa ichida dastlabki yuridik baho va taklifni taqdim etamiz.',
      en: 'Detail the parameters of your dispute or transaction. Senior counsel will formulate a preliminary merit appraisal within 15 minutes.',
    },
    ctaBtn: {
      ru: 'Запросить правовую консультацию',
      uz: "Maslahat uchun so'rov qoldirish",
      en: 'Request Legal Consultation',
    },
    detailsBtn: {
      ru: 'Подробнее',
      uz: "Batafsil ma'lumot",
      en: 'Practice Overview',
    },
    casesText: {
      ru: 'дел',
      uz: 'ish',
      en: 'cases',
    },
  };

  const workflowSteps = [
    {
      step: '01',
      title: {
        ru: 'Глубокий Правовой Аудит',
        uz: 'Hujjatlarni Sinchkov Tahlil Qilish',
        en: 'Exhaustive Document Audit',
      },
      desc: {
        ru: 'Анализ договоров, доказательственной базы и регуляторных рисков с выявлением всех уязвимостей оппонентов.',
        uz: 'Mavjud shartnomalar, dalillar va da‘volarni chuqur o‘rganib, real xavf va imkoniyatlarni aniqlaymiz.',
        en: 'Scrutinizing contracts, evidentiary records, and statutory exposures to identify opponent vulnerabilities.',
      },
      icon: <FileSearch className="w-6 h-6 text-red-600" />,
    },
    {
      step: '02',
      title: {
        ru: 'Формирование Победной Стратегии',
        uz: 'G‘oliblik Strategiyasini Tuzish',
        en: 'Precedent-Setting Strategy',
      },
      desc: {
        ru: 'Разработка пошагового процессуального плана с учетом свежей практики Верховного и экономических судов.',
        uz: 'Sud amaliyoti va qonun talablari asosida har bir bosqich uchun aniq taktik reja ishlab chiqamiz.',
        en: 'Formulating step-by-step procedural playbooks leveraging recent Supreme & Economic Court precedents.',
      },
      icon: <Compass className="w-6 h-6 text-red-600" />,
    },
    {
      step: '03',
      title: {
        ru: 'Судебная Защита и Переговоры',
        uz: 'Muzokaralar va Sud Himoyasi',
        en: 'Trial Advocacy & Settlement',
      },
      desc: {
        ru: 'Бескомпромиссное ведение процесса в заседаниях либо достижение взаимовыгодного мирового соглашения.',
        uz: 'Sud majlislarida murosasiz himoya qilamiz yoki nizoni suddan tashqari maksimal foydali kelishuv bilan hal etamiz.',
        en: 'Relentless courtroom representation or structuring airtight, highly advantageous out-of-court settlements.',
      },
      icon: <Gavel className="w-6 h-6 text-red-600" />,
    },
    {
      step: '04',
      title: {
        ru: 'Фактическое Исполнение Решения',
        uz: 'Ijroni Ta‘minlash va Natija',
        en: 'Enforcement & Asset Recovery',
      },
      desc: {
        ru: 'Мы доводим дело до реального взыскания задолженности, снятия арестов и защиты активов на балансе.',
        uz: 'Qaror qabul qilinishi bilan cheklanmay, mablag‘ yoki mulkning mijozga to‘liq qaytarilishini ta‘minlaymiz.',
        en: 'Ensuring total post-judgment enforcement, asset recovery, release of liens, and balance-sheet integrity.',
      },
      icon: <Trophy className="w-6 h-6 text-red-600" />,
    },
  ];

  return (
    <div className="pt-28 pb-20 bg-black min-h-screen">
      {/* Banner */}
      <section className="py-16 sm:py-20 border-b border-zinc-900 relative overflow-hidden">
        <Container className="relative z-10 text-center space-y-4 max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
            {pageContent.title[currentLocale]}
          </h1>
          <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed pt-1">
            {pageContent.subtitle[currentLocale]}
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
                      <span>{pageContent.detailsBtn[currentLocale]}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                    </Link>

                    <span className="text-[11px] font-mono text-zinc-500">
                      {service.casesCount}+ {pageContent.casesText[currentLocale]}
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
            title={pageContent.principlesTitle[currentLocale]}
            subtitle={pageContent.principlesSub[currentLocale]}
            dark
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
                    {currentLocale === 'ru' ? 'Принцип' : currentLocale === 'en' ? 'Principle' : 'Tamoyil'} 0{pIdx + 1}
                  </span>
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
            title={pageContent.workflowTitle[currentLocale]}
            subtitle={pageContent.workflowSub[currentLocale]}
            dark
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflowSteps.map((step) => (
              <div key={step.step} className="rounded-2xl p-6 sm:p-7 bg-zinc-950/80 border border-zinc-800 space-y-4 relative shadow-lg">
                <span className="text-3xl font-black text-red-600/40 font-mono">
                  {step.step}
                </span>
                <div className="h-10 w-10 rounded-lg bg-red-600/10 flex items-center justify-center">
                  {step.icon}
                </div>
                <h3 className="text-base font-bold text-white">
                  {step.title[currentLocale]}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {step.desc[currentLocale]}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Consultation Banner */}
      <section className="py-20 sm:py-24">
        <Container>
          <div className="rounded-3xl p-8 sm:p-12 lg:p-14 bg-zinc-950 border border-zinc-800 text-center max-w-4xl mx-auto space-y-6 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              {pageContent.ctaTitle[currentLocale]}
            </h2>
            <p className="text-sm text-zinc-400 max-w-xl mx-auto">
              {pageContent.ctaDesc[currentLocale]}
            </p>
            <Button href="/contact" size="lg" variant="primary" icon={<ArrowRight className="w-4 h-4" />}>
              {pageContent.ctaBtn[currentLocale]}
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
