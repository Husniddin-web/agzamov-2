import { setRequestLocale } from 'next-intl/server';
import { HeroSection } from '@/components/home/HeroSection';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import { FounderSection } from '@/components/home/FounderSection';
import { ServicesSection } from '@/components/home/ServicesSection';
import { PartnersMarquee } from '@/components/home/PartnersMarquee';
import { ReviewsSection } from '@/components/home/ReviewsSection';
import { NewsSection } from '@/components/home/NewsSection';
import { FaqSection } from '@/components/home/FaqSection';
import { ConsultationCta } from '@/components/home/ConsultationCta';

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <HeroSection />
      <WhyChooseUs />
      <FounderSection />
      <ServicesSection />
      <PartnersMarquee />
      <ReviewsSection />
      <NewsSection />
      <FaqSection />
      <ConsultationCta />
    </>
  );
}
