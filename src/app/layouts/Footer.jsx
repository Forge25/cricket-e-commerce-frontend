"use client";

import React, { useState } from "react";
import {
  ArrowDown,
  Facebook,
  Instagram,
  Youtube,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const TikTokIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [openSections, setOpenSections] = useState({
    information: true,
    quickLinks: false,
    getInTouch: false,
    policies: false,
    topBrands: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const text = "y o u r c r i c k e t p a r t n e r f o r e v e r ";

  return (
    <>
      <div className="bg-black rounded-t-2xl md:rounded-t-4xl overflow-hidden">
        <div className="bg-neutral-900 text-gray-300 pt-4 md:pt-6 px-6 md:px-12 rounded-2xl md:rounded-4xl mb-0">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 relative mt-6 md:mt-8">
              <div className="hidden lg:block absolute left-1/2 top-40 bottom-0 w-px bg-neutral-700 transform -translate-x-1/2"></div>

              <div className="hidden lg:flex absolute left-1/2 top-16 transform -translate-x-1/2 -translate-y-1/2 items-center justify-center w-32 h-32 z-10">
                <div className="relative w-full h-full">
                  <svg
                    className="w-full h-full animate-spin-slow"
                    viewBox="0 0 200 200"
                  >
                    <defs>
                      <path
                        id="circlePath"
                        d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                      />
                    </defs>
                    <text
                      fill="#9ca3af"
                      fontSize="18"
                      fontFamily="Arial, sans-serif"
                      fontWeight="600"
                      letterSpacing="5"
                    >
                      <textPath href="#circlePath" startOffset="0%">
                        {text}
                      </textPath>
                    </text>
                  </svg>

                  <div className="absolute inset-0 flex items-center justify-center bg-neutral-900 rounded-full w-16 h-16 m-auto rotate-240">
                    <ArrowDown
                      className="w-12 h-10 text-white"
                      strokeWidth={1.5}
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 md:gap-0 md:gap-x-8 lg:gap-12">
                <div>
                  <div className="border-b border-neutral-700 md:border-none">
                    <button
                      onClick={() => toggleSection("information")}
                      className="flex justify-between items-center w-full text-left py-3 md:py-0 md:pointer-events-none"
                    >
                      <h3 className="text-white md:text-gray-400 text-base md:text-lg font-semibold md:mb-3 lg:mb-4">
                        Information
                      </h3>
                      <span className="md:hidden">
                        {openSections.information ? (
                          <ChevronUp className="w-5 h-5 text-white" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-white" />
                        )}
                      </span>
                    </button>
                    <ul
                      className={`space-y-1 mb-0 md:mb-8 lg:mb-12 overflow-hidden transition-all duration-300 ${
                        openSections.information
                          ? "max-h-96 opacity-100 mb-3 md:mb-8 lg:mb-12"
                          : "max-h-0 opacity-0 md:max-h-96 md:opacity-100 md:mb-8 lg:mb-12"
                      }`}
                    >
                      <li>
                        <a
                          href="#"
                          className="hover:text-white transition-colors text-sm md:text-base block py-1"
                        >
                          About Us
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="hover:text-white transition-colors text-sm md:text-base block py-1"
                        >
                          Help
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="hover:text-white transition-colors text-sm md:text-base block py-1"
                        >
                          Contact Us
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="border-b border-neutral-700 md:border-none">
                    <button
                      onClick={() => toggleSection("quickLinks")}
                      className="flex justify-between items-center w-full text-left py-3 md:py-0 md:pointer-events-none"
                    >
                      <h3 className="text-white md:text-gray-400 text-base md:text-lg font-semibold md:mb-3 lg:mb-4">
                        Quick Links
                      </h3>
                      <span className="md:hidden">
                        {openSections.quickLinks ? (
                          <ChevronUp className="w-5 h-5 text-white" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-white" />
                        )}
                      </span>
                    </button>
                    <ul
                      className={`space-y-1 mb-0 md:mb-8 lg:mb-12 overflow-hidden transition-all duration-300 ${
                        openSections.quickLinks
                          ? "max-h-96 opacity-100 mb-3 md:mb-8 lg:mb-12"
                          : "max-h-0 opacity-0 md:max-h-96 md:opacity-100 md:mb-8 lg:mb-12"
                      }`}
                    >
                      <li>
                        <a
                          href="#"
                          className="hover:text-white transition-colors text-sm md:text-base block py-1"
                        >
                          Bat Collections
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="hover:text-white transition-colors text-sm md:text-base block py-1"
                        >
                          Protective
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="hover:text-white transition-colors text-sm md:text-base block py-1"
                        >
                          Balls & Accessories
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="hover:text-white transition-colors text-sm md:text-base block py-1"
                        >
                          Clothing
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="hover:text-white transition-colors text-sm md:text-base block py-1"
                        >
                          Juniors
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="border-b border-neutral-700 md:border-none">
                    <button
                      onClick={() => toggleSection("getInTouch")}
                      className="flex justify-between items-center w-full text-left py-3 md:py-0 md:pointer-events-none"
                    >
                      <h3 className="text-white md:text-gray-400 text-base md:text-lg font-semibold md:mb-3 lg:mb-4">
                        Get In touch
                      </h3>
                      <span className="md:hidden">
                        {openSections.getInTouch ? (
                          <ChevronUp className="w-5 h-5 text-white" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-white" />
                        )}
                      </span>
                    </button>
                    <ul
                      className={`space-y-1 mb-0 md:mb-8 lg:mb-12 overflow-hidden transition-all duration-300 ${
                        openSections.getInTouch
                          ? "max-h-96 opacity-100 mb-3 md:mb-8 lg:mb-12"
                          : "max-h-0 opacity-0 md:max-h-96 md:opacity-100 md:mb-8 lg:mb-12"
                      }`}
                    >
                      <li>
                        <a
                          href="#"
                          className="hover:text-white transition-colors text-sm md:text-base block py-1"
                        >
                          011 763 33433
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="hover:text-white transition-colors text-sm md:text-base block py-1"
                        >
                          batslk@gmail.com
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <div className="border-b border-neutral-700 md:border-none">
                    <button
                      onClick={() => toggleSection("policies")}
                      className="flex justify-between items-center w-full text-left py-3 md:py-0 md:pointer-events-none"
                    >
                      <h3 className="text-white md:text-gray-400 text-base md:text-lg font-semibold md:mb-3 lg:mb-4">
                        Policies
                      </h3>
                      <span className="md:hidden">
                        {openSections.policies ? (
                          <ChevronUp className="w-5 h-5 text-white" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-white" />
                        )}
                      </span>
                    </button>
                    <ul
                      className={`space-y-1 mb-0 md:mb-8 lg:mb-12 overflow-hidden transition-all duration-300 ${
                        openSections.policies
                          ? "max-h-96 opacity-100 mb-3 md:mb-8 lg:mb-12"
                          : "max-h-0 opacity-0 md:max-h-96 md:opacity-100 md:mb-8 lg:mb-12"
                      }`}
                    >
                      <li>
                        <a
                          href="#"
                          className="hover:text-white transition-colors text-sm md:text-base block py-1"
                        >
                          Delivery and Returns
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="hover:text-white transition-colors text-sm md:text-base block py-1"
                        >
                          Privacy Policy
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="hover:text-white transition-colors text-sm md:text-base block py-1"
                        >
                          Terms & Conditions
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="border-b border-neutral-700 md:border-none">
                    <button
                      onClick={() => toggleSection("topBrands")}
                      className="flex justify-between items-center w-full text-left py-3 md:py-0 md:pointer-events-none"
                    >
                      <h3 className="text-white md:text-gray-400 text-base md:text-lg font-semibold md:mb-3 lg:mb-4">
                        Top Brands
                      </h3>
                      <span className="md:hidden">
                        {openSections.topBrands ? (
                          <ChevronUp className="w-5 h-5 text-white" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-white" />
                        )}
                      </span>
                    </button>
                    <ul
                      className={`space-y-1 mb-0 overflow-hidden transition-all duration-300 ${
                        openSections.topBrands
                          ? "max-h-96 opacity-100 mb-3"
                          : "max-h-0 opacity-0 md:max-h-96 md:opacity-100"
                      }`}
                    >
                      <li>
                        <a
                          href="#"
                          className="hover:text-white transition-colors text-sm md:text-base block py-1"
                        >
                          Gray-Nicolls
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="hover:text-white transition-colors text-sm md:text-base block py-1"
                        >
                          SS
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="hover:text-white transition-colors text-sm md:text-base block py-1"
                        >
                          SG
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="hover:text-white transition-colors text-sm md:text-base block py-1"
                        >
                          TON
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="hover:text-white transition-colors text-sm md:text-base block py-1"
                        >
                          Mids
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="lg:pl-12 w-full lg:w-120 lg:ml-33 mt-8 lg:mt-0">
                <h2 className="text-white text-2xl md:text-4xl font-bold mb-2">
                  Find your answers?
                </h2>
                <p className="text-gray-400 text-base md:text-lg mb-6 md:mb-8 lg:mb-10">
                  Don't hesitate to contact us
                </p>

                <div className="space-y-4 md:space-y-6 lg:space-y-8 max-w-full lg:max-w-xl">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-neutral-800 border border-neutral-700 rounded-xl px-4 md:px-6 py-3 md:py-4 text-white placeholder-gray-500 focus:outline-none focus:border-neutral-600 text-sm md:text-base"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-neutral-800 border border-neutral-700 rounded-xl px-4 md:px-6 py-3 md:py-4 text-white placeholder-gray-500 focus:outline-none focus:border-neutral-600 text-sm md:text-base"
                  />
                  <textarea
                    name="message"
                    placeholder="Message"
                    rows={7}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-neutral-800 border border-neutral-700 rounded-xl px-4 md:px-6 py-3 md:py-4 text-white placeholder-gray-500 focus:outline-none focus:border-neutral-600 resize-none text-sm md:text-base"
                  />
                  <div className="flex justify-end relative top-2 md:top-3 lg:top-4">
                    <button
                      type="button"
                      onClick={handleSubmit}
                      className="bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-3 md:px-8 md:py-3 lg:px-10 lg:py-4 rounded-full transition-colors text-sm md:text-base whitespace-nowrap"
                    >
                      send message
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 relative bottom-0 lg:bottom-8 mt-8 lg:mt-0">
              <div>
                <h1 className="text-white text-4xl md:text-6xl font-bold">
                  bats.lk*
                </h1>
              </div>

              <div className="flex flex-row items-center gap-6 md:gap-8 w-auto lg:relative lg:right-100">
                <div className="flex gap-3 md:gap-4">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Facebook size={20} className="md:w-6 md:h-6" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Instagram size={20} className="md:w-6 md:h-6" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Youtube size={20} className="md:w-6 md:h-6" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <TikTokIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 md:gap-4 px-6 md:px-12 my-4">
          <p className="text-gray-400 hover:text-white transition-colors font-light text-sm md:text-base">
            Left Corner Text
          </p>

          <div className="flex flex-wrap gap-4 md:gap-6 text-xs md:text-base">
            <p className="text-gray-400 hover:text-white transition-colors font-light">
              @2025 sharkcrick
            </p>
            <p className="text-gray-400 hover:text-white transition-colors font-light">
              powered by forge
            </p>
            <p className="text-gray-400 hover:text-white transition-colors font-light">
              forge
            </p>
            <p className="text-gray-400 hover:text-white transition-colors font-light">
              forge
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
      `}</style>
    </>
  );
};

export default Footer;
