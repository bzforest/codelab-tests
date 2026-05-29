import Navbar from "@/src/components/fashion/Navbar";
import HeroSection from "@/src/components/fashion/HeroSection";
import FloatingSearchBar from "@/src/components/fashion/FloatingSearchBar";
import ProductGrid from "@/src/components/fashion/ProductGrid";
import Collections from "@/src/components/fashion/Collections";

export default function FashionPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <HeroSection />
      <FloatingSearchBar />
      <ProductGrid />
      <Collections />
      
    </main>
  );
}