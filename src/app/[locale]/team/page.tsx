import React from 'react';
import Image from 'next/image';
import { setRequestLocale } from 'next-intl/server';
import { Container } from '@/components/common/Container';
import { PageHeader } from '@/components/common/PageHeader';
import { Button } from '@/components/common/Button';
import { mockWorkers } from '@/data/mockData';
import { Locale } from '@/types';
import { Mail, Phone, Shield, ArrowRight } from 'lucide-react';

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
  home: {
    uz: 'Bosh sahifa',
    ru: 'Главная',
    en: 'Home',
  },
  title: {
    uz: 'Bizning Jamoa',
    ru: 'Наша Команда',
    en: 'Our Team',
  },
  eyebrow: {
    uz: 'PROFESSIONAL ADVOKATURA',
    ru: 'ПРОФЕССИОНАЛЬНАЯ АДВОКАТУРА',
    en: 'EXECUTIVE LEGAL COUNSEL',
  },
  subtitle: {
    uz: 'O‘z sohasining yetakchi advokatlari, sobiq sudyalar va yirik korporatsiyalarning bosh huquqshunoslari sizning manfaatlaringizni himoya qilish uchun birlashgan.',
    ru: 'Ведущие адвокаты, бывшие судьи и главные юристы корпораций, объединившиеся для бескомпромиссной защиты ваших интересов.',
    en: 'Leading attorneys, former judges, and senior corporate counsels united to protect your rights and business interests.',
  },
  licenseLabel: {
    uz: 'Advokatlik maqomi',
    ru: 'Статус адвоката',
    en: 'Advocate Status',
  },
  licenseValue: {
    uz: 'Advokatlar Palatasi a’zosi',
    ru: 'Член Палаты адвокатов',
    en: 'Chamber of Advocates Member',
  },
  joinTitle: {
    uz: 'Jamoamizga qo‘shilmoqchimisiz?',
    ru: 'Хотите присоединиться к нашей команде?',
    en: 'Interested in joining our team?',
  },
  joinSubtitle: {
    uz: 'Agar siz yuksak kasbiy mahoratga va kuchli tahliliy fikrlashga ega huquqshunos bo‘lsangiz, rezyumeyingizni bizga yuboring.',
    ru: 'Если вы обладаете высокой квалификацией, аналитическим мышлением и безупречной профессиональной этикой, отправьте нам резюме.',
    en: 'If you possess exceptional legal acumen, analytical rigor, and high ethical standards, submit your credentials.',
  },
  sendCv: {
    uz: 'Rezyume yuborish (hr@agzamovlegal.uz)',
    ru: 'Отправить резюме (hr@agzamovlegal.uz)',
    en: 'Submit Resume (hr@agzamovlegal.uz)',
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
    <div className="bg-white min-h-screen">
      {/* Top Hero Banner matching user reference image */}
      <PageHeader
        title={teamDict.title[currentLocale]}
        eyebrow={teamDict.eyebrow[currentLocale]}
        imageSrc="/banners/team-banner.jpg"
        breadcrumbs={[
          { label: teamDict.home[currentLocale], href: '/' },
          { label: teamDict.title[currentLocale] },
        ]}
      />

      {/* Main Content on Pure White Background */}
      <section className="py-16 sm:py-24 bg-white">
        <Container className="space-y-16">
          <div className="max-w-3xl mx-auto text-center space-y-3">
            <h2 className="text-2xl sm:text-3xl font-black text-zinc-900 tracking-tight">
              {teamDict.title[currentLocale]}
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
              {teamDict.subtitle[currentLocale]}
            </p>
          </div>

          {/* Clean Executive Lawyer Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {mockWorkers.map((worker) => (
              <div
                key={worker.id}
                className="group rounded-2xl bg-white border border-zinc-200/90 hover:border-zinc-300 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 p-6 sm:p-7 flex flex-col sm:flex-row gap-6 items-start"
              >
                {/* Lawyer Portrait */}
                <div className="relative h-64 sm:h-72 w-full sm:w-52 shrink-0 rounded-xl overflow-hidden bg-zinc-100 border border-zinc-200">
                  <Image
                    src={worker.image}
                    alt={worker.name}
                    fill
                    className="object-cover object-top filter grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                    sizes="(max-width: 640px) 100vw, 250px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-50" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="inline-block px-3 py-1 rounded-full bg-white/95 text-zinc-900 text-[11px] font-bold tracking-wide shadow-sm">
                      {worker.experience[currentLocale]}
                    </span>
                  </div>
                </div>

                {/* Lawyer Essential Details */}
                <div className="flex-1 space-y-3 flex flex-col justify-between h-full w-full">
                  <div className="space-y-2">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-black text-zinc-900 group-hover:text-red-700 transition-colors">
                        {worker.name}
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold text-red-700 mt-0.5">
                        {worker.position[currentLocale]}
                      </p>
                    </div>

                    {/* Status Pill */}
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-100 text-zinc-700 text-xs font-medium border border-zinc-200">
                      <Shield className="w-3.5 h-3.5 text-red-700 shrink-0" />
                      <span>{teamDict.licenseValue[currentLocale]}</span>
                    </div>

                    {worker.specialization && (
                      <p className="text-xs text-zinc-500 pt-1">
                        <span className="font-semibold text-zinc-700">Ixtisoslik: </span>
                        {worker.specialization[currentLocale]}
                      </p>
                    )}

                    <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed pt-2 line-clamp-4">
                      {worker.bio[currentLocale]}
                    </p>
                  </div>

                  {/* Clean Direct Contact Channels */}
                  <div className="pt-4 border-t border-zinc-100 flex items-center justify-between gap-3 text-xs text-zinc-500">
                    <div className="flex items-center gap-2">
                      {worker.phone && (
                        <a
                          href={`tel:${worker.phone}`}
                          className="inline-flex items-center gap-1.5 p-2 rounded-lg bg-zinc-50 border border-zinc-200 text-zinc-700 hover:text-red-700 hover:bg-red-50 hover:border-red-200 transition-colors"
                          title={worker.phone}
                        >
                          <Phone className="w-3.5 h-3.5" />
                          <span className="font-medium">{worker.phone}</span>
                        </a>
                      )}
                      {worker.email && (
                        <a
                          href={`mailto:${worker.email}`}
                          className="p-2 rounded-lg bg-zinc-50 border border-zinc-200 text-zinc-700 hover:text-red-700 hover:bg-red-50 hover:border-red-200 transition-colors"
                          title={worker.email}
                        >
                          <Mail className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Careers Section on Clean Zinc Surface */}
      <section className="py-20 bg-zinc-50 border-t border-zinc-200">
        <Container>
          <div className="rounded-2xl bg-white border border-zinc-200/90 shadow-sm p-8 sm:p-12 text-center max-w-3xl mx-auto space-y-6">
            <h2 className="text-2xl sm:text-3xl font-black text-zinc-900">
              {teamDict.joinTitle[currentLocale]}
            </h2>
            <p className="text-sm text-zinc-600 max-w-xl mx-auto leading-relaxed">
              {teamDict.joinSubtitle[currentLocale]}
            </p>
            <div>
              <Button
                href="mailto:hr@agzamovlegal.uz"
                size="md"
                variant="primary"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                {teamDict.sendCv[currentLocale]}
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
