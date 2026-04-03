import { Figma ,Monitor, Sparkles, Zap } from "lucide-react"

export const navLinks = [
        {name:"Home", href:"/"},
        {name:"About", href:"/about"},
        {name:"Projects", href:"/projects"},
        // {name:"Testimonials", href:"/testimonials"},
        {name:"Contact", href:"/contact"},
    ]

    export const whatIdo =[
        {
            icon:Monitor,
            title:"Build responsive websites"  

        },
           {
            icon: Figma,
            title:" Convert UI/UX designs into code"  

        },
          {
            icon:Sparkles,
            title:" Create interactive web experiences"  

        },
          {
            icon:Zap,
            title:" Optimize performance and usability  "  

        },
    ]
import Starc from "../assets/starc.webp"
import Guru from "../assets/gurupavanapuram.webp"
import Mtech from "../assets/mtechlab.webp"
import Antz from "../assets/antz.png"


export const projectsList = [
  {
    title: "Starc Steel Windows & Doors",
    image: Starc,
    desc: "Responsive business website showcasing steel window and door products with a clean and structured layout.",
    tech: ["Next.js", "Tailwind CSS"],
    highlights: [
      "Responsive design",
      "Simple animations",
      "Page transitions",
      "Parallax effect",
      "SEO optimization",
      "Performance focused"
    ],
    link:"https://www.starcsteelwindow.com/"
  },
  {
    title: "Gurupavanapuram",
    image: Guru,
    desc: "Culturally inspired website with a traditional design and custom branding based on client requirements.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    highlights: [
      "Custom logo design",
      "Traditional UI",
      "Rotating Rashichakra animation",
      "Smooth animations"
    ],
    link:"https://gurupavanapuram.netlify.app/"
  },
  {
    title: "MTech Lab",
    image: Mtech,
    desc: "Modern SaaS-style website with clean layout and interactive UI elements.",
    tech: ["React.js", "Tailwind CSS", "Framer Motion"],
    highlights: [
      "Custom cursor",
      "Letter & word animations",
      "Modern SaaS design",
      "Interactive UI"
    ],
    link:'https://mtech-lab.netlify.app/'
  },
  {
    title: "Antz Media",
    image: Antz,
    desc: "Clean and responsive website designed to showcase media content in a structured way.",
    tech: ["React.js", "Tailwind CSS"],
    highlights: [
      "Responsive layout",
      "Simple UI",
      "User-friendly design"
    ],
    link:"https://antzmedia.netlify.app/"
  },
  
];

export const skillCategory = [
  {
    title: "Frontend Development",
    items: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"]
  },
  {
    title: "Backend Development",
    items: ["Node.js", "Express.js", "REST APIs", "MongoDB"]
  },
  {
    title: "Tools & Workflow",
    items: ["Git", "GitHub", "Figma", "VS Code"]
  },
  {
    title: "Core Concepts",
    items: ["Responsive Design", "UI/UX Principles", "SEO Basics"]
  }
]

export const feedback = [
    {
  project: "Starc Steel Windows and Doors",
  feedback: "“I’m really happy with how our website turned out. It looks clean and works smoothly across devices. Appreciate the effort you put into optimizing everything and making it user-friendly. The projects are shown clearly and easy to go through. Everything was done properly and delivered on time. Overall, it was a good experience working with you.”"
},
{
  project: "Gurupavanapuram",
  feedback: "“She did a great job on my website. The design looks clean and everything works properly. It was easy to communicate and make changes when needed. I liked how the final result came out. Overall, I’m really happy with it."
},
{
  project: "Antz Media",
  feedback: "“She worked on my website as part of gaining experience, but she handled everything really well. Whatever I suggested, she understood and implemented it properly. She was also punctual and completed the work on time. Overall, I had a good experience working with her.”"
},
{
  project: "MTechLab",
  feedback: "“I’m really impressed with how the MTech Lab website turned out. The design looks modern and clean, and the overall experience feels smooth. The animations and interactions add a nice touch without affecting performance. Everything works well across devices and feels well-structured. Communication was clear and the work was delivered on time. Overall, a very good experience.”"
}
]
import whatsapp from "../assets/whatsapp.svg"
import Facebook from "../assets/facebook.svg"
import Linkedin from "../assets/linkedin.svg"
import Github from "../assets/github.svg"
import insta from "../assets/insta.svg"
export const socialMediaIcons = [
    {
      name:"linkedin",
      icon:Linkedin,
      url:"https://www.linkedin.com/in/leema-george-a51472273/"
    },
    //  {
    //   name:"insta",
    //   icon:insta,
    //   url:"https://www.linkedin.com/in/leema-george-a51472273/"
    // },
    {
      name:"github",
      icon:Github,
      url:"https://github.com/leemageorge"
    },
    {
      name:"whats app",
      icon:whatsapp,
      url:"https://wa.me/919633443047"
    },
    {
      name:"facebook",
      icon:Facebook,
      url:"https://www.facebook.com/leemageorge555"
    }

  ]