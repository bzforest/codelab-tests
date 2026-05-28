import Navbar from "@/src/components/fashion/Navbar";
import HeroSection from "@/src/components/fashion/HeroSection";

export default function FashionPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <HeroSection />
      
      <div className="h-screen bg-transparent"></div>
    </main>
  );
}