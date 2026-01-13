"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Palette, Users, Layout } from "lucide-react"

export function SkillsOverview() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Layout,
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      gradient: "from-blue-500 to-cyan-400",
    },
    {
      title: "Backend & database",
      icon: Database,
      skills: ["Node.js", "Python", "PHP", "MySQL", "PostgreSQL"],
      gradient: "from-purple-500 to-pink-400",
    },
    {
      title: "Design & UI/UX",
      icon: Palette,
      skills: ["Figma", "Adobe XD", "Responsive Design", "Visual Branding"],
      gradient: "from-orange-500 to-yellow-400",
    },
    {
      title: "Soft Skills",
      icon: Users,
      skills: ["Team Leadership", "Problem Solving", "Agile", "Communication"],
      gradient: "from-emerald-500 to-teal-400",
    },
  ]

  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <Badge variant="secondary" className="px-4 py-1 rounded-full text-primary bg-primary/10 border-primary/20">
            Expertise
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">Technical <span className="text-gradient">Skillset</span></h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies I use to bring complex digital visions to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={category.title}
              className="group glass border-white/10 hover-lift overflow-hidden rounded-3xl"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-2xl bg-gradient-to-br ${category.gradient} text-white shadow-lg`}>
                    <category.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl font-bold tracking-tight">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="text-sm font-medium px-3 py-1 bg-muted hover:bg-primary hover:text-white transition-all cursor-default rounded-lg"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
