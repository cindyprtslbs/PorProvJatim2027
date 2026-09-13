'use client';

import React, { useRef } from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';
import Link from 'next/link';

export const liveMatches = [
  {
    sport: 'Bola Basket',
    team1: 'Surabaya', score1: 72,
    team2: 'Malang', score2: 68,
    period: 'Q4', time: '02:31',
    venue: 'GOR Kertajaya',
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=900&q=85',
  },
  {
    sport: 'Bulutangkis',
    team1: 'Sidoarjo', score1: 1,
    team2: 'Gresik', score2: 0,
    period: 'Set 2', time: '11-8',
    venue: 'GOR Sudirman',
    image: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=900&q=85',
  },
  {
    sport: 'Futsal',
    team1: 'Mojokerto', score1: 3,
    team2: 'Pasuruan', score2: 2,
    period: 'Babak 2', time: '32\'',
    venue: 'GOR UNESA',
    image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=900&q=85',
  },
  {
    sport: 'Sepak Bola',
    team1: 'Surabaya', score1: 1,
    team2: 'Sidoarjo', score2: 1,
    period: 'Babak 2', time: '67\'',
    venue: 'Stadion Gelora Bung Tomo',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=900&q=85',
  },
  {
    sport: 'Renang',
    team1: 'Jawa Timur', score1: 2,
    team2: 'Final Putra', score2: 0,
    period: 'Heat 3', time: '01:12',
    venue: 'Kolam Renang Dispora',
    image: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=900&q=85',
  },
  {
    sport: 'Bola Voli',
    team1: 'Kediri', score1: 2,
    team2: 'Mojokerto', score2: 1,
    period: 'Set 4', time: '18-16',
    venue: 'GOR Kertajaya',
    image: 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?auto=format&fit=crop&w=900&q=85',
  },
];

export default function LiveScoreSection() {
  const liveScoreRef = useRef<HTMLDivElement>(null);

  const moveLiveScore = (direction: number) => {
    liveScoreRef.current?.scrollBy({ left: direction * 340, behavior: 'smooth' });
  };

  return (
    <section id="live-score" className="relative py-16 bg-background overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary border border-primary/50">
              <span className="w-2 h-2 rounded-full bg-foreground live-dot" />
              <span className="text-foreground text-xs font-bold uppercase tracking-widest">LIVE</span>
            </div>
            <h2 className="text-2xl font-extrabold text-foreground">Live Score</h2>
          </div>
          <Link
            href="/live-score"
            className="inline-flex items-center gap-2 text-accent font-bold text-sm border border-accent/40 px-5 py-2 rounded-full hover:bg-accent/10 transition-all"
          >
            Lihat Semua Pertandingan
            <Icon name="ArrowRightIcon" size={14} />
          </Link>
        </div>

        <div className="mb-4 flex justify-end gap-2">
          <button
            type="button"
            onClick={() => moveLiveScore(-1)}
            aria-label="Live score sebelumnya"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <Icon name="ChevronLeftIcon" size={17} />
          </button>
          <button
            type="button"
            onClick={() => moveLiveScore(1)}
            aria-label="Live score berikutnya"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <Icon name="ChevronRightIcon" size={17} />
          </button>
        </div>

        <div ref={liveScoreRef} className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {liveMatches?.map((match, i) => (
            <div
              key={i}
              className="group w-[min(320px,calc(100vw-2rem))] shrink-0 snap-start rounded-2xl bg-card border border-primary/20 p-2 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl cursor-pointer relative overflow-hidden sm:p-5"
            >
              {/* Live glow */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

              <div className="relative -mx-2 -mt-2 mb-2 h-16 overflow-hidden sm:-mx-5 sm:-mt-5 sm:mb-5 sm:h-36">
                <AppImage
                  src={match.image}
                  alt={`Pertandingan ${match.sport}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1426]/45 via-[#0B1426]/10 to-transparent" />
              </div>

              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <span className="text-primary text-[8px] font-bold uppercase tracking-wider sm:text-xs">{match?.sport}</span>
                <div className="flex items-center gap-1 rounded-full bg-primary/20 px-1.5 py-0.5 border border-primary/30 sm:gap-1.5 sm:px-2 sm:py-1">
                  <span className="h-1 w-1 rounded-full bg-primary live-dot sm:h-1.5 sm:w-1.5" />
                  <span className="text-primary text-[8px] font-extrabold sm:text-[10px]">LIVE</span>
                </div>
              </div>

              <div className="flex items-center justify-between mb-3">
                <div className="text-center flex-1">
                  <div className="text-foreground font-extrabold text-[10px] sm:text-sm mb-1">{match?.team1}</div>
                  <div className="text-2xl sm:text-4xl font-extrabold text-foreground tabular-nums">{match?.score1}</div>
                </div>
                <div className="px-2 sm:px-4 text-center">
                  <div className="text-muted-foreground text-base sm:text-lg font-bold">—</div>
                  <div className="text-accent text-xs font-bold mt-1">{match?.period}</div>
                  <div className="text-muted-foreground text-xs">{match?.time}</div>
                </div>
                <div className="text-center flex-1">
                  <div className="text-foreground font-extrabold text-[10px] sm:text-sm mb-1">{match?.team2}</div>
                  <div className="text-2xl sm:text-4xl font-extrabold text-foreground tabular-nums">{match?.score2}</div>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-muted-foreground text-xs justify-center">
                <Icon name="MapPinIcon" size={12} />
                {match?.venue}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}