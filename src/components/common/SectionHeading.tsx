import React from 'react';

interface SectionHeadingProps {
  tag?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  dark?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  tag,
  title,
  subtitle,
  centered = true,
  className = '',
  dark = false,
}) => {
  return (
    <div
      className={`max-w-3xl space-y-3.5 ${
        centered ? 'mx-auto text-center' : 'text-left'
      } ${className}`}
    >
      {tag && (
        <div
          className={`flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wider uppercase text-red-600 ${
            centered ? 'justify-center' : 'justify-start'
          }`}
        >
          <span className="w-2.5 h-2.5 bg-red-600 rounded-sm inline-block shadow-sm shadow-red-600/50" />
          <span>{tag}</span>
        </div>
      )}
      <h2
        className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight ${
          dark ? 'text-white' : 'text-zinc-950'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-base sm:text-lg font-normal leading-relaxed ${
            dark ? 'text-zinc-400' : 'text-zinc-600'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
