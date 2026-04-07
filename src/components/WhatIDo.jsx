import { whatIdo } from "@/data/data";
import Image from "next/image";
import React from "react";
import  { motion } from "framer-motion";

const WhatIDo = () => {
  return (
    <div className="overflow-hidden py-10 text-white ">
      <div className="container mx-auto px-10 lg:px-6"
    >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {whatIdo.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                initial={{ opacity: 0, rotate: 10,scale:0.9 }}
      whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center  gap-6 rounded-[40px] bg-linear-to-br from-[#2d4795] to-[#1b2a6c] 
                shadow-[5px_5px_7px_#060d23,-5px_-5px_7px_#081335] px-2 py-6 "
                key={index}
              >
                <div className="flex items-center justify-center gap-2 rounded-[40px] bg-linear-to-br from-[#2d4795] to-[#1b2a6c]
                shadow-[5px_5px_7px_#060d23,-5px_-5px_7px_#081335] ml-5 px-6 py-3 ">
                  <Icon />
                </div>
                <span className="text-white capitalize text-xl font-bold">{item.title}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;
             