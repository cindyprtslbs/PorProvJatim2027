import React from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border/30 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <AppLogo size={48} />
              <div>
                <div className="font-extrabold text-foreground text-base tracking-wider">PORPROV</div>
                <div className="text-accent text-sm font-bold tracking-widest">JATIM 2027</div>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Portal resmi Pekan Olahraga Provinsi Jawa Timur X 2027.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              {[
                { icon: 'GlobeAltIcon', label: 'Instagram' },
                { icon: 'ChatBubbleLeftRightIcon', label: 'Facebook' },
                { icon: 'PlayCircleIcon', label: 'YouTube' },
                { icon: 'HashtagIcon', label: 'X' },
              ].map((social) => (
                <button
                  key={social.label}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-secondary/30 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/50 hover:bg-accent/10 transition-all duration-200"
                >
                  <Icon name={social.icon as 'GlobeAltIcon'} size={18} />
                </button>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-foreground font-bold text-sm uppercase tracking-widest mb-6">Navigasi</h3>
            <ul className="space-y-3">
              {[
                { label: 'Beranda', href: '/' },
                { label: 'Jadwal Pertandingan', href: '/jadwal-pertandingan' },
                { label: 'Cabang Olahraga', href: '#cabang-olahraga' },
                { label: 'Venue', href: '#venue' },
                { label: 'Klasemen Medali', href: '/klasemen-medali' },
                { label: 'Berita', href: '#berita' },
                { label: 'Galeri', href: '#galeri' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-accent text-sm font-medium transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-accent group-hover:w-3 transition-all duration-200 rounded-full" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Informasi */}
          <div>
            <h3 className="text-foreground font-bold text-sm uppercase tracking-widest mb-6">Informasi</h3>
            <ul className="space-y-3">
              {[
                { label: 'Tentang PORPROV', href: '#tentang' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Kontak', href: '#kontak' },
                { label: 'Kebijakan Privasi', href: '#privacy' },
                { label: 'Hasil Pertandingan', href: '/jadwal-pertandingan' },
                { label: 'Atlet Pilihan', href: '#atlet' },
                { label: 'Kontingen', href: '#kontingen' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-accent text-sm font-medium transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-accent group-hover:w-3 transition-all duration-200 rounded-full" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Penyelenggara */}
          <div>
            <h3 className="text-foreground font-bold text-sm uppercase tracking-widest mb-6">Penyelenggara</h3>
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-secondary/20 border border-border/30">
                <div className="text-accent font-bold text-sm mb-1">KONI Jawa Timur</div>
                <div className="text-muted-foreground text-xs leading-relaxed">
                  Jl. Kertajaya Indah Timur IV/5<br />
                  Surabaya, Jawa Timur
                </div>
              </div>
              <div className="p-4 rounded-xl bg-secondary/20 border border-border/30">
                <div className="text-accent font-bold text-sm mb-1">Tuan Rumah</div>
                <div className="text-muted-foreground text-xs leading-relaxed">
                  Kota Surabaya<br />
                  Jawa Timur, Indonesia
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm font-medium">
            © 2027 PORPROV Jawa Timur. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#privacy" className="text-muted-foreground hover:text-accent text-sm font-medium transition-colors">
              Kebijakan Privasi
            </Link>
            <Link href="#terms" className="text-muted-foreground hover:text-accent text-sm font-medium transition-colors">
              Syarat & Ketentuan
            </Link>
            <Link href="#kontak" className="text-muted-foreground hover:text-accent text-sm font-medium transition-colors">
              Kontak
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}