'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Send, CheckCircle2, AlertCircle, User, Phone, MessageSquare, ShieldCheck, Clock } from 'lucide-react';
import { ContactFormPayload } from '@/types';

interface ContactFormProps {
  defaultService?: string;
  className?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ defaultService = '', className = '' }) => {
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

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      {status === 'success' && (
        <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-start gap-3 text-emerald-400 text-sm animate-in fade-in">
          <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
          <span>{t('successMessage')}</span>
        </div>
      )}

      {status === 'error' && (
        <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 flex items-start gap-3 text-red-400 text-sm animate-in fade-in">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <span>Iltimos, ismingiz va telefon raqamingizni to&apos;liq kiriting.</span>
        </div>
      )}

      {/* Full Name Field with Integrated Icon */}
      <div className="space-y-1.5">
        <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider">
          {t('fullName')} <span className="text-red-500">*</span>
        </label>
        <div className="relative rounded-xl bg-white/[0.03] hover:bg-white/[0.05] focus-within:bg-black/60 border border-white/10 hover:border-white/20 focus-within:border-red-600 focus-within:ring-2 focus-within:ring-red-600/20 transition-all duration-200">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-500">
            <User className="w-4 h-4" />
          </div>
          <input
            type="text"
            required
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            placeholder="Bobur Agzamov"
            className="w-full pl-10 pr-4 py-3 bg-transparent text-white placeholder-zinc-500 text-sm focus:outline-none"
          />
        </div>
      </div>

      {/* Phone Field with Integrated Icon */}
      <div className="space-y-1.5">
        <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider">
          {t('phone')} <span className="text-red-500">*</span>
        </label>
        <div className="relative rounded-xl bg-white/[0.03] hover:bg-white/[0.05] focus-within:bg-black/60 border border-white/10 hover:border-white/20 focus-within:border-red-600 focus-within:ring-2 focus-within:ring-red-600/20 transition-all duration-200">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-500">
            <Phone className="w-4 h-4" />
          </div>
          <input
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+998 90 123 45 67"
            className="w-full pl-10 pr-4 py-3 bg-transparent text-white placeholder-zinc-500 text-sm focus:outline-none"
          />
        </div>
      </div>

      {/* Message Field (No service select dropdown as requested) */}
      <div className="space-y-1.5">
        <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider">
          {t('message')}
        </label>
        <div className="relative rounded-xl bg-white/[0.03] hover:bg-white/[0.05] focus-within:bg-black/60 border border-white/10 hover:border-white/20 focus-within:border-red-600 focus-within:ring-2 focus-within:ring-red-600/20 transition-all duration-200">
          <div className="absolute top-3 left-3.5 pointer-events-none text-zinc-500">
            <MessageSquare className="w-4 h-4" />
          </div>
          <textarea
            rows={3}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Vaziyatingiz haqida qisqacha ma'lumot bering..."
            className="w-full pl-10 pr-4 py-3 bg-transparent text-white placeholder-zinc-500 text-sm focus:outline-none resize-none"
          />
        </div>
      </div>

      {/* Human-made Trust Indicators */}
      <div className="py-1 flex items-center justify-between text-[11px] text-zinc-400">
        <span className="flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-red-500" />
          100% Advokatlik siri
        </span>
        <span className="flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5 text-zinc-500" />
          Tezkor qayta aloqa
        </span>
      </div>

      {/* Submit Button with PURE WHITE TEXT as requested */}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full py-3.5 px-6 rounded-xl bg-red-700 hover:bg-red-800 active:scale-[0.99] text-white font-bold text-sm transition-all duration-300 shadow-xl shadow-red-950/60 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
      >
        <span className="text-white font-bold">
          {status === 'loading' ? t('submitting') : t('submit')}
        </span>
        <Send className="w-4 h-4 text-white shrink-0" />
      </button>
    </form>
  );
};
