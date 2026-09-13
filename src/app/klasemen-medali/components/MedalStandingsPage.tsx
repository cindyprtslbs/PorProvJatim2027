'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface MedalEntry {
  rank: number;
  name: string;
  type: 'kota' | 'kabupaten';
  gold: number;
  silver: number;
  bronze: number;
  total: number;
  athletes: number;
  sports: number;
  change: 'up' | 'down' | 'same';
}

const medalData: MedalEntry[] = [
  { rank: 1, name: 'Surabaya', type: 'kota', gold: 42, silver: 38, bronze: 31, total: 111, athletes: 680, sports: 62, change: 'same' },
  { rank: 2, name: 'Malang Kota', type: 'kota', gold: 28, silver: 25, bronze: 22, total: 75, athletes: 420, sports: 48, change: 'up' },
  { rank: 3, name: 'Sidoarjo', type: 'kabupaten', gold: 19, silver: 21, bronze: 18, total: 58, athletes: 380, sports: 44, change: 'up' },
  { rank: 4, name: 'Gresik', type: 'kabupaten', gold: 15, silver: 12, bronze: 17, total: 44, athletes: 310, sports: 38, change: 'down' },
  { rank: 5, name: 'Kediri Kota', type: 'kota', gold: 11, silver: 14, bronze: 13, total: 38, athletes: 290, sports: 35, change: 'up' },
  { rank: 6, name: 'Blitar Kota', type: 'kota', gold: 9, silver: 10, bronze: 11, total: 30, athletes: 240, sports: 30, change: 'same' },
  { rank: 7, name: 'Mojokerto Kota', type: 'kota', gold: 8, silver: 9, bronze: 12, total: 29, athletes: 220, sports: 28, change: 'down' },
  { rank: 8, name: 'Pasuruan Kota', type: 'kota', gold: 7, silver: 8, bronze: 10, total: 25, athletes: 200, sports: 26, change: 'up' },
  { rank: 9, name: 'Malang Kabupaten', type: 'kabupaten', gold: 6, silver: 7, bronze: 9, total: 22, athletes: 180, sports: 24, change: 'same' },
  { rank: 10, name: 'Banyuwangi', type: 'kabupaten', gold: 5, silver: 6, bronze: 8, total: 19, athletes: 160, sports: 22, change: 'up' },
  { rank: 11, name: 'Jember', type: 'kabupaten', gold: 4, silver: 6, bronze: 7, total: 17, athletes: 150, sports: 20, change: 'same' },
  { rank: 12, name: 'Probolinggo Kota', type: 'kota', gold: 4, silver: 5, bronze: 6, total: 15, athletes: 140, sports: 19, change: 'down' },
  { rank: 13, name: 'Kediri Kabupaten', type: 'kabupaten', gold: 3, silver: 5, bronze: 7, total: 15, athletes: 135, sports: 18, change: 'up' },
  { rank: 14, name: 'Lamongan', type: 'kabupaten', gold: 3, silver: 4, bronze: 6, total: 13, athletes: 125, sports: 17, change: 'same' },
  { rank: 15, name: 'Tuban', type: 'kabupaten', gold: 2, silver: 4, bronze: 5, total: 11, athletes: 110, sports: 15, change: 'down' },
  { rank: 16, name: 'Bojonegoro', type: 'kabupaten', gold: 2, silver: 3, bronze: 5, total: 10, athletes: 100, sports: 14, change: 'same' },
  { rank: 17, name: 'Lumajang', type: 'kabupaten', gold: 2, silver: 2, bronze: 4, total: 8, athletes: 90, sports: 13, change: 'up' },
  { rank: 18, name: 'Madiun Kota', type: 'kota', gold: 1, silver: 3, bronze: 4, total: 8, athletes: 85, sports: 12, change: 'same' },
  { rank: 19, name: 'Mojokerto Kabupaten', type: 'kabupaten', gold: 1, silver: 2, bronze: 4, total: 7, athletes: 80, sports: 11, change: 'down' },
  { rank: 20, name: 'Ngawi', type: 'kabupaten', gold: 1, silver: 2, bronze: 3, total: 6, athletes: 75, sports: 10, change: 'same' },
];

