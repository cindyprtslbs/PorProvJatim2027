'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';

const navLinks = [
  { label: 'Beranda', href: '/' },
  { label: 'Jadwal', href: '/jadwal-pertandingan' },
  { label: 'Klasemen', href: '/klasemen-medali' },
  { label: 'Cabang Olahraga', href: '/cabang-olahraga' },
  { label: 'Venue', href: '/venue' },
  { label: 'Berita', href: '/berita' },
];

const exploreLinks = [
  { label: 'Hotel', href: '/hotel' },
  { label: 'Kuliner', href: '/kuliner' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lang, setLang] = useState<'ID' | 'EN'>('ID');
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      const handleScroll = () => setMobileOpen(false);
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-white py-2 shadow-md border-b border-[#e5e7eb]' : 'bg-transparent py-4'
        }`}
      >
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <AppLogo size={scrolled ? 36 : 44} className="transition-all duration-300" />
              <div className="hidden sm:block">
                <div className="font-extrabold text-foreground text-sm tracking-wider leading-none">
                  PORPROV
                </div>
                <div className="text-accent text-xs font-bold tracking-widest leading-none mt-0.5">
                  JATIM 2027
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks?.map((link) => (
                <Link
                  key={link?.href}
                  href={link?.href}
                  className={`relative rounded-full px-4 py-2 text-sm font-bold transition-all duration-200 group ${
                    pathname === link.href
                      ? 'bg-accent text-accent-foreground shadow-md'
                      : 'text-[#0B1426] hover:bg-blue-50 hover:text-accent'
                  }`}
                >
                  {link?.label}
                </Link>
              ))}
              <div className="group relative">
                <button
                  type="button"
                  aria-haspopup="menu"
                  className={`relative flex items-center gap-1 rounded-full px-4 py-2 text-sm font-bold transition-all duration-200 ${
                    exploreLinks.some((link) => pathname === link.href)
                      ? 'bg-accent text-accent-foreground shadow-md'
                      : 'text-[#0B1426] hover:bg-blue-50 hover:text-accent'
                  }`}
                >
                  Explore
                  <Icon name="ChevronDownIcon" size={15} />
                </button>
                <div className="invisible absolute right-0 top-full z-50 mt-2 w-40 translate-y-1 rounded-xl border border-border/60 bg-white/95 p-1 opacity-0 shadow-xl backdrop-blur-md transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100" role="menu">
                  {exploreLinks.map((link) => (
                    <Link key={link.href} href={link.href} className="block rounded-lg px-4 py-3 text-sm font-semibold text-[#0B1426] hover:bg-blue-50 hover:text-accent" role="menuitem">
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-2">
              {/* Language Toggle */}
              <div className="hidden md:flex items-center gap-1 bg-secondary/30 rounded-full p-1 border border-border/50">
                <button
                  onClick={() => setLang('ID')}
                  className={`px-3 py-1 rounded-full text-xs font-bold transition-all duration-200 ${
                    lang === 'ID' ?'bg-accent text-accent-foreground' :'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  ID
                </button>
                <button
                  onClick={() => setLang('EN')}
                  className={`px-3 py-1 rounded-full text-xs font-bold transition-all duration-200 ${
                    lang === 'EN' ?'bg-accent text-accent-foreground' :'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  EN
                </button>
              </div>

              {/* Search */}
              <button className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary/30 transition-all duration-200">
                <Icon name="MagnifyingGlassIcon" size={20} />
              </button>

              {/* Mobile Menu */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary/30 transition-all"
                aria-label="Toggle menu"
              >
                {mobileOpen ? (
                  <Icon name="XMarkIcon" size={24} />
                ) : (
                  <Icon name="Bars3Icon" size={24} />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-background/80 backdrop-blur-md"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute top-16 left-0 right-0 glass-nav border-t border-border/30 p-6">
            <nav className="flex flex-col gap-2">
              {navLinks?.map((link) => (
                <Link
                  key={link?.href}
                  href={link?.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-foreground font-semibold hover:bg-secondary/30 hover:text-accent transition-all duration-200"
                >
                  {link?.label}
                </Link>
              ))}
              <div className="border-t border-border/30 pt-2">
                <div className="px-4 py-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">Explore</div>
                {exploreLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 rounded-xl px-4 py-3 pl-8 font-semibold text-foreground transition-all hover:bg-secondary/30 hover:text-accent"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-border/30 flex items-center gap-3">
                <div className="flex items-center gap-1 bg-secondary/30 rounded-xl p-1 border border-border/50">
                  <button
                    onClick={() => setLang('ID')}
                    className={`px-3 py-2 rounded-lg text-xs font-bold transition-all ${
                      lang === 'ID' ? 'bg-accent text-accent-foreground' : 'text-muted-foreground'
                    }`}
                  >
                    ID
                  </button>
                  <button
                    onClick={() => setLang('EN')}
                    className={`px-3 py-2 rounded-lg text-xs font-bold transition-all ${
                      lang === 'EN' ? 'bg-accent text-accent-foreground' : 'text-muted-foreground'
                    }`}
                  >
                    EN
                  </button>
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}