import React from 'react';
import { Link } from '@/i18n/routing';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'dark-outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  href,
  icon,
  iconPosition = 'right',
  className = '',
  children,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 active:scale-[0.98] cursor-pointer focus:outline-none';

  const sizeStyles = {
    sm: 'px-3.5 py-2 text-xs gap-1.5',
    md: 'px-5 py-2.5 text-sm gap-2',
    lg: 'px-7 py-3.5 text-base gap-2.5',
  };

  const variantStyles = {
    primary:
      'bg-red-700 hover:bg-red-800 text-white font-bold shadow-lg shadow-red-950/20 hover:shadow-red-950/35 hover:-translate-y-0.5',
    secondary:
      'bg-zinc-100 hover:bg-zinc-200 text-zinc-900 border border-zinc-300/80 shadow-sm',
    outline:
      'border border-zinc-300/90 hover:border-red-700 bg-white hover:bg-red-50/60 text-zinc-800 hover:text-red-700 shadow-sm font-semibold',
    'dark-outline':
      'border border-white/20 hover:border-red-600 bg-white/5 hover:bg-white/10 text-white shadow-sm font-semibold',
    ghost:
      'text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100/80',
  };

  const combinedClass = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      {icon && iconPosition === 'left' && <span>{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span>{icon}</span>}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={combinedClass}>
        {content}
      </Link>
    );
  }

  return (
    <button className={combinedClass} {...props}>
      {content}
    </button>
  );
};
