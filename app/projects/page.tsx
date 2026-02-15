"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { PortfolioHeader } from "@/components/portfolio-header"
import { Footer } from "@/components/footer"
import { TechBackground } from "@/components/tech-background"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, Monitor, ExternalLink, Globe, Layout, Code2, Database, Smartphone, Palette, Terminal, ArrowRight, Layers } from "lucide-react"
import Image from "next/image"

const allProjects = [
  {
    id: 6,
    title: "Ninja Lig Tech",
    role: "Lead Designer & Developer",
    description: "A premium software agency platform designed and engineered to showcase high-end digital solutions. The project involved creating a unique visual identity and a performance-first architecture.",
    image: "/ninjalig-preview.png",
    liveUrl: "https://ninjaligtechnologies.com/",
    githubUrl: "#",
    techStack: [
      { name: "Next.js", icon: Layout },
      { name: "TypeScript", icon: Code2 },
      { name: "Tailwind CSS", icon: Palette },
      { name: "Framer Motion", icon: Smartphone },
      { name: "Custom UI Design", icon: Palette }
    ],
    features: ["Bespoke Visual Design", "High Performance Lighthouse Score", "Interactive Agency UX", "Responsive Terminal UI"],
    category: "Agency"
  },
  {
    id: 1,
    title: "Savoria Restaurant",
    role: "Lead Developer",
    description: "A high-end restaurant platform featuring an interactive menu, reservation system, and a premium visual experience tailored for fine dining. Built with performance and elegance in mind.",
    image: "/savoria-preview.png",
    liveUrl: "https://savoria-restaurant-nine.vercel.app/",
    githubUrl: "#",
    techStack: [
      { name: "Next.js 14", icon: Layout },
      { name: "React 18", icon: Code2 },
      { name: "Tailwind CSS", icon: Palette },
      { name: "Framer Motion", icon: Smartphone },
      { name: "Vercel", icon: Globe }
    ],
    features: ["Interactive Dynamic Menu", "Real-time Reservation Engine", "Parallax Immersive Design", "SEO Optimized Performance"],
    category: "Hospitality"
  },
  {
    id: 2,
    title: "Leli Rentals",
    role: "Full-Stack Developer",
    description: "A comprehensive rental marketplace platform with advanced search, booking management, and a clean, user-centric interface. Focused on solving Kenyan real estate accessibility.",
    image: "/leli-preview.png",
    liveUrl: "https://www.leli.rentals",
    githubUrl: "#",
    techStack: [
      { name: "React", icon: Code2 },
      { name: "TypeScript", icon: Code2 },
      { name: "Node.js", icon: Database },
      { name: "Express", icon: Server },
      { name: "PostgreSQL", icon: Database }
    ],
    features: ["Map Integration", "User Dashboard", "Listing Management", "Secure Booking Flow"],
    category: "Real Estate"
  },
  {
    id: 4,
    title: "West Drops",
    role: "Liquid Developer & Architect",
    description: "Viral Tech & Aesthetic Room Essentials for Gen Z. This project required deep customization of Shopify's Liquid engine to create a bespoke, high-conversion shopping experience.",
    image: "/westdrops-live.png",
    liveUrl: "https://westdrops.com",
    githubUrl: "#",
    techStack: [
      { name: "Shopify", icon: Globe },
      { name: "Liquid", icon: Terminal },
      { name: "JavaScript (ES6+)", icon: Code2 },
      { name: "Tailwind (Custom)", icon: Palette },
      { name: "SASS", icon: Layers }
    ],
    features: ["Custom Liquid Templates", "Conversion Rate Optimization", "Dynamic Product Filtering", "Mobile-First UX"],
    category: "E-commerce"
  },
  {
    id: 5,
    title: "Mr Trendy Designs",
    role: "Theme Developer & UI Lead",
    description: "Luxury fashion web platform developed with a focus on high-fidelity visual branding. Utilized WordPress as a robust CMS with a completely custom-coded technical architecture.",
    image: "/mr-trendy-live.png",
    liveUrl: "https://mrtrendydesigns.com/",
    githubUrl: "#",
    techStack: [
      { name: "WordPress", icon: Globe },
      { name: "PHP", icon: Database },
      { name: "Custom Theme Arch", icon: Layers },
      { name: "MySQL", icon: Database },
      { name: "Modern JS", icon: Code2 }
    ],
    features: ["Custom WP Gutenberg Blocks", "Performance Optimized Images", "Responsive Luxury UI", "Security Hardening"],
    category: "Fashion"
  },
  {
    id: 3,
    title: "Luna Luxe Cine",
    role: "Frontend Developer",
    description: "A sophisticated e-commerce platform for a Kenyan fashion brand featuring responsive design, shopping cart integration, and a seamless user experience.",
    image: "/luna-luxe-preview.png",
    liveUrl: "https://luna-luxe-designs.vercel.app/",
    githubUrl: "https://github.com/kihiu254/luna-luxe-cine",
    techStack: [
      { name: "React", icon: Code2 },
      { name: "CSS Modules", icon: Palette },
      { name: "Framer Motion", icon: Smartphone },
      { name: "E-commerce Logic", icon: Layers }
    ],
    features: ["Responsive Grid System", "State-managed Cart", "Product Highlighting", "Smooth Transitions"],
    category: "E-commerce"
  }
]

