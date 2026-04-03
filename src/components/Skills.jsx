import { skillCategory } from "@/data/data";
import React from "react";

const Skills = () => {
  return (
    <section className="relative bg-linear-to-br from-blue-950 via-black to-blue-950 py-18 overflow-hidden ">
      <div className="absolute top-10 left-10 w-100 h-100 bg-cyan-500/20 blur-[120px] " />
      <div className="absolute bottom-10 right-10 w-100 h-100 bg-purpel-500/20" />
      <div className="container max-w-7xl mx-auto px-10 lg:px-6 relative z-10">
        <h2
          className="
    
    text-center
    text-[50px] lg:text-[100px]
    font-serif uppercase
    text-white/20
    pointer-events-none
    select-none
    blur-[1px]
    tracking-widest
    z-0
    [-webkit-text-stroke:2px_rgba(255,255,255,0.4)]
  "
        >
          skills i have
        </h2>
        <div className="text-center mb-16">
          <p
            className={`text-xl md:text-2xl text-cyan-400 capitalize italic font-black [-webkit-text-stroke:1px_rgba(255,255,255,0.2)]`}
          >
            Technologies i use to build modern web experience
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skillCategory.map((category, index) => (
            <div
              key={index}
              className="group p-[1px] rounded-lg bg-linear-to-br from-cyan-500/30 to-purple-500/30 hover:bg-linear-to-br hover:from-cyan-500 hover:to-purple-500 transition-all duration-300 "
            >
              <div className="h-full rounded-lg bg-black/80 backdrop-blur-xl p-6 transition group-hover:scale-[1.02]">
                <h3 className="font-semibold text-xl mb-5 text-cyan-400 text-center uppercase">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3 items-center justify-center">
                  {category.items.map((item, index) => (
                    <div
                      className="px-3 py-1 bg-white/10 border border-white/20 rounded-lg hover:border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10 text-md hover:text-cyan-300 transition-all duration-500"
                      key={item}
                    >
                      {item}
                    </div>
                  ))}
                  ck
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
