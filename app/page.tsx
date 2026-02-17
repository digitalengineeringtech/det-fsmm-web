"use client";
import "./globals.css";
import Link from "next/link";
import React, { ReactNode, useEffect, useState } from "react";
import { BarChart3, Fuel, ShieldCheck, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import CardSwap, { Card } from "@/components/CardSwap";
import Image from "next/image";

const LandingPage = () => {
  return (
    <main className="bg-white min-h-screen text-gray-900 selection:bg-[#33B0F9] selection:text-white">
      {/* Hero Section - Carousel */}
      <HeroCarousel />

      {/* Features Grid */}
      <section id="features" className="py-24 bg-gray-50 relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#33B0F9]/5 rounded-full blur-[100px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="text-[#33B0F9] uppercase tracking-widest text-sm font-semibold mb-2 block">
              Our Capabilities
            </span>
            <h2 className="text-4xl font-bold font-serif text-gray-900 mb-4">
              Powerful Features
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Everything you need to run your station efficiently, wrapped in a
              premium experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<BarChart3 className="h-6 w-6 text-[#33B0F9]" />}
              title="Real-time Analytics"
              description="Track sales, fuel levels, and revenue in real-time with comprehensive dashboards."
            />
            <FeatureCard
              icon={<Fuel className="h-6 w-6 text-[#33B0F9]" />}
              title="Tank Monitoring"
              description="Automated tank level monitoring and inventory management to prevent stock-outs."
            />
            <FeatureCard
              icon={<ShieldCheck className="h-6 w-6 text-[#33B0F9]" />}
              title="Secure Shifts"
              description="Role-based access control and detailed shift reporting for total accountability."
            />
            <FeatureCard
              icon={<Zap className="h-6 w-6 text-[#33B0F9]" />}
              title="Fast Processing"
              description="Lightning fast transactions and seamless integration with pump controllers."
            />
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section
        id="benefits"
        className="py-24 relative overflow-hidden bg-white"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold font-serif text-gray-900 mb-8">
                Complete Control <br /> Over Your Operations
              </h2>
              <div className="space-y-8">
                <div className="flex gap-6 group">
                  <div className="bg-gray-100 p-4 rounded-full h-fit border border-gray-200 group-hover:border-[#33B0F9] transition-colors shadow-sm">
                    <BarChart3 className="h-6 w-6 text-[#33B0F9]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2 text-gray-900 group-hover:text-[#33B0F9] transition-colors">
                      Data-Driven Decisions
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Make informed decisions based on accurate data from your
                      stations. Analyze trends and optimize performance.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6 group">
                  <div className="bg-gray-100 p-4 rounded-full h-fit border border-gray-200 group-hover:border-[#33B0F9] transition-colors shadow-sm">
                    <Fuel className="h-6 w-6 text-[#33B0F9]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2 text-gray-900 group-hover:text-[#33B0F9] transition-colors">
                      Automated Inventory
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Never worry about fuel shortages with our automated
                      tracking. precise tank level monitoring.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[500px] w-full flex items-center justify-center">
              <CardSwap
                cardDistance={40}
                verticalDistance={30}
                delay={3000}
                pauseOnHover={false}
              >
                <Card className="bg-white border border-gray-200 !w-full max-w-[500px] shadow-2xl aspect-[16/10]">
                  <Image
                    src="/local_dashboard.png"
                    alt="local_dashboard"
                    fill
                    className="w-full h-full object-cover rounded-xl opacity-90"
                    quality={100}
                  />
                </Card>
                <Card className="bg-white border border-gray-200 !w-full max-w-[500px] shadow-2xl aspect-[16/10]">
                  <Image
                    src="/local_dashboard.png"
                    alt="local_dashboard"
                    fill
                    className="w-full h-full object-cover rounded-xl opacity-90"
                    quality={100}
                  />
                </Card>
                <Card className="bg-white border border-gray-200 !w-full max-w-[500px] shadow-2xl aspect-[16/10]">
                  <Image
                    src="/local_dashboard.png"
                    alt="local_dashboard"
                    fill
                    className="w-full h-full object-cover rounded-xl opacity-90"
                    quality={100}
                  />
                </Card>
              </CardSwap>
            </div>
          </div>
        </div>
      </section>

      {/* Start CTA */}
      <section className="py-20 relative border-t border-gray-200 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold font-serif text-gray-900 mb-6">
            Ready to upgrade your station?
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Join hundreds of station owners managing their business with our
            solution.
          </p>
          <Button
            size="lg"
            className="h-16 px-10 text-xl bg-[#33B0F9] hover:bg-[#33B0F9]/90 text-white rounded-full transition-all shadow-lg hover:shadow-xl"
          >
            Get Started Now
          </Button>
        </div>
      </section>
    </main>
  );
};

const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-[#33B0F9] transition-all duration-300 group hover:-translate-y-2 shadow-sm hover:shadow-md">
      <div className="mb-6 inline-block p-4 rounded-full bg-gray-50 border border-gray-100 group-hover:shadow-[0_0_15px_rgba(51,176,249,0.2)] transition-shadow">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-[#33B0F9] transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed group-hover:text-gray-500 transition-colors">
        {description}
      </p>
    </div>
  );
};

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1641498056721-b6a8d3b1671e?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Real-Time Station Analytics",
      desc: "Visualize sales, stock, and performance metrics from anywhere, anytime with our comprehensive dashboard.",
    },
    {
      id: 2,
      image:
        "https://plus.unsplash.com/premium_photo-1661315406324-329dd27ebc34?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Cloud Reports for Owners and Operators",
      desc: "Generate detailed reports and insights to make informed decisions.",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1556742111-a301076d9d18?auto=format&fit=crop&q=80&w=2070",
      title: "Smarter Station Operations",
      desc: "Manage daily prices and monitor sales details.",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative h-[80vh] min-h-[700px] w-full overflow-hidden bg-gray-900">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
              quality={100}
            />
            {/* Lighter overlay for Light Mode feeling, or keep dark overlay for readability?
                Hero images usually need text contrast. Let's keep a dark overlay but maybe slightly lighter or different gradient.
                Actually, "Remove Dark Mode" usually refers to the page body. Hero sections often remain dark with images.
                I will lighten the overlay slightly but ensure text is white (standard for image heroes).
             */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/60 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
            <div className="max-w-3xl space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold font-serif text-white leading-tight drop-shadow-lg">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 border-l-4 border-[#33B0F9] pl-6 max-w-xl drop-shadow-md">
                {slide.desc}
              </p>
              <div className="pt-8 flex gap-4">
                <Link href="/cloud/dashboard">
                  <Button
                    size="lg"
                    className="h-14 px-8 text-lg font-bold bg-[#33B0F9] hover:bg-[#33B0F9]/90 text-white rounded-full transition-all shadow-lg hover:shadow-xl"
                  >
                    Get Started
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  size="lg"
                  className="h-14 px-8 text-lg font-bold text-black rounded-full"
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Indicators */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-[#33B0F9] w-10"
                : "bg-gray-600 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
