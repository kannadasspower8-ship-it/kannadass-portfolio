"use client"
import { FadeIn } from "@/components/ui/FadeIn"
import { GlassPanel } from "@/components/ui/GlassPanel"
import { Sparkles, Cpu, Rocket } from "lucide-react"

export function FutureVision() {
  return (
    <section className="relative py-24 px-6 max-w-6xl mx-auto z-10">
      <FadeIn>
        <div className="mb-16 flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">FUTURE VISION</h2>
          <p className="text-slate-400 font-mono text-sm max-w-xl">
            UPCOMING GOALS AND INITIATIVES IN THE DIGITAL ARCHITECTURE SPACE.
          </p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { icon: Cpu, title: "Advanced AI Systems", desc: "Integrating LLMs directly into client websites for automated customer service." },
          { icon: Sparkles, title: "SEO Innovation", desc: "Building proprietary AI-driven content clusters for local market dominance." },
          { icon: Rocket, title: "Automation Products", desc: "Developing plug-and-play SaaS solutions for small businesses." },
        ].map((item, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <GlassPanel intensity="low" className="p-8 text-center flex flex-col items-center gap-4 hover:border-purple-500/30 transition-colors">
              <div className="p-4 rounded-full bg-slate-800/50 text-purple-400 border border-purple-500/20">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">{item.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
            </GlassPanel>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
