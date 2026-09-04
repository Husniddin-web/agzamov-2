import { WorkerItem, NewsItem, PartnerItem, FaqItem, LegalServiceItem, PrincipleItem } from '@/types';

export const mockPrinciples: PrincipleItem[] = [
  {
    id: 'pr-1',
    number: '01',
    title: {
      ru: 'Конфиденциальность',
      uz: 'Mutlaq maxfiylik',
      en: 'Absolute Confidentiality',
    },
    desc: {
      ru: 'Адвокатская тайна соблюдается без исключений и без ограничения во времени.',
      uz: 'Advokatlik siri hech qanday istisnosiz va vaqt cheklovisiz qat\'iy saqlanadi.',
      en: 'Attorney-client privilege is observed without exceptions and without time limits.',
    },
  },
  {
    id: 'pr-2',
    number: '02',
    title: {
      ru: 'Честная оценка перспектив',
      uz: 'Istiqbollarni halol baholash',
      en: 'Candid Merit Assessment',
    },
    desc: {
      ru: 'Доверитель получает объективную картину судебной перспективы дела на первичной консультации, а не после подписания соглашения.',
      uz: 'Mijoz ishning xolis sud istiqbolini shartnoma imzolangandan keyin emas, birinchi maslahatlashuvdayoq ochiq bilib oladi.',
      en: 'Clients receive an objective picture of legal prospects during the initial consultation, not after signing.',
    },
  },
  {
    id: 'pr-3',
    number: '03',
    title: {
      ru: 'Приоритет досудебного урегулирования',
      uz: 'Suddan oldin hal qilish ustuvorligi',
      en: 'Pre-Trial Settlement Priority',
    },
    desc: {
      ru: 'Там, где интересы доверителя достигаются без суда, мы идём этим путём.',
      uz: 'Mijoz manfaatlari suddan tashqari yo\'l bilan ta\'minlanishi mumkin bo\'lgan barcha holatlarda biz aynan shu yo\'ldan boramiz.',
      en: 'Whenever client goals can be secured without litigation, we decisively prioritize pre-trial resolution.',
    },
  },
  {
    id: 'pr-4',
    number: '04',
    title: {
      ru: 'Личное участие',
      uz: 'Shaxsiy ishtirok va nazorat',
      en: 'Direct Partner Involvement',
    },
    desc: {
      ru: 'Дела не передаются на исполнение без контроля со стороны руководителя фирмы.',
      uz: 'Ishlar firma rahbarining shaxsiy nazorati va bevosita ishtirokisiz yordamchilarga topshirilmaydi.',
      en: 'Matters are never delegated without active, personal oversight by the firm’s Managing Partner.',
    },
  },
];

