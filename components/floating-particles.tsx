"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
  shape: "circle" | "square" | "triangle"
}

export function FloatingParticles() {
  const containerRef = useRef<HTMLDivElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const animationRef = useRef<number>()

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const createParticle = (): Particle => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 4 + 2,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: (Math.random() - 0.5) * 0.3,
      opacity: Math.random() * 0.5 + 0.1,
      shape: ["circle", "square", "triangle"][Math.floor(Math.random() * 3)] as "circle" | "square" | "triangle",
    })

    const initParticles = () => {
      particlesRef.current = []
      for (let i = 0; i < 15; i++) {
        particlesRef.current.push(createParticle())
      }
    }

    const updateParticles = () => {
      particlesRef.current.forEach((particle) => {
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Wrap around screen
        if (particle.x > window.innerWidth) particle.x = -particle.size
        if (particle.x < -particle.size) particle.x = window.innerWidth
        if (particle.y > window.innerHeight) particle.y = -particle.size
        if (particle.y < -particle.size) particle.y = window.innerHeight
      })
    }

    const renderParticles = () => {
      // Clear existing particles
      container.innerHTML = ""

      particlesRef.current.forEach((particle, index) => {
        const element = document.createElement("div")
        element.className = "absolute pointer-events-none transition-all duration-1000"
        element.style.left = `${particle.x}px`
        element.style.top = `${particle.y}px`
        element.style.width = `${particle.size}px`
        element.style.height = `${particle.size}px`
        element.style.opacity = particle.opacity.toString()

        const isDark = document.documentElement.classList.contains("dark")
        const color = isDark ? "rgb(34, 197, 94)" : "rgb(22, 163, 74)"

        switch (particle.shape) {
          case "circle":
            element.style.borderRadius = "50%"
            element.style.backgroundColor = color
            break
          case "square":
            element.style.backgroundColor = "transparent"
            element.style.border = `1px solid ${color}`
            break
          case "triangle":
            element.style.width = "0"
            element.style.height = "0"
            element.style.borderLeft = `${particle.size / 2}px solid transparent`
            element.style.borderRight = `${particle.size / 2}px solid transparent`
            element.style.borderBottom = `${particle.size}px solid ${color}`
            break
        }

        container.appendChild(element)
      })
    }

    const animate = () => {
      updateParticles()
      renderParticles()
      animationRef.current = requestAnimationFrame(animate)
    }

    initParticles()
    animate()

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0" />
}
