"use client"
import { HTMLAttributes, ReactNode } from "react"
import { cn } from "@/lib/utils"

interface GlassPanelProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  intensity?: "low" | "medium" | "high"
}

export function GlassPanel({ children, className, intensity = "medium", ...props }: GlassPanelProps) {
  const intensityClasses = {
    low: "bg-slate-900/40 backdrop-blur-sm border-white/5",
    medium: "bg-slate-900/60 backdrop-blur-md border-white/10",
    high: "bg-slate-900/80 backdrop-blur-xl border-white/20",
  }

  return (
    <div 
      className={cn(
        "rounded-2xl border shadow-[0_8px_32px_rgba(0,0,0,0.4)] overflow-hidden transition-all duration-300",
        intensityClasses[intensity],
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
