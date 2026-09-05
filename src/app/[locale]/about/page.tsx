import React from 'react';
import Image from 'next/image';
import { setRequestLocale } from 'next-intl/server';
import { Container } from '@/components/common/Container';
import { PageHeader } from '@/components/common/PageHeader';
import { Button } from '@/components/common/Button';
import { siteConfig } from '@/config/site';
import { Locale } from '@/types';
import {
  ShieldCheck,
  Scale,
  Target,
  HeartHandshake,
  ArrowRight,
  Award,
} from 'lucide-react';

interface AboutPageProps {
  params: Promise<{ locale: string }>;
}

const aboutDict = {
  metaTitle: {
    ru: 'О компании — AGZAMOV LEGAL GROUP',
    uz: 'Biz Haqimizda — AGZAMOV LEGAL GROUP',
    en: 'About Us — AGZAMOV LEGAL GROUP',
  },
  metaDesc: {
    ru: 'История, ценности и безупречные стандарты ведущего адвокатского бюро AGZAMOV LEGAL GROUP в Ташкенте.',
    uz: 'AGZAMOV LEGAL GROUP advokatlik byurosi tarixi, missiyasi, jamoasi va yuridik standartlari haqida to‘liq ma‘lumot.',
    en: 'History, values, and uncompromising legal standards of AGZAMOV LEGAL GROUP advocacy in Tashkent.',
  },
  home: {
    ru: 'Главная',
    uz: 'Bosh sahifa',
    en: 'Home',
  },
  title: {
    ru: 'О Компании',
    uz: 'Biz Haqimizda',
    en: 'About Our Firm',
  },
  eyebrow: {
    ru: 'АДВОКАТСКОЕ БЮРО ВЫСШЕЙ ПРАКТИКИ',
    uz: 'YUKSAK DARAJADAGI ADVOKATLIK BYUROSI',
    en: 'PREMIER ADVOCACY & LEGAL COUNSEL',
  },
  storyHeadline: {
    ru: 'Защита, которой доверяют лидеры бизнеса и частные доверители',
    uz: 'Biznes yetakchilari va fuqarolar ishonch bildirgan mustahkam himoya',
    en: 'Uncompromising Defense Trusted by Enterprise Leaders & Private Clients',
  },
  storyP1: {
    ru: 'AGZAMOV LEGAL GROUP — ведущее адвокатское бюро в Ташкенте, заслужившее репутацию бескомпромиссного защитника интересов бизнеса и граждан. Наша практика охватывает сложнейшие арбитражные споры, корпоративные конфликты, защиту права собственности и уголовно-правовую защиту бизнеса.',
    uz: 'AGZAMOV LEGAL GROUP — Toshkent shahrida tashkil etilgan bo‘lib, respublikadagi eng ishonchli va tajribali advokatlik tuzilmalaridan biridir. Amaliyotimiz eng murakkab iqtisodiy nizolar, korporativ ziddiyatlar, mulk huquqini himoya qilish va biznesni jinoiy-huquqiy xatarlardan asrashni qamrab oladi.',
    en: 'AGZAMOV LEGAL GROUP is a premier law firm based in Tashkent, renowned for uncompromising trial advocacy. Our counsel encompasses high-stakes commercial arbitration, corporate disputes, property protection, and executive white-collar defense.',
  },
  storyP2: {
    ru: 'Мы не просто цитируем законы — мы формируем судебную практику. Каждый процессуальный шаг выверяется коллегией адвокатов до мельчайших деталей, что гарантирует достижение максимально выгодного исхода для доверителя.',
    uz: 'Biz shunchaki qonun moddalarini havola qilmaymiz — biz sud amaliyotini shakllantiramiz. Har bir protsessual qadam advokatlar hay’ati tomonidan mayda detallarigacha tahlil qilinib, mijoz manfaati uchun eng to‘g‘ri yechim tanlanadi.',
    en: 'We do not simply cite statutory articles — we shape judicial practice. Every procedural maneuver is rigorously vetted by senior partners to secure absolute advantage for our client.',
  },
  partnerName: {
    ru: 'Бобур Агзамов',
    uz: 'Bobur Agzamov',
    en: 'Bobur Agzamov',
  },
  partnerRole: {
    ru: 'Управляющий партнер, старший адвокат (Лицензия № 1044)',
    uz: 'Boshqaruvchi hamkor, katta advokat (Litsenziya № 1044)',
    en: 'Managing Partner, Senior Trial Advocate (License № 1044)',
  },
  statsExp: {
    ru: 'Лет безупречной практики',
    uz: 'Yillik yuksak tajriba',
    en: 'Years of Practice',
  },
  statsCases: {
    ru: 'Выигранных судебных дел',
    uz: 'Muvaffaqiyatli yakunlangan ishlar',
    en: 'Resolved Cases',
  },
  statsRate: {
    ru: 'Процент побед и досудебных урегулирований',
    uz: 'G‘alaba va suddan oldingi kelishuv',
    en: 'Success & Resolution Rate',
  },
  statsClients: {
    ru: 'Корпоративных доверителей на постоянном обслуживании',
    uz: 'Doimiy korporativ mijozlar',
    en: 'Retained Corporate Clients',
  },
  valuesTitle: {
    ru: 'Фундаментальные Принципы Работы',
    uz: 'Bizning Bosh Ish Tamoyillarimiz',
    en: 'Our Guiding Principles of Practice',
  },
  valuesSub: {
    ru: 'Каждое дело ведется в строгом соответствии с высшими этическими стандартами адвокатуры.',
    uz: 'Har bir ish advokaturaning eng yuqori kasbiy va axloqiy mezonlariga muvofiq olib boriladi.',
    en: 'Every engagement strictly adheres to the highest ethical and professional standards.',
  },
  methodologyTitle: {
    ru: 'Наша Методология: 4 Шага к Победе',
    uz: 'G‘alabaga Eltuvchi 4 Bosqichli Metodologiyamiz',
    en: 'Our 4-Step Legal Defense Methodology',
  },
  methodologySub: {
    ru: 'Системный и научно обоснованный подход к разрешению каждого правового спора.',
    uz: 'Har bir huquqiy nizoni hal qilishda tizimli va amaliyotda sinalgan yondashuv.',
    en: 'A systematic, trial-tested framework ensuring thorough case preparation and victory.',
  },
  steps: [
    {
      num: '01',
      title: {
        ru: 'Глубокий Правовой Аудит',
        uz: 'Chuqur Huquqiy Audit',
        en: 'In-Depth Legal Audit',
      },
      desc: {
        ru: 'Детальное изучение доказательств, судебной практики ВС РУз и выявление всех процессуальных рисков.',
        uz: 'Hujjatlar, dalillar bazasi va sud pretsedentlarini o‘rganib, barcha yashirin xatarlarni aniqlash.',
        en: 'Comprehensive evidence analysis and Supreme Court precedent review to isolate all procedural risks.',
      },
    },
    {
      num: '02',
      title: {
        ru: 'Разработка Стратегии Защиты',
        uz: 'Himoya Strategiyasini Tuzish',
        en: 'Strategic Defense Blueprint',
      },
      desc: {
        ru: 'Создание пошагового плана: сбор недостающих доказательств, адвокатские запросы, экспертизы.',
        uz: 'Aniq reja: zarur dalillarni to‘plash, advokatlik so‘rovlari yuborish, ekspertizalar tayinlash.',
        en: 'Formulating step-by-step tactics: statutory advocate inquiries, forensic evaluations, evidence filing.',
      },
    },
    {
      num: '03',
      title: {
        ru: 'Бескомпромиссная Защита в Суде',
        uz: 'Sudda Qat‘iy va Murosasiz Himoya',
        en: 'Formidable Courtroom Advocacy',
      },
      desc: {
        ru: 'Прямое участие ведущих адвокатов во всех судебных инстанциях, активное парирование доводов оппонентов.',
        uz: 'Barcha sud instansiyalarida bevosita qatnashish, qarshi tomon vajlarini qonuniy asosda rad etish.',
        en: 'Active representation in all judicial tiers, relentlessly countering the adversary’s arguments.',
      },
    },
    {
      num: '04',
      title: {
        ru: 'Исполнение и Закрепление Результата',
        uz: 'Natijani To‘liq Ijro Etish',
        en: 'Enforcement & Final Execution',
      },
      desc: {
        ru: 'Контроль за исполнением судебного акта (МИБ), снятие арестов и полное восстановление прав клиента.',
        uz: 'Sud qarorining real ijrosi (MIB nazorati), bandlarni yechish va mijoz huquqini to‘liq ta‘minlash.',
        en: 'Supervising enforcement proceedings, lifting injunctions, and complete asset restoration.',
      },
    },
  ],
  chamberTitle: {
    ru: 'Официальный Статус и Профессиональные Гарантии',
    uz: 'Rasmiy Maqom va Huquqiy Kafolatlar',
    en: 'Official Accreditation & Guarantees',
  },
  chamberP1: {
    ru: 'AGZAMOV LEGAL GROUP является официальным членом Палаты адвокатов Республики Узбекистан. Деятельность бюро строго регулируется Законом РУз «Об адвокатуре» и Кодексом профессиональной этики адвокатов.',
    uz: 'AGZAMOV LEGAL GROUP O‘zbekiston Respublikasi Advokatlar Palatasi a’zosi hisoblanadi. Byuro faoliyati «Advokatura to‘g‘risida»gi qonun va Advokatlar kasb etikasi qoidalariga qat’iy asoslangan.',
    en: 'AGZAMOV LEGAL GROUP is an accredited member of the Chamber of Advocates of Uzbekistan. Our conduct is strictly governed by statutory law and the professional ethics code.',
  },
  ctaTitle: {
    ru: 'Доверьте защиту ваших интересов профессионалам высшей категории',
    uz: 'Manfaatlaringiz himoyasini yuqori malakali advokatlarga topshiring',
    en: 'Entrust Your Legal Security to Proven Senior Advocates',
  },
  ctaBtn: {
    ru: 'Записаться на консультацию',
    uz: 'Maslahatga yozilish',
    en: 'Schedule Consultation',
  },
  teamBtn: {
    ru: 'Познакомиться с командой',
    uz: 'Jamoa bilan tanishish',
    en: 'Meet the Team',
  },
};

