"use client"
import { FadeIn } from "@/components/ui/FadeIn"
import { Shield, BrainCircuit, Activity } from "lucide-react"

export function TrustSection() {
  return (
    <section className="relative py-32 px-6 max-w-5xl mx-auto z-10">
      <FadeIn>
        <div className="glass-panel p-10 md:p-16 rounded-3xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
          
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white mb-6 leading-tight">
              BUILT WITH <span className="text-cyan-400">AI.</span><br />
              DELIVERED WITH <span className="text-cyan-400">RESPONSIBILITY.</span>
            </h2>
            
            <div className="w-16 h-1 bg-cyan-500/50 mx-auto rounded-full mb-10" />
            
            <div className="space-y-6 text-lg text-slate-300 font-sans leading-relaxed mb-12 text-left md:text-center">
              <p>
                I use advanced AI tools to accelerate research, planning, development, SEO implementation, workflow optimization, and website creation.
              </p>
              <p>
                AI helps me move faster, but every project is reviewed, refined, tested, optimized, and delivered with human responsibility. My focus is not simply building websites.
              </p>
              <p className="font-semibold text-white">
                My focus is solving business problems, improving online visibility, creating exceptional user experiences, and generating measurable business outcomes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 text-left">
              {[
                { icon: BrainCircuit, text: "AI-Assisted Development" },
                { icon: Shield, text: "Human Quality Control" },
                { icon: Activity, text: "Performance Optimization" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                  <div className="p-2 rounded-lg bg-slate-800 text-cyan-400"><item.icon className="w-5 h-5" /></div>
                  <span className="font-mono text-xs text-white uppercase tracking-wider">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="inline-flex flex-col items-center gap-2 font-mono text-sm">
              <span className="text-slate-400">Technology accelerates execution.</span>
              <span className="text-slate-400">Responsibility creates trust.</span>
              <span className="text-cyan-400 font-bold">Results create growth.</span>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  )
}
