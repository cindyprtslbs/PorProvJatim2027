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

      {/* JADWAL PERTANDINGAN */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-1 bg-red-sport"></div>
                <span className="text-red-sport font-bold tracking-widest uppercase text-sm">Kompetisi</span>
              </div>
              <h2 className="font-display font-bold text-5xl text-[#0A1128] uppercase tracking-tight mb-4">Jadwal Pertandingan</h2>
              <p className="text-slate-600 max-w-2xl text-lg">Ikuti jadwal pertandingan dan dukung atlet kontingen daerah kebanggaan Anda.</p>
            </div>
            <Link href="#" className="font-bold text-[#0A1128] border-b-2 border-red-sport pb-1 hover:text-red-sport transition-colors uppercase tracking-wider text-sm">LIHAT SEMUA JADWAL</Link>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 mb-8">
            <button className="bg-[#0A1128] text-white px-6 py-2 font-bold text-sm uppercase tracking-wider skew-x-[-10deg]"><span className="inline-block skew-x-[10deg]">HARI INI</span></button>
            <button className="bg-white border border-slate-300 text-slate-600 hover:border-[#0A1128] hover:text-[#0A1128] px-6 py-2 font-bold text-sm uppercase tracking-wider skew-x-[-10deg] transition-colors"><span className="inline-block skew-x-[10deg]">BESOK</span></button>
            <button className="bg-white border border-slate-300 text-slate-600 hover:border-[#0A1128] hover:text-[#0A1128] px-6 py-2 font-bold text-sm uppercase tracking-wider skew-x-[-10deg] transition-colors"><span className="inline-block skew-x-[10deg]">SEMUA CABOR</span></button>
          </div>

          {/* Schedule List */}
          <div className="flex flex-col gap-4">
            {[
              { date: '08 OKT', time: '15:00', sport: 'SEPAK BOLA', match: 'KOTA SURABAYA vs KAB. MALANG', venue: 'Stadion Gelora Bung Tomo', status: 'Segera Dimulai' },
              { date: '08 OKT', time: '16:30', sport: 'BOLA BASKET', match: 'KOTA KEDIRI vs KOTA MADIUN', venue: 'DBL Arena Surabaya', status: 'Persiapan' },
              { date: '08 OKT', time: '19:00', sport: 'BOLA VOLI', match: 'KAB. SIDOARJO vs KAB. GRESIK', venue: 'GOR Sidoarjo', status: 'Menunggu' },
            ].map((schedule, i) => (
              <div key={i} className="bg-white border border-slate-200 hover:border-red-sport hover:shadow-xl transition-all p-0 flex flex-col md:flex-row items-stretch group cursor-pointer relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-sport scale-y-0 group-hover:scale-y-100 transition-transform origin-top"></div>
                
                {/* Date Block */}
                <div className="bg-slate-100 p-6 flex flex-col justify-center items-center min-w-[120px] border-r border-slate-200">
                  <span className="font-display font-bold text-3xl text-[#0A1128] leading-none">{schedule.date.split(' ')[0]}</span>
                  <span className="font-bold text-red-sport tracking-wider">{schedule.date.split(' ')[1]}</span>
                </div>
                
                {/* Content Block */}
                <div className="p-6 flex-1 flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="bg-[#0A1128] text-white text-[10px] font-bold px-2 py-1 uppercase tracking-widest">{schedule.sport}</span>
                      <span className="text-slate-500 font-bold text-sm flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        {schedule.time} WIB
                      </span>
                    </div>
                    <h4 className="font-display font-bold text-2xl text-[#0A1128] uppercase tracking-tight mb-1">{schedule.match}</h4>
                    <p className="text-slate-500 flex items-center gap-1 text-sm font-medium">
                      <svg className="w-4 h-4 text-red-sport" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                      {schedule.venue}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <span className="text-cyan-600 font-bold text-sm uppercase tracking-wider bg-cyan-50 px-3 py-1 border border-cyan-100">{schedule.status}</span>
                    <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-red-sport group-hover:border-red-sport group-hover:text-white transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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