"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Github, Sun, Moon, Sparkles } from "lucide-react"
import { useTheme } from "next-themes"

export function PortfolioHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80 // Header height
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
      setIsMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-4 glass border-b border-white/10" : "py-6 bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div
            className="flex items-center gap-2 font-bold text-2xl cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="w-10 h-10 bg-gradient-mesh rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
              <Sparkles className="h-6 w-6" />
            </div>
            <span className="tracking-tight">
              Paul <span className="text-primary">Kihiu</span>
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-1">
            {[
              { id: "about", label: "About" },
              { id: "skills", label: "Skills" },
              { id: "projects", label: "Projects" },
              { id: "contact", label: "Contact" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-4 py-2 rounded-full text-foreground/70 hover:text-primary hover:bg-primary/5 transition-all text-sm font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full hover:bg-muted"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              asChild
              className="rounded-full border-2 hover:bg-muted hidden sm:flex"
            >
              <a href="https://github.com/kihiu254" target="_blank" rel="noopener noreferrer" title="GitHub: kihiu254">
                <Github className="h-5 w-5" />
              </a>
            </Button>

            <Button
              variant="outline"
              size="icon"
              asChild
              className="rounded-full border-2 hover:bg-muted hidden sm:flex border-secondary/50 hover:border-secondary"
            >
              <a href="https://github.com/evince-dev-254" target="_blank" rel="noopener noreferrer" title="GitHub: evince-dev-254">
                <Github className="h-5 w-5 text-secondary" />
              </a>
            </Button>

            <Button
              className="rounded-full px-6 bg-gradient-mesh text-white hover:opacity-90 shadow-lg shadow-primary/20 hidden md:flex"
              onClick={() => scrollToSection("contact")}
            >
              Hire Me
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden rounded-full hover:bg-muted"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? "max-h-64 mt-4 opacity-100" : "max-h-0 opacity-0"
            }`}
        >
          <div className="glass rounded-2xl p-4 flex flex-col space-y-2 border border-white/10">
            {[
              { id: "about", label: "About" },
              { id: "skills", label: "Skills" },
              { id: "projects", label: "Projects" },
              { id: "contact", label: "Contact" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="w-full text-left px-4 py-3 rounded-xl hover:bg-primary/10 hover:text-primary transition-colors text-sm font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
