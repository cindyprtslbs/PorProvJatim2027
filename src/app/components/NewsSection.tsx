'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const categories = ['Semua', 'Berita', 'Atlet', 'Pertandingan', 'Venue', 'Prestasi'];

const news = [
{
  id: 1,
  category: 'Berita',
  date: '03 Sep 2026',
  title: 'KONI Jatim Mulai Tinjau Venue PORPROV X 2027 di Surabaya',
  excerpt: 'KONI Jawa Timur bersama KONI Surabaya dan Disporapar Surabaya mulai meninjau venue yang akan digunakan untuk Pekan Olahraga Provinsi X 2027 di Surabaya.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_44c2ae7ff-1788452590233.png",
  featured: true
},
{
  id: 2,
  category: 'Atlet',
  date: '01 Sep 2026',
  title: 'Persiapan Atlet Jawa Timur Menuju PORPROV 2027 Semakin Intensif',
  excerpt: 'Para atlet dari berbagai kabupaten/kota mulai mempersiapkan diri secara intensif untuk menghadapi PORPROV X 2027.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_48e30ea85-1788452591112.png",
  featured: false
},
{
  id: 3,
  category: 'Venue',
  date: '28 Agu 2026',
  title: 'Venue Pertandingan PORPROV 2027 Mulai Direnovasi',
  excerpt: 'Sejumlah venue pertandingan di Surabaya mulai direnovasi untuk memastikan kesiapan fasilitas.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_4b97e63bb-1788452590423.png",
  featured: false
},
{
  id: 4,
  category: 'Pertandingan',
  date: '25 Agu 2026',
  title: 'Persaingan Antar Kontingen Jatim Diprediksi Semakin Sengit',
  excerpt: 'Para pengamat olahraga memprediksi persaingan antar kontingen dalam PORPROV X 2027 akan semakin ketat.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1bfb053db-1784478633236.png",
  featured: false
}];


const categoryColors: Record<string, string> = {
  'Berita': 'bg-primary/20 text-primary',
  'Atlet': 'bg-accent/20 text-accent',
  'Pertandingan': 'bg-blue-500/20 text-blue-400',
  'Venue': 'bg-green-500/20 text-green-400',
  'Prestasi': 'bg-purple-500/20 text-purple-400'
};

type NewsSectionProps = {
  variant?: 'preview' | 'full';
};

export default function NewsSection({ variant = 'preview' }: NewsSectionProps) {
  const [activeCategory, setActiveCategory] = useState('Semua');
  const newsCarouselRef = useRef<HTMLDivElement>(null);
  const filteredNews = activeCategory === 'Semua' ? news : news.filter((article) => article.category === activeCategory);

  const moveNewsCarousel = (direction: number) => {
    newsCarouselRef.current?.scrollBy({
      left: direction * newsCarouselRef.current.clientWidth,
      behavior: 'smooth',
    });
  };

  const renderNewsCard = (article: typeof news[number], compact = false) => (
    <article className={`group h-full overflow-hidden rounded-[24px] border border-border/30 bg-card transition-all duration-300 hover:border-accent/40 hover:shadow-2xl ${compact ? 'bg-card/90' : ''}`}>
      <div className={`relative overflow-hidden ${compact ? 'h-28' : 'h-72'}`}>
        <AppImage
          src={article.image}
          alt={`${article.category} news article for PORPROV JATIM 2027`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 640px) 90vw, 620px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent" />
        <div className="absolute top-4 left-4">
          <span className={`rounded-full px-3 py-1 text-xs font-bold ${categoryColors[article.category]}`}>{article.category}</span>
        </div>
      </div>
      <div className={`p-${compact ? '3' : '5'}`}>
        <div className="mb-2 text-xs text-muted-foreground">{article.date}</div>
        <h3 className={`mb-2 line-clamp-2 font-extrabold leading-snug text-foreground transition-colors group-hover:text-accent ${compact ? 'text-base' : 'text-2xl'}`}>{article.title}</h3>
        {!compact && <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">{article.excerpt}</p>}
      </div>
    </article>
  );

  const carouselItems = filteredNews.length > 0 ? filteredNews : news;

  return (
    <section id="berita" className="relative py-4 bg-background overflow-hidden">
      <div className="absolute top-1/3 right-0 w-96 h-96 blob-gold opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="w-full text-center md:text-center">
            <h2 className="text-section-title font-extrabold text-foreground">
              Berita <span className="text-red-gradient">Terkini</span>
            </h2>
          </div>
          {variant === 'preview' ? null :
            <span className="text-sm text-muted-foreground">Informasi terbaru PORPROV JATIM 2027</span>}
        </div>

        {/* Category Filter */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {categories.map((cat) =>
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${
            activeCategory === cat ?
            'bg-accent text-accent-foreground' :
            'bg-secondary/20 text-muted-foreground hover:text-foreground border border-border/30'}`
            }>
            
              {cat}
            </button>
          )}
        </div>

        {/* News Card Swap */}
        {variant === 'full' ?
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredNews.map((article) => <div key={article.id}>{renderNewsCard(article)}</div>)}
          </div> :
          <div className="relative space-y-6">
            <div className="mb-4 flex justify-end gap-2">
              <button
                type="button"
                onClick={() => moveNewsCarousel(-1)}
                aria-label="Berita sebelumnya"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                <Icon name="ChevronLeftIcon" size={18} />
              </button>
              <button
                type="button"
                onClick={() => moveNewsCarousel(1)}
                aria-label="Berita berikutnya"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                <Icon name="ChevronRightIcon" size={18} />
              </button>
            </div>
            <div ref={newsCarouselRef} className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {carouselItems.map((article) => (
                <div key={article.id} className="w-[min(620px,calc(100vw-2rem))] shrink-0 snap-start">
                  {renderNewsCard(article, false)}
                </div>
              ))}
            </div>
          </div>}

      </div>
    </section>);

}