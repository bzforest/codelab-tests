import Navbar from "@/src/components/fashion/Navbar";
import HeroSection from "@/src/components/fashion/HeroSection";
import FloatingSearchBar from "@/src/components/fashion/FloatingSearchBar";
import ProductGrid from "@/src/components/fashion/ProductGrid";

export default function FashionPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <HeroSection />
      <FloatingSearchBar />
      
      <div className="min-h-screen pt-16 pb-24">
        <ProductGrid />
      </div>
    </main>
  );
}