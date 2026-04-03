import AboutMe from '@/components/AboutMe'
import Hero from '@/components/Hero'
import ProjectCarousal from '@/components/ProjectCarousal'
import Skills from '@/components/Skills'
import Testimonials from '@/components/Testimonials'
import WhatIDo from '@/components/WhatIDo'
import React from 'react'

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutMe />
      <ProjectCarousal />  
      <Skills />
      <Testimonials />
    </div>
  )
}

export default Home