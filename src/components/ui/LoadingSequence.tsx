"use client"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export function LoadingSequence({ onComplete }: { onComplete: () => void }) {
  const [step, setStep] = useState(0)

  const steps = [
    "INITIALIZING KANNADASS OS...",
    "Loading AI Systems...",
    "Loading SEO Engine...",
    "Loading Business Intelligence...",
    "Loading Growth Framework...",
    "Loading Project Universe...",
    "System Ready"
  ]

  useEffect(() => {
    const totalDuration = 3000
    const stepDuration = totalDuration / steps.length

    let currentStep = 0
    const interval = setInterval(() => {
      currentStep++
      if (currentStep < steps.length) {
        setStep(currentStep)
      } else {
        clearInterval(interval)
        setTimeout(() => {
          onComplete()
        }, 600)
      }
    }, stepDuration)

    return () => clearInterval(interval)
  }, [onComplete, steps.length])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#030712] font-mono pointer-events-none"
    >
      <div className="w-full max-w-md p-8 flex flex-col items-center">
        <div className="w-full flex justify-end mb-4">
          <span className="font-mono text-xs text-cyan-400/50">v2.0.26</span>
        </div>

        {/* Large Clear User Avatar */}
        <div className="flex flex-col items-center gap-4 mb-12">
          <div className="relative w-32 h-32 rounded-full border-2 border-cyan-400/50 p-1 shadow-[0_0_40px_rgba(34,211,238,0.2)]">
            <div className="relative w-full h-full rounded-full overflow-hidden bg-slate-900">
              <img src="/images/myphoto.jpeg" alt="Kannadass T" className="w-full h-full object-cover object-top" />
              
              {/* Clean Scanning Laser */}
              <motion.div
                className="absolute left-0 right-0 h-[2px] bg-cyan-400/60 shadow-[0_0_10px_rgba(34,211,238,1)]"
                animate={{ top: ["-10%", "110%", "-10%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </div>
          <div className="flex flex-col items-center text-center">
            <span className="text-cyan-400 font-bold tracking-widest text-xl drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">KANNADASS_OS</span>
            <span className="text-[10px] text-cyan-400/80 animate-pulse mt-2 tracking-widest">BIOMETRIC_AUTH_IN_PROGRESS...</span>
          </div>
        </div>

        <div className="w-full space-y-2 h-48 flex flex-col justify-end">
          <AnimatePresence mode="popLayout">
            {steps.slice(0, step + 1).map((s, i) => (
              <motion.div
                key={s}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className={cn(
                  "text-sm tracking-wider",
                  i === steps.length - 1 ? "text-cyan-400 font-bold mt-6 text-lg" : "text-slate-400",
                  i === 0 ? "text-white mb-4" : ""
                )}
              >
                {i > 0 && i < steps.length - 1 ? "> " : ""}{s}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        <div className="mt-8 h-[2px] w-full bg-slate-800 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]"
            initial={{ width: "0%" }}
            animate={{ width: `${((step + 1) / steps.length) * 100}%` }}
            transition={{ duration: 0.2 }}
          />
        </div>
      </div>
    </motion.div>
  )
}
