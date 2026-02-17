"use client";

import React from "react";
import Link from "next/link";

const LandingFooter = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-gray-500">
          &copy; {new Date().getFullYear()} SIXTH KENDRA. All rights reserved.
        </p>
        <div className="flex gap-8">
          <Link
            href="#"
            className="text-gray-500 hover:text-[#33B0F9] transition-colors"
          >
            Privacy Filter
          </Link>
          <Link
            href="#"
            className="text-gray-500 hover:text-[#33B0F9] transition-colors"
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default LandingFooter;
