import Navbar from "@/src/components/fashion/Navbar";
import HeroSection from "@/src/components/fashion/HeroSection";
import FloatingSearchBar from "@/src/components/fashion/FloatingSearchBar";

export default function FashionPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <HeroSection />
      <FloatingSearchBar />
      
      <div className="min-h-screen pt-16 pb-24">
        {/* เตรียมไว้ใส่ Product Grid ในสเต็ปถัดไป */}
      </div>
    </main>
  );
}