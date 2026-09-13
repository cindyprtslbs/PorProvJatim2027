import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MedalStandingsPage from '@/app/klasemen-medali/components/MedalStandingsPage';

export default function KlasemenMedaliPage() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <MedalStandingsPage />
      <Footer />
    </main>
  );
}