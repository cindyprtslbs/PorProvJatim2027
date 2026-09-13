'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const medalData = [
  { rank: 1, name: 'Surabaya', gold: 42, silver: 38, bronze: 31, total: 111 },
  { rank: 2, name: 'Malang Kota', gold: 28, silver: 25, bronze: 22, total: 75 },
  { rank: 3, name: 'Sidoarjo', gold: 19, silver: 21, bronze: 18, total: 58 },
  { rank: 4, name: 'Gresik', gold: 15, silver: 12, bronze: 17, total: 44 },
  { rank: 5, name: 'Kediri Kota', gold: 11, silver: 14, bronze: 13, total: 38 },
  { rank: 6, name: 'Blitar Kota', gold: 9, silver: 10, bronze: 11, total: 30 },
  { rank: 7, name: 'Mojokerto Kota', gold: 8, silver: 9, bronze: 12, total: 29 },
  { rank: 8, name: 'Pasuruan Kota', gold: 7, silver: 8, bronze: 10, total: 25 },
];

const podiumConfig = [
  { rank: 1, style: 'medal-gold', height: 'h-24', label: '🥇 Peringkat 1' },
  { rank: 2, style: 'medal-silver', height: 'h-16', label: '🥈 Peringkat 2' },
  { rank: 3, style: 'medal-bronze', height: 'h-12', label: '🥉 Peringkat 3' },
];

export default function MedalPreview() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} id="medali" className="relative py-24 overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(30,58,95,0.08),_transparent_18%),linear-gradient(135deg,#f8fbff_0%,#edf5ff_100%)]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] blob-gold opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-section-title font-extrabold text-foreground">
              Klasemen <span className="text-gold-gradient">Medali</span>
            </h2>
            <p className="text-muted-foreground text-sm mt-2">Update terakhir: 09 Sep 2026, 16:15 WIB</p>
          </div>
          <Link
            href="/klasemen-medali"
            className="inline-flex items-center gap-2 text-accent font-bold text-sm border border-accent/40 px-6 py-3 rounded-full hover:bg-accent/10 transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap"
          >
            Lihat Klasemen Lengkap
            <Icon name="ArrowRightIcon" size={16} />
          </Link>
        </div>

        {/* Top 3 Podium */}
        <div className="flex items-end justify-center gap-4 mb-12">
          {[medalData[1], medalData[0], medalData[2]].map((team, i) => {
            const podium = podiumConfig.find((p) => p.rank === team.rank)!;
            return (
              <div
                key={team.rank}
                className={`flex-1 max-w-[200px] text-center transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${i * 0.15}s` }}
              >
                <div className="mb-4">
                  <div className="text-2xl mb-1">{team.rank === 1 ? '🥇' : team.rank === 2 ? '🥈' : '🥉'}</div>
                  <div className="text-foreground font-extrabold text-base">{team.name}</div>
                  <div className="flex justify-center gap-3 mt-2 text-sm font-bold">
                    <span className="text-amber-400">{team.gold}</span>
                    <span className="text-slate-300">{team.silver}</span>
                    <span className="text-amber-600">{team.bronze}</span>
                  </div>
                </div>
                <div className={`${podium.height} ${podium.style} rounded-t-2xl flex items-start justify-center pt-3`}>
                  <span className="text-white font-extrabold text-xl">{team.rank}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Table */}
        <div className={`rounded-2xl border border-[#cbd5e1] bg-[#e8f0fa] overflow-hidden shadow-[0_18px_35px_rgba(11,20,38,0.08)] transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#cbd5e1] bg-[#e8f0fa]">
                  <th className="px-4 py-3 text-left text-xs font-bold text-muted-foreground uppercase tracking-wider w-12">No</th>
                  <th className="px-4 py-3 text-left text-xs font-bold text-muted-foreground uppercase tracking-wider">Kabupaten/Kota</th>
                  <th className="px-4 py-3 text-center text-xs font-bold text-amber-400 uppercase tracking-wider">🥇</th>
                  <th className="px-4 py-3 text-center text-xs font-bold text-slate-300 uppercase tracking-wider">🥈</th>
                  <th className="px-4 py-3 text-center text-xs font-bold text-amber-600 uppercase tracking-wider">🥉</th>
                  <th className="px-4 py-3 text-center text-xs font-bold text-muted-foreground uppercase tracking-wider">Total</th>
                </tr>
              </thead>
              <tbody>
                {medalData.map((row, i) => (
                  <tr
                    key={row.rank}
                    className="border-b border-[#cbd5e1] bg-[#e8f0fa] transition-all duration-200 hover:bg-[#dbe7f3]"
                  >
                    <td className="px-4 py-3">
                      <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-extrabold ${
                        row.rank === 1 ? 'medal-gold text-white' :
                        row.rank === 2 ? 'medal-silver text-white' :
                        row.rank === 3 ? 'medal-bronze text-white': 'bg-secondary/30 text-muted-foreground'
                      }`}>
                        {row.rank}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-slate-800 font-semibold text-sm">{row.name}</td>
                    <td className="px-4 py-3 text-center text-amber-400 font-extrabold text-sm">{row.gold}</td>
                    <td className="px-4 py-3 text-center text-slate-300 font-extrabold text-sm">{row.silver}</td>
                    <td className="px-4 py-3 text-center text-amber-600 font-extrabold text-sm">{row.bronze}</td>
                    <td className="px-4 py-3 text-center text-slate-800 font-bold text-sm">{row.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}