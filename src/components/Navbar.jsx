"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "../../public/logo.png";
import { navLinks } from "@/data/data";
import Link from "next/link";
import { MenuIcon, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.div
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-blue-950/20 backdrop-blur-lg border-b border-purple-500"
    >
      <div className="max-w-7xl mx-auto px-2 lg:px-6">
        <div className="flex items-center justify-between">
          
          {/* LOGO */}
          <Link href={"/"}>
            <Image
              src={logo}
              alt="logo"
              className="w-20 brightness-0 invert cursor-pointer"
            />
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex text-white items-center gap-6">
            {navLinks.map((link, index) => (
              <Link key={index} href={link.href}>
                <span className="relative text-lg tracking-wider uppercase font-bold group cursor-pointer">
                  {link.name}
                  {/* 🔥 underline animation */}
                  <span className="absolute left-0 -bottom-1 w-0 h-1 bg-cyan-400 transition-all duration-700 group-hover:w-full"></span>
                     <span className="absolute right-0 -bottom-1 w-0 h-1 bg-cyan-400 transition-all duration-700 group-hover:w-full"></span>
                </span>
              </Link>
            ))}
          </div>

          {/* CTA BUTTON */}
          <Link
            href="tel:+919633443047"
            className="hidden lg:inline-block text-white text-md px-6 py-2 bg-linear-to-br from-purple-400 to-cyan-400 rounded-xl uppercase"
          >
            connect me
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white lg:hidden"
          >
            {isMenuOpen ? <X /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* 📱 MOBILE MENU ANIMATION */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-linear-to-br from-purple-400/20 to-cyan-400/20 flex flex-col items-center justify-center py-10 gap-6"
          >
            {navLinks.map((link, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  onClick={() => setIsMenuOpen(false)}
                  href={link.href}
                  className="text-white text-3xl"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}

            <a
              href="tel:+919633443047"
              className="md:hidden text-white text-lg px-6 py-2 bg-gradient-to-br from-purple-400 to-cyan-400 rounded-xl uppercase"
            >
              Let's work together
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Navbar;