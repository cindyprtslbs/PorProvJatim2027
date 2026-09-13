'use client';

import { useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import AppIcon from '@/components/ui/AppIcon';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function MaskotPage() {
  const mascotCarouselRef = useRef<HTMLDivElement>(null);

  const moveMascotCarousel = (direction: number) => {
    const carousel = mascotCarouselRef.current;
    carousel?.scrollBy({ left: direction * carousel.clientWidth, behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-background">
      <Header />

      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute -top-24 left-1/3 h-80 w-80 blob-gold opacity-20" />
        <div className="absolute bottom-0 right-0 h-96 w-96 blob-red opacity-10" />

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2">
              <AppIcon name="SparklesIcon" size={14} className="text-accent" />
              <span className="text-xs font-bold uppercase tracking-widest text-accent">Maskot PORPROV</span>
            </div>
            <h1 className="mb-6 text-4xl font-extrabold leading-tight text-foreground sm:text-6xl">
              Sahabat <span className="text-gold-gradient">PORPROV</span>
            </h1>
            <p className="mb-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Dua maskot PORPROV Jawa Timur 2027 hadir membawa semangat sportivitas, keberanian, dan kebersamaan seluruh kabupaten dan kota.
            </p>

            <div className="grid max-w-xl gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border/60 bg-card p-5 shadow-sm">
                <AppIcon name="BoltIcon" size={22} className="mb-3 text-accent" />
                <h2 className="mb-1 font-bold text-foreground">Energi Kompetisi</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">Mendorong setiap atlet untuk tampil berani dan pantang menyerah.</p>
              </div>
              <div className="rounded-2xl border border-border/60 bg-card p-5 shadow-sm">
                <AppIcon name="UserGroupIcon" size={22} className="mb-3 text-primary" />
                <h2 className="mb-1 font-bold text-foreground">Semangat Bersama</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">Mewakili persatuan dan kebanggaan Jawa Timur dalam satu perhelatan.</p>
              </div>
            </div>
          </div>

          <div id="maskot" className="relative min-w-0 overflow-visible">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Kenali maskot kami</span>
              <div className="flex gap-2">
                <button onClick={() => moveMascotCarousel(-1)} aria-label="Maskot sebelumnya" className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-accent hover:text-accent">
                  <AppIcon name="ChevronLeftIcon" size={18} />
                </button>
                <button onClick={() => moveMascotCarousel(1)} aria-label="Maskot berikutnya" className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-accent hover:text-accent">
                  <AppIcon name="ChevronRightIcon" size={18} />
                </button>
              </div>
            </div>
            <div ref={mascotCarouselRef} className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {[
                {
                  image: '/assets/images/Suro.jpg',
                  alt: 'Suro, maskot PORPROV Jawa Timur',
                  name: 'Suro',
                  meaning: 'Suro berarti hiu, simbol keberanian, ketangguhan, dan semangat pantang menyerah dalam berkompetisi.',
                },
                {
                  image: '/assets/images/Boyo.jpg',
                  alt: 'Boyo, maskot PORPROV Jawa Timur',
                  name: 'Boyo',
                  meaning: 'Boyo berarti buaya, simbol kekuatan, persahabatan, dan semangat menjaga sportivitas.',
                },
              ].map((mascot) => (
                <div key={mascot.image} className="relative min-w-full snap-start">
                  <div className="relative h-[440px] overflow-visible sm:h-[520px]">
                    <AppImage src={mascot.image} alt={mascot.alt} fill objectFit="contain" className="object-contain object-top" sizes="300px" />
                  </div>
                  <div className="rounded-2xl border border-border/60 bg-card p-5 shadow-sm">
                    <h2 className="mb-2 text-lg font-bold text-foreground">Arti {mascot.name}</h2>
                    <p className="text-sm leading-relaxed text-muted-foreground">{mascot.meaning}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border/50 bg-secondary/20 py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-5 px-4 sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <div>
            <p className="mb-1 text-xs font-bold uppercase tracking-widest text-accent">Jelajahi PORPROV JATIM 2027</p>
            <h2 className="text-2xl font-extrabold text-foreground">Ikuti perjalanan kompetisinya</h2>
          </div>
          <Link href="/jadwal-pertandingan" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-transform hover:-translate-y-0.5">
            Lihat Jadwal
            <AppIcon name="ArrowRightIcon" size={16} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}