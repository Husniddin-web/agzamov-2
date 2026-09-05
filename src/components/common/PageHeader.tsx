import React from 'react';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { ChevronRight } from 'lucide-react';
import { Container } from './Container';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  title: string;
  eyebrow?: string;
  imageSrc: string;
  breadcrumbs: BreadcrumbItem[];
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  eyebrow = 'AGZAMOV LEGAL GROUP',
  imageSrc,
  breadcrumbs,
}) => {
  return (
    <section className="relative pt-36 pb-28 sm:pb-36 bg-zinc-950 overflow-hidden">
      {/* Background Image with Dark Legal Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imageSrc}
          alt={title}
          fill
          priority
          className="object-cover object-center filter brightness-[0.45] contrast-110"
          sizes="100vw"
        />
        {/* Gradients for text contrast and seamless edge */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/75" />
        <div className="absolute inset-0 bg-red-950/15 mix-blend-multiply pointer-events-none" />
      </div>

      {/* Content */}
      <Container className="relative z-10 text-center space-y-4 max-w-4xl">
        {eyebrow && (
          <p className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-red-400 uppercase">
            {eyebrow}
          </p>
        )}

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
          {title}
        </h1>

        {/* Breadcrumb matching user reference */}
        <nav aria-label="Breadcrumb" className="pt-2">
          <ol className="inline-flex items-center justify-center gap-2 text-xs sm:text-sm text-zinc-300 font-medium">
            {breadcrumbs.map((item, idx) => {
              const isLast = idx === breadcrumbs.length - 1;
              return (
                <li key={idx} className="inline-flex items-center gap-2">
                  {idx > 0 && (
                    <ChevronRight className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                  )}
                  {item.href && !isLast ? (
                    <Link
                      href={item.href}
                      className="hover:text-white transition-colors underline-offset-4 hover:underline"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span className="text-white font-semibold">{item.label}</span>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      </Container>

      {/* Bottom Diagonal Angle Cut Transitioning into White Page */}
      <div className="absolute bottom-0 inset-x-0 h-10 sm:h-16 w-full pointer-events-none z-10 overflow-hidden leading-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-full text-white fill-current"
        >
          <polygon points="0,120 1200,0 1200,120" />
        </svg>
      </div>
    </section>
  );
};
