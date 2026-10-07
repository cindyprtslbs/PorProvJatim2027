import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans selection:bg-red-sport selection:text-white">
      {/* NAVBAR */}
      <nav className="fixed w-full z-50 bg-[#0A1128]/95 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-red-sport flex items-center justify-center font-display font-bold text-white text-xl uppercase tracking-tighter skew-x-[-10deg]">
              <span className="skew-x-[10deg]">PJ</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-white text-xl leading-none tracking-wide">PORPROV JATIM IX</span>
              <span className="text-cyan-400 text-[10px] tracking-widest uppercase font-bold">2027</span>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-300 uppercase tracking-wider">
            <Link href="#" className="text-white hover:text-cyan-400 transition-colors">Beranda</Link>
            <Link href="#" className="hover:text-cyan-400 transition-colors">Jadwal</Link>
            <Link href="#" className="hover:text-cyan-400 transition-colors">Hasil</Link>
            <Link href="#" className="hover:text-cyan-400 transition-colors">Cabor</Link>
            <Link href="#" className="hover:text-cyan-400 transition-colors">Berita</Link>
            <Link href="#" className="hover:text-cyan-400 transition-colors">Venue</Link>
            <Link href="#" className="hover:text-cyan-400 transition-colors">Tentang</Link>
          </div>

          <div className="hidden lg:block">
            <Link href="#" className="bg-red-sport hover:bg-red-600 text-white font-bold py-3 px-6 uppercase tracking-wider text-sm transition-all flex items-center gap-2 skew-x-[-10deg]">
              <span className="skew-x-[10deg]">LIHAT JADWAL</span>
              <svg className="w-4 h-4 skew-x-[10deg]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            </Link>
          </div>

          <button className="lg:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative h-screen w-full flex items-center bg-[#0A1128] overflow-hidden">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=2070" 
            alt="Sprinter at the starting block" 
            fill 
            className="object-cover opacity-40 mix-blend-luminosity"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1128] via-[#0A1128]/80 to-transparent"></div>
          {/* Decorative graphic lines */}
          <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'linear-gradient(45deg, #00f2fe 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-20">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[2px] w-12 bg-red-sport"></div>
              <p className="text-cyan-400 font-bold tracking-[0.3em] uppercase text-sm">Jawa Timur • 2027</p>
            </div>
            
            <h1 className="font-display font-bold text-7xl md:text-8xl lg:text-9xl text-white leading-[0.85] uppercase tracking-tighter mb-4">
              PORPROV <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500">JATIM IX</span>
            </h1>
            
            <h2 className="font-display text-3xl md:text-5xl text-red-sport font-bold uppercase tracking-tight mb-8">
              Sportivitas. Prestasi. Persatuan.
            </h2>
            
            <p className="text-slate-300 text-lg md:text-xl max-w-2xl mb-12 font-medium border-l-4 border-cyan-400 pl-4">
              Pekan Olahraga Provinsi Jawa Timur. Ajang pembuktian atlet-atlet terbaik mengukir sejarah dan mengharumkan nama daerah.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link href="#" className="bg-red-sport hover:bg-red-600 text-white font-bold py-4 px-8 uppercase tracking-wider transition-all skew-x-[-10deg]">
                <span className="inline-block skew-x-[10deg]">LIHAT JADWAL</span>
              </Link>
              <Link href="#" className="bg-transparent border-2 border-white hover:bg-white hover:text-[#0A1128] text-white font-bold py-4 px-8 uppercase tracking-wider transition-all skew-x-[-10deg]">
                <span className="inline-block skew-x-[10deg]">JELAJAHI CABOR</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Huge background text */}
        <div className="absolute -bottom-20 -right-10 font-display font-black text-[20vw] leading-none text-white/5 uppercase select-none pointer-events-none tracking-tighter">
          2027
        </div>
      </section>

      {/* COUNTDOWN SECTION */}
      <section className="bg-red-sport py-12 relative overflow-hidden">
        {/* Subtle pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/3">
            <h3 className="font-display font-bold text-4xl text-white uppercase tracking-tight leading-none mb-2">Menuju<br/>Pertandingan</h3>
            <p className="text-red-100 font-medium">Persiapan PORPROV JATIM IX 2027</p>
          </div>
          
          <div className="md:w-2/3 grid grid-cols-2 lg:grid-cols-4 gap-4 w-full">
            {[
              { label: 'HARI', value: '120' },
              { label: 'JAM', value: '08' },
              { label: 'MENIT', value: '32' },
              { label: 'DETIK', value: '45' },
            ].map((item, idx) => (
              <div key={idx} className="bg-[#0A1128] text-center py-6 px-2 skew-x-[-5deg] border-b-4 border-cyan-400 shadow-2xl">
                <div className="skew-x-[5deg]">
                  <div className="font-display font-bold text-4xl md:text-6xl text-white leading-none tracking-tighter mb-1">{item.value}</div>
                  <div className="text-cyan-400 text-xs md:text-sm font-bold uppercase tracking-widest">{item.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JADWAL PERTANDINGAN BERDASARKAN CABOR */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        {/* Section Header */}
        <div className="container mx-auto px-4 lg:px-8 mb-12">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-1 bg-red-sport"></div>
                <span className="text-red-sport font-bold tracking-widest uppercase text-sm">Kompetisi</span>
              </div>
              <h2 className="font-display font-bold text-5xl text-[#0A1128] uppercase tracking-tight mb-4">Jadwal Pertandingan</h2>
              <p className="text-[#0A1128] font-bold text-xl mb-2">Temukan jadwal pertandingan PORPROV JATIM 2027 berdasarkan cabang olahraga.</p>
              <p className="text-slate-600 text-lg">Pilih cabang olahraga untuk melihat jadwal pertandingan, venue, dan waktu pertandingan.</p>
            </div>
          </div>
        </div>

        {/* CABOR SELECTOR */}
        <div className="container mx-auto px-0 lg:px-8 mb-8">
          <div className="flex overflow-x-auto gap-2 px-4 lg:px-0 pb-4 scrollbar-hide snap-x">
            {[
              { icon: '⚽', name: 'SEPAK BOLA', active: true },
              { icon: '🏀', name: 'BOLA BASKET' },
              { icon: '🏸', name: 'BULU TANGKIS' },
              { icon: '🏊', name: 'RENANG' },
              { icon: '🏃', name: 'ATLETIK' },
              { icon: '🏐', name: 'BOLA VOLI' },
              { icon: '🏹', name: 'PANAHAN' },
              { icon: '🎾', name: 'TENIS' },
            ].map((cabor, idx) => (
              <button key={idx} className={`snap-start shrink-0 flex items-center gap-3 px-6 py-4 border-b-4 transition-colors ${cabor.active ? 'border-red-sport bg-white shadow-md' : 'border-transparent bg-slate-100/50 hover:bg-slate-200 text-slate-500'}`}>
                <span className="text-2xl">{cabor.icon}</span>
                <span className={`font-bold uppercase tracking-wider ${cabor.active ? 'text-[#0A1128]' : ''}`}>{cabor.name}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-white shadow-2xl shadow-slate-200/50 flex flex-col overflow-hidden relative">
            {/* SPORT FEATURE AREA */}
            <div className="relative bg-[#0A1128] text-white overflow-hidden p-8 lg:p-12">
              <div className="absolute inset-0 z-0 opacity-30 mix-blend-luminosity">
                <Image src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&q=80&w=2000" alt="Sepak Bola" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A1128] via-[#0A1128]/90 to-transparent"></div>
              </div>
              <div className="relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-5xl drop-shadow-md">⚽</span>
                    <h3 className="font-display font-bold text-5xl lg:text-6xl uppercase tracking-tight">SEPAK BOLA</h3>
                  </div>
                  <p className="text-cyan-400 font-bold uppercase tracking-widest text-sm mb-2">Jadwal Pertandingan Sepak Bola</p>
                  <p className="text-slate-300">PORPROV JATIM IX 2027</p>
                </div>
                <div className="flex gap-8 bg-black/40 backdrop-blur-md p-6 border-l-4 border-red-sport">
                  <div>
                    <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">Total Pertandingan</p>
                    <p className="font-display font-bold text-4xl leading-none text-white">24</p>
                  </div>
                  <div>
                    <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">Venue</p>
                    <p className="font-display font-bold text-4xl leading-none text-white">6</p>
                  </div>
                </div>
              </div>
            </div>

            {/* DATE FILTER & SECONDARY FILTERS */}
            <div className="border-b border-slate-200 bg-white p-4 lg:px-8 flex flex-col xl:flex-row justify-between items-center gap-4">
              {/* Date Navigation */}
              <div className="flex items-center gap-1 w-full xl:w-auto overflow-x-auto pb-2 xl:pb-0 scrollbar-hide">
                <button className="text-slate-400 hover:text-red-sport p-2 shrink-0 transition-colors"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg></button>
                {[
                  { date: '08 OKT', active: true },
                  { date: '09 OKT' },
                  { date: '10 OKT' },
                  { date: '11 OKT' },
                  { date: '12 OKT' },
                ].map((d, i) => (
                  <button key={i} className={`shrink-0 px-5 py-2 font-bold text-sm tracking-wider uppercase transition-colors ${d.active ? 'bg-[#0A1128] text-white skew-x-[-10deg]' : 'text-slate-500 hover:bg-slate-100 hover:text-[#0A1128]'}`}>
                    <span className={d.active ? 'inline-block skew-x-[10deg]' : ''}>{d.date}</span>
                  </button>
                ))}
                <button className="text-slate-400 hover:text-red-sport p-2 shrink-0 transition-colors"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg></button>
              </div>

              {/* Secondary Filters */}
              <div className="flex items-center gap-3 w-full xl:w-auto overflow-x-auto pb-2 xl:pb-0 scrollbar-hide">
                <select className="bg-slate-50 border border-slate-200 text-slate-600 text-xs font-bold uppercase px-4 py-2.5 shrink-0 focus:outline-none focus:border-cyan-400 transition-colors">
                  <option>Semua Kategori</option>
                  <option>Putra</option>
                  <option>Putri</option>
                </select>
                <select className="bg-slate-50 border border-slate-200 text-slate-600 text-xs font-bold uppercase px-4 py-2.5 shrink-0 focus:outline-none focus:border-cyan-400 transition-colors">
                  <option>Semua Venue</option>
                  <option>Stadion Gelora Bung Tomo</option>
                  <option>Stadion Gelora Delta</option>
                </select>
                <select className="bg-slate-50 border border-slate-200 text-slate-600 text-xs font-bold uppercase px-4 py-2.5 shrink-0 focus:outline-none focus:border-cyan-400 transition-colors">
                  <option>Semua Status</option>
                  <option>Upcoming</option>
                  <option>Live</option>
                  <option>Finished</option>
                </select>
              </div>
            </div>

            {/* SCHEDULE LAYOUT */}
            <div className="p-4 lg:p-8 bg-white">
              {/* Match Date Header */}
              <div className="mb-8 flex items-center justify-between">
                <div className="border-l-4 border-cyan-400 pl-4">
                  <h4 className="font-display font-bold text-3xl text-[#0A1128] uppercase tracking-tight leading-none">08 Oktober 2027</h4>
                  <p className="text-slate-500 font-medium text-sm mt-1">⚽ Sepak Bola · 4 Pertandingan</p>
                </div>
                <span className="hidden md:flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest">
                  <span className="w-2 h-2 rounded-full bg-red-sport animate-pulse"></span> 1 SEDANG BERLANGSUNG
                </span>
              </div>

              {/* Match Cards — 2-Column Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {[
                  {
                    sport: 'SEPAK BOLA',
                    round: 'Babak Penyisihan Grup A',
                    kategori: 'Putra',
                    date: '08 OKTOBER 2027',
                    time: '15:00',
                    status: 'live',
                    home: { short: 'SBY', full: 'SURABAYA', admin: 'Kota Surabaya', color: '#0A1128', players: ['Ahmad Fauzan', 'Rizky Pratama', 'Dimas Saputra'] },
                    away: { short: 'MLG', full: 'MALANG', admin: 'Kab. Malang', color: '#7B0000', players: ['Fajar Ramadhan', 'Bagas Putra', 'Reza Maulana'] },
                    venue: 'Stadion Gelora Bung Tomo',
                    city: 'Surabaya',
                    extraPlayers: 14,
                  },
                  {
                    sport: 'SEPAK BOLA',
                    round: 'Babak Penyisihan Grup B',
                    kategori: 'Putra',
                    date: '08 OKTOBER 2027',
                    time: '19:00',
                    status: 'upcoming',
                    home: { short: 'KDR', full: 'KEDIRI', admin: 'Kota Kediri', color: '#1A3A5C', players: ['Andi Prasetyo', 'Budi Santoso', 'Cahyo Wibowo'] },
                    away: { short: 'BTU', full: 'BATU', admin: 'Kota Batu', color: '#2D5A1B', players: ['Dani Kurniawan', 'Eko Setiawan', 'Fandi Ahmad'] },
                    venue: 'Stadion Gelora Delta',
                    city: 'Sidoarjo',
                    extraPlayers: 14,
                  },
                  {
                    sport: 'SEPAK BOLA',
                    round: 'Babak Penyisihan Grup A',
                    kategori: 'Putri',
                    date: '08 OKTOBER 2027',
                    time: '10:00',
                    status: 'finished',
                    home: { short: 'GRS', full: 'GRESIK', admin: 'Kab. Gresik', color: '#4A1F00', players: ['Siti Rahayu', 'Dewi Kartika', 'Nurul Hidayah'] },
                    away: { short: 'SDR', full: 'SIDOARJO', admin: 'Kab. Sidoarjo', color: '#003366', players: ['Intan Permata', 'Lestari Wulan', 'Maya Sari'] },
                    venue: 'Stadion Gelora Bung Tomo',
                    city: 'Surabaya',
                    extraPlayers: 14,
                  },
                  {
                    sport: 'SEPAK BOLA',
                    round: 'Babak Penyisihan Grup C',
                    kategori: 'Putra',
                    date: '08 OKTOBER 2027',
                    time: '13:00',
                    status: 'upcoming',
                    home: { short: 'MDN', full: 'MADIUN', admin: 'Kota Madiun', color: '#5C1A1A', players: ['Gunawan Putra', 'Hendra Wijaya', 'Irwan Setiadi'] },
                    away: { short: 'MJK', full: 'MOJOKERTO', admin: 'Kota Mojokerto', color: '#1A4A2E', players: ['Joko Susilo', 'Kukuh Prasetya', 'Lukman Hakim'] },
                    venue: 'Stadion Brantas',
                    city: 'Kediri',
                    extraPlayers: 14,
                  },
                ].map((match, i) => (
                  <div
                    key={i}
                    className="group bg-white border border-slate-200 hover:border-slate-400 hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-200 flex flex-col relative overflow-hidden"
                  >
                    {/* STATUS BAR — top accent */}
                    <div className={`h-1 w-full shrink-0 ${match.status === 'live' ? 'bg-red-sport' : match.status === 'finished' ? 'bg-slate-300' : 'bg-cyan-400'}`}></div>

                    {/* ── TOP PANEL: Cabor + Round + Status ── */}
                    <div className="flex items-center justify-between px-5 py-3 bg-[#0A1128]">
                      <div className="flex items-center gap-2">
                        <span className="text-white font-display font-bold text-sm tracking-wider uppercase">{match.sport}</span>
                        <span className="text-slate-500 text-[10px]">·</span>
                        <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">{match.round}</span>
                        <span className="text-slate-500 text-[10px]">·</span>
                        <span className="text-cyan-400 text-[10px] font-bold uppercase tracking-widest">{match.kategori}</span>
                      </div>
                      {match.status === 'live' && (
                        <span className="flex items-center gap-1.5 bg-red-sport text-white text-[9px] font-bold px-2.5 py-1 uppercase tracking-widest">
                          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span> LIVE
                        </span>
                      )}
                      {match.status === 'upcoming' && (
                        <span className="text-cyan-300 text-[9px] font-bold px-2.5 py-1 uppercase tracking-widest border border-cyan-700">
                          UPCOMING
                        </span>
                      )}
                      {match.status === 'finished' && (
                        <span className="text-slate-500 text-[9px] font-bold px-2.5 py-1 uppercase tracking-widest border border-slate-700">
                          SELESAI
                        </span>
                      )}
                    </div>

                    {/* ── MAIN FIXTURE AREA ── */}
                    <div className="flex items-stretch bg-white relative">
                      {/* Home Team */}
                      <div className="flex-1 flex flex-col items-center justify-center py-6 px-4 gap-3">
                        {/* Logo Block */}
                        <div
                          className="w-20 h-20 flex items-center justify-center border border-slate-100 group-hover:scale-105 transition-transform duration-200 shadow-inner relative overflow-hidden"
                          style={{ backgroundColor: match.home.color }}
                        >
                          {/* Diagonal shine effect */}
                          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(135deg, white 0%, transparent 50%)' }}></div>
                          <span className="font-display font-black text-white text-xl tracking-tighter relative z-10">{match.home.short}</span>
                        </div>
                        <div className="text-center">
                          <div className="font-display font-bold text-2xl text-[#0A1128] uppercase tracking-tight leading-none">{match.home.full}</div>
                          <div className="text-slate-400 text-[10px] font-semibold mt-1 uppercase tracking-wider">{match.home.admin}</div>
                        </div>
                      </div>

                      {/* VS Center Column */}
                      <div className="flex flex-col items-center justify-center shrink-0 px-2 py-6 gap-1 relative">
                        {/* Decorative vertical line above */}
                        <div className="w-px flex-1 bg-slate-100"></div>
                        <div className="bg-slate-50 border border-slate-200 px-3 py-2 my-1">
                          <span className="font-display font-bold text-slate-300 text-lg tracking-widest leading-none">VS</span>
                        </div>
                        {/* Decorative vertical line below */}
                        <div className="w-px flex-1 bg-slate-100"></div>
                      </div>

                      {/* Away Team */}
                      <div className="flex-1 flex flex-col items-center justify-center py-6 px-4 gap-3">
                        <div
                          className="w-20 h-20 flex items-center justify-center border border-slate-100 group-hover:scale-105 transition-transform duration-200 shadow-inner relative overflow-hidden"
                          style={{ backgroundColor: match.away.color }}
                        >
                          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(135deg, white 0%, transparent 50%)' }}></div>
                          <span className="font-display font-black text-white text-xl tracking-tighter relative z-10">{match.away.short}</span>
                        </div>
                        <div className="text-center">
                          <div className="font-display font-bold text-2xl text-[#0A1128] uppercase tracking-tight leading-none">{match.away.full}</div>
                          <div className="text-slate-400 text-[10px] font-semibold mt-1 uppercase tracking-wider">{match.away.admin}</div>
                        </div>
                      </div>
                    </div>

                    {/* ── DATE & TIME BAND ── */}
                    <div className="flex items-center justify-center gap-4 bg-slate-50 border-y border-slate-100 py-3 px-5">
                      <div className="flex items-center gap-1.5 text-slate-500">
                        <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                        <span className="text-xs font-bold uppercase tracking-wider">{match.date}</span>
                      </div>
                      <div className="w-px h-4 bg-slate-200"></div>
                      <div className="flex items-center gap-1.5">
                        <svg className="w-3.5 h-3.5 text-red-sport" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <span className="font-display font-bold text-2xl text-[#0A1128] tracking-tighter leading-none">{match.time}</span>
                        <span className="text-slate-400 font-bold text-[10px] uppercase tracking-widest">WIB</span>
                      </div>
                    </div>

                    {/* ── VENUE ── */}
                    <div className="flex items-center justify-between px-5 py-3 border-b border-slate-100">
                      <div className="flex items-center gap-2 min-w-0">
                        <svg className="w-3.5 h-3.5 text-red-sport shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                        <span className="text-slate-700 font-bold text-xs uppercase tracking-wider truncate">{match.venue}</span>
                        <span className="text-slate-300 shrink-0">·</span>
                        <span className="text-slate-400 text-xs shrink-0">{match.city}</span>
                      </div>
                      <Link href="#" className="shrink-0 text-cyan-600 hover:text-cyan-800 text-[10px] font-bold uppercase tracking-widest flex items-center gap-1 transition-colors ml-2">
                        LIHAT VENUE <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                      </Link>
                    </div>

                    {/* ── PLAYER PREVIEW ── */}
                    <div className="px-5 py-4 bg-white border-b border-slate-100">
                      <div className="flex items-start justify-between gap-4">
                        {/* Home players */}
                        <div className="flex-1 min-w-0">
                          <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">{match.home.full}</p>
                          <div className="flex flex-wrap gap-1">
                            {match.home.players.map((p, pi) => (
                              <span key={pi} className="bg-slate-100 text-slate-600 text-[10px] font-semibold px-2 py-0.5 leading-tight">{p}</span>
                            ))}
                          </div>
                        </div>
                        {/* Separator */}
                        <div className="w-px self-stretch bg-slate-100 shrink-0"></div>
                        {/* Away players */}
                        <div className="flex-1 min-w-0 text-right">
                          <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">{match.away.full}</p>
                          <div className="flex flex-wrap justify-end gap-1">
                            {match.away.players.map((p, pi) => (
                              <span key={pi} className="bg-slate-100 text-slate-600 text-[10px] font-semibold px-2 py-0.5 leading-tight">{p}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                      {match.extraPlayers > 0 && (
                        <button className="mt-2 text-[10px] text-cyan-600 font-bold hover:text-[#0A1128] transition-colors tracking-wider">
                          + {match.extraPlayers} pemain lainnya
                        </button>
                      )}
                    </div>

                    {/* ── CTA FOOTER ── */}
                    <div className="mt-auto">
                      <Link
                        href="#"
                        className="flex items-center justify-between w-full px-5 py-3.5 bg-[#0A1128] hover:bg-red-sport text-white transition-colors group/cta"
                      >
                        <span className="font-bold text-xs uppercase tracking-widest">LIHAT DETAIL PERTANDINGAN</span>
                        <svg className="w-4 h-4 group-hover/cta:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

                {[
                  {
                    sport: 'SEPAK BOLA',
                    date: '08 OKT 2027',
                    time: '15:00',
                    round: 'Penyisihan Grup A · Putra',
                    status: 'live',
                    homeShort: 'SBY',
                    homeFull: 'SURABAYA',
                    homeAdmin: 'Kota Surabaya',
                    homeColor: '#0A1128',
                    awayShort: 'MLG',
                    awayFull: 'MALANG',
                    awayAdmin: 'Kab. Malang',
                    awayColor: '#7B0000',
                    venue: 'Stadion Gelora Bung Tomo',
                    city: 'Surabaya',
                  },
                  {
                    sport: 'SEPAK BOLA',
                    date: '08 OKT 2027',
                    time: '19:00',
                    round: 'Penyisihan Grup B · Putra',
                    status: 'upcoming',
                    homeShort: 'KDR',
                    homeFull: 'KEDIRI',
                    homeAdmin: 'Kota Kediri',
                    homeColor: '#1A3A5C',
                    awayShort: 'BTU',
                    awayFull: 'BATU',
                    awayAdmin: 'Kota Batu',
                    awayColor: '#2D5A1B',
                    venue: 'Stadion Gelora Delta',
                    city: 'Sidoarjo',
                  },
                  {
                    sport: 'SEPAK BOLA',
                    date: '08 OKT 2027',
                    time: '10:00',
                    round: 'Penyisihan Grup A · Putri',
                    status: 'finished',
                    homeShort: 'GRS',
                    homeFull: 'GRESIK',
                    homeAdmin: 'Kab. Gresik',
                    homeColor: '#4A1F00',
                    awayShort: 'SDR',
                    awayFull: 'SIDOARJO',
                    awayAdmin: 'Kab. Sidoarjo',
                    awayColor: '#003366',
                    venue: 'Stadion Gelora Bung Tomo',
                    city: 'Surabaya',
                  },
                  {
                    sport: 'SEPAK BOLA',
                    date: '08 OKT 2027',
                    time: '13:00',
                    round: 'Penyisihan Grup C · Putra',
                    status: 'upcoming',
                    homeShort: 'MDN',
                    homeFull: 'MADIUN',
                    homeAdmin: 'Kota Madiun',
                    homeColor: '#5C1A1A',
                    awayShort: 'MJK',
                    awayFull: 'MOJOKERTO',
                    awayAdmin: 'Kota Mojokerto',
                    awayColor: '#1A4A2E',
                    venue: 'Stadion Brantas',
                    city: 'Kediri',
                  },
                ].map((match, i) => (
                  <div
                    key={i}
                    className="group bg-white border border-slate-200 hover:border-[#0A1128] hover:-translate-y-1 hover:shadow-2xl transition-all duration-200 flex flex-col relative overflow-hidden"
                  >
                    {/* Top accent line — colored by status */}
                    <div className={`h-1 w-full ${match.status === 'live' ? 'bg-red-sport' : match.status === 'finished' ? 'bg-slate-300' : 'bg-cyan-400'}`}></div>

                    {/* Card Header */}
                    <div className="flex items-center justify-between px-5 pt-4 pb-3 border-b border-slate-100">
                      <div className="flex items-center gap-2">
                        <span className="bg-[#0A1128] text-white text-[9px] font-bold px-2 py-1 uppercase tracking-widest">{match.sport}</span>
                        <span className="text-slate-400 text-xs font-semibold">{match.round}</span>
                      </div>
                      {/* Status Badge */}
                      {match.status === 'live' && (
                        <span className="flex items-center gap-1.5 bg-red-sport text-white text-[9px] font-bold px-2.5 py-1 uppercase tracking-widest">
                          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                          LIVE NOW
                        </span>
                      )}
                      {match.status === 'upcoming' && (
                        <span className="text-cyan-700 text-[9px] font-bold px-2.5 py-1 uppercase tracking-widest bg-cyan-50 border border-cyan-200">
                          UPCOMING
                        </span>
                      )}
                      {match.status === 'finished' && (
                        <span className="text-slate-400 text-[9px] font-bold px-2.5 py-1 uppercase tracking-widest bg-slate-100 border border-slate-200">
                          SELESAI
                        </span>
                      )}
                    </div>

                    {/* Match Time */}
                    <div className="text-center pt-4 pb-2">
                      <span className="font-display font-bold text-4xl text-[#0A1128] tracking-tighter leading-none">{match.time}</span>
                      <span className="text-slate-400 font-bold text-xs uppercase tracking-widest ml-1">WIB</span>
                      <p className="text-slate-400 text-xs font-medium mt-0.5">{match.date}</p>
                    </div>

                    {/* VS Block — Main Focus */}
                    <div className="flex items-center justify-between px-4 py-6 gap-3">
                      {/* Home Team */}
                      <div className="flex-1 flex flex-col items-center gap-3">
                        {/* Logo Placeholder — Replace with actual emblem */}
                        <div
                          className="w-16 h-16 flex items-center justify-center border-2 border-slate-100 group-hover:scale-105 transition-transform duration-200 shrink-0"
                          style={{ backgroundColor: match.homeColor }}
                        >
                          <span className="font-display font-black text-white text-lg tracking-tighter">{match.homeShort}</span>
                        </div>
                        <div className="text-center">
                          <div className="font-display font-bold text-xl text-[#0A1128] uppercase tracking-tight leading-none">{match.homeFull}</div>
                          <div className="text-slate-400 text-[10px] font-semibold mt-0.5">{match.homeAdmin}</div>
                        </div>
                      </div>

                      {/* VS Divider */}
                      <div className="shrink-0 flex flex-col items-center gap-1">
                        <div className="w-px h-8 bg-slate-200"></div>
                        <span className="font-display font-bold text-slate-300 text-base tracking-widest">VS</span>
                        <div className="w-px h-8 bg-slate-200"></div>
                      </div>

                      {/* Away Team */}
                      <div className="flex-1 flex flex-col items-center gap-3">
                        <div
                          className="w-16 h-16 flex items-center justify-center border-2 border-slate-100 group-hover:scale-105 transition-transform duration-200 shrink-0"
                          style={{ backgroundColor: match.awayColor }}
                        >
                          <span className="font-display font-black text-white text-lg tracking-tighter">{match.awayShort}</span>
                        </div>
                        <div className="text-center">
                          <div className="font-display font-bold text-xl text-[#0A1128] uppercase tracking-tight leading-none">{match.awayFull}</div>
                          <div className="text-slate-400 text-[10px] font-semibold mt-0.5">{match.awayAdmin}</div>
                        </div>
                      </div>
                    </div>

                    {/* Footer — Venue & CTA */}
                    <div className="mt-auto border-t border-slate-100 px-5 py-3 flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-slate-500 text-xs font-medium min-w-0">
                        <svg className="w-3.5 h-3.5 text-red-sport shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                        <span className="truncate">{match.venue}</span>
                        <span className="text-slate-300 shrink-0">·</span>
                        <span className="text-slate-400 shrink-0">{match.city}</span>
                      </div>
                      <Link
                        href="#"
                        className="shrink-0 text-[10px] font-bold text-[#0A1128] uppercase tracking-widest flex items-center gap-1 group-hover:text-red-sport transition-colors ml-2"
                      >
                        DETAIL
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>


            {/* View All CTA */}
            <div className="bg-slate-50 border-t border-slate-200 p-10 text-center flex flex-col items-center justify-center">
              <h4 className="font-display font-bold text-3xl md:text-4xl text-[#0A1128] uppercase tracking-tight mb-3">LIHAT SELENGKAPNYA</h4>
              <p className="text-slate-600 mb-8 max-w-lg">Jelajahi seluruh jadwal pertandingan PORPROV JATIM 2027 dari semua cabang olahraga.</p>
              <Link href="#" className="bg-[#0A1128] text-white hover:bg-cyan-500 font-bold py-4 px-10 uppercase tracking-wider transition-colors skew-x-[-10deg] shadow-lg">
                <span className="inline-block skew-x-[10deg] flex items-center gap-2">LIHAT SEMUA JADWAL <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg></span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* BERITA TERKINI */}
      <section className="py-24 bg-white relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 pointer-events-none hidden lg:block"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-1 bg-red-sport"></div>
                <span className="text-red-sport font-bold tracking-widest uppercase text-sm">Media</span>
              </div>
              <h2 className="font-display font-bold text-5xl text-[#0A1128] uppercase tracking-tight mb-4">Berita Terkini</h2>
              <p className="text-slate-600 max-w-2xl text-lg">Informasi terbaru seputar persiapan dan pelaksanaan PORPROV JATIM 2027.</p>
            </div>
            <Link href="#" className="font-bold text-[#0A1128] border-b-2 border-red-sport pb-1 hover:text-red-sport transition-colors uppercase tracking-wider text-sm bg-white">LIHAT SEMUA BERITA</Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Featured News */}
            <div className="lg:col-span-7 group cursor-pointer relative overflow-hidden bg-slate-100">
              <div className="relative h-[400px] lg:h-[600px] w-full overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=2069" 
                  alt="Athletes training" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128] via-[#0A1128]/40 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 p-8 lg:p-12 w-full">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-red-sport text-white text-[10px] font-bold px-2 py-1 uppercase tracking-widest">PERSIAPAN</span>
                  <span className="text-white/80 font-semibold text-sm">05 OKT 2026</span>
                </div>
                <h3 className="font-display font-bold text-3xl lg:text-5xl text-white uppercase tracking-tight leading-tight mb-4 group-hover:text-cyan-400 transition-colors">
                  Persiapan PORPROV JATIM 2027 Memasuki Tahap Akhir
                </h3>
                <p className="text-slate-300 max-w-2xl font-medium hidden md:block">
                  Pembangunan sarana dan prasarana olahraga di Surabaya terus dikebut untuk memastikan kesiapan penuh sebelum acara pembukaan dimulai.
                </p>
              </div>
            </div>

            {/* Small News List */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {[
                { img: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&q=80&w=1035", category: "KONTINGEN", date: "04 OKT 2026", title: "Atlet Jawa Timur Bersiap Memburu Prestasi Terbaik" },
                { img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=2070", category: "INFRASTRUKTUR", date: "02 OKT 2026", title: "Venue Pertandingan Utama Mulai Diuji Coba Kelayakannya" },
                { img: "https://images.unsplash.com/photo-1519315901367-f34f815e9854?auto=format&fit=crop&q=80&w=2070", category: "REGULASI", date: "30 SEP 2026", title: "Penambahan Cabang Olahraga Baru Resmi Disahkan" },
              ].map((news, i) => (
                <div key={i} className="flex gap-6 group cursor-pointer bg-white p-4 lg:p-0 hover:bg-slate-50 transition-colors">
                  <div className="relative w-32 h-32 lg:w-40 lg:h-40 shrink-0 overflow-hidden bg-slate-100">
                    <Image src={news.img} alt={news.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="flex flex-col justify-center py-2">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-red-sport text-[10px] font-bold uppercase tracking-widest">{news.category}</span>
                      <span className="text-slate-400 font-semibold text-xs">{news.date}</span>
                    </div>
                    <h4 className="font-display font-bold text-xl text-[#0A1128] uppercase tracking-tight leading-tight group-hover:text-red-sport transition-colors">{news.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VENUE SECTION */}
      <section className="py-24 bg-[#0A1128] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 p-24 opacity-5 pointer-events-none">
          <svg width="400" height="400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M12 2L2 22h20L12 2z"></path></svg>
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 mb-12 relative z-10">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-1 bg-cyan-400"></div>
            <span className="text-cyan-400 font-bold tracking-widest uppercase text-sm">Fasilitas</span>
          </div>
          <h2 className="font-display font-bold text-5xl uppercase tracking-tight mb-4">Venue Pertandingan</h2>
          <p className="text-slate-400 max-w-2xl text-lg mb-8">Temukan lokasi pertandingan berstandar nasional berdasarkan cabang olahraga yang dipertandingkan.</p>
        </div>

        {/* Horizontal Carousel Area */}
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide">
            {[
              { sport: 'ATLETIK', venue: 'Stadion Gelora Bung Tomo', city: 'SURABAYA', events: 42, img: 'https://images.unsplash.com/photo-1562016600-ece13e8ba570?auto=format&fit=crop&q=80&w=1038' },
              { sport: 'RENANG', venue: 'Kolam Renang KONI', city: 'SIDOARJO', events: 38, img: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&q=80&w=2070' },
              { sport: 'BULU TANGKIS', venue: 'GOR Sudirman', city: 'SURABAYA', events: 7, img: 'https://images.unsplash.com/photo-1613918431703-93153549219e?auto=format&fit=crop&q=80&w=2071' },
              { sport: 'SEPAK BOLA', venue: 'Stadion Gelora Delta', city: 'SIDOARJO', events: 2, img: 'https://images.unsplash.com/photo-1459865264687-595d652de67e?auto=format&fit=crop&q=80&w=2070' },
            ].map((venue, i) => (
              <div key={i} className="min-w-[300px] md:min-w-[400px] lg:min-w-[450px] shrink-0 snap-center group cursor-pointer">
                <div className="relative h-[300px] md:h-[400px] w-full overflow-hidden mb-4">
                  <Image src={venue.img} alt={venue.venue} fill className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128] via-transparent to-transparent"></div>
                  
                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-red-sport flex items-center justify-center -translate-y-full translate-x-full group-hover:translate-y-0 group-hover:translate-x-0 transition-transform">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </div>
                </div>
                
                <div className="flex justify-between items-start border-l-4 border-red-sport pl-4">
                  <div>
                    <h3 className="font-display font-bold text-3xl text-white uppercase tracking-tight leading-none mb-1">{venue.sport}</h3>
                    <p className="text-cyan-400 font-bold text-sm tracking-wider uppercase mb-2">{venue.city}</p>
                    <p className="text-slate-400 font-medium">{venue.venue}</p>
                  </div>
                  <div className="text-right">
                    <span className="block font-display font-bold text-3xl text-slate-300 leading-none">{venue.events}</span>
                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Nomor</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ATHLETE & VISITOR GUIDE SECTION */}
      <section className="bg-slate-50 relative overflow-hidden">
        {/* Section Transition Header */}
        <div className="bg-[#0A1128] text-white py-12 border-t border-slate-800">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <p className="text-cyan-400 font-bold tracking-[0.2em] uppercase text-sm mb-4">
              Pertandingan Adalah Tujuan. Kenyamanan Adalah Kebutuhan.
            </p>
            <h2 className="font-display font-bold text-4xl md:text-6xl uppercase tracking-tight mb-4">
              Athlete & Visitor Guide
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              Temukan berbagai fasilitas yang dibutuhkan atlet, kontingen, official, dan penonton di sekitar venue pertandingan.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 py-16">
          {/* Controls: Venue & Distance */}
          <div className="bg-white p-6 md:p-8 shadow-xl -mt-24 relative z-20 flex flex-col md:flex-row gap-6 items-end border-t-4 border-red-sport">
            <div className="flex-1 w-full">
              <label className="block text-[#0A1128] font-bold text-sm uppercase tracking-wider mb-2">Cari Fasilitas di Sekitar Venue</label>
              <div className="relative">
                <select className="w-full bg-slate-100 border border-slate-200 text-[#0A1128] font-semibold text-lg p-4 appearance-none rounded-none focus:outline-none focus:border-cyan-400">
                  <option>Stadion Gelora Bung Tomo</option>
                  <option>Kolam Renang KONI Jatim</option>
                  <option>GOR Sudirman Surabaya</option>
                  <option>Stadion Gelora Delta Sidoarjo</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#0A1128]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </div>
            </div>
            <div className="w-full md:w-auto">
              <label className="block text-slate-500 font-bold text-xs uppercase tracking-wider mb-2">Jarak dari Venue</label>
              <div className="flex bg-slate-100 p-1">
                <button className="px-4 py-2 bg-white shadow-sm text-[#0A1128] font-bold text-sm">&lt; 1 km</button>
                <button className="px-4 py-2 text-slate-500 hover:text-[#0A1128] font-bold text-sm">&lt; 2 km</button>
                <button className="px-4 py-2 text-slate-500 hover:text-[#0A1128] font-bold text-sm">&lt; 5 km</button>
                <button className="px-4 py-2 text-slate-500 hover:text-[#0A1128] font-bold text-sm">Semua</button>
              </div>
            </div>
          </div>

          <div className="mt-8 mb-6 flex items-center justify-between">
            <p className="text-slate-600 font-medium">
              Menampilkan fasilitas dalam radius <strong className="text-[#0A1128]">1 km</strong> dari <strong className="text-[#0A1128]">Stadion Gelora Bung Tomo</strong>
            </p>
          </div>

          {/* Category Filters (Scrollable on Mobile) */}
          <div className="flex overflow-x-auto gap-3 pb-4 mb-8 scrollbar-hide">
            {[
              { icon: '🏨', name: 'Hotel & Penginapan', count: 18, active: true },
              { icon: '🏥', name: 'Kesehatan', count: 7 },
              { icon: '🍜', name: 'Kuliner', count: 42 },
              { icon: '🛒', name: 'Kebutuhan Harian', count: 25 },
              { icon: '🏋️', name: 'Fitness & Olahraga', count: 8 },
              { icon: '🚗', name: 'Transportasi', count: 12 },
              { icon: '🕌', name: 'Tempat Ibadah', count: 15 },
              { icon: '📍', name: 'Wisata', count: 9 },
            ].map((cat, i) => (
              <button key={i} className={`flex items-center gap-2 px-5 py-3 whitespace-nowrap border transition-colors ${cat.active ? 'bg-[#0A1128] border-[#0A1128] text-white' : 'bg-white border-slate-200 text-slate-600 hover:border-cyan-400'}`}>
                <span className="text-lg">{cat.icon}</span>
                <span className="font-bold text-sm tracking-wide">{cat.name}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full ${cat.active ? 'bg-cyan-500/20 text-cyan-300' : 'bg-slate-100 text-slate-500'}`}>{cat.count}</span>
              </button>
            ))}
          </div>

          {/* Map and Content Layout */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left: Map (Top on mobile) */}
            <div className="lg:w-7/12 order-1 lg:order-2 h-[400px] lg:h-[700px] bg-slate-200 relative overflow-hidden border border-slate-200 group">
              {/* Fake Map Image / UI */}
              <div className="absolute inset-0 bg-[#E8EAED]" style={{ backgroundImage: 'radial-gradient(#CBD5E1 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
              
              {/* Map UI Elements */}
              <div className="absolute top-4 right-4 flex flex-col gap-2">
                <button className="w-10 h-10 bg-white shadow-md flex items-center justify-center text-[#0A1128] hover:text-cyan-500"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg></button>
                <button className="w-10 h-10 bg-white shadow-md flex items-center justify-center text-[#0A1128] hover:text-cyan-500"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M20 12H4"></path></svg></button>
              </div>

              {/* PORPROV Venue Marker */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-20 cursor-pointer">
                <div className="bg-[#0A1128] text-white px-3 py-1 font-bold text-xs uppercase tracking-widest shadow-lg whitespace-nowrap border-b-2 border-red-sport mb-1">Stadion Gelora Bung Tomo</div>
                <div className="w-12 h-12 bg-red-sport rounded-full flex items-center justify-center shadow-[0_0_0_4px_rgba(255,255,255,1),0_10px_15px_-3px_rgba(0,0,0,0.3)] animate-bounce">
                  <span className="text-white text-xl">🏅</span>
                </div>
              </div>

              {/* Facility Markers */}
              <div className="absolute top-[30%] left-[60%] flex flex-col items-center cursor-pointer group/marker z-10">
                <div className="w-10 h-10 bg-cyan-600 rounded-full flex items-center justify-center shadow-[0_0_0_3px_rgba(255,255,255,1)] group-hover/marker:scale-110 group-hover/marker:bg-[#0A1128] transition-all">
                  <span className="text-white text-base">🏨</span>
                </div>
              </div>
              <div className="absolute top-[60%] left-[40%] flex flex-col items-center cursor-pointer group/marker z-10">
                <div className="w-10 h-10 bg-cyan-600 rounded-full flex items-center justify-center shadow-[0_0_0_3px_rgba(255,255,255,1)] group-hover/marker:scale-110 group-hover/marker:bg-[#0A1128] transition-all">
                  <span className="text-white text-base">🏨</span>
                </div>
              </div>
              
              {/* Active Marker Popup */}
              <div className="absolute top-[20%] left-[55%] z-30">
                <div className="bg-white p-4 shadow-2xl border-l-4 border-cyan-500 w-64 translate-x-4 -translate-y-4">
                  <div className="flex justify-between items-start mb-2">
                    <h5 className="font-bold text-[#0A1128] text-sm uppercase leading-tight">Hotel Atlet Internasional</h5>
                    <span className="text-xs bg-slate-100 px-1 font-bold">4.7 ★</span>
                  </div>
                  <p className="text-xs text-slate-500 font-medium mb-3">🏨 Hotel • 850 m dari venue</p>
                  <p className="text-xs text-slate-600 mb-4 line-clamp-2">Jl. Gelora Bung Tomo No. 1, Benowo, Surabaya</p>
                  <div className="flex gap-2">
                    <button className="flex-1 bg-slate-100 text-[#0A1128] text-xs font-bold py-2 hover:bg-slate-200">DETAIL</button>
                    <button className="flex-1 bg-cyan-500 text-white text-xs font-bold py-2 hover:bg-cyan-600">NAVIGASI</button>
                  </div>
                </div>
                {/* Pointer */}
                <div className="w-4 h-4 bg-white rotate-45 absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 shadow-xl border-b border-r border-slate-200"></div>
              </div>
            </div>

            {/* Right: List (Bottom on mobile) */}
            <div className="lg:w-5/12 order-2 lg:order-1 flex flex-col">
              
              {/* Athlete Essentials Quick Block */}
              <div className="bg-[#0A1128] p-6 mb-6">
                <h4 className="text-white font-display font-bold tracking-widest uppercase text-sm mb-4 border-b border-slate-800 pb-2">Athlete Essentials</h4>
                <div className="grid grid-cols-2 gap-y-3 gap-x-4">
                  <a href="#" className="text-cyan-400 hover:text-white text-sm font-semibold flex items-center gap-2 transition-colors"><span>🏥</span> RS & Klinik Terdekat</a>
                  <a href="#" className="text-cyan-400 hover:text-white text-sm font-semibold flex items-center gap-2 transition-colors"><span>💊</span> Apotek Darurat</a>
                  <a href="#" className="text-cyan-400 hover:text-white text-sm font-semibold flex items-center gap-2 transition-colors"><span>🏋️</span> Fitness Center</a>
                  <a href="#" className="text-cyan-400 hover:text-white text-sm font-semibold flex items-center gap-2 transition-colors"><span>🧺</span> Layanan Laundry</a>
                </div>
              </div>

              {/* Cards List */}
              <div className="flex flex-col gap-4 overflow-y-auto max-h-[500px] pr-2 custom-scrollbar">
                {[
                  { name: 'Hotel Atlet Internasional', category: 'Hotel', icon: '🏨', dist: '850 m', rating: '4.7', price: 'Rp500K - Rp900K', img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=600' },
                  { name: 'Guest House Benowo', category: 'Guest House', icon: '🏨', dist: '1.2 km', rating: '4.2', price: 'Rp200K - Rp400K', img: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&q=80&w=600' },
                  { name: 'Klinik Olahraga Prima', category: 'Klinik', icon: '🏥', dist: '1.5 km', rating: '4.9', emergency: true, img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600' },
                  { name: 'Rumah Makan Padang Saiyo', category: 'Restoran', icon: '🍜', dist: '900 m', rating: '4.5', price: 'Rp30K - Rp75K', img: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=600' }
                ].map((item, i) => (
                  <div key={i} className="flex bg-white border border-slate-200 hover:border-cyan-400 transition-colors group cursor-pointer h-36">
                    <div className="w-32 h-full relative shrink-0">
                      <Image src={item.img} alt={item.name} fill className="object-cover" />
                      {item.emergency && <div className="absolute top-0 left-0 bg-red-sport text-white text-[9px] font-bold px-2 py-1 uppercase tracking-widest">24 JAM</div>}
                    </div>
                    <div className="p-4 flex flex-col justify-between flex-1 min-w-0">
                      <div>
                        <div className="flex justify-between items-start mb-1">
                          <h4 className="font-bold text-[#0A1128] truncate text-base leading-tight uppercase mr-2 group-hover:text-cyan-600 transition-colors">{item.name}</h4>
                          <span className="text-xs font-bold bg-slate-100 px-1 shrink-0">★ {item.rating}</span>
                        </div>
                        <p className="text-xs text-slate-500 font-medium flex items-center gap-1">
                          <span>{item.icon}</span> {item.category} <span className="mx-1">•</span> <span className="text-red-sport">{item.dist} dari venue</span>
                        </p>
                      </div>
                      <div className="flex justify-between items-end mt-2">
                        {item.price ? (
                          <span className="text-xs font-bold text-slate-700">{item.price}</span>
                        ) : (
                          <span></span>
                        )}
                        <div className="flex gap-2">
                          <span className="text-xs font-bold text-[#0A1128] hover:text-cyan-500 uppercase tracking-wider">Detail</span>
                          <span className="text-cyan-300">|</span>
                          <span className="text-xs font-bold text-cyan-600 hover:text-[#0A1128] uppercase tracking-wider flex items-center gap-1">Rute <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg></span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Explore More CTA */}
          <div className="mt-16 bg-[#0A1128] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="absolute -right-20 -top-20 opacity-5 pointer-events-none">
              <svg width="300" height="300" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z"/></svg>
            </div>
            <div className="relative z-10 md:w-2/3 text-center md:text-left">
              <h3 className="font-display font-bold text-3xl md:text-4xl text-white uppercase tracking-tight mb-2">Butuh Fasilitas Lain?</h3>
              <p className="text-slate-400 font-medium">Temukan lebih banyak tempat yang dapat membantu kebutuhan atlet, kontingen, official, dan penonton selama PORPROV JATIM 2027.</p>
            </div>
            <div className="relative z-10">
              <Link href="#" className="bg-red-sport hover:bg-red-600 text-white font-bold py-4 px-8 uppercase tracking-wider transition-all inline-block skew-x-[-10deg]">
                <span className="inline-block skew-x-[10deg] flex items-center gap-2">JELAJAHI SEMUA FASILITAS <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg></span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHT SECTION */}
      <section className="bg-red-sport border-y-8 border-[#0A1128] relative overflow-hidden">
        {/* Diagonal stripes background */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #000 10px, #000 20px)' }}></div>
        
        <div className="container mx-auto px-4 lg:px-8 py-16 relative z-10">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white uppercase tracking-tight">Semangat Jawa Timur</h2>
            <p className="text-red-100 font-medium mt-2">Menuju perhelatan olahraga terbesar di Jawa Timur</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-red-800">
            {[
              { number: '46', label: 'CABOR' },
              { number: '68', label: 'VENUE' },
              { number: '890', label: 'PERTANDINGAN' },
              { number: '38', label: 'KONTINGEN' },
            ].map((stat, i) => (
              <div key={i} className="text-center px-4">
                <div className="font-display font-bold text-6xl md:text-8xl text-white leading-none tracking-tighter mb-2">{stat.number}</div>
                <div className="text-[#0A1128] font-bold text-sm md:text-base uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#050A18] text-white pt-24 pb-12 border-t-4 border-cyan-400">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-12 h-12 bg-red-sport flex items-center justify-center font-display font-bold text-white text-2xl uppercase tracking-tighter skew-x-[-10deg]">
                  <span className="skew-x-[10deg]">PJ</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-display font-bold text-white text-2xl leading-none tracking-wide">PORPROV JATIM IX</span>
                  <span className="text-cyan-400 text-xs tracking-widest uppercase font-bold">2027</span>
                </div>
              </div>
              <p className="font-display text-2xl text-slate-400 font-bold uppercase tracking-tight mb-6 max-w-sm">
                Sportivitas.<br/>Prestasi.<br/>Persatuan.
              </p>
              <p className="text-slate-500 font-medium max-w-md">
                Pekan Olahraga Provinsi Jawa Timur ke-IX Tahun 2027. Bersama memajukan olahraga Jawa Timur menuju prestasi nasional dan internasional.
              </p>
            </div>
            
            <div className="lg:col-span-2">
              <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm border-b-2 border-red-sport inline-block pb-1">Navigasi</h4>
              <ul className="flex flex-col gap-4 text-slate-400 font-medium text-sm">
                <li><Link href="#" className="hover:text-cyan-400 transition-colors">Beranda</Link></li>
                <li><Link href="#" className="hover:text-cyan-400 transition-colors">Jadwal Pertandingan</Link></li>
                <li><Link href="#" className="hover:text-cyan-400 transition-colors">Klasemen Medali</Link></li>
                <li><Link href="#" className="hover:text-cyan-400 transition-colors">Cabang Olahraga</Link></li>
                <li><Link href="#" className="hover:text-cyan-400 transition-colors">Berita Terkini</Link></li>
              </ul>
            </div>
            
            <div className="lg:col-span-2">
              <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm border-b-2 border-red-sport inline-block pb-1">Informasi</h4>
              <ul className="flex flex-col gap-4 text-slate-400 font-medium text-sm">
                <li><Link href="#" className="hover:text-cyan-400 transition-colors">Venue & Lokasi</Link></li>
                <li><Link href="#" className="hover:text-cyan-400 transition-colors">Tentang PORPROV</Link></li>
                <li><Link href="#" className="hover:text-cyan-400 transition-colors">Kontingen</Link></li>
                <li><Link href="#" className="hover:text-cyan-400 transition-colors">Panduan Penonton</Link></li>
                <li><Link href="#" className="hover:text-cyan-400 transition-colors">Kontak Kami</Link></li>
              </ul>
            </div>
            
            <div className="lg:col-span-3">
              <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm border-b-2 border-red-sport inline-block pb-1">Media Sosial</h4>
              <div className="flex gap-4 mb-8">
                <a href="#" className="w-10 h-10 bg-[#0A1128] flex items-center justify-center hover:bg-red-sport transition-colors rounded-sm">
                  <span className="sr-only">Instagram</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path></svg>
                </a>
                <a href="#" className="w-10 h-10 bg-[#0A1128] flex items-center justify-center hover:bg-red-sport transition-colors rounded-sm">
                  <span className="sr-only">Twitter/X</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.008 5.95H5.078z"></path></svg>
                </a>
                <a href="#" className="w-10 h-10 bg-[#0A1128] flex items-center justify-center hover:bg-red-sport transition-colors rounded-sm">
                  <span className="sr-only">YouTube</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg>
                </a>
              </div>
              <p className="text-slate-500 font-medium text-xs">
                &copy; 2027 Panitia Besar PORPROV JATIM IX.<br/>Seluruh hak cipta dilindungi undang-undang.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}