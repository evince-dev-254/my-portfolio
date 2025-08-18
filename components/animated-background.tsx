"use client"

import { useEffect, useRef } from "react"

interface Node {
  x: number
  y: number
  vx: number
  vy: number
  connections: number[]
}

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const nodesRef = useRef<Node[]>([])
  const animationRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const initNodes = () => {
      const nodeCount = Math.floor((window.innerWidth * window.innerHeight) / 15000)
      nodesRef.current = []

      for (let i = 0; i < nodeCount; i++) {
        nodesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          connections: [],
        })
      }
    }

    const updateNodes = () => {
      nodesRef.current.forEach((node) => {
        node.x += node.vx
        node.y += node.vy

        // Bounce off edges
        if (node.x <= 0 || node.x >= canvas.width) node.vx *= -1
        if (node.y <= 0 || node.y >= canvas.height) node.vy *= -1

        // Keep within bounds
        node.x = Math.max(0, Math.min(canvas.width, node.x))
        node.y = Math.max(0, Math.min(canvas.height, node.y))
      })
    }

    const findConnections = () => {
      const maxDistance = 120
      nodesRef.current.forEach((node, i) => {
        node.connections = []
        nodesRef.current.forEach((otherNode, j) => {
          if (i !== j) {
            const distance = Math.sqrt(Math.pow(node.x - otherNode.x, 2) + Math.pow(node.y - otherNode.y, 2))
            if (distance < maxDistance) {
              node.connections.push(j)
            }
          }
        })
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Get theme colors
      const isDark = document.documentElement.classList.contains("dark")
      const nodeColor = isDark ? "rgba(34, 197, 94, 0.6)" : "rgba(34, 197, 94, 0.4)"
      const connectionColor = isDark ? "rgba(34, 197, 94, 0.2)" : "rgba(34, 197, 94, 0.15)"

      // Draw connections
      nodesRef.current.forEach((node, i) => {
        node.connections.forEach((connectionIndex) => {
          const connectedNode = nodesRef.current[connectionIndex]
          const distance = Math.sqrt(Math.pow(node.x - connectedNode.x, 2) + Math.pow(node.y - connectedNode.y, 2))
          const opacity = 1 - distance / 120

          ctx.beginPath()
          ctx.moveTo(node.x, node.y)
          ctx.lineTo(connectedNode.x, connectedNode.y)
          ctx.strokeStyle = connectionColor.replace("0.2)", `${opacity * 0.2})`)
          ctx.lineWidth = 1
          ctx.stroke()
        })
      })

      // Draw nodes
      nodesRef.current.forEach((node) => {
        ctx.beginPath()
        ctx.arc(node.x, node.y, 2, 0, Math.PI * 2)
        ctx.fillStyle = nodeColor
        ctx.fill()

        // Add glow effect
        ctx.beginPath()
        ctx.arc(node.x, node.y, 4, 0, Math.PI * 2)
        ctx.fillStyle = isDark ? "rgba(34, 197, 94, 0.1)" : "rgba(34, 197, 94, 0.08)"
        ctx.fill()
      })
    }

    const animate = () => {
      updateNodes()
      findConnections()
      draw()
      animationRef.current = requestAnimationFrame(animate)
    }

    resizeCanvas()
    initNodes()
    animate()

    const handleResize = () => {
      resizeCanvas()
      initNodes()
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ background: "transparent" }} />
  )
}
