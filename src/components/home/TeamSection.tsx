import React from 'react';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';
import { mockWorkers } from '@/data/mockData';
import { Locale } from '@/types';
import { Link } from '@/i18n/routing';
import { ArrowRight, Mail, Phone, Shield } from 'lucide-react';

export const TeamSection: React.FC = () => {
  const t = useTranslations('team');
  const tCommon = useTranslations('common');
  const locale = useLocale() as Locale;

  return (
    <section className="py-24 bg-gradient-to-b from-black via-zinc-950 to-black relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-red-700/5 blur-[160px] pointer-events-none" />

      <Container className="relative z-10 space-y-16">
        <div
          data-aos="fade-up"
          data-aos-duration="800"
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <SectionHeading
            tag={t('tag')}
            title={t('title')}
            subtitle={t('subtitle')}
            centered={false}
          />
          <Button href="/team" variant="outline" icon={<ArrowRight className="w-4 h-4" />}>
            {tCommon('ourTeam')}
          </Button>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {mockWorkers.map((worker, idx) => (
            <div
              key={worker.id}
              data-aos="fade-up"
              data-aos-delay={idx * 120}
              data-aos-duration="750"
              className="bento-card overflow-hidden group flex flex-col justify-between"
            >
              {/* Image Container with Grayscale Effect */}
              <div className="relative h-72 w-full overflow-hidden bg-zinc-900">
                <Image
                  src={worker.image}
                  alt={worker.name}
                  fill
                  className="object-cover object-top filter grayscale contrast-115 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  sizes="(max-width: 768px) 100vw, 300px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />

                {/* Tag on Image */}
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/80 border border-red-600/40 text-[10px] font-bold text-red-500 uppercase tracking-wider backdrop-blur-md">
                    <Shield className="w-3 h-3 text-red-600" />
                    {worker.id === 'w-1'
                      ? locale === 'ru'
                        ? 'Руководитель • № 1044'
                        : locale === 'en'
                        ? 'Managing Partner • № 1044'
                        : 'Rahbar • № 1044'
                      : locale === 'ru'
                      ? 'Адвокат'
                      : locale === 'en'
                      ? 'Advocate'
                      : 'Advokat'}
                  </span>
                </div>
              </div>

              {/* Text Info */}
              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-red-500 transition-colors">
                    {worker.name}
                  </h3>
                  <p className="text-xs font-semibold text-red-500/90 mt-1">
                    {worker.position[locale]}
                  </p>
                  <p className="text-xs text-zinc-400 mt-2 line-clamp-2">
                    {worker.bio[locale]}
                  </p>
                </div>

                {/* Footer contacts */}
                <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-400">
                  <span className="text-[11px] font-mono text-zinc-500">
                    {worker.experience[locale]}
                  </span>
                  <div className="flex items-center gap-2">
                    {worker.email && (
                      <a
                        href={`mailto:${worker.email}`}
                        className="p-1.5 rounded-lg bg-zinc-800 text-zinc-300 hover:text-white hover:bg-red-600/20 hover:text-red-500 transition-colors"
                        title={worker.email}
                      >
                        <Mail className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {worker.phone && (
                      <a
                        href={`tel:${worker.phone}`}
                        className="p-1.5 rounded-lg bg-zinc-800 text-zinc-300 hover:text-white hover:bg-red-600/20 hover:text-red-500 transition-colors"
                        title={worker.phone}
                      >
                        <Phone className="w-3.5 h-3.5" />
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
  );
};
