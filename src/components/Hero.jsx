"use client";

import Image from "next/image";
import React from "react";
import herobg from "../assets/herobg1.jpg";
import { Caveat, Luckiest_Guy } from "next/font/google";
import { motion } from "framer-motion";
import Link from "next/link";
import rocket from "../assets/rocket.png";
import bulb from "../assets/bulb.png";
import { socialMediaIcons } from "@/data/data";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const luckiest = Luckiest_Guy({
  subsets: ["latin"],
  weight: ["400"],
});

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden py-10 md:py-30">
      {/* Background */}
      <Image
        src={herobg}
        alt="herobg"
        fill
        className="absolute inset-0 -z-10 object-cover"
        priority
      />
      {/* <div className="absolute bottom-0 left-2">
        <Image src={bulb} alt="bulb" width={250} height={250} />
      </div> */}
      <div className=" relative container max-w-7xl mx-auto  px-10 lg:px-6  ">
        <div className="hidden absolute bottom-0 left-9 lg:flex flex-col items-center gap-9 opacity-50 text-white">
          <div className="w-1 h-20 bg-white opacity-60"></div>

          {socialMediaIcons.map((item) => (
            <Link
              key={item.name}
              href={item.url}
              target="_blank"
              className="invert"
            >
              <Image
                src={item.icon}
                alt={item.name}
                width={35}
                height={35}
                className="object-contain"
              />
            </Link>
          ))}
          <div className="w-1 h-20 bg-white opacity-60"></div>
        </div>
        {/* LEFT CONTENT */}
        <div className="space-y-5 text-center">
          <motion.h3
            className={`${caveat.className} text-4xl md:text-6xl text-white italic`}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Hello I'm
          </motion.h3>

          <h1
            className={`${luckiest.className} text-4xl md:text-8xl uppercase text-white tracking-wider water-text`}
          >
            Leema George
          </h1>

          <motion.h3
            className="text-lg md:text-4xl font-black uppercase bg-linear-to-r from-purple-400 via-cyan-200 to-purple-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Building Fast & Modern Web Experiences
          </motion.h3>
          <motion.div
            className={`font-sans font-semibold text-gray-300 text-xl md:text-2xl space-y-2`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p>Hands-on Experience Building Web Applications</p>
            <p>React & Next.js Developer</p>
          </motion.div>
          <div className="flex flex-col sm:flex-row gap-10 justify-center pt-3 relative z-50">
            <Link
              href="https://wa.me/919633443047"
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-6 md:px-16  md:py-12 text-xl tracking-wider bg-linear-to-br from-cyan-500/60 to-purple-500/60 font-bold uppercase text-white rounded-full hover:from-cyan-600 via-75% hover:to-purple-600 transition inline-block cursor-pointer text-center"
            >
              Let’s Build Your Website
            </Link>

            {/* View Projects */}
            <Link
              href="/projects"
              target="_blank"
              className="px-12 py-6 md:px-20 md:py-12 border border-white text-xl tracking-wider text-white rounded-full font-bold uppercase transition inline-block cursor-pointer text-center bg-white/10 hover:bg-clip-text hover:text-transparent hover:bg-linear-to-br hover:from-cyan-400 hover:to-purple-400"
            >
              View My Projects →
            </Link>
          </div>
        </div>
        <div className="lg:hidden flex items-center justify-center gap-10 mt-20 opacity-60">
          <div className="w-20 h-1 bg-white "></div>
          {socialMediaIcons.map((item) => (
            <Link
              key={item.name}
              href={item.url}
              target="_blank"
              className="invert"
            >
              <Image
                src={item.icon}
                alt={item.name}
                width={50}
                height={50}
                className="object-contain"
              />
            </Link>
          ))}
          <div className="w-20 h-1 bg-white "></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;