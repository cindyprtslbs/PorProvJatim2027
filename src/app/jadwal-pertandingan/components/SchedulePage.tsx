'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const tabs = [
  { label: 'Hari Ini', value: 'today' },
  { label: 'Besok', value: 'tomorrow' },
  { label: 'Minggu Ini', value: 'week' },
  { label: 'Semua Jadwal', value: 'all' },
];

const sports = [
  'Semua Cabang', 'Atletik', 'Renang', 'Bulutangkis', 'Bola Basket',
  'Bola Voli', 'Sepak Bola', 'Futsal', 'Pencak Silat', 'Karate',
  'Taekwondo', 'Panahan', 'Tenis', 'Tenis Meja', 'Angkat Besi',
  'Tinju', 'Wushu', 'Catur', 'E-Sports',
];

const venues = [
  'Semua Venue', 'Stadion Gelora Bung Tomo', 'GOR Sudirman', 'GOR Kertajaya',
  'Kolam Renang Dispora', 'GOR UNESA', 'Lapangan Tenis Jatim',
  'Dojo Karate Kertajaya', 'GOR Tenis Meja',
];

const cities = [
  'Semua Kota', 'Surabaya', 'Malang', 'Sidoarjo', 'Gresik',
  'Kediri', 'Blitar', 'Mojokerto', 'Pasuruan', 'Probolinggo',
];

interface Match {
  id: number;
  date: string;
  dateLabel: string;
  time: string;
  sport: string;
  event: string;
  venue: string;
  city: string;
  participants: string;
  status: 'live' | 'upcoming' | 'finished';
  icon: string;
  day: 'today' | 'tomorrow' | 'week';
}

