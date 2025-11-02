"use client";

import Link from "next/link";
import { useState } from "react";
import {Menu, X, Search, User, ShoppingCart} from "lucide-react";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="bg-white sticky top-0 z-50">
            <div className=" text-black max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold text-black">
                    Bat.lk
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8 font-medium">
                    <Link href="#">Bats</Link>
                    <Link href="#">Protective</Link>
                    <Link href="#">Balls & Accessories</Link>
                    <Link href="#">Clothing</Link>
                    <Link href="#">Junior</Link>
                </div>

                {/* Icons */}
                <div className="flex items-center space-x-4">
                    <Search className="w-5 h-5 cursor-pointer" />
                    <ShoppingCart className="w-5 h-5 cursor-pointer text-black hover:text-red-600 transition" />
                    <User className="w-5 h-5 cursor-pointer" />
                    <button
                        className="md:hidden"
                        onClick={() => setOpen(!open)}
                        aria-label="Toggle menu"
                    >
                        {open ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden bg-white shadow-md flex flex-col items-start px-6 py-4 space-y-2">
                    <Link href="#"><a className="text-black">Bats</a></Link>
                    <Link href="#"><a className="text-black">Protective</a></Link>
                    <Link href="#"><a className="text-black">Balls & Accessories</a></Link>
                    <Link href="#"><a className="text-black">Clothing</a></Link>
                    <Link href="#"><a className="text-black">Junior</a></Link>
                </div>
            )}
        </nav>
    );
}
