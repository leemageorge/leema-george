'use client'
import { projectsList } from '@/data/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

const ProjectsPage = () => {
  return (
    <div className='relative py-24 bg-black overflow-hidden min-h-screen '>
      <div className='absolute inset-0 bg-linear-to-br from-cyan-900/90 via-black  to-cyan-900/90'></div>
        <div className='container max-w-7xl px-10 lg:px-6 mx-auto relative z-10 '>
             <motion.h2 className='text-5xl lg:text-7xl font-bold uppercase text-gray-400 tracking-widest text-center' initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
               Projects
             </motion.h2>
               <motion.p 
               initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5 }}
                viewport={{once:false}}
               className="text-center text-gray-400 italic mt-4 text-md lg:text-xl">
          Real work Real performance Real results.
        </motion.p>
            <div className='space-y-16 mt-16 '>
               {projectsList.map((project,index)=>(
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-10' key={index} >
                    <motion.div className='relative group'
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: false }}
                    >
                    <Image src={project.image} alt={project.title} className='w-full h-full object-cover rounded-2xl transition duration-500 group-hover:scale-105'/>
                    <div className='absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl'></div>
                   </motion.div>
                   <motion.div className='space-y-4'
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: false }}
                   >
                    <h3 className=' uppercase text-2xl font-bold text-cyan-500'>{project.title}</h3>
                    <p className='text-gray-200 text-xl italic'>{project.desc}</p>
                    <div>
                      {project.tech.map((tech,index)=>(
                        <span key={index} className='text-white bg-white/10 px-4 py-2 border border-white/10 rounded-2xl mr-5 font-bold'>{tech}</span>
                      ))}
                    </div>
                    <ul className='text-gray-400 text-sm space-y-1 list-disc list-inside pt-2'>
                        {project.highlights.map((highlight,index)=>(
                          <li key={index} className='text-white/60'>{highlight}</li>
                        ))}
                    </ul>
                   <Link href={project.link} target='_blank' className='text-white border border-cyan-400 px-6 py-3 rounded-2xl uppercase font-bold  shadow-[2px_3px_5px_#060d23,-2px_-3px_7px_#081335]  hover:shadow-[2px_2px_3px_#060365,-2px_-2px_-5px_#081335] transition-colors duration-300'>
                     view Projects
                   </Link>
                   </motion.div>
                </div>
             
               ))}
            </div>
        </div>
    </div>
  )
}

export default ProjectsPage  