const allMatches: Match[] = [
  { id: 1, date: '2027-07-09', dateLabel: '09 Jul 2027', time: '07:30 WIB', sport: 'Pencak Silat', event: 'Tanding Kelas A Putra', venue: 'GOR UNESA', city: 'Surabaya', participants: 'Pasuruan vs Probolinggo', status: 'finished', icon: 'ShieldCheckIcon', day: 'today' },
  { id: 2, date: '2027-07-09', dateLabel: '09 Jul 2027', time: '08:00 WIB', sport: 'Atletik', event: '100m Putra', venue: 'Stadion Gelora Bung Tomo', city: 'Surabaya', participants: 'Final', status: 'finished', icon: 'BoltIcon', day: 'today' },
  { id: 3, date: '2027-07-09', dateLabel: '09 Jul 2027', time: '09:00 WIB', sport: 'Karate', event: 'Kata Beregu Putri', venue: 'Dojo Karate Kertajaya', city: 'Surabaya', participants: 'Kediri vs Blitar', status: 'finished', icon: 'StarIcon', day: 'today' },
  { id: 4, date: '2027-07-09', dateLabel: '09 Jul 2027', time: '10:00 WIB', sport: 'Bulutangkis', event: 'Tunggal Putra', venue: 'GOR Sudirman', city: 'Surabaya', participants: 'Sidoarjo vs Gresik', status: 'live', icon: 'SparklesIcon', day: 'today' },
  { id: 5, date: '2027-07-09', dateLabel: '09 Jul 2027', time: '11:00 WIB', sport: 'Renang', event: '200m Gaya Punggung Putri', venue: 'Kolam Renang Dispora', city: 'Surabaya', participants: 'Final Putri', status: 'live', icon: 'GlobeAltIcon', day: 'today' },
  { id: 6, date: '2027-07-09', dateLabel: '09 Jul 2027', time: '13:00 WIB', sport: 'Renang', event: '100m Gaya Bebas Putra', venue: 'Kolam Renang Dispora', city: 'Surabaya', participants: 'Final Putra', status: 'upcoming', icon: 'GlobeAltIcon', day: 'today' },
  { id: 7, date: '2027-07-09', dateLabel: '09 Jul 2027', time: '14:00 WIB', sport: 'Bola Voli', event: 'Semifinal Putri', venue: 'GOR Kertajaya', city: 'Surabaya', participants: 'Malang vs Mojokerto', status: 'upcoming', icon: 'TrophyIcon', day: 'today' },
  { id: 8, date: '2027-07-09', dateLabel: '09 Jul 2027', time: '15:30 WIB', sport: 'Bola Basket', event: 'Semifinal Putra', venue: 'GOR Kertajaya', city: 'Surabaya', participants: 'Surabaya vs Mojokerto', status: 'upcoming', icon: 'TrophyIcon', day: 'today' },
  { id: 9, date: '2027-07-09', dateLabel: '09 Jul 2027', time: '16:00 WIB', sport: 'Taekwondo', event: 'Final Kelas -58kg Putra', venue: 'GOR UNESA', city: 'Surabaya', participants: 'Surabaya vs Malang', status: 'upcoming', icon: 'StarIcon', day: 'today' },
  { id: 10, date: '2027-07-09', dateLabel: '09 Jul 2027', time: '19:00 WIB', sport: 'Futsal', event: 'Semifinal Putra', venue: 'GOR UNESA', city: 'Surabaya', participants: 'Sidoarjo vs Kediri', status: 'upcoming', icon: 'TrophyIcon', day: 'today' },
  { id: 11, date: '2027-07-10', dateLabel: '10 Jul 2027', time: '08:00 WIB', sport: 'Atletik', event: '400m Putri', venue: 'Stadion Gelora Bung Tomo', city: 'Surabaya', participants: 'Final', status: 'upcoming', icon: 'BoltIcon', day: 'tomorrow' },
  { id: 12, date: '2027-07-10', dateLabel: '10 Jul 2027', time: '09:30 WIB', sport: 'Wushu', event: 'Sanda Kelas 60kg Putra', venue: 'GOR UNESA', city: 'Surabaya', participants: 'Gresik vs Pasuruan', status: 'upcoming', icon: 'ShieldCheckIcon', day: 'tomorrow' },
  { id: 13, date: '2027-07-10', dateLabel: '10 Jul 2027', time: '10:00 WIB', sport: 'Tenis', event: 'Ganda Campuran', venue: 'Lapangan Tenis Jatim', city: 'Surabaya', participants: 'Surabaya vs Malang', status: 'upcoming', icon: 'SparklesIcon', day: 'tomorrow' },
  { id: 14, date: '2027-07-10', dateLabel: '10 Jul 2027', time: '13:00 WIB', sport: 'Panahan', event: 'Recurve Putra 70m', venue: 'Stadion Gelora Bung Tomo', city: 'Surabaya', participants: 'Final', status: 'upcoming', icon: 'BoltIcon', day: 'tomorrow' },
  { id: 15, date: '2027-07-10', dateLabel: '10 Jul 2027', time: '15:00 WIB', sport: 'Sepak Bola', event: 'Semifinal Putra', venue: 'Stadion Gelora Bung Tomo', city: 'Surabaya', participants: 'Surabaya vs Malang', status: 'upcoming', icon: 'TrophyIcon', day: 'tomorrow' },
  { id: 16, date: '2027-07-11', dateLabel: '11 Jul 2027', time: '08:00 WIB', sport: 'Renang', event: '4x100m Gaya Ganti', venue: 'Kolam Renang Dispora', city: 'Surabaya', participants: 'Final Putra', status: 'upcoming', icon: 'GlobeAltIcon', day: 'week' },
  { id: 17, date: '2027-07-11', dateLabel: '11 Jul 2027', time: '10:00 WIB', sport: 'Bulutangkis', event: 'Ganda Putra Final', venue: 'GOR Sudirman', city: 'Surabaya', participants: 'Surabaya vs Sidoarjo', status: 'upcoming', icon: 'SparklesIcon', day: 'week' },
  { id: 18, date: '2027-07-12', dateLabel: '12 Jul 2027', time: '09:00 WIB', sport: 'Catur', event: 'Blitz Perorangan Putra', venue: 'GOR Tenis Meja', city: 'Surabaya', participants: 'Babak Final', status: 'upcoming', icon: 'StarIcon', day: 'week' },
  { id: 19, date: '2027-07-13', dateLabel: '13 Jul 2027', time: '14:00 WIB', sport: 'Bola Basket', event: 'Final Putra', venue: 'GOR Kertajaya', city: 'Surabaya', participants: 'TBD vs TBD', status: 'upcoming', icon: 'TrophyIcon', day: 'week' },
  { id: 20, date: '2027-07-13', dateLabel: '13 Jul 2027', time: '16:00 WIB', sport: 'Sepak Bola', event: 'Final Putra', venue: 'Stadion Gelora Bung Tomo', city: 'Surabaya', participants: 'TBD vs TBD', status: 'upcoming', icon: 'TrophyIcon', day: 'week' },
];

