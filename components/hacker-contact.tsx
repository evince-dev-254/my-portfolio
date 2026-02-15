"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Send, Github, Linkedin, Terminal, Globe } from "lucide-react"

export function HackerContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Contact form submitted:", formData)
  }

  const contactInfo = [
    { icon: Mail, label: "Email", value: "1kihiupaul@gmail.com", href: "mailto:1kihiupaul@gmail.com" },
    { icon: Phone, label: "Phone", value: "+254 112 081 866", href: "tel:+254112081866" },
    { icon: MapPin, label: "Location", value: "Meru, Kenya", href: "#" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20 space-y-6"
        >
          <div className="flex items-center justify-center gap-3 font-mono text-primary text-sm tracking-[0.4em] uppercase">
            <Terminal size={16} />
            <span>./connect.sh --establish</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-black tracking-tight">
            Initialize <span className="text-primary italic">Contact</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ready to collaborate on innovative projects? Let&apos;s establish a secure connection and build something extraordinary together.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-2 gap-12"
        >
          {/* Contact Information */}
          <motion.div variants={itemVariants} className="space-y-8">
            <Card className="glass border-white/5 hover:border-primary/30 transition-all duration-500 rounded-3xl group overflow-hidden">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-black tracking-tighter uppercase flex items-center gap-3">
                  <Globe className="text-primary" size={24} />
                  Contact Protocols
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8 pt-4">
                {contactInfo.map((contact, i) => (
                  <div key={contact.label} className="flex items-center gap-6 group/item">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover/item:scale-110 transition-transform neon-border">
                      <contact.icon size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] mb-1">{contact.label}</p>
                      {contact.href !== "#" ? (
                        <a href={contact.href} className="text-lg font-bold hover:text-primary transition-colors tracking-tight">
                          {contact.value}
                        </a>
                      ) : (
                        <p className="text-lg font-bold tracking-tight">{contact.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <div className="flex items-center gap-4 pt-6">
              <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground px-4 py-2 rounded-full border border-white/5 bg-white/5">
                <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                <span>Status: Available for hire</span>
              </div>
              <Badge variant="outline" className="text-primary border-primary/30 font-bold px-4 py-2 rounded-full uppercase text-[10px] tracking-widest">
                Meru Node active
              </Badge>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <Card className="glass border-white/5 hover:border-primary/30 transition-all duration-500 rounded-3xl p-2 relative overflow-hidden group">
              <CardHeader className="p-8">
                <CardTitle className="text-2xl font-black tracking-tighter uppercase flex items-center gap-3">
                  <Send className="text-primary" size={24} />
                  Send Message
                </CardTitle>
              </CardHeader>
              <CardContent className="px-8 pb-8 pt-0">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest px-1">Identity</label>
                       <Input
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bg-white/5 border-white/10 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl h-12 font-medium"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest px-1">Signal End</label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-white/5 border-white/10 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl h-12 font-medium"
                        placeholder="email@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest px-1">Payload</label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-white/5 border-white/10 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl min-h-[140px] font-medium"
                      placeholder="Describe your project or inquiry..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full h-14 bg-gradient-mesh text-white font-black tracking-tight text-lg rounded-xl shadow-xl shadow-primary/20 hover:scale-[1.01] transition-all group-hover:neon-glow">
                    <Send className="mr-3 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    Transmit Data
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
