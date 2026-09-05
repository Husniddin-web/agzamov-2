'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Send, CheckCircle2, AlertCircle, User, Phone, MessageSquare, ShieldCheck, Clock } from 'lucide-react';
import { ContactFormPayload } from '@/types';

interface ContactFormProps {
  defaultService?: string;
  className?: string;
  lightMode?: boolean;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  defaultService = '',
  className = '',
  lightMode = false,
}) => {
  const t = useTranslations('contact');

  const [formData, setFormData] = useState<ContactFormPayload>({
    fullName: '',
    phone: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim()) {
      setStatus('error');
      return;
    }

    setStatus('loading');

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus('success');
      setFormData({ fullName: '', phone: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  const inputWrapperClass = lightMode
    ? 'relative rounded-xl bg-zinc-50 hover:bg-zinc-100/80 focus-within:bg-white border border-zinc-300 hover:border-zinc-400 focus-within:border-red-600 focus-within:ring-2 focus-within:ring-red-600/10 transition-all duration-200 shadow-sm'
    : 'relative rounded-xl bg-white/[0.03] hover:bg-white/[0.05] focus-within:bg-black/60 border border-white/10 hover:border-white/20 focus-within:border-red-600 focus-within:ring-2 focus-within:ring-red-600/20 transition-all duration-200';

  const inputClass = lightMode
    ? 'w-full pl-10 pr-4 py-3 bg-transparent text-zinc-900 placeholder-zinc-400 text-sm focus:outline-none'
    : 'w-full pl-10 pr-4 py-3 bg-transparent text-white placeholder-zinc-500 text-sm focus:outline-none';

  const labelClass = lightMode
    ? 'block text-xs font-semibold text-zinc-700 uppercase tracking-wider'
    : 'block text-xs font-semibold text-zinc-300 uppercase tracking-wider';

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      {status === 'success' && (
        <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-start gap-3 text-emerald-500 text-sm animate-in fade-in">
          <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
          <span>{t('successMessage')}</span>
        </div>
      )}

      {status === 'error' && (
        <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 flex items-start gap-3 text-red-500 text-sm animate-in fade-in">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <span>Iltimos, ismingiz va telefon raqamingizni to&apos;liq kiriting.</span>
        </div>
      )}

      {/* Full Name Field with Integrated Icon */}
      <div className="space-y-1.5">
        <label className={labelClass}>
          {t('fullName')} <span className="text-red-500">*</span>
        </label>
        <div className={inputWrapperClass}>
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-400">
            <User className="w-4 h-4" />
          </div>
          <input
            type="text"
            required
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            placeholder="Bobur Agzamov"
            className={inputClass}
          />
        </div>
      </div>

      {/* Phone Field with Integrated Icon */}
      <div className="space-y-1.5">
        <label className={labelClass}>
          {t('phone')} <span className="text-red-500">*</span>
        </label>
        <div className={inputWrapperClass}>
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-400">
            <Phone className="w-4 h-4" />
          </div>
          <input
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+998 90 123 45 67"
            className={inputClass}
          />
        </div>
      </div>

      {/* Message Field */}
      <div className="space-y-1.5">
        <label className={labelClass}>
          {t('message')}
        </label>
        <div className={inputWrapperClass}>
          <div className="absolute top-3 left-3.5 pointer-events-none text-zinc-400">
            <MessageSquare className="w-4 h-4" />
          </div>
          <textarea
            rows={3}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Vaziyatingiz haqida qisqacha ma'lumot bering..."
            className={`${inputClass} resize-none`}
          />
        </div>
      </div>

      {/* Human-made Trust Indicators */}
      <div className={`py-1 flex items-center justify-between text-[11px] ${lightMode ? 'text-zinc-500' : 'text-zinc-400'}`}>
        <span className="flex items-center gap-1.5 font-medium">
          <ShieldCheck className="w-3.5 h-3.5 text-red-600" />
          100% Advokatlik siri
        </span>
        <span className="flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5 text-zinc-400" />
          Tezkor qayta aloqa
        </span>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full py-3.5 px-6 rounded-xl bg-red-700 hover:bg-red-800 active:scale-[0.99] text-white font-bold text-sm transition-all duration-300 shadow-lg shadow-red-700/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
      >
        <span className="text-white font-bold">
          {status === 'loading' ? t('submitting') : t('submit')}
        </span>
        <Send className="w-4 h-4 text-white shrink-0" />
      </button>
    </form>
  );
};
