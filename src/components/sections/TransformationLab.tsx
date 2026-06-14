"use client"
import { FadeIn } from "@/components/ui/FadeIn"
import { GlassPanel } from "@/components/ui/GlassPanel"
import { ArrowRight } from "lucide-react"

const transformations = [
  { metric: "Website Speed", before: "6.5s Load Time", after: "0.8s Load Time" },
  { metric: "Search Visibility", before: "Page 4 Rankings", after: "Top 3 Local Pack" },
  { metric: "Mobile Experience", before: "Not Responsive", after: "App-like Speed" },
]

export function TransformationLab() {
  return (
    <section className="relative py-24 px-6 max-w-5xl mx-auto z-10">
      <FadeIn>
        <div className="mb-16 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 text-cyan-400 text-sm font-mono mb-4">
            <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
            METRICS_LAB
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">RESULTS TRANSFORMATION</h2>
        </div>
      </FadeIn>

      <div className="space-y-4">
        {transformations.map((t, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <GlassPanel intensity="low" className="p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 hover:border-cyan-500/30 transition-colors">
              <div className="w-full md:w-1/3 text-center md:text-left">
                <h3 className="text-lg font-bold text-white uppercase tracking-wider font-mono">{t.metric}</h3>
              </div>
              
              <div className="flex items-center gap-4 md:gap-8 w-full md:w-2/3 justify-center md:justify-end">
                <div className="text-slate-500 font-mono text-sm md:text-base line-through opacity-70">
                  {t.before}
                </div>
                <ArrowRight className="w-5 h-5 text-cyan-400" />
                <div className="text-cyan-400 font-mono text-sm md:text-base font-bold drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]">
                  {t.after}
                </div>
              </div>
            </GlassPanel>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
