
export default function Home() {
  return <></>;
=======
"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { Filter, Star, Home, ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react";

const banners = [
  "/banner.jpg",
  "/banner.jpg",
  "/banner.jpg",
];

export default function AllBatsPage() {
  const bats = [
    { id: 1, name: "SS TON Smacker Elite 2024", price: 199.99, img: "/bat1.jpg" },
    { id: 2, name: "Kookaburra Kahuna 2024", price: 179.99, img: "/bat2.jpg" },
    { id: 3, name: "MRF Genius Grand 2024", price: 189.99, img: "/bat3.jpg" },
    { id: 4, name: "Gray-Nicolls Legend 2024", price: 209.99, img: "/bat4.jpg" },
  ];

  const [current, setCurrent] = useState(0);

  const prevSlide = () => setCurrent(prev => (prev === 0 ? banners.length - 1 : prev - 1));
  const nextSlide = () => setCurrent(prev => (prev === banners.length - 1 ? 0 : prev + 1));

  return (
      <>
        <Navbar />
        <div className="min-h-screen bg-white">
          <main className="bg-white max-w-9xl mx-auto px-4 pt-6 min-h-screen">

            {/* Banner Section */}
            <section className="relative overflow-hidden rounded-2xl h-[400px] mb-10">
              {/* Slide container */}
              <div
                  className="flex transition-transform duration-500 h-full"
                  style={{ transform: `translateX(-${current * 100}%)` }}
              >
                {banners.map((banner, index) => (
                    <div
                        key={index}
                        className="min-w-full h-full bg-cover bg-center relative"
                        style={{ backgroundImage: `url('${banner}')` }}
                    />
                ))}
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/10 rounded-2xl" />

              {/* Headings on left-middle */}
              <div className="absolute top-1/2 left-4 md:left-6 transform -translate-y-1/2 flex flex-col space-y-2">
                <h1 className="text-4xl md:text-5xl font-bold text-white">Get Your Gun</h1>
                <h2 className="text-xl font-extralight md:text-2xl text-white">Crafted for Players who</h2>
                <h2 className="text-xl md:text-2xl text-white">thrive on timing and precision</h2>
              </div>

              {/* Shop Now button on right-middle */}
              <button className="absolute top-1/2 right-4 h-12 md:right-6 transform -translate-y-1/2 px-6 py-2 rounded-3xl font-extralight text-white border border-white bg-transparent hover:bg-red-600 hover:border-red-600 transition">
                Shop Now
              </button>

              {/* Bottom Arrows */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-120">
                {/* Left Arrow */}
                <button
                    onClick={() => setCurrent(current === 0 ? banners.length - 1 : current - 1)}
                    className="hover:bg-white p-2 rounded-full transition"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                {/* Right Arrow */}
                <button
                    onClick={() => setCurrent(current === banners.length - 1 ? 0 : current + 1)}
                    className="hover:bg-white p-2 rounded-full transition"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>
              </div>
            </section>

            {/* Breadcrumb */}
            <p className="text-sm text-black mb-2 flex items-center gap-1">
              <a href="/" className="flex items-center gap-1 hover:underline text-black font-medium">
                <Home className="w-4 h-4" />
              </a>
              <span>/</span>
              Collections
              <span>/</span>
              All Cricket Bats
            </p>
            <h2 className="text-black text-3xl font-bold mb-6">All Cricket Bats</h2>

            {/* Filter & Sort Buttons */}
            <div className="flex justify-between items-center mb-8">
              <button className="flex items-center gap-2 bg-red-500  text-white px-4 py-2 rounded-3xl">
                <Filter className="w-4 h-4" /> Filters
              </button>
              <button className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-3xl">
                <Star className="w-4 h-4" /> Featured
              </button>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {bats.map((bat) => (
                  <div
                      key={bat.id}
                      className="border rounded-2xl p-4 hover:shadow-lg transition-all bg-white"
                  >
                    <Image
                        src={bat.img}
                        alt={bat.name}
                        width={300}
                        height={400}
                        className="rounded-lg object-contain mx-auto"
                    />
                    <h3 className="text-lg font-semibold mt-3">{bat.name}</h3>
                    <div className="flex items-center justify-between mt-1">
                      <p className="text-red-600 font-bold">${bat.price.toFixed(2)}</p>
                      <button className="p-2 rounded-full hover:bg-red-100 transition">
                        <ShoppingCart className="w-5 h-5 text-red-600" />
                      </button>
                    </div>
                  </div>
              ))}
            </div>
          </main>
        </div>
      </>
  );
}
