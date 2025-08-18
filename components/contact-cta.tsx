"use client"

import { Badge } from "@/components/ui/badge"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Github, Download, Calendar } from "lucide-react"

export function ContactCTA() {
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
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/kihiu254",
      href: "https://github.com/kihiu254",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-sans text-3xl md:text-4xl font-bold mb-4">Let's Connect</h2>
          <p className="font-serif text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on innovative projects or discuss opportunities
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="font-sans font-bold text-xl">Get In Touch</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{item.label}</p>
                    {item.href !== "#" ? (
                      <a href={item.href} className="text-muted-foreground hover:text-primary transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Attachment Opportunity */}
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="w-5 h-5 text-primary" />
                <Badge variant="outline" className="text-primary border-primary/50">
                  Available Sept-Dec 2025
                </Badge>
              </div>
              <CardTitle className="font-sans font-bold text-xl">Seeking Attachment Opportunity</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Looking for practical experience in software development, web design, and real-world IT operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  className="flex items-center gap-2"
                  onClick={() => window.open("mailto:1kihiupaul@gmail.com?subject=Attachment Opportunity")}
                >
                  <Mail className="w-4 h-4" />
                  Discuss Opportunity
                </Button>
                <Button variant="outline" className="flex items-center gap-2 bg-transparent">
                  <Download className="w-4 h-4" />
                  Download CV
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
