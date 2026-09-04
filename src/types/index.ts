export type Locale = 'uz' | 'ru' | 'en';

export interface MultilingualText {
  uz: string;
  ru: string;
  en: string;
}

export interface WorkerItem {
  id: string;
  name: string;
  position: MultilingualText;
  experience: MultilingualText;
  bio: MultilingualText;
  image: string;
  phone?: string;
  email?: string;
  specialization?: MultilingualText;
  isActive: boolean;
}

export interface NewsItem {
  id: string;
  slug: string;
  title: MultilingualText;
  excerpt: MultilingualText;
  content: MultilingualText;
  thumbnail: string;
  author: string;
  category: MultilingualText;
  createdAt: string;
  readTime: number;
}

export interface PartnerItem {
  id: string;
  companyName: string;
  logoUrl: string;
  websiteLink?: string;
}

export interface FaqItem {
  id: string;
  question: MultilingualText;
  answer: MultilingualText;
  category?: string;
  order: number;
}

export interface LegalServiceItem {
  id: string;
  slug: string;
  title: MultilingualText;
  shortDesc: MultilingualText;
  fullDesc: MultilingualText;
  features: {
    uz: string[];
    ru: string[];
    en: string[];
  };
  iconName: string;
  casesCount: number;
}

export interface PrincipleItem {
  id: string;
  number: string;
  title: MultilingualText;
  desc: MultilingualText;
}

export interface ContactFormPayload {
  fullName: string;
  phone: string;
  service?: string;
  message?: string;
}
