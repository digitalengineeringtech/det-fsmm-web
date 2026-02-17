"use client";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Milestone,
  Flag,
  Eye,
  Heart,
  Zap,
  Globe,
  Building,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import LogoLoop from "@/components/LogoLoop";

const About = () => {
  const partnerImages = [
    { src: "/kyaw_san.png", alt: "Kyaw San", href: "#" },
    { src: "/shwe_sin_set_kyar.png", alt: "Shwe Sin Set Kyar", href: "#" },
    { src: "/akw.png", alt: "AKW", href: "#" },
    { src: "/atk.png", alt: "ATK", href: "#" },
    { src: "/dg.png", alt: "DG", href: "#" },
    { src: "/kyaw_kyar.png", alt: "Kyaw Kyar", href: "#" },
    { src: "/linn.png", alt: "Linn", href: "#" },
    { src: "/sein.png", alt: "Sein", href: "#" },
    { src: "/shwe_pha_lar.png", alt: "Shwe Pha Lar", href: "#" },
    { src: "/zion.png", alt: "Zion", href: "#" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 selection:bg-[#33B0F9] selection:text-white px-4 py-32 space-y-24">
      {/* Header / History Section */}
      <div className="space-y-6 max-w-4xl mx-auto text-center">
        <span className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium transition-colors focus:outline-none border-[#33B0F9]/20 bg-[#33B0F9]/10 text-[#33B0F9]">
          Our Story
        </span>
        <h1 className="text-5xl md:text-6xl font-bold font-serif">
          About Our Journey
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
          Our company, initially named Digital Engineering Group, was
          established in December 2019 and later changed and registered to
          Digital Engineering Tech Ltd in November 2021. We offer a variety of
          services with a primary focus on IOT Engineering and other IT
          services. Throughout our journey, our company has achieved several
          significant milestones.
        </p>
      </div>

      {/* Vision, Mission, Values Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="bg-white border border-gray-200 hover:border-[#33B0F9] transition-all duration-300 group hover:shadow-lg">
          <CardHeader>
            <Eye className="w-10 h-10 text-[#33B0F9] mb-4" />
            <CardTitle className="text-2xl text-gray-900">Our Vision</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-600">
            <p>
              To create a future where luxury products are seamlessly integrated
              into people's lives, providing the most comfortable and innovative
              solutions for humankind.
            </p>
            <p>
              To develop our IoT Engineering Sector and capabilities day by day,
              with a focus on innovation and excellence.
            </p>
            <p>
              To support the development of not only urban and industrial areas
              but also rural areas.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white border border-gray-200 hover:border-[#33B0F9] transition-all duration-300 group hover:shadow-lg">
          <CardHeader>
            <Flag className="w-10 h-10 text-[#33B0F9] mb-4" />
            <CardTitle className="text-2xl text-gray-900">
              Our Mission
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-600">
            <p>
              To enhance the essence of life and unparalleled comfort by using
              advanced technology.
            </p>
            <p>
              To develop innovative devices that benefit society and the
              environment by leveraging our expertise, passion, and curiosity.
            </p>
            <p>
              To fulfill human resources' standard of living more than expected
              with high-quality devices by using the latest advanced technology
              that is easy to use, reliable, high quality, and comfortable.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white border border-gray-200 hover:border-[#33B0F9] transition-all duration-300 group hover:shadow-lg">
          <CardHeader>
            <Heart className="w-10 h-10 text-[#33B0F9] mb-4" />
            <CardTitle className="text-2xl text-gray-900">
              Values & Priorities
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-600">
            <p>
              Our value at IoT Engineering is to create reliable and
              high-quality technologies based on IoT for the organizations and
              businesses that work with us. It is our priority to best meet
              their needs with expertise and to provide solutions and services
              that exceed their expectations.
            </p>
            <p>
              Our long-term concern at IoT Engineering is to constantly innovate
              for social environments, industries, and urban-rural development
              using modern and progressive methods, embracing new technological
              changes and trends.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Significant Milestones Timeline */}
      <div className="space-y-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold font-serif text-gray-900">
            Significant Milestones
          </h2>
        </div>
        <div className="relative border-l border-gray-300 md:border-l-0 md:mx-auto md:w-3/4">
          {/* Vertical line for mobile, customized specifically in the loop for desktop if needed */}
          <div className="space-y-12">
            {[
              {
                date: "January 2020",
                title: "Laser Security Alert System",
                desc: 'We proudly released the "Laser Light Security Alert System" with cloud-based alerts.',
                icon: Milestone,
              },
              {
                date: "Covid-19",
                title: "Automatic Hand Wash System",
                desc: 'We developed and released the "Automatic Hand Wash System", which was donated to necessary areas.',
                icon: Zap,
              },
              {
                date: "January 2022",
                title: "Smart Water Controller Project",
                desc: 'We released the "Smart Water Controller Project" for home/apartment and hotel use to provide efficient water management solutions.',
                icon: Globe,
              },
              {
                date: "August 2022",
                title: "Smart Room Controller Project",
                desc: 'We released the "Smart Room Controller Project" offering an intelligent control system for lighting, temperature, and entertainment.',
                icon: BUILDING_ICON,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="relative flex flex-col md:flex-row gap-8 items-start md:items-center group"
              >
                {/* Date on Desktop (Alternate) */}
                <div
                  className={`hidden md:block w-1/2 text-right pr-8 ${
                    index % 2 === 1 ? "order-last !text-left pl-8 pr-0" : ""
                  }`}
                >
                  <span className="text-lg font-bold text-[#33B0F9]">
                    {item.date}
                  </span>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 -ml-3 md:-ml-3 w-6 h-6 rounded-full border-4 border-white bg-[#33B0F9] z-10 group-hover:scale-125 transition-transform shadow-md" />

                {/* Content Card */}
                <div
                  className={`w-full md:w-1/2 pl-8 md:pl-0 ${
                    index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"
                  }`}
                >
                  <div className="md:hidden mb-2">
                    <span className="text-sm font-bold text-[#33B0F9]">
                      {item.date}
                    </span>
                  </div>
                  <Card className="bg-white border border-gray-200 hover:border-[#33B0F9] transition-all duration-300 shadow-sm hover:shadow-md">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg text-gray-900">
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Business Partners */}
      <div className="space-y-12 bg-gray-50 rounded-3xl p-8 md:p-16 border border-gray-200">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold font-serif text-gray-900">
            Trusted Partners
          </h2>
          <p className="text-gray-600">
            Collaborating with industry leaders to deliver excellence.
          </p>
        </div>
        <div
          style={{ height: "150px", position: "relative", overflow: "hidden" }}
        >
          {/* Basic horizontal loop */}
          <LogoLoop
            logos={partnerImages}
            speed={120}
            direction="left"
            logoHeight={150}
            gap={90}
            hoverSpeed={0}
            scaleOnHover
            fadeOut
            fadeOutColor="#F9FAFB"
            ariaLabel="Trusted partners"
          />
        </div>
      </div>

      {/* Contact Info Footer */}
      <div className="border-t border-gray-200 pt-16 grid md:grid-cols-4 gap-8 md:px-20">
        <div className="space-y-4">
          <h3 className="text-xl font-bold flex items-center gap-2 text-gray-900">
            <Building className="w-5 h-5 text-[#33B0F9]" />
            Sixth Kendra
          </h3>
          <p className="text-gray-600 flex items-start gap-2">
            <MapPin className="w-5 h-5 text-[#33B0F9] shrink-0 mt-1" />
            <span>
              15/1921, 12th Street, Paung Laung 2 Wardz,
              <br />
              Pyinmana, Naypyitaw, Myanmar
            </span>
          </p>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-bold flex items-center gap-2 text-gray-900">
            <Phone className="w-5 h-5 text-[#33B0F9]" />
            Contact
          </h3>
          <div className="space-y-2 text-gray-600">
            <p>+95 9 988 340004</p>
            <p>+95 9 988 340005</p>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-bold flex items-center gap-2 text-gray-900">
            <Mail className="w-5 h-5 text-[#33B0F9]" />
            Email
          </h3>
          <a
            href="mailto:admin@det-mm.com"
            className="text-[#33B0F9] hover:underline hover:text-[#33B0F9]/80"
          >
            admin@det-mm.com
          </a>
        </div>

        <div className="bg-white rounded-2xl overflow-hidden h-[300px] shadow-sm relative border border-gray-200 grayscale hover:grayscale-0 transition-all duration-500">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3754.790066327449!2d96.21248519428256!3d19.7640720293639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c8b9fc0a3b73fd%3A0xff3d2edfd768ae08!2sDigital%20Engineering%20Tech%20Ltd.!5e0!3m2!1sen!2sth!4v1767599451550!5m2!1sen!2sth"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

const BUILDING_ICON = Building; // Alias for the milestone icon usage

export default About;
