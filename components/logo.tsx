"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

interface LogoProps {
  className?: string
  iconSize?: number
  textSize?: string
  onClick?: () => void
}

export function Logo({ className = "", iconSize = 28, textSize = "text-xl", onClick }: LogoProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className={`flex items-center gap-4 cursor-pointer group select-none ${className}`} 
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        {/* Layered Glow Background */}
        <motion.div
          animate={{
            scale: isHovered ? [1, 1.15, 1.1] : 1,
            opacity: isHovered ? [0.3, 0.6, 0.4] : 0.2,
          }}
          className="absolute inset-x-0 inset-y-0 -m-2 bg-primary blur-2xl rounded-full"
        />
        
        {/* SVG Container */}
        <div className="relative w-12 h-12 flex items-center justify-center">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10">
            {/* Outer Hexagon Frame */}
            <motion.path
              d="M24 4L42 14V34L24 44L6 34V14L24 4Z"
              stroke="currentColor"
              strokeWidth="1"
              className="text-primary/20"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
            
            {/* Inner "PK" Circuit Symbol */}
            <motion.path
              d="M16 14V34M16 14H24C28 14 30 16 30 18.5C30 21 28 23.5 24 23.5H16M32 34L24 23.5L32 14"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary neon-pulse"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
            />

            {/* Electronic Node Points */}
            {[
              { cx: 16, cy: 14 }, { cx: 16, cy: 34 }, 
              { cx: 30, cy: 18.5 }, { cx: 24, cy: 23.5 },
              { cx: 32, cy: 14 }, { cx: 32, cy: 34 }
            ].map((node, i) => (
              <motion.circle
                key={i}
                cx={node.cx}
                cy={node.cy}
                r="2"
                fill="white"
                initial={{ scale: 0 }}
                animate={{ scale: isHovered ? 1.5 : 1 }}
                className="shadow-sm shadow-primary"
              />
            ))}

            {/* Animated Connection Lines */}
            <motion.path
              d="M4 14H12M36 14H44M4 34H12M36 34H44"
              stroke="currentColor"
              strokeWidth="1"
              className="text-secondary/40"
              animate={{ opacity: [0.2, 0.6, 0.2] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </svg>

          {/* Glitch Overlay (Hidden by default, shown on hover/interactions) */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 z-20 pointer-events-none"
              >
                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay animate-glitch" />
                <div className="absolute inset-0 border border-primary/30 rounded-xl animate-glitch" style={{ animationDelay: '0.1s' }} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      
      {/* Brand Text */}
      <div className={`flex flex-col tracking-tighter transition-all duration-300 ${isHovered ? 'translate-x-1' : ''}`}>
        <div className={`font-black ${textSize} text-foreground leading-none flex gap-1`}>
          {["P", "A", "U", "L"].map((char, i) => (
            <motion.span
              key={i}
              initial={{ y: 5, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 + i * 0.1 }}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </div>
        <div className={`font-light italic ${textSize} text-primary/80 -mt-1 tracking-widest flex overflow-hidden`}>
          <motion.span
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            KIHIU
          </motion.span>
          {isHovered && (
            <motion.div 
              layoutId="underline"
              className="absolute bottom-0 left-0 right-0 h-[1px] bg-primary/30"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
            />
          )}
        </div>
      </div>
    </div>
  )
}
