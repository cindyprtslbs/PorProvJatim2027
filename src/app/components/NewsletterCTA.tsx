'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

export default function NewsletterCTA() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-secondary" />
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] blob-gold opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 blob-red opacity-10 pointer-events-none" />
      <div className="absolute inset-0 noise-overlay pointer-events-none" />

      {/* Top border accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/10 mb-6">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-accent text-xs font-bold uppercase tracking-widest">Newsletter PORPROV</span>
        </div>

        <h2 className="text-section-title font-extrabold text-foreground mb-4">
          Jangan Lewatkan Setiap
          <br />
          <span className="text-gold-gradient">Momen PORPROV</span>
        </h2>

        <p className="text-muted-foreground text-base leading-relaxed max-w-xl mx-auto mb-10">
          Dapatkan informasi terbaru mengenai jadwal, hasil pertandingan, berita, dan perkembangan PORPROV Jatim langsung di inbox Anda.
        </p>

        {submitted ? (
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center animate-pulse-glow">
              <Icon name="CheckIcon" size={32} className="text-accent" />
            </div>
            <p className="text-foreground font-bold text-lg">Terima kasih telah berlangganan!</p>
            <p className="text-muted-foreground text-sm">Kami akan mengirimkan update terbaru PORPROV ke email Anda.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <div className="relative flex-1">
              <Icon name="EnvelopeIcon" size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Masukkan email Anda"
                required
                className="w-full bg-secondary/30 border border-border/40 rounded-full pl-11 pr-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent/50 focus:bg-secondary/40 transition-all"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-gold-light text-accent-foreground font-bold text-sm px-6 py-3.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg whitespace-nowrap"
              style={{ boxShadow: '0 4px 20px rgba(245, 158, 11, 0.3)' }}
            >
              <Icon name="BellIcon" size={16} />
              Berlangganan
            </button>
          </form>
        )}

        {/* Trust indicators */}
        <div className="flex items-center justify-center gap-6 mt-8 text-muted-foreground text-xs">
          <div className="flex items-center gap-1.5">
            <Icon name="ShieldCheckIcon" size={14} className="text-accent" />
            Privasi terjaga
          </div>
          <div className="flex items-center gap-1.5">
            <Icon name="BellSlashIcon" size={14} className="text-accent" />
            Bisa unsubscribe kapan saja
          </div>
          <div className="flex items-center gap-1.5">
            <Icon name="CheckCircleIcon" size={14} className="text-accent" />
            Gratis
          </div>
        </div>
      </div>
    </section>
  );
}