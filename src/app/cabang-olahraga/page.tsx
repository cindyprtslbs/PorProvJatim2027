import Footer from '@/components/Footer';
import Header from '@/components/Header';
import SportsSection from '@/app/components/SportsSection';

export default function CabangOlahragaPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background">
      <Header />
      <div className="pt-16">
        <SportsSection />
      </div>
      <Footer />
    </main>
  );
}