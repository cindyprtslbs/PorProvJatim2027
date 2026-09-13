'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const dateOptions = [
  { day: 'JUM', date: '09', month: 'JUL' },
  { day: 'SAB', date: '10', month: 'JUL' },
  { day: 'MIN', date: '11', month: 'JUL' },
  { day: 'SEN', date: '12', month: 'JUL' },
  { day: 'SEL', date: '13', month: 'JUL' },
  { day: 'RAB', date: '14', month: 'JUL' },
  { day: 'KAM', date: '15', month: 'JUL' },
  { day: 'JUM', date: '16', month: 'JUL' },
  { day: 'SAB', date: '17', month: 'JUL' },
  { day: 'MIN', date: '18', month: 'JUL' },
  { day: 'SEN', date: '19', month: 'JUL' },
  { day: 'SEL', date: '20', month: 'JUL' },
  { day: 'RAB', date: '21', month: 'JUL' },
  { day: 'KAM', date: '22', month: 'JUL' },
];

const sportFilters = ['Semua', 'Atletik', 'Bulutangkis', 'Bola Basket', 'Renang', 'Pencak Silat', 'Karate'];

const scheduleData = [
  {
    date: '09 Jul', time: '08:00 WIB', sport: 'Atletik', event: '100m Putra', venue: 'Stadion Gelora Bung Tomo', city: 'Surabaya',
    participants: 'Surabaya vs Malang', status: 'upcoming', icon: 'BoltIcon',
  },
  {
    date: '09 Jul', time: '10:00 WIB', sport: 'Bulutangkis', event: 'Tunggal Putra', venue: 'GOR Sudirman', city: 'Surabaya',
    participants: 'Sidoarjo vs Gresik', status: 'live', icon: 'SparklesIcon',
  },
  {
    date: '09 Jul', time: '13:00 WIB', sport: 'Renang', event: '100m Gaya Bebas', venue: 'Kolam Renang Dispora', city: 'Surabaya',
    participants: 'Final Putra', status: 'upcoming', icon: 'GlobeAltIcon',
  },
  {
    date: '09 Jul', time: '15:30 WIB', sport: 'Bola Basket', event: 'Semifinal Putra', venue: 'GOR Kertajaya', city: 'Surabaya',
    participants: 'Surabaya vs Mojokerto', status: 'upcoming', icon: 'TrophyIcon',
  },
  {
    date: '09 Jul', time: '07:30 WIB', sport: 'Pencak Silat', event: 'Tanding Kelas A Putra', venue: 'GOR UNESA', city: 'Surabaya',
    participants: 'Pasuruan vs Probolinggo', status: 'finished', icon: 'ShieldCheckIcon',
  },
  {
    date: '09 Jul', time: '09:00 WIB', sport: 'Karate', event: 'Kata Beregu Putri', venue: 'Dojo Karate Kertajaya', city: 'Surabaya',
    participants: 'Kediri vs Blitar', status: 'finished', icon: 'StarIcon',
  },
];

const statusConfig = {
  live: { label: 'LIVE', class: 'bg-primary text-primary-foreground', dot: true },
  upcoming: { label: 'Upcoming', class: 'bg-secondary/60 text-foreground', dot: false },
  finished: { label: 'Selesai', class: 'bg-muted text-muted-foreground', dot: false },
};

