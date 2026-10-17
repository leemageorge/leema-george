
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  EffectCoverflow,
  Pagination,
} from "swiper/modules";
import { Caveat } from "next/font/google";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import {
  liveprojectsList,
  demoprojectsList,
} from "@/data/data";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const ProjectCarousel = () => {
  return (
    <section
      id="projects"
      className="relative isolate overflow-hidden bg-gradient-to-br from-cyan-950 via-black to-cyan-950 py-20 md:py-28"
    >
      <div
        aria-hidden="true"
        className="dot-background absolute inset-0 z-10pointer-events-none 
        [background-image:radial-gradient(circle,rgba(34,211,238,0.4)_1px,transparent_1.5px)]
        [background-size:5px_5px]"
      />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 -z-10 h-96 w-96
        -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]"
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20 text-center"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.4em] text-cyan-400">
            MY PORTFOLIO
          </p>

          <h2
            className="text-4xl font-serif uppercase tracking-widest
            text-transparent sm:text-6xl lg:text-8xl
            [-webkit-text-stroke:1px_rgba(255,255,255,0.85)]"
          >
            Recent Projects
          </h2>

          <p
            className={`${caveat.className} mt-5 text-2xl text-white sm:text-3xl md:text-4xl`}
          >
            From Ideas to Interactive Experiences
          </p>

          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-cyan-400" />
        </motion.div>


        <section aria-labelledby="live-heading">
          <div className="mb-12 flex items-center gap-4">
            <span className="h-8 w-1 rounded-full bg-cyan-400" />

            <div>
              <h3
                id="live-heading"
                className={`${caveat.className} text-3xl font-bold text-white md:text-4xl`}
              >
                Live Projects
              </h3>

              <p className="mt-1 text-sm text-gray-400">
                Real websites built and launched
              </p>
            </div>
          </div>

          <div className="space-y-20 md:space-y-28">
            {liveprojectsList.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6 }}
                className={`grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12 ${
                  index % 2 !== 0
                    ? "md:[&>*:first-child]:order-2"
                    : ""
                }`}
              >
                {/* Website screenshot */}
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${project.title}`}
                  className="group relative block overflow-hidden rounded-2xl
                  border border-white/10 bg-white/5 p-2
                  transition duration-500 hover:border-cyan-400/50"
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-slate-900">
                    <Image
                      src={project.image}
                      alt={`${project.title} website preview`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform
                      duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                    <span
                      className="absolute bottom-4 right-4 rounded-full
                      border border-white/20 bg-black/60 px-4 py-2
                      text-xs text-white backdrop-blur-md
                      group-hover:text-cyan-300"
                    >
                      View Live Site ↗
                    </span>
                  </div>
                </Link>

                {/* Project details */}
                <div className="space-y-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
                    LIVE PROJECT / {String(index + 1).padStart(2, "0")}
                  </p>

                  <h4 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                    {project.title}
                  </h4>

                  <p className="max-w-xl text-sm leading-7 text-gray-300 sm:text-base">
                    {project.desc}
                  </p>

                  {/* {project.tech?.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-cyan-400/20
                          bg-cyan-400/5 px-3 py-1.5 text-xs text-cyan-200
                          sm:text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )} */}

                  {project.highlights?.length > 0 && (
                    <ul className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-2">
                      {project.highlights.slice(0, 4).map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm text-gray-300"
                        >
                          <span className="text-cyan-400">✦</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 rounded-full
                    bg-cyan-400 px-6 py-3 text-sm font-bold text-slate-950
                    transition duration-300 hover:bg-white"
                  >
                    Explore Project <span>↗</span>
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

       
        <section
          aria-labelledby="featured-heading"
          className="mt-28 md:mt-36"
        >
          <div className="mb-14 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-400">
              EXPLORE MY WORK
            </p>

            <h3
              id="featured-heading"
              className={`${caveat.className} text-4xl font-bold text-white md:text-5xl`}
            >
              Featured Projects
            </h3>

            <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-gray-400 sm:text-base">
              Creative ideas, practical solutions, and continuous learning.
            </p>
          </div>

          {demoprojectsList.length > 0 ? (
            <Swiper
              modules={[Autoplay, EffectCoverflow, Pagination]}
              effect="coverflow"
              grabCursor
              centeredSlides
              slidesPerView={1.1}
              spaceBetween={12}
              loop={demoprojectsList.length >= 3}
              watchSlidesProgress
              autoplay={
                demoprojectsList.length >= 2
                  ? {
                      delay: 3000,
                      disableOnInteraction: false,
                      pauseOnMouseEnter: true,
                    }
                  : false
              }
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 140,
                modifier: 1.5,
                slideShadows: false,
              }}
              pagination={{ clickable: true }}
              breakpoints={{
                640: {
                  slidesPerView: 1.6,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2.1,
                  spaceBetween: 24,
                },
                1024: {
                  slidesPerView: 2.5,
                  spaceBetween: 30,
                },
              }}
              className="featured-swiper !overflow-hidden !pb-16"
            >
              {demoprojectsList.map((project, index) => (
                <SwiperSlide key={project.title} className="h-auto">
                  {({ isActive }) => (
                    <article
                      className={`h-full overflow-hidden rounded-2xl
                      border bg-[#080e1c] transition-all duration-500
                      ${
                        isActive
                          ? "border-cyan-400/60 shadow-[0_0_35px_rgba(34,211,238,0.15)]"
                          : "border-white/10"
                      }`}
                    >
                      {/* Project image */}
                      <div className="group relative aspect-[4/3] overflow-hidden bg-slate-900">
                        <Image
                          src={project.image}
                          alt={`${project.title} project preview`}
                          fill
                          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 35vw"
                          className="object-cover transition-transform
                          duration-700 group-hover:scale-105"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                        <span
                          className="absolute left-4 top-4 rounded-full
                          border border-cyan-400/30 bg-black/60 px-3 py-1
                          text-xs font-medium text-cyan-300 backdrop-blur-md"
                        >
                          PROJECT {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      {/* Project details */}
                      <div className="p-5 sm:p-6">
                        <h4
                          className={`text-xl font-bold transition-colors sm:text-2xl ${
                            isActive ? "text-cyan-300" : "text-white"
                          }`}
                        >
                          {project.title}
                        </h4>

                        <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-400">
                          {project.desc}
                        </p>

                        {/* {project.tech?.length > 0 && (
                          <div className="mt-4 flex flex-wrap gap-2">
                            {project.tech.map((tech) => (
                              <span
                                key={tech}
                                className="rounded-full border border-white/10
                                bg-white/5 px-3 py-1 text-xs text-gray-300"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        )} */}

                        <Link
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-6 inline-flex items-center gap-2
                          text-sm font-semibold text-cyan-400
                          transition-colors hover:text-white"
                        >
                          Explore Project <span>↗</span>
                        </Link>
                      </div>
                    </article>
                  )}
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <p className="text-center text-gray-400">
              Featured projects will appear here.
            </p>
          )}
        </section>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 rounded-3xl border border-cyan-400/20
          bg-gradient-to-r from-cyan-500/10 via-white/[0.03]
          to-purple-500/10 px-6 py-10 text-center sm:px-10"
        >
          <h3 className="text-2xl font-bold text-white sm:text-3xl">
            Have a project in mind?
          </h3>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-gray-400 sm:text-base">
            Let&apos;s turn your ideas into a modern digital experience.
          </p>

          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2
            rounded-full border border-cyan-400/40 px-6 py-3
            text-sm font-semibold text-cyan-300 transition
            hover:bg-cyan-400 hover:text-slate-950"
          >
            Let&apos;s Connect <span>↗</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectCarousel;