function useCountUp(target: number, duration = 1500, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * target));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(target);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

function SummaryCard({ value, label, color, started }: { value: number; label: string; color: string; started: boolean }) {
  const count = useCountUp(value, 1500, started);
  return (
    <div className="text-center p-5 rounded-2xl bg-card border border-border/30">
      <div className={`text-3xl font-extrabold tabular-nums ${color}`}>{count}</div>
      <div className="text-muted-foreground text-xs mt-1 font-medium">{label}</div>
    </div>
  );
}

export default function MedalStandingsPage() {
  const [filter, setFilter] = useState<'all' | 'kota' | 'kabupaten'>('all');
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState<'gold' | 'total'>('gold');
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const filtered = useMemo(() => {
    return medalData
      .filter((d) => {
        const matchFilter = filter === 'all' || d.type === filter;
        const matchSearch = search === '' || d.name.toLowerCase().includes(search.toLowerCase());
        return matchFilter && matchSearch;
      })
      .sort((a, b) => sortBy === 'gold' ? b.gold - a.gold || b.silver - a.silver || b.bronze - a.bronze : b.total - a.total)
      .map((d, i) => ({ ...d, displayRank: i + 1 }));
  }, [filter, search, sortBy]);

  const top3 = medalData.slice(0, 3);

  const downloadStandings = () => {
    const headers = ['Peringkat', 'Kontingen', 'Jenis', 'Emas', 'Perak', 'Perunggu', 'Total Medali', 'Atlet', 'Cabang Olahraga'];
    const rows = filtered.map((row) => [
      row.displayRank,
      row.name,
      row.type === 'kota' ? 'Kota' : 'Kabupaten',
      row.gold,
      row.silver,
      row.bronze,
      row.total,
      row.athletes,
      row.sports,
    ]);
    const escapeCsvValue = (value: string | number) => `"${String(value).replace(/"/g, '""')}"`;
    const csv = [headers, ...rows].map((row) => row.map(escapeCsvValue).join(',')).join('\r\n');
    const blob = new Blob([`\ufeff${csv}`], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'klasemen-medali-porprov-jatim-2027.csv';
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  };

  const totalGold = useCountUp(medalData.reduce((s, d) => s + d.gold, 0), 1500, started);
  const totalSilver = useCountUp(medalData.reduce((s, d) => s + d.silver, 0), 1500, started);
  const totalBronze = useCountUp(medalData.reduce((s, d) => s + d.bronze, 0), 1500, started);
  const totalMedals = useCountUp(medalData.reduce((s, d) => s + d.total, 0), 1500, started);

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      {/* Page Header */}
      <div className="relative overflow-hidden bg-gradient-to-b from-secondary/30 to-background border-b border-border/30 py-12">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] blob-gold opacity-15 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
            <Link href="/" className="hover:text-accent transition-colors">Beranda</Link>
            <Icon name="ChevronRightIcon" size={14} />
            <span className="text-foreground font-semibold">Klasemen Medali</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/10 mb-4">
                <Icon name="TrophyIcon" size={14} className="text-accent" />
                <span className="text-accent text-xs font-bold uppercase tracking-widest">PORPROV JATIM 2027</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-2">
                Klasemen <span className="text-gold-gradient">Medali</span>
              </h1>
              <p className="text-muted-foreground text-sm">
                38 Kontingen · Surabaya, Juli 2027
              </p>
            </div>
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-secondary/20 border border-border/30">
              <Icon name="ClockIcon" size={14} className="text-accent" />
              <span className="text-muted-foreground text-xs">Update terakhir: 09 Sep 2026, 16:15 WIB</span>
            </div>
          </div>
        </div>
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Summary Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          <div className="text-center p-5 rounded-2xl bg-card border border-amber-500/30 bg-amber-500/5">
            <div className="text-3xl font-extrabold tabular-nums text-amber-400">{totalGold}</div>
            <div className="text-muted-foreground text-xs mt-1 font-medium">🥇 Total Emas</div>
          </div>
          <div className="text-center p-5 rounded-2xl bg-card border border-slate-400/30 bg-slate-400/5">
            <div className="text-3xl font-extrabold tabular-nums text-slate-300">{totalSilver}</div>
            <div className="text-muted-foreground text-xs mt-1 font-medium">🥈 Total Perak</div>
          </div>
          <div className="text-center p-5 rounded-2xl bg-card border border-amber-700/30 bg-amber-700/5">
            <div className="text-3xl font-extrabold tabular-nums text-amber-600">{totalBronze}</div>
            <div className="text-muted-foreground text-xs mt-1 font-medium">🥉 Total Perunggu</div>
          </div>
          <div className="text-center p-5 rounded-2xl bg-card border border-accent/30 bg-accent/5">
            <div className="text-3xl font-extrabold tabular-nums text-accent">{totalMedals}</div>
            <div className="text-muted-foreground text-xs mt-1 font-medium">🏅 Total Medali</div>
          </div>
        </div>

        {/* Top 3 Podium */}
        <div className="mb-12">
          <h2 className="text-foreground font-extrabold text-xl mb-6 text-center uppercase tracking-widest">
            🏆 Podium Teratas
          </h2>
          <div className="flex items-end justify-center gap-4 sm:gap-6">
            {/* Silver - 2nd */}
            <div className="flex-1 max-w-[200px] text-center">
              <div className="mb-3">
                <div className="text-3xl mb-2">🥈</div>
                <div className="text-foreground font-extrabold text-base leading-tight">{top3[1].name}</div>
                <div className="text-muted-foreground text-xs mt-1">{top3[1].type === 'kota' ? 'Kota' : 'Kabupaten'}</div>
                <div className="flex justify-center gap-3 mt-2">
                  <span className="text-amber-400 font-extrabold text-sm">{top3[1].gold}</span>
                  <span className="text-slate-300 font-extrabold text-sm">{top3[1].silver}</span>
                  <span className="text-amber-600 font-extrabold text-sm">{top3[1].bronze}</span>
                </div>
                <div className="text-muted-foreground text-xs mt-1">{top3[1].total} medali</div>
              </div>
              <div className="h-20 medal-silver rounded-t-2xl flex items-start justify-center pt-3">
                <span className="text-white font-extrabold text-2xl">2</span>
              </div>
            </div>

            {/* Gold - 1st */}
            <div className="flex-1 max-w-[220px] text-center">
              <div className="mb-3">
                <div className="text-4xl mb-2">🥇</div>
                <div className="text-foreground font-extrabold text-lg leading-tight">{top3[0].name}</div>
                <div className="text-muted-foreground text-xs mt-1">{top3[0].type === 'kota' ? 'Kota' : 'Kabupaten'}</div>
                <div className="flex justify-center gap-3 mt-2">
                  <span className="text-amber-400 font-extrabold">{top3[0].gold}</span>
                  <span className="text-slate-300 font-extrabold">{top3[0].silver}</span>
                  <span className="text-amber-600 font-extrabold">{top3[0].bronze}</span>
                </div>
                <div className="text-accent text-sm font-bold mt-1">{top3[0].total} medali</div>
              </div>
              <div className="h-28 medal-gold rounded-t-2xl flex items-start justify-center pt-3 animate-pulse-glow">
                <span className="text-white font-extrabold text-3xl">1</span>
              </div>
            </div>

            {/* Bronze - 3rd */}
            <div className="flex-1 max-w-[200px] text-center">
              <div className="mb-3">
                <div className="text-3xl mb-2">🥉</div>
                <div className="text-foreground font-extrabold text-base leading-tight">{top3[2].name}</div>
                <div className="text-muted-foreground text-xs mt-1">{top3[2].type === 'kota' ? 'Kota' : 'Kabupaten'}</div>
                <div className="flex justify-center gap-3 mt-2">
                  <span className="text-amber-400 font-extrabold text-sm">{top3[2].gold}</span>
                  <span className="text-slate-300 font-extrabold text-sm">{top3[2].silver}</span>
                  <span className="text-amber-600 font-extrabold text-sm">{top3[2].bronze}</span>
                </div>
                <div className="text-muted-foreground text-xs mt-1">{top3[2].total} medali</div>
              </div>
              <div className="h-14 medal-bronze rounded-t-2xl flex items-start justify-center pt-2">
                <span className="text-white font-extrabold text-xl">3</span>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          {/* Search */}
          <div className="relative flex-1 max-w-xs">
            <Icon name="MagnifyingGlassIcon" size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Cari kabupaten/kota..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-secondary/20 border border-border/40 rounded-full pl-10 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent/50 transition-all"
            />
          </div>

          {/* Type Filter */}
          <div className="flex gap-2">
            {(['all', 'kota', 'kabupaten'] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2.5 rounded-full text-sm font-semibold transition-all capitalize ${
                  filter === f
                    ? 'bg-accent text-accent-foreground'
                    : 'bg-secondary/20 text-muted-foreground hover:text-foreground border border-border/30'
                }`}
              >
                {f === 'all' ? 'Semua' : f === 'kota' ? 'Kota' : 'Kabupaten'}
              </button>
            ))}
          </div>

          {/* Sort */}
          <div className="flex gap-2 ml-auto">
            <span className="text-muted-foreground text-sm self-center">Urutkan:</span>
            <button
              onClick={() => setSortBy('gold')}
              className={`px-4 py-2.5 rounded-full text-sm font-semibold transition-all ${
                sortBy === 'gold' ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' : 'bg-secondary/20 text-muted-foreground border border-border/30'
              }`}
            >
              🥇 Emas
            </button>
            <button
              onClick={() => setSortBy('total')}
              className={`px-4 py-2.5 rounded-full text-sm font-semibold transition-all ${
                sortBy === 'total' ? 'bg-accent/20 text-accent border border-accent/30' : 'bg-secondary/20 text-muted-foreground border border-border/30'
              }`}
            >
              Total
            </button>
          </div>

          <button
            type="button"
            onClick={downloadStandings}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-accent/40 bg-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground transition-all hover:-translate-y-0.5 hover:bg-accent/90"
          >
            <Icon name="ArrowDownIcon" size={16} />
            Download CSV
          </button>
        </div>

        {/* Medal Table */}
        <div className="rounded-2xl border border-border/30 overflow-hidden">
          {/* Table Header */}
          <div className="bg-secondary/40 border-b border-border/30 px-4 py-3 grid grid-cols-12 gap-2 items-center">
            <div className="col-span-1 text-center text-xs font-bold text-muted-foreground uppercase tracking-wider">#</div>
            <div className="col-span-4 sm:col-span-5 text-xs font-bold text-muted-foreground uppercase tracking-wider">Kontingen</div>
            <div className="col-span-2 text-center text-xs font-bold text-amber-400 uppercase tracking-wider">🥇</div>
            <div className="col-span-2 text-center text-xs font-bold text-slate-300 uppercase tracking-wider">🥈</div>
            <div className="col-span-2 text-center text-xs font-bold text-amber-600 uppercase tracking-wider">🥉</div>
            <div className="col-span-1 text-center text-xs font-bold text-muted-foreground uppercase tracking-wider hidden sm:block">Total</div>
          </div>

          {/* Table Body */}
          {filtered.length === 0 ? (
            <div className="text-center py-16">
              <Icon name="MagnifyingGlassIcon" size={36} className="mx-auto mb-3 text-muted-foreground opacity-40" />
              <p className="text-muted-foreground font-semibold">Tidak ditemukan</p>
            </div>
          ) : (
            <div>
              {filtered.map((row, i) => {
                const isTop3 = row.displayRank <= 3;
                return (
                  <div
                    key={row.rank}
                    className={`grid grid-cols-12 gap-2 items-center px-4 py-3.5 border-b border-border/20 transition-all duration-200 hover:bg-secondary/20 group cursor-pointer ${
                      isTop3 ? 'bg-accent/5' : ''
                    }`}
                    style={{ animationDelay: `${i * 0.03}s` }}
                  >
                    {/* Rank */}
                    <div className="col-span-1 flex justify-center">
                      {row.displayRank <= 3 ? (
                        <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-extrabold text-white ${
                          row.displayRank === 1 ? 'medal-gold' :
                          row.displayRank === 2 ? 'medal-silver': 'medal-bronze'
                        }`}>
                          {row.displayRank}
                        </span>
                      ) : (
                        <span className="w-8 h-8 rounded-full bg-secondary/30 flex items-center justify-center text-xs font-bold text-muted-foreground">
                          {row.displayRank}
                        </span>
                      )}
                    </div>

                    {/* Name */}
                    <div className="col-span-4 sm:col-span-5">
                      <div className="flex items-center gap-2">
                        <div>
                          <div className={`font-bold text-sm ${isTop3 ? 'text-foreground' : 'text-foreground'} group-hover:text-accent transition-colors`}>
                            {row.name}
                          </div>
                          <div className="flex items-center gap-2 mt-0.5">
                            <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-semibold ${
                              row.type === 'kota' ?'bg-blue-500/10 text-blue-400' :'bg-green-500/10 text-green-400'
                            }`}>
                              {row.type === 'kota' ? 'Kota' : 'Kab.'}
                            </span>
                            <span className="text-muted-foreground text-[10px]">{row.athletes} atlet</span>
                          </div>
                        </div>
                        {/* Change indicator */}
                        <div className="ml-auto hidden sm:block">
                          {row.change === 'up' && <Icon name="ArrowUpIcon" size={14} className="text-green-400" />}
                          {row.change === 'down' && <Icon name="ArrowDownIcon" size={14} className="text-primary" />}
                          {row.change === 'same' && <Icon name="MinusIcon" size={14} className="text-muted-foreground" />}
                        </div>
                      </div>
                    </div>

                    {/* Gold */}
                    <div className="col-span-2 text-center">
                      <div className="relative">
                        <div className="text-amber-400 font-extrabold text-base tabular-nums">{row.gold}</div>
                        {/* Mini bar */}
                        <div className="h-1 bg-secondary/30 rounded-full mt-1 overflow-hidden">
                          <div
                            className="h-full medal-gold rounded-full transition-all duration-1000"
                            style={{ width: `${(row.gold / medalData[0].gold) * 100}%` }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Silver */}
                    <div className="col-span-2 text-center">
                      <div className="text-slate-300 font-extrabold text-base tabular-nums">{row.silver}</div>
                      <div className="h-1 bg-secondary/30 rounded-full mt-1 overflow-hidden">
                        <div
                          className="h-full medal-silver rounded-full transition-all duration-1000"
                          style={{ width: `${(row.silver / medalData[0].silver) * 100}%` }}
                        />
                      </div>
                    </div>

                    {/* Bronze */}
                    <div className="col-span-2 text-center">
                      <div className="text-amber-600 font-extrabold text-base tabular-nums">{row.bronze}</div>
                      <div className="h-1 bg-secondary/30 rounded-full mt-1 overflow-hidden">
                        <div
                          className="h-full medal-bronze rounded-full transition-all duration-1000"
                          style={{ width: `${(row.bronze / medalData[0].bronze) * 100}%` }}
                        />
                      </div>
                    </div>

                    {/* Total */}
                    <div className="col-span-1 text-center hidden sm:block">
                      <span className={`font-extrabold text-base tabular-nums ${isTop3 ? 'text-accent' : 'text-foreground'}`}>
                        {row.total}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer note */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <Icon name="InformationCircleIcon" size={14} />
            <span>Data diperbarui secara berkala sesuai hasil pertandingan resmi PORPROV JATIM 2027.</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <Icon name="ArrowUpIcon" size={12} className="text-green-400" />
              <span>Naik</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Icon name="ArrowDownIcon" size={12} className="text-primary" />
              <span>Turun</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Icon name="MinusIcon" size={12} className="text-muted-foreground" />
              <span>Tetap</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}