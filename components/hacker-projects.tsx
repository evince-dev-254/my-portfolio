"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, Monitor, Link as LinkIcon, ExternalLink, ArrowRight } from "lucide-react"
import Image from "next/image"

const projects = [
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
      "Sophisticated e-commerce platform for a fashion brand featuring responsive design and seamless checkout.",
    image: "/luna-luxe-preview.png",
    liveUrl: "https://luna-luxe-designs.vercel.app/",
    githubUrl: "https://github.com/kihiu254/luna-luxe-cine",
    technologies: ["React", "CSS Modules", "E-commerce"],
    category: "E-commerce",
    featured: false,
  },
]

export function HackerProjects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
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

          <Button variant="outline" size="lg" className="rounded-full hidden md:flex items-center gap-2 group">
            View All Projects
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block group h-full focus:outline-none"
            >
              <Card
                className="glass border-white/10 hover-lift overflow-hidden rounded-3xl h-full flex flex-col transition-all duration-300 group-hover:border-primary/30"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-md rounded-full px-6 py-3 border border-white/30 text-white font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      Visit Website
                      <ExternalLink className="h-4 w-4" />
                    </div>
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
                      <span key={tech} className="text-[10px] uppercase tracking-wider font-bold text-muted-foreground px-2 py-1 bg-muted rounded-md ring-1 ring-border">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-[10px] uppercase tracking-wider font-bold text-muted-foreground px-2 py-1 bg-muted rounded-md ring-1 ring-border">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between text-primary font-bold pt-4 border-t border-white/5">
                    <span className="underline decoration-primary/30 group-hover:decoration-primary transition-all">Explore Project</span>
                    <LinkIcon className="h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
