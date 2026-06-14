"use client"
import { FadeIn } from "@/components/ui/FadeIn"
import { GlassPanel } from "@/components/ui/GlassPanel"
import { Globe, Search, BarChart3, Smartphone, Zap, Bot, TrendingUp } from "lucide-react"

const modules = [
  { title: "Business Websites", icon: Globe, description: "High-conversion web platforms built on Next.js." },
  { title: "Local SEO", icon: Search, description: "Dominate local search results and Google Maps." },
  { title: "Search Console", icon: BarChart3, description: "Advanced indexing and search performance tracking." },
  { title: "Mobile Optimization", icon: Smartphone, description: "Lightning-fast mobile experiences." },
  { title: "Performance", icon: Zap, description: "95+ Lighthouse scores guaranteed." },
  { title: "Growth Systems", icon: TrendingUp, description: "End-to-end digital growth architectures." },
]

export function GrowthEngine() {
  return (
    <section className="relative py-24 px-6 max-w-6xl mx-auto z-10">
      <FadeIn>
        <div className="mb-16 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 text-cyan-400 text-sm font-mono mb-4">
            <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
            SOLUTIONS
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">BUSINESS GROWTH ENGINE</h2>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {modules.map((m, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <GlassPanel intensity="low" className="p-6 h-full hover:border-cyan-500/50 transition-colors group cursor-pointer relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <m.icon className="w-8 h-8 text-cyan-400 mb-4 group-hover:scale-110 transition-transform relative z-10" />
              <h3 className="text-lg font-bold text-white mb-2 relative z-10">{m.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed relative z-10">{m.description}</p>
            </GlassPanel>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