const statusConfig = {
  live: { label: 'LIVE', class: 'bg-primary/20 text-primary border border-primary/40', dot: true },
  upcoming: { label: 'Upcoming', class: 'bg-secondary/40 text-foreground border border-border/30', dot: false },
  finished: { label: 'Selesai', class: 'bg-muted/40 text-muted-foreground border border-border/20', dot: false },
};

type CalendarMode = 'month' | 'week';

const calendarWeekdays = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'];

function parseDate(date: string) {
  const [year, month, day] = date.split('-').map(Number);
  return new Date(year, month - 1, day);
}

function dateKey(date: Date) {
  return [date.getFullYear(), String(date.getMonth() + 1).padStart(2, '0'), String(date.getDate()).padStart(2, '0')].join('-');
}

function getCalendarDays(date: Date, mode: CalendarMode) {
  const start = new Date(date.getFullYear(), date.getMonth(), mode === 'month' ? 1 : date.getDate());
  start.setDate(start.getDate() - (mode === 'month' ? start.getDay() : start.getDay()));
  const totalDays = mode === 'month' ? 42 : 7;
  return Array.from({ length: totalDays }, (_, index) => {
    const day = new Date(start);
    day.setDate(start.getDate() + index);
    return day;
  });
}

export default function SchedulePage() {
  const [activeTab, setActiveTab] = useState<string>('today');
  const [selectedSport, setSelectedSport] = useState('Semua Cabang');
  const [selectedVenue, setSelectedVenue] = useState('Semua Venue');
  const [selectedCity, setSelectedCity] = useState('Semua Kota');
  const [selectedStatus, setSelectedStatus] = useState('Semua Status');
  const [viewMode, setViewMode] = useState<'list' | 'calendar'>('list');
  const [calendarMode, setCalendarMode] = useState<CalendarMode>('month');
  const [calendarDate, setCalendarDate] = useState(() => parseDate('2027-07-09'));
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = useMemo(() => {
    return allMatches.filter((m) => {
      const matchTab = activeTab === 'all' || m.day === activeTab;
      const matchSport = selectedSport === 'Semua Cabang' || m.sport === selectedSport;
      const matchVenue = selectedVenue === 'Semua Venue' || m.venue === selectedVenue;
      const matchCity = selectedCity === 'Semua Kota' || m.city === selectedCity;
      const matchStatus = selectedStatus === 'Semua Status' || m.status === selectedStatus.toLowerCase();
      const matchSearch = searchQuery === '' ||
        m.sport.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.event.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.participants.toLowerCase().includes(searchQuery.toLowerCase());
      return matchTab && matchSport && matchVenue && matchCity && matchStatus && matchSearch;
    });
  }, [activeTab, selectedSport, selectedVenue, selectedCity, selectedStatus, searchQuery]);

  const downloadSchedule = () => {
    const headers = ['Tanggal', 'Waktu', 'Cabang Olahraga', 'Nomor Pertandingan', 'Venue', 'Kota', 'Peserta', 'Status'];
    const rows = filtered.map((match) => [
      match.dateLabel,
      match.time,
      match.sport,
      match.event,
      match.venue,
      match.city,
      match.participants,
      statusConfig[match.status].label,
    ]);
    const escapeCsvValue = (value: string) => `"${value.replace(/"/g, '""')}"`;
    const csv = [headers, ...rows].map((row) => row.map(escapeCsvValue).join(',')).join('\r\n');
    const blob = new Blob([`\ufeff${csv}`], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'jadwal-pertandingan-porprov-jatim-2027.csv';
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  };

  const liveCount = filtered.filter((m) => m.status === 'live').length;
  const calendarDays = getCalendarDays(calendarDate, calendarMode);
  const matchesByDate = filtered.reduce<Record<string, Match[]>>((groups, match) => {
    groups[match.date] = [...(groups[match.date] ?? []), match];
    return groups;
  }, {});

  const moveCalendar = (amount: number) => {
    setCalendarDate((current) => {
      const next = new Date(current);
      if (calendarMode === 'month') next.setMonth(next.getMonth() + amount);
      else next.setDate(next.getDate() + amount * 7);
      return next;
    });
  };

  const calendarTitle = calendarMode === 'month'
    ? calendarDate.toLocaleDateString('id-ID', { month: 'long', year: 'numeric' })
    : `${calendarDays[0].toLocaleDateString('id-ID', { day: 'numeric', month: 'short' })} - ${calendarDays[6].toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}`;

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      {/* Page Header */}
      <div className="relative overflow-hidden bg-gradient-to-b from-secondary/30 to-background border-b border-border/30 py-12">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute top-0 right-0 w-96 h-96 blob-gold opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
            <Link href="/" className="hover:text-accent transition-colors">Beranda</Link>
            <Icon name="ChevronRightIcon" size={14} />
            <span className="text-foreground font-semibold">Jadwal Pertandingan</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-4">
                <Icon name="CalendarDaysIcon" size={14} className="text-primary" />
                <span className="text-primary text-xs font-bold uppercase tracking-widest">PORPROV JATIM 2027</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-2">
                Jadwal <span className="text-red-gradient">Pertandingan</span>
              </h1>
              <p className="text-muted-foreground text-sm">
                Surabaya, Juli 2027 · 80+ Cabang Olahraga · 38 Kontingen
              </p>
            </div>

            {liveCount > 0 && (
              <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-primary/10 border border-primary/30">
                <span className="w-2.5 h-2.5 rounded-full bg-primary live-dot" />
                <span className="text-primary font-bold text-sm">{liveCount} Pertandingan Berlangsung</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="rounded-3xl border border-slate-700/60 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),_transparent_35%),linear-gradient(180deg,#0d1d36_0%,#081927_100%)] p-4 shadow-[0_20px_60px_rgba(8,17,31,0.45)] sm:p-6">
        {/* Tabs */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {tabs.map((tab) => {
            const count = tab.value === 'all'
              ? allMatches.length
              : allMatches.filter((m) => m.day === tab.value).length;
            return (
              <button
                key={tab.value}
                onClick={() => setActiveTab(tab.value)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-200 ${
                  activeTab === tab.value
                    ? 'bg-accent text-accent-foreground shadow-lg'
                    : 'bg-secondary/20 text-muted-foreground hover:text-foreground border border-border/30 hover:border-accent/30'
                }`}
              >
                {tab.label}
                <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                  activeTab === tab.value ? 'bg-accent-foreground/20 text-accent-foreground' : 'bg-secondary/40 text-muted-foreground'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Filters Row */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6 flex-wrap">
          {/* Search */}
          <div className="relative flex-1 min-w-[200px]">
            <Icon name="MagnifyingGlassIcon" size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Cari pertandingan..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full rounded-full border pl-10 pr-4 py-2.5 text-sm text-white placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-accent/40 transition-all ${searchQuery ? 'bg-accent/15 border-accent text-accent' : 'bg-[#162947] border-slate-500/70 focus:border-accent'}`}
            />
          </div>

          {/* Sport Filter */}
          <select
            value={selectedSport}
            onChange={(e) => setSelectedSport(e.target.value)}
            className={`rounded-full border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent/40 transition-all min-w-[160px] ${selectedSport !== 'Semua Cabang' ? 'bg-accent text-accent-foreground border-accent' : 'bg-[#162947] text-white border-slate-500/70 focus:border-accent'}`}
          >
            {sports.map((s) => <option key={s} value={s} className="bg-[#162947] text-white">{s}</option>)}
          </select>

          {/* Venue Filter */}
          <select
            value={selectedVenue}
            onChange={(e) => setSelectedVenue(e.target.value)}
            className={`rounded-full border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent/40 transition-all min-w-[160px] ${selectedVenue !== 'Semua Venue' ? 'bg-accent text-accent-foreground border-accent' : 'bg-[#162947] text-white border-slate-500/70 focus:border-accent'}`}
          >
            {venues.map((v) => <option key={v} value={v} className="bg-[#162947] text-white">{v}</option>)}
          </select>

          {/* Status Filter */}
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className={`rounded-full border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent/40 transition-all min-w-[140px] ${selectedStatus !== 'Semua Status' ? 'bg-accent text-accent-foreground border-accent' : 'bg-[#162947] text-white border-slate-500/70 focus:border-accent'}`}
          >
            {['Semua Status', 'Live', 'Upcoming', 'Finished'].map((s) => (
              <option key={s} value={s} className="bg-[#162947] text-white">{s}</option>
            ))}
          </select>

          {/* View Toggle */}
          <div className="flex items-center gap-1 bg-secondary/20 border border-border/40 rounded-full p-1" aria-label="Pilih tampilan jadwal">
            <button
              onClick={() => setViewMode('list')}
              aria-label="Tampilkan sebagai daftar"
              aria-pressed={viewMode === 'list'}
              className={`p-2 rounded-full transition-all ${viewMode === 'list' ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:text-foreground'}`}
            >
              <Icon name="ListBulletIcon" size={16} />
            </button>
            <button
              onClick={() => setViewMode('calendar')}
              aria-label="Tampilkan sebagai kalender"
              aria-pressed={viewMode === 'calendar'}
              className={`p-2 rounded-full transition-all ${viewMode === 'calendar' ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:text-foreground'}`}
            >
              <Icon name="CalendarDaysIcon" size={16} />
            </button>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-4">
          <p className="text-muted-foreground text-sm">
            Menampilkan <span className="text-foreground font-bold">{filtered.length}</span> pertandingan
          </p>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={downloadSchedule}
              disabled={filtered.length === 0}
              className="inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent px-3.5 py-2 text-sm font-semibold text-accent-foreground transition-all hover:-translate-y-0.5 hover:bg-accent/90 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <Icon name="ArrowDownIcon" size={15} />
              Download CSV
            </button>
            {(selectedSport !== 'Semua Cabang' || selectedVenue !== 'Semua Venue' || selectedCity !== 'Semua Kota' || selectedStatus !== 'Semua Status' || searchQuery) && (
              <button
                onClick={() => {
                  setSelectedSport('Semua Cabang');
                  setSelectedVenue('Semua Venue');
                  setSelectedCity('Semua Kota');
                  setSelectedStatus('Semua Status');
                  setSearchQuery('');
                }}
                className="text-accent text-sm font-semibold hover:underline flex items-center gap-1"
              >
                <Icon name="XMarkIcon" size={14} />
                Reset Filter
              </button>
            )}
          </div>
        </div>

        {/* Match Cards */}
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-20 h-20 rounded-full bg-secondary/30 flex items-center justify-center mx-auto mb-4">
              <Icon name="CalendarDaysIcon" size={36} className="text-muted-foreground" />
            </div>
            <h3 className="text-foreground font-bold text-lg mb-2">Tidak ada pertandingan ditemukan</h3>
            <p className="text-muted-foreground text-sm">Coba ubah filter atau kata kunci pencarian.</p>
          </div>
        ) : viewMode === 'list' ? (
          <div className="space-y-3">
            {filtered.map((match) => {
              const sc = statusConfig[match.status];
              return (
                <div
                  key={match.id}
                  className="group flex flex-col sm:flex-row sm:items-center gap-4 p-5 rounded-2xl bg-card border border-border/30 hover:border-accent/40 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl cursor-pointer"
                >
                  {/* Date/Time */}
                  <div className="flex-shrink-0 text-center sm:w-24">
                    <div className="text-accent font-extrabold text-sm">{match.dateLabel.split(' ')[0]} {match.dateLabel.split(' ')[1]}</div>
                    <div className="text-foreground font-bold text-xs mt-0.5">{match.time}</div>
                  </div>

                  {/* Divider */}
                  <div className="hidden sm:block w-px h-12 bg-border/30" />

                  {/* Sport Icon + Name */}
                  <div className="flex items-center gap-3 sm:w-44 flex-shrink-0">
                    <div className="w-10 h-10 rounded-xl bg-secondary/30 border border-border/30 flex items-center justify-center group-hover:border-accent/30 transition-colors flex-shrink-0">
                      <Icon name={match.icon as 'BoltIcon'} size={18} className="text-accent" />
                    </div>
                    <div>
                      <div className="text-foreground font-bold text-sm leading-tight">{match.sport}</div>
                      <div className="text-muted-foreground text-xs">{match.event}</div>
                    </div>
                  </div>

                  {/* Participants */}
                  <div className="flex-1 min-w-0">
                    <div className="text-foreground font-semibold text-sm truncate">{match.participants}</div>
                    <div className="flex items-center gap-1.5 text-muted-foreground text-xs mt-0.5">
                      <Icon name="MapPinIcon" size={11} />
                      <span className="truncate">{match.venue}</span>
                    </div>
                  </div>

                  {/* Status */}
                  <div className={`flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold ${sc.class}`}>
                    {sc.dot && <span className="w-1.5 h-1.5 rounded-full bg-current live-dot" />}
                    {sc.label}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="rounded-2xl bg-card border border-border/30 overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 border-b border-border/30">
              <div className="flex items-center gap-2">
                <button onClick={() => moveCalendar(-1)} aria-label="Periode sebelumnya" className="p-2 rounded-lg hover:bg-secondary/40 text-muted-foreground hover:text-foreground">
                  <Icon name="ChevronLeftIcon" size={18} />
                </button>
                <button onClick={() => setCalendarDate(parseDate('2027-07-09'))} className="px-3 py-2 rounded-lg text-xs font-bold text-accent hover:bg-accent/10">Hari ini</button>
                <button onClick={() => moveCalendar(1)} aria-label="Periode berikutnya" className="p-2 rounded-lg hover:bg-secondary/40 text-muted-foreground hover:text-foreground">
                  <Icon name="ChevronRightIcon" size={18} />
                </button>
                <h2 className="text-foreground font-bold capitalize ml-1">{calendarTitle}</h2>
              </div>
              <div className="flex items-center gap-1 bg-secondary/20 border border-border/40 rounded-lg p-1">
                {(['month', 'week'] as CalendarMode[]).map((mode) => (
                  <button key={mode} onClick={() => setCalendarMode(mode)} className={`px-3 py-1.5 rounded-md text-xs font-bold transition-colors ${calendarMode === mode ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:text-foreground'}`}>
                    {mode === 'month' ? 'Bulan' : 'Minggu'}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-7 border-b border-border/30">
              {calendarWeekdays.map((day) => <div key={day} className="p-3 text-center text-[10px] font-bold uppercase tracking-wider text-muted-foreground">{day}</div>)}
            </div>
            <div className="grid grid-cols-7">
              {calendarDays.map((day) => {
                const key = dateKey(day);
                const dayMatches = matchesByDate[key] ?? [];
                const isCurrentMonth = day.getMonth() === calendarDate.getMonth();
                return (
                  <div key={key} className={`min-h-28 border-r border-b border-border/20 p-2 last:border-r-0 ${!isCurrentMonth && calendarMode === 'month' ? 'bg-secondary/10 opacity-50' : ''}`}>
                    <div className={`mb-2 flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold ${key === dateKey(parseDate('2027-07-09')) ? 'bg-accent text-accent-foreground' : 'text-muted-foreground'}`}>{day.getDate()}</div>
                    <div className="space-y-1">
                      {dayMatches.slice(0, 3).map((match) => (
                        <div key={match.id} title={`${match.time} - ${match.sport}: ${match.event}`} className={`truncate rounded px-1.5 py-1 text-[10px] font-semibold ${match.status === 'live' ? 'bg-primary/20 text-primary' : 'bg-secondary/50 text-foreground'}`}>
                          <span className="text-accent">{match.time.slice(0, 5)}</span> {match.sport}
                        </div>
                      ))}
                      {dayMatches.length > 3 && <div className="px-1 text-[10px] font-bold text-accent">+{dayMatches.length - 3} lainnya</div>}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
        </div>
      </div>
    </div>
  );
}