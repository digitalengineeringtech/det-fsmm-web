"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const LandingHeader = () => {
  return (
    <nav className="fixed top-6 left-0 right-0 mx-auto max-w-7xl z-50 px-4">
      <div className="bg-white/90 backdrop-blur-md border border-gray-200 rounded-full shadow-lg">
        <div className="px-6 sm:px-8">
          <div className="flex justify-between py-2 items-center">
            <div className={`flex items-center justify-center`}>
              <div className={`relative w-[50px] h-[50px] mr-3`}>
                <Image
                  src={"/sk_logo.png"}
                  fill
                  alt="Logo"
                  className="object-contain"
                />
              </div>
              <p className={`font-semibold text-lg md:text-xl text-gray-900`}>
                <span className="text-[#33B0F9]">SIXTH</span> KENDRA
              </p>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/"
                className="text-gray-600 hover:text-[#33B0F9] transition-colors font-medium"
              >
                Home
              </Link>
              <Link
                href="/products"
                className="text-gray-600 hover:text-[#33B0F9] transition-colors font-medium"
              >
                Products
              </Link>
              <Link
                href="/features"
                className="text-gray-600 hover:text-[#33B0F9] transition-colors font-medium"
              >
                Features
              </Link>
              <Link
                href="/about"
                className="text-gray-600 hover:text-[#33B0F9] transition-colors font-medium"
              >
                About Us
              </Link>
              <Link href="/dashboard">
                <Button className="bg-[#33B0F9] hover:bg-[#33B0F9]/90 text-white font-semibold rounded-full px-6 shadow-md hover:shadow-lg transition-all">
                  Go to Dashboard <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default LandingHeader;
