"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, Monitor, Link as LinkIcon, ExternalLink, ArrowRight } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

const projects = [
  {
    id: 6,
    title: "Ninja Lig Tech",
    description: "Developer-designed premium agency platform with high-performance architecture.",
    image: "/ninjalig-preview.png",
    liveUrl: "https://ninjaligtechnologies.com/",
    githubUrl: "#",
    technologies: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    category: "Agency",
    featured: true,
  },
  {
    id: 1,
    title: "Savoria Restaurant",
    description:
      "A high-end restaurant platform featuring an interactive menu, reservation system, and a premium visual experience tailored for fine dining.",
    image: "/savoria-preview.png",
    liveUrl: "https://savoria-restaurant-nine.vercel.app/",
    githubUrl: "#",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Premium UI"],
    category: "Hospitality",
    featured: true,
  },
  {
    id: 2,
    title: "Leli Rentals",
    description:
      "A comprehensive rental marketplace platform with advanced search, booking management, and a clean, user-centric interface.",
    image: "/leli-preview.png",
    liveUrl: "https://www.leli.rentals",
    githubUrl: "#",
    technologies: ["React", "TypeScript", "Node.js", "Marketplace"],
    category: "Real Estate",
    featured: true,
  },
  {
    id: 3,
    title: "Luna Luxe Cine",
    description:
      "A sophisticated e-commerce platform for a Kenyan fashion brand featuring responsive design, shopping cart integration, and seamless user experience.",
    image: "/luna-luxe-preview.png",
    liveUrl: "https://luna-luxe-designs.vercel.app/",
    githubUrl: "https://github.com/kihiu254/luna-luxe-cine",
    technologies: ["React", "CSS Modules", "E-commerce"],
    category: "E-commerce",
    featured: false,
  },
  {
    id: 4,
    title: "West Drops",
    description:
      "Viral Tech & Aesthetic Room Essentials for Gen Z. Features a modern e-commerce experience with curated lifestyle products.",
    image: "/westdrops-live.png",
    liveUrl: "https://westdrops.com",
    githubUrl: "#",
    technologies: ["Next.js", "Tailwind CSS", "E-commerce", "UI/UX"],
    category: "E-commerce",
    featured: true,
  },
  {
    id: 5,
    title: "Mr Trendy Designs",
    description:
      "Luxury fashion web platform developed in collaboration with a team. Focused on UI/UX planning, visual branding, and frontend styling.",
    image: "/mr-trendy-live.png",
    liveUrl: "https://mrtrendydesigns.com/",
    githubUrl: "#",
    technologies: ["HTML", "CSS", "JavaScript", "Team Collaboration"],
    category: "Fashion",
    featured: true,
  },
]

export function HackerProjects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  }

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
        >
          <div className="max-w-2xl space-y-4">
            <Badge variant="secondary" className="px-4 py-1 rounded-full text-primary bg-primary/10 border-primary/20" id="projects-badge">
              Portfolio
            </Badge>
            <h2 className="text-4xl lg:text-6xl font-bold tracking-tight">
              Crafting <span className="text-gradient">Digital Experiences</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              A selection of my most recent work, ranging from bespoke restaurant platforms to complex rental marketplaces.
            </p>
          </div>

          <Button variant="outline" size="lg" className="rounded-full hidden md:flex items-center gap-2 group border-white/20">
            View All Projects
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants} className="h-full">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block group h-full focus:outline-none"
              >
                <Card
                  className="glass border-white/10 hover:border-primary/30 transition-all duration-500 overflow-hidden rounded-3xl h-full flex flex-col relative"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div className="relative h-72 overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <motion.div 
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileHover={{ scale: 1.1 }}
                        animate={hoveredProject === project.id ? { scale: 1, opacity: 1 } : {}}
                        className="bg-white/20 backdrop-blur-md rounded-full px-6 py-3 border border-white/30 text-white font-bold flex items-center gap-2"
                      >
                        Visit Website
                        <ExternalLink className="h-4 w-4" />
                      </motion.div>
                    </div>

                    <Badge className="absolute top-4 left-4 glass-dark text-white border-white/20 px-3 py-1 uppercase text-[10px] font-bold tracking-widest">
                      {project.category}
                    </Badge>
                  </div>

                  <CardHeader className="space-y-3 pb-4">
                    <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors">{project.title}</CardTitle>
                    <CardDescription className="text-base line-clamp-2 text-muted-foreground">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-6 mt-auto">
                    <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 3).map((tech) => (
                        <span key={tech} className="text-[10px] uppercase tracking-wider font-bold text-muted-foreground px-2 py-1 bg-white/5 rounded-md ring-1 ring-white/10">
                            {tech}
                        </span>
                        ))}
                    </div>

                    <div className="flex items-center justify-between text-primary font-bold pt-4 border-t border-white/5">
                      <span className="underline decoration-primary/30 group-hover:decoration-primary transition-all">Explore Project</span>
                      <LinkIcon className="h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
