"use client";

import React, { useState } from "react";
import { ArrowDown, Facebook, Instagram, Youtube } from "lucide-react";

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
      <div className="bg-grid-bg rounded-t-2xl md:rounded-t-4xl overflow-hidden">
        <div className="bg-neutral-900 text-gray-300 py-6 md:py-8 px-4 md:px-6 lg:px-8 rounded-2xl md:rounded-4xl mb-6 md:mb-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 relative mt-6 md:mt-8">
              {/*  line */}
              <div className="hidden lg:block absolute left-1/2 top-40 bottom-0 w-px bg-neutral-700 transform -translate-x-1/2"></div>

              {/* Rotating circle  */}
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

                  {/* Lucide Arrow Icon */}
                  <div className="absolute inset-0 flex items-center justify-center bg-neutral-900 rounded-full w-16 h-16 m-auto rotate-240">
                    <ArrowDown
                      className="w-12 h-10 text-white"
                      strokeWidth={1.5}
                    />
                  </div>
                </div>
              </div>

              {/* Left section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                <div>
                  <h3 className="text-gray-400 text-base md:text-lg font-semibold mb-3">
                    Information
                  </h3>
                  <ul className="space-y-2 mb-8 md:mb-12">
                    <li>
                      <a
                        href="#"
                        className="hover:text-white transition-colors text-sm md:text-base"
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-white transition-colors text-sm md:text-base"
                      >
                        Help
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-white transition-colors text-sm md:text-base"
                      >
                        Contact Us
                      </a>
                    </li>
                  </ul>

                  <h3 className="text-gray-400 text-base md:text-lg font-semibold mb-3">
                    Quick Links
                  </h3>
                  <ul className="space-y-2 mb-8 md:mb-0">
                    <li>
                      <a
                        href="#"
                        className="hover:text-white transition-colors text-sm md:text-base"
                      >
                        Bat Collections
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-white transition-colors text-sm md:text-base"
                      >
                        Protective
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-white transition-colors text-sm md:text-base"
                      >
                        Balls & Accessories
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-white transition-colors text-sm md:text-base"
                      >
                        Clothing
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-white transition-colors text-sm md:text-base"
                      >
                        Juniors
                      </a>
                    </li>
                  </ul>

                  <h3 className="text-gray-400 text-base md:text-lg font-semibold mb-3 md:mb-4 mt-8 md:mt-12">
                    Get In touch
                  </h3>
                  <ul className="space-y-2 mb-8 md:mb-0">
                    <li>
                      <a
                        href="#"
                        className="hover:text-white transition-colors text-sm md:text-base"
                      >
                        011 763 33433
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-white transition-colors text-sm md:text-base"
                      >
                        batslk@gmail.com
                      </a>
                    </li>
                  </ul>

                  <div className="pt-6 md:pt-8 mt-2 md:mt-3">
                    <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold">
                      bats.lk*
                    </h1>
                  </div>
                </div>

                <div>
                  <h3 className="text-gray-400 text-base md:text-lg font-semibold mb-3">
                    Policies
                  </h3>
                  <ul className="space-y-2 mb-8 md:mb-12">
                    <li>
                      <a
                        href="#"
                        className="hover:text-white transition-colors text-sm md:text-base"
                      >
                        Delivery and Returns
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-white transition-colors text-sm md:text-base"
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-white transition-colors text-sm md:text-base"
                      >
                        Terms & Conditions
                      </a>
                    </li>
                  </ul>

                  <div>
                    <h3 className="text-gray-400 text-base md:text-lg font-semibold mb-3">
                      Top Brands
                    </h3>
                    <ul className="space-y-2">
                      <li>
                        <a
                          href="#"
                          className="hover:text-white transition-colors text-sm md:text-base"
                        >
                          Gray-Nicolls
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="hover:text-white transition-colors text-sm md:text-base"
                        >
                          SS
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="hover:text-white transition-colors text-sm md:text-base"
                        >
                          SG
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="hover:text-white transition-colors text-sm md:text-base"
                        >
                          TON
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="hover:text-white transition-colors text-sm md:text-base"
                        >
                          Mids
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Right Contact Form */}
              <div className="w-full lg:w-100 lg:ml-50">
                <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
                  Find your answers?
                </h2>
                <p className="text-gray-400 text-base md:text-lg mb-6 md:mb-15">
                  Don't hesitate to contact us
                </p>

                <div className="space-y-6 md:space-y-8">
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
                  <div className="flex justify-end">
                    <button
                      type="button"
                      onClick={handleSubmit}
                      className="bg-red-600 hover:bg-red-700 text-white font-medium px-8 md:px-10 py-3 md:py-4 rounded-full transition-colors text-sm md:text-base"
                    >
                      send message
                    </button>
                  </div>
                </div>

                <div className="flex gap-3 md:gap-4 mt-6 md:mt-0 lg:relative lg:right-45 lg:bottom-6">
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
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 md:gap-4 px-4 md:px-6 lg:px-8 mb-6 md:mb-7">
          <p className="text-gray-400 hover:text-white transition-colors font-light text-sm md:text-base">
            Left Corner Text
          </p>

          <div className="flex flex-wrap gap-3 md:gap-4 lg:gap-6 text-xs md:text-sm lg:text-base">
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
