import React from 'react';
import Image from 'next/image';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Button } from '@/components/common/Button';
import { siteConfig } from '@/config/site';
import { Locale } from '@/types';
import {
  ShieldCheck,
  Scale,
  Target,
  HeartHandshake,
  ArrowRight,
} from 'lucide-react';

interface AboutPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: AboutPageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'nav' });
  return {
    title: `${t('about')} — AGZAMOV LEGAL GROUP`,
    description:
      locale === 'ru'
        ? 'История, ценности и безупречные стандарты ведущего адвокатского бюро AGZAMOV LEGAL GROUP в Ташкенте.'
        : locale === 'en'
        ? 'History, values, and uncompromising legal standards of AGZAMOV LEGAL GROUP advocacy in Tashkent.'
        : 'AGZAMOV LEGAL GROUP advokatlik byurosi tarixi, missiyasi, jamoasi va yuridik standartlari haqida to‘liq ma‘lumot.',
  };
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const currentLocale = (['ru', 'uz', 'en'].includes(locale) ? locale : 'ru') as Locale;

  const content = {
    title: {
      ru: 'О компании — AGZAMOV LEGAL GROUP',
      uz: 'Biz Haqimizda — AGZAMOV LEGAL GROUP',
      en: 'About Us — AGZAMOV LEGAL GROUP',
    },
    subtitle: {
      ru: 'Команда ведущих адвокатов и юридических консультантов, объединившихся для бескомпромиссной защиты вашего бизнеса и восстановления справедливости.',
      uz: 'Biznesingizni himoya qilish va adolatni tiklash uchun birlashgan yetakchi advokat va yuridik maslahatchilar jamoasi.',
      en: 'A premier collective of senior trial advocates and corporate counsel united for the decisive protection of enterprise interests.',
    },
    storyTitle: {
      ru: 'История бескомпромиссной защиты и сотен выигранных судебных процессов',
      uz: "Yuksak obro' va yuzlab yutilgan sud ishlari ortidagi haqiqat",
      en: 'The Proven Record Behind Hundreds of Precedent-Setting Victories',
    },
    p1: {
      ru: 'AGZAMOV LEGAL GROUP — ведущее адвокатское бюро в Ташкенте, заслужившее статус надежного и бескомпромиссного правового защитника. Наша ключевая цель — сохранение и приумножение активов доверителей даже в самых сложных судебных и регуляторных спорах.',
      uz: "AGZAMOV LEGAL GROUP — Toshkent shahrida tashkil etilgan bo'lib, qisqa fursat ichida respublikadagi eng ishonchli va murosasiz advokatlik tuzilmalaridan biriga aylandi. Bizning maqsadimiz — mijozlarimizning huquqlari va biznes aktivlarini har qanday murakkab vaziyatda xavfsiz saqlashdir.",
      en: 'AGZAMOV LEGAL GROUP is a premier law firm established in Tashkent, recognized for uncompromising advocacy and procedural mastery. Our primary purpose is securing enterprise assets and commercial stability across high-stakes trial arenas.',
    },
    p2: {
      ru: 'Мы не ограничиваемся цитированием правовых норм. Мы разрабатываем практические, проверенные судебной практикой процессуальные стратегии, направленные исключительно на победу и максимальную выгоду клиента.',
      uz: "Biz shunchaki nazariy qonun moddalarini sanab bermaymiz. Biz amaliyotda ishlaydigan, real sud muhokamalarida sinalgan va mijozning foydasiga hal bo'ladigan strategik rejalarni ishlab chiqamiz.",
      en: 'We go far beyond quoting legal statutes. We architect actionable, trial-tested procedural strategies designed solely to secure decisive outcomes in our clients’ favor.',
    },
    principlesTitle: {
      ru: 'Наши ключевые принципы',
      uz: 'Bizning Bosh Tamoyillarimiz',
      en: 'Our Core Standards of Practice',
    },
    principlesSub: {
      ru: 'В каждом судебном процессе и правовой сделке мы неукоснительно следуем этим 4 фундаментальным стандартам.',
      uz: 'Har bir qabul qilingan qaror va sud jarayonida ushbu 4 ta tayanch mezoniga suyanamiz.',
      en: 'Every procedural decision and courtroom representation is anchored upon these four institutional pillars.',
    },
    quoteHeadline: {
      ru: '«Каждая минута вашего бизнеса бесценна. Доверьте правовую защиту тем, кто отвечает за результат репутацией.»',
      uz: "«Biznesingizning har bir daqiqasi qimmatli. Huquqiy muammolarni obro'si bilan javob beradigan mutaxassislarga ishonib topshiring.»",
      en: '«Every hour of enterprise operations is invaluable. Entrust your legal defense to counsel whose reputation guarantees outcomes.»',
    },
    quoteDesc: {
      ru: 'Адвокатская деятельность — это не просто знание законов, это искусство брать на себя полную ответственность за судьбу доверителя и будущее бизнеса. Команда AGZAMOV LEGAL GROUP действует именно с такой мерой ответственности.',
      uz: "Advokatlik kasbi — bu faqat qonunlarni bilish emas, balki odamlarning taqdiri va bizneslarning kelajagi uchun to'liq mas'uliyatni o'z zimmasiga olish san'atidir. AGZAMOV LEGAL GROUP jamoasi aynan shu mas'uliyat bilan xizmat qiladi.",
      en: 'The legal profession is not simply mastering statutes; it is the discipline of shouldering decisive responsibility for the client’s standing and enterprise future. AGZAMOV LEGAL GROUP operates under this exact mandate.',
    },
    contactBtn: {
      ru: 'Связаться с адвокатом',
      uz: "Advokat bilan bog'lanish",
      en: 'Consult With Counsel',
    },
    teamBtn: {
      ru: 'Наша команда',
      uz: 'Bizning jamoa',
      en: 'Our Team',
    },
    statExp: {
      ru: 'Лет практики',
      uz: 'Yillik tajriba',
      en: 'Years Practice',
    },
    statCases: {
      ru: 'Выигранных дел',
      uz: 'Yutilgan ishlar',
      en: 'Won Cases',
    },
    statRate: {
      ru: 'Успешных исходов',
      uz: "G'alaba ko'rsatkichi",
      en: 'Success Rate',
    },
  };

  const values = [
    {
      title: {
        ru: 'Бескомпромиссный Профессионализм',
        uz: 'Murosasiz Professionallik',
        en: 'Uncompromising Mastery',
      },
      desc: {
        ru: 'Глубокий доказательственный анализ и достижение максимального результата строго в рамках закона.',
        uz: 'Har bir ishga chuqur tahliliy yondashuv va qonun doirasida maksimal foydali natija.',
        en: 'Exhaustive evidentiary analysis delivering optimal procedural outcomes within statutory framework.',
      },
      icon: <Scale className="w-6 h-6 text-red-600" />,
    },
    {
      title: {
        ru: 'Абсолютная Конфиденциальность',
        uz: 'Mutlaq Maxfiylik',
        en: 'Absolute Confidentiality',
      },
      desc: {
        ru: 'Адвокатская тайна священна. Никакие детали дела никогда не передаются третьим лицам.',
        uz: 'Advokatlik siri muqaddas burch. Ish tafsilotlari hech qachon uchinchi shaxslarga oshkor etilmaydi.',
        en: 'Strict attorney-client privilege protecting all corporate communications and evidentiary materials.',
      },
      icon: <ShieldCheck className="w-6 h-6 text-red-600" />,
    },
    {
      title: {
        ru: 'Стратегическое Мышление',
        uz: 'Strategik Tafakkur',
        en: 'Strategic Forethought',
      },
      desc: {
        ru: 'Прогнозируем риски на 5–10 шагов вперед и нейтрализуем угрозы до начала открытого конфликта.',
        uz: "5-10 qadam oldindagi huquqiy xatarlarni ko'ra olamiz va ularni oldindan bartaraf etamiz.",
        en: 'Anticipating legal and regulatory risks 5–10 steps ahead, pre-empting procedural liabilities.',
      },
      icon: <Target className="w-6 h-6 text-red-600" />,
    },
    {
      title: {
        ru: 'Прозрачное Партнерство',
        uz: 'Halol va Shaffof Hamkorlik',
        en: 'Principled Partnership',
      },
      desc: {
        ru: 'Никаких ложных обещаний. Объективная правовая оценка перспектив и прозрачные условия работы.',
        uz: "Asossiz va'dalar bermaymiz. Vaziyatni xolis baholab, ochiq va shaffof harakat qilamiz.",
        en: 'Zero unfounded promises. Clear, candid merit assessment and fully predictable fee arrangements.',
      },
      icon: <HeartHandshake className="w-6 h-6 text-red-600" />,
    },
  ];

  return (
    <div className="pt-28 pb-20 bg-black min-h-screen text-zinc-100">
      {/* Clean Editorial Hero Header */}
      <section className="relative py-16 sm:py-20 border-b border-white/10 overflow-hidden">
        <Container className="relative z-10 text-center space-y-4 max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            {currentLocale === 'ru' ? (
              <>
                О компании — <span className="text-[#d23b3b]">AGZAMOV LEGAL</span>
              </>
            ) : currentLocale === 'en' ? (
              <>
                About Us — <span className="text-[#d23b3b]">AGZAMOV LEGAL</span>
              </>
            ) : (
              <>
                Biz Haqimizda — <span className="text-[#d23b3b]">AGZAMOV LEGAL</span>
              </>
            )}
          </h1>
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto pt-1">
            {content.subtitle[currentLocale]}
          </p>
        </Container>
      </section>

      {/* Main Story & Proven Record */}
      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Visual Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md">
                <div className="relative rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-2xl">
                  <div className="relative h-[480px] w-full">
                    <Image
                      src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80"
                      alt="Agzamov Legal Group Law Chamber"
                      fill
                      className="object-cover filter contrast-105"
                      sizes="(max-width: 768px) 100vw, 500px"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>
                </div>
              </div>
            </div>

            {/* Story Text Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <SectionHeading
                title={content.storyTitle[currentLocale]}
                centered={false}
                dark
              />

              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                <strong className="text-white font-semibold">{siteConfig.name}</strong> — {content.p1[currentLocale]}
              </p>

              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                {content.p2[currentLocale]}
              </p>

              {/* 3 Executive Stat Cards */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-4">
                <div className="p-4 sm:p-5 rounded-2xl bg-zinc-950 border border-zinc-800/80">
                  <p className="text-2xl sm:text-3xl font-black text-white">{siteConfig.stats.experienceYears}+</p>
                  <p className="text-[11px] sm:text-xs text-zinc-400 font-medium mt-1 uppercase tracking-wider">
                    {content.statExp[currentLocale]}
                  </p>
                </div>
                <div className="p-4 sm:p-5 rounded-2xl bg-zinc-950 border border-zinc-800/80">
                  <p className="text-2xl sm:text-3xl font-black text-white">{siteConfig.stats.successfulCases}+</p>
                  <p className="text-[11px] sm:text-xs text-zinc-400 font-medium mt-1 uppercase tracking-wider">
                    {content.statCases[currentLocale]}
                  </p>
                </div>
                <div className="p-4 sm:p-5 rounded-2xl bg-zinc-950 border border-zinc-800/80">
                  <p className="text-2xl sm:text-3xl font-black text-[#d23b3b]">{siteConfig.stats.winRatePercent}%</p>
                  <p className="text-[11px] sm:text-xs text-zinc-400 font-medium mt-1 uppercase tracking-wider">
                    {content.statRate[currentLocale]}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* Mission & Values Grid */}
      <section className="py-20 bg-zinc-950/70 border-y border-zinc-900">
        <Container className="space-y-16">
          <SectionHeading
            title={content.principlesTitle[currentLocale]}
            subtitle={content.principlesSub[currentLocale]}
            dark
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, idx) => (
              <div
                key={idx}
                className="rounded-2xl p-7 sm:p-8 bg-black/60 border border-zinc-800/80 hover:border-red-600/40 transition-all duration-400 flex flex-col justify-between group shadow-lg"
              >
                <div className="space-y-4">
                  <div className="h-12 w-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-red-500 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                    {v.icon}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-red-400 transition-colors">
                    {v.title[currentLocale]}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-zinc-400 leading-relaxed">
                    {v.desc[currentLocale]}
                  </p>
                </div>
                <div className="pt-5 mt-4 border-t border-zinc-900 flex justify-between items-center text-zinc-600 font-mono text-[11px]">
                  <span>{currentLocale === 'ru' ? 'Стандарт' : currentLocale === 'en' ? 'Standard' : 'Mezon'}</span>
                  <span>0{idx + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Managing Partner Statement Banner */}
      <section className="py-20 sm:py-24">
        <Container>
          <div className="rounded-3xl p-8 sm:p-12 lg:p-14 bg-zinc-950 border border-zinc-800 shadow-2xl relative overflow-hidden">
            <div className="relative z-10 max-w-3xl space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
                {content.quoteHeadline[currentLocale]}
              </h2>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                {content.quoteDesc[currentLocale]}
              </p>
              <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Button href="/contact" variant="primary" icon={<ArrowRight className="w-4 h-4" />}>
                  {content.contactBtn[currentLocale]}
                </Button>
                <Button href="/team" variant="outline">
                  {content.teamBtn[currentLocale]}
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
