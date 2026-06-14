"use client"
import { FadeIn } from "@/components/ui/FadeIn"

const timeline = [
  "Discovery", "Strategy", "Design", "Development", "SEO Setup", "Analytics", "Launch"
]

export function ExperienceTimeline() {
  return (
    <section className="relative py-24 px-6 max-w-6xl mx-auto z-10 overflow-hidden">
       <FadeIn>
        <div className="mb-16 flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">CLIENT TIMELINE</h2>
        </div>
      </FadeIn>
      <div className="flex overflow-x-auto pb-8 snap-x" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        <div className="flex items-center gap-8 px-4 mx-auto">
          {timeline.map((step, i) => (
             <FadeIn key={i} delay={i * 0.1} className="snap-center relative">
                {i !== timeline.length - 1 && (
                  <div className="absolute top-1/2 left-full w-8 h-[1px] bg-cyan-500/30 -translate-y-1/2" />
                )}
                <div className="flex flex-col items-center gap-4 min-w-[120px]">
                  <div className="w-12 h-12 rounded-full glass flex items-center justify-center border-cyan-500/30 text-cyan-400 font-mono text-xs shadow-[0_0_15px_rgba(34,211,238,0.1)]">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div className="text-white font-bold text-sm uppercase tracking-wider">{step}</div>
                </div>
             </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
