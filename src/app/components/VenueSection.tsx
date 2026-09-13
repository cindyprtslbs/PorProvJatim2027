'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import { venues } from '@/app/data/venues';

export default function VenueSection() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [activeSport, setActiveSport] = useState('Semua Cabor');
  const sportCarouselRef = useRef<HTMLDivElement>(null);
  const sports = ['Semua Cabor', ...Array.from(new Set(venues.flatMap((venue) => venue.sports)))];
  const filteredVenues = activeSport === 'Semua Cabor'
    ? venues
    : venues.filter((venue) => venue.sports.includes(activeSport));

  const moveSportCarousel = (direction: number) => {
    sportCarouselRef.current?.scrollBy({ left: direction * 240, behavior: 'smooth' });
  };

  return (
    <section id="venue" className="relative py-24 bg-background overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 blob-navy pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-section-title font-extrabold text-foreground mb-3">
            Arena <span className="text-gold-gradient">Pertandingan</span>
          </h2>
          <p className="text-muted-foreground text-base max-w-xl mx-auto">
            Kenali arena tempat para atlet Jawa Timur berjuang meraih prestasi.
          </p>
        </div>

        {/* Sport Filter */}
        <div className="mb-8 flex items-center gap-2">
          <button
            type="button"
            onClick={() => moveSportCarousel(-1)}
            aria-label="Cabor sebelumnya"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            <Icon name="ChevronLeftIcon" size={17} />
          </button>
          <div ref={sportCarouselRef} className="flex min-w-0 flex-1 snap-x snap-mandatory gap-2 overflow-x-auto px-1 py-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {sports.map((sport) => (
              <button
                key={sport}
                type="button"
                onClick={() => setActiveSport(sport)}
                className={`shrink-0 snap-start whitespace-nowrap rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                  activeSport === sport
                    ? 'border-accent bg-accent text-accent-foreground shadow-md'
                    : 'border-border/30 bg-secondary/20 text-muted-foreground hover:border-accent/40 hover:text-foreground'
                }`}
              >
                {sport}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={() => moveSportCarousel(1)}
            aria-label="Cabor berikutnya"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            <Icon name="ChevronRightIcon" size={17} />
          </button>
        </div>

        {/* Venue Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVenues.map((venue, i) =>
          <div
            key={i}
            className="group rounded-2xl overflow-hidden border border-border/30 hover:border-accent/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}>
            
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <AppImage
                src={venue?.image}
                alt={`${venue?.name} sports venue in ${venue?.city}, East Java`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
              
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute top-3 right-3 flex items-center gap-1 px-3 py-1 rounded-full bg-background/60 backdrop-blur-sm border border-white/10">
                  <Icon name="UserGroupIcon" size={12} className="text-accent" />
                  <span className="text-foreground text-xs font-bold">{venue?.capacity}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 bg-card">
                <h3 className="text-foreground font-extrabold text-base mb-1">{venue?.name}</h3>
                <div className="flex items-center gap-2 text-muted-foreground text-xs mb-3">
                  <Icon name="MapPinIcon" size={12} />
                  <span>{venue?.city}</span>
                  <span>·</span>
                  <span>{venue?.address}</span>
                </div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {venue?.sports?.map((s) =>
                <span key={s} className="px-2 py-0.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-bold">
                      {s}
                    </span>
                )}
                </div>
                <div className="flex gap-2">
                  <Link
                    href={`/venue/${venue.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`}
                    className="inline-flex flex-1 items-center justify-center rounded-xl border border-accent/30 py-2 text-xs font-bold text-accent transition-all hover:bg-accent/10"
                  >
                    Lihat Detail
                  </Link>
                  <button className="flex-1 py-2 rounded-xl text-xs font-bold text-foreground bg-secondary/30 hover:bg-secondary/50 transition-all flex items-center justify-center gap-1">
                    <Icon name="MapPinIcon" size={12} />
                    Buka Peta
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>);

}