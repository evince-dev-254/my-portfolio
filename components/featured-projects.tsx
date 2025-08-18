"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, ShoppingCart, Palette } from "lucide-react"

export function FeaturedProjects() {
  const projects = [
    {
      title: "Luna Luxe Cine",
      description:
        "A sophisticated e-commerce platform for a Kenyan fashion brand featuring responsive design, integrated shopping cart, newsletter functionality, and seamless product displays.",
      image: "/fashion-ecommerce-website.png",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      features: ["Shopping Cart Integration", "Newsletter Forms", "Mobile Responsive", "Clean Navigation"],
      type: "E-commerce",
      icon: ShoppingCart,
      featured: true,
      liveUrl: "https://luna-luxe-cine-git-main-paul-kihius-projects.vercel.app/",
      githubUrl: "https://github.com/kihiu254",
    },
    {
      title: "Mr Trendy Designs",
      description:
        "Collaborative luxury fashion web platform focusing on premium user experience, visual branding consistency, and modern UI/UX design patterns for high-end fashion retail.",
      image: "/mr-trendy-preview.png",
      technologies: ["HTML", "CSS", "JavaScript", "Git"],
      features: ["Luxury Branding", "Team Collaboration", "Version Control", "Design Sprints"],
      type: "Fashion Platform",
      icon: Palette,
      featured: false,
      liveUrl: "https://mrtrendydesigns.com/",
      githubUrl: "https://github.com/kihiu254",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-sans text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="font-serif text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing innovative solutions and creative implementations
          </p>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-xl"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-64 lg:h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  {project.featured && (
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-primary text-primary-foreground font-medium">Featured Project</Badge>
                    </div>
                  )}
                </div>

                <div className="p-6 lg:p-8 flex flex-col justify-between">
                  <div>
                    <CardHeader className="p-0 mb-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <project.icon className="w-5 h-5 text-primary" />
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {project.type}
                        </Badge>
                      </div>
                      <CardTitle className="text-2xl font-sans font-bold text-foreground">{project.title}</CardTitle>
                    </CardHeader>

                    <CardContent className="p-0">
                      <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>

                      <div className="mb-6">
                        <h4 className="font-medium text-foreground mb-3">Key Features:</h4>
                        <div className="grid grid-cols-1 gap-2">
                          {project.features.map((feature) => (
                            <div key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-medium text-foreground mb-3">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button
                      variant="default"
                      size="sm"
                      className="flex items-center gap-2"
                      onClick={() => window.open(project.liveUrl, "_blank")}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-2 bg-transparent"
                      onClick={() => window.open(project.githubUrl, "_blank")}
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            onClick={() => window.open("https://github.com/kihiu254", "_blank")}
            className="flex items-center gap-2"
          >
            <Github className="w-5 h-5" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  )
}
