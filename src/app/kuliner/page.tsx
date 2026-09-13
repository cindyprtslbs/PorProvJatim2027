import Footer from '@/components/Footer';
import Header from '@/components/Header';
import AppImage from '@/components/ui/AppImage';

const foods = [
  { name: 'Rawon Setan', area: 'Genteng', category: 'Makanan khas', note: 'Kuah kluwek kaya rempah · Cocok untuk makan malam', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=900&q=85&fit=crop' },
  { name: 'Rujak Cingur', area: 'Wonokromo', category: 'Kuliner tradisional', note: 'Petis khas Surabaya · Porsi untuk berbagi', image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=900&q=85&fit=crop' },
  { name: 'Lontong Balap', area: 'Bubutan', category: 'Jajanan lokal', note: 'Segar dan gurih · Pilihan sarapan atlet', image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=900&q=85&fit=crop' },
];

export default function KulinerPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <section className="mx-auto max-w-7xl px-4 pb-24 pt-36 sm:px-6 lg:px-8">
        <p className="mb-3 text-xs font-bold uppercase tracking-widest text-accent">Explore Jawa Timur</p>
        <h1 className="text-4xl font-extrabold text-foreground sm:text-6xl">Kuliner</h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">Jelajahi pilihan kuliner khas Jawa Timur yang bisa dinikmati di sela-sela pertandingan.</p>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {foods.map((food) => (
            <article key={food.name} className="overflow-hidden rounded-xl border border-border/40 bg-card shadow-sm transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl">
              <div className="relative h-56">
                <AppImage src={food.image} alt={food.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-[#0B1426]">{food.category}</span>
              </div>
              <div className="p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-primary">{food.area}</p>
                <h2 className="mt-2 text-xl font-extrabold text-foreground">{food.name}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{food.note}</p>
                <button className="mt-5 border-t border-border/40 pt-4 text-sm font-bold text-accent hover:underline">Lihat rekomendasi</button>
              </div>
            </article>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}