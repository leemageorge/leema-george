'use client'
import { navLinks, socialMediaIcons } from '@/data/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
     <footer className='bg-gray-900 text-gray-300 py-12 '>
      <div className='container max-w-7xl mx-auto  px-10 lg:px-6 grid md:grid-cols-[55%_45%] gap-8 md:gap-14 '>
        {/* column 1 */}
        <div className='space-y-3 w-2/3 '>
          <h2 className='font-bold text-2xl '>Leema George</h2>
          <p className='text-gray-400 font-semibold'>I build fast, modern, and user-focused web applications using React, Next.js, and modern frontend tools. Focused on performance, clean code, and delivering smooth digital experiences.</p>
          <div className="flex items-center gap-6"> 
     {
      socialMediaIcons.map((item)=>(

  
          <Link key={item.name} href={item.url} target='_blank' className='invert brightness-0'>
            <Image src={item.icon} alt={item.name} width={30} height={30} className='object-contain' />
          </Link>
        ))}
      </div>
      
        </div>
        
        {/* column 2 */}
        <div className='flex items-center  gap-20'>
               <div  className='flex flex-col gap-3 '>
          <h3 className='font-bold text-xl'>Quick Links</h3>
          {
            navLinks.map((link)=>(
              <Link key={link.name} href={link.href} className='text-gray-400 font-bold'>{link.name}</Link>
            ))
          }
        </div>
        
        {/* column 3 */}
        <div className='flex flex-col gap-3'>
          <h3 className='font-bold text-xl'>Connect Me</h3>
          {
            socialMediaIcons.map((item)=>(
              <Link key={item.name} href={item.url} target='_blank' className='capitalize font-bold text-gray-400'>{item.name}</Link>
          ))
        }

        </div>
        </div>
   
      </div>
      <div className='text-center text-md font-bold text-gray-500 mt-10 border-t border-gray-700 pt-6'>
        ©{new Date().getFullYear()} Leema George. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer