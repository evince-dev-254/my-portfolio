"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Github, Code, Sparkles, Download, ArrowRight } from "lucide-react"
import Image from "next/image"

export function HackerHero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleGithubProfile = (username: string = "kihiu254") => {
    window.open(`https://github.com/${username}`, "_blank", "noopener,noreferrer")
  }

  const handleDownloadCV = () => {
    const cvData = `
CURRICULUM VITAE
Paul Kihiu
Software Engineer at Guru Crafts Agency
Diploma in Computer Science - Awaiting Graduation
Email: 1kihiupaul@gmail.com
Phone: +254 112 081 866
GitHub: github.com/kihiu254
GitHub 2: github.com/evince-dev-254

TECHNICAL SKILLS:
- Languages: HTML, CSS, JavaScript, React, Next.js, Python, PHP
- Tools: MySQL, Figma, VS Code, Git
- Soft Skills: Problem-solving, Technical Leadership, Adaptability

WORK EXPERIENCE:
- Software Engineer @ Guru Crafts Agency

EDUCATION:
- Diploma in Computer Science - Awaiting Graduation
- KCSE - The Kirimara Boys High School (2019-2022)
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
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-secondary/20 rounded-full blur-[120px] animate-pulse transition-all duration-1000" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-primary/20 text-primary font-medium text-sm animate-in fade-in slide-in-from-bottom-4 duration-1000">
              <Sparkles className="h-4 w-4" />
              <span>Available for new opportunities</span>
            </div>

            <h1 className="text-6xl lg:text-8xl font-bold tracking-tight animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
              <span className="block italic font-light text-4xl lg:text-5xl text-muted-foreground mb-2">Hello, I'm</span>
              <span className="text-gradient">Paul Kihiu</span>
            </h1>

            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-400">
              <h2 className="text-2xl lg:text-3xl font-semibold text-foreground/90">
                Software Engineer at <span className="text-secondary">Guru Crafts Agency</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Specializing in building high-performance, visually stunning web applications.
                I hold a <span className="text-primary font-medium">Diploma in Computer Science</span> (Awaiting Graduation),
                merging academic excellence with professional expertise.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-600">
              <Button
                size="lg"
                className="bg-gradient-mesh text-white hover:opacity-90 shadow-lg shadow-primary/25 rounded-full px-8 h-14 text-lg"
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                Explore My Work
                <ArrowRight className="ml-2 h-5 w-5" />
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
            <div className="flex flex-wrap gap-8 justify-center lg:justify-start pt-12 animate-in fade-in duration-1000 delay-800">
              {[
                { label: "Frontend", value: "React & Next.js" },
                { label: "Backend", value: "Node & Python" },
                { label: "Design", value: "Figma & UI/UX" },
              ].map((stat) => (
                <div key={stat.label} className="space-y-1">
                  <div className="text-sm text-muted-foreground uppercase tracking-widest">{stat.label}</div>
                  <div className="text-lg font-bold">{stat.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Profile Image Area */}
          <div className="flex-1 relative animate-in fade-in slide-in-from-right-10 duration-1000 delay-400">
            <div className="relative w-72 h-72 lg:w-[450px] lg:h-[450px] mx-auto">
              {/* Decorative Rings */}
              <div className="absolute inset-0 border-2 border-primary/20 rounded-full animate-[spin_10s_linear_infinite]" />
              <div className="absolute inset-2 border border-secondary/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />

              <div className="absolute inset-4 overflow-hidden rounded-full border-4 border-background shadow-2xl">
                <Image
                  src="/paul-profile.jpg"
                  alt="Paul Kihiu"
                  fill
                  className="object-cover transform hover:scale-110 transition-transform duration-700"
                  priority
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 glass rounded-2xl p-4 shadow-xl border-primary/20 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Code className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-foreground">50+ Projects</div>
                    <div className="text-xs text-muted-foreground">Successfully Delivered</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
