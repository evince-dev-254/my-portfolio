"use client"

import { Logo } from "./logo"
import { Github, Linkedin, Twitter, Mail, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, href: "https://github.com/kihiu254", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "mailto:1kihiupaul@gmail.com", label: "Email" },
  ]

  return (
    <footer className="relative py-20 overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2 space-y-6">
            <Logo iconSize={28} textSize="text-2xl" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} />
            <p className="text-muted-foreground max-w-md text-lg leading-relaxed">
              Software Engineer passionate about building high-performance, visually stunning web and mobile applications with modern tech stacks.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  variant="ghost"
                  size="icon"
                  asChild
                  className="rounded-full hover:bg-primary/10 hover:text-primary transition-colors neon-border w-12 h-12"
                >
                  <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                    <social.icon className="w-5 h-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-bold tracking-tight text-foreground/90 uppercase text-sm tracking-widest">Navigation</h3>
            <ul className="space-y-3">
              {[
                { label: "About", id: "about" },
                { label: "Skills", id: "skills" },
                { label: "Projects", id: "projects" },
                { label: "Contact", id: "contact" },
              ].map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" })}
                    className="text-muted-foreground hover:text-primary transition-colors text-base flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/20 group-hover:bg-primary transition-colors" />
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-bold tracking-tight text-foreground/90 uppercase text-sm tracking-widest">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-muted-foreground group">
                <div className="w-10 h-10 rounded-xl glass flex items-center justify-center border border-white/5 group-hover:border-primary/30 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-base group-hover:text-foreground transition-colors">1kihiupaul@gmail.com</span>
              </li>
              <li className="pt-4">
                 <Button variant="outline" className="rounded-full group font-medium border-white/10 hover:border-primary/50">
                    Get in touch
                    <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                 </Button>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-muted-foreground text-sm font-medium">
            © {currentYear} Paul Kihiu. Built with <span className="text-primary mx-1">❤</span> using Next.js & Framer Motion.
          </div>
          <div className="flex items-center gap-8 text-sm text-muted-foreground font-medium">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-[80px] pointer-events-none" />
    </footer>
  )
}
