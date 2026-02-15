"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Github, Sun, Moon, Sparkles } from "lucide-react"
import { useTheme } from "next-themes"
import { Logo } from "@/components/logo"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"

export function PortfolioHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "About", href: "/#about", id: "about" },
    { label: "Skills", href: "/#skills", id: "skills" },
    { label: "Projects", href: "/projects", id: "projects" },
    { label: "Resume", href: "/resume", id: "resume" },
    { label: "Contact", href: "/#contact", id: "contact" },
  ]

  const handleNavClick = (e: React.MouseEvent, item: typeof navItems[0]) => {
    if (item.href.startsWith("/#") && pathname === "/") {
      e.preventDefault()
      const element = document.getElementById(item.id)
      if (element) {
        const offset = 80
        const bodyRect = document.body.getBoundingClientRect().top
        const elementRect = element.getBoundingClientRect().top
        const elementPosition = elementRect - bodyRect
        const offsetPosition = elementPosition - offset

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        })
      }
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
          <Link href="/" className="flex items-center gap-2 group">
            <Logo onClick={() => {}} />
          </Link>

          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item)}
                className={`px-4 py-2 rounded-full transition-all text-sm font-medium ${
                  (pathname === item.href || (pathname === "/" && item.href.startsWith("/#")))
                    ? "text-primary bg-primary/5"
                    : "text-foreground/70 hover:text-primary hover:bg-primary/5"
                }`}
              >
                {item.label}
              </Link>
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
              onClick={(e) => handleNavClick(e, { label: "Contact", href: "/#contact", id: "contact" })}
              asChild
            >
              <Link href="/#contact">Hire Me</Link>
            </Button>

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

        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? "max-h-[500px] mt-4 opacity-100" : "max-h-0 opacity-0"
            }`}
        >
          <div className="glass rounded-2xl p-4 flex flex-col space-y-2 border border-white/10">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item)}
                className="w-full text-left px-4 py-3 rounded-xl hover:bg-primary/10 hover:text-primary transition-colors text-sm font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
