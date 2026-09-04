import React from 'react';
import Image from 'next/image';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { Container } from '@/components/common/Container';
import { GlowBadge } from '@/components/common/GlowBadge';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Button } from '@/components/common/Button';
import { siteConfig } from '@/config/site';
import {
  ShieldCheck,
  Award,
  Scale,
  CheckCircle2,
  Users,
  Target,
  Eye,
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
      'AGZAMOV LEGAL GROUP advokatlik byurosi tarixi, missiyasi, jamoasi va yuridik standartlari haqida to‘liq ma‘lumot.',
  };
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const values = [
    {
      title: "Murosasiz Professionallik",
      desc: "Biz har bir ishga chuqur tahliliy yondashamiz va faqat qonun doirasida maksimal foydali natijaga erishamiz.",
      icon: <Scale className="w-6 h-6 text-red-600" />,
    },
    {
      title: "Mutlaq Maxfiylik",
      desc: "Advokatlik siri biz uchun muqaddas burchdir. Ish detallari hech qachon uchinchi shaxslarga oshkor etilmaydi.",
      icon: <ShieldCheck className="w-6 h-6 text-red-600" />,
    },
    {
      title: "Strategik Tafakkur",
      desc: "Biz faqat bugungi emas, 5-10 qadam oldindagi huquqiy xatarlarni ko'ra olamiz va ularni oldindan to'xtatamiz.",
      icon: <Target className="w-6 h-6 text-red-600" />,
    },
    {
      title: "Halol Hamkorlik",
      desc: "Mijozga asossiz va'dalar bermaymiz, vaziyatni xolis va ochiq baholab, shaffof harakat qilamiz.",
      icon: <HeartHandshake className="w-6 h-6 text-red-600" />,
    },
  ];

  return (
    <div className="pt-28 pb-20 bg-black min-h-screen">
      {/* Hero Banner for About */}
      <section className="relative py-16 border-b border-zinc-900 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-red-700/10 blur-[150px] pointer-events-none" />

        <Container className="relative z-10 text-center space-y-5">
          <GlowBadge icon>Kompaniya tarixi va missiyasi</GlowBadge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
            Biz Haqimizda —{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-600 to-rose-600 text-glow">
              AGZAMOV LEGAL
            </span>
          </h1>
          <p className="text-base sm:text-lg text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            Biznesingizni himoya qilish va adolatni tiklash uchun birlashgan yetakchi advokat va yuridik maslahatchilar jamoasi.
          </p>
        </Container>
      </section>

      {/* Main Story & Inception */}
      <section className="py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual Column (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-2xl">
                <div className="relative h-[480px] w-full">
                  <Image
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80"
                    alt="Agzamov Legal Group Office"
                    fill
                    className="object-cover filter contrast-105"
                    sizes="(max-width: 768px) 100vw, 500px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                </div>

                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-black/90 border border-red-600/40 backdrop-blur-md">
                  <p className="text-3xl font-black text-red-600">12+ Yil</p>
                  <p className="text-xs text-zinc-300 font-medium mt-1">
                    O&apos;zbekiston va xalqaro maydonda muvaffaqiyatli yuridik tajriba
                  </p>
                </div>
              </div>
            </div>

            {/* Story Text Column (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <SectionHeading
                tag="Bizning Tarix"
                title="Yuksak obro' va yuzlab yutilgan sud ishlari ortidagi haqiqat"
                centered={false}
              />

              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                <strong className="text-white">AGZAMOV LEGAL GROUP</strong> — Toshkent shahrida tashkil etilgan bo&apos;lib, qisqa fursat ichida respublikadagi eng ishonchli va murosasiz advokatlik tuzilmalaridan biriga aylandi. Bizning maqsadimiz — mijozlarimizning huquqlari va biznes aktivlarini har qanday murakkab vaziyatda xavfsiz saqlashdir.
              </p>

              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                Biz shunchaki nazariy qonun moddalarini sanab bermaymiz. Biz amaliyotda ishlaydigan, real sud muhokamalarida sinalgan va mijozning foydasiga hal bo&apos;ladigan strategik rejalarni ishlab chiqamiz.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-3">
                <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
                  <p className="text-2xl font-black text-white">540+</p>
                  <p className="text-xs text-zinc-400 mt-1">Muvaffaqiyatli ishlar</p>
                </div>
                <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
                  <p className="text-2xl font-black text-red-600">98%</p>
                  <p className="text-xs text-zinc-400 mt-1">G&apos;alaba ko&apos;rsatkichi</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Mission & Values Bento */}
      <section className="py-20 bg-zinc-950/70 border-y border-zinc-900">
        <Container className="space-y-16">
          <SectionHeading
            tag="Qadriyatlarimiz"
            title="Bizning Bosh Tamoyillarimiz"
            subtitle="Har bir qabul qilingan qaror va sud jarayonida ushbu 4 ta tayanch mezoniga suyanamiz."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, idx) => (
              <div key={idx} className="bento-card p-8 group flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="h-12 w-12 rounded-xl bg-red-600/10 border border-red-600/30 flex items-center justify-center group-hover:scale-110 group-hover:bg-red-600/20 transition-all">
                    {v.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-red-500 transition-colors">
                    {v.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {v.desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-zinc-800/80">
                  <span className="text-xs font-mono text-zinc-600">0{idx + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Founder Callout */}
      <section className="py-20">
        <Container>
          <div className="bento-card p-8 sm:p-12 border-red-600/40 relative overflow-hidden">
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-red-600/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 max-w-3xl space-y-6">
              <GlowBadge icon>Rahbariyat Murojaati</GlowBadge>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                «Biznesingizning har bir daqiqasi qimmatli. Huquqiy muammolarni bizga ishonib topshiring.»
              </h2>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                Advokatlik kasbi — bu faqat qonunlarni bilish emas, balki odamlarning taqdiri va bizneslarning kelajagi uchun to&apos;liq mas&apos;uliyatni o&apos;z zimmasiga olish san&apos;atidir. AGZAMOV LEGAL GROUP jamoasi aynan shu mas&apos;uliyat bilan xizmat qiladi.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Button href="/contact" variant="primary" icon={<ArrowRight className="w-4 h-4" />}>
                  Advokat bilan bog&apos;lanish
                </Button>
                <Button href="/team" variant="outline">
                  Jamoamiz a&apos;zolari
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
