import Footer from '@/components/Footer';
import Header from '@/components/Header';
import VenueSection from '@/app/components/VenueSection';

export default function VenuePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background">
      <Header />
      <div className="pt-16">
        <VenueSection />
      </div>
      <Footer />
    </main>
  );
}