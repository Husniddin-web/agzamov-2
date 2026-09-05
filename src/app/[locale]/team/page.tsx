import React from 'react';
import Image from 'next/image';
import { setRequestLocale } from 'next-intl/server';
import { Container } from '@/components/common/Container';
import { Button } from '@/components/common/Button';
import { mockWorkers } from '@/data/mockData';
import { Locale } from '@/types';
import { Mail, Phone, ShieldCheck, ArrowRight } from 'lucide-react';

interface TeamPageProps {
  params: Promise<{ locale: string }>;
}

const teamDict = {
  metaTitle: {
    uz: 'Jamoamiz — AGZAMOV LEGAL GROUP',
    ru: 'Наша Команда — AGZAMOV LEGAL GROUP',
    en: 'Our Team — AGZAMOV LEGAL GROUP',
  },
  metaDesc: {
    uz: 'AGZAMOV LEGAL GROUP yetakchi advokatlari, boshqaruvchi hamkorlari va huquqshunos mutaxassislari.',
    ru: 'Ведущие адвокаты, управляющие партнеры и юристы AGZAMOV LEGAL GROUP.',
    en: 'Leading advocates, managing partners, and legal counselors of AGZAMOV LEGAL GROUP.',
  },
  title: {
    uz: 'Bizning Jamoa',
    ru: 'Наша Команда',
    en: 'Our Team',
  },
  subtitle: {
    uz: 'O‘z sohasining yetakchi advokatlari, sobiq sudyalar va yirik korporatsiyalarning bosh huquqshunoslari sizning manfaatlaringizni himoya qilish uchun birlashgan.',
    ru: 'Ведущие адвокаты, бывшие судьи и главные юристы корпораций, объединившиеся для бескомпромиссной защиты ваших интересов.',
    en: 'Leading attorneys, former judges, and senior corporate counsels united to protect your rights and business interests.',
  },
  specializationLabel: {
    uz: 'Ixtisoslik',
    ru: 'Специализация',
    en: 'Specialization',
  },
  bookConsultation: {
    uz: 'Uchrashuv belgilash',
    ru: 'Записаться на встречу',
    en: 'Schedule Consultation',
  },
  joinTitle: {
    uz: 'Jamoamizga qo‘shilmoqchimisiz?',
    ru: 'Хотите присоединиться к команде?',
    en: 'Interested in joining our team?',
  },
  joinSubtitle: {
    uz: 'Agar siz yuksak kasbiy mahoratga va kuchli tahliliy fikrlashga ega huquqshunos bo‘lsangiz, rezyumeyingizni bizga yuboring.',
    ru: 'Если вы обладаете высокой квалификацией, аналитическим мышлением и безупречной этикой, отправьте нам свое резюме.',
    en: 'If you are an exceptional legal mind with analytical rigor and high ethical standards, send us your resume.',
  },
  sendCv: {
    uz: 'Rezyumeni yuborish (hr@agzamovlegal.uz)',
    ru: 'Отправить резюме (hr@agzamovlegal.uz)',
    en: 'Send Resume (hr@agzamovlegal.uz)',
  },
};

export async function generateMetadata({ params }: TeamPageProps) {
  const { locale } = await params;
  const currentLocale = (['uz', 'ru', 'en'].includes(locale) ? locale : 'ru') as Locale;
  return {
    title: teamDict.metaTitle[currentLocale],
    description: teamDict.metaDesc[currentLocale],
  };
}

export default async function TeamPage({ params }: TeamPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const currentLocale = (['uz', 'ru', 'en'].includes(locale) ? locale : 'ru') as Locale;

  return (
    <div className="pt-28 pb-20 bg-black min-h-screen">
      {/* Banner */}
      <section className="py-16 border-b border-zinc-900 relative">
        <Container className="text-center space-y-4 max-w-4xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
            {teamDict.title[currentLocale]}
          </h1>
          <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            {teamDict.subtitle[currentLocale]}
          </p>
        </Container>
      </section>

      {/* Team Profiles Grid */}
      <section className="py-20">
        <Container className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mockWorkers.map((worker) => (
              <div
                key={worker.id}
                className="group rounded-2xl bg-zinc-950/80 border border-zinc-800/80 hover:border-zinc-700 transition-all duration-300 p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-start"
              >
                {/* Photo Column */}
                <div className="relative h-64 sm:h-72 w-full sm:w-52 shrink-0 rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800">
                  <Image
                    src={worker.image}
                    alt={worker.name}
                    fill
                    className="object-cover object-top filter grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                    sizes="(max-width: 640px) 100vw, 250px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="px-3 py-1 rounded-full bg-zinc-900/90 border border-zinc-700/80 text-[11px] font-medium text-zinc-300 backdrop-blur-md">
                      {worker.experience[currentLocale]}
                    </span>
                  </div>
                </div>

                {/* Details Column */}
                <div className="flex-1 space-y-4 flex flex-col justify-between h-full">
                  <div className="space-y-2">
                    <h2 className="text-xl font-extrabold text-white group-hover:text-red-500 transition-colors">
                      {worker.name}
                    </h2>
                    <p className="text-xs font-semibold text-red-500">
                      {worker.position[currentLocale]}
                    </p>
                    {worker.specialization && (
                      <p className="text-xs text-zinc-400">
                        {teamDict.specializationLabel[currentLocale]}: {worker.specialization[currentLocale]}
                      </p>
                    )}
                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed pt-2">
                      {worker.bio[currentLocale]}
                    </p>
                  </div>

                  {/* Contacts & Direct Action */}
                  <div className="pt-4 border-t border-zinc-900 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      {worker.phone && (
                        <a
                          href={`tel:${worker.phone}`}
                          className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors"
                          title={worker.phone}
                        >
                          <Phone className="w-4 h-4 text-zinc-400" />
                        </a>
                      )}
                      {worker.email && (
                        <a
                          href={`mailto:${worker.email}`}
                          className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors"
                          title={worker.email}
                        >
                          <Mail className="w-4 h-4 text-zinc-400" />
                        </a>
                      )}
                    </div>

                    <Button href="/contact" size="sm" variant="outline">
                      {teamDict.bookConsultation[currentLocale]}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Careers Callout */}
      <section className="py-20 bg-zinc-950/40 border-t border-zinc-900">
        <Container>
          <div className="rounded-2xl bg-zinc-950 border border-zinc-800 p-8 sm:p-12 text-center max-w-4xl mx-auto space-y-6">
            <ShieldCheck className="w-10 h-10 text-red-600 mx-auto" />
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              {teamDict.joinTitle[currentLocale]}
            </h2>
            <p className="text-sm text-zinc-400 max-w-xl mx-auto leading-relaxed">
              {teamDict.joinSubtitle[currentLocale]}
            </p>
            <Button
              href="mailto:hr@agzamovlegal.uz"
              size="md"
              variant="primary"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              {teamDict.sendCv[currentLocale]}
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
