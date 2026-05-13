"use client";

import { Building, Phone, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 selection:bg-[#33B0F9] selection:text-white px-4 py-32">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header Section */}
        <div className="text-center space-y-6">
          <span className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium transition-colors focus:outline-none border-[#33B0F9]/20 bg-[#33B0F9]/10 text-[#33B0F9] mb-4">
            Get in Touch
          </span>
          <h1 className="text-5xl md:text-6xl font-bold font-serif leading-tight">
            Contact <span className="text-[#33B0F9]">Us</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Have questions about our Real-Time Fuel Station Management System or
            other IoT products? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Information */}
          <div className="space-y-10">
            <div>
              <h2 className="text-3xl font-bold font-serif text-gray-900 mb-6">
                Let's Connect
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-8">
                Whether you're looking for innovative solutions for your
                business or have specific inquiries, our team is ready to assist
                you.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#33B0F9]/10 flex items-center justify-center text-[#33B0F9]">
                  <Building className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    Sixth Kendra Headquarters
                  </h4>
                  <p className="text-gray-600 mt-1 flex items-start gap-2">
                    <MapPin className="w-5 h-5 text-[#33B0F9] shrink-0 mt-0.5" />
                    <span>
                      15/1921, 12th Street, Paung Laung 2 Wardz,
                      <br />
                      Pyinmana, Naypyitaw, Myanmar
                    </span>
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#33B0F9]/10 flex items-center justify-center text-[#33B0F9]">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    Phone Directory
                  </h4>
                  <div className="text-gray-600 mt-1 space-y-1">
                    <p>+95 9 988 340004</p>
                    <p>+95 9 988 340005</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#33B0F9]/10 flex items-center justify-center text-[#33B0F9]">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    General Inquiries
                  </h4>
                  <p className="mt-1">
                    <a
                      href="mailto:admin@det-mm.com"
                      className="text-[#33B0F9] hover:underline hover:text-[#33B0F9]/80 transition-colors"
                    >
                      admin@det-mm.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Map Preview */}
            <div className="bg-white rounded-2xl overflow-hidden h-[250px] shadow-sm relative border border-gray-200 grayscale hover:grayscale-0 transition-all duration-500 mt-8">
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

          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 md:p-10 border border-gray-100 shadow-xl shadow-[#33B0F9]/5 relative overflow-hidden h-fit">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#33B0F9]/5 to-transparent rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Send us a message
              </h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="first-name"
                      className="text-sm font-medium text-gray-700"
                    >
                      First Name
                    </label>
                    <input
                      id="first-name"
                      type="text"
                      placeholder="John"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#33B0F9]/50 focus:border-[#33B0F9] transition-all bg-gray-50/50"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="last-name"
                      className="text-sm font-medium text-gray-700"
                    >
                      Last Name
                    </label>
                    <input
                      id="last-name"
                      type="text"
                      placeholder="Doe"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#33B0F9]/50 focus:border-[#33B0F9] transition-all bg-gray-50/50"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-700"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#33B0F9]/50 focus:border-[#33B0F9] transition-all bg-gray-50/50"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="text-sm font-medium text-gray-700"
                  >
                    Subject
                  </label>
                  <div className="relative">
                    <select
                      id="subject"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#33B0F9]/50 focus:border-[#33B0F9] transition-all bg-gray-50/50 text-gray-700 appearance-none cursor-pointer"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="fms">
                        Fuel Station Management System
                      </option>
                      <option value="support">Technical Support</option>
                      <option value="partnership">
                        Partnership Opportunities
                      </option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="How can we help you?"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#33B0F9]/50 focus:border-[#33B0F9] transition-all bg-gray-50/50 resize-none"
                    required
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#33B0F9] hover:bg-[#33B0F9]/90 text-white font-semibold rounded-xl py-6 shadow-md hover:shadow-lg transition-all group"
                >
                  Send Message{" "}
                  <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