export const mockServices: LegalServiceItem[] = [
  {
    id: 's-1',
    slug: 'economic-criminal-defense',
    iconName: 'ShieldAlert',
    casesCount: 140,
    title: {
      ru: 'Защита по уголовным делам экономической направленности',
      uz: 'Iqtisodiy yo\'nalishdagi jinoiy ishlar bo\'yicha himoya',
      en: 'White-Collar & Economic Criminal Defense',
    },
    shortDesc: {
      ru: 'Хищения, налоговые составы, должностные преступления. Работа с момента первой проверки — до предъявления обвинения, когда исход дела ещё определяется.',
      uz: 'O\'zlashtirish, soliq jinoyatlari, mansab vakolatini suiiste\'mol qilish. Birinchi tekshiruv boshlangan daqiqadan tortib, ish taqdiri hal bo\'ladigan ayblov e\'lon qilinishigacha bo\'lgan to\'liq himoya.',
      en: 'Embezzlement, tax charges, executive offenses. Strategic counsel from the first inspection through pre-indictment stages where outcomes are shaped.',
    },
    fullDesc: {
      ru: 'Мы вступаем в дело на этапе доследственной проверки или первого опроса. Наша цель — пресечь незаконное давление, опровергнуть подозрения на этапе их формирования и не допустить передачи дела в суд с обвинительным уклоном.',
      uz: 'Biz tergovga qadar tekshiruv yoki birinchi so\'roq bosqichidanoq himoyaga kirishamiz. Maqsadimiz — noqonuniy bosimni to\'xtatish, gumonlarni shakllanish bosqichidayoq rad etish va ishning asossiz ayblov bilan sudga oshirilishiga yo\'l qo\'ymaslik.',
      en: 'We intervene during pre-investigative audits or initial interviews. Our mandate is to curb regulatory overreach, dismantle unsubstantiated allegations early, and prevent prejudicial indictments.',
    },
    features: {
      ru: [
        'Защита при налоговых проверках и допросах ОБЭП/ДП',
        'Аудит финансово-хозяйственной документации с независимыми аудиторами',
        'Обжалование ареста счетов, изъятия документов и серверов',
        'Разработка превентивной позиции топ-менеджмента до вызова на допрос',
      ],
      uz: [
        'Soliq va iqtisodiy jinoyatlar bo\'yicha so\'roqlarda bevosita himoya',
        'Mustaqil moliyaviy audit orqali hisob-kitoblarni qayta tekshirish',
        'Hisobvaraqlarni xatlash va hujjatlarni olib qo\'yish ustidan shikoyat',
        'Tergov chaqiruvigacha rahbarlar uchun xavfsiz huquqiy pozitsiya ishlab chiqish',
      ],
      en: [
        'Representation during fiscal and economic police inquiries',
        'Financial document audits with certified forensic experts',
        'Challenging unlawful asset freezes and server seizures',
        'Preventative executive positioning prior to formal summons',
      ],
    },
  },
  {
    id: 's-2',
    slug: 'corporate-property-conflicts',
    iconName: 'Scale',
    casesCount: 185,
    title: {
      ru: 'Сложные имущественные и корпоративные конфликты',
      uz: 'Murakkab mulkiy va korporativ nizolar',
      en: 'High-Stakes Asset & Corporate Disputes',
    },
    shortDesc: {
      ru: 'Споры о контроле над активами, конфликты между партнёрами, оспаривание крупных сделок. Дела, где цена вопроса измеряется не суммой иска, а судьбой бизнеса.',
      uz: 'Aktivlar nazorati bo\'yicha tortishuvlar, hamkorlar o\'rtasidagi nizolar, yirik bitimlarni bekor qilish. Masala narxi shunchaki da\'vo summasi bilan emas, balki biznes taqdiri bilan o\'lchanadigan ishlar.',
      en: 'Control disputes, shareholder battles, challenge of major transactions. Matters where the stakes are measured not by claim amounts, but by enterprise survival.',
    },
    fullDesc: {
      ru: 'В корпоративных войнах побеждает тот, кто владеет безупречной процессуальной стратегией. Мы защищаем контрольные пакеты, возвращаем незаконно отчужденные активы и блокируем враждебные поглощения.',
      uz: 'Korporativ to\'qnashuvlarda protsessual strategiyani mukammal bilgan tomon g\'alaba qozonadi. Biz nazorat paketlarini himoya qilamiz, noqonuniy o\'zlashtirilgan aktivlarni qaytaramiz va dushmanona yutib yuborishlarga to\'sqinlik qilamiz.',
      en: 'In corporate litigation, rigorous evidentiary strategy dictates triumph. We defend majority stakes, recover unlawfully transferred assets, and safeguard against hostile takeovers.',
    },
    features: {
      ru: [
        'Оспаривание решений собраний акционеров и договоров купли-продажи долей',
        'Взыскание убытков с недобросовестных генеральных директоров',
        'Принудительный выкуп долей и защита от недружественного вытеснения',
        'Обеспечительные меры: арест спорных активов в день подачи иска',
      ],
      uz: [
        'Ta\'sischilar yig\'ilishi qarorlari va ulush oldi-sotdi shartnomalarini bekor qilish',
        'Vijdonsiz rahbarlardan yetkazilgan zararni undirish',
        'Ulushlarni majburiy sotib olish va ta\'sischilikdan chiqarishdan himoya',
        'Ta\'minlash choralari: da\'vo kuni nizoli aktivlarni xatlash',
      ],
      en: [
        'Challenging shareholder resolutions and fraudulent share sales',
        'Director liability and breach of fiduciary duty damages recovery',
        'Compulsory buyout disputes and minority squeeze-out defense',
        'Interim injunctions: freezing disputed assets on day of filing',
      ],
    },
  },
  {
    id: 's-3',
    slug: 'regulatory-investigations-defense',
    iconName: 'FileCheck2',
    casesCount: 210,
    title: {
      ru: 'Защита при проверках и во взаимодействии с государственными органами',
      uz: 'Davlat organlari tekshiruvlarida himoya va hamrohlik',
      en: 'Regulatory Inspections & Government Defense',
    },
    shortDesc: {
      ru: 'Сопровождение проверок в режиме реального времени, обжалование доначислений и предписаний, выстраивание позиции до того, как она понадобится в суде.',
      uz: 'Real vaqt rejimida tekshiruvlarni huquqiy kuzatish, asossiz hisoblangan jarimalar va ko\'rsatmalarga e\'tiroz bildirish, sudgacha bo\'lgan mustahkam pozitsiyani shakllantirish.',
      en: 'Real-time audit monitoring, contesting arbitrary penalties and compliance orders, engineering defense strategy before court intervention is needed.',
    },
    fullDesc: {
      ru: 'Контролирующие органы часто пользуются правовой неосведомленностью бизнеса. Наше физическое присутствие на проверке меняет баланс сил: инспекторы действуют строго по регламенту, а необоснованные претензии отсекаются на месте.',
      uz: 'Nazorat qiluvchi organlar ko\'pincha biznesning huquqiy nozikliklarni bilmasligidan foydalanishadi. Tekshiruvda advokatimizning shaxsan ishtiroki kuchlar muvozanatini o\'zgartiradi: noqonuniy talablar joyida to\'xtatiladi.',
      en: 'Regulatory authorities frequently capitalize on corporate uncertainty. Our on-site presence immediately resets dynamics: auditors must strictly adhere to statutory bounds and ungrounded demands are halted.',
    },
    features: {
      ru: [
        'Круглосуточный выезд адвоката при внезапных визитах проверяющих',
        'Анализ законности оснований для проведения проверки и предписаний',
        'Составление аргументированных возражений на акты проверок',
        'Приостановление действия предписаний через суд и прокуратуру',
      ],
      uz: [
        'Kutilmagan tekshiruvlar paytida 24/7 advokatning zudlik bilan yetib borishi',
        'Tekshiruv o\'tkazish asoslari va buyruqlarning qonuniyligini tekshirish',
        'Tekshiruv dalolatnomalariga asosli e\'tirozlar tayyorlash',
        'Sud va prokuratura orqali asossiz qarorlar ijrosini to\'xtatib turish',
      ],
      en: [
        'Immediate 24/7 on-site attorney deployment during unannounced audits',
        'Scrutinizing statutory validity of inspection warrants',
        'Drafting rigorous formal objections to inspection findings',
        'Injunctive suspension of adverse administrative decisions',
      ],
    },
  },
  {
    id: 's-4',
    slug: 'confidential-private-matters',
    iconName: 'Lock',
    casesCount: 95,
    title: {
      ru: 'Частные дела с высоким уровнем конфиденциальности',
      uz: 'Yuqori darajadagi maxfiy shaxsiy ishlar',
      en: 'Confidential Private Client Matters',
    },
    shortDesc: {
      ru: 'Разделы крупного имущества, наследственные конфликты, репутационные вопросы. Работа без публичности и следов в информационном поле.',
      uz: 'Yirik mulk taqsimoti, meros nizolari, obro\' va reputatsiya masalalari. Axborot maydonida hech qanday izsiz va mutlaq maxfiy ish olib borish.',
      en: 'Substantial asset divisions, succession disputes, high-profile reputation defense. Conducted with absolute discretion and zero media footprint.',
    },
    fullDesc: {
      ru: 'Публичность в деликатных делах способна разрушить репутацию и бизнес. Мы проводим закрытые переговоры, урегулируем претензии до суда и защищаем частную жизнь доверителя всеми законными средствами.',
      uz: 'Nozik masalalardagi oshkoralik inson obro\'si va biznesiga putur yetkazishi mumkin. Biz yopiq muzokaralar olib boramiz, nizolarni suddan oldin hal etamiz va mijozning shaxsiy hayotini daxlsiz saqlaymiz.',
      en: 'Publicity in sensitive personal disputes can jeopardize enterprise equity and standing. We orchestrate sealed mediations, resolving claims privately and shielding client privacy.',
    },
    features: {
      ru: [
        'Мирное разделение семейных и совместных бизнес-активов без суда',
        'Управление наследственной массой и защита наследников от претензий третьих лиц',
        'Защита деловой репутации: удаление клеветы и диффамации из медиа',
        'Особый протокол шифрованной связи и физической защиты документов',
      ],
      uz: [
        'Oilaviy va biznes aktivlarini suddan tashqari tinch kelishuv bilan taqsimlash',
        'Meros mulkini boshqarish va merosxo\'rlarni asossiz da\'volardan himoyalash',
        'Ishbilarmonlik obro\'sini himoya qilish: OAVdagi tuhmat va yolg\'onlarni o\'chirish',
        'Maxfiy aloqa va hujjatlarni shifrlangan holda saqlash protokoli',
      ],
      en: [
        'Amicable division of family and joint commercial assets out of court',
        'Estate management and defending heirs against third-party claims',
        'Reputation defense: purging defamatory publications and press',
        'Strict encrypted communications protocol and document custody',
      ],
    },
  },
  {
    id: 's-5',
    slug: 'foreign-investors-capital',
    iconName: 'Globe',
    casesCount: 120,
    title: {
      ru: 'Сопровождение иностранных инвесторов и капитала',
      uz: 'Xorijiy investorlar va kapitalni huquqiy qo\'llab-quvvatlash',
      en: 'Foreign Investment & Capital Advisory',
    },
    shortDesc: {
      ru: 'Структурирование присутствия в Узбекистане, защита вложений, разрешение споров с локальными партнёрами.',
      uz: 'O\'zbekistonda biznes faoliyatini tuzilmalashtirish, investitsiyalarni himoya qilish, mahalliy hamkorlar bilan kelishmovchiliklarni hal etish.',
      en: 'Structuring entry into Uzbekistan, capital preservation, resolving complex disputes with local stakeholders.',
    },
    fullDesc: {
      ru: 'Иностранный капитал в новой юрисдикции требует надежного проводника. Мы разрабатываем безопасные структуры владения, готовим двуязычные контракты и обеспечиваем международные стандарты защиты инвестиций.',
      uz: 'Yangi yurisdiksiyaga kirib kelayotgan xorijiy kapital ishonchli yuridik himoyaga muhtoj. Biz aktivlarga egalik qilishning xavfsiz tuzilmasini yaratamiz va xalqaro investitsiya standartlari asosida himoya qilamiz.',
      en: 'Foreign capital navigating local regulatory landscape requires trusted counsel. We engineer secure holding structures, draft bilingual agreements, and enforce international investment protection standards.',
    },
    features: {
      ru: [
        'Разработка инвестиционных соглашений с государством и гарантий защиты',
        'Структурирование совместных предприятий с локальными партнерами (JV)',
        'Защита от экспроприации и валютное регулирование вывода дивидендов',
        'Представительство в международном коммерческом арбитраже',
      ],
      uz: [
        'Davlat bilan investitsiya shartnomalarini tuzish va kafolatlar olish',
        'Mahalliy hamkorlar bilan qo\'shma korxonalar (QK) tuzilmasini yaratish',
        'Dividentlarni erkin repatriatsiya qilish va valyuta nazorati masalalari',
        'Xalqaro tijorat arbitrajida investor manfaatlarini himoya qilish',
      ],
      en: [
        'Drafting state investment agreements and statutory guarantee covenants',
        'Structuring robust Joint Ventures with local co-investors',
        'Capital repatriation, currency regulations, and dividend remittance',
        'Representation before international commercial arbitration tribunals',
      ],
    },
  },
];

