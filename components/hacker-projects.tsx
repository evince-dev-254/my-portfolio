"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, Monitor } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "Luna Luxe Cine",
    description:
      "A sophisticated e-commerce platform for a Kenyan fashion brand featuring responsive design, shopping cart integration, and seamless user experience.",
    image: "/luna-luxe-preview.png",
    liveUrl: "https://luna-luxe-cine-git-main-paul-kihius-projects.vercel.app/",
    githubUrl: "https://github.com/kihiu254/luna-luxe-cine",
    technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    category: "E-commerce",
    featured: true,
  },
  {
    id: 2,
    title: "Mr Trendy Designs",
    description:
      "Luxury fashion web platform developed in collaboration with a team. Focused on UI/UX planning, visual branding, and frontend styling.",
    image: "/mr-trendy-preview.png",
    liveUrl: "https://mrtrendydesigns.com/",
    githubUrl: "#",
    technologies: ["HTML", "CSS", "JavaScript", "Team Collaboration"],
    category: "Fashion",
    featured: true,
  },
]

export function HackerProjects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  return (
    <section className="py-20 relative">
      {/* Background effects */}
      <div className="absolute inset-0 matrix-bg opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="font-mono text-sm text-primary mb-4">
            <span className="text-muted-foreground">$</span> ls -la /projects
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="glitch-text text-primary" data-text="Featured Projects">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing innovative solutions built with modern technologies and creative problem-solving
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="group hover-glow border-primary/30 bg-card/50 backdrop-blur-sm overflow-hidden"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay with scan effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                {hoveredProject === project.id && <div className="absolute inset-0 scan-line" />}

                {/* Category badge */}
                <Badge className="absolute top-4 left-4 bg-primary/90 text-primary-foreground font-mono">
                  {project.category}
                </Badge>

                {/* Featured indicator */}
                {project.featured && (
                  <div className="absolute top-4 right-4">
                    <div className="w-3 h-3 bg-secondary rounded-full animate-pulse" />
                  </div>
                )}
              </div>

              <CardHeader>
                <CardTitle className="text-2xl font-bold text-primary group-hover:text-secondary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">{project.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="border-primary/50 text-primary font-mono text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex gap-3 pt-4">
                  <Button asChild className="flex-1 hover-glow font-mono">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <Monitor className="h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>

                  {project.githubUrl !== "#" && (
                    <Button
                      variant="outline"
                      asChild
                      className="hover-glow border-primary/50 hover:border-primary font-mono bg-transparent"
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <Github className="h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Terminal-style footer */}
        <div className="text-center mt-16">
          <div className="font-mono text-sm text-muted-foreground">
            <span className="text-primary">$</span> More projects loading...
            <span className="terminal-cursor" />
          </div>
        </div>
      </div>
    </section>
  )
}
