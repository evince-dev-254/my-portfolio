"use client"

import React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Palette, Terminal } from "lucide-react"

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code,
    skills: [
      { name: "HTML/CSS", level: 90, color: "text-primary" },
      { name: "JavaScript", level: 85, color: "text-secondary" },
      { name: "React", level: 75, color: "text-primary" },
      { name: "Responsive Design", level: 88, color: "text-secondary" },
    ],
  },
  {
    title: "Backend Development",
    icon: Terminal,
    skills: [
      { name: "Python", level: 80, color: "text-primary" },
      { name: "PHP", level: 70, color: "text-secondary" },
      { name: "Node.js", level: 65, color: "text-primary" },
      { name: "API Development", level: 75, color: "text-secondary" },
    ],
  },
  {
    title: "Database & Tools",
    icon: Database,
    skills: [
      { name: "MySQL", level: 85, color: "text-primary" },
      { name: "Git/GitHub", level: 90, color: "text-secondary" },
      { name: "VS Code", level: 95, color: "text-primary" },
      { name: "Figma", level: 70, color: "text-secondary" },
    ],
  },
  {
    title: "Soft Skills",
    icon: Palette,
    skills: [
      { name: "Problem Solving", level: 92, color: "text-primary" },
      { name: "Team Collaboration", level: 88, color: "text-secondary" },
      { name: "Adaptability", level: 90, color: "text-primary" },
      { name: "Attention to Detail", level: 85, color: "text-secondary" },
    ],
  },
]

export function HackerSkills() {
  const [activeCategory, setActiveCategory] = useState(0)

  return (
    <section className="py-20 relative">
      {/* Background effects */}
      <div className="absolute inset-0 matrix-bg opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="font-mono text-sm text-primary mb-4">
            <span className="text-muted-foreground">$</span> cat /skills/technical.json
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="glitch-text text-primary" data-text="Technical Arsenal">
              Technical Arsenal
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit of technologies and methodologies for building innovative digital solutions
          </p>
        </div>

        {/* Skills categories */}
        <div className="grid lg:grid-cols-4 gap-6 mb-12">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <Card
                key={category.title}
                className={`cursor-pointer transition-all duration-300 hover-glow ${
                  activeCategory === index
                    ? "border-primary bg-primary/10"
                    : "border-primary/30 bg-card/50 hover:border-primary/60"
                }`}
                onClick={() => setActiveCategory(index)}
              >
                <CardHeader className="text-center pb-4">
                  <Icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <CardTitle className="text-lg font-mono">{category.title}</CardTitle>
                </CardHeader>
              </Card>
            )
          })}
        </div>

        {/* Active category skills */}
        <Card className="border-primary/30 bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-primary flex items-center gap-3">
              {React.createElement(skillCategories[activeCategory].icon, {
                className: "h-6 w-6",
              })}
              {skillCategories[activeCategory].title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {skillCategories[activeCategory].skills.map((skill) => (
                <div key={skill.name} className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-sm">{skill.name}</span>
                    <Badge variant="outline" className="border-primary/50 text-primary font-mono">
                      {skill.level}%
                    </Badge>
                  </div>
                  <Progress
                    value={skill.level}
                    className="h-2 bg-muted"
                    style={
                      {
                        "--progress-foreground": "hsl(var(--primary))",
                      } as React.CSSProperties
                    }
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Terminal-style footer */}
        <div className="text-center mt-12">
          <div className="font-mono text-sm text-muted-foreground">
            <span className="text-primary">$</span> Skills continuously updating...
            <span className="terminal-cursor" />
          </div>
        </div>
      </div>
    </section>
  )
}
