export const siteConfig = {
  name: 'AGZAMOV LEGAL GROUP',
  domain: 'https://agzamovlegal.uz',
  phone: '+998 95 133 15 15',
  phoneClean: '+998951331515',
  emergencyPhone: '+998 95 133 15 15',
  emergencyPhoneClean: '+998951331515',
  email: 'info@agzamovlegal.uz',
  address: {
    uz: "Toshkent sh., Mirobod tumani, Amir Temur shoh ko'chasi, 107B",
    ru: 'г. Ташкент, Мирабадский р-н, пр. Амира Темура, 107B',
    en: '107B Amir Temur Avenue, Mirabad District, Tashkent, Uzbekistan',
  },
  workingHours: {
    uz: 'Dush - Shan: 09:00 - 18:00',
    ru: 'Пн - Сб: 09:00 - 18:00',
    en: 'Mon - Sat: 09:00 - 18:00',
  },
  social: {
    telegram: 'https://t.me/miralisherhimoya',
    telegramWeb: 'https://t.me/s/miralisherhimoya',
    telegramHandle: '@miralisherhimoya',
    instagram: 'https://www.instagram.com/agzamov.law?igsi=MWp3Y2gzb3pxZ3A3MA==',
    facebook: 'https://facebook.com/agzamovlegal',
    linkedin: 'https://linkedin.com/company/agzamovlegal',
  },
  foundedYear: 2018,
  licenseNumber: '1044',
  founderName: 'Alisher Agzamov',
  licenseNotice: {
    uz: '«Agzamov Legal Group» advokatlik firmasi O‘zbekiston Respublikasi hududida 2018-yildan buyon № 1044-sonli litsenziya asosida faoliyat yuritadi.',
    ru: 'Адвокатская фирма «Agzamov Legal Group» осуществляет профессиональную деятельность на территории Республики Узбекистан с 2018 года на основании лицензии № 1044.',
    en: 'Advocates Firm "Agzamov Legal Group" has been operating across the Republic of Uzbekistan since 2018 under License No. 1044.',
  },
  stats: {
    experienceYears: 20,
    foundedYear: 2018,
    successfulCases: 540,
    corporatePartners: 65,
    winRatePercent: 98,
  },
};

export interface NavLinkItem {
  key: string;
  href: string;
}

export const navLinks: NavLinkItem[] = [
  { key: 'home', href: '/' },
  { key: 'about', href: '/about' },
  { key: 'services', href: '/services' },
  { key: 'team', href: '/team' },
  { key: 'news', href: '/news' },
  { key: 'contact', href: '/contact' },
];