export const mockWorkers: WorkerItem[] = [
  {
    id: 'w-1',
    name: 'Alisher Agzamov',
    position: {
      uz: 'Firma Rahbari, Bosh Advokat',
      ru: 'Руководитель фирмы, Адвокат',
      en: 'Managing Partner, Senior Attorney',
    },
    experience: {
      uz: '20 yillik professional tajriba',
      ru: '20 лет профессионального стажа',
      en: '20 Years of Strategic Legal Practice',
    },
    bio: {
      uz: 'Uning amaliy tajribasi uchta asosiy sohani qamrab oladi: prokuratura organlari (jinoiy ishlar va tergov tartibini ichkaridan bilish), sud tizimi (sud qarorlari mantig\'i) hamda tashkilotlarni huquqiy boshqarish.',
      ru: 'Практический опыт охватывает три ключевые сферы: органы прокуратуры (уголовные дела и надзорная деятельность, знание процедуры изнутри), судебную систему и юридическое сопровождение организаций.',
      en: 'His distinguished practice encompasses three pivotal sectors: public prosecution & criminal inquiry oversight, judicial deliberation frameworks, and corporate legal counsel.',
    },
    specialization: {
      uz: 'Jinoiy himoya, Iqtisodiy va sud nizolari, Biznes xavfsizligi',
      ru: 'Уголовная защита, Судебные споры, Защита бизнеса',
      en: 'White-Collar Criminal Defense, High-Stakes Litigation, Corporate Risk',
    },
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80',
    email: 'a.agzamov@agzamovlegal.uz',
    phone: '+998 95 133 15 15',
    isActive: true,
  },
  {
    id: 'w-2',
    name: 'Karimova Shahzoda Ulug\'bekovna',
    position: {
      uz: 'Hamkor, M&A va Biznes Huquqi Bo\'limi Rahbari',
      ru: 'Партнер, Руководитель практики M&A и Бизнес-права',
      en: 'Partner, Head of M&A & Business Practice',
    },
    experience: {
      uz: '12 yillik korporativ konsalting tajribasi',
      ru: '12 лет опыта корпоративного консалтинга',
      en: '12 years in corporate structuring and M&A deals',
    },
    bio: {
      uz: 'Xorijiy investitsiyalarni jalb qilish, kompaniyalarni qo\'shib olish va yutib yuborish (M&A) bo\'yicha respublikaning eng tajribali huquqshunoslaridan biri.',
      ru: 'Ведущий эксперт по привлечению прямых иностранных инвестиций, слияниям и поглощениям (M&A) и антимонопольному праву.',
      en: 'Leading legal counsel in foreign direct investment structuring, mergers & acquisitions, and cross-border regulatory compliance.',
    },
    specialization: {
      uz: 'M&A bitimlari, Xalqaro shartnomalar, Investitsiyalar',
      ru: 'Сделки M&A, Международные контракты, Инвестиции',
      en: 'M&A Transactions, Foreign Investment, Cross-border Contracts',
    },
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    email: 'sh.karimova@agzamovlegal.uz',
    phone: '+998 90 222 33 44',
    isActive: true,
  },
  {
    id: 'w-3',
    name: 'Rahimov Jamshid Anvarovich',
    position: {
      uz: 'Jinoiy Himoya va Tergov Amaliyoti Rahbari',
      ru: 'Руководитель уголовно-правовой практики',
      en: 'Head of White-Collar Criminal Defense',
    },
    experience: {
      uz: '14 yillik jinoiy advokatura tajribasi',
      ru: '14 лет опыта в уголовной защите',
      en: '14 years defending complex criminal cases',
    },
    bio: {
      uz: 'Iqtisodiy jinoyatlar, mansab lavozimi suiiste\'molligi va soliqqa oid jinoyat ishlarida murosasiz va kuchli himoyachi.',
      ru: 'Признанный специалист по защите топ-менеджмента и предпринимателей в экономических и должностных преступлениях.',
      en: 'Renowned trial lawyer specializing in white-collar crimes, fraud investigations, and pre-trial executive protection.',
    },
    specialization: {
      uz: 'Iqtisodiy jinoyatlar, Tergovdagi himoya, Mansab jinoyatlari',
      ru: 'Экономические преступления, Следственная защита, Должностные споры',
      en: 'White-Collar Crime, Investigative Defense, Regulatory Enforcement',
    },
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    email: 'j.rahimov@agzamovlegal.uz',
    phone: '+998 90 333 44 55',
    isActive: true,
  },
  {
    id: 'w-4',
    name: 'Sodiqova Malika Timur qizi',
    position: {
      uz: 'Intellektual Mulk va IT Huquqi Bo\'yicha Advokat',
      ru: 'Адвокат по интеллектуальной собственности и IT-праву',
      en: 'Senior Associate, IP & Technology Law',
    },
    experience: {
      uz: '8 yillik IT va intellektual mulk tajribasi',
      ru: '8 лет опыта в защите брендов и IT',
      en: '8 years in tech patents, copyrights, and fintech',
    },
    bio: {
      uz: 'Fintech, startaplar va dasturiy ta\'minot kompaniyalariga IP litsenziyalash, ma\'lumotlar maxfiyligi (GDPR) va brend himoyasi bo\'yicha konsalting beradi.',
      ru: 'Специализируется на правовой поддержке IT-компаний, защите авторских прав, патентов и регистрации товарных знаков.',
      en: 'Advises tech conglomerates, fintech startups, and venture funds on IP asset protection, licensing, and compliance.',
    },
    specialization: {
      uz: 'Tovar belgilari, Patentlar, SaaS shartnomalari, Fintech',
      ru: 'Товарные знаки, Патенты, SaaS соглашения, Финтех',
      en: 'Trademarks, IP Licensing, SaaS Contracts, Fintech Compliance',
    },
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80',
    email: 'm.sodiqova@agzamovlegal.uz',
    phone: '+998 90 444 55 66',
    isActive: true,
  },
];

