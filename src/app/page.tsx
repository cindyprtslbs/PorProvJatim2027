import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/app/components/HeroSection';
import StatsSection from '@/app/components/StatsSection';
import AboutSection from '@/app/components/AboutSection';
import SchedulePreview from '@/app/components/SchedulePreview';
import SportsSection from '@/app/components/SportsSection';
import MedalPreview from '@/app/components/MedalPreview';
import NewsSection from '@/app/components/NewsSection';
import GallerySection from '@/app/components/GallerySection';
import LiveScoreSection from '@/app/components/LiveScoreSection';
import FAQSection from '@/app/components/FAQSection';
import NewsletterCTA from '@/app/components/NewsletterCTA';

export default function HomePage() {
  return (
    <main className="landing-page min-h-screen overflow-x-hidden bg-background">
      <Header />
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <NewsSection />
      <LiveScoreSection />
      <SchedulePreview />
      <SportsSection />
      <MedalPreview />
      <GallerySection />
      <FAQSection />
      <NewsletterCTA />
      <Footer />
    </main>
  );
}