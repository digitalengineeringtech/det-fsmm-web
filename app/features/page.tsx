"use client";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Monitor,
  FileText,
  Wifi,
  Bell,
  RefreshCw,
  Layers,
  ShieldCheck,
  BarChart3,
  TabletSmartphone,
  Eye,
  Flag,
  Heart,
} from "lucide-react";
import Image from "next/image";

const Features = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 selection:bg-[#33B0F9] selection:text-white px-4 py-32 space-y-24">
      {/* Header / History Section */}
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-white border-b border-gray-200 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-white z-0" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#33B0F9]/5 rounded-full blur-[120px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#33B0F9] uppercase tracking-widest text-sm font-semibold mb-4 block">
              Features
            </span>
            <h1 className="text-5xl md:text-6xl font-bold font-serif text-gray-900 mb-6 drop-shadow-sm">
              Comprehensive Control
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Explore the advanced capabilities of our Cloud POS system,
              designed to give you total oversight and control.
            </p>
          </div>
        </div>
      </section>

      {/* Main Feature Highlight */}
      <div className="relative lg:w-[80%] mx-auto">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-2xl">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500 via-transparent to-transparent"></div>
          <div className="relative grid md:grid-cols-2 gap-8 items-center p-8 md:p-16">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/20 text-blue-400">
                  <Monitor className="h-6 w-6" />
                </div>
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/20 text-blue-400">
                  <TabletSmartphone className="h-6 w-6" />
                </div>
              </div>
              <h2 className="text-3xl font-bold">Comprehensive Dashboard</h2>
              <ul className="space-y-4">
                {[
                  "Real-time Live Data Visualization",
                  "Instant Tank Level Monitoring",
                  "Active Nozzle Status",
                  "Remote Price Adjustment Capabilities",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-slate-300"
                  >
                    <ShieldCheck className="w-5 h-5 text-green-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <Image
          src="/sk_mobile_crop.png"
          alt="FMS Mobile App"
          className="z-20 absolute -top-[100px] right-20 [-webkit-mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)] [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)]"
          height={370}
          width={370}
          quality={100}
        />
      </div>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            icon: FileText,
            title: "Real-Time Reports",
            desc: "Generate accurate reports based on real-time data to ensure transparency and accountability.",
          },
          {
            icon: Wifi,
            title: "Wireless Dispenser Control",
            desc: "Seamlessly control dispensers wirelessly, including brand compatibility with Tatsuno, HongYang, and more.",
          },
          {
            icon: Bell,
            title: "Smart Alerts",
            desc: "Receive instant notifications for fuel overflows, excessive sales, or irregular activities.",
          },
          {
            icon: RefreshCw,
            title: "Seamless Updates",
            desc: "Enjoy free, incremental software updates that enhance functionality without disrupting operations.",
          },
          {
            icon: Layers,
            title: "Multi-Tank Management",
            desc: "Monitor and manage adjustment protocols for multiple tanks with ease and precision.",
          },
          {
            icon: ShieldCheck,
            title: "Secure Access",
            desc: "Role-based access control and secure login ensure only authorized personnel can manage critical data.",
          },
        ].map((feature, i) => (
          <Card
            key={i}
            className="group bg-white border-gray-200 hover:border-[#33B0F9] hover:shadow-lg transition-all duration-300 overflow-hidden relative"
          >
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <feature.icon className="w-24 h-24 text-[#33B0F9]" />
            </div>
            <CardHeader>
              <div className="w-14 h-14 rounded-2xl bg-gray-50 border border-gray-200 flex items-center justify-center text-[#33B0F9] mb-4 group-hover:scale-110 transition-transform group-hover:shadow-md">
                <feature.icon className="w-7 h-7" />
              </div>
              <CardTitle className="text-xl text-gray-900 group-hover:text-[#33B0F9] transition-colors">
                {feature.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base text-gray-600 group-hover:text-gray-500 transition-colors leading-relaxed">
                {feature.desc}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Features;
