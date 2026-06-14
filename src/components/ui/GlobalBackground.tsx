"use client"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export function GlobalBackground() {
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-[#030712]">
      {/* Dynamic Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-900/15 via-[#030712] to-[#030712]" />
      
      {mounted && (
        <>
          {/* Animated Particles */}
          <div className="absolute inset-0 opacity-20">
            {Array.from({ length: 40 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-cyan-500 rounded-full transform-gpu"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  willChange: "transform, opacity"
                }}
                animate={{
                  y: [0, Math.random() * -150 - 50],
                  opacity: [Math.random() * 0.5 + 0.1, Math.random() * 0.8 + 0.4, 0]
                }}
                transition={{
                  duration: Math.random() * 10 + 15,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            ))}
          </div>

          {/* Global Glowing Orbs */}
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }} 
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            style={{ willChange: "transform, opacity" }}
            className="absolute top-[10%] right-[10%] w-[35rem] h-[35rem] bg-cyan-600/20 rounded-full blur-[150px] transform-gpu"
          />
          <motion.div 
            animate={{ scale: [1, 1.5, 1], opacity: [0.1, 0.2, 0.1] }} 
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            style={{ willChange: "transform, opacity" }}
            className="absolute bottom-[20%] left-[5%] w-[30rem] h-[30rem] bg-blue-600/10 rounded-full blur-[120px] transform-gpu"
          />
          <motion.div 
            animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }} 
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 5 }}
            style={{ willChange: "transform, opacity" }}
            className="absolute top-[60%] right-[20%] w-[25rem] h-[25rem] bg-purple-600/10 rounded-full blur-[120px] transform-gpu"
          />
        </>
      )}

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiLz48L3N2Zz4=')] opacity-50" />
    </div>
  )
}
