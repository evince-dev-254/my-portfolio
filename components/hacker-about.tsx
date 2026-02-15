"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, GraduationCap, Calendar, Heart, Sparkles, Terminal, Code2 } from "lucide-react"

export function HackerAbout() {
  const stats = [
    { icon: MapPin, label: "Location", value: "Meru, Kenya" },
    { icon: GraduationCap, label: "Education", value: "Diploma, Level 6" },
    { icon: Calendar, label: "Status", value: "Awaiting Graduation" },
    { icon: Heart, label: "Passion", value: "Digital Innovation" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-2 gap-20 items-center"
        >
          {/* Left Column: Story */}
          <div className="space-y-10">
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="flex items-center gap-3 font-mono text-primary text-sm tracking-widest uppercase">
                <Terminal size={16} />
                <span>./whoami --verbose</span>
              </div>
              <h2 className="text-4xl lg:text-6xl font-black tracking-tight leading-none text-foreground">
                Driven by Curiosity,<br />
                <span className="text-primary italic">Powered by Code</span>
              </h2>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
              <p>
                I am a passionate <span className="text-foreground font-bold">Software Engineer</span> with a strong foundation in modern web technologies. 
                My approach combines technical precision with a keen eye for design, ensuring that every application I build is not only functional but also visually captivating.
              </p>
              <p>
                Based in Meru, Kenya, I've spent the last few years honing my skills in full-stack development, focusing on creating scalable solutions that make a tangible impact.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="grid sm:grid-cols-2 gap-4">
              {stats.map((item, i) => (
                <Card key={i} className="glass border-white/5 hover:border-primary/30 transition-all duration-500 rounded-2xl group overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <CardContent className="p-5 flex items-center gap-4 relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform neon-border">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-0.5">{item.label}</p>
                      <p className="font-bold text-foreground">{item.value}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Visual Component */}
          <motion.div variants={itemVariants} className="relative group">
            <div className="absolute -inset-10 bg-primary/20 blur-[100px] opacity-20 group-hover:opacity-40 transition-opacity duration-1000" />
            
            <div className="relative glass border-white/10 rounded-[2.5rem] p-1 lg:p-1 overflow-hidden shadow-2xl">
              <div className="bg-background/40 backdrop-blur-3xl rounded-[2.4rem] p-8 lg:p-12 space-y-10 border border-white/5">
                <div className="flex items-center justify-between">
                  <div className="w-16 h-16 bg-gradient-mesh rounded-2xl flex items-center justify-center shadow-2xl shadow-primary/40 group-hover:rotate-6 transition-transform">
                    <Code2 size={32} className="text-white" />
                  </div>
                  <Badge variant="outline" className="text-primary border-primary/30 font-mono px-4 py-1.5 rounded-full uppercase tracking-tighter">
                    Lvl 6 Engineer
                  </Badge>
                </div>

                <div className="space-y-6">
                  <h3 className="text-3xl font-black tracking-tight text-foreground">Academic Foundation</h3>
                  <p className="text-xl text-primary/80 font-bold italic tracking-wide">The Meru National Polytechnic</p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Developing a robust understanding of Computer Science principles, algorithm design, and software engineering methodologies. Currently awaiting graduation to mark the completion of my formal diploma studies.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                  {["System Architecture", "Algorithm Dev", "UX Strategy"].map((tag) => (
                    <span 
                      key={tag} 
                      className="px-3 py-1.5 rounded-md text-[11px] font-bold uppercase tracking-widest bg-white/5 border border-white/10 text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Decorative HUD Elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-12 -right-12 w-48 h-48 border border-primary/10 rounded-full border-dashed"
              />
              <div className="absolute top-10 right-10 w-2 h-2 rounded-full bg-primary animate-pulse shadow-glow" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
