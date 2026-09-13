import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SchedulePage from '@/app/jadwal-pertandingan/components/SchedulePage';

export default function JadwalPertandinganPage() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <SchedulePage />
      <Footer />
    </main>
  );
}