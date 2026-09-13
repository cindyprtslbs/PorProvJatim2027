'use client';

import React, { useEffect, useRef, useState } from 'react';

const stats = [
  { number: 38, suffix: '', label: 'Kabupaten/Kota', description: 'Kontingen peserta' },
  { number: 80, suffix: '+', label: 'Cabang Olahraga', description: 'Dipertandingkan' },
  { number: 5000, suffix: '+', label: 'Atlet', description: 'Bersaing meraih prestasi' },
  { number: 500, suffix: '+', label: 'Nomor Pertandingan', description: 'Ratusan nomor' },
  { number: 45, suffix: '+', label: 'Venue', description: 'Arena pertandingan' },
];

function useCountUp(target: number, duration = 2000, start = false) {
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

function StatItem({ number, suffix, label, description, started }: (typeof stats)[0] & { started: boolean }) {
  const count = useCountUp(number, 2000, started);
  return (
    <div className="text-center group px-1 py-4 sm:px-4 sm:py-6 relative">
      <div className="absolute inset-0 bg-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative">
        <div className="text-2xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-none mb-1 tabular-nums">
          <span className="text-gold-gradient">{count.toLocaleString('id-ID')}</span>
          <span className="text-accent">{suffix}</span>
        </div>
        <div className="text-foreground font-bold text-[9px] leading-tight sm:text-base mt-2 mb-1">{label}</div>
        <div className="text-muted-foreground text-[8px] leading-tight sm:text-sm">{description}</div>
      </div>
    </div>
  );
}

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative py-12 bg-background overflow-hidden">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] blob-gold opacity-50" />
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-5 divide-x divide-border/30">
          {stats.map((stat) => (
            <div key={stat.label}>
              <StatItem {...stat} started={started} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}