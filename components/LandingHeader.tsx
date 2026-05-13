"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  ArrowRight,
  Building2,
  Facebook,
  Twitter,
  Instagram,
  PhoneCall,
  MapPin,
  Search,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const LandingHeader = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Get the scroll container defined in layout.tsx
    const scrollContainer = document.getElementById("main-scroll-container");
    if (!scrollContainer) return;

    const handleScroll = () => {
      const currentScrollY = scrollContainer.scrollTop;

      // When we scroll past the top components, become sticky
      if (currentScrollY > 120) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    scrollContainer.addEventListener("scroll", handleScroll, { passive: true });
    return () => scrollContainer.removeEventListener("scroll", handleScroll);
  }, []);

  // Helper function to establish the styling of nav links based on if they are active
  const getNavLinkClass = (path: string) => {
    const isActive =
      path === "/" ? pathname === "/" : pathname.startsWith(path);
    const baseClass =
      "font-semibold text-sm transition-colors whitespace-nowrap px-4 py-1.5 rounded-full";
    return isActive
      ? `${baseClass} text-white bg-[#33B0F9] font-bold shadow-md`
      : `${baseClass} text-gray-300 hover:text-[#33B0F9]`;
  };

  return (
    <>
      <header className="w-full flex flex-col shadow-sm relative">
        {/* 1) Top Bar */}
        <div className="bg-[#1f1f1f] text-gray-300 py-2.5 px-4 lg:px-12 text-sm border-b border-[#2d2d2d] z-50">
          <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
            {/* Left Text */}
            <div className="flex items-center gap-2 text-gray-400">
              <Building2 className="w-4 h-4 text-[#33B0F9]" />
              <span>Hello, Welcome to Sixth Kendra website</span>
            </div>

            {/* Right Links / Socials */}
            <div className="flex items-center divide-x divide-gray-600/50">
              <div className="flex items-center gap-4 pr-5">
                <Link href="#" className="hover:text-white transition-colors">
                  <Facebook className="w-4 h-4" />
                </Link>
                <Link href="#" className="hover:text-white transition-colors">
                  <Twitter className="w-4 h-4" />
                </Link>
                <Link href="#" className="hover:text-white transition-colors">
                  <Instagram className="w-4 h-4" />
                </Link>
              </div>
              <Link href="/company-profile" className="pl-5">
                <button className="bg-gray-700 hover:bg-gray-600 text-white font-medium text-xs px-4 py-1.5 rounded-full transition-colors flex items-center shadow-sm">
                  Company Profile
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* 2) Middle Bar (Logo & Contact Info) */}
        <div className="bg-white py-6 px-4 lg:px-12 z-40 relative">
          <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Logo Section */}
            <div className="flex items-center">
              <div className="relative w-[60px] h-[60px] mr-3">
                <Image
                  src={"/sk_logo.png"}
                  fill
                  alt="Logo"
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <p className="font-bold text-2xl lg:text-3xl text-gray-900 tracking-tight font-serif uppercase leading-none">
                  SIXTH KENDRA
                </p>
                <p className="text-gray-400 text-xs tracking-[0.2em] mt-1 font-semibold uppercase">
                  Software Solution
                </p>
              </div>
            </div>

            {/* Contact Items */}
            <div className="hidden lg:flex items-center gap-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border-2 border-[#33B0F9] flex items-center justify-center">
                  <PhoneCall className="w-5 h-5 text-[#33B0F9]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-500 text-sm font-medium">
                    admin@det-mm.com
                  </span>
                  <span className="text-gray-900 font-bold text-lg">
                    +95 (998) 834 0004
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border-2 border-[#33B0F9] flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[#33B0F9]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-500 text-sm font-medium">
                    Pyinmana, Naypyitaw
                  </span>
                  <span className="text-gray-900 font-bold text-lg">
                    15/1921, 12th Street
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3) Navigation Pill Wrapper with placeholder height to prevent jumping */}
        <div className="bg-white pb-6 z-40 relative h-[88px] w-full">
          <div
            className={`z-[100] transition-all duration-300 ${
              isScrolled
                ? "fixed top-4 left-0 right-0 px-4 lg:px-12"
                : "absolute top-0 left-0 right-0 px-4 lg:px-12"
            }`}
          >
            <div className="w-full max-w-[1400px] mx-auto relative shadow-2xl rounded-full">
              <nav className="bg-[#242424] text-white rounded-full flex flex-wrap lg:flex-nowrap items-center justify-between overflow-visible w-full border border-[#333333]">
                {/* Logo container with width transition */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-out flex flex-none items-center ${
                    isScrolled
                      ? "max-w-[250px] opacity-100 pl-6 pr-4 border-r border-gray-700/50 py-3"
                      : "max-w-0 opacity-0 pl-0 pr-0 border-transparent border-r-0 py-3"
                  }`}
                >
                  <div className="relative w-10 h-10 mr-3">
                    <Image
                      src={"/sk_logo_only.png"}
                      fill
                      alt="Logo"
                      className="object-contain"
                    />
                  </div>
                  {/* <span className="font-extrabold text-xl tracking-tight uppercase text-white whitespace-nowrap font-serif">
                    <span className="text-[#33B0F9]">SIXTH</span> KENDRA
                  </span> */}
                </div>

                {/* Nav Links */}
                <div
                  className={`flex items-center space-x-2 md:space-x-4 overflow-x-auto custom-scrollbar flex-1 lg:flex-none py-2.5 transition-all duration-500 ${isScrolled ? "px-4" : "px-8"}`}
                >
                  <Link href="/" className={getNavLinkClass("/")}>
                    Home
                  </Link>
                  <Link
                    href="/products"
                    className={getNavLinkClass("/products")}
                  >
                    Products
                  </Link>
                  <Link
                    href="/features"
                    className={getNavLinkClass("/features")}
                  >
                    Features
                  </Link>
                  <Link href="/about" className={getNavLinkClass("/about")}>
                    The Company
                  </Link>
                  <Link href="/contact" className={getNavLinkClass("/contact")}>
                    Contact
                  </Link>
                </div>

                {/* Right Buttons */}
                <div className="hidden sm:flex flex-none items-center gap-4 px-4 py-1.5 border-l border-gray-700/50">
                  <button className="text-gray-300 hover:text-white px-2">
                    <Search className="w-5 h-5" />
                  </button>
                  <Link
                    target="_blank"
                    href="#"
                    // className="mr-1"
                  >
                    <Button className="bg-[#33B0F9] hover:bg-[#33B0F9]/90 text-white font-bold rounded-full px-6 py-5 shadow-lg shadow-[#33B0F9]/20 transition-all">
                      Go to Dashboard
                    </Button>
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default LandingHeader;
