"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Mail } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20 pt-20">
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-block animate-bounce mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-2xl">🌻</span>
              </div>
            </div>

            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Paul Kihiu
            </h1>

            <p className="font-sans text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl">
              Computer Science Student & Web Developer
            </p>

            <p className="font-sans text-lg text-muted-foreground mb-12 max-w-2xl">
              Passionate about creating innovative digital solutions that solve real-world problems. Currently studying
              at Meru National Polytechnic, building the future one line of code at a time.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button onClick={scrollToProjects} size="lg" className="group">
                View My Work
                <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </Button>

              <Button variant="outline" size="lg" asChild>
                <a href="mailto:1kihiupaul@gmail.com" className="flex items-center">
                  <Mail className="mr-2 h-4 w-4" />
                  Get In Touch
                </a>
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                <Image
                  src="/paul-profile.jpg"
                  alt="Paul Kihiu"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-amber-400 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-orange-500 rounded-full animate-pulse delay-300"></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-yellow-400 rounded-full animate-bounce delay-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
