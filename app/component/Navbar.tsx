"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed w-full md:py-1 z-100 px-6">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-20 relative">
        
        {/* Left - Logo */}
        <Link href="/" className="flex items-center">
          <div className="w-10 h-10 md:w-20 md:h-20 bg-[url('/logo.png')] bg-contain bg-center" />
        </Link>

        {/* Center - Phone number on mobile */}
        <div className="absolute left-1/2 transform -translate-x-1/2 md:hidden text-blue-800 font-bold text-md">
          📞 +880 1334-913290
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#home" className="text-gray-800 hover:text-[#0dcaf0] transition font-bold">হোম</Link>
          <Link href="#services" className="text-gray-800 hover:text-[#0dcaf0] transition font-bold">সেবা</Link>
          <Link href="#specialists" className="text-gray-800 hover:text-[#0dcaf0] transition font-bold">বিশেষজ্ঞ</Link>
          <Link href="#departments" className="text-gray-800 hover:text-[#0dcaf0] transition font-bold">বিভাগসমূহ</Link>
          <Link href="#corporate" className="text-gray-800 hover:text-[#0dcaf0] transition font-bold">কোম্পানি</Link>
          <Link href="#package" className="text-gray-800 hover:text-[#0dcaf0] transition font-bold">প্যাকেজ</Link>
          <Link href="#news" className="text-gray-800 hover:text-[#0dcaf0] transition font-bold">সংবাদ ও মতামত</Link>
          <Link href="#contact" className="text-gray-800 hover:text-[#0dcaf0] transition font-bold">যোগাযোগ</Link>
          <Link href="#about" className="text-gray-800 hover:text-[#0dcaf0] transition font-bold">আমাদের সম্পর্কে</Link>
          <span className="text-gray-800 font-bold text-xl">📞 +880 1334-913290</span>
        </div>

        {/* Mobile burger */}
        <div className="md:hidden flex items-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="p-0 bg-blue-900 text-white rounded-xs cursor-pointer">
                <Menu className="h-14 w-14" />
              </Button>
            </DropdownMenuTrigger>
            {/* Added z-index to make dropdown visible above navbar */}
            <DropdownMenuContent className="w-48 rounded-none bg-white z-9999">
              <DropdownMenuItem><Link href="#home">হোম</Link></DropdownMenuItem>
              <DropdownMenuItem><Link href="#services">সেবা</Link></DropdownMenuItem>
              <DropdownMenuItem><Link href="#specialists">বিশেষজ্ঞ</Link></DropdownMenuItem>
              <DropdownMenuItem><Link href="#departments">বিভাগসমূহ</Link></DropdownMenuItem>
              <DropdownMenuItem><Link href="#corporate">কোম্পানি</Link></DropdownMenuItem>
              <DropdownMenuItem><Link href="#package">প্যাকেজ</Link></DropdownMenuItem>
              <DropdownMenuItem><Link href="#news">সংবাদ ও মতামত</Link></DropdownMenuItem>
              <DropdownMenuItem><Link href="#contact">যোগাযোগ</Link></DropdownMenuItem>
              <DropdownMenuItem><Link href="#about">আমাদের সম্পর্কে</Link></DropdownMenuItem>
              <DropdownMenuItem className="text-md font-bold">📞 +880 1334-913290</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

      </div>
    </nav>
  );
}
