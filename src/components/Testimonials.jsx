"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { Autoplay, EffectCards } from "swiper/modules";
import { feedback } from "@/data/data";
import { Quote,ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
const Testimonials = () => {
  return (
    <section className="relative py-36 bg-black overflow-hidden ">
      <div className="absolute w-100 h-100 top-10 left-10 bg-cyan-500/20 blur-[120px]" />
      <div className="absolute w-100 h-100 bottom-10 right-10 bg-purple-500/20 blur-[120px]" />
      <div className="container mx-auto  px-10 lg:px-6 ">
        <div className="absolute -top-30 left-20 bg-cyan-400 w-70 h-70 rotate-30 rounded-xl opacity-10"></div>
        <div className="text-center mb-30 relative">
          <Quote
            size={80}
            className=" absolute -top-30 left-10  text-cyan-400 opacity-40  "
          />
           
          <motion.h2 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: false }}
          className={`text-2xl  md:text-5xl text-transparent font-serif capitalize [-webkit-text-stroke:1px_rgba(255,255,255,1)] mb-6 shadow-[0_1px_0_rgba(255,255,255,0.1)]`}>
            
            Building trust through successful project delivery
          </motion.h2>
          <motion.p
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: false }}
          className="text-xl md:text-2xl text-white/80 italic">
            Focused on delivering quality, performance, and real results →
          </motion.p>
          <Quote
            size={80}
            className=" absolute -bottom-30 right-10 text-cyan-400 opacity-40  "
          />
        </div>
        <div className="flex items-center justify-center" >
            <div className="w-full lg:w-3/4 h-auto">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards,Autoplay]}
          className="mySwiper"
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
           
          }}
        >
          {feedback.map((item, index) => (
            <SwiperSlide key={index} className="space-y-12">
                {({isActive})=>(
                   <div className="h-auto w-full lg:w-auto  p-10 rounded-2xl bg-white/5 backdrop-blur-xl mb-6 border border-white/10 flex flex-col justify-center items-center  ">       
                 <p className={`text-xl  text-gray-300 transition-all duration-500 ${isActive ? "opacity-100":"opacity-0"} `} > {item.feedback} </p>
                <h2 className={`text-2xl self-end leading-relaxed text-center  font-black transition-all duration-500 ${isActive ? "text-white opacity-100":"opacity-0"} `} > ──── {item.project} ───  </h2>
              
             </div>
                  
                )}
             
            </SwiperSlide>
          ))}
        </Swiper>
        </div>
        <div className="absolute -bottom-30 right-20 bg-cyan-400 w-70 h-70 rotate-30 rounded-xl opacity-10"></div>
        </div>  
      </div>
    </section>
  );
};

export default Testimonials;
 