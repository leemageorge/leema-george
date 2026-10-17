"use client";

import { ChevronRight } from "lucide-react";
import about from "../assets/about1.webp";
import Image from "next/image";
import WhatIDo from "./WhatIDo";
import { Caveat, Luckiest_Guy } from "next/font/google";
import { motion } from "framer-motion";
import Link from "next/link";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const luckiest = Luckiest_Guy({
  subsets: ["latin"],
  weight: ["400"],
});
const AboutMe = () => {
  return (
    <div className="relative parallax-bg overflow-hidden min-h-screen flex items-center py-16">
      <div className="absolute inset-0 bg-linear-to-br from-blue-950/95 via-black/80 to-cyan-95/90 z-0" />
      <div className="absolute w-48 h-48 rounded-full bg-cyan-100/5  top-32 right-48 " />
      <div className="absolute w-72 h-72 rounded-full bg-cyan-300/5  -top-32 left-38 " />
      <div className="relative z-10 container max-w-7xl px-10 lg:px-6 mx-auto  ">
        <div className="items-center">
          <motion.div
            className="text-white space-y-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false }}
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-400 text-center">
              EXPLORE MY WORK
            </p>
            <h2
              className={`${caveat.className} text-3xl text-white md:text-4xl font-bold italic text-center mb-10`}
            >
              About Me
            </h2>
{/* 
            <h3 className="text-lg md:text-5xl text-transparent font-serif [-webkit-text-stroke:1px_rgba(34,211,238,1)] leading-loose tracking-[0.15em] text-center">
              Turning Passion into Profession
            </h3> */}

            <p className="text-white/70 leading-10 italic  text-xl">
              I'm Leema George, a passionate Frontend Developer who loves
              turning ideas into engaging digital experiences. I build modern,
              responsive web applications using React, Next.js, JavaScript, and
              Tailwind CSS, with a focus on clean code, performance, and
              user-friendly design. My journey from homemaker to web developer
              has taught me persistence, adaptability, and the value of
              continuous learning. I'm excited to contribute my skills,
              collaborate with a team, and grow through meaningful projects.
             Driven by passion. Focused on growth. Ready to build what's
              next.
              <a
                href="/about"
                target="_blank"
                className="inline-flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity duration-300 "
              >
                <span className="text-white font-medium cursor-pointer ">
                  View more
                </span>
                <ChevronRight className="text-white" />
              </a>
            </p>
          </motion.div>
        </div>
        <WhatIDo />
       <div className="space-y-5 mt-10">
         <h3 className="text-cyan-300 font-bold text-center text-2xl capitalize ">Passionate about code Focused on growth</h3>
<p className="text-white text-center text-lg ">Ready to build meaningful digital experiences</p>
       </div>
      </div>
    </div>
  );
};

export default AboutMe;