export const mockPartners: PartnerItem[] = [
  {
    id: 'p-1',
    companyName: 'Orient Holding',
    logoUrl: '/logo1.png',
  },
  {
    id: 'p-2',
    companyName: 'Asia Investment Capital',
    logoUrl: '/logo2.png',
  },
  {
    id: 'p-3',
    companyName: 'Silk Road Logistics',
    logoUrl: '/logo3.png',
  },
  {
    id: 'p-4',
    companyName: 'Uzbekistan Energy Group',
    logoUrl: '/logo1.png',
  },
  {
    id: 'p-5',
    companyName: 'Global Tech Park',
    logoUrl: '/logo2.png',
  },
  {
    id: 'p-6',
    companyName: 'Premier Mining Corp',
    logoUrl: '/logo3.png',
  },
];

export const mockNews: NewsItem[] = [
  {
    id: 'n-1',
    slug: 'uzbekiston-soliq-kodeksi-ozgarishlar-2026',
    title: {
      uz: '2026-yilda O\'zbekiston Soliq Qonunchiligidagi Muhim O\'zgarishlar va Biznesga Ta\'siri',
      ru: 'Ключевые изменения в налоговом законодательстве Узбекистана в 2026 году',
      en: 'Major Amendments in Uzbekistan Tax Code 2026 & Impact on Business',
    },
    excerpt: {
      uz: 'Yangi tartiblar korxonalarga qanday imtiyozlar va qo\'shimcha majburiyatlar yuklaydi? Yuristlarimizdan amaliy tahlil.',
      ru: 'Какие преференции и новые регуляторные требования налагаются на бизнес? Практический анализ наших экспертов.',
      en: 'What benefits and regulatory compliance obligations apply to businesses? A practical review by our senior attorneys.',
    },
    content: {
      uz: 'O\'zbekiston Respublikasi Soliq kodeksiga kiritilgan so\'nggi o\'zgarishlar tadbirkorlik subyektlari uchun bir qator qulayliklar bilan birga, tekshiruv mexanizmlarida qat\'iylashuvni ham joriy etmoqda.\n\nBirinchidan, elektron hisob-fakturalar va tovarlar aylanmasining avtomatlashtirilgan tahlili yanada chuqurlashtirildi. Agar sizning biznesingizda xavf darajasi yuqori deb topilsa, avtomatik ravishda kameral tekshiruv tayinlanishi mumkin.\n\nIkkinchidan, xorijiy kompaniyalar bilan amalga oshiriladigan transfer narxlari (Transfer Pricing) nazorati jiddiy e\'tibor markaziga tushdi.\n\nAGZAMOV LEGAL GROUP mutaxassislari sizga ushbu o\'zgarishlarga kompaniyangizni oldindan tayyorlashni va soliq xavflarini minimallashtirishni tavsiya qiladi.',
      ru: 'Последние изменения в Налоговом кодексе Республики Узбекистан вводят ряд стимулирующих мер, одновременно ужесточая автоматизированный фискальный контроль.\n\nВо-первых, глубина анализа электронных счетов-фактур возросла. При определении высокого критерия риска система автоматически инициирует камеральную проверку.\n\nВо-вторых, повышен контроль за трансфертным ценообразованием при сделках с иностранными контрагентами.\n\nЭксперты AGZAMOV LEGAL GROUP рекомендуют заблаговременно провести превентивный аудит документов.',
      en: 'Recent updates to the Tax Code of Uzbekistan introduce streamlined incentives alongside advanced automated auditing tools.\n\nFirst, algorithmic verification of electronic invoices has been intensified. Companies flagged as high risk are instantly scheduled for desk audits.\n\nSecond, increased scrutiny is being directed toward transfer pricing in cross-border commerce.\n\nOur legal team advises corporate leaders to perform pre-audit compliance reviews promptly.',
    },
    thumbnail: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80',
    author: 'Agzamov Bobur',
    category: {
      uz: 'Soliq Huquqi',
      ru: 'Налоговое право',
      en: 'Tax Law',
    },
    createdAt: '2026-08-25',
    readTime: 4,
  },
  {
    id: 'n-2',
    slug: 'shartnomalardagi-xatolar-sudda-yutqazish-sababi',
    title: {
      uz: 'Tijorat Shartnomalaridagi 5 Ta Xavfli Xato: Sudda Qanday Yutqazmaslik Kerak?',
      ru: '5 критических ошибок в коммерческих договорах, ведущих к проигрышу в суде',
      en: '5 Fatal Pitfalls in Commercial Contracts That Lead to Court Losses',
    },
    excerpt: {
      uz: 'Standart shablon shartnomalardan foydalanish biznes uchun juda qimmatga tushishi mumkin. Xavflarni qanday bartaraf etish kerak?',
      ru: 'Использование шаблонных договоров из интернета может стоить миллионы. Разбираем реальные судебные прецеденты.',
      en: 'Relying on generic internet templates can be catastrophic. Real court precedent breakdown and mitigation steps.',
    },
    content: {
      uz: 'Ko\'plab tadbirkorlar shartnomalarni internetdan ko\'chirib olib, unga imzo chekadilar. Biroq amaliyot shuni ko\'rsatadiki, forsm Major bandlarining noaniqligi, sudlov vakolatining noto\'g\'ri belgilanishi va jarimalarning chegaralanmagani millionlab so\'m yo\'qotishlarga sabab bo\'ladi.\n\nBizning amaliyotimizda uchragan eng xatarli holat — tovar qabul qilinganligi to\'g\'risidagi dalolatnoma imzolanmasdan turib yetkazib berish bo\'lgan. Sudda qarzdorlikni isbotlash ancha murakkablashadi.\n\nHar bir yirik bitim oldidan professional yuridik xulosaga ega bo\'lishingiz shart.',
      ru: 'Многие предприниматели скачивают стандартные договоры, не учитывая тонкостей применимого права. В результате неточные формулировки форс-мажора или подсудности приводят к невосполнимым убыткам.\n\nНаиболее частая фатальная ошибка — отсутствие актов приема-передачи надлежащей формы.\n\nКаждый коммерческий контракт должен проходить индивидуальную юридическую экспертизу.',
      en: 'Many enterprises download templated contracts without localized legal tailoring. Ambiguous force majeure clauses and jurisdiction clauses routinely result in massive losses.\n\nOne recurring pitfall is delivery without rigorous statutory acceptance certificates, leaving the seller defenseless in recovery actions.\n\nEvery substantial transaction requires bespoke legal drafting.',
    },
    thumbnail: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
    author: 'Karimova Shahzoda',
    category: {
      uz: 'Sud Amaliyoti',
      ru: 'Судебная практика',
      en: 'Litigation Practice',
    },
    createdAt: '2026-08-14',
    readTime: 5,
  },
  {
    id: 'n-3',
    slug: 'brend-va-tovar-belgisi-himoyasi',
    title: {
      uz: 'Brendingizni O\'g\'irlatib Qo\'ymang: Tovar Belgisini Ro\'yxatdan O\'tkazish Qoidalari',
      ru: 'Защитите свой бренд: Правила регистрации товарного знака и защита от патентных троллей',
      en: 'Guard Your Trademark: How to Register Brand Assets & Ward Off IP Trolls',
    },
    excerpt: {
      uz: 'Agar brendingizni o\'z vaqtida ro\'yxatdan o\'tkazmasangiz, raqobatchingiz uni o\'zlashtirib, sizni sudga berishi mumkin.',
      ru: 'Если вы вовремя не зарегистрируете бренд, недобросовестные конкуренты могут лишить вас бизнеса.',
      en: 'Failing to register early leaves your trademark exposed to predatory squatters and litigation.',
    },
    content: {
      uz: 'Brend — bu kompaniyangizning eng asosiy obro\'sidir. O\'zbekistonda tovar belgilari birinchi bo\'lib ariza topshirgan shaxsga beriladi («First to file» prinsipi).\n\nAgar siz 5 yil davomida mashhur qilgan nomingizni ro\'yxatdan o\'tkazmagan bo\'lsangiz, uchinchi shaxs uni o\'z nomiga rasmiylashtirib, sizdan mahsulotlarni yo\'q qilishni talab qilishi mumkin.\n\nAGZAMOV LEGAL GROUP tovar belgisi arizasini tezkorlik bilan topshirish va kontrafaktga qarshi kurashishda to\'liq yordam beradi.',
      ru: 'Бренд — ключевая ценность вашей компании. В Республике Узбекистан действует принцип «первого заявителя».\n\nЕсли бренд не зарегистрирован вовремя, патентные тролли могут оформить его на себя и потребовать изъятия вашей продукции из оборота.\n\nМы обеспечиваем ускоренную подачу заявок и защиту от недобросовестной конкуренции.',
      en: 'Your brand is your firm\'s core equity. Uzbekistan strictly follows the \'first-to-file\' system.\n\nFailure to register means third parties can seize your branding and demand injunctions against your operations.\n\nWe provide rapid priority filing and anti-counterfeiting enforcement.',
    },
    thumbnail: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80',
    author: 'Sodiqova Malika',
    category: {
      uz: 'Intellektual Mulk',
      ru: 'Интеллектуальная собственность',
      en: 'IP Protection',
    },
    createdAt: '2026-08-02',
    readTime: 3,
  },
];

