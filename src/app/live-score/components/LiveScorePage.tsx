'use client';

import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';
import { liveMatches } from '@/app/components/LiveScoreSection';

export default function LiveScorePage() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="relative overflow-hidden border-b border-border/30 bg-gradient-to-b from-secondary/30 to-background py-12">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-4 flex items-center gap-2 text-xs text-muted-foreground">
            <Link href="/" className="transition-colors hover:text-accent">Beranda</Link>
            <Icon name="ChevronRightIcon" size={14} />
            <span className="font-semibold text-foreground">Live Score</span>
          </div>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-primary live-dot" />
                <span className="text-xs font-bold uppercase tracking-widest text-primary">Pertandingan Berlangsung</span>
              </div>
              <h1 className="mb-2 text-3xl font-extrabold text-foreground sm:text-4xl">
                Live <span className="text-red-gradient">Score</span>
              </h1>
              <p className="text-sm text-muted-foreground">Pantau skor pertandingan PORPROV JATIM 2027 secara langsung.</p>
            </div>
            <div className="flex items-center gap-2 rounded-xl border border-primary/30 bg-primary/10 px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-primary live-dot" />
              <span className="text-xs font-bold text-primary">{liveMatches.length} pertandingan live</span>
            </div>
          </div>
        </div>
      </div>

      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-2xl font-extrabold text-foreground">Semua Pertandingan Live</h2>
            <p className="mt-1 text-sm text-muted-foreground">Skor terbaru dari berbagai cabang olahraga.</p>
          </div>
          <Link href="/jadwal-pertandingan" className="inline-flex items-center gap-2 self-start rounded-full border border-accent/40 px-5 py-2.5 text-sm font-bold text-accent transition-all hover:bg-accent/10">
            Lihat Jadwal Lengkap
            <Icon name="ArrowRightIcon" size={15} />
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {liveMatches.map((match, index) => (
            <article key={`${match.sport}-${index}`} className="group overflow-hidden rounded-2xl border border-primary/20 bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl">
              <div className="relative h-44 overflow-hidden">
                <AppImage src={match.image} alt={`Pertandingan ${match.sport}`} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1426]/75 via-transparent to-transparent" />
                <div className="absolute left-4 top-4 rounded-full border border-primary/30 bg-[#0B1426]/75 px-3 py-1.5 text-[10px] font-extrabold tracking-widest text-primary">
                  LIVE
                </div>
                <div className="absolute bottom-3 left-4 text-sm font-bold text-white">{match.sport}</div>
              </div>
              <div className="p-5">
                <div className="mb-5 flex items-center justify-between gap-4 text-center">
                  <div className="min-w-0 flex-1">
                    <div className="truncate text-sm font-extrabold text-foreground">{match.team1}</div>
                    <div className="mt-1 text-4xl font-extrabold tabular-nums text-foreground">{match.score1}</div>
                  </div>
                  <div className="shrink-0">
                    <div className="text-xs font-bold text-accent">{match.period}</div>
                    <div className="mt-1 text-xs text-muted-foreground">{match.time}</div>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="truncate text-sm font-extrabold text-foreground">{match.team2}</div>
                    <div className="mt-1 text-4xl font-extrabold tabular-nums text-foreground">{match.score2}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 border-t border-border/30 pt-4 text-xs text-muted-foreground">
                  <Icon name="MapPinIcon" size={14} className="shrink-0 text-accent" />
                  <span className="truncate">{match.venue}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
