'use client';

import React, { useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const categories = ['Semua', 'Permainan', 'Bela Diri', 'Atletik', 'Akuatik', 'Individu', 'Tim'];

const sports = [
  { name: 'Atletik', category: 'Atletik', events: 48, athletes: 320, image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=400&q=80&fit=crop', icon: 'BoltIcon' },
  { name: 'Renang', category: 'Akuatik', events: 36, athletes: 180, image: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?w=400&q=80&fit=crop', icon: 'GlobeAltIcon' },
  { name: 'Bulutangkis', category: 'Permainan', events: 8, athletes: 120, image: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=400&q=80&fit=crop', icon: 'SparklesIcon' },
  { name: 'Bola Basket', category: 'Tim', events: 4, athletes: 200, image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFza2V0fGVufDB8fDB8fHww', icon: 'TrophyIcon' },
  { name: 'Pencak Silat', category: 'Bela Diri', events: 16, athletes: 256, image: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?w=400&q=80&fit=crop', icon: 'ShieldCheckIcon' },
  { name: 'Sepak Bola', category: 'Tim', events: 2, athletes: 440, image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&q=80&fit=crop', icon: 'StarIcon' },
  { name: 'Karate', category: 'Bela Diri', events: 12, athletes: 192, image: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?w=400&q=80&fit=crop', icon: 'ShieldCheckIcon' },
  { name: 'Taekwondo', category: 'Bela Diri', events: 10, athletes: 160, image: 'https://images.unsplash.com/photo-1509600110300-21b9d5fedeb7?w=400&q=80&fit=crop', icon: 'StarIcon' },
  { name: 'Panahan', category: 'Individu', events: 6, athletes: 80, image: 'https://images.unsplash.com/photo-1519311965067-36d3e5f33d39?w=400&q=80&fit=crop', icon: 'BoltIcon' },
  { name: 'Tenis', category: 'Permainan', events: 6, athletes: 64, image: 'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?w=400&q=80&fit=crop', icon: 'SparklesIcon' },
  { name: 'Futsal', category: 'Tim', events: 2, athletes: 280, image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&q=80&fit=crop', icon: 'TrophyIcon' },
  { name: 'Wushu', category: 'Bela Diri', events: 8, athletes: 128, image: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?w=400&q=80&fit=crop', icon: 'ShieldCheckIcon' },
];

export default function SportsSection() {
  const [activeCategory, setActiveCategory] = useState('Semua');
  const [search, setSearch] = useState('');

  const filtered = sports.filter((s) => {
    const matchCat = activeCategory === 'Semua' || s.category === activeCategory;
    const matchSearch = s.name.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <section id="cabang-olahraga" className="relative py-24 bg-background overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 blob-gold opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-section-title font-extrabold text-foreground mb-3">
            Cabang <span className="text-gold-gradient">Olahraga</span>
          </h2>
          <p className="text-muted-foreground text-base max-w-xl mx-auto">
            Ragam kompetisi, satu semangat prestasi.
          </p>
        </div>

        {/* Search & Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1 max-w-sm">
            <Icon name="MagnifyingGlassIcon" size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Cari cabang olahraga..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-secondary/20 border border-border/40 rounded-full pl-11 pr-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent/50 focus:bg-secondary/30 transition-all"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-accent text-accent-foreground'
                    : 'bg-secondary/20 text-muted-foreground hover:text-foreground border border-border/30 hover:border-accent/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Sports Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {filtered.map((sport, i) => (
            <div
              key={sport.name}
              className="group relative rounded-2xl overflow-hidden border border-border/30 hover:border-accent/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
              style={{ animationDelay: `${i * 0.04}s` }}
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden">
                <AppImage
                  src={sport.image}
                  alt={`${sport.name} sport competition at PORPROV JATIM 2027`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/45 to-transparent" />
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-accent/20 backdrop-blur-sm border border-accent/40 flex items-center justify-center">
                  <Icon name={sport.icon as 'BoltIcon'} size={14} className="text-accent" />
                </div>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <div className="mb-1 text-sm font-bold text-white">{sport.name}</div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-slate-200">{sport.events} nomor</span>
                  <span className="text-[10px] font-bold text-amber-300">{sport.athletes} atlet</span>
                </div>
                <button className="mt-2 w-full rounded-lg border border-white/60 py-1 text-center text-[10px] font-bold text-white transition-colors hover:border-white hover:bg-white/15">
                  Lihat Detail
                </button>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-muted-foreground">
            <Icon name="MagnifyingGlassIcon" size={40} className="mx-auto mb-4 opacity-40" />
            <p className="font-semibold">Cabang olahraga tidak ditemukan</p>
          </div>
        )}
      </div>
    </section>
  );
}