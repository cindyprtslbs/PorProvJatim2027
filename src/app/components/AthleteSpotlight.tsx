import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const athletes = [
  { name: 'Rizky Pratama', sport: 'Atletik', city: 'Surabaya', achievement: '3x Medali Emas PON', image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=400&q=80&fit=crop&crop=top' },
  { name: 'Siti Rahayu', sport: 'Renang', city: 'Malang', achievement: 'Rekor Nasional 100m', image: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?w=400&q=80&fit=crop' },
  { name: 'Bagas Santoso', sport: 'Bulutangkis', city: 'Sidoarjo', achievement: 'Juara Nasional 2025', image: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=400&q=80&fit=crop' },
  { name: 'Dewi Kusuma', sport: 'Pencak Silat', city: 'Gresik', achievement: 'Medali Emas SEA Games', image: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?w=400&q=80&fit=crop' },
  { name: 'Ahmad Fauzi', sport: 'Taekwondo', city: 'Kediri', achievement: '2x Medali PON 2024', image: 'https://images.unsplash.com/photo-1509600110300-21b9d5fedeb7?w=400&q=80&fit=crop' },
  { name: 'Nurul Hidayah', sport: 'Panahan', city: 'Blitar', achievement: 'Peringkat 1 Nasional', image: 'https://images.unsplash.com/photo-1519311965067-36d3e5f33d39?w=400&q=80&fit=crop' },
];

export default function AthleteSpotlight() {
  return (
    <section id="atlet" className="relative py-24 bg-background overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 blob-red opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/10 mb-4">
              <Icon name="UserIcon" size={14} className="text-accent" />
              <span className="text-accent text-xs font-bold uppercase tracking-widest">Atlet Pilihan</span>
            </div>
            <h2 className="text-section-title font-extrabold text-foreground">
              Atlet <span className="text-gold-gradient">Pilihan</span>
            </h2>
          </div>
          <button className="inline-flex items-center gap-2 text-accent font-bold text-sm border border-accent/40 px-6 py-3 rounded-full hover:bg-accent/10 transition-all hover:-translate-y-0.5 whitespace-nowrap">
            Lihat Semua Atlet
            <Icon name="ArrowRightIcon" size={16} />
          </button>
        </div>

        {/* Horizontal Scroll */}
        <div className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory">
          {athletes?.map((athlete, i) => (
            <div
              key={i}
              className="group flex-shrink-0 w-64 snap-start rounded-2xl overflow-hidden border border-border/30 hover:border-accent/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
            >
              <div className="relative h-72 overflow-hidden">
                <AppImage
                  src={athlete?.image}
                  alt={`${athlete?.name}, ${athlete?.sport} athlete representing ${athlete?.city} at PORPROV JATIM 2027`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="256px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/45 via-background/10 to-transparent" />
                <div className="absolute top-3 right-3 px-2 py-1 rounded-full bg-accent/20 backdrop-blur-sm border border-accent/30">
                  <span className="text-accent text-[10px] font-bold">{athlete?.sport}</span>
                </div>
              </div>
              <div className="p-4 bg-card">
                <div className="text-foreground font-extrabold text-base mb-0.5">{athlete?.name}</div>
                <div className="flex items-center gap-1.5 text-muted-foreground text-xs mb-2">
                  <Icon name="MapPinIcon" size={12} />
                  {athlete?.city}
                </div>
                <div className="flex items-center gap-1.5 text-accent text-xs font-semibold">
                  <Icon name="TrophyIcon" size={12} />
                  {athlete?.achievement}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}