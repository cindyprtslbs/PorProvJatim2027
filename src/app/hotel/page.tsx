import Footer from '@/components/Footer';
import Header from '@/components/Header';
import AppImage from '@/components/ui/AppImage';

const hotels = [
  { name: 'Hotel Majapahit Surabaya', area: 'Tunjungan', type: 'Heritage Hotel', price: 'Mulai Rp850 ribu / malam', facilities: 'Kolam renang · Sarapan · Wi-Fi', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=900&q=85&fit=crop' },
  { name: 'Bumi Surabaya City Resort', area: 'Genteng', type: 'City Resort', price: 'Mulai Rp1,2 juta / malam', facilities: 'Gym · Restoran · Ruang keluarga', image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=900&q=85&fit=crop' },
  { name: 'Kokoon Hotel Surabaya', area: 'Krembangan', type: 'Business Hotel', price: 'Mulai Rp650 ribu / malam', facilities: 'Parkir · Meeting room · Sarapan', image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=900&q=85&fit=crop' },
];

export default function HotelPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <section className="mx-auto max-w-7xl px-4 pb-24 pt-36 sm:px-6 lg:px-8">
        <p className="mb-3 text-xs font-bold uppercase tracking-widest text-accent">Explore Jawa Timur</p>
        <h1 className="text-4xl font-extrabold text-foreground sm:text-6xl">Hotel</h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">Temukan rekomendasi penginapan yang nyaman dan strategis untuk mendukung perjalanan Anda selama PORPROV JATIM 2027.</p>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {hotels.map((hotel) => (
            <article key={hotel.name} className="overflow-hidden rounded-xl border border-border/40 bg-card shadow-sm transition-all hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl">
              <div className="relative h-56">
                <AppImage src={hotel.image} alt={hotel.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-[#0B1426]">{hotel.type}</span>
              </div>
              <div className="p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-accent">{hotel.area}</p>
                <h2 className="mt-2 text-xl font-extrabold text-foreground">{hotel.name}</h2>
                <p className="mt-3 text-sm text-muted-foreground">{hotel.facilities}</p>
                <div className="mt-5 flex items-center justify-between border-t border-border/40 pt-4">
                  <span className="text-sm font-bold text-primary">{hotel.price}</span>
                  <button className="text-sm font-bold text-accent hover:underline">Lihat detail</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}