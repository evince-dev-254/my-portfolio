"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Palette, Users, Layout, Briefcase, Code2 } from "lucide-react"
import { motion } from "framer-motion"

export function SkillsOverview() {
  const skillCategories = [
    {
      title: "Frontend Architecture",
      icon: Layout,
      skills: ["React 18+", "Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion", "Redux Toolkit", "Zustand"],
      gradient: "from-blue-500 to-cyan-400",
    },
    {
      title: "Backend & database",
      icon: Database,
      skills: ["Node.js", "Python (FastAPI)", "PHP (Laravel)", "MySQL", "PostgreSQL", "Supabase", "Prisma ORM"],
      gradient: "from-purple-500 to-pink-400",
    },
    {
      title: "CMS & E-commerce",
      icon: Code2,
      skills: ["Shopify (Liquid)", "WordPress (PHP)", "Custom Theme Dev", "Headless CMS", "SEO Strategy", "Google Analytics"],
      gradient: "from-orange-500 to-yellow-400",
    },
    {
      title: "DevOps & Tools",
      icon: Briefcase,
      skills: ["Git/GitHub", "Docker", "Vercel", "AWS / Cloud", "Linux / Terminal", "Postman", "Figma Design"],
      gradient: "from-emerald-500 to-teal-400",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <Badge variant="secondary" className="px-4 py-1 rounded-full text-primary bg-primary/10 border-primary/20">
            Expertise
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">Technical <span className="text-gradient">Skillset</span></h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies I use to bring complex digital visions to life.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div key={category.title} variants={itemVariants}>
              <Card
                className="group glass border-white/10 hover:neon-border transition-all duration-500 overflow-hidden rounded-3xl h-full"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4">
                    <motion.div 
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      className={`p-3 rounded-2xl bg-gradient-to-br ${category.gradient} text-white shadow-lg`}
                    >
                      <category.icon className="w-6 h-6" />
                    </motion.div>
                    <CardTitle className="text-xl font-bold tracking-tight">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="text-sm font-medium px-3 py-1 bg-muted/50 hover:bg-primary hover:text-white transition-all cursor-default rounded-lg border-white/5"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