export const mockFaqs: FaqItem[] = [
  {
    id: 'f-1',
    order: 1,
    question: {
      uz: 'Birinchi konsultatsiyada nimalar hal qilinadi va u qanday o\'tadi?',
      ru: 'Что происходит на первой консультации и как она проходит?',
      en: 'What takes place during the initial legal consultation?',
    },
    answer: {
      uz: 'Dastlabki maslahatlashuvda advokatimiz sizning mavjud hujjatlaringizni o\'rganib chiqadi, ishning istiqbolini va risklarini xolis baholaydi. Shundan so\'ng, eng optimal harakatlar rejasi va xizmat narxi aniq belgilanadi.',
      ru: 'На первой встрече адвокат детально изучает ваши документы, проводит объективную оценку рисков и перспектив дела. После этого формируется пошаговый план действий и фиксируется стоимость услуг.',
      en: 'During the introductory meeting, our attorney examines your case documents, objectively assesses risk factors and winning probability, and establishes a tailored roadmap along with transparent fee parameters.',
    },
  },
  {
    id: 'f-2',
    order: 2,
    question: {
      uz: 'Advokat bilan tuziladigan shartnoma qanday kafolatlarni beradi?',
      ru: 'Какие гарантии дает официальный договор с адвокатским бюро?',
      en: 'What legal guarantees does a formal engagement agreement provide?',
    },
    answer: {
      uz: 'Biz qonun talablariga to\'liq muvofiq bo\'lgan rasmiy shartnoma tuzamiz. Unda advokatlik siri (100% maxfiylik), bajariladigan ishlar hajmi, muddatlar va tomonlarning javobgarligi aniq aks ettiriladi.',
      ru: 'Мы заключаем официальное соглашение в соответствии с законодательством об адвокатуре. В нем строго закреплены нормы адвокатской тайны (100% конфиденциальность), объем работ, сроки и финансовые обязательства.',
      en: 'We execute a statutory attorney-client contract strictly adhering to professional bar standards. It enshrines absolute attorney-client privilege, scope of deliverables, timelines, and accountability.',
    },
  },
  {
    id: 'f-3',
    order: 3,
    question: {
      uz: 'Xizmatlar narxi qanday shakllanadi va yashirin to\'lovlar bormi?',
      ru: 'Как формируется стоимость услуг и есть ли скрытые платежи?',
      en: 'How are fee arrangements structured and are there any hidden charges?',
    },
    answer: {
      uz: 'Bizda har bir ish bo\'yicha qat\'iy shaffoflik ta\'minlanadi. Ishning murakkabligiga qarab: fiksirlangan summa (fixed fee), soatbay to\'lov (hourly rate) yoki natijaga bog\'liq muvaffaqiyat mukofoti (success fee) qo\'llaniladi. Hech qanday yashirin xarajatlar yo\'q.',
      ru: 'Мы гарантируем абсолютную финансовую прозрачность. В зависимости от специфики задачи применяется фиксированная оплата (fixed fee), почасовая ставка или гонорар успеха (success fee). Никаких непредвиденных надбавок.',
      en: 'We uphold utter fiscal integrity. Depending on project dynamics, we offer fixed pricing, transparent hourly billing, or performance-based success fees. Zero hidden surcharges.',
    },
  },
  {
    id: 'f-4',
    order: 4,
    question: {
      uz: 'Favqulodda holatlarda (tintuv, tekshiruv, hibsga olish) qancha vaqtda yetib kelasiz?',
      ru: 'В течение какого времени выезжает адвокат при экстренных проверках или задержании?',
      en: 'How quickly can emergency counsel deploy during unexpected raids or detentions?',
    },
    answer: {
      uz: 'Toshkent shahri bo\'ylab navbatchi advokatimiz qo\'ng\'iroqdan so\'ng 30-45 daqiqa ichida yetib keladi. Hududlarda esa hamkorlik tarmog\'imiz orqali zudlik bilan himoyaga kirishiladi.',
      ru: 'По Ташкенту дежурный адвокат оперативно прибывает на место в течение 30-45 минут после звонка. В регионах защита активируется через нашу партнерскую сеть.',
      en: 'Within Tashkent, our emergency trial attorney arrives on site within 30 to 45 minutes of notice. In other provinces, defense intervention is mobilized through our nationwide partner network.',
    },
  },
  {
    id: 'f-5',
    order: 5,
    question: {
      uz: 'Masofadan turib yoki xorijdan turib xizmat ko\'rsata olasizmi?',
      ru: 'Оказываете ли вы услуги дистанционно или для иностранных клиентов?',
      en: 'Can you provide counsel remotely or represent international non-resident clients?',
    },
    answer: {
      uz: 'Ha, albatta. Biz xorijiy kompaniyalar va jismoniy shaxslarga ishonchnoma (Power of Attorney) asosida ularning shaxsan ishtirokisiz O\'zbekiston hududida to\'liq yuridik vakillikni amalga oshiramiz.',
      ru: 'Да, безусловно. Мы представляем интересы зарубежных инвесторов и нерезидентов на основании апостилированной доверенности без необходимости их личного присутствия в стране.',
      en: 'Absolutely. We regularly represent foreign investors, multinationals, and non-residents via Apostilled Power of Attorney, conducting full legal proceedings without requiring client travel.',
    },
  },
];
