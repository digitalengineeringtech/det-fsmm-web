"use client";

import React from "react";
import "@/app/globals.css";
import LandingHeader from "@/components/LandingHeader";
import LandingFooter from "@/components/LandingFooter";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <div
          id="main-scroll-container"
          className="w-full h-screen overflow-y-scroll scroll-container scroll-smooth"
        >
          <LandingHeader />
          <main>{children}</main>
          <LandingFooter />
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
