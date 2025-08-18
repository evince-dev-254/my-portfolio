"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Github, Terminal, Code, Zap } from "lucide-react"
import Image from "next/image"

export function HackerHero() {
  const [displayText, setDisplayText] = useState("")
  const fullText = "Paul Kihiu"
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + fullText[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, 150)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, fullText])

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Matrix background effect */}
      <div className="absolute inset-0 matrix-bg opacity-30" />

      {/* Scanning lines effect */}
      <div className="absolute inset-0">
        <div className="scan-line w-full h-px bg-primary/30 absolute top-1/4" />
        <div className="scan-line w-full h-px bg-primary/20 absolute top-2/4" />
        <div className="scan-line w-full h-px bg-primary/30 absolute top-3/4" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image with Glitch Effect */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-lg overflow-hidden border-2 border-primary/50 hover-glow">
                <Image
                  src="/paul-profile.jpg"
                  alt="Paul Kihiu"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover filter contrast-125 brightness-110"
                />
              </div>
              {/* Glitch overlay */}
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply rounded-lg" />
            </div>
          </div>

          {/* Content */}
          <div className="text-center lg:text-left space-y-6">
            {/* Terminal-style greeting */}
            <div className="font-mono text-sm text-primary mb-4">
              <span className="text-muted-foreground">$</span> whoami
            </div>

            {/* Animated name with glitch effect */}
            <h1 className="text-5xl lg:text-7xl font-bold">
              <span className="glitch-text text-primary" data-text={displayText}>
                {displayText}
              </span>
              <span className="terminal-cursor" />
            </h1>

            {/* Subtitle with typing effect */}
            <div className="text-xl lg:text-2xl text-muted-foreground font-mono">
              <span className="text-secondary">&gt;</span> Computer Science Student
              <br />
              <span className="text-secondary">&gt;</span> Full-Stack Developer
              <br />
              <span className="text-secondary">&gt;</span> Digital Innovator
            </div>

            {/* Description */}
            <p className="text-lg text-muted-foreground max-w-2xl">
              Passionate about building user-friendly, efficient, and scalable solutions. Currently studying at Meru
              National Polytechnic, focusing on cutting-edge web technologies and digital innovation.
            </p>

            {/* Action buttons with hover effects */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="hover-glow group font-mono">
                <Terminal className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                View Projects
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="hover-glow group font-mono border-primary/50 hover:border-primary bg-transparent"
              >
                <Github className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                GitHub Profile
              </Button>
            </div>

            {/* Tech stack indicators */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-6">
              {[
                { icon: Code, label: "Frontend" },
                { icon: Terminal, label: "Backend" },
                { icon: Zap, label: "Full-Stack" },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 px-3 py-1 rounded-md bg-card/50 border border-primary/30 hover-glow"
                >
                  <Icon className="h-4 w-4 text-primary" />
                  <span className="text-sm font-mono">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
