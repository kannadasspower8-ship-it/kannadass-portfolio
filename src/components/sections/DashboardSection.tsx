"use client"
import { GlassPanel } from "@/components/ui/GlassPanel"
import { FadeIn } from "@/components/ui/FadeIn"
import { Activity, BarChart, Globe, Zap, Search, Users } from "lucide-react"

const stats = [
  { label: "Websites Built", value: "3", icon: Globe, trend: "High Performance" },
  { label: "SEO Projects", value: "3", icon: Search, trend: "Page 1 Rankings" },
  { label: "Active Projects", value: "1", icon: Activity, trend: "In Development" },
  { label: "Avg. Performance", value: "98/100", icon: Zap, trend: "Lighthouse Score" },
  { label: "Search Visibility", value: "+300%", icon: BarChart, trend: "Average Growth" },
]

export function DashboardSection() {
  return (
    <section id="mission-control" className="relative py-24 px-6 max-w-6xl mx-auto z-10">
      <FadeIn>
        <div className="mb-16 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 text-cyan-400 text-sm font-mono mb-4">
            <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" />
            DASHBOARD
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">MISSION CONTROL</h2>
          <p className="text-slate-400 font-mono text-sm max-w-xl">
            REAL-TIME TELEMETRY ON DIGITAL TRANSFORMATIONS AND BUSINESS GROWTH METRICS.
          </p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <GlassPanel intensity="medium" className="p-6 relative group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-cyan-500/5 group-hover:from-cyan-500/5 group-hover:to-cyan-500/10 transition-colors duration-500" />
              
              <div className="flex justify-between items-start mb-8 relative z-10">
                <div className="p-3 rounded-xl bg-slate-800/50 border border-white/5 text-cyan-400">
                  <stat.icon className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-slate-500">{stat.trend}</span>
              </div>
              
              <div className="relative z-10">
                <h3 className="text-4xl font-bold text-white mb-1 tracking-tight">{stat.value}</h3>
                <p className="text-sm text-slate-400 font-medium tracking-wide uppercase">{stat.label}</p>
              </div>
            </GlassPanel>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