export async function generateMetadata({ params }: AboutPageProps) {
  const { locale } = await params;
  const currentLocale = (['ru', 'uz', 'en'].includes(locale) ? locale : 'ru') as Locale;
  return {
    title: aboutDict.metaTitle[currentLocale],
    description: aboutDict.metaDesc[currentLocale],
  };
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const currentLocale = (['ru', 'uz', 'en'].includes(locale) ? locale : 'ru') as Locale;

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
      icon: <Scale className="w-6 h-6 text-red-700" />,
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
      icon: <ShieldCheck className="w-6 h-6 text-red-700" />,
    },
    {
      title: {
        ru: 'Стратегическое Мышление',
        uz: 'Strategik Tafakkur',
        en: 'Strategic Forethought',
      },
      desc: {
        ru: 'Прогнозируем риски на 5–10 шагов вперед и нейтрализуем угрозы до начала открытого конфликта.',
        uz: '5-10 qadam oldindagi huquqiy xatarlarni ko‘ra olamiz va ularni oldindan bartaraf etamiz.',
        en: 'Anticipating legal and regulatory risks 5–10 steps ahead, pre-empting procedural liabilities.',
      },
      icon: <Target className="w-6 h-6 text-red-700" />,
    },
    {
      title: {
        ru: 'Честность и Прозрачность',
        uz: 'Halol va Shaffof Hamkorlik',
        en: 'Principled Transparency',
      },
      desc: {
        ru: 'Никаких иллюзий и пустых обещаний. Только объективный юридический прогноз и честная позиция.',
        uz: 'Xomxayollarga o‘rin yo‘q. Ish istiqbolini xolis baholab, ochiq va halol strategiya quramiz.',
        en: 'Zero false promises. Objective, transparent case appraisal and predictable litigation pathways.',
      },
      icon: <HeartHandshake className="w-6 h-6 text-red-700" />,
    },
  ];

  return (
    <div className="bg-white min-h-screen text-zinc-900">
      <PageHeader
        title={aboutDict.title[currentLocale]}
        eyebrow={aboutDict.eyebrow[currentLocale]}
        imageSrc="/banners/about-banner.jpg"
        breadcrumbs={[
          { label: aboutDict.home[currentLocale], href: '/' },
          { label: aboutDict.title[currentLocale] },
        ]}
      />

      <section className="py-16 sm:py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-zinc-200 aspect-[4/5] bg-zinc-100">
                <Image
                  src="/bg-front.jpg"
                  alt="Bobur Agzamov"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 450px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="text-xl font-black">{aboutDict.partnerName[currentLocale]}</p>
                  <p className="text-xs text-zinc-300 font-medium mt-0.5">
                    {aboutDict.partnerRole[currentLocale]}
                  </p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-zinc-200 shadow-xl">
                <Award className="w-5 h-5 text-red-700" />
                <span className="text-xs font-bold text-zinc-800">20+ Yillik Nufuz</span>
              </div>
            </div>
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-red-700">
                  AGZAMOV LEGAL GROUP
                </span>
                <h2 className="text-2xl sm:text-4xl font-black text-zinc-900 tracking-tight leading-tight">
                  {aboutDict.storyHeadline[currentLocale]}
                </h2>
              </div>
              <p className="text-base text-zinc-600 leading-relaxed">
                {aboutDict.storyP1[currentLocale]}
              </p>
              <p className="text-base text-zinc-600 leading-relaxed">
                {aboutDict.storyP2[currentLocale]}
              </p>
              <div className="p-6 rounded-2xl bg-zinc-50 border-l-4 border-l-red-700 border border-zinc-200">
                <p className="text-sm sm:text-base font-semibold text-zinc-800 italic leading-relaxed">
                  «Advokatlik kasbi — bu shunchaki qonunlarni bilish emas, balki mijozning har bir daqiqasi va mulki uchun to‘liq mas’uliyatni o‘z zimmasiga olish san’atidir.»
                </p>
                <p className="text-xs text-zinc-500 font-bold mt-2">
                  — Bobur Agzamov, Boshqaruvchi hamkor
                </p>
              </div>
              <div className="pt-2 flex flex-wrap gap-4">
                <Button href="/team" variant="primary" icon={<ArrowRight className="w-4 h-4" />}>
                  {aboutDict.teamBtn[currentLocale]}
                </Button>
                <Button href="/contact" variant="outline">
                  {aboutDict.ctaBtn[currentLocale]}
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-zinc-50 border-y border-zinc-200">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="p-6 rounded-2xl bg-white border border-zinc-200 shadow-sm text-center space-y-2">
              <p className="text-4xl sm:text-5xl font-black text-zinc-900">
                {siteConfig.stats.experienceYears}+
              </p>
              <p className="text-xs sm:text-sm font-semibold text-zinc-600">
                {aboutDict.statsExp[currentLocale]}
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-zinc-200 shadow-sm text-center space-y-2">
              <p className="text-4xl sm:text-5xl font-black text-zinc-900">
                {siteConfig.stats.successfulCases}+
              </p>
              <p className="text-xs sm:text-sm font-semibold text-zinc-600">
                {aboutDict.statsCases[currentLocale]}
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-zinc-200 shadow-sm text-center space-y-2">
              <p className="text-4xl sm:text-5xl font-black text-red-700">
                {siteConfig.stats.winRatePercent}%
              </p>
              <p className="text-xs sm:text-sm font-semibold text-zinc-600">
                {aboutDict.statsRate[currentLocale]}
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-zinc-200 shadow-sm text-center space-y-2">
              <p className="text-4xl sm:text-5xl font-black text-zinc-900">
                {siteConfig.stats.corporatePartners}+
              </p>
              <p className="text-xs sm:text-sm font-semibold text-zinc-600">
                {aboutDict.statsClients[currentLocale]}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 bg-white">
        <Container className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-red-700">
              TAMOYILLAR
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-zinc-900 tracking-tight">
              {aboutDict.valuesTitle[currentLocale]}
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
              {aboutDict.valuesSub[currentLocale]}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((v, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-zinc-200 p-8 shadow-sm hover:shadow-xl hover:border-zinc-300 transition-all duration-300 space-y-4"
              >
                <div className="h-12 w-12 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center">
                  {v.icon}
                </div>
                <h3 className="text-xl font-bold text-zinc-900">
                  {v.title[currentLocale]}
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  {v.desc[currentLocale]}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 bg-zinc-50 border-y border-zinc-200">
        <Container className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-red-700">
              METODOLOGIYA
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-zinc-900 tracking-tight">
              {aboutDict.methodologyTitle[currentLocale]}
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
              {aboutDict.methodologySub[currentLocale]}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {aboutDict.steps.map((s, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-zinc-200 p-6 shadow-sm flex flex-col justify-between space-y-4 hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="space-y-3">
                  <span className="text-3xl font-black text-red-700 font-mono">
                    {s.num}
                  </span>
                  <h3 className="text-lg font-bold text-zinc-900">
                    {s.title[currentLocale]}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                    {s.desc[currentLocale]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Section 5: Chamber Accreditation & Statutory Status */}
      <section className="py-20 bg-white">
        <Container>
          <div className="rounded-3xl bg-zinc-900 text-white p-8 sm:p-14 space-y-8">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div className="space-y-4 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/20 border border-red-500/30 text-xs font-bold text-red-400">
                  <ShieldCheck className="w-4 h-4 text-red-500" />
                  <span>{aboutDict.chamberTitle[currentLocale]}</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                  {aboutDict.ctaTitle[currentLocale]}
                </h2>
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                  {aboutDict.chamberP1[currentLocale]}
                </p>
              </div>

              <div className="shrink-0 space-y-3">
                <Button href="/contact" variant="primary" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
                  {aboutDict.ctaBtn[currentLocale]}
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
