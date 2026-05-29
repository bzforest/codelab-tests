import Navbar from "@/src/components/fashion/Navbar";
import Footer from "@/src/components/fashion/Footer";
import HeroSection from "@/src/components/fashion/HeroSection";
import FloatingSearchBar from "@/src/components/fashion/FloatingSearchBar";
import ProductGrid from "@/src/components/fashion/ProductGrid";
import Collections from "@/src/components/fashion/Collections";
import InfluencerScroll from "@/src/components/fashion/InfluencerScroll";
import OurStores from "@/src/components/fashion/OurStores";

export default function FashionPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <HeroSection />
      <FloatingSearchBar />
      <ProductGrid />
      <Collections />
      <InfluencerScroll />
      <OurStores />
      <Footer />
      
    </main>
  );
}