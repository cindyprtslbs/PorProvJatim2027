'use client';

import React from 'react';
import CircularGallery from './CircularGallery';

// Tautan gambar diperbarui menggunakan Unsplash agar tidak ada yang kosong (CORS aman)
const exampleGalleryImages = [
  "https://images.unsplash.com/photo-1562517904-c1062f76d3e0",
  "https://images.unsplash.com/photo-1581390891065-f456a3a4921f",
  "https://images.unsplash.com/photo-1661450279873-01fe386873d7",
  "https://images.unsplash.com/photo-1517649763962-0c623066013b",
  "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5"
];

export default function GallerySection() {
  return (
    // Background hitam dihapus (mengikuti warna dasar website Anda)
    <section id="galeri" className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground">
            Galeri <span style={{ color: '#d4af37' }}>Foto</span>
          </h2>
        </div>

        <div className="relative h-[600px] sm:h-[680px]">
          <CircularGallery
            items={exampleGalleryImages}
            bend={3}
            borderRadius={0.05}
            scrollEase={0.04}
            scrollSpeed={2}
          />
        </div>
      </div>
    </section>
  );
}