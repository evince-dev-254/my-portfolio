"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Github, Download } from "lucide-react"

export function Contact() {
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
      label: "GitHub (Primary)",
      value: "github.com/kihiu254",
      href: "https://github.com/kihiu254",
    },
    {
      icon: Github,
      label: "GitHub (Secondary)",
      value: "github.com/evince-dev-254",
      href: "https://github.com/evince-dev-254",
    },
  ]

  const attachmentGoals = [
    "Python Programming",
    "Data Analysis & Visualization",
    "Cloud Computing",
    "Machine Learning Applications",
    "Database Design & Management",
    "Content Publishing",
    "Data Mining Techniques",
  ]

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-sans font-black text-foreground mb-4">Let's Connect</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on innovative projects or discuss opportunities
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="font-sans font-black text-xl">Get In Touch</CardTitle>
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

            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="font-sans font-black text-xl">Languages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-foreground">English</span>
                    <span className="text-muted-foreground">Fluent</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-foreground">Kiswahili</span>
                    <span className="text-muted-foreground">Fluent</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Attachment Goals */}
          <div className="space-y-8">
            <Card className="border-border/50 pulse-glow">
              <CardHeader>
                <CardTitle className="font-sans font-black text-xl">Seeking Attachment Opportunity</CardTitle>
                <p className="text-muted-foreground">September - December 2025</p>
              </CardHeader>
              <CardContent>
                <p className="text-foreground mb-6 leading-relaxed">
                  Looking for practical experience in software development, web design, and real-world IT operations.
                  Areas of interest include:
                </p>
                <div className="grid grid-cols-1 gap-3 mb-6">
                  {attachmentGoals.map((goal) => (
                    <div key={goal} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-foreground">{goal}</span>
                    </div>
                  ))}
                </div>
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

            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="font-sans font-black text-xl">Hobbies & Interests</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span className="text-foreground">Exploring new destinations and cultures</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span className="text-foreground">Watching a wide range of films</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span className="text-foreground">Reading fiction and non-fiction across genres</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
