import Link from 'next/link';
import { notFound } from 'next/navigation';
import AppImage from '@/components/ui/AppImage';
import AppIcon from '@/components/ui/AppIcon';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { venues } from '@/app/data/venues';

function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export function generateStaticParams() {
  return venues.map((venue) => ({ slug: slugify(venue.name) }));
}

export default async function VenueDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const venue = venues.find((item) => slugify(item.name) === slug);

  if (!venue) notFound();

  return (
    <main className="min-h-screen overflow-x-hidden bg-background">
      <Header />
      <div className="relative overflow-hidden bg-gradient-to-b from-secondary/30 to-background pb-16 pt-32">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center gap-2 text-xs text-muted-foreground">
            <Link href="/" className="transition-colors hover:text-accent">Beranda</Link>
            <AppIcon name="ChevronRightIcon" size={14} />
            <Link href="/venue" className="transition-colors hover:text-accent">Venue</Link>
            <AppIcon name="ChevronRightIcon" size={14} />
            <span className="font-semibold text-foreground">{venue.name}</span>
          </div>

          <div className="grid overflow-hidden rounded-3xl border border-border/50 bg-card shadow-xl lg:grid-cols-[1.05fr_0.95fr]">
            <div className="relative min-h-[300px] lg:min-h-[560px]">
              <AppImage src={venue.image} alt={venue.name} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 55vw" priority />
            </div>
            <div className="p-6 sm:p-10">
              <span className="text-xs font-bold uppercase tracking-widest text-accent">Detail Venue</span>
              <h1 className="mt-3 text-3xl font-extrabold text-foreground sm:text-4xl">{venue.name}</h1>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">{venue.description}</p>

              <div className="mt-7 space-y-4 text-sm text-muted-foreground">
                <div className="flex items-start gap-3"><AppIcon name="MapPinIcon" size={18} className="mt-0.5 shrink-0 text-accent" /><span>{venue.address}, {venue.city}</span></div>
                <div className="flex items-center gap-3"><AppIcon name="UserGroupIcon" size={18} className="shrink-0 text-accent" /><span>Kapasitas {venue.capacity} orang</span></div>
              </div>

              <div className="mt-7">
                <h2 className="mb-3 text-sm font-bold uppercase tracking-wider text-foreground">Cabang olahraga</h2>
                <div className="flex flex-wrap gap-2">
                  {venue.sports.map((sport) => <span key={sport} className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1.5 text-xs font-bold text-accent">{sport}</span>)}
                </div>
              </div>

              <Link href="/venue" className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-bold text-accent-foreground transition-transform hover:-translate-y-0.5">
                <AppIcon name="ArrowLeftIcon" size={16} />
                Kembali ke Venue
              </Link>
            </div>
          </div>

          <section className="mt-8 overflow-hidden rounded-3xl border border-border/50 bg-card shadow-lg">
            <div className="border-b border-border/40 px-6 py-5 sm:px-8">
              <h2 className="text-xl font-extrabold text-foreground">Peta Lokasi</h2>
              <p className="mt-1 text-sm text-muted-foreground">Lokasi {venue.name} di {venue.city}.</p>
            </div>
            <iframe
              title={`Peta ${venue.name}`}
              src={`https://www.google.com/maps?q=${encodeURIComponent(`${venue.name}, ${venue.address}, ${venue.city}`)}&output=embed`}
              className="h-[360px] w-full border-0"
              loading="lazy"
            />
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
