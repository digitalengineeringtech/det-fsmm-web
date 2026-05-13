"use client";

import React from "react";
import { FileText, Download } from "lucide-react";

export default function CompanyProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-20 px-4">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl overflow-hidden mt-10 border border-gray-100">
        {/* Top Header Section */}
        <div className="bg-[#FFB900] pt-12 pb-14 px-8 flex flex-col items-center justify-center text-center">
          <div className="bg-white p-4 rounded-2xl mb-6 shadow-sm">
            <FileText className="w-10 h-10 text-[#FFB900]" strokeWidth={1.5} />
          </div>
          <h1 className="text-4xl font-extrabold text-[#0B1E36] mb-2 tracking-tight">
            Company Profile
          </h1>
          <p className="text-[#0B1E36]/90 text-lg font-medium">
            Get to know us better
          </p>
        </div>

        {/* Content Section */}
        <div className="p-8 md:p-14 text-center flex flex-col items-center">
          <p className="text-gray-600 mb-6 text-base leading-relaxed max-w-xl">
            Download our comprehensive company profile to learn more about our
            services, expertise, and how we empower businesses with future-ready
            IT solutions.
          </p>
          <p className="text-gray-500 mb-10 text-sm leading-relaxed max-w-xl">
            This document includes detailed information about our Managed
            Services, Security Solutions, and Networking Infrastructure
            capabilities.
          </p>

          {/* Download Box */}
          <div className="bg-gray-50/80 w-full max-w-lg rounded-3xl p-6 border border-gray-100 flex flex-col items-center mb-8 shadow-sm">
            <p className="text-[#0B1E36] font-bold text-base mb-1">
              Company Profile .pdf
            </p>
            <p className="text-gray-500 text-sm mb-6 font-medium">
              PDF Document • 17 MB
            </p>

            <a
              href="/Company Profile .pdf"
              download="Company Profile.pdf"
              className="bg-[#0B1E36] hover:bg-[#152e4d] text-white rounded-full px-8 py-3.5 font-bold transition-all flex items-center gap-3 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-sm"
            >
              <Download className="w-4 h-4" />
              View Company Profile
            </a>
          </div>

          <p className="text-gray-400 text-xs mt-2 font-medium">
            Requires a PDF reader to view.
          </p>
        </div>
      </div>
    </div>
  );
}
