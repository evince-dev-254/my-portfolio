"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Code, Sparkles } from "lucide-react"

export function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background">
      {/* Animated background elements inspired by flowers */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl float-animation"></div>
        <div
          className="absolute top-40 right-20 w-24 h-24 bg-secondary/15 rounded-full blur-lg float-animation"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-32 left-1/4 w-40 h-40 bg-accent/8 rounded-full blur-2xl float-animation"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 right-1/3 w-28 h-28 bg-primary/12 rounded-full blur-xl float-animation"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="mb-8">
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <img
                src="/paul-profile.jpg"
                alt="Paul Kihiu"
                className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-primary/20 shadow-xl pulse-glow"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-transparent"></div>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 bg-card px-4 py-2 rounded-full border border-border mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-card-foreground">Computer Science Student</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-sans font-black text-foreground mb-6 leading-tight">
            Hi, I'm <span className="text-primary pulse-glow inline-block">Paul Kihiu</span>
          </h1>

          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Passionate about creating innovative web solutions that solve real-world problems. Currently pursuing my
            Diploma in Computer Science at Meru National Polytechnic.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button onClick={scrollToProjects} size="lg" className="flex items-center gap-2 text-lg px-8 py-6 pulse-glow">
            <Code className="w-5 h-5" />
            View My Projects
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="flex items-center gap-2 text-lg px-8 py-6 bg-transparent"
            onClick={() => window.open("mailto:1kihiupaul@gmail.com")}
          >
            Get In Touch
          </Button>
        </div>

        <div className="animate-bounce">
          <ArrowDown className="w-6 h-6 text-primary mx-auto" />
        </div>
      </div>
    </section>
  )
}
