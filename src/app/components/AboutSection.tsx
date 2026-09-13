'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const values = [
{ icon: 'StarIcon', title: 'Sportivitas', desc: 'Menjunjung tinggi nilai fair play dan kejujuran dalam setiap pertandingan.' },
{ icon: 'UserGroupIcon', title: 'Solidaritas', desc: 'Mempererat persatuan antar daerah se-Jawa Timur.' },
{ icon: 'TrophyIcon', title: 'Prestasi', desc: 'Mendorong atlet mencapai potensi terbaik mereka.' },
{ icon: 'HeartIcon', title: 'Pembinaan', desc: 'Wadah pengembangan atlet muda berbakat Jawa Timur.' }];


export default function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {if (entry.isIntersecting) {setVisible(true);observer.disconnect();}},
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} id="tentang" className="relative py-24 bg-background overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-96 h-96 blob-navy pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 blob-gold opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <div id="maskot" className={`relative scroll-mt-24 transition-all duration-1000 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="relative aspect-square overflow-visible lg:scale-[1.18]">
              <AppImage
                src="/assets/images/maskot-porprov.jpg"
                alt="Maskot PORPROV Jawa Timur memegang bola dan piala"
                fill
                objectFit="contain"
                className="object-contain object-center"
                sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
          </div>

          {/* Right: Content */}
          <div className={`transition-all duration-1000 delay-200 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/10 mb-6">
              <Icon name="StarIcon" size={14} className="text-accent" />
              <span className="text-accent text-xs font-bold uppercase tracking-widest">Tentang PORPROV</span>
            </div>

            <h2 className="text-section-title font-extrabold text-foreground mb-6">
              Ajang Prestasi Terbesar
              <br />
              <span className="text-gold-gradient">Jawa Timur</span>
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-4">
              PORPROV Jawa Timur adalah kompetisi olahraga multi-cabang tingkat provinsi yang mempertemukan atlet-atlet terbaik dari 38 kabupaten dan kota se-Jawa Timur.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Diselenggarakan setiap dua tahun, PORPROV menjadi ajang pembinaan dan seleksi atlet untuk menghadapi kompetisi nasional seperti PON, sekaligus mempererat persatuan dan kebanggaan daerah.
            </p>

            {/* Values Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {values.map((v) =>
              <div key={v.title} className="p-4 rounded-2xl bg-secondary/20 border border-border/30 hover:border-accent/30 transition-all duration-200 group">
                  <Icon name={v.icon as 'StarIcon'} size={20} className="text-accent mb-2" />
                  <div className="text-foreground font-bold text-sm mb-1">{v.title}</div>
                  <div className="text-muted-foreground text-xs leading-relaxed">{v.desc}</div>
                </div>
              )}
            </div>

            <Link
              href="/maskot"
              className="inline-flex items-center gap-2 text-accent font-bold text-sm border border-accent/40 px-6 py-3 rounded-full hover:bg-accent/10 transition-all duration-200 hover:-translate-y-0.5">
              
              Selengkapnya
              <Icon name="ArrowRightIcon" size={16} />
            </Link>
          </div>
        </div>

      </div>
    </section>);

}