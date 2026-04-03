"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";

import Image from "next/image";
import { projectsList } from "@/data/data";
import { Caveat, Luckiest_Guy } from "next/font/google";
import Link from "next/link";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const luckiest = Luckiest_Guy({
  subsets: ["latin"],
  weight: ["400"],
});

const ProjectCarousel = () => {
  return (
    <div className="w-full bg-linear-to-br from-cyan-800/90 via-black to-cyan-900/90 relative py-16  ">
      <div className="container mx-auto max-w-7xl  px-10 lg:px-6 relative z-10">
        <h2
          className="
          text-center
          text-[50px] lg:text-[150px]
          font-serif uppercase
          text-transparent 
          pointer-events-none
          select-none
          blur-[1px]
          tracking-widest
          z-0
          [-webkit-text-stroke:2px_rgba(255,255,255,0.4)]">
          my works
        </h2>
        <h2
          className={`${caveat.className} mb-10 text-center text-2xl md:text-4xl text-white`}
        >
          Looking for creative and responsive web design? I can help bring your
          ideas to life.
         </h2>
        <Swiper
          modules={[Autoplay, EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          slidesPerView={1}
          breakpoints={{
            768:{
              slidesPerView: 2
            },
            1024:{
              slidesPerView: 3
            }
          }}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: -50,
            depth: 200,
            modifier: 2,
            slideShadows: false,
          }}
          className=" mx-auto p-10 w-full h-auto rounded-2xl "
        >
          {projectsList.map((project, index) => (
            <SwiperSlide key={index}>
              {({ isActive }) => (
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`shadow-[5px_5px_7px_#060d23,-5px_-5px_7px_#081335] rounded-b-xl bg-linear-to-br from-[#2d4795] to-[#1b2a6c] pb-3
                  transition-all duration-500 rounded-full overflow-hidden
                  ${
                    isActive
                      ? "scale-110 opacity-100 z-10"
                      : "scale-90 opacity-40"
                  }
                `}
                >
                  <div className="relative  h-64">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover rounded-5xl "
                    />
                  </div>
                    <h2 className="text-gray-400">{project.desc}</h2>
                  <div className="p-4 text-white text-center text-xl upper bg-white/5 backdrop-blur-md">
                    Click to view
                  </div>
                </Link>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProjectCarousel;
 