"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Lock, Users, Terminal, ShieldCheck, Zap } from "lucide-react"

export function HackerAuth() {
  const handleGithubLogin = () => {
    window.open("https://github.com/kihiu254", "_blank", "noopener,noreferrer")
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  }

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  }

  const features = [
    {
      icon: Github,
      title: "GitHub Integration",
      desc: "Access source code and contribute to open-source project streams.",
      action: "Connect GitHub",
      onClick: handleGithubLogin,
      accent: "text-primary",
    },
    {
      icon: ShieldCheck,
      title: "Secure Access",
      desc: "Protected content portals and exclusive architectural insights.",
      label: "Encrypted Node",
      badgeIcon: Lock,
      accent: "text-secondary",
    },
    {
      icon: Users,
      title: "Network Community",
      desc: "Connect with elite developers and digital tech enthusiasts.",
      label: "Active Session",
      badgeIcon: Zap,
      accent: "text-primary",
    }
  ]

  return (
    <section id="auth" className="py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] opacity-20 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-sm text-primary tracking-[0.3em] uppercase flex items-center justify-center gap-3"
          >
            <Terminal size={16} />
            <span>sys --auth --establish</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-6xl font-black tracking-tight"
          >
            Connect & <span className="text-transparent bg-clip-text bg-gradient-mesh italic">Collaborate</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground leading-relaxed"
          >
            Join the digital network to explore exclusive source code and collaborate on high-performance developments in real-time.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {features.map((feature, i) => (
            <motion.div key={i} variants={cardVariants}>
              <Card className="h-full glass border-white/5 hover:border-primary/30 transition-all duration-500 rounded-3xl group relative overflow-hidden flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <CardHeader className="text-center pt-8">
                  <div className={`w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mx-auto mb-6 neon-border transition-transform group-hover:scale-110 group-hover:rotate-3 ${feature.accent}`}>
                    <feature.icon size={28} />
                  </div>
                  <CardTitle className="text-xl font-black tracking-tighter uppercase">{feature.title}</CardTitle>
                </CardHeader>
                
                <CardContent className="text-center px-8 pb-10 flex-grow flex flex-col justify-between space-y-8">
                  <CardDescription className="text-base text-muted-foreground/80 font-medium">
                    {feature.desc}
                  </CardDescription>

                  {feature.action ? (
                    <Button 
                      onClick={feature.onClick}
                      className="w-full h-12 bg-gradient-mesh text-white font-bold tracking-tight rounded-xl shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      {feature.action}
                    </Button>
                  ) : (
                    <div className="flex items-center justify-center gap-3 py-3 px-4 rounded-xl bg-white/5 border border-white/10 text-primary font-mono text-xs tracking-widest uppercase">
                      {feature.badgeIcon && <feature.badgeIcon size={14} className="animate-pulse" />}
                      {feature.label}
                    </div>
                  )}
                </CardContent>

                {/* Decorative scanning line animation on hover */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity -translate-y-full group-hover:animate-scanline" />
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
