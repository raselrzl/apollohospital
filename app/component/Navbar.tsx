"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

import {
  Home,
  HeartPulse,
  UserCheck,
  Building2,
  Package,
  Phone,
  Info,
  Menu,
  Stethoscope,
} from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(false);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full md:py-1 z-100 pr-6">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-20 relative">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="w-10 h-10 md:w-20 md:h-20 bg-[url('/logo.png')] bg-contain bg-center" />
        </Link>

        {/* Mobile Number */}
        <div className="absolute left-1/2 transform -translate-x-1/2 md:hidden text-blue-800 font-bold text-md">
          📞 +880 1334-913290
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="#home"
            className="text-gray-800 hover:text-[#0dcaf0] transition font-bold flex items-center gap-1"
          >
            <Home size={18} /> হোম
          </Link>

          <Link
            href="#services"
            className="text-gray-800 hover:text-[#0dcaf0] transition font-bold flex items-center gap-1"
          >
            <HeartPulse size={18} /> সেবা
          </Link>

          <Link
            href="#specialists"
            className="text-gray-800 hover:text-[#0dcaf0] transition font-bold flex items-center gap-1"
          >
            <UserCheck size={18} /> বিশেষজ্ঞ
          </Link>

          <Link
            href="#departments"
            className="text-gray-800 hover:text-[#0dcaf0] transition font-bold flex items-center gap-1"
          >
            <Stethoscope size={18} /> বিভাগসমূহ
          </Link>

          <Link
            href="#package"
            className="text-gray-800 hover:text-[#0dcaf0] transition font-bold flex items-center gap-1"
          >
            <Package size={18} /> প্যাকেজ
          </Link>

          <Link
            href="#contact"
            className="text-gray-800 hover:text-[#0dcaf0] transition font-bold flex items-center gap-1"
          >
            <Phone size={18} /> যোগাযোগ
          </Link>

          <Link
            href="#about"
            className="text-gray-800 hover:text-[#0dcaf0] transition font-bold flex items-center gap-1"
          >
            <Info size={18} /> আমাদের সম্পর্কে
          </Link>

          <span className="text-gray-800 font-bold text-xl">
            📞 +880 1334-913290
          </span>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center">
          <DropdownMenu open={open} onOpenChange={setOpen}>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="p-0 bg-blue-900 text-white rounded-xs cursor-pointer"
              >
                <Menu className="h-14 w-14" />
              </Button>
            </DropdownMenuTrigger>

            {/* Mobile Dropdown */}
            <DropdownMenuContent
              className="
                w-56 rounded-lg overflow-hidden z-9999 
                bg-linear-to-b from-blue-300 to-blue-100 shadow-xl border border-blue-200
              "
            >
              <DropdownMenuItem onClick={handleClick} className="font-bold">
                <Link href="#home" className="flex items-center gap-2">
                  <Home size={18} /> হোম
                </Link>
              </DropdownMenuItem>

              <DropdownMenuItem onClick={handleClick}>
                <Link href="#services" className="flex items-center gap-2">
                  <HeartPulse size={18} /> সেবা
                </Link>
              </DropdownMenuItem>

              <DropdownMenuItem onClick={handleClick}>
                <Link href="#specialists" className="flex items-center gap-2">
                  <UserCheck size={18} /> বিশেষজ্ঞ
                </Link>
              </DropdownMenuItem>

              <DropdownMenuItem onClick={handleClick}>
                <Link href="#departments" className="flex items-center gap-2">
                  <Stethoscope size={18} /> বিভাগসমূহ
                </Link>
              </DropdownMenuItem>

              <DropdownMenuItem onClick={handleClick}>
                <Link href="#package" className="flex items-center gap-2">
                  <Package size={18} /> প্যাকেজ
                </Link>
              </DropdownMenuItem>

              <DropdownMenuItem onClick={handleClick}>
                <Link href="#contact" className="flex items-center gap-2">
                  <Phone size={18} /> যোগাযোগ
                </Link>
              </DropdownMenuItem>

              <DropdownMenuItem onClick={handleClick}>
                <Link href="#about" className="flex items-center gap-2">
                  <Info size={18} /> আমাদের সম্পর্কে
                </Link>
              </DropdownMenuItem>

              <DropdownMenuItem className="text-md font-bold text-blue-900 flex items-center gap-2 mt-2 border-t border-blue-300 pt-2">
                <a
                  href="tel:+8801334913290"
                  className="flex items-center gap-2 w-full"
                >
                  <Phone size={18} /> +880 1334-913290
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
}
