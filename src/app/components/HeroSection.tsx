'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const heroImages = [
  '/assets/images/hero-1.jpg',
  '/assets/images/hero-2.jpg',
  '/assets/images/hero-3.jpg',
];

export default function HeroSection() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [activeImage, setActiveImage] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const targetDate = new Date('2027-07-05T08:00:00+07:00').getTime();

    const tick = () => {
      const now = Date.now();
      const diff = targetDate - now;
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor(diff / (1000 * 60 * 60) % 24),
        minutes: Math.floor(diff / (1000 * 60) % 60),
        seconds: Math.floor(diff / 1000 % 60)
      });
    };

    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const rotateId = setInterval(() => {
      setActiveImage((current) => (current + 1) % heroImages.length);
    }, 3000);

    return () => clearInterval(rotateId);
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === activeImage ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <AppImage
              src={image}
              alt={index === 0 ? 'Athletes competing in a dramatic stadium...' : 'Sport event background'}
              fill
              priority={index === 0}
              className="object-cover animate-ken-burns"
              sizes="100vw"
            />
          </div>
        ))}

        {/* Dark scrim - from bottom and center */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1426]/80 via-[#0B1426]/35 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1426]/75 via-[#0B1426]/25 to-transparent" />
        {/* Atmospheric color tinting */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/10" />
      </div>

      {/* Noise Texture */}
      <div className="absolute inset-0 z-[1] noise-overlay pointer-events-none" />

      {/* Atmospheric Blobs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 blob-gold animate-blob pointer-events-none z-[1]" />
      <div className="absolute bottom-1/3 left-1/4 w-80 h-80 blob-red animate-blob-delayed pointer-events-none z-[1]" />

      {/* Grid Background */}
      <div className="absolute inset-0 grid-bg opacity-30 z-[1] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl ml-0 mr-auto px-4 sm:px-6 lg:px-8 pt-96 pb-24 text-left">
        <div className="max-w-4xl mr-auto ml-0 text-left mt-32">
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10 animate-fade-up stagger-4">
            <Link
              href="/jadwal-pertandingan"
              className="inline-flex items-center justify-center gap-3 bg-primary hover:bg-red-light text-primary-foreground font-bold text-base px-8 py-4 rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl group"
              style={{ boxShadow: '0 8px 30px rgba(220, 38, 38, 0.4)' }}>
              
              <Icon name="CalendarDaysIcon" size={20} />
              Lihat Jadwal
              <Icon name="ArrowRightIcon" size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#cabang-olahraga"
              className="inline-flex items-center justify-center gap-3 bg-white/18 hover:bg-white/26 text-white font-bold text-base px-8 py-4 rounded-full transition-all duration-300 hover:-translate-y-1 border border-white/35 hover:border-white/50 shadow-lg shadow-slate-900/10 backdrop-blur-sm">
              
              <Icon name="TrophyIcon" size={20} />
              Jelajahi Cabang Olahraga
            </Link>
          </div>

          {/* Countdown */}
          <div className="animate-fade-up stagger-5">
            <p className="text-white/80 text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] mb-4">
              Menuju PORPROV JATIM 2027
            </p>
            <div className="flex gap-3 sm:gap-5">
              {[
                { value: timeLeft.days, label: 'Hari' },
                { value: timeLeft.hours, label: 'Jam' },
                { value: timeLeft.minutes, label: 'Menit' },
                { value: timeLeft.seconds, label: 'Detik' },
              ].map((item, i) => (
                <div key={i} className="relative">
                  <div className="rounded-2xl border border-[#f8d166]/40 bg-white/12 backdrop-blur-sm px-3 py-3 sm:px-5 sm:py-4 text-center min-w-[64px] sm:min-w-[78px] shadow-lg shadow-[#0b1120]/15 ring-1 ring-white/10">
                    <div className="text-xl sm:text-3xl font-extrabold text-white tabular-nums leading-none drop-shadow-[0_2px_6px_rgba(14,116,144,0.5)]">
                      {String(item.value).padStart(2, '0')}
                    </div>
                    <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-[#f8d166] mt-2">
                      {item.label}
                    </div>
                  </div>
                  {i < 3 && (
                    <span className="absolute -right-2 top-1/2 -translate-y-1/2 text-base sm:text-xl font-bold text-white/75">
                      :
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Dots indicator */}
      <div className="absolute bottom-12 right-6 z-10 flex items-center gap-2">
        {heroImages.map((_, index) => (
          <span
            key={index}
            className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
              index === activeImage ? 'bg-accent shadow-[0_0_12px_rgba(245,158,11,0.8)]' : 'bg-white/40'
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <div className="w-px h-12 bg-gradient-to-b from-accent/60 to-transparent scroll-indicator" />
      </div>

    </section>);

}