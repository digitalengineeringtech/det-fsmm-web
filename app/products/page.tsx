"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Wifi,
  Touchpad,
  Cloud,
  CheckCircle2,
  Zap,
  Server,
  Activity,
  BarChart3,
  Droplets,
  Settings,
  ShieldCheck,
  TrendingUp,
  HeartHandshake,
  Coins,
} from "lucide-react";
const Products = () => {
  return (
    <div className="min-h-screen px-20 bg-gray-50 text-gray-900 selection:bg-[#33B0F9] selection:text-white px-4 py-32 space-y-24">
      <div className="text-center space-y-6">
        <span className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium transition-colors focus:outline-none border-[#33B0F9]/20 bg-[#33B0F9]/10 text-[#33B0F9] mb-4">
          Our Solutions
        </span>
        <h1 className="text-5xl md:text-6xl font-bold font-serif leading-tight">
          Premium Hardware <span className="text-[#33B0F9]">&</span> Software
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Advanced technology designed and manufactured by Digital Engineering
          Tech Ltd to streamline your fuel station operations.
        </p>
      </div>

      {/* Real-Time FMS Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center justify-center bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#33B0F9]/10 to-transparent rounded-full blur-3xl -mr-32 -mt-32" />
        <div className="relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#33B0F9]/10 text-[#33B0F9] text-sm font-semibold border border-[#33B0F9]/20">
            <Activity className="w-4 h-4" />
            <span>Our Iconic Product</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-gray-900 leading-tight">
            Real-Time Fuel Station <br />
            <span className="text-[#33B0F9]">Management System</span>
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            Based on a Wireless Network System, seamlessly connecting with your
            fuel dispensers to control nozzles and provide direct views of each
            nozzle's information. Manage your operations accurately and easily.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#33B0F9]/10 flex items-center justify-center text-[#33B0F9]">
                <BarChart3 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Sales Details</h4>
                <p className="text-sm text-gray-500 mt-1">
                  Easily view daily, weekly, and monthly fuel sales.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#33B0F9]/10 flex items-center justify-center text-[#33B0F9]">
                <Droplets className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Fuel Tracking</h4>
                <p className="text-sm text-gray-500 mt-1">
                  Search balance and import history by fuel type.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#33B0F9]/10 flex items-center justify-center text-[#33B0F9]">
                <Settings className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  Price Adjustments
                </h4>
                <p className="text-sm text-gray-500 mt-1">
                  Change daily fuel prices easily per fuel type.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#33B0F9]/10 flex items-center justify-center text-[#33B0F9]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">High Accuracy</h4>
                <p className="text-sm text-gray-500 mt-1">
                  Precise, real-time control and monitoring.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full h-full min-h-[400px] flex items-center justify-center lg:justify-end z-10 mt-8 md:mt-0">
          {/* Decorative elements representing the FMS dashboard */}
          <div className="relative w-full max-w-md aspect-[4/3] bg-gradient-to-tr from-slate-900 to-slate-800 rounded-2xl shadow-2xl border border-slate-700 overflow-hidden flex flex-col hover:shadow-[#33B0F9]/20 transition-shadow duration-500">
            <div className="h-8 bg-slate-950 flex items-center px-4 gap-2 border-b border-slate-800">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
            </div>
            <div className="p-6 flex-1 flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <div className="w-1/3 h-4 bg-slate-700/50 rounded-full" />
                <div className="w-8 h-8 rounded-full bg-[#33B0F9]/20 flex items-center justify-center">
                  <Activity className="w-4 h-4 text-[#33B0F9]" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/20 mb-3 flex items-center justify-center text-blue-400">
                    <Droplets className="w-4 h-4" />
                  </div>
                  <div className="w-full h-2 bg-slate-700 rounded-full mb-2" />
                  <div className="w-2/3 h-2 bg-slate-700 rounded-full" />
                </div>
                <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                  <div className="w-8 h-8 rounded-lg bg-green-500/20 mb-3 flex items-center justify-center text-green-400">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div className="w-full h-2 bg-slate-700 rounded-full mb-2" />
                  <div className="w-1/2 h-2 bg-slate-700 rounded-full" />
                </div>
              </div>
              <div className="flex-1 bg-slate-800/50 rounded-xl border border-slate-700/50 p-4 relative overflow-hidden flex items-end">
                <div className="absolute inset-0 bg-gradient-to-t from-[#33B0F9]/10 to-transparent" />
                {/* Fake chart lines */}
                <svg
                  className="absolute inset-x-0 bottom-0 w-full h-[80%] opacity-80"
                  preserveAspectRatio="none"
                  viewBox="0 0 100 100"
                >
                  <path
                    d="M0,100 L0,60 Q20,80 40,40 T80,30 L100,50 L100,100 Z"
                    fill="rgba(51,176,249,0.15)"
                  />
                  <path
                    d="M0,60 Q20,80 40,40 T80,30 L100,50"
                    fill="none"
                    stroke="#33B0F9"
                    strokeWidth="2.5"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust & Statistics Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center flex flex-col justify-center gap-2 hover:border-[#33B0F9]/30 transition-colors group cursor-default">
          <div className="text-3xl md:text-4xl font-bold text-[#33B0F9] font-serif group-hover:scale-110 transition-transform">
            2+
          </div>
          <div>
            <div className="text-sm font-semibold text-gray-900">
              Years of Refining
            </div>
            <div className="text-xs text-gray-500 mt-0.5">Fuel Management</div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center flex flex-col justify-center gap-2 hover:border-[#33B0F9]/30 transition-colors group cursor-default">
          <div className="text-3xl md:text-4xl font-bold text-[#33B0F9] font-serif group-hover:scale-110 transition-transform">
            30+
          </div>
          <div>
            <div className="text-sm font-semibold text-gray-900">Trusted</div>
            <div className="text-xs text-gray-500 mt-0.5">Fuel Stations</div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center flex flex-col items-center justify-center gap-2 hover:border-[#33B0F9]/30 transition-colors group cursor-default">
          <div className="w-12 h-12 rounded-full bg-rose-50 flex items-center justify-center group-hover:bg-rose-100 transition-colors">
            <HeartHandshake className="w-6 h-6 text-rose-500 group-hover:scale-110 transition-transform" />
          </div>
          <div className="text-sm font-semibold text-gray-900 mt-1">
            Customers' Favorite
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center flex flex-col items-center justify-center gap-2 hover:border-[#33B0F9]/30 transition-colors group cursor-default">
          <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center group-hover:bg-emerald-100 transition-colors">
            <Coins className="w-6 h-6 text-emerald-500 group-hover:scale-110 transition-transform" />
          </div>
          <div className="text-sm font-semibold text-gray-900 mt-1">
            Cost Efficient
          </div>
        </div>
      </div>

      {/* Wireless Dongle Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 items-center justify-center">
        <div className="col-span-2 space-y-6 md:px-20">
          <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-[#33B0F9]/10 text-[#33B0F9] border border-[#33B0F9]/20">
            <Wifi className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-bold font-serif text-gray-900">
            Wireless Dongle
          </h2>
          <h3 className="text-xl font-medium text-[#33B0F9]">
            Real-Time Dispenser Control
          </h3>
          <p className="text-gray-600 leading-relaxed text-lg">
            The Wireless Dongle is designed and manufactured by engineers from
            Digital Engineering Tech Ltd in Myanmar. It serves as a
            communication controller that connects wirelessly with the POS
            Server, enabling control over the dispenser, data acquisition, and
            the adjustment of set prices. It facilitates these tasks through
            seamless communication and management.
          </p>
          <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-[#33B0F9] transition-colors shadow-sm">
            <h4 className="font-semibold mb-6 flex items-center gap-3 text-gray-900">
              <Zap className="w-5 h-5 text-[#33B0F9]" />
              Compatible Brands
            </h4>
            <div className="flex flex-wrap gap-2">
              {[
                "Lanfeng",
                "Dong Hwa Prime",
                "Tatsuno",
                "HongYang",
                "Red Star",
                "& others",
              ].map((brand) => (
                <span
                  key={brand}
                  className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium transition-colors border-gray-300 bg-gray-50 text-gray-700 hover:text-[#33B0F9] hover:border-[#33B0F9]"
                >
                  {brand}
                </span>
              ))}
            </div>
            <p className="mt-6 text-sm text-gray-500">
              Supports dispensers ranging from 1 to 8 nozzles.
            </p>
          </div>
        </div>
        <div className="col-span-1 flex justify-center">
          <div className="relative w-full max-w-sm aspect-square bg-gradient-to-br from-primary/5 to-blue-500/5 rounded-3xl flex items-center justify-center border border-primary/10 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
            <Wifi className="w-48 h-48 text-primary/20 absolute animate-pulse" />
            <Wifi className="w-32 h-32 text-primary relative z-10" />
          </div>
        </div>
      </div>

      {/* Touch Controller Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center justify-center">
        <div className="col-span-1 flex justify-center">
          <div className="relative w-full max-w-sm aspect-square bg-gradient-to-bl from-[#33B0F9]/5 to-blue-500/5 rounded-3xl flex items-center justify-center border border-[#33B0F9]/10 shadow-[0_0_50px_rgba(51,176,249,0.1)] overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(51,176,249,0.1),transparent_70%)]" />
            <Touchpad className="w-48 h-48 text-[#33B0F9]/20 absolute animate-pulse" />
            <Touchpad className="w-32 h-32 text-[#33B0F9] relative z-10 drop-shadow-[0_0_15px_rgba(51,176,249,0.5)]" />
          </div>
        </div>
        <div className="col-span-2 space-y-6 md:px-20">
          <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-[#33B0F9]/10 text-[#33B0F9] border border-[#33B0F9]/20">
            <Touchpad className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-bold font-serif text-gray-900">
            Touch Controller
          </h2>
          <h3 className="text-xl font-medium text-[#33B0F9]">
            Innovative Fuel Station Operations
          </h3>
          <p className="text-gray-600 leading-relaxed text-lg">
            The Touch Controller, designed and manufactured by engineers from
            Digital Engineering Tech Ltd in Myanmar, allows for control of the
            dispenser using a key card. It enables preset operations and the
            input of data such as vehicle number, vehicle type, payment type,
            and member card details, all of which can be managed through a touch
            screen interface.
          </p>
          <ul className="space-y-4">
            {[
              "Manage single dispenser with up to 8 nozzles",
              "Wireless connection to POS Server",
              "Data retrieval and transmission",
              "Smart controller functionality",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#33B0F9] flex-shrink-0" />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Cloud Service Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center justify-center">
        <div className="col-span-2 space-y-6 md:px-20">
          <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-[#33B0F9]/10 text-[#33B0F9] border border-[#33B0F9]/20">
            <Cloud className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-bold font-serif text-gray-900">
            Cloud Service
          </h2>
          <h3 className="text-xl font-medium text-[#33B0F9]">
            Real-Time Data & Report Management
          </h3>
          <p className="text-gray-600 leading-relaxed text-lg">
            The Cloud Service enables users to view records, retrieve data, and
            manage accounts through a website via the internet. Currently, it
            focuses on generating reports and ensuring accuracy in real-time
            systems. The service is designed to provide convenient and
            user-friendly access, supporting smooth operations.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Card className="bg-white border border-gray-200 shadow-none hover:border-[#33B0F9] transition-colors">
              <CardHeader>
                <CardTitle className="text-lg text-gray-900">
                  Real-Time Access
                </CardTitle>
                <CardDescription className="text-gray-500">
                  View records and manage accounts anywhere
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-white border border-gray-200 shadow-none hover:border-[#33B0F9] transition-colors">
              <CardHeader>
                <CardTitle className="text-lg text-gray-900">
                  Seamless Updates
                </CardTitle>
                <CardDescription className="text-gray-500">
                  Free incremental enhancements and alerts
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
          <p className="text-sm text-gray-500 pt-4">
            Includes control over dispenser nozzles, price adjustments, and
            alert systems for fuel overflows or excessive sales.
          </p>
        </div>
        <div className="col-span-1 flex justify-center">
          <div className="relative w-full max-w-sm aspect-square bg-gradient-to-tr from-[#33B0F9]/5 to-cyan-500/5 rounded-3xl flex items-center justify-center border border-[#33B0F9]/10 shadow-[0_0_50px_rgba(51,176,249,0.1)] overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(51,176,249,0.2),transparent_70%)]" />
            <Server className="w-48 h-48 text-[#33B0F9]/20 absolute animate-pulse hover:scale-105 transition-transform duration-1000" />
            <Cloud className="w-32 h-32 text-[#33B0F9] relative z-10 drop-shadow-[0_0_15px_rgba(51,176,249,0.5)]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
