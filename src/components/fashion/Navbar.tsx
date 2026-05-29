"use client";

import Link from "next/link";
import type { MouseEvent } from "react";
import { Menu, ShoppingBag, Search, User } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/src/components/ui/sheet";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select";
import { scrollToElementId } from "@/src/lib/smooth-scroll";

function scrollToHash(hash: string) {
  const id = hash.replace(/^#/, "");
  if (!scrollToElementId(id)) return;
  window.history.pushState(null, "", hash);
}

export default function Navbar() {
  const navLinks = [
    { name: "NEW ARRIVALS", href: "#new-arrivals" },
    { name: "COLLECTIONS", href: "#collections" },
    { name: "LuminaMuse", href: "#luminaMuse" },
  ];

  const handleSectionClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    scrollToHash(href);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/60 backdrop-blur-md border-b border-rose-100/50">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/fashion" className="font-cinzel text-2xl font-bold tracking-widest text-primary">
          LUMINA.
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleSectionClick(e, link.href)}
              className="hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* ตะกร้าสินค้า, User, Language & Hamburger */}
        <div className="flex items-center space-x-4 md:space-x-6">
          
          {/* Language Selector (อลังการแบบ Global Brand) */}
          <div className="hidden md:block">
            <Select defaultValue="en">
              <SelectTrigger className="w-auto h-8 border-none bg-transparent hover:bg-slate-50 focus:ring-0 text-xs uppercase font-medium cursor-pointer">
                <SelectValue />
              </SelectTrigger>
              <SelectContent position="popper" sideOffset={4} className="min-w-[80px] bg-slate-50">
                <SelectItem value="en" className="cursor-pointer text-slate-700">EN</SelectItem>
                <SelectItem value="zh" className="cursor-pointer text-slate-700">CN</SelectItem>
                <SelectItem value="th" className="cursor-pointer text-slate-700">TH</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Search className="w-5 h-5 text-slate-600 hover:text-primary cursor-pointer transition-colors" />
            <User className="w-5 h-5 text-slate-600 hover:text-primary cursor-pointer transition-colors" />
          </div>

          <button className="flex items-center space-x-1 text-slate-600 hover:text-rosegold-dark transition-colors cursor-pointer">
            <ShoppingBag className="w-5 h-5" />
            <span className="text-sm font-medium hidden sm:inline-block">(0)</span>
          </button>

          {/* Hamburger */}
          <div className="md:hidden flex items-center">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-slate-600 hover:text-rosegold-dark cursor-pointer">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              
              <SheetContent side="right" className="bg-white/95 backdrop-blur-lg border-l-rose-100">
                <div className="flex flex-col mt-12 space-y-6 text-center">
                  <Link href="/fashion" className="font-cinzel text-2xl font-bold text-primary mb-6">
                    LUMINA.
                  </Link>
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleSectionClick(e, link.href)}
                      className="text-lg font-medium text-slate-600 hover:text-rosegold-dark transition-colors"
                    >
                      {link.name}
                    </a>
                  ))}
                  {/* เมนูเสริมใน Mobile Drawer */}
                  <div className="pt-8 border-t border-rose-50 space-y-4">
                    <p className="text-sm text-slate-400">Account</p>
                    <p className="text-sm text-slate-400">Language (TH/EN)</p>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

        </div>
      </div>
    </nav>
  );
}