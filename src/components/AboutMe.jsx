'use client'

import { ChevronRight } from "lucide-react";
import about from "../assets/about1.png";
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
      <div className="absolute inset-0 bg-linear-to-br from-blue-950/35 via-black/70 to-blue-950/35 z-0"></div>
      <div className="absolute w-48 h-48 rounded-full bg-white/15  top- right-48 " />
       <div className="absolute w-72 h-72 rounded-full bg-white/10  -top-32 left-38 " />
      <div className="relative z-10 container max-w-7xl px-10 lg:px-6 mx-auto  ">
       
        <div className="grid grid-cols-1 md:grid-cols-[60%_40%] gap-8 items-center">
          <motion.div className="text-white space-y-4"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false }}
          >
             <h2
              className={`${caveat.className} text-3xl text-white md:text-4xl font-bold italic`}
            >
              About Me
            </h2>

            <h3
            
              className={`text-lg md:text-3xl text-transparent font-serif [-webkit-text-stroke:1px_rgba(255,255,255,1)] leading-loose tracking-widest  `}
            >
              I build fast, high-converting websites that grow your business
            </h3>

            <p className="text-cyan-200 leading-10 italic max-w-3xl text-xl">
              Focused on creating responsive, high-performance web applications
              with clean design and seamless user experiences. I specialize in
              transforming design concepts into interactive, efficient, and
              scalable code using modern technologies like React, Next.js, and
              Tailwind CSS.I’m constantly improving by working on real-world
              projects and exploring new tools to deliver better, faster, and
              more engaging digital experiences.
              <a
                href="/about"
                target="_blank"
                className="inline-flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity duration-300"
              >
                <span className="text-white font-medium cursor-pointer ">
                  {"  "}View more
                </span>
                <ChevronRight className="text-white" />
              </a>
            </p>
          </motion.div>

          <motion.div className="relative"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: false }}
        >
            <Image
              src={about}
              alt="about"
              className="w-full h-auto rounded-lg shadow-lg "
            />
          </motion.div>
        </div>
        <WhatIDo />
      </div>
    </div>
  );
};

export default AboutMe;
          