import { Server } from "lucide-react"

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background relative selection:bg-primary/30">
      <TechBackground />
      <PortfolioHeader />

      <main className="pt-32 pb-20 relative z-10 container mx-auto px-4">
        <header className="max-w-4xl mx-auto text-center mb-24 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-mono text-sm text-primary tracking-[0.4em] uppercase flex items-center justify-center gap-3"
          >
            <Terminal size={16} />
            <span>sys --explore --projects</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-5xl lg:text-7xl font-black tracking-tight"
          >
            Digital <span className="text-gradient italic">Artifacts</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground leading-relaxed italic"
          >
            A comprehensive look at the systems, architectures, and experiences I&apos;ve engineered.
          </motion.p>
        </header>

        <div className="space-y-32">
          {allProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
            >
              {/* Project Visual */}
              <div className="w-full lg:w-3/5 group relative">
                <div className="absolute -inset-4 bg-primary/20 blur-[80px] opacity-0 group-hover:opacity-40 transition-opacity duration-1000" />
                <div className="relative glass border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl">
                  <div className="relative h-[300px] md:h-[500px]">
                    <Image 
                      src={project.image} 
                      alt={project.title} 
                      fill 
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="w-full lg:w-2/5 space-y-8">
                <div className="space-y-4">
                  <Badge variant="outline" className="text-primary border-primary/30 font-mono text-xs px-4 py-1.5 rounded-full uppercase tracking-tighter">
                    {project.category}
                  </Badge>
                  <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-foreground">{project.title}</h2>
                  <p className="text-primary font-bold italic text-lg tracking-wide">{project.role}</p>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-6">
                    <h3 className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground flex items-center gap-2">
                        <Code2 size={14} /> Technical Stack
                    </h3>
                    <div className="flex flex-wrap gap-2 text-foreground font-medium">
                        {project.techStack.map((tech) => (
                            <div key={tech.name} className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/5 hover:border-primary/30 transition-colors">
                                <tech.icon size={14} className="text-primary" />
                                <span className="text-xs uppercase tracking-wider">{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="space-y-6">
                    <h3 className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground flex items-center gap-2">
                        <Layers size={14} /> Core Features
                    </h3>
                    <ul className="grid grid-cols-2 gap-y-3 gap-x-6">
                        {project.features.map((feature) => (
                            <li key={feature} className="flex gap-2 items-center text-sm text-foreground/80">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex gap-4 pt-6">
                  <Button size="lg" className="rounded-xl px-8 bg-gradient-mesh text-white font-bold h-12 shadow-lg shadow-primary/20 hover:scale-[1.02] transition-all" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      Live View <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  {project.githubUrl !== "#" && (
                    <Button variant="outline" size="lg" className="rounded-xl px-8 border-white/10 glass-dark text-white h-12 hover:bg-white/10 transition-all font-bold" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        Source <Github className="ml-2 h-4 w-4" />
                        </a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}
