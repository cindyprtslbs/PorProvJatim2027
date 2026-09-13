'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

const faqs = [
  {
    q: 'Apa itu PORPROV Jawa Timur?',
    a: 'PORPROV (Pekan Olahraga Provinsi) Jawa Timur adalah kompetisi olahraga multi-cabang tingkat provinsi yang mempertemukan atlet-atlet terbaik dari 38 kabupaten dan kota se-Jawa Timur. Diselenggarakan setiap dua tahun sekali oleh KONI Jawa Timur.',
  },
  {
    q: 'Kapan PORPROV Jatim 2027 dilaksanakan?',
    a: 'PORPROV Jawa Timur X 2027 dijadwalkan berlangsung pada bulan Juli 2027 di Kota Surabaya sebagai tuan rumah. Surabaya kembali menjadi tuan rumah setelah sukses menggelar PORPROV I pada tahun 2007.',
  },
  {
    q: 'Di mana pertandingan diselenggarakan?',
    a: 'Pertandingan PORPROV X 2027 akan diselenggarakan di berbagai venue di Kota Surabaya, meliputi aset Pemerintah Kota Surabaya, aset Pemerintah Provinsi Jawa Timur, serta kerja sama dengan Universitas Negeri Surabaya, Universitas Hang Tuah, dan Universitas Ciputra.',
  },
  {
    q: 'Apa saja cabang olahraga yang dipertandingkan?',
    a: 'PORPROV Jatim 2027 mempertandingkan lebih dari 80 cabang olahraga, meliputi atletik, renang, bulutangkis, bola basket, sepak bola, futsal, pencak silat, karate, taekwondo, panahan, tenis, angkat besi, tinju, wushu, catur, e-sports, dan masih banyak lainnya.',
  },
  {
    q: 'Bagaimana cara melihat jadwal pertandingan?',
    a: 'Jadwal pertandingan dapat dilihat melalui halaman Jadwal Pertandingan di website ini. Anda dapat memfilter berdasarkan tanggal, cabang olahraga, venue, dan kabupaten/kota.',
  },
  {
    q: 'Bagaimana cara melihat hasil pertandingan?',
    a: 'Hasil pertandingan dapat dilihat di halaman Jadwal Pertandingan dengan memilih filter status "Selesai". Anda juga dapat melihat skor langsung melalui fitur Live Score di halaman utama.',
  },
  {
    q: 'Bagaimana cara melihat klasemen medali?',
    a: 'Klasemen medali dapat dilihat melalui halaman Klasemen Medali. Data diperbarui secara berkala sesuai hasil pertandingan yang telah selesai.',
  },
  {
    q: 'Bagaimana cara mendapatkan informasi venue?',
    a: 'Informasi lengkap mengenai venue pertandingan tersedia di bagian Venue di halaman utama maupun halaman Jadwal, termasuk alamat, kapasitas, cabang olahraga yang dipertandingkan, dan tautan peta.',
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="relative py-24 bg-background overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-1/2 right-0 w-96 h-96 blob-navy pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/10 mb-4">
            <Icon
              name="QuestionMarkCircleIcon"
              size={14}
              className="text-accent"
            />

            <span className="text-accent text-xs font-bold uppercase tracking-widest">
              FAQ
            </span>
          </div>

          <h2 className="text-section-title font-extrabold text-foreground mb-3">
            Pertanyaan yang{' '}
            <span className="text-gold-gradient">
              Sering Ditanya
            </span>
          </h2>

          <p className="text-muted-foreground text-base max-w-xl mx-auto">
            Semua yang perlu Anda ketahui tentang PORPROV Jawa Timur 2027.
          </p>
        </div>

        {/* FAQ Grid - 2 Kolom */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                open === i
                  ? 'border-accent/40 bg-accent/5'
                  : 'border-border/30 bg-card hover:border-accent/20'
              }`}
            >

              {/* Question Button */}
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                aria-expanded={open === i}
              >

                <div className="flex items-center gap-4 min-w-0">

                  {/* Number */}
                  <span className="text-xs font-bold text-accent font-mono opacity-60 w-6 flex-shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  {/* Question */}
                  <span
                    className={`font-semibold text-base transition-colors ${
                      open === i
                        ? 'text-accent'
                        : 'text-foreground'
                    }`}
                  >
                    {faq.q}
                  </span>

                </div>

                {/* Plus Icon */}
                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    open === i
                      ? 'bg-accent text-accent-foreground rotate-45'
                      : 'bg-secondary/30 text-muted-foreground'
                  }`}
                >
                  <Icon name="PlusIcon" size={16} />
                </div>

              </button>

              {/* Answer */}
              {open === i && (
                <div className="px-6 pb-6 pl-16">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}