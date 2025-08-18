"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Github, Sun, Moon, Terminal } from "lucide-react"
import { useTheme } from "next-themes"

export function PortfolioHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-primary/30 hover-glow">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 font-mono text-xl font-bold text-primary">
            <Terminal className="h-5 w-5" />
            <span className="glitch-text" data-text="Paul Kihiu">
              Paul Kihiu
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8 font-mono">
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary transition-colors hover-glow px-2 py-1 rounded"
            >
              <span className="text-secondary">$</span> about
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-foreground hover:text-primary transition-colors hover-glow px-2 py-1 rounded"
            >
              <span className="text-secondary">$</span> skills
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-foreground hover:text-primary transition-colors hover-glow px-2 py-1 rounded"
            >
              <span className="text-secondary">$</span> projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-primary transition-colors hover-glow px-2 py-1 rounded"
            >
              <span className="text-secondary">$</span> contact
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="hover-glow border border-primary/30 hover:border-primary"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              asChild
              className="hover-glow border border-primary/30 hover:border-primary"
            >
              <a href="https://github.com/kihiu254" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden hover-glow border border-primary/30 hover:border-primary"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-primary/30 pt-4 font-mono">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("about")}
                className="text-left text-foreground hover:text-primary transition-colors hover-glow px-2 py-1 rounded"
              >
                <span className="text-secondary">$</span> about
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-left text-foreground hover:text-primary transition-colors hover-glow px-2 py-1 rounded"
              >
                <span className="text-secondary">$</span> skills
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-left text-foreground hover:text-primary transition-colors hover-glow px-2 py-1 rounded"
              >
                <span className="text-secondary">$</span> projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left text-foreground hover:text-primary transition-colors hover-glow px-2 py-1 rounded"
              >
                <span className="text-secondary">$</span> contact
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
