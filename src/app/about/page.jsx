import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import React from "react";
import Image from "next/image";
import aboutdp from "../../assets/aboutdp.png";

const AboutPage = () => {
  return (
    <div className="min-h-screen  w-full relative pt-20 ">
      <div className="absolute inset-0 z-0 text-white bg-linear-to-br from-black  to-cyan-950/90" />
      <div className="container px-4 md:px-6 mx-auto relative py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] justify-center gap-6 items-center ">
          <div className="w-100 h-100 md:h-auto mx-auto p-10 shadow-[10px_10px_20px_#0a0f1f,-10px_-10px_20px_#1a2340] rounded-full">
            <Image
              src={aboutdp}
              alt="about Image"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="shadow-[10px_10px_20px_#0a0f1f,-10px_-10px_20px_#1a2340] p-10 rounded-2xl space-y-4">
            <h2 className={` text-3xl text-transparent font-serif uppercase tracking-wider [-webkit-text-stroke:1px_rgba(255,255,255,1)]`}>About me</h2>
            <p className="text-gray-300 leading-7 text-md tracking-wider">
              I am a self-taught web developer experienced in building
              responsive and user-friendly websites using HTML, CSS, JavaScript,
              React, Next.js, and Tailwind CSS. I also have knowledge of backend
              development with Node.js, Express, and MongoDB. I focus on
              creating clean and efficient interfaces, continuously improving
              through real-world projects. I enjoy solving problems and turning
              ideas into practical digital solutions. I believe that enjoying
              what you do leads to natural growth, and I am always open to new
              challenges and opportunities to learn and improve.
            </p>
            <button className="px-16 py-8 rounded-full shadow-[10px_10px_10px_#0a0f1f,-10px_-10px_10px_#1a2340] mt-6 tracking-wider text-lg text-white font-bold uppercase transition-all duration-300">
              Let's Work Together
            </button>
            {/* <div className="w-full max-w-4xl px-4">
              <h2 className="text-3xl text-white mt-10">Education</h2>
              <div className="p-8 rounded-xl space-y-6 text-white  ">
                  Diploma in Electronics Production Technology
              </div>
              <div className="p-8 rounded-xl space-y-6 text-white  ">
                  Diploma in software Engineering
              </div>
              <div className="p-8 rounded-xl space-y-6 text-white  ">
                 Web Development Course-Udemy

              </div>
            </div> */}
          </div>
        </div>
      </div>
      <Skills />
    </div>
  );
};

export default AboutPage;  
      