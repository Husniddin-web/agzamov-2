'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { siteConfig } from '@/config/site';

interface AnimatedNumberProps {
  target: number;
  suffix?: string;
  duration?: number;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({
  target,
  suffix = '',
  duration = 2000,
}) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          const startTime = performance.now();

          const updateCount = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Ease out cubic
            const easeOutProgress = 1 - Math.pow(1 - progress, 3);
            const currentVal = Math.floor(easeOutProgress * target);

            setCount(currentVal);

            if (progress < 1) {
              requestAnimationFrame(updateCount);
            } else {
              setCount(target);
            }
          };

          requestAnimationFrame(updateCount);
        }
      },
      { threshold: 0.2 }
    );

    const el = elementRef.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, [target, duration]);

  return (
    <span ref={elementRef}>
      {count}
      {suffix}
    </span>
  );
};

export const StatsCounter: React.FC = () => {
  const t = useTranslations('stats');

  const stats = [
    {
      category: t('expLabel'),
      number: siteConfig.stats.experienceYears,
      suffix: '+',
      label: t('experience'),
    },
    {
      category: t('casesLabel'),
      number: siteConfig.stats.successfulCases,
      suffix: '+',
      label: t('cases'),
    },
    {
      category: t('partnersLabel'),
      number: siteConfig.stats.corporatePartners,
      suffix: '+',
      label: t('partners'),
    },
    {
      category: t('winRateLabel'),
      number: siteConfig.stats.winRatePercent,
      suffix: '%',
      label: t('winRate'),
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-6 sm:gap-y-8">
      {stats.map((stat, idx) => (
        <div
          key={idx}
          className={`flex flex-col justify-start text-left ${
            idx === 0
              ? 'pr-4 sm:pr-6'
              : idx === 1
              ? 'border-l border-white/10 pl-4 sm:pl-6 pr-2 lg:pr-6'
              : idx === 2
              ? 'pr-4 sm:pr-6 lg:border-l lg:border-white/10 lg:pl-6 lg:pr-6'
              : 'border-l border-white/10 pl-4 sm:pl-6'
          }`}
        >
          {/* Eyebrow Label */}
          <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.22em] text-zinc-400 uppercase font-mono">
            {stat.category}
          </span>

          {/* Refined Subtle Red Number */}
          <div className="text-3xl sm:text-4xl lg:text-[46px] font-light tracking-tight text-[#d23b3b] my-1 sm:my-1.5 leading-none">
            <AnimatedNumber target={stat.number} suffix={stat.suffix} duration={2000} />
          </div>

          {/* Description Text */}
          <p className="text-xs sm:text-[13px] text-zinc-400 font-normal leading-snug">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
};
