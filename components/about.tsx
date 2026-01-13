"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, GraduationCap, Calendar, Heart, Sparkles } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 space-y-4">
          <Badge variant="secondary" className="px-4 py-1 rounded-full text-secondary bg-secondary/10 border-secondary/20">
            My Story
          </Badge>
          <h2 className="text-4xl lg:text-6xl font-bold tracking-tight">
            Driven by Curiosity, <span className="text-gradient">Powered by Code</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A software engineer dedicated to crafting seamless digital experiences and solving complex problems through elegant code.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold flex items-center gap-2">
                <Sparkles className="text-primary h-6 w-6" />
                Engineering Excellence
              </h3>
              <p className="text-lg leading-relaxed text-muted-foreground">
                I am a passionate Software Engineer with a strong foundation in modern web technologies.
                My approach combines technical precision with a keen eye for design, ensuring that
                every application I build is not only functional but also visually captivating.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Based in Meru, Kenya, I've spent the last few years honing my skills in full-stack
                development, focusing on creating scalable solutions that make a tangible impact.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: MapPin, label: "Location", value: "Meru, Kenya" },
                { icon: GraduationCap, label: "Education", value: "Diploma, Level 6" },
                { icon: Calendar, label: "Status", value: "Awaiting Graduation" },
                { icon: Heart, label: "Passion", value: "Digital Innovation" },
              ].map((item, i) => (
                <Card key={i} className="glass border-white/10 hover-lift rounded-2xl">
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">{item.label}</p>
                      <p className="font-semibold text-foreground">{item.value}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-[2rem] blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000" />
            <div className="relative glass border-white/20 rounded-[2rem] p-8 lg:p-12 overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 p-4">
                <div className="w-20 h-20 bg-primary/10 rounded-full blur-2xl" />
              </div>

              <div className="space-y-8 text-center lg:text-left">
                <div className="w-24 h-24 bg-gradient-mesh rounded-3xl flex items-center justify-center shadow-xl shadow-primary/20 mx-auto lg:mx-0">
                  <GraduationCap className="w-12 h-12 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-2">Academic Foundation</h3>
                  <p className="text-xl text-primary font-medium mb-4">The Meru National Polytechnic</p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Developing a robust understanding of Computer Science principles,
                    algorithm design, and software engineering methodologies.
                    Currently awaiting graduation to mark the completion of my formal diploma studies.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                  {["Problem Solving", "Collaboration", "Clean Code"].map((tag) => (
                    <Badge key={tag} variant="secondary" className="px-4 py-1.5 rounded-full bg-primary/5 text-primary border-primary/10 text-sm font-bold">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
