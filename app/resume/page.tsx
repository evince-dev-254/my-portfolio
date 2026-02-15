"use client"

import { motion } from "framer-motion"
import { PortfolioHeader } from "@/components/portfolio-header"
import { Footer } from "@/components/footer"
import { TechBackground } from "@/components/tech-background"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Download, Mail, Phone, MapPin, Github, Linkedin, Calendar, Briefcase, GraduationCap, Code2, Award, Zap, Layout, Database, Users } from "lucide-react"

export default function ResumePage() {
  const handlePrint = () => {
    window.print()
  }

  const skillGroups = [
    {
      category: "Frontend Architecture",
      icon: Layout,
      skills: ["React 18+", "Next.js (App Router)", "TypeScript", "Tailwind CSS", "Framer Motion", "Redux Toolkit", "Zustand"],
    },
    {
      category: "Backend & Systems",
      icon: Database,
      skills: ["Node.js", "Python (Django/FastAPI)", "PHP (Laravel)", "MySQL", "PostgreSQL", "Supabase", "Prisma ORM"],
    },
    {
      category: "E-commerce & CMS",
      icon: Code2,
      skills: ["Shopify (Liquid)", "WordPress (PHP/Custom Themes)", "E-commerce Optimization", "Payment Gateway Integration"],
    },
    {
      category: "Tools & DevOps",
      icon: Briefcase,
      skills: ["Git/GitHub", "Docker", "Vercel", "AWS Fundamentals", "Figma (UI/UX Design)", "Terminal/Linux"],
    },
    {
      category: "Professional / Soft Skills",
      icon: Users,
      skills: ["Technical Leadership", "Agile Methodologies", "Problem Solving", "Team Collaboration", "Project Management"],
    }
  ]

  const experience = [
    {
      role: "Freelance Software Engineer",
      company: "Ninja Lig Technologies",
      period: "2024 - Present",
      desc: "Architecting and designing premium digital platforms. Leading the visual identity and technical implementation of client-facing agency websites.",
    },
    {
      role: "Software Engineer",
      company: "Guru Crafts Agency",
      period: "2023 - Present",
      desc: "Collaborating on high-performance web applications. Implementing frontend strategy using Next.js and Framer Motion.",
    },
    {
      role: "Freelance Full-Stack Developer",
      company: "Self-Employed",
      period: "2021 - 2023",
      desc: "Delivered 50+ diverse projects including e-commerce platforms (Shopify/WordPress), rental marketplaces, and bespoke CMS solutions.",
    }
  ]

  const education = [
    {
      degree: "Diploma in Computer Science (Level 6)",
      institution: "The Meru National Polytechnic",
      period: "2022 - 2024",
      desc: "Focused on Algorithm Design, Software Engineering Principles, and Advanced System Architecture. Awaiting Graduation.",
    },
    {
      degree: "Kenya Certificate of Secondary Education",
      institution: "The Kirimara Boys High School",
      period: "2019 - 2022",
      desc: "Completed secondary education with strong focus on STEM subjects.",
    }
  ]

  return (
    <div className="min-h-screen bg-background relative selection:bg-primary/30 print:bg-white">
      <div className="print:hidden">
        <TechBackground />
        <PortfolioHeader />
      </div>

      <main className="pt-32 pb-20 relative z-10 container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-card/50 backdrop-blur-xl border border-white/5 rounded-[2.5rem] overflow-hidden shadow-2xl print:shadow-none print:border-none print:bg-white print:p-0"
        >
          {/* Header Section */}
          <div className="bg-gradient-mesh p-12 text-white relative overflow-hidden print:text-black print:bg-none print:p-0 print:border-b-2 print:border-black print:mb-8">
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-start gap-8">
              <div className="space-y-4">
                <h1 className="text-5xl font-black tracking-tight">PAUL KIHIU</h1>
                <h2 className="text-2xl font-bold opacity-90 tracking-wide uppercase italic">Software Engineer</h2>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-medium opacity-80 print:text-black print:opacity-100">
                <div className="flex items-center gap-2">
                  <Mail size={16} /> 1kihiupaul@gmail.com
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={16} /> +254 112 081 866
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} /> Meru, Kenya
                </div>
                <div className="flex items-center gap-2">
                  <Github size={16} /> github.com/kihiu254
                </div>
              </div>
            </div>

            <Button 
                onClick={handlePrint}
                className="absolute top-8 right-8 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full print:hidden"
            >
                <Download className="mr-2 h-4 w-4" />
                Export PDF
            </Button>
          </div>

          <div className="p-8 lg:p-12 space-y-12 print:p-0">
            {/* Professional Profile */}
            <section className="space-y-4">
              <h3 className="text-xl font-black tracking-widest text-primary uppercase flex items-center gap-3">
                <Zap size={20} />
                Profile
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed print:text-black">
                Innovative Software Engineer with a deep specialization in building high-performance, visually stunning digital experiences. 
                Proven track record in delivering 50+ projects across various industries, from luxury fashion e-commerce to complex rental marketplaces. 
                Expert in modern frontend frameworks (React/Next.js) and versatile backend systems, with additional expertise in liquid-based Shopify 
                development and custom WordPress architecture.
              </p>
            </section>

            <div className="grid md:grid-cols-3 gap-12">
              {/* Main Content (Left) */}
              <div className="md:col-span-2 space-y-12">
                {/* Experience */}
                <section className="space-y-8">
                  <h3 className="text-xl font-black tracking-widest text-primary uppercase flex items-center gap-3">
                    <Briefcase size={20} />
                    Experience
                  </h3>
                  <div className="space-y-8">
                    {experience.map((exp, i) => (
                      <div key={i} className="relative pl-6 border-l border-primary/20">
                        <div className="absolute top-0 left-0 -translate-x-1/2 w-3 h-3 rounded-full bg-primary" />
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-black text-xl tracking-tight">{exp.role}</h4>
                          <Badge variant="secondary" className="font-mono text-xs">{exp.period}</Badge>
                        </div>
                        <p className="text-primary font-bold italic mb-3">{exp.company}</p>
                        <p className="text-muted-foreground leading-relaxed print:text-black">{exp.desc}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Education */}
                <section className="space-y-8">
                  <h3 className="text-xl font-black tracking-widest text-primary uppercase flex items-center gap-3">
                    <GraduationCap size={20} />
                    Education
                  </h3>
                  <div className="space-y-8">
                    {education.map((edu, i) => (
                      <div key={i} className="relative pl-6 border-l border-primary/20">
                        <div className="absolute top-0 left-0 -translate-x-1/2 w-3 h-3 rounded-full bg-primary" />
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-black text-xl tracking-tight">{edu.degree}</h4>
                          <Badge variant="secondary" className="font-mono text-xs">{edu.period}</Badge>
                        </div>
                        <p className="text-primary font-bold italic mb-3">{edu.institution}</p>
                        <p className="text-muted-foreground leading-relaxed print:text-black">{edu.desc}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              {/* Sidebar Content (Right) */}
              <div className="space-y-12">
                <section className="space-y-6">
                  <h3 className="text-xl font-black tracking-widest text-primary uppercase flex items-center gap-3">
                    <Code2 size={20} />
                    Skills
                  </h3>
                  <div className="space-y-6">
                    {skillGroups.map((group, i) => (
                      <div key={i} className="space-y-3">
                        <h4 className="font-bold text-sm text-foreground/70 uppercase tracking-widest">{group.category}</h4>
                        <div className="flex flex-wrap gap-2">
                          {group.skills.map((skill) => (
                            <Badge key={skill} variant="outline" className="border-primary/20 text-foreground bg-primary/5 px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-tight">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="space-y-6">
                   <h3 className="text-xl font-black tracking-widest text-primary uppercase flex items-center gap-3">
                    <Award size={20} />
                    Highlights
                  </h3>
                  <ul className="space-y-3 text-sm text-muted-foreground print:text-black">
                    <li className="flex gap-2">
                       <span className="text-primary font-bold">»</span> 50+ Projects Successfully Delivered
                    </li>
                    <li className="flex gap-2">
                       <span className="text-primary font-bold">»</span> Expert in Premium UI/UX Implementation
                    </li>
                    <li className="flex gap-2">
                       <span className="text-primary font-bold">»</span> Technical Leadership at Guru Crafts
                    </li>
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </motion.div>
      </main>

      <div className="print:hidden">
        <Footer />
      </div>
    </div>
  )
}

