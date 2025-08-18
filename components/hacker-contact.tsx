"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react"

export function HackerContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("[v0] Contact form submitted:", formData)
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "1kihiupaul@gmail.com",
      href: "mailto:1kihiupaul@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+254 112 081 866",
      href: "tel:+254112081866",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Meru, Kenya",
      href: "#",
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/kihiu254",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "#",
    },
  ]

  return (
    <section className="py-20 relative">
      {/* Background effects */}
      <div className="absolute inset-0 matrix-bg opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="font-mono text-sm text-primary mb-4">
            <span className="text-muted-foreground">$</span> ./connect.sh --establish-communication
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="glitch-text text-primary" data-text="Initialize Contact">
              Initialize Contact
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to collaborate on innovative projects? Let's establish a secure connection and build something
            extraordinary together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border-primary/30 bg-card/50 backdrop-blur-sm hover-glow">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-primary font-mono">Contact Protocols</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((contact) => {
                  const Icon = contact.icon
                  return (
                    <div key={contact.label} className="flex items-center gap-4 group">
                      <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-mono text-sm text-muted-foreground">{contact.label}</p>
                        {contact.href !== "#" ? (
                          <a
                            href={contact.href}
                            className="text-foreground hover:text-primary transition-colors font-mono"
                          >
                            {contact.value}
                          </a>
                        ) : (
                          <p className="text-foreground font-mono">{contact.value}</p>
                        )}
                      </div>
                    </div>
                  )
                })}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="border-primary/30 bg-card/50 backdrop-blur-sm hover-glow">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-primary font-mono">Social Networks</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon
                    return (
                      <Button
                        key={social.label}
                        variant="outline"
                        size="lg"
                        asChild
                        className="hover-glow border-primary/50 hover:border-primary font-mono bg-transparent"
                      >
                        <a
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <Icon className="h-5 w-5" />
                          {social.label}
                        </a>
                      </Button>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Status indicator */}
            <div className="flex items-center gap-3 font-mono text-sm">
              <div className="w-3 h-3 bg-secondary rounded-full animate-pulse" />
              <span className="text-muted-foreground">Status:</span>
              <Badge className="bg-secondary/20 text-secondary border-secondary/50">Available for Projects</Badge>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="border-primary/30 bg-card/50 backdrop-blur-sm hover-glow">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-primary font-mono">Send Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-mono text-muted-foreground">Name</label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-input border-primary/30 focus:border-primary font-mono"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-mono text-muted-foreground">Email</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-input border-primary/30 focus:border-primary font-mono"
                    placeholder="your.email@domain.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-mono text-muted-foreground">Message</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-input border-primary/30 focus:border-primary font-mono min-h-32"
                    placeholder="Describe your project or inquiry..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full hover-glow font-mono">
                  <Send className="mr-2 h-5 w-5" />
                  Transmit Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Terminal-style footer */}
        <div className="text-center mt-16">
          <div className="font-mono text-sm text-muted-foreground">
            <span className="text-primary">$</span> Connection established. Awaiting response...
            <span className="terminal-cursor" />
          </div>
        </div>
      </div>
    </section>
  )
}
