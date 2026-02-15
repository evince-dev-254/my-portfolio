"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Github, Code, Sparkles, Download, ArrowRight, Database, Layout, Smartphone, Globe, Cloud, Cpu } from "lucide-react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

const TECH_ICONS = [
  { Icon: Code, color: "text-blue-400", label: "React" },
  { Icon: Database, color: "text-green-400", label: "Supabase" },
  { Icon: Layout, color: "text-purple-400", label: "Next.js" },
  { Icon: Smartphone, color: "text-pink-400", label: "React Native" },
  { Icon: Globe, color: "text-cyan-400", label: "Web" },
  { Icon: Cloud, color: "text-sky-400", label: "Cloud" },
  { Icon: Cpu, color: "text-amber-400", label: "Python" },
]

export function HackerHero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleGithubProfile = (username: string = "kihiu254") => {
    window.open(`https://github.com/${username}`, "_blank", "noopener,noreferrer")
  }

  const typingTexts = [
    { text: "Hello, I'm Paul Kihiu", color: "text-primary" },
    { text: "Software Engineer at Guru Crafts Agency", color: "text-secondary" },
    { text: "Freelancing at Ninja Lig Tech", color: "text-accent italic" }
  ]

  const [textIndex, setTextIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(100)

  useEffect(() => {
    const handleTyping = () => {
      const currentFullText = typingTexts[textIndex].text
      
      if (!isDeleting) {
        setDisplayText(currentFullText.substring(0, displayText.length + 1))
        setTypingSpeed(100)
        
        if (displayText === currentFullText) {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        setDisplayText(currentFullText.substring(0, displayText.length - 1))
        setTypingSpeed(50)
        
        if (displayText === "") {
          setIsDeleting(false)
          setTextIndex((prev) => (prev + 1) % typingTexts.length)
        }
      }
    }

    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [displayText, isDeleting, textIndex, typingSpeed])

  const handleDownloadCV = () => {
    const cvData = `
=========================================
          PAUL KIHIU
       SOFTWARE ENGINEER
=========================================

CONTACT INFO:
- Email: 1kihiupaul@gmail.com
- Phone: +254 112 081 866
- Location: Meru, Kenya
- GitHub: github.com/kihiu254
- GitHub 2: github.com/evince-dev-254
- Portfolio: paul-kihiu.vercel.app

PROFESSIONAL SUMMARY:
Innovative Software Engineer specializing in building premium, high-performance web applications. 
Expert in React/Next.js and full-stack architecture with a track record of 50+ delivered projects 
spanning e-commerce, real estate, and hospitality sectors.

TECHNICAL SKILLS:
- Frontend: React 18+, Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion, Redux, Zustand
- Backend: Node.js, Python (Django/FastAPI), PHP (Laravel), MySQL, PostgreSQL, Supabase
- CMS & E-commerce: Shopify (Custom Liquid Development), WordPress (Custom Theme Architecture)
- Design: UI/UX Strategy, Figma, Visual Branding, Responsive Architecture
- Tools: Git/GitHub, Docker, Vercel, Terminal/Linux, Agile Methodologies

WORK EXPERIENCE:
- Software Engineer @ Guru Crafts Agency (2023 - Present)
  Architecting high-end web platforms and leading frontend development strategies.
- Freelance Developer @ Ninja Lig Technologies (Current)
  Designing and developing modern digital solutions.
- Full-Stack Developer (Freelance) (2021 - 2023)
  Delivered custom solutions for international and local clients, focusing on scalability and performance.

FEATURED PROJECTS:
- Ninja Lig Tech: Modern agency platform (ninjaligtechnologies.com) - Lead Designer & Developer.
- Westdrops: Viral E-commerce platform built with Shopify & custom Liquid for high performance.
- Mr Trendy Designs: Luxury fashion platform utilizing WordPress with a custom technical architecture.
- Savoria Restaurant: Premium hospitality platform featuring Next.js and complex animations.
- Leli Rentals: Marketplace solution with advanced search and booking management.

EDUCATION:
- Diploma in Computer Science (Level 6) - The Meru National Polytechnic (Awaiting Graduation)
- Kenya Certificate of Secondary Education - The Kirimara Boys High School (2019-2022)

-----------------------------------------
    Generated via Paul Kihiu Portfolio
-----------------------------------------
    `.trim()

    const blob = new Blob([cvData], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "Paul_Kihiu_CV.txt"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  if (!mounted) return null

  return (
    <section className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center lg:text-left space-y-8"
          >
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-primary/20 text-primary font-medium text-sm"
            >
              <Sparkles className="h-4 w-4" />
              <span>Available for new opportunities</span>
            </motion.div>

            <div className="flex flex-col gap-6">
              <div className="min-h-[80px] lg:min-h-[120px] mb-2 flex items-center justify-center lg:justify-start">
                <h1 className="text-3xl lg:text-5xl font-black tracking-tight leading-tight font-[family-name:var(--font-outfit)]">
                  <span className={typingTexts[textIndex].color}>
                    {displayText}
                    <motion.span
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ 
                        duration: 0.8, 
                        repeat: Infinity, 
                        times: [0, 0.5, 1],
                        ease: "linear"
                      }}
                      className="inline-block w-[3px] h-[0.8em] bg-current ml-1 align-middle"
                    />
                  </span>
                </h1>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                Specializing in building high-performance, visually stunning web applications.
                I hold a <span className="text-primary font-medium">Diploma in Computer Science</span> (Awaiting Graduation),
                merging academic excellence with professional expertise.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
              <Button
                size="lg"
                className="bg-gradient-mesh text-white hover:opacity-90 shadow-lg shadow-primary/25 rounded-full px-8 h-14 text-lg group"
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                Explore My Work
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 h-14 text-lg border-2 hover:bg-muted transition-colors"
                onClick={handleDownloadCV}
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>

              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full w-14 h-14 hover:bg-muted transition-colors"
                  onClick={() => handleGithubProfile("kihiu254")}
                  title="kihiu254"
                >
                  <Github className="h-6 w-6" />
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full w-14 h-14 hover:bg-muted transition-colors border-secondary/20 border"
                  onClick={() => handleGithubProfile("evince-dev-254")}
                  title="evince-dev-254"
                >
                  <Github className="h-6 w-6 text-secondary" />
                </Button>
              </div>
            </div>

            {/* Quick Stats/Tech */}
            <div className="flex flex-wrap gap-8 justify-center lg:justify-start pt-12">
              {[
                { label: "Frontend", value: "React & Next.js" },
                { label: "Backend", value: "Node & Python" },
                { label: "Design", value: "Figma & UI/UX" },
              ].map((stat, idx) => (
                <motion.div 
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + idx * 0.1 }}
                  className="space-y-1"
                >
                  <div className="text-sm text-muted-foreground uppercase tracking-widest">{stat.label}</div>
                  <div className="text-lg font-bold">{stat.value}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Profile Image Area with Floating Tech Icons */}
          <div className="flex-1 relative">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative w-72 h-72 lg:w-[450px] lg:h-[450px] mx-auto"
            >
              {/* Floating Tech Icons */}
              {TECH_ICONS.map((tech, index) => {
                const angle = (index / TECH_ICONS.length) * Math.PI * 2
                const radius = mounted ? (window.innerWidth < 1024 ? 160 : 260) : 260
                
                return (
                  <motion.div
                    key={tech.label}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
                    animate={{
                      x: [
                        Math.cos(angle) * (radius - 20),
                        Math.cos(angle + 0.5) * (radius + 20),
                        Math.cos(angle) * (radius - 20),
                      ],
                      y: [
                        Math.sin(angle) * (radius - 20),
                        Math.sin(angle + 0.5) * (radius + 20),
                        Math.sin(angle) * (radius - 20),
                      ],
                    }}
                    transition={{
                      duration: 8 + index * 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <div className="glass p-3 rounded-2xl neon-border hover:neon-glow transition-all group overflow-visible relative">
                        <tech.Icon className={`w-6 h-6 lg:w-8 lg:h-8 ${tech.color}`} />
                        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap bg-background/80 backdrop-blur-md px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                            {tech.label}
                        </div>
                    </div>
                  </motion.div>
                )
              })}

              {/* Decorative Rings */}
              <div className="absolute inset-0 border-2 border-primary/20 rounded-full animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-4 border border-secondary/10 rounded-full animate-[spin_30s_linear_infinite_reverse]" />
              <div className="absolute inset-8 border border-primary/10 rounded-full animate-[spin_40s_linear_infinite]" />

              {/* Profile Image Wrap */}
              <div className="absolute inset-10 overflow-hidden rounded-full border-4 border-background shadow-2xl neon-glow">
                <Image
                  src="/paul-profile.jpg"
                  alt="Paul Kihiu"
                  fill
                  className="object-cover transform hover:scale-110 transition-transform duration-700"
                  priority
                />
              </div>

              {/* HUD Elements */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 z-10 pointer-events-none"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-8 bg-primary/40" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-8 bg-primary/40" />
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-1 bg-primary/40" />
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-1 bg-primary/40" />
              </motion.div>
              
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
