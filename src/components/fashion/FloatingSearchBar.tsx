import { Search, SlidersHorizontal } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select";

export default function FloatingSearchBar() {
  return (
    <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 sm:-mt-16">
      <div className="bg-white/80 backdrop-blur-xl shadow-xl shadow-rose-900/5 border border-rose-100 p-4 sm:p-6 rounded-2xl flex flex-col md:flex-row items-center gap-4">
        
        {/* ช่องค้นหา*/}
        <div className="relative w-full flex-1 group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-rosegold transition-colors z-10" />
          <input 
            type="text" 
            placeholder="Search collections, items..." 
            className="w-full h-[50px] pl-12 pr-4 bg-white/50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rosegold focus:border-transparent transition-all placeholder:text-slate-400 text-slate-700 font-medium"
          />
        </div>

        {/* หมวดหมู่ */}
        <div className="relative w-full md:w-56 shrink-0 group">
          <SlidersHorizontal className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-rosegold transition-colors z-10 pointer-events-none" />

          <Select defaultValue="all">
            <SelectTrigger className="w-full h-[50px]! pl-12 pr-4 bg-white/50 border-slate-200 rounded-xl focus:ring-2 focus:ring-rosegold focus:ring-offset-0 text-slate-700 font-medium transition-all shadow-none">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent className="bg-white/95 backdrop-blur-xl border-rose-100 rounded-xl shadow-lg z-50">
              <SelectItem value="all" className="text-slate-600 font-medium cursor-pointer transition-colors">
                All Categories
              </SelectItem>
              <SelectItem value="dresses" className="text-slate-600 font-medium cursor-pointer transition-colors">
                Dresses
              </SelectItem>
              <SelectItem value="accessories" className="text-slate-600 font-medium cursor-pointer transition-colors">
                Accessories
              </SelectItem>
              <SelectItem value="shoes" className="text-slate-600 font-medium cursor-pointer transition-colors">
                Shoes & Bags
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        {/* ปุ่มค้นหา */}
        <button className="hover-sweep bg-slate-900 text-white px-8 h-[50px] rounded-xl font-medium hover:bg-rosegold-dark transition-colors w-full md:w-auto shrink-0 shadow-md hover:shadow-lg">
          SEARCH
        </button>

      </div>
    </div>
  );
}