export default function SchedulePreview() {
  const [activeDate, setActiveDate] = useState(0);
  const [activeSport, setActiveSport] = useState('Semua');
  const dateCarouselRef = useRef<HTMLDivElement>(null);
  const visibleSchedule = scheduleData
    .filter((item) => activeSport === 'Semua' || item.sport === activeSport)
    .slice(0, 4);

  const moveDateCarousel = (direction: number) => {
    dateCarouselRef.current?.scrollBy({ left: direction * 280, behavior: 'smooth' });
  };

  return (
    <section id="jadwal" className="relative py-24 overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(220,38,38,0.06),_transparent_18%),radial-gradient(circle_at_bottom_right,_rgba(245,158,11,0.08),_transparent_24%),linear-gradient(135deg,#f8fbff_0%,#edf5ff_100%)]">
      <div className="absolute top-0 right-0 w-96 h-96 blob-red opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-section-title font-extrabold text-foreground">
              Jadwal <span className="text-red-gradient">Pertandingan</span>
            </h2>
          </div>
          <Link
            href="/jadwal-pertandingan"
            className="inline-flex items-center gap-2 text-accent font-bold text-sm border border-accent/40 px-6 py-3 rounded-full hover:bg-accent/10 transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap"
          >
            Lihat Semua Jadwal
            <Icon name="ArrowRightIcon" size={16} />
          </Link>
        </div>

        {/* Date selector */}
        <div className="mb-8 flex items-center gap-3">
          <button onClick={() => moveDateCarousel(-1)} aria-label="Tanggal sebelumnya" className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-accent hover:text-accent">
            <Icon name="ChevronLeftIcon" size={18} />
          </button>
          <div ref={dateCarouselRef} className="flex min-w-0 snap-x snap-mandatory gap-3 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {dateOptions.map((date, i) => (
              <button
                key={date.date}
                onClick={() => setActiveDate(i)}
                  className={`flex min-w-[112px] snap-start flex-shrink-0 flex-col items-center rounded-lg border px-4 py-3 transition-all duration-200 ${
                  activeDate === i
                    ? 'border-accent bg-accent text-accent-foreground shadow-lg shadow-accent/20'
                    : 'border-border/50 bg-card text-muted-foreground hover:border-accent/50 hover:text-foreground'
                }`}
              >
                <span className="text-[10px] font-extrabold tracking-widest">{date.day}</span>
                <span className="text-2xl font-extrabold leading-tight">{date.date}</span>
                <span className="text-[10px] font-bold tracking-widest">{date.month}</span>
              </button>
            ))}
          </div>
          <button onClick={() => moveDateCarousel(1)} aria-label="Tanggal berikutnya" className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-accent hover:text-accent">
            <Icon name="ChevronRightIcon" size={18} />
          </button>
        </div>

        {/* Sport filters */}
        <div className="mb-8 flex gap-2 overflow-x-auto pb-2">
          {sportFilters.map((sport) => (
            <button
              key={sport}
              onClick={() => setActiveSport(sport)}
              className={`whitespace-nowrap rounded-full border px-4 py-2 text-sm font-bold transition-all ${
                activeSport === sport
                  ? 'border-primary bg-primary text-primary-foreground'
                  : 'border-border/40 bg-secondary/20 text-muted-foreground hover:border-primary/50 hover:text-foreground'
              }`}
            >
              {sport}
            </button>
          ))}
        </div>

        {/* Schedule list */}
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-2">
          {visibleSchedule.map((item, i) => {
            const sc = statusConfig[item.status as keyof typeof statusConfig];
            const teams = item.participants.split(' vs ');
            return (
              <div
                key={i}
                className="group rounded-xl border border-slate-700 bg-slate-900 p-4 text-slate-100 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#f59e0b]/60 hover:shadow-[0_18px_30px_rgba(11,20,38,0.18)] cursor-pointer sm:p-5"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <div className="flex flex-col gap-5">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-slate-700 bg-slate-800 transition-colors group-hover:border-[#f59e0b]/50">
                        <Icon name={item.icon as 'BoltIcon'} size={21} className="text-accent" />
                      </div>
                      <div>
                        <div className="text-lg font-extrabold uppercase tracking-wide text-white">{item.sport}</div>
                        <div className="text-sm text-slate-300">{item.event}</div>
                      </div>
                    </div>
                    <div className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-extrabold uppercase ${sc.class}`}>
                      {sc.dot && <span className="h-1.5 w-1.5 rounded-full bg-current live-dot" />}
                      {sc.label}
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-3">
                      <Icon name="ClockIcon" size={17} className="text-accent" />
                      <span className="text-xl font-extrabold tabular-nums text-white">{item.time.replace(' WIB', '')}</span>
                    </div>
                    <div className="flex flex-1 items-center justify-center gap-4 text-center sm:max-w-xl">
                      <span className="flex-1 text-sm font-extrabold uppercase text-white sm:text-base">{teams[0]}</span>
                      <span className="text-sm font-bold text-[#d97706]">VS</span>
                      <span className="flex-1 text-sm font-extrabold uppercase text-white sm:text-base">{teams[1] || 'FINAL'}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-700 pt-4 text-sm text-slate-300">
                    <span className="flex items-center gap-2"><Icon name="MapPinIcon" size={15} className="text-[#d97706]" />{item.venue}, {item.city}</span>
                    <span className="flex items-center gap-2"><Icon name="BuildingOffice2Icon" size={15} className="text-[#d97706]" />{item.event}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}