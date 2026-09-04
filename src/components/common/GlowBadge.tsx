import React from 'react';

interface GlowBadgeProps {
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}

export const GlowBadge: React.FC<GlowBadgeProps> = ({ children, className = '' }) => {
  return (
    <div
      className={`inline-flex items-center text-xs sm:text-[13px] font-semibold uppercase tracking-[0.22em] text-red-500 ${className}`}
    >
      {children}
    </div>
  );
};
