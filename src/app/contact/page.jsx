"use client"
import Image from "next/image";
import React, { useState } from "react";
import handshake from "../../assets/handshakebg.png";
import { Mail, Map, Phone } from "lucide-react";
import {Luckiest_Guy } from "next/font/google";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const luckiest = Luckiest_Guy({
  subsets: ["latin"],
  weight: ["400"],
});

const ContactPage = () => {
  const[name,setName] = useState("")
  const[email,setEmail] = useState("")
  const[phone,setPhone] = useState("")
  const[message,setMessage] = useState("")

  const[showDialogue,setShowDialogue] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    
    const templateParams = {
      from_name: name,
      from_email: email,
      from_phone: phone,
      to_name: "Leema George",
      message: message,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
       .then((response)=>{
        console.log("Email sent successfully!", response);
        setShowDialogue(true)
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
       })
       .catch((error)=>{
        message.error("Failed to send email. Please try again later.");
       })

  }

  return (
    <div className="min-h-screen bg-linear-to-br p-6  from-cyan-900/90  via-black to-cyan-900/90 overflow-hidden flex items-center justify-center pt-120 lg:pt-96 pb-40">
      <div className="relative container max-w-7xl px-10 py-24 lg:px-16 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-black/10 backdrop-blur-3xl border border-white/10 rounded-2xl p-8 shadow-2xl">
        <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -100 }}
            animate={{ opacity: 1,scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            viewport={{ once: false }}
         className="w-full p-5 lg:w-3/4 -mt-96 lg:-mt-125 shadow-[2px_3px_5px_#060d23,-2px_-3px_7px_#081335]  flex flex-col space-y-6 hover:shadow-[2px_3px_5px_#060d23,-2px_-3px_7px_#081335] ">
          <div className="w-48 h-48 ">
            <Image
              src={handshake}
              alt="handshake"
              className="w-full h-full object-cover rounded-2xl transition duration-500 group-hover:scale-105"
            />
          </div>
          <h2 className={`text-white text-xl lg:text-2xl font-bold uppercase tracking-widest ${luckiest.className}`}>
            Let's Build
            <span className="inline-block bg-linear-to-br from-cyan-400  to-purple-400 bg-clip-text text-transparent">{""} Something Great</span>
            </h2>
          <p className="text-white leading-7 italic">
            I’m Leema George — a web developer focused on crafting fast, modern,
            and user-centered digital experiences. Let’s collaborate and turn
            your ideas into reality.
          </p>
          <div className="text-white flex justify-start gap-4">
            <Mail />
            <span>leemageorge.job@gmail.com</span>
          </div>
          <div className="text-white flex gap-4">
            <Phone />
            <span>+91 9633443047</span>
          </div>
          <div className="text-white flex gap-4">
            <Map />
            <span>Kochi,Kerala</span>
          </div>
        </motion.div>

         <motion.div
          initial={{ opacity: 0, scale: 0.8, x: -100 }}
            animate={{ opacity: 1,scale: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            viewport={{ once: false }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl hover:shadow-blue-500/20 transition duration-500">
            <h3 className={`${luckiest.className} mb-6 bg-linear-to-br from-cyan-400 to-purple-400 bg-clip-text text-transparent text-2xl`}>Start a project</h3>
            <form className="space-y-3" onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} required
                className="bg-black/50 text-white placeholder:text-white/50 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400 w-full rounded-lg px-4 py-3"/>
                <input type="email"  placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} required
                className="bg-black/50 text-white placeholder:text-white/50 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400 w-full rounded-lg px-4 py-3"/>
                <input type="text"  placeholder="Phone" value={phone} onChange={(e)=>setPhone(e.target.value)} required
                className="bg-black/50 text-white placeholder:text-white/50 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400 w-full rounded-lg px-4 py-3"/>
                <textarea  placeholder="Tell me about your project..." rows={5} resize="none" value={message} onChange={(e)=>setMessage(e.target.value)} required
                className="bg-black/50 text-white placeholder:text-white/50 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400 w-full rounded-lg px-4 py-3"/>
                   <div className="flex justify-center ">
            <button type="submit" className="mt-6 cursor-pointer shadow-[2px_3px_5px_#060d23,-2px_-3px_7px_#081335] hover:shadow-[2px_2px_3px_#060365,-2px_-2px_-5px_#081335] bg-white/10 border border-white/10 px-6 py-2 rounded-xl text-white capitalize font-bold hover:border-cyan-400 ">send Message</button>
            </div>
            </form>
           
         
        </motion.div>
        {
          showDialogue && (
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/50 backdrop-blur-sm flex items-center justify-center">
              <div className="bg-white/10 border border-white/10 rounded-lg p-8 shadow-lg text-center">
                <h2 className="text-2xl font-bold mb-4 text-cyan-500">Message Sent Successfully</h2>

                <p className="text-white mb-6">Thank you for reaching out! I'll get back to you as soon as possible.</p>
                <button onClick={()=>setShowDialogue(false)} className="px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-500 transition duration-300">Close</button>
              </div>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default ContactPage; 