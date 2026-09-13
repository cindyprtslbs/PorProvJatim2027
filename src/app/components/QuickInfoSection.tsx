import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const quickLinks = [
  { icon: 'CalendarDaysIcon', title: 'Jadwal', desc: 'Temukan jadwal pertandingan', href: '/jadwal-pertandingan', color: 'text-blue-400', bg: 'bg-blue-500/10 border-blue-500/20' },
  { icon: 'MapPinIcon', title: 'Venue', desc: 'Temukan lokasi pertandingan', href: '#venue', color: 'text-green-400', bg: 'bg-green-500/10 border-green-500/20' },
  { icon: 'TrophyIcon', title: 'Medali', desc: 'Lihat klasemen medali', href: '/klasemen-medali', color: 'text-accent', bg: 'bg-accent/10 border-accent/20' },
  { icon: 'ChartBarIcon', title: 'Hasil', desc: 'Lihat hasil terbaru', href: '/jadwal-pertandingan', color: 'text-primary', bg: 'bg-primary/10 border-primary/20' },
  { icon: 'NewspaperIcon', title: 'Berita', desc: 'Ikuti perkembangan PORPROV', href: '#berita', color: 'text-purple-400', bg: 'bg-purple-500/10 border-purple-500/20' },
  { icon: 'PhotoIcon', title: 'Galeri', desc: 'Lihat dokumentasi', href: '#galeri', color: 'text-pink-400', bg: 'bg-pink-500/10 border-pink-500/20' },
];

export default function QuickInfoSection() {
  return (
    <section className="relative py-16 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-foreground font-bold text-lg uppercase tracking-widest mb-8">
          Informasi Cepat
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {quickLinks.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className={`group p-5 rounded-2xl border ${item.bg} hover:scale-105 transition-all duration-300 text-center`}
            >
              <div className={`w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center ${item.bg} border ${item.bg.split(' ')[1]}`}>
                <Icon name={item.icon as 'CalendarDaysIcon'} size={24} className={item.color} />
              </div>
              <div className={`font-bold text-sm mb-1 ${item.color}`}>{item.title}</div>
              <div className="text-muted-foreground text-xs">{item.desc}</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}