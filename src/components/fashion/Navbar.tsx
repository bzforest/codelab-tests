import Link from "next/link";
import { Menu, ShoppingBag } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/src/components/ui/sheet";

export default function Navbar() {
  // เมนูที่เราจะใช้ทั้งบน Desktop และ Mobile (หลัก DRY: ประกาศรอบเดียว)
  const navLinks = [
    { name: "NEW ARRIVALS", href: "#new-arrivals" },
    { name: "COLLECTIONS", href: "#collections" },
    { name: "ACCESSORIES", href: "#accessories" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/60 backdrop-blur-md border-b border-rose-100/50">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        
        <Link href="/fashion" className="font-cinzel text-2xl font-bold tracking-widest text-primary">
          LUMINA.
        </Link>

        <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* ตะกร้าสินค้า & เมนู Mobile */}
        <div className="flex items-center space-x-4">
          
          <button className="flex items-center space-x-1 text-slate-600 hover:text-rosegold-dark transition-colors cursor-pointer">
            <ShoppingBag className="w-5 h-5" />
            <span className="text-sm font-medium hidden sm:inline-block">(0)</span>
          </button>

          {/* Hamburger */}
          <div className="md:hidden flex items-center">
            <Sheet>
              {/* Trigger */}
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-slate-600 hover:text-rosegold-dark cursor-pointer">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              
              {/* Drawer */}
              <SheetContent side="right" className="bg-white/95 backdrop-blur-lg border-l-rose-100">
                <div className="flex flex-col mt-12 space-y-6 text-center">
                  <Link href="/fashion" className="font-cinzel text-2xl font-bold text-primary mb-6">
                    LUMINA.
                  </Link>
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="text-lg font-medium text-slate-600 hover:text-rosegold-dark transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>

        </div>
      </div>
    </nav>
  );
}