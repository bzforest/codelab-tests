"use client";

import { Truck, Gift, Heart, Droplet, ArrowRight } from "lucide-react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

// --- Data Layer ---
const features = [
  { 
    icon: Truck, 
    title: "FREE DELIVERY", 
    desc: "Enjoy complimentary shipping on every order, exclusively in Thailand." 
  },
  { 
    icon: Gift, 
    title: "MEANINGFUL GIFT", 
    desc: "Each piece embodies positive energies and carries heartfelt hidden meaningful messages." 
  },
  { 
    icon: Heart, 
    title: "EVERYDAY", 
    desc: "Delicately designed to seamlessly complement your daily routine, every single day." 
  },
  { 
    icon: Droplet, 
    title: "WATER PROOF", 
    desc: "Worry-free from your daily lifestyle, meticulously crafted for you to enjoy every moment." 
  }
];

const footerColumns = [
  {
    title: "LUMINA",
    links: ["Our story", "CSR", "Our Blogs", "LUMINA Club"]
  },
  {
    title: "SUPPORTS",
    links: ["FAQs", "Product care", "Delivery", "Ring size charts"]
  },
  {
    title: "CONTACT",
    links: ["Contact Us", "Our Stores", "Career", "TEL. (+66)90-919-9295", "Email: contact@lumina.com"]
  }
];

// --- Component ---
export default function Footer() {
  return (
    <footer className="bg-white pt-16">
      
      {/* 1. Brand Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-y border-slate-100 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center">
              <feature.icon className="w-8 h-8 text-slate-400 mb-6" strokeWidth={1.5} />
              <h4 className="font-medium text-slate-900 tracking-wider text-sm mb-4">{feature.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed max-w-[250px]">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Main Footer Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Brand Name */}
        <div className="mb-12">
          <h2 className="font-cinzel text-3xl tracking-widest text-rosegold-dark">LUMINA</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Links Columns (กินพื้นที่ 7 ส่วนในหน้าจอใหญ่) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {footerColumns.map((col, idx) => (
              <div key={idx}>
                <h4 className="text-rosegold-dark text-sm tracking-wider font-medium mb-6">{col.title}</h4>
                <ul className="space-y-4">
                  {col.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <a href="#" className="text-slate-500 hover:text-slate-900 text-sm transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter (กินพื้นที่ 5 ส่วน) */}
          <div className="lg:col-span-5 lg:pl-12 lg:border-l border-slate-100">
            <h4 className="text-slate-900 text-lg font-medium mb-2">Sign Up to LUMINA Newsletter</h4>
            <p className="text-slate-500 text-sm mb-6">Sign up for the latest news, updates, and exclusive offers.</p>
            
            <form className="flex w-full" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email" 
                className="flex-1 border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:border-rosegold transition-colors"
                required
              />
              <button 
                type="submit" 
                className="hover-sweep bg-[#9c8e82] hover:bg-[#86786c] text-white px-6 py-3 transition-colors flex items-center justify-center cursor-pointer"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>

        </div>

        {/* 3. Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-slate-500 text-xs text-center md:text-left space-y-2">
            <p>© LUMINA</p>
            <p>DPMS Category A Registrant (Registration No.A-B-24-12-08447)</p>
            <div className="flex items-center justify-center md:justify-start gap-4 pt-2">
              <a href="#" className="hover:text-slate-900 transition-colors">Terms & Conditions</a>
              <a href="#" className="hover:text-slate-900 transition-colors">Privacy policy</a>
              <a href="#" className="hover:text-slate-900 transition-colors">Cookies</a>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-6 text-slate-400">
            <a href="#" className="hover:text-rosegold transition-colors"><FaFacebook className="w-5 h-5" /></a>
            <a href="#" className="hover:text-rosegold transition-colors"><FaTwitter className="w-5 h-5" /></a>
            <a href="#" className="hover:text-rosegold transition-colors"><FaInstagram className="w-5 h-5" /></a>
            <a href="#" className="hover:text-rosegold transition-colors"><FaYoutube className="w-5 h-5" /></a>
          </div>
        </div>
        
      </div>
    </footer>
  );
}