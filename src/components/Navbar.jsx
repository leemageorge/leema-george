"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "../../public/logo.png";
import { navLinks } from "@/data/data";
import Link from "next/link";
import { MenuIcon, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="fixed top-0 left-0 right-0 overflow-y--hidden z-50 bg-blue-950/20 backdrop-blur-lg border-b border-purple-500 ">
      <div className="max-w-7xl mx-auto px-2 lg:px-6 ">
        <div className="flex items-center justify-between">
       <Link href={"/"}>
         <Image
          src={logo}
          alt="logo"
          className="w-20 brightness-0 invert h-auto cursor-pointer max-w-full"
        />
       </Link>
        <div className="hidden lg:flex text-white items-center gap-6">
          {navLinks.map((link, index) => (
            <Link key={index} href={link.href}>
              <span className="text-white text-lg tracking-wider uppercase font-bold">
                {link.name}
              </span>
            </Link>
          ))}
        </div>
 
          <Link
            href="tel:+919633443047"
            className="hidden lg:inline-block text-white text-md px-6 py-2 bg-linear-to-br from-purple-400 to-cyan-400 rounded-xl uppercase cursor-pointer"
          >
            connect me
          </Link>
              <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white lg:hidden"
          >
            {isMenuOpen ? <X /> : <MenuIcon />}
          </button>
      </div>
      </div>
      {isMenuOpen && (
        <div className="bg-linear-to-br from-purple-400/20 to-cyan-400/20 flex flex-col items-center justify-center py-10 gap-6   ">
          {navLinks.map((link, index) => (
            <div
              className="flex flex-col items-center justify-center gap-6"
              key={index}
            >
              <Link
                href={link.href}
                className="text-white text-3xl"
              >
                {link.name}
              </Link>
            </div>
          ))}
          <a
            href="tel:+919633443047"
            className="md:hidden text-white text-lg px-6 py-2 bg-linear-to-br from-purple-400 to-cyan-400 rounded-xl uppercase cursor-pointer"
          >
            Let's work together
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
