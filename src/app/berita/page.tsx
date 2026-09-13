import Footer from '@/components/Footer';
import Header from '@/components/Header';
import NewsSection from '@/app/components/NewsSection';

export default function BeritaPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background">
      <Header />
      <div className="pt-16">
        <NewsSection variant="full" />
      </div>
      <Footer />
    </main>
  );
}