import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LiveScorePage from '@/app/live-score/components/LiveScorePage';

export default function LiveScoreRoute() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background">
      <Header />
      <LiveScorePage />
      <Footer />
    </main>
  );